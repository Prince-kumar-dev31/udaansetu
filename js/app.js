// ==========================================================================
// Udaansetu Application Controller
// ==========================================================================

const app = {
  // Application State
  currentUser: null,
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
  selectedCategory: "ssc_cgl",
  selectedSscYear: "all",
  lastResultData: null,

  // Helper
  $: (id) => document.getElementById(id),

  init() {
    // 1. Seed & Load Users & Session
    app.initAuth();

    // 2. Render Available Tests Grid
    app.renderTestsGrid();

    // 3. Set Language Buttons State
    app.updateLangButtonUI();
  },

  // ==================== AUTHENTICATION & SESSION ====================
  initAuth() {
    // Ensure default demo user exists
    let users = [];
    try {
      users = JSON.parse(localStorage.getItem("udaan_users")) || [];
    } catch(e) {
      users = [];
    }

    if (!Array.isArray(users) || users.length === 0) {
      users = [
        {
          id: "u_prince",
          name: "PRINCE",
          mobile: "9876543210",
          email: "princeamit247@gmail.com",
          password: "123456"
        }
      ];
      localStorage.setItem("udaan_users", JSON.stringify(users));
    }

    // Load active session (default to PRINCE on first load)
    const storedSession = localStorage.getItem("udaan_session");
    if (storedSession) {
      try {
        app.currentUser = JSON.parse(storedSession);
      } catch(e) {
        app.currentUser = null;
      }
    } else {
      // Default initial session for seamless experience matching screenshot
      app.currentUser = users[0];
      localStorage.setItem("udaan_session", JSON.stringify(users[0]));
    }

    app.updateUserUI();
  },

  updateUserUI() {
    const chip = app.$("userProfileChip");
    const chipName = app.$("chipUserName");
    const chipAvatar = app.$("chipAvatar");
    const btnLogout = app.$("btnLogout");
    const btnLogin = app.$("btnLogin");
    const greetingTitle = app.$("greetingTitle");
    const greetingSubtitle = app.$("greetingSubtitle");
    const paletteCandidateName = app.$("paletteCandidateName");

    if (app.currentUser) {
      const uName = (app.currentUser.name || "PRINCE").toUpperCase();
      if (chip) chip.classList.remove("hide");
      if (chipName) chipName.textContent = uName;
      if (chipAvatar) chipAvatar.textContent = uName.charAt(0);
      if (btnLogout) btnLogout.classList.remove("hide");
      if (btnLogin) btnLogin.classList.add("hide");

      if (greetingTitle) greetingTitle.innerHTML = `Hello, <span id="candidateName">${uName}</span>`;
      if (greetingSubtitle) greetingSubtitle.textContent = "Pick a test series and start when you are ready. The timer begins as soon as the test opens.";
      if (paletteCandidateName) paletteCandidateName.textContent = uName;
    } else {
      if (chip) chip.classList.add("hide");
      if (btnLogout) btnLogout.classList.add("hide");
      if (btnLogin) btnLogin.classList.remove("hide");

      if (greetingTitle) greetingTitle.innerHTML = `Welcome to Udaansetu`;
      if (greetingSubtitle) greetingSubtitle.textContent = "Sign in with your mobile number or email to save tests, or start practicing any test below directly.";
      if (paletteCandidateName) paletteCandidateName.textContent = "Guest Student";
    }
  },

  openAuthModal(tab = 'login') {
    const modal = app.$("authModal");
    app.switchAuthTab(tab);
    app.clearAuthErrors();
    if (modal) modal.showModal();
  },

  closeAuthModal() {
    const modal = app.$("authModal");
    if (modal) modal.close();
  },

  switchAuthTab(tab) {
    const loginForm = app.$("loginForm");
    const signupForm = app.$("signupForm");
    const tabLoginBtn = app.$("tabLoginBtn");
    const tabSignupBtn = app.$("tabSignupBtn");
    const heading = app.$("authModalHeading");

    app.clearAuthErrors();

    if (tab === 'signup') {
      loginForm.classList.add("hide");
      signupForm.classList.remove("hide");
      tabLoginBtn.classList.remove("active");
      tabSignupBtn.classList.add("active");
      heading.textContent = "Create Udaansetu Account";
    } else {
      signupForm.classList.add("hide");
      loginForm.classList.remove("hide");
      tabSignupBtn.classList.remove("active");
      tabLoginBtn.classList.add("active");
      heading.textContent = "Log in to Udaansetu";
    }
  },

  clearAuthErrors() {
    const errL = app.$("loginError");
    const errS = app.$("signupError");
    const succL = app.$("loginSuccess");
    if (errL) { errL.classList.add("hide"); errL.textContent = ""; }
    if (errS) { errS.classList.add("hide"); errS.textContent = ""; }
    if (succL) { succL.classList.add("hide"); succL.textContent = ""; }
  },

  fillDemoCredentials() {
    app.$("loginIdentifier").value = "9876543210";
    app.$("loginPassword").value = "123456";
  },

  togglePasswordVisibility(inputId, btn) {
    const input = app.$(inputId);
    if (!input) return;
    if (input.type === "password") {
      input.type = "text";
      btn.textContent = "🙈";
    } else {
      input.type = "password";
      btn.textContent = "👁️";
    }
  },

  handleLogin(e) {
    e.preventDefault();
    app.clearAuthErrors();

    const identifier = (app.$("loginIdentifier").value || "").trim();
    const password = (app.$("loginPassword").value || "").trim();
    const errBox = app.$("loginError");

    if (!identifier || !password) {
      errBox.textContent = "Please enter both mobile number/email and password.";
      errBox.classList.remove("hide");
      return;
    }

    let users = [];
    try {
      users = JSON.parse(localStorage.getItem("udaan_users")) || [];
    } catch(err) {
      users = [];
    }

    const normalizedId = identifier.toLowerCase();
    const foundUser = users.find(u => {
      const matchMobile = u.mobile && u.mobile === identifier;
      const matchEmail = u.email && u.email.toLowerCase() === normalizedId;
      const matchGeneral = u.identifier && u.identifier.toLowerCase() === normalizedId;
      return (matchMobile || matchEmail || matchGeneral) && u.password === password;
    });

    if (foundUser) {
      app.currentUser = foundUser;
      localStorage.setItem("udaan_session", JSON.stringify(foundUser));
      app.updateUserUI();
      app.closeAuthModal();
    } else {
      errBox.textContent = "Invalid mobile number/email or password. Try 9876543210 / 123456 or sign up.";
      errBox.classList.remove("hide");
    }
  },

  handleSignup(e) {
    e.preventDefault();
    app.clearAuthErrors();

    const name = (app.$("signupName").value || "").trim();
    const identifier = (app.$("signupIdentifier").value || "").trim();
    const password = (app.$("signupPassword").value || "").trim();
    const confirmPassword = (app.$("signupConfirmPassword").value || "").trim();
    const errBox = app.$("signupError");

    if (!name || !identifier || !password) {
      errBox.textContent = "Please fill out all required fields.";
      errBox.classList.remove("hide");
      return;
    }

    if (password.length < 4) {
      errBox.textContent = "Password must be at least 4 characters long.";
      errBox.classList.remove("hide");
      return;
    }

    if (password !== confirmPassword) {
      errBox.textContent = "Passwords do not match. Please re-enter.";
      errBox.classList.remove("hide");
      return;
    }

    let users = [];
    try {
      users = JSON.parse(localStorage.getItem("udaan_users")) || [];
    } catch(err) {
      users = [];
    }

    const normalizedId = identifier.toLowerCase();
    const exists = users.some(u => 
      (u.mobile && u.mobile === identifier) || 
      (u.email && u.email.toLowerCase() === normalizedId) ||
      (u.identifier && u.identifier.toLowerCase() === normalizedId)
    );

    if (exists) {
      errBox.textContent = "An account with this mobile number or email already exists. Please log in.";
      errBox.classList.remove("hide");
      return;
    }

    const isEmail = identifier.includes("@");
    const newUser = {
      id: "u_" + Date.now(),
      name: name,
      mobile: isEmail ? "" : identifier,
      email: isEmail ? identifier : "",
      identifier: identifier,
      password: password
    };

    users.push(newUser);
    localStorage.setItem("udaan_users", JSON.stringify(users));

    app.currentUser = newUser;
    localStorage.setItem("udaan_session", JSON.stringify(newUser));
    app.updateUserUI();
    app.closeAuthModal();
  },

  confirmLogout() {
    const modal = app.$("logoutModal");
    if (modal) modal.showModal();
  },

  closeLogoutModal() {
    const modal = app.$("logoutModal");
    if (modal) modal.close();
  },

  doLogout() {
    localStorage.removeItem("udaan_session");
    app.currentUser = null;
    app.updateUserUI();
    app.closeLogoutModal();
  },

  // ==================== CATEGORY & YEAR FILTERING ====================
  setCategory(cat, btnEl) {
    app.selectedCategory = cat;
    document.querySelectorAll(".cat-pill").forEach(p => p.classList.remove("active"));
    if (btnEl) btnEl.classList.add("active");

    const yearBar = app.$("sscYearFilterBar");
    const heading = app.$("testsSectionHeading");

    if (cat === "ssc_cgl") {
      if (yearBar) yearBar.classList.remove("hide");
      if (heading) heading.textContent = "SSC CGL 5-Year Previous Exam Series (2020-2024)";
    } else {
      if (yearBar) yearBar.classList.add("hide");
      if (heading) {
        if (cat === "general") heading.textContent = "Quick General Mock Tests";
        else heading.textContent = "Available tests";
      }
    }

    app.renderTestsGrid();
  },

  setSscYear(year, btnEl) {
    app.selectedSscYear = year;
    document.querySelectorAll(".year-pill").forEach(p => p.classList.remove("active"));
    if (btnEl) btnEl.classList.add("active");

    app.renderTestsGrid();
  },

  // ==================== TESTS GRID RENDERING ====================
  renderTestsGrid() {
    const grid = app.$("testsGrid");
    const badge = app.$("testsCountBadge");
    if (!grid) return;
    grid.innerHTML = "";

    let filteredExams = APP_DATA.exams;

    // Filter by Category
    if (app.selectedCategory === "general") {
      filteredExams = filteredExams.filter(e => e.category !== "ssc_cgl" || e.id === "ssc_ga_maths");
    } else if (app.selectedCategory !== "all") {
      filteredExams = filteredExams.filter(e => e.category === app.selectedCategory);
    }

    // Filter by SSC Year
    if (app.selectedCategory === "ssc_cgl" && app.selectedSscYear !== "all") {
      filteredExams = filteredExams.filter(e => e.year === app.selectedSscYear);
    }

    if (badge) {
      badge.textContent = `Showing ${filteredExams.length} tests`;
    }

    if (filteredExams.length === 0) {
      grid.innerHTML = `<div style="grid-column: 1 / -1; padding: 40px; text-align: center; color: var(--text-muted); background: #ffffff; border-radius: 12px; border: 1px dashed #cbd5e1;">No test series found for the selected filter.</div>`;
      return;
    }

    filteredExams.forEach(exam => {
      const card = document.createElement("article");
      card.className = "test-card";

      const yearBadge = exam.year ? `<span class="test-year-badge">${exam.year} PYQ</span>` : "";

      card.innerHTML = `
        <div class="card-top">
          ${yearBadge}
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
