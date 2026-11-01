// ==========================================================================
// Udaansetu Application Controller
// ==========================================================================

const app = {
  // Application State
  candidateName: localStorage.getItem("udaan_candidate") || "PRINCE",
  lang: localStorage.getItem("udaan_lang") || "en",
  activeExam: null,
  questions: [],
  currentQIndex: 0,
  userAnswers: [],
  reviewFlags: [],
  visitedFlags: [],
  timerRemaining: 0,
  timerTotal: 0,
  timerInterval: null,
  examStartTime: null,
  solutionFilter: "all",
  lastResultData: null,

  // Helper
  $: (id) => document.getElementById(id),

  init() {
    // 1. Display Candidate Name
    app.updateCandidateDisplay();

    // 2. Render Available Tests Grid
    app.renderTestsGrid();

    // 3. Set Language Buttons State
    app.updateLangButtonUI();
  },

  // ==================== CANDIDATE DISPLAY & PROFILE ====================
  updateCandidateDisplay() {
    const el1 = app.$("candidateName");
    const el2 = app.$("paletteCandidateName");
    const inp = app.$("inputCandidateName");

    if (el1) el1.textContent = app.candidateName;
    if (el2) el2.textContent = app.candidateName;
    if (inp) inp.value = app.candidateName;
  },

  openProfileModal() {
    const modal = app.$("profileModal");
    if (modal) {
      app.$("inputCandidateName").value = app.candidateName;
      modal.showModal();
    }
  },

  closeProfileModal() {
    const modal = app.$("profileModal");
    if (modal) modal.close();
  },

  saveProfileName() {
    const inp = app.$("inputCandidateName");
    const newName = inp.value.trim();
    if (newName) {
      app.candidateName = newName;
      localStorage.setItem("udaan_candidate", newName);
      app.updateCandidateDisplay();
    }
    app.closeProfileModal();
  },

  doLogout() {
    localStorage.removeItem("udaan_candidate");
    app.candidateName = "PRINCE";
    app.updateCandidateDisplay();
    app.closeProfileModal();
    alert("Logged out successfully! Candidate profile reset to PRINCE.");
  },

  // ==================== TESTS GRID RENDERING ====================
  renderTestsGrid() {
    const grid = app.$("testsGrid");
    if (!grid) return;
    grid.innerHTML = "";

    APP_DATA.exams.forEach(exam => {
      const card = document.createElement("article");
      card.className = "test-card";
      card.innerHTML = `
        <div class="card-top">
          <h3 class="card-title">${exam.title}</h3>
          <p class="card-subtitle">${exam.subtitle}</p>
          <div class="card-meta">
            <span>${exam.metaQuestions}</span> · <span>${exam.metaDuration}</span>
          </div>
        </div>
        <button class="btn-start-test" onclick="app.startExam('${exam.id}')">Start test</button>
      `;
      grid.appendChild(card);
    });
  },

  // ==================== VIEW SWITCHING ====================
  showHomeView() {
    app.stopTimer();
    app.$("homeView").style.display = "block";
    app.$("examView").style.display = "none";
    app.$("resultsView").style.display = "none";
    window.scrollTo({ top: 0, behavior: "smooth" });
  },

  showExamView() {
    app.$("homeView").style.display = "none";
    app.$("examView").style.display = "flex";
    app.$("resultsView").style.display = "none";
    window.scrollTo({ top: 0, behavior: "smooth" });
  },

  showResultsView() {
    app.stopTimer();
    app.$("homeView").style.display = "none";
    app.$("examView").style.display = "none";
    app.$("resultsView").style.display = "block";
    window.scrollTo({ top: 0, behavior: "smooth" });
  },

  // ==================== CBT EXAM ENGINE ====================
  startExam(examId) {
    const exam = APP_DATA.exams.find(e => e.id === examId);
    if (!exam) return;

    app.activeExam = exam;
    app.questions = APP_DATA.questions[examId] || [];

    // Reset CBT State
    const totalQ = app.questions.length;
    app.currentQIndex = 0;
    app.userAnswers = new Array(totalQ).fill(null);
    app.reviewFlags = new Array(totalQ).fill(false);
    app.visitedFlags = new Array(totalQ).fill(false);
    app.visitedFlags[0] = true; // Mark Q1 as visited

    // Header Details
    app.$("activeExamTitle").textContent = exam.title;
    app.$("activeExamMeta").textContent = `${exam.subtitle} · ${exam.metaQuestions}`;

    // Switch view
    app.showExamView();

    // Start Timer
    app.timerTotal = exam.durationMinutes * 60;
    app.timerRemaining = app.timerTotal;
    app.examStartTime = Date.now();
    app.startTimer();

    // Render first question & palette
    app.renderQuestion();
    app.renderPalette();
  },

  startTimer() {
    app.stopTimer();
    app.updateTimerUI();

    app.timerInterval = setInterval(() => {
      app.timerRemaining--;
      app.updateTimerUI();

      if (app.timerRemaining <= 0) {
        app.stopTimer();
        alert("Time is up! Your test will be submitted automatically.");
        app.submitExam();
      }
    }, 1000);
  },

  stopTimer() {
    if (app.timerInterval) {
      clearInterval(app.timerInterval);
      app.timerInterval = null;
    }
  },

  updateTimerUI() {
    const timerText = app.$("timerText");
    const timerDisplay = app.$("timerDisplay");
    if (!timerText) return;

    const mins = Math.floor(app.timerRemaining / 60);
    const secs = app.timerRemaining % 60;
    timerText.textContent = `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;

    if (app.timerRemaining <= 120) {
      timerDisplay.classList.add("timer-warning");
    } else {
      timerDisplay.classList.remove("timer-warning");
    }
  },

  // ==================== QUESTION & OPTIONS RENDERING ====================
  renderQuestion() {
    const q = app.questions[app.currentQIndex];
    if (!q) return;

    app.visitedFlags[app.currentQIndex] = true;

    // 1. Labels
    const totalQ = app.questions.length;
    app.$("qNumberLabel").textContent = `Question ${app.currentQIndex + 1} of ${totalQ} ${q.subject ? `(${q.subject})` : ""}`;
    app.$("qMarksLabel").textContent = `+${app.activeExam.marking.positive} / -${app.activeExam.marking.negative} Marks`;

    // 2. Question Text (Bilingual support)
    const qText = (q.q && (q.q[app.lang] || q.q.en)) || "";
    app.$("qTextContent").textContent = qText;

    // 3. Options
    const optContainer = app.$("optionsContainer");
    optContainer.innerHTML = "";

    const selectedOpt = app.userAnswers[app.currentQIndex];

    q.o.forEach((optObj, idx) => {
      const optText = typeof optObj === "string" ? optObj : (optObj[app.lang] || optObj.en);
      const isSelected = selectedOpt === idx;

      const optDiv = document.createElement("div");
      optDiv.className = `option-item ${isSelected ? "selected" : ""}`;
      optDiv.onclick = () => app.selectOption(idx);

      optDiv.innerHTML = `
        <div class="option-radio"></div>
        <div class="option-text">${optText}</div>
      `;
      optContainer.appendChild(optDiv);
    });

    // 4. Update Navigation Buttons
    const btnPrev = app.$("btnPrev");
    const btnNext = app.$("btnNext");

    if (btnPrev) {
      btnPrev.disabled = app.currentQIndex === 0;
      btnPrev.style.opacity = app.currentQIndex === 0 ? "0.5" : "1";
    }

    if (btnNext) {
      btnNext.textContent = app.currentQIndex === totalQ - 1 ? "Save & Submit →" : "Save & Next →";
    }

    app.renderPalette();
  },

  selectOption(idx) {
    app.userAnswers[app.currentQIndex] = idx;
    app.renderQuestion();
  },

  clearCurrentOption() {
    app.userAnswers[app.currentQIndex] = null;
    app.renderQuestion();
  },

  prevQuestion() {
    if (app.currentQIndex > 0) {
      app.currentQIndex--;
      app.renderQuestion();
    }
  },

  saveAndNext() {
    const totalQ = app.questions.length;
    if (app.currentQIndex < totalQ - 1) {
      app.currentQIndex++;
      app.renderQuestion();
    } else {
      app.confirmSubmit();
    }
  },

  markForReviewAndNext() {
    app.reviewFlags[app.currentQIndex] = true;
    app.saveAndNext();
  },

  jumpToQuestion(idx) {
    if (idx >= 0 && idx < app.questions.length) {
      app.currentQIndex = idx;
      app.renderQuestion();
    }
  },

  // ==================== PALETTE RENDERING ====================
  renderPalette() {
    const palette = app.$("paletteGrid");
    if (!palette) return;
    palette.innerHTML = "";

    app.questions.forEach((q, idx) => {
      const btn = document.createElement("button");
      btn.className = "palette-btn";
      btn.textContent = idx + 1;

      // Determine Status Class
      const isAnswered = app.userAnswers[idx] !== null;
      const isReview = app.reviewFlags[idx];
      const isVisited = app.visitedFlags[idx];

      if (isReview) {
        btn.classList.add("status-review");
      } else if (isAnswered) {
        btn.classList.add("status-answered");
      } else if (isVisited) {
        btn.classList.add("status-not-answered");
      } else {
        btn.classList.add("status-not-visited");
      }

      if (idx === app.currentQIndex) {
        btn.classList.add("active-q");
      }

      btn.onclick = () => app.jumpToQuestion(idx);
      palette.appendChild(btn);
    });
  },

  // ==================== LANGUAGE SWITCHING ====================
  setLanguage(lang) {
    app.lang = lang;
    localStorage.setItem("udaan_lang", lang);
    app.updateLangButtonUI();

    // Re-render current question if exam view active
    if (app.$("examView").style.display === "flex") {
      app.renderQuestion();
    }

    // Re-render solutions if results view active
    if (app.$("resultsView").style.display === "block" && app.lastResultData) {
      app.renderSolutions();
    }
  },

  updateLangButtonUI() {
    const btnEn = app.$("langEnBtn");
    const btnHi = app.$("langHiBtn");
    if (btnEn && btnHi) {
      if (app.lang === "hi") {
        btnHi.classList.add("active");
        btnEn.classList.remove("active");
      } else {
        btnEn.classList.add("active");
        btnHi.classList.remove("active");
      }
    }
  },

  // ==================== SUBMIT & CONFIRMATION ====================
  confirmSubmit() {
    const modal = app.$("confirmModal");
    const summaryText = app.$("confirmSummaryText");
    const total = app.questions.length;
    const answeredCount = app.userAnswers.filter(a => a !== null).length;
    const reviewCount = app.reviewFlags.filter(r => r).length;

    summaryText.innerHTML = `
      You have answered <b>${answeredCount}</b> of <b>${total}</b> questions.<br>
      Marked for review: <b>${reviewCount}</b>.<br><br>
      Are you sure you want to finish and submit your test?
    `;

    if (modal) modal.showModal();
  },

  closeConfirmModal() {
    const modal = app.$("confirmModal");
    if (modal) modal.close();
  },

  submitExam() {
    app.closeConfirmModal();
    app.stopTimer();

    // Calculate score
    const totalQuestions = app.questions.length;
    let correctCount = 0;
    let incorrectCount = 0;
    let unattemptedCount = 0;
    let totalScore = 0;

    const posMarks = app.activeExam.marking.positive;
    const negMarks = app.activeExam.marking.negative;

    app.questions.forEach((q, idx) => {
      const userAns = app.userAnswers[idx];
      if (userAns === null) {
        unattemptedCount++;
      } else if (userAns === q.a) {
        correctCount++;
        totalScore += posMarks;
      } else {
        incorrectCount++;
        totalScore -= negMarks;
      }
    });

    const attemptedCount = correctCount + incorrectCount;
    const accuracy = attemptedCount > 0 ? Math.round((correctCount / attemptedCount) * 100) : 0;
    const maxScore = totalQuestions * posMarks;

    const timeSpentSecs = app.timerTotal - app.timerRemaining;
    const spentMins = Math.floor(timeSpentSecs / 60);
    const spentSecs = timeSpentSecs % 60;
    const formattedTime = `${spentMins.toString().padStart(2, "0")}:${spentSecs.toString().padStart(2, "0")}`;

    app.lastResultData = {
      examTitle: app.activeExam.title,
      totalScore: Math.max(0, totalScore),
      maxScore: maxScore,
      accuracy: accuracy,
      attemptedCount: attemptedCount,
      totalQuestions: totalQuestions,
      correctCount: correctCount,
      incorrectCount: incorrectCount,
      unattemptedCount: unattemptedCount,
      formattedTime: formattedTime
    };

    // Render results
    app.$("resExamTitle").textContent = `${app.activeExam.title} Scorecard`;
    app.$("resScore").textContent = `${totalScore} / ${maxScore}`;
    app.$("resAccuracy").textContent = `${accuracy}%`;
    app.$("resAttempted").textContent = `${attemptedCount} / ${totalQuestions}`;
    app.$("resTimeSpent").textContent = formattedTime;

    app.solutionFilter = "all";
    app.renderSolutions();
    app.showResultsView();
  },

  retakeCurrentExam() {
    if (app.activeExam) {
      app.startExam(app.activeExam.id);
    }
  },

  // ==================== SOLUTIONS RENDERING ====================
  filterSolutions(filterType, btnEl) {
    app.solutionFilter = filterType;

    // Update active tab button
    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    if (btnEl) btnEl.classList.add("active");

    app.renderSolutions();
  },

  renderSolutions() {
    const container = app.$("solutionsList");
    if (!container) return;
    container.innerHTML = "";

    app.questions.forEach((q, idx) => {
      const userAns = app.userAnswers[idx];
      const isCorrect = userAns === q.a;
      const isSkipped = userAns === null;

      // Filter check
      if (app.solutionFilter === "correct" && !isCorrect) return;
      if (app.solutionFilter === "incorrect" && (isCorrect || isSkipped)) return;
      if (app.solutionFilter === "skipped" && !isSkipped) return;

      const card = document.createElement("div");
      card.className = "solution-item";

      let statusBadge = "";
      if (isCorrect) {
        statusBadge = `<span class="sol-badge correct">✓ Correct (+${app.activeExam.marking.positive})</span>`;
      } else if (isSkipped) {
        statusBadge = `<span class="sol-badge skipped">⚪ Unattempted (0)</span>`;
      } else {
        statusBadge = `<span class="sol-badge incorrect">✕ Incorrect (-${app.activeExam.marking.negative})</span>`;
      }

      const qText = (q.q && (q.q[app.lang] || q.q.en)) || "";
      const explanationText = (q.exp && (q.exp[app.lang] || q.exp.en)) || "No detailed explanation available.";

      const optionsHtml = q.o.map((opt, oIdx) => {
        const text = typeof opt === "string" ? opt : (opt[app.lang] || opt.en);
        const isRightAnswer = oIdx === q.a;
        const isUserChoice = oIdx === userAns;

        let style = "border: 1px solid #e2e8f0; border-radius: 8px; padding: 10px 14px; margin-bottom: 8px; font-size: 14px;";
        let marker = "";

        if (isRightAnswer) {
          style += "background:#dcfce7; border-color:#86efac; color:#14532d; font-weight:600;";
          marker = " <b>(Correct Answer)</b>";
        } else if (isUserChoice) {
          style += "background:#fee2e2; border-color:#fca5a5; color:#7f1d1d; font-weight:600;";
          marker = " <b>(Your Answer)</b>";
        }

        return `<div style="${style}">${String.fromCharCode(65 + oIdx)}. ${text}${marker}</div>`;
      }).join("");

      card.innerHTML = `
        <div class="sol-header">
          <span>Question ${idx + 1} ${q.subject ? `(${q.subject})` : ""}</span>
          ${statusBadge}
        </div>
        <div style="font-size:15px; font-weight:600; margin-bottom:14px; color:#0f172a; white-space:pre-line;">
          ${qText}
        </div>
        <div style="margin-bottom:14px;">
          ${optionsHtml}
        </div>
        <div class="sol-explanation">
          <b>💡 Step-by-Step Explanation:</b><br>
          <span style="white-space: pre-line;">${explanationText}</span>
        </div>
      `;

      container.appendChild(card);
    });
  }
};

// Initialize when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  app.init();
});
