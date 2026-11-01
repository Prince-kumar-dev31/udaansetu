# Udaansetu (उड़ानसेतु) - Online Mock Test Portal

**Udaansetu** is a modern, high-performance web platform for competitive exam preparation (JEE Main, NEET Biology, SSC General Awareness & Maths, and Quantitative Aptitude Sets 1, 2 & 3).

---

## 🌟 Features

1. **Pixel-Perfect Dashboard**:
   - Clean top navigation with "Udaansetu" brand and "Log out" button.
   - Candidate greeting: "Hello, PRINCE" with profile customization.
   - 6 responsive test cards matching the exact design and metadata from the reference interface.

2. **Full Computer Based Test (CBT) Engine**:
   - **JEE Main Mock 1** (Physics, Chemistry & Maths · 4 questions · 10 minutes)
   - **NEET Biology Quick Test** (Cell biology & genetics · 4 questions · 8 minutes)
   - **SSC General Awareness and Maths** (Reasoning, GK & arithmetic · 4 questions · 8 minutes)
   - **Quantitative Aptitude – Set 1, 2 & 3** (100 questions / Speed drills · 60 minutes)
   - Real-time countdown timer with urgent visual warning in the final 2 minutes.
   - Interactive question palette (Answered, Not Answered, Marked for Review, Not Visited).
   - Instant language switching (English ⇄ हिन्दी) per question.

3. **In-Depth Performance Analytics & Solutions**:
   - Marking engine (+4 / -1 for JEE/NEET, +2 / -0.5 for SSC & Aptitude).
   - Scorecard with Score, Accuracy %, Attempted / Total, and Time Spent.
   - Filterable solution review (All, Correct, Incorrect, Unattempted).
   - Step-by-step scientific and mathematical explanations for every question.

---

## 🚀 How to Run the Website

### Option 1: Direct in Browser
Double-click or open `index.html` in Chrome, Edge, Firefox, Brave, or Safari.

### Option 2: Local HTTP Server
Run in PowerShell:
```powershell
python -m http.server 3000
```
Then visit `http://localhost:3000` in your web browser.

---

## 📂 Project Structure

```
udaansetu/
├── index.html        # Pre-rendered clean semantic layout, exam view & results view
├── css/
│   └── style.css     # Clean styles, card grid, CBT palette, responsive breakpoints
├── js/
│   ├── data.js       # All 6 test series, real questions, options & step-by-step solutions
│   └── app.js        # CBT engine, timers, scoring, state management & modal handlers
└── README.md         # Documentation
```
