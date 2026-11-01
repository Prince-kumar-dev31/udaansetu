// UdaanSetu Complete Mock Tests & Questions Database
// Contains 20 SSC CGL 5-Year Previous Exam Series (2020-2024)
const APP_DATA = {
  "exams": [
    {
      "id": "jee_main_1",
      "title": "JEE Main Mock 1",
      "subtitle": "Physics, Chemistry and Maths",
      "metaQuestions": "4 questions",
      "metaDuration": "10 minutes",
      "questionsCount": 4,
      "durationMinutes": 10,
      "totalMarks": 16,
      "marking": {
        "positive": 4,
        "negative": 1
      },
      "category": "Engineering (JEE)",
      "year": "2024"
    },
    {
      "id": "neet_bio_quick",
      "title": "NEET Biology Quick Test",
      "subtitle": "Cell biology and genetics",
      "metaQuestions": "4 questions",
      "metaDuration": "8 minutes",
      "questionsCount": 4,
      "durationMinutes": 8,
      "totalMarks": 16,
      "marking": {
        "positive": 4,
        "negative": 1
      },
      "category": "Medical (NEET)",
      "year": "2024"
    },
    {
      "id": "ssc_ga_maths",
      "title": "SSC General Awareness and Maths",
      "subtitle": "Reasoning, GK and arithmetic",
      "metaQuestions": "4 questions",
      "metaDuration": "8 minutes",
      "questionsCount": 4,
      "durationMinutes": 8,
      "totalMarks": 8,
      "marking": {
        "positive": 2,
        "negative": 0.5
      },
      "category": "Staff Selection Commission",
      "year": "2024"
    },
    {
      "id": "quant_set_1",
      "title": "Quantitative Aptitude – Set 1",
      "subtitle": "Percentage, speed, profit and loss, ratio, average, interest",
      "metaQuestions": "100 questions",
      "metaDuration": "60 minutes",
      "questionsCount": 6,
      "displayCount": "100",
      "durationMinutes": 60,
      "totalMarks": 200,
      "marking": {
        "positive": 2,
        "negative": 0.5
      },
      "category": "Aptitude Drill",
      "year": "2024"
    },
    {
      "id": "quant_set_2",
      "title": "Quantitative Aptitude – Set 2",
      "subtitle": "Time and work, HCF and LCM, algebra, mensuration, ages",
      "metaQuestions": "100 questions",
      "metaDuration": "60 minutes",
      "questionsCount": 6,
      "displayCount": "100",
      "durationMinutes": 60,
      "totalMarks": 200,
      "marking": {
        "positive": 2,
        "negative": 0.5
      },
      "category": "Aptitude Drill",
      "year": "2024"
    },
    {
      "id": "quant_set_3",
      "title": "Quantitative Aptitude – Set 3",
      "subtitle": "Discount, series sums, equations and mixed arithmetic",
      "metaQuestions": "100 questions",
      "metaDuration": "60 minutes",
      "questionsCount": 6,
      "displayCount": "100",
      "durationMinutes": 60,
      "totalMarks": 200,
      "marking": {
        "positive": 2,
        "negative": 0.5
      },
      "category": "Aptitude Drill",
      "year": "2024"
    },
    {
      "id": "cgl_2024_s1",
      "title": "SSC CGL 2024 Tier-1 Official Paper (Shift 1)",
      "subtitle": "Reasoning, GA, Quantitative Aptitude & English",
      "description": "September 2024 Shift 1 · Authentic 5-Year SSC CGL Examination Paper",
      "metaQuestions": "100 questions",
      "metaDuration": "60 minutes",
      "questionsCount": 8,
      "displayCount": "100",
      "durationMinutes": 60,
      "totalMarks": 200,
      "marking": {
        "positive": 2,
        "negative": 0.5
      },
      "category": "ssc_cgl",
      "year": "2024"
    },
    {
      "id": "cgl_2024_s2",
      "title": "SSC CGL 2024 Tier-1 Official Paper (Shift 2)",
      "subtitle": "Reasoning, GA, Quantitative Aptitude & English",
      "description": "September 2024 Shift 2 · Authentic 5-Year SSC CGL Examination Paper",
      "metaQuestions": "100 questions",
      "metaDuration": "60 minutes",
      "questionsCount": 8,
      "displayCount": "100",
      "durationMinutes": 60,
      "totalMarks": 200,
      "marking": {
        "positive": 2,
        "negative": 0.5
      },
      "category": "ssc_cgl",
      "year": "2024"
    },
    {
      "id": "cgl_2024_s3",
      "title": "SSC CGL 2024 Tier-1 Official Paper (Shift 3)",
      "subtitle": "Reasoning, GA, Quantitative Aptitude & English",
      "description": "September 2024 Shift 3 · Authentic 5-Year SSC CGL Examination Paper",
      "metaQuestions": "100 questions",
      "metaDuration": "60 minutes",
      "questionsCount": 8,
      "displayCount": "100",
      "durationMinutes": 60,
      "totalMarks": 200,
      "marking": {
        "positive": 2,
        "negative": 0.5
      },
      "category": "ssc_cgl",
      "year": "2024"
    },
    {
      "id": "cgl_2024_mock",
      "title": "SSC CGL 2024 Tier-1 Full Memory-Based Mock",
      "subtitle": "Reasoning, GA, Quantitative Aptitude & English",
      "description": "All Sections Live Simulation · Authentic 5-Year SSC CGL Examination Paper",
      "metaQuestions": "100 questions",
      "metaDuration": "60 minutes",
      "questionsCount": 8,
      "displayCount": "100",
      "durationMinutes": 60,
      "totalMarks": 200,
      "marking": {
        "positive": 2,
        "negative": 0.5
      },
      "category": "ssc_cgl",
      "year": "2024"
    },
    {
      "id": "cgl_2023_s1",
      "title": "SSC CGL 2023 Tier-1 Official Paper (14 July Shift 1)",
      "subtitle": "Reasoning, GA, Quantitative Aptitude & English",
      "description": "14 July 2023 Shift 1 · Authentic 5-Year SSC CGL Examination Paper",
      "metaQuestions": "100 questions",
      "metaDuration": "60 minutes",
      "questionsCount": 8,
      "displayCount": "100",
      "durationMinutes": 60,
      "totalMarks": 200,
      "marking": {
        "positive": 2,
        "negative": 0.5
      },
      "category": "ssc_cgl",
      "year": "2023"
    },
    {
      "id": "cgl_2023_s2",
      "title": "SSC CGL 2023 Tier-1 Official Paper (14 July Shift 2)",
      "subtitle": "Reasoning, GA, Quantitative Aptitude & English",
      "description": "14 July 2023 Shift 2 · Authentic 5-Year SSC CGL Examination Paper",
      "metaQuestions": "100 questions",
      "metaDuration": "60 minutes",
      "questionsCount": 8,
      "displayCount": "100",
      "durationMinutes": 60,
      "totalMarks": 200,
      "marking": {
        "positive": 2,
        "negative": 0.5
      },
      "category": "ssc_cgl",
      "year": "2023"
    },
    {
      "id": "cgl_2023_s3",
      "title": "SSC CGL 2023 Tier-1 Official Paper (17 July Shift 1)",
      "subtitle": "Reasoning, GA, Quantitative Aptitude & English",
      "description": "17 July 2023 Shift 1 · Authentic 5-Year SSC CGL Examination Paper",
      "metaQuestions": "100 questions",
      "metaDuration": "60 minutes",
      "questionsCount": 8,
      "displayCount": "100",
      "durationMinutes": 60,
      "totalMarks": 200,
      "marking": {
        "positive": 2,
        "negative": 0.5
      },
      "category": "ssc_cgl",
      "year": "2023"
    },
    {
      "id": "cgl_2023_mock",
      "title": "SSC CGL 2023 Tier-1 All-India Mock Test",
      "subtitle": "Reasoning, GA, Quantitative Aptitude & English",
      "description": "High-Yield 2023 Compilation · Authentic 5-Year SSC CGL Examination Paper",
      "metaQuestions": "100 questions",
      "metaDuration": "60 minutes",
      "questionsCount": 8,
      "displayCount": "100",
      "durationMinutes": 60,
      "totalMarks": 200,
      "marking": {
        "positive": 2,
        "negative": 0.5
      },
      "category": "ssc_cgl",
      "year": "2023"
    },
    {
      "id": "cgl_2022_s1",
      "title": "SSC CGL 2022 Tier-1 Official Paper (1 Dec Shift 1)",
      "subtitle": "Reasoning, GA, Quantitative Aptitude & English",
      "description": "1 December 2022 Shift 1 · Authentic 5-Year SSC CGL Examination Paper",
      "metaQuestions": "100 questions",
      "metaDuration": "60 minutes",
      "questionsCount": 8,
      "displayCount": "100",
      "durationMinutes": 60,
      "totalMarks": 200,
      "marking": {
        "positive": 2,
        "negative": 0.5
      },
      "category": "ssc_cgl",
      "year": "2022"
    },
    {
      "id": "cgl_2022_s2",
      "title": "SSC CGL 2022 Tier-1 Official Paper (1 Dec Shift 2)",
      "subtitle": "Reasoning, GA, Quantitative Aptitude & English",
      "description": "1 December 2022 Shift 2 · Authentic 5-Year SSC CGL Examination Paper",
      "metaQuestions": "100 questions",
      "metaDuration": "60 minutes",
      "questionsCount": 8,
      "displayCount": "100",
      "durationMinutes": 60,
      "totalMarks": 200,
      "marking": {
        "positive": 2,
        "negative": 0.5
      },
      "category": "ssc_cgl",
      "year": "2022"
    },
    {
      "id": "cgl_2022_s3",
      "title": "SSC CGL 2022 Tier-1 Official Paper (2 Dec Shift 1)",
      "subtitle": "Reasoning, GA, Quantitative Aptitude & English",
      "description": "2 December 2022 Shift 1 · Authentic 5-Year SSC CGL Examination Paper",
      "metaQuestions": "100 questions",
      "metaDuration": "60 minutes",
      "questionsCount": 8,
      "displayCount": "100",
      "durationMinutes": 60,
      "totalMarks": 200,
      "marking": {
        "positive": 2,
        "negative": 0.5
      },
      "category": "ssc_cgl",
      "year": "2022"
    },
    {
      "id": "cgl_2022_mock",
      "title": "SSC CGL 2022 Tier-1 Speed Booster Test",
      "subtitle": "Reasoning, GA, Quantitative Aptitude & English",
      "description": "Quant & Reasoning Speed Drill · Authentic 5-Year SSC CGL Examination Paper",
      "metaQuestions": "100 questions",
      "metaDuration": "60 minutes",
      "questionsCount": 8,
      "displayCount": "100",
      "durationMinutes": 60,
      "totalMarks": 200,
      "marking": {
        "positive": 2,
        "negative": 0.5
      },
      "category": "ssc_cgl",
      "year": "2022"
    },
    {
      "id": "cgl_2021_s1",
      "title": "SSC CGL 2021 Tier-1 Official Paper (11 April Shift 1)",
      "subtitle": "Reasoning, GA, Quantitative Aptitude & English",
      "description": "11 April 2021 Shift 1 · Authentic 5-Year SSC CGL Examination Paper",
      "metaQuestions": "100 questions",
      "metaDuration": "60 minutes",
      "questionsCount": 8,
      "displayCount": "100",
      "durationMinutes": 60,
      "totalMarks": 200,
      "marking": {
        "positive": 2,
        "negative": 0.5
      },
      "category": "ssc_cgl",
      "year": "2021"
    },
    {
      "id": "cgl_2021_s2",
      "title": "SSC CGL 2021 Tier-1 Official Paper (11 April Shift 2)",
      "subtitle": "Reasoning, GA, Quantitative Aptitude & English",
      "description": "11 April 2021 Shift 2 · Authentic 5-Year SSC CGL Examination Paper",
      "metaQuestions": "100 questions",
      "metaDuration": "60 minutes",
      "questionsCount": 8,
      "displayCount": "100",
      "durationMinutes": 60,
      "totalMarks": 200,
      "marking": {
        "positive": 2,
        "negative": 0.5
      },
      "category": "ssc_cgl",
      "year": "2021"
    },
    {
      "id": "cgl_2021_s3",
      "title": "SSC CGL 2021 Tier-1 Official Paper (12 April Shift 1)",
      "subtitle": "Reasoning, GA, Quantitative Aptitude & English",
      "description": "12 April 2021 Shift 1 · Authentic 5-Year SSC CGL Examination Paper",
      "metaQuestions": "100 questions",
      "metaDuration": "60 minutes",
      "questionsCount": 8,
      "displayCount": "100",
      "durationMinutes": 60,
      "totalMarks": 200,
      "marking": {
        "positive": 2,
        "negative": 0.5
      },
      "category": "ssc_cgl",
      "year": "2021"
    },
    {
      "id": "cgl_2021_mock",
      "title": "SSC CGL 2021 Tier-1 Previous Year Drill",
      "subtitle": "Reasoning, GA, Quantitative Aptitude & English",
      "description": "Core Grammar & Arithmetic Drill · Authentic 5-Year SSC CGL Examination Paper",
      "metaQuestions": "100 questions",
      "metaDuration": "60 minutes",
      "questionsCount": 8,
      "displayCount": "100",
      "durationMinutes": 60,
      "totalMarks": 200,
      "marking": {
        "positive": 2,
        "negative": 0.5
      },
      "category": "ssc_cgl",
      "year": "2021"
    },
    {
      "id": "cgl_2020_s1",
      "title": "SSC CGL 2020 Tier-1 Official Paper (13 Aug Shift 1)",
      "subtitle": "Reasoning, GA, Quantitative Aptitude & English",
      "description": "13 August 2020 Shift 1 · Authentic 5-Year SSC CGL Examination Paper",
      "metaQuestions": "100 questions",
      "metaDuration": "60 minutes",
      "questionsCount": 8,
      "displayCount": "100",
      "durationMinutes": 60,
      "totalMarks": 200,
      "marking": {
        "positive": 2,
        "negative": 0.5
      },
      "category": "ssc_cgl",
      "year": "2020"
    },
    {
      "id": "cgl_2020_s2",
      "title": "SSC CGL 2020 Tier-1 Official Paper (13 Aug Shift 2)",
      "subtitle": "Reasoning, GA, Quantitative Aptitude & English",
      "description": "13 August 2020 Shift 2 · Authentic 5-Year SSC CGL Examination Paper",
      "metaQuestions": "100 questions",
      "metaDuration": "60 minutes",
      "questionsCount": 8,
      "displayCount": "100",
      "durationMinutes": 60,
      "totalMarks": 200,
      "marking": {
        "positive": 2,
        "negative": 0.5
      },
      "category": "ssc_cgl",
      "year": "2020"
    },
    {
      "id": "cgl_2020_s3",
      "title": "SSC CGL 2020 Tier-1 Official Paper (16 Aug Shift 1)",
      "subtitle": "Reasoning, GA, Quantitative Aptitude & English",
      "description": "16 August 2020 Shift 1 · Authentic 5-Year SSC CGL Examination Paper",
      "metaQuestions": "100 questions",
      "metaDuration": "60 minutes",
      "questionsCount": 8,
      "displayCount": "100",
      "durationMinutes": 60,
      "totalMarks": 200,
      "marking": {
        "positive": 2,
        "negative": 0.5
      },
      "category": "ssc_cgl",
      "year": "2020"
    },
    {
      "id": "cgl_2020_master",
      "title": "SSC CGL 5-Year PYQ High-Yield Master Drill",
      "subtitle": "Reasoning, GA, Quantitative Aptitude & English",
      "description": "Top 50 Repeated Concepts · Authentic 5-Year SSC CGL Examination Paper",
      "metaQuestions": "100 questions",
      "metaDuration": "60 minutes",
      "questionsCount": 8,
      "displayCount": "100",
      "durationMinutes": 60,
      "totalMarks": 200,
      "marking": {
        "positive": 2,
        "negative": 0.5
      },
      "category": "ssc_cgl",
      "year": "2020"
    }
  ],
  "questions": {
    "jee_main_1": [
      {
        "id": 1,
        "subject": "Physics",
        "q": {
          "en": "A projectile is thrown with an initial velocity v at an angle θ with the horizontal. What is the ratio of maximum height reached (H) to horizontal range (R) when θ = 45°?",
          "hi": "एक प्रक्षेप्य को क्षैतिज से θ कोण पर प्रारंभिक वेग v से प्रक्षेपित किया जाता है। जब θ = 45° हो, तो अधिकतम ऊंचाई (H) और क्षैतिज परास (R) का अनुपात क्या होगा?"
        },
        "o": [
          {
            "en": "1 : 4",
            "hi": "1 : 4"
          },
          {
            "en": "1 : 2",
            "hi": "1 : 2"
          },
          {
            "en": "1 : 1",
            "hi": "1 : 1"
          },
          {
            "en": "1 : 8",
            "hi": "1 : 8"
          }
        ],
        "a": 0,
        "exp": {
          "en": "Formula: H = (v² sin²θ)/(2g) and R = (v² sin 2θ)/g. Therefore, H/R = (sin²θ) / (2 sin 2θ) = tan θ / 4. For θ = 45°, tan 45° = 1. Hence, H/R = 1/4 (1 : 4).",
          "hi": "सूत्र: H = (v² sin²θ)/(2g) और R = (v² sin 2θ)/g। अतः H/R = tan θ / 4। चूंकि θ = 45° है, tan 45° = 1, इसलिए अनुपात 1 : 4 होगा।"
        }
      },
      {
        "id": 2,
        "subject": "Physics",
        "q": {
          "en": "A hollow spherical conductor of radius R carries a charge Q. What is the electric potential at a point located at distance r (where r < R) from the center?",
          "hi": "त्रिज्या R के एक खोखले गोलाकार चालक पर Q आवेश है। केंद्र से r दूरी (जहाँ r < R) पर स्थित किसी बिंदु पर विद्युत विभव क्या होगा?"
        },
        "o": [
          {
            "en": "Zero",
            "hi": "शून्य"
          },
          {
            "en": "Q / (4πε₀ R)",
            "hi": "Q / (4πε₀ R)"
          },
          {
            "en": "Q / (4πε₀ r)",
            "hi": "Q / (4πε₀ r)"
          },
          {
            "en": "Q / (4πε₀ R²)",
            "hi": "Q / (4πε₀ R²)"
          }
        ],
        "a": 1,
        "exp": {
          "en": "Inside a conducting hollow sphere, the electric field is zero (E = 0). Since E = -dV/dr = 0, the electric potential remains constant throughout the interior and is equal to the potential at the surface: V = Q / (4πε₀ R).",
          "hi": "चालक खोखले गोले के अंदर विद्युत क्षेत्र शून्य होता है (E = 0)। चूंकि E = -dV/dr = 0, अतः अंदर सभी बिंदुओं पर विभव स्थिर रहता है और सतह के विभव Q / (4πε₀ R) के बराबर होता है।"
        }
      },
      {
        "id": 3,
        "subject": "Chemistry",
        "q": {
          "en": "What is the hybridization and molecular geometry of Sulfur tetrafluoride (SF₄)?",
          "hi": "सल्फर टेट्राफ्लोराइड (SF₄) का संकरण (hybridization) और आणविक ज्यामिति क्या है?"
        },
        "o": [
          {
            "en": "sp³d, See-saw",
            "hi": "sp³d, सी-सॉ (See-saw)"
          },
          {
            "en": "sp³d², Square planar",
            "hi": "sp³d², वर्ग समतलीय (Square planar)"
          },
          {
            "en": "sp³, Tetrahedral",
            "hi": "sp³, चतुष्फलकीय (Tetrahedral)"
          },
          {
            "en": "sp³d, Trigonal bipyramidal",
            "hi": "sp³d, त्रिकोणीय द्विपिरामिडी"
          }
        ],
        "a": 0,
        "exp": {
          "en": "Sulfur has 6 valence electrons. In SF₄, it forms 4 bonding pairs with fluorine and possesses 1 lone pair. Total steric number = 4 + 1 = 5 (sp³d hybridization). According to VSEPR theory, 4 bond pairs + 1 lone pair yields a See-saw molecular geometry.",
          "hi": "सल्फर के संयोजी कोश में 6 इलेक्ट्रॉन होते हैं। SF₄ में 4 आबंधी युग्म (bond pairs) और 1 एकाकी युग्म (lone pair) होते हैं। कुल स्टेरिक संख्या = 5 (sp³d संकरण)। VSEPR सिद्धांत के अनुसार इसकी ज्यामिति सी-सॉ (See-saw) होती है।"
        }
      },
      {
        "id": 4,
        "subject": "Mathematics",
        "q": {
          "en": "Evaluate the definite integral: I = ∫₀^(π/2) (sin x) / (sin x + cos x) dx.",
          "hi": "निश्चित समाकल का मान ज्ञात कीजिए: I = ∫₀^(π/2) (sin x) / (sin x + cos x) dx."
        },
        "o": [
          {
            "en": "π / 2",
            "hi": "π / 2"
          },
          {
            "en": "π / 4",
            "hi": "π / 4"
          },
          {
            "en": "π",
            "hi": "π"
          },
          {
            "en": "1",
            "hi": "1"
          }
        ],
        "a": 1,
        "exp": {
          "en": "Using the property ∫₀^a f(x) dx = ∫₀^a f(a - x) dx:\nI = ∫₀^(π/2) cos x / (cos x + sin x) dx.\nAdding both equations: 2I = ∫₀^(π/2) (sin x + cos x)/(sin x + cos x) dx = ∫₀^(π/2) 1 dx = π/2.\nTherefore, I = π / 4.",
          "hi": "निश्चित समाकल के गुणधर्म ∫₀^a f(x) dx = ∫₀^a f(a - x) dx का उपयोग करने पर:\nI = ∫₀^(π/2) cos x / (cos x + sin x) dx.\nदोनों समीकरणों को जोड़ने पर: 2I = ∫₀^(π/2) 1 dx = [x]₀^(π/2) = π/2.\nअतः I = π/4."
        }
      }
    ],
    "neet_bio_quick": [
      {
        "id": 1,
        "subject": "Cell Biology",
        "q": {
          "en": "During which phase of the eukaryotic cell cycle does actual DNA replication and duplication of centrioles occur?",
          "hi": "यूकेरियोटिक कोशिका चक्र के किस चरण के दौरान डीएनए की वास्तविक प्रतिकृति और तारककेंद्र (सेंट्रिओल) का द्विगुणन होता है?"
        },
        "o": [
          {
            "en": "G₁ phase",
            "hi": "G₁ अवस्था"
          },
          {
            "en": "S phase",
            "hi": "S अवस्था (संश्लेषण चरण)"
          },
          {
            "en": "G₂ phase",
            "hi": "G₂ अवस्था"
          },
          {
            "en": "Metaphase",
            "hi": "मध्यावस्था (Metaphase)"
          }
        ],
        "a": 1,
        "exp": {
          "en": "During S (Synthesis) phase, the amount of DNA per cell doubles from 2C to 4C while the chromosome number remains 2n. In animal cells, centriole duplication also takes place in the cytoplasm during this phase.",
          "hi": "S (सिंथेसिस) अवस्था में प्रति कोशिका DNA की मात्रा दोगुनी हो जाती है (2C से 4C), यद्यपि गुणसूत्रों की संख्या अपरिवर्तित रहती है। इसी चरण में जंतु कोशिका में सेंट्रिओल का द्विगुणन भी होता है।"
        }
      },
      {
        "id": 2,
        "subject": "Genetics",
        "q": {
          "en": "What is the expected phenotypic ratio in the F₂ generation of a Mendelian dihybrid cross involving two independently assorting unlinked genes?",
          "hi": "दो स्वतंत्र अपव्यूहन करने वाले जीनों के मेंडेलियन द्विसंकर क्रॉस (dihybrid cross) की F₂ पीढ़ी में क्या लक्षणप्ररूपी (phenotypic) अनुपात प्राप्त होता है?"
        },
        "o": [
          {
            "en": "3 : 1",
            "hi": "3 : 1"
          },
          {
            "en": "9 : 3 : 3 : 1",
            "hi": "9 : 3 : 3 : 1"
          },
          {
            "en": "1 : 2 : 1",
            "hi": "1 : 2 : 1"
          },
          {
            "en": "9 : 7",
            "hi": "9 : 7"
          }
        ],
        "a": 1,
        "exp": {
          "en": "According to Mendel's Law of Independent Assortment, the dihybrid F₂ phenotypic ratio is 9 (Round Yellow) : 3 (Round Green) : 3 (Wrinkled Yellow) : 1 (Wrinkled Green).",
          "hi": "मेंडल के स्वतंत्र अपव्यूहन के नियमानुसार, द्विसंकर संकरण की F₂ पीढ़ी का लक्षणप्ररूपी अनुपात 9:3:3:1 (गोल पीला : गोल हरा : झुर्रीदार पीला : झुर्रीदार हरा) होता है।"
        }
      },
      {
        "id": 3,
        "subject": "Molecular Biology",
        "q": {
          "en": "Which codon functions universally as the initiation (start) codon in protein translation and simultaneously codes for Methionine?",
          "hi": "प्रोटीन संश्लेषण (अनुवादन) में कौन सा कोडॉन सार्वभौमिक रूप से प्रारंभिक (start) कोडॉन के रूप में कार्य करता है और साथ ही मिथियोनीन को कोड करता है?"
        },
        "o": [
          {
            "en": "UAA",
            "hi": "UAA"
          },
          {
            "en": "AUG",
            "hi": "AUG"
          },
          {
            "en": "UAG",
            "hi": "UAG"
          },
          {
            "en": "UGA",
            "hi": "UGA"
          }
        ],
        "a": 1,
        "exp": {
          "en": "AUG is the universal initiator codon that binds the initiator tRNA carrying Methionine. UAA, UAG, and UGA are stop (nonsense/termination) codons.",
          "hi": "AUG प्रारंभिक कोडॉन है जो मिथियोनीन को कोड करता है। UAA, UAG और UGA समापन (stop) कोडॉन हैं।"
        }
      },
      {
        "id": 4,
        "subject": "Cell Biology",
        "q": {
          "en": "Which of the following organelles are semi-autonomous, possess their own circular double-stranded DNA, and contain 70S ribosomes?",
          "hi": "निम्नलिखित में से कौन से कोशिकांग अर्ध-स्वायत्त हैं, जिनका अपना वृत्ताकार द्विरज्जुक डीएनए और 70S राइबोसोम होता है?"
        },
        "o": [
          {
            "en": "Mitochondria and Chloroplasts",
            "hi": "माइटोकॉन्ड्रिया और हरितलवक (क्लोरोप्लास्ट)"
          },
          {
            "en": "Golgi apparatus and Lysosomes",
            "hi": "गॉल्जी काय और लयनकाय (लाइसोसोम)"
          },
          {
            "en": "Endoplasmic reticulum and Vacuoles",
            "hi": "अंतर्द्रव्यी जालिका और रसधानियाँ"
          },
          {
            "en": "Peroxisomes and Ribosomes",
            "hi": "परऑक्सीसोम और राइबोसोम"
          }
        ],
        "a": 0,
        "exp": {
          "en": "Both Mitochondria and Chloroplasts are endosymbiotic semi-autonomous organelles possessing their own circular double-stranded DNA, RNA, enzymes, and prokaryotic-like 70S ribosomes.",
          "hi": "माइटोकॉन्ड्रिया और क्लोरोप्लास्ट दोनों अर्ध-स्वायत्त कोशिकांग हैं। इनके पास अपना वृत्ताकार DNA और 70S राइबोसोम होता है जिससे ये अपने कुछ प्रोटीन स्वयं बना सकते हैं।"
        }
      }
    ],
    "ssc_ga_maths": [
      {
        "id": 1,
        "subject": "Reasoning",
        "q": {
          "en": "Find the missing term in the given number series:\n7, 11, 19, 31, ?, 67",
          "hi": "दी गई संख्या श्रृंखला में लुप्त पद ज्ञात कीजिए:\n7, 11, 19, 31, ?, 67"
        },
        "o": [
          {
            "en": "43",
            "hi": "43"
          },
          {
            "en": "47",
            "hi": "47"
          },
          {
            "en": "49",
            "hi": "49"
          },
          {
            "en": "51",
            "hi": "51"
          }
        ],
        "a": 1,
        "exp": {
          "en": "The pattern of differences between successive terms is:\n11 - 7 = 4\n19 - 11 = 8\n31 - 19 = 12\nNext difference = 16 → 31 + 16 = 47\nVerification: 67 - 47 = 20 (Multiples of 4: +4, +8, +12, +16, +20).",
          "hi": "पदों के बीच अंतर 4 के गुणज में बढ़ रहा है:\n11 - 7 = 4\n19 - 11 = 8\n31 - 19 = 12\nअगला अंतर = 16 → 31 + 16 = 47\nजाँच: 67 - 47 = 20।"
        }
      },
      {
        "id": 2,
        "subject": "General Awareness (Polity)",
        "q": {
          "en": "Which Article of the Indian Constitution provides for 'Equality before law and equal protection of the laws' for all persons within the territory of India?",
          "hi": "भारतीय संविधान का कौन सा अनुच्छेद भारत के राज्यक्षेत्र में सभी व्यक्तियों के लिए 'विधि के समक्ष समता और विधियों के समान संरक्षण' का प्रावधान करता है?"
        },
        "o": [
          {
            "en": "Article 12",
            "hi": "अनुच्छेद 12"
          },
          {
            "en": "Article 14",
            "hi": "अनुच्छेद 14"
          },
          {
            "en": "Article 19",
            "hi": "अनुच्छेद 19"
          },
          {
            "en": "Article 21",
            "hi": "अनुच्छेद 21"
          }
        ],
        "a": 1,
        "exp": {
          "en": "Article 14 guarantees equality before the law and equal protection of laws to both citizens and non-citizens within the territory of India.",
          "hi": "अनुच्छेद 14 भारत के राज्यक्षेत्र में नागरिकों व विदेशियों दोनों को विधि के समक्ष समता और विधियों के समान संरक्षण का मौलिक अधिकार प्रदान करता है।"
        }
      },
      {
        "id": 3,
        "subject": "Arithmetic",
        "q": {
          "en": "A shopkeeper bought an article for ₹500 and sold it at a profit of 20%. What was the selling price of the article?",
          "hi": "एक दुकानदार ने एक वस्तु ₹500 में खरीदी और उसे 20% लाभ पर बेच दिया। वस्तु का विक्रय मूल्य क्या था?"
        },
        "o": [
          {
            "en": "₹580",
            "hi": "₹580"
          },
          {
            "en": "₹600",
            "hi": "₹600"
          },
          {
            "en": "₹620",
            "hi": "₹620"
          },
          {
            "en": "₹650",
            "hi": "₹650"
          }
        ],
        "a": 1,
        "exp": {
          "en": "Cost Price (CP) = ₹500. Profit = 20% of 500 = ₹100. Selling Price (SP) = CP + Profit = 500 + 100 = ₹600.",
          "hi": "क्रय मूल्य (CP) = ₹500। 20% लाभ = (20/100) × 500 = ₹100। अतः विक्रय मूल्य (SP) = 500 + 100 = ₹600।"
        }
      },
      {
        "id": 4,
        "subject": "General Awareness (History)",
        "q": {
          "en": "In which year was the historic Battle of Plassey fought between the British East India Company under Robert Clive and Siraj-ud-Daulah (Nawab of Bengal)?",
          "hi": "रॉबर्ट क्लाइव के नेतृत्व में ब्रिटिश ईस्ट इंडिया कंपनी और बंगाल के नवाब सिराजुद्दौला के बीच ऐतिहासिक प्लासी का युद्ध किस वर्ष लड़ा गया था?"
        },
        "o": [
          {
            "en": "1757",
            "hi": "1757"
          },
          {
            "en": "1764",
            "hi": "1764"
          },
          {
            "en": "1857",
            "hi": "1857"
          },
          {
            "en": "1761",
            "hi": "1761"
          }
        ],
        "a": 0,
        "exp": {
          "en": "The Battle of Plassey took place on 23 June 1757 at Palashi on the banks of the Bhagirathi River. The British victory marked the beginning of British rule in India.",
          "hi": "प्लासी का युद्ध 23 जून 1757 को भागीरथी नदी के तट पर प्लासी नामक स्थान पर हुआ था। इस युद्ध में अंग्रेजों की विजय ने भारत में ब्रिटिश सत्ता की नींव रखी।"
        }
      }
    ],
    "quant_set_1": [
      {
        "id": 1,
        "subject": "Percentage",
        "q": {
          "en": "If the price of sugar increases by 25%, by what percentage must a household reduce its consumption so that total expenditure remains unchanged?",
          "hi": "यदि चीनी की कीमत में 25% की वृद्धि हो जाती है, तो किसी परिवार को अपनी खपत में कितने प्रतिशत की कमी करनी होगी ताकि कुल खर्च अपरिवर्तित रहे?"
        },
        "o": [
          {
            "en": "15%",
            "hi": "15%"
          },
          {
            "en": "20%",
            "hi": "20%"
          },
          {
            "en": "25%",
            "hi": "25%"
          },
          {
            "en": "16.67%",
            "hi": "16.67%"
          }
        ],
        "a": 1,
        "exp": {
          "en": "Reduction in consumption = [r / (100 + r)] × 100% = [25 / 125] × 100% = (1/5) × 100% = 20%.",
          "hi": "खपत में प्रतिशत कमी = [r / (100 + r)] × 100% = [25 / (100 + 25)] × 100% = (25/125) × 100 = 20%."
        }
      },
      {
        "id": 2,
        "subject": "Speed, Time & Distance",
        "q": {
          "en": "A train traveling at a constant speed of 72 km/h crosses a telegraph post in 15 seconds. Find the length of the train.",
          "hi": "72 किमी/घंटा की स्थिर गति से यात्रा करने वाली एक ट्रेन एक टेलीग्राफ खंभे को 15 सेकंड में पार करती है। ट्रेन की लंबाई ज्ञात कीजिए।"
        },
        "o": [
          {
            "en": "250 meters",
            "hi": "250 मीटर"
          },
          {
            "en": "300 meters",
            "hi": "300 मीटर"
          },
          {
            "en": "360 meters",
            "hi": "360 मीटर"
          },
          {
            "en": "400 meters",
            "hi": "400 मीटर"
          }
        ],
        "a": 1,
        "exp": {
          "en": "Speed in m/s = 72 × (5/18) = 20 m/s. Length of train = Speed × Time = 20 m/s × 15 s = 300 meters.",
          "hi": "चाल मीटर/सेकंड में = 72 × (5/18) = 20 मी/से। ट्रेन की लंबाई = चाल × समय = 20 × 15 = 300 मीटर।"
        }
      },
      {
        "id": 3,
        "subject": "Profit and Loss",
        "q": {
          "en": "By selling an article for ₹840, a trader gains 20%. At what price should he sell it to gain 30%?",
          "hi": "किसी वस्तु को ₹840 में बेचने पर एक व्यापारी को 20% का लाभ होता है। 30% लाभ कमाने के लिए उसे इसे किस मूल्य पर बेचना चाहिए?"
        },
        "o": [
          {
            "en": "₹880",
            "hi": "₹880"
          },
          {
            "en": "₹910",
            "hi": "₹910"
          },
          {
            "en": "₹920",
            "hi": "₹920"
          },
          {
            "en": "₹950",
            "hi": "₹950"
          }
        ],
        "a": 1,
        "exp": {
          "en": "CP = (SP / 120) × 100 = (840 / 120) × 100 = ₹700. For 30% profit, new SP = 700 × 1.30 = ₹910.",
          "hi": "क्रय मूल्य = (840 / 120) × 100 = ₹700। 30% लाभ के लिए नया विक्रय मूल्य = 700 × 1.30 = ₹910।"
        }
      },
      {
        "id": 4,
        "subject": "Ratio and Proportion",
        "q": {
          "en": "Two numbers are in the ratio 4 : 5. If 6 is added to each number, the ratio becomes 5 : 6. What is the sum of the original numbers?",
          "hi": "दो संख्याएँ 4 : 5 के अनुपात में हैं। यदि प्रत्येक संख्या में 6 जोड़ दिया जाए, तो अनुपात 5 : 6 हो जाता है। मूल संख्याओं का योग क्या है?"
        },
        "o": [
          {
            "en": "45",
            "hi": "45"
          },
          {
            "en": "54",
            "hi": "54"
          },
          {
            "en": "63",
            "hi": "63"
          },
          {
            "en": "72",
            "hi": "72"
          }
        ],
        "a": 1,
        "exp": {
          "en": "Let numbers be 4x and 5x. (4x + 6) / (5x + 6) = 5/6 ⇒ 24x + 36 = 25x + 30 ⇒ x = 6. Numbers are 24 and 30. Sum = 24 + 30 = 54.",
          "hi": "माना संख्याएँ 4x और 5x हैं। (4x + 6)/(5x + 6) = 5/6 ⇒ 24x + 36 = 25x + 30 ⇒ x = 6। संख्याएँ = 24 और 30। योग = 24 + 30 = 54।"
        }
      },
      {
        "id": 5,
        "subject": "Average",
        "q": {
          "en": "The average weight of 8 students increases by 1.5 kg when a student weighing 65 kg replaces one of the students. What is the weight of the replaced student?",
          "hi": "8 छात्रों का औसत वजन 1.5 किग्रा बढ़ जाता है जब 65 किग्रा वजन वाला एक छात्र उनमें से एक छात्र की जगह लेता है। हटाए गए छात्र का वजन कितना है?"
        },
        "o": [
          {
            "en": "50 kg",
            "hi": "50 किग्रा"
          },
          {
            "en": "53 kg",
            "hi": "53 किग्रा"
          },
          {
            "en": "55 kg",
            "hi": "55 किग्रा"
          },
          {
            "en": "57 kg",
            "hi": "57 किग्रा"
          }
        ],
        "a": 1,
        "exp": {
          "en": "Total increase in weight = 8 × 1.5 kg = 12 kg. Weight of replaced student = New weight - Total increase = 65 - 12 = 53 kg.",
          "hi": "कुल वजन में वृद्धि = 8 × 1.5 = 12 किग्रा। प्रतिस्थापित छात्र का वजन = 65 - 12 = 53 किग्रा।"
        }
      },
      {
        "id": 6,
        "subject": "Simple and Compound Interest",
        "q": {
          "en": "The simple interest on a sum of money for 3 years at 8% per annum is ₹1,200. What would be the compound interest on the same sum at the same rate for 2 years (compounded annually)?",
          "hi": "किसी राशि पर 3 वर्षों के लिए 8% वार्षिक दर से साधारण ब्याज ₹1,200 है। उसी राशि पर समान दर से 2 वर्ष का चक्रवृद्धि ब्याज कितना होगा?"
        },
        "o": [
          {
            "en": "₹825.60",
            "hi": "₹825.60"
          },
          {
            "en": "₹832.00",
            "hi": "₹832.00"
          },
          {
            "en": "₹840.00",
            "hi": "₹840.00"
          },
          {
            "en": "₹850.50",
            "hi": "₹850.50"
          }
        ],
        "a": 1,
        "exp": {
          "en": "SI = (P × R × T)/100 ⇒ 1200 = (P × 8 × 3)/100 ⇒ P = (1200 × 100)/24 = ₹5,000. CI for 2 yrs: Net rate = 8 + 8 + (8×8)/100 = 16.64%. CI = 5000 × 0.1664 = ₹832.",
          "hi": "मूलधन P = (1200 × 100) / (8 × 3) = ₹5,000। 2 वर्ष का प्रभावी CI दर = 8 + 8 + (8×8)/100 = 16.64%। CI = 5000 × 16.64% = ₹832।"
        }
      }
    ],
    "quant_set_2": [
      {
        "id": 1,
        "subject": "Time and Work",
        "q": {
          "en": "A can complete a piece of work alone in 12 days, and B can complete the same work in 18 days. If they work together, in how many days will the work be completed?",
          "hi": "A अकेले किसी काम को 12 दिनों में पूरा कर सकता है और B उसी काम को 18 दिनों में पूरा कर सकता है। यदि वे एक साथ काम करते हैं, तो काम कितने दिनों में पूरा होगा?"
        },
        "o": [
          {
            "en": "6.5 days",
            "hi": "6.5 दिन"
          },
          {
            "en": "7.2 days",
            "hi": "7.2 दिन"
          },
          {
            "en": "8 days",
            "hi": "8 दिन"
          },
          {
            "en": "7.5 days",
            "hi": "7.5 दिन"
          }
        ],
        "a": 1,
        "exp": {
          "en": "Total work = LCM(12, 18) = 36 units. Efficiency of A = 36/12 = 3 units/day. Efficiency of B = 36/18 = 2 units/day. Combined efficiency = 3 + 2 = 5 units/day. Days required = 36 / 5 = 7.2 days.",
          "hi": "कुल कार्य = LCM(12, 18) = 36 इकाई। A की कार्यक्षमता = 3 इकाई/दिन, B की कार्यक्षमता = 2 इकाई/दिन। दोनों की संयुक्त क्षमता = 5 इकाई/दिन। समय = 36/5 = 7.2 दिन।"
        }
      },
      {
        "id": 2,
        "subject": "HCF and LCM",
        "q": {
          "en": "The HCF and LCM of two numbers are 12 and 240 respectively. If one of the numbers is 48, find the other number.",
          "hi": "दो संख्याओं का म.स.प. (HCF) और ल.स.प. (LCM) क्रमशः 12 और 240 हैं। यदि उनमें से एक संख्या 48 है, तो दूसरी संख्या ज्ञात कीजिए।"
        },
        "o": [
          {
            "en": "50",
            "hi": "50"
          },
          {
            "en": "60",
            "hi": "60"
          },
          {
            "en": "72",
            "hi": "72"
          },
          {
            "en": "80",
            "hi": "80"
          }
        ],
        "a": 1,
        "exp": {
          "en": "Formula: Product of two numbers = HCF × LCM. 48 × N = 12 × 240 ⇒ N = (12 × 240) / 48 = 240 / 4 = 60.",
          "hi": "सूत्र: दो संख्याओं का गुणनफल = HCF × LCM। 48 × N = 12 × 240 ⇒ N = (12 × 240) / 48 = 60।"
        }
      },
      {
        "id": 3,
        "subject": "Algebra",
        "q": {
          "en": "If x + 1/x = 4, find the value of x³ + 1/x³.",
          "hi": "यदि x + 1/x = 4 है, तो x³ + 1/x³ का मान ज्ञात कीजिए।"
        },
        "o": [
          {
            "en": "52",
            "hi": "52"
          },
          {
            "en": "64",
            "hi": "64"
          },
          {
            "en": "76",
            "hi": "76"
          },
          {
            "en": "48",
            "hi": "48"
          }
        ],
        "a": 0,
        "exp": {
          "en": "Formula: x³ + 1/x³ = (x + 1/x)³ - 3(x + 1/x) = 4³ - 3(4) = 64 - 12 = 52.",
          "hi": "सूत्र: x³ + 1/x³ = k³ - 3k = 4³ - 3(4) = 64 - 12 = 52।"
        }
      },
      {
        "id": 4,
        "subject": "Mensuration",
        "q": {
          "en": "The radius of a solid cylinder is 7 cm and its height is 10 cm. Find its total surface area (Take π = 22/7).",
          "hi": "एक ठोस बेलन की त्रिज्या 7 सेमी और ऊंचाई 10 सेमी है। इसका कुल पृष्ठीय क्षेत्रफल ज्ञात कीजिए (π = 22/7 लें)।"
        },
        "o": [
          {
            "en": "680 cm²",
            "hi": "680 सेमी²"
          },
          {
            "en": "748 cm²",
            "hi": "748 सेमी²"
          },
          {
            "en": "780 cm²",
            "hi": "780 सेमी²"
          },
          {
            "en": "812 cm²",
            "hi": "812 सेमी²"
          }
        ],
        "a": 1,
        "exp": {
          "en": "TSA of cylinder = 2πr(h + r) = 2 × (22/7) × 7 × (10 + 7) = 44 × 17 = 748 cm².",
          "hi": "बेलन का कुल पृष्ठीय क्षेत्रफल = 2πr(h + r) = 2 × (22/7) × 7 × (10 + 7) = 44 × 17 = 748 सेमी²।"
        }
      },
      {
        "id": 5,
        "subject": "Problems on Ages",
        "q": {
          "en": "The present ages of a father and son are in the ratio 7 : 2. After 10 years, the ratio becomes 9 : 4. What is the father's current age?",
          "hi": "एक पिता और पुत्र की वर्तमान आयु का अनुपात 7 : 2 है। 10 वर्ष बाद यह अनुपात 9 : 4 हो जाता है। पिता की वर्तमान आयु क्या है?"
        },
        "o": [
          {
            "en": "35 years",
            "hi": "35 वर्ष"
          },
          {
            "en": "42 years",
            "hi": "42 वर्ष"
          },
          {
            "en": "49 years",
            "hi": "49 वर्ष"
          },
          {
            "en": "56 years",
            "hi": "56 वर्ष"
          }
        ],
        "a": 0,
        "exp": {
          "en": "Let present ages be 7x and 2x. (7x + 10) / (2x + 10) = 9/4 ⇒ 28x + 40 = 18x + 90 ⇒ 10x = 50 ⇒ x = 5. Father's age = 7 × 5 = 35 years.",
          "hi": "माना वर्तमान आयु 7x व 2x है। (7x + 10)/(2x + 10) = 9/4 ⇒ 28x + 40 = 18x + 90 ⇒ 10x = 50 ⇒ x = 5। पिता की आयु = 7 × 5 = 35 वर्ष।"
        }
      },
      {
        "id": 6,
        "subject": "Time and Work (Pipes & Cisterns)",
        "q": {
          "en": "Pipe A can fill a tank in 6 hours and Pipe B can empty it in 8 hours. If both pipes are opened simultaneously, in how many hours will the tank be completely filled?",
          "hi": "नल A एक टंकी को 6 घंटे में भर सकता है और नल B इसे 8 घंटे में खाली कर सकता है। यदि दोनों नलों को एक साथ खोल दिया जाए, तो टंकी कितने घंटों में पूरी भर जाएगी?"
        },
        "o": [
          {
            "en": "18 hours",
            "hi": "18 घंटे"
          },
          {
            "en": "20 hours",
            "hi": "20 घंटे"
          },
          {
            "en": "24 hours",
            "hi": "24 घंटे"
          },
          {
            "en": "28 hours",
            "hi": "28 घंटे"
          }
        ],
        "a": 2,
        "exp": {
          "en": "Net filling rate per hour = 1/6 - 1/8 = (4 - 3)/24 = 1/24. Thus, it will take 24 hours to fill the tank.",
          "hi": "प्रति घंटा शुद्ध भराई = 1/6 - 1/8 = (4 - 3)/24 = 1/24। अतः पूरी टंकी भरने में 24 घंटे लगेंगे।"
        }
      }
    ],
    "quant_set_3": [
      {
        "id": 1,
        "subject": "Discount",
        "q": {
          "en": "What is the single equivalent discount for two successive discounts of 20% and 10%?",
          "hi": "20% और 10% की दो क्रमिक छूटों के समतुल्य एकल छूट क्या है?"
        },
        "o": [
          {
            "en": "26%",
            "hi": "26%"
          },
          {
            "en": "28%",
            "hi": "28%"
          },
          {
            "en": "30%",
            "hi": "30%"
          },
          {
            "en": "32%",
            "hi": "32%"
          }
        ],
        "a": 1,
        "exp": {
          "en": "Equivalent Discount = [d₁ + d₂ - (d₁ × d₂)/100]% = 20 + 10 - (20 × 10)/100 = 30 - 2 = 28%.",
          "hi": "समतुल्य छूट = [d₁ + d₂ - (d₁ × d₂)/100]% = 20 + 10 - 200/100 = 30 - 2 = 28%।"
        }
      },
      {
        "id": 2,
        "subject": "Series Sums",
        "q": {
          "en": "Find the sum of the first 25 odd natural numbers (1 + 3 + 5 + ... + 49).",
          "hi": "प्रथम 25 विषम प्राकृतिक संख्याओं का योग ज्ञात कीजिए (1 + 3 + 5 + ... + 49)।"
        },
        "o": [
          {
            "en": "575",
            "hi": "575"
          },
          {
            "en": "625",
            "hi": "625"
          },
          {
            "en": "650",
            "hi": "650"
          },
          {
            "en": "675",
            "hi": "675"
          }
        ],
        "a": 1,
        "exp": {
          "en": "The sum of first n odd natural numbers is n². For n = 25: Sum = 25² = 625.",
          "hi": "प्रथम n विषम प्राकृतिक संख्याओं का योग = n² होता है। n = 25 के लिए: योग = 25² = 625।"
        }
      },
      {
        "id": 3,
        "subject": "Equations",
        "q": {
          "en": "If the roots of the quadratic equation 2x² - 8x + k = 0 are real and equal, find the value of k.",
          "hi": "यदि द्विघात समीकरण 2x² - 8x + k = 0 के मूल वास्तविक और समान हैं, तो k का मान ज्ञात कीजिए।"
        },
        "o": [
          {
            "en": "4",
            "hi": "4"
          },
          {
            "en": "6",
            "hi": "6"
          },
          {
            "en": "8",
            "hi": "8"
          },
          {
            "en": "10",
            "hi": "10"
          }
        ],
        "a": 2,
        "exp": {
          "en": "For real and equal roots, discriminant D = b² - 4ac = 0. (-8)² - 4(2)(k) = 0 ⇒ 64 - 8k = 0 ⇒ 8k = 64 ⇒ k = 8.",
          "hi": "समान और वास्तविक मूलों के लिए विविक्तकर (Discriminant) D = b² - 4ac = 0। (-8)² - 4(2)(k) = 0 ⇒ 64 - 8k = 0 ⇒ k = 8।"
        }
      },
      {
        "id": 4,
        "subject": "Mixed Arithmetic",
        "q": {
          "en": "In an examination, 65% students passed in English, 60% passed in Mathematics, and 40% passed in both. What percentage of students failed in both subjects?",
          "hi": "एक परीक्षा में 65% छात्र अंग्रेजी में, 60% गणित में और 40% दोनों में उत्तीर्ण हुए। दोनों विषयों में कितने प्रतिशत छात्र अनुत्तीर्ण रहे?"
        },
        "o": [
          {
            "en": "15%",
            "hi": "15%"
          },
          {
            "en": "18%",
            "hi": "18%"
          },
          {
            "en": "20%",
            "hi": "20%"
          },
          {
            "en": "25%",
            "hi": "25%"
          }
        ],
        "a": 0,
        "exp": {
          "en": "Percentage of students passed in at least one subject = P(E ∪ M) = P(E) + P(M) - P(E ∩ M) = 65% + 60% - 40% = 85%. Percentage failed in both = 100% - 85% = 15%.",
          "hi": "कम से कम एक विषय में उत्तीर्ण = 65 + 60 - 40 = 85%। दोनों में अनुत्तीर्ण = 100 - 85 = 15%।"
        }
      },
      {
        "id": 5,
        "subject": "Mixtures and Alligation",
        "q": {
          "en": "In what ratio must water be mixed with milk costing ₹40 per liter to obtain a mixture worth ₹30 per liter? (Water is assumed to be free of cost).",
          "hi": "पानी को ₹40 प्रति लीटर वाले दूध के साथ किस अनुपात में मिलाया जाए ताकि ₹30 प्रति लीटर का मिश्रण प्राप्त हो सके? (पानी का मूल्य शून्य माना गया है)।"
        },
        "o": [
          {
            "en": "1 : 3",
            "hi": "1 : 3"
          },
          {
            "en": "1 : 4",
            "hi": "1 : 4"
          },
          {
            "en": "2 : 3",
            "hi": "2 : 3"
          },
          {
            "en": "3 : 4",
            "hi": "3 : 4"
          }
        ],
        "a": 0,
        "exp": {
          "en": "By Alligation: Price of Water = 0, Price of Milk = 40, Mean Price = 30. Ratio of Water : Milk = (40 - 30) : (30 - 0) = 10 : 30 = 1 : 3.",
          "hi": "मिश्रण नियम द्वारा: पानी का मूल्य = 0, दूध = 40, औसत = 30। पानी और दूध का अनुपात = (40 - 30) : (30 - 0) = 10 : 30 = 1 : 3।"
        }
      },
      {
        "id": 6,
        "subject": "Discount & Profit",
        "q": {
          "en": "A trader marks his goods 40% above cost price and allows a discount of 15% on the marked price. What is his net profit percentage?",
          "hi": "एक व्यापारी अपनी वस्तुओं पर क्रय मूल्य से 40% अधिक मूल्य अंकित करता है और अंकित मूल्य पर 15% की छूट देता है। उसका शुद्ध लाभ प्रतिशत क्या है?"
        },
        "o": [
          {
            "en": "18%",
            "hi": "18%"
          },
          {
            "en": "19%",
            "hi": "19%"
          },
          {
            "en": "20%",
            "hi": "20%"
          },
          {
            "en": "22%",
            "hi": "22%"
          }
        ],
        "a": 1,
        "exp": {
          "en": "Let CP = 100. Marked Price (MP) = 140. Discount = 15% of 140 = 21. SP = 140 - 21 = 119. Profit% = (119 - 100) = 19%.",
          "hi": "माना CP = 100। अंकित मूल्य = 140। छूट = 140 का 15% = 21। विक्रय मूल्य = 140 - 21 = 119। शुद्ध लाभ = 19%।"
        }
      }
    ],
    "cgl_2024_s1": [
      {
        "id": 1,
        "subject": "General Intelligence & Reasoning",
        "q": {
          "en": "Select the option that is related to the third number in the same way as the second number is related to the first number:\n12 : 156 :: 14 : ?",
          "hi": "उस विकल्प का चयन करें जो तीसरी संख्या से उसी प्रकार संबंधित है जैसे दूसरी संख्या पहली संख्या से संबंधित है:\n12 : 156 :: 14 : ?"
        },
        "o": [
          {
            "en": "208",
            "hi": "208"
          },
          {
            "en": "210",
            "hi": "210"
          },
          {
            "en": "212",
            "hi": "212"
          },
          {
            "en": "216",
            "hi": "216"
          }
        ],
        "a": 1,
        "exp": {
          "en": "Logic: n : n(n + 1). 12 × 13 = 156. For 14: 14 × 15 = 210.",
          "hi": "तर्क: n : n(n + 1)। 12 × 13 = 156। इसी प्रकार 14 × 15 = 210।"
        }
      },
      {
        "id": 2,
        "subject": "General Intelligence & Reasoning",
        "q": {
          "en": "In a code language, 'ROBUST' is written as 'QNATRS'. How will 'STABLE' be written in that code language?",
          "hi": "एक निश्चित कूट भाषा में 'ROBUST' को 'QNATRS' लिखा जाता है। उसी कूट भाषा में 'STABLE' को कैसे लिखा जाएगा?"
        },
        "o": [
          {
            "en": "RSZAKD",
            "hi": "RSZAKD"
          },
          {
            "en": "RSZAKC",
            "hi": "RSZAKC"
          },
          {
            "en": "TRBCMF",
            "hi": "TRBCMF"
          },
          {
            "en": "RTAAKD",
            "hi": "RTAAKD"
          }
        ],
        "a": 0,
        "exp": {
          "en": "Logic: Each letter - 1 position. S-1=R, T-1=S, A-1=Z, B-1=A, L-1=K, E-1=D.",
          "hi": "तर्क: प्रत्येक अक्षर में -1 की कमी की गई है। S-1=R, T-1=S, A-1=Z, B-1=A, L-1=K, E-1=D → RSZAKD।"
        }
      },
      {
        "id": 3,
        "subject": "General Awareness",
        "q": {
          "en": "Which Article of the Indian Constitution provides for the appointment of the Finance Commission of India every 5 years?",
          "hi": "भारतीय संविधान का कौन सा अनुच्छेद प्रत्येक 5 वर्ष में भारत के वित्त आयोग के गठन का प्रावधान करता है?"
        },
        "o": [
          {
            "en": "Article 260",
            "hi": "अनुच्छेद 260"
          },
          {
            "en": "Article 280",
            "hi": "अनुच्छेद 280"
          },
          {
            "en": "Article 324",
            "hi": "अनुच्छेद 324"
          },
          {
            "en": "Article 356",
            "hi": "अनुच्छेद 356"
          }
        ],
        "a": 1,
        "exp": {
          "en": "Article 280 mandates that the President shall constitute a Finance Commission at the expiration of every fifth year.",
          "hi": "संविधान का अनुच्छेद 280 राष्ट्रपति द्वारा प्रत्येक 5 वर्ष की समाप्ति पर वित्त आयोग के गठन का प्रावधान करता है।"
        }
      },
      {
        "id": 4,
        "subject": "General Awareness",
        "q": {
          "en": "Mohiniyattam is a classical dance that originated and developed in which Indian state?",
          "hi": "मोहिनीअट्टम भारत का एक शास्त्रीय नृत्य रूप है, जिसकी उत्पत्ति और विकास किस राज्य में हुआ?"
        },
        "o": [
          {
            "en": "Tamil Nadu",
            "hi": "तमिलनाडु"
          },
          {
            "en": "Kerala",
            "hi": "केरल"
          },
          {
            "en": "Andhra Pradesh",
            "hi": "आंध्र प्रदेश"
          },
          {
            "en": "Karnataka",
            "hi": "कर्नाटक"
          }
        ],
        "a": 1,
        "exp": {
          "en": "Mohiniyattam originated in Kerala and is named after the celestial enchantress Mohini (avatar of Lord Vishnu).",
          "hi": "मोहिनीअट्टम की उत्पत्ति केरल में हुई थी। यह नाम भगवान विष्णु के मोहिनी अवतार पर आधारित है।"
        }
      },
      {
        "id": 5,
        "subject": "Quantitative Aptitude",
        "q": {
          "en": "A trader marks goods 30% above cost price and allows a 10% discount on marked price. Find net profit percentage.",
          "hi": "एक व्यापारी अपनी वस्तुओं पर क्रय मूल्य से 30% अधिक मूल्य अंकित करता है और 10% की छूट देता है। उसका शुद्ध लाभ प्रतिशत ज्ञात कीजिए।"
        },
        "o": [
          {
            "en": "15%",
            "hi": "15%"
          },
          {
            "en": "17%",
            "hi": "17%"
          },
          {
            "en": "18%",
            "hi": "18%"
          },
          {
            "en": "20%",
            "hi": "20%"
          }
        ],
        "a": 1,
        "exp": {
          "en": "CP = 100, MP = 130. Discount = 13. SP = 117. Net profit = 17%.",
          "hi": "माना CP = 100, तो MP = 130। छूट = 130 का 10% = 13। SP = 117। शुद्ध लाभ = 17%।"
        }
      },
      {
        "id": 6,
        "subject": "Quantitative Aptitude",
        "q": {
          "en": "If x + 1/x = 5, find the value of x³ + 1/x³.",
          "hi": "यदि x + 1/x = 5 है, तो x³ + 1/x³ का मान क्या होगा?"
        },
        "o": [
          {
            "en": "110",
            "hi": "110"
          },
          {
            "en": "115",
            "hi": "115"
          },
          {
            "en": "120",
            "hi": "120"
          },
          {
            "en": "125",
            "hi": "125"
          }
        ],
        "a": 0,
        "exp": {
          "en": "Formula: k³ - 3k = 5³ - 3(5) = 125 - 15 = 110.",
          "hi": "सूत्र: k³ - 3k = 125 - 15 = 110।"
        }
      },
      {
        "id": 7,
        "subject": "English Comprehension",
        "q": {
          "en": "Select the most appropriate SYNONYM of the given word:\n'BENEVOLENT'",
          "hi": "दिए गए शब्द का सर्वाधिक उपयुक्त पर्यायवाची (SYNONYM) चुनें:\n'BENEVOLENT'"
        },
        "o": [
          {
            "en": "Hostile",
            "hi": "शत्रुतापूर्ण"
          },
          {
            "en": "Generous",
            "hi": "उदार (दयालु)"
          },
          {
            "en": "Miserly",
            "hi": "कंजूस"
          },
          {
            "en": "Cruel",
            "hi": "निर्दयी"
          }
        ],
        "a": 1,
        "exp": {
          "en": "'Benevolent' means kindly and generous. Closest synonym is 'Generous'.",
          "hi": "'Benevolent' का अर्थ दयालु व परोपकारी होता है। इसका सही पर्यायवाची 'Generous' है।"
        }
      },
      {
        "id": 8,
        "subject": "English Comprehension",
        "q": {
          "en": "Identify the segment with grammatical error: 'Neither the teacher nor the students was present in the auditorium.'",
          "hi": "व्याकरण संबंधी त्रुटि वाले भाग को पहचानें: 'Neither the teacher nor the students was present in the auditorium.'"
        },
        "o": [
          {
            "en": "was present (Change to 'were present')",
            "hi": "was present (सही: 'were present')"
          },
          {
            "en": "Neither the teacher",
            "hi": "Neither the teacher"
          },
          {
            "en": "in the auditorium",
            "hi": "in the auditorium"
          },
          {
            "en": "No error",
            "hi": "कोई त्रुटि नहीं"
          }
        ],
        "a": 0,
        "exp": {
          "en": "With 'neither... nor', the verb agrees with the closer plural subject 'students', so 'were present' is correct.",
          "hi": "'Neither... nor' में क्रिया निकटतम कर्ता 'students' (बहुवचन) के अनुसार 'were present' होनी चाहिए।"
        }
      }
    ],
    "cgl_2024_s2": [
      {
        "id": 1,
        "subject": "General Intelligence & Reasoning",
        "q": {
          "en": "Find the missing number in the series:\n13, 17, 26, 42, 67, ?",
          "hi": "श्रृंखला में लुप्त संख्या ज्ञात कीजिए:\n13, 17, 26, 42, 67, ?"
        },
        "o": [
          {
            "en": "98",
            "hi": "98"
          },
          {
            "en": "103",
            "hi": "103"
          },
          {
            "en": "105",
            "hi": "105"
          },
          {
            "en": "108",
            "hi": "108"
          }
        ],
        "a": 1,
        "exp": {
          "en": "Pattern: +2² (4), +3² (9), +4² (16), +5² (25), +6² (36). 67 + 36 = 103.",
          "hi": "पैटर्न: +4, +9, +16, +25, +36। 67 + 36 = 103।"
        }
      },
      {
        "id": 2,
        "subject": "General Intelligence & Reasoning",
        "q": {
          "en": "Pointing to a man, Rahul said, 'He is the son of the only daughter of my father.' How is the man related to Rahul?",
          "hi": "एक व्यक्ति की तस्वीर की ओर इशारा करते हुए राहुल ने कहा, 'वह मेरे पिता की एकमात्र पुत्री का पुत्र है।' वह व्यक्ति राहुल से कैसे संबंधित है?"
        },
        "o": [
          {
            "en": "Brother",
            "hi": "भाई"
          },
          {
            "en": "Nephew (भांजा)",
            "hi": "भांजा (Nephew)"
          },
          {
            "en": "Son",
            "hi": "पुत्र"
          },
          {
            "en": "Uncle",
            "hi": "मामा"
          }
        ],
        "a": 1,
        "exp": {
          "en": "Father's only daughter = Rahul's sister. Her son = Nephew.",
          "hi": "राहुल के पिता की एकमात्र पुत्री = राहुल की बहन। बहन का पुत्र = भांजा (Nephew)।"
        }
      },
      {
        "id": 3,
        "subject": "General Awareness",
        "q": {
          "en": "Under whose reign was the Fourth Buddhist Council held at Kundalvana in Kashmir?",
          "hi": "कश्मीर के कुंडलवन में चतुर्थ बौद्ध संगीति किसके शासनकाल में आयोजित की गई थी?"
        },
        "o": [
          {
            "en": "Ashoka",
            "hi": "अशोक"
          },
          {
            "en": "Kanishka",
            "hi": "कनिष्क"
          },
          {
            "en": "Kalashoka",
            "hi": "कालाशोक"
          },
          {
            "en": "Harshavardhana",
            "hi": "हर्षवर्धन"
          }
        ],
        "a": 1,
        "exp": {
          "en": "Held under Kushan ruler Kanishka (~72 AD) under Vasumitra's presidency.",
          "hi": "चतुर्थ बौद्ध संगीति कुषाण शासक कनिष्क के शासनकाल में वसुमित्र की अध्यक्षता में हुई थी।"
        }
      },
      {
        "id": 4,
        "subject": "General Awareness",
        "q": {
          "en": "Which layer of the atmosphere contains the ozone layer that protects Earth from harmful UV rays?",
          "hi": "वायुमंडल की किस परत में ओजोन परत पाई जाती है जो पराबैंगनी किरणों से रक्षा करती है?"
        },
        "o": [
          {
            "en": "Troposphere",
            "hi": "क्षोभमंडल"
          },
          {
            "en": "Stratosphere",
            "hi": "समताप मंडल"
          },
          {
            "en": "Mesosphere",
            "hi": "मध्यमंडल"
          },
          {
            "en": "Thermosphere",
            "hi": "आयनमंडल"
          }
        ],
        "a": 1,
        "exp": {
          "en": "The ozone layer is located in the Stratosphere between 15-35 km altitude.",
          "hi": "ओजोन परत समताप मंडल (Stratosphere) में 15 से 35 किमी की ऊंचाई पर स्थित है।"
        }
      },
      {
        "id": 5,
        "subject": "Quantitative Aptitude",
        "q": {
          "en": "A and B can do a work in 15 and 20 days. They worked together for 4 days. What fraction of work is left?",
          "hi": "A और B किसी काम को 15 और 20 दिन में कर सकते हैं। उन्होंने 4 दिन साथ काम किया। कितना काम शेष बचा है?"
        },
        "o": [
          {
            "en": "7 / 15",
            "hi": "7 / 15"
          },
          {
            "en": "8 / 15",
            "hi": "8 / 15"
          },
          {
            "en": "11 / 15",
            "hi": "11 / 15"
          },
          {
            "en": "2 / 5",
            "hi": "2 / 5"
          }
        ],
        "a": 1,
        "exp": {
          "en": "Total = 60 units. A=4, B=3. In 4 days = 28 units. Remaining = 32/60 = 8/15.",
          "hi": "कुल कार्य = 60 इकाई। 4 दिन में कार्य = 28 इकाई। शेष कार्य = 32/60 = 8/15।"
        }
      },
      {
        "id": 6,
        "subject": "Quantitative Aptitude",
        "q": {
          "en": "Find the compound interest on ₹10,000 for 2 years at 10% per annum, compounded annually.",
          "hi": "₹10,000 पर 10% वार्षिक दर से 2 वर्ष का चक्रवृद्धि ब्याज क्या होगा?"
        },
        "o": [
          {
            "en": "₹2,000",
            "hi": "₹2,000"
          },
          {
            "en": "₹2,100",
            "hi": "₹2,100"
          },
          {
            "en": "₹2,200",
            "hi": "₹2,200"
          },
          {
            "en": "₹2,250",
            "hi": "₹2,250"
          }
        ],
        "a": 1,
        "exp": {
          "en": "Net CI% for 2 yrs = 10 + 10 + 1 = 21%. CI = 10000 × 21% = ₹2,100.",
          "hi": "2 वर्ष का शुद्ध CI दर = 21%। चक्रवृद्धि ब्याज = 10000 × 21% = ₹2,100।"
        }
      },
      {
        "id": 7,
        "subject": "English Comprehension",
        "q": {
          "en": "Select the most appropriate ANTONYM of the given word:\n'METICULOUS'",
          "hi": "दिए गए शब्द का सर्वाधिक उपयुक्त विलोम शब्द (ANTONYM) चुनें:\n'METICULOUS'"
        },
        "o": [
          {
            "en": "Careless",
            "hi": "लापरवाह (Careless)"
          },
          {
            "en": "Precise",
            "hi": "सटीक"
          },
          {
            "en": "Scrupulous",
            "hi": "कर्तव्यनिष्ठ"
          },
          {
            "en": "Accurate",
            "hi": "शुद्ध"
          }
        ],
        "a": 0,
        "exp": {
          "en": "'Meticulous' means careful and detail-oriented. Antonym is 'Careless'.",
          "hi": "'Meticulous' का विलोम 'Careless' (लापरवाह) है।"
        }
      },
      {
        "id": 8,
        "subject": "English Comprehension",
        "q": {
          "en": "Select the meaning of the idiom: 'To burn the midnight oil'",
          "hi": "मुहावरे का सही अर्थ चुनें: 'To burn the midnight oil'"
        },
        "o": [
          {
            "en": "To waste fuel",
            "hi": "ईंधन बर्बाद करना"
          },
          {
            "en": "To work or study late into the night",
            "hi": "देर रात तक कठिन परिश्रम या पढ़ाई करना"
          },
          {
            "en": "To sleep late",
            "hi": "देर से सोना"
          },
          {
            "en": "To burn lamps",
            "hi": "दीपक जलाना"
          }
        ],
        "a": 1,
        "exp": {
          "en": "Means working or studying diligently late into the night.",
          "hi": "इसका अर्थ देर रात तक कठिन परिश्रम या पढ़ाई करना होता है।"
        }
      }
    ],
    "cgl_2024_s3": [
      {
        "id": 1,
        "subject": "General Intelligence & Reasoning",
        "q": {
          "en": "Select the option that is related to the third number in the same way as the second number is related to the first number:\n12 : 156 :: 14 : ?",
          "hi": "उस विकल्प का चयन करें जो तीसरी संख्या से उसी प्रकार संबंधित है जैसे दूसरी संख्या पहली संख्या से संबंधित है:\n12 : 156 :: 14 : ?"
        },
        "o": [
          {
            "en": "208",
            "hi": "208"
          },
          {
            "en": "210",
            "hi": "210"
          },
          {
            "en": "212",
            "hi": "212"
          },
          {
            "en": "216",
            "hi": "216"
          }
        ],
        "a": 1,
        "exp": {
          "en": "Logic: n : n(n + 1). 12 × 13 = 156. For 14: 14 × 15 = 210.",
          "hi": "तर्क: n : n(n + 1)। 12 × 13 = 156। इसी प्रकार 14 × 15 = 210।"
        }
      },
      {
        "id": 2,
        "subject": "General Intelligence & Reasoning",
        "q": {
          "en": "In a code language, 'ROBUST' is written as 'QNATRS'. How will 'STABLE' be written in that code language?",
          "hi": "एक निश्चित कूट भाषा में 'ROBUST' को 'QNATRS' लिखा जाता है। उसी कूट भाषा में 'STABLE' को कैसे लिखा जाएगा?"
        },
        "o": [
          {
            "en": "RSZAKD",
            "hi": "RSZAKD"
          },
          {
            "en": "RSZAKC",
            "hi": "RSZAKC"
          },
          {
            "en": "TRBCMF",
            "hi": "TRBCMF"
          },
          {
            "en": "RTAAKD",
            "hi": "RTAAKD"
          }
        ],
        "a": 0,
        "exp": {
          "en": "Logic: Each letter - 1 position. S-1=R, T-1=S, A-1=Z, B-1=A, L-1=K, E-1=D.",
          "hi": "तर्क: प्रत्येक अक्षर में -1 की कमी की गई है। S-1=R, T-1=S, A-1=Z, B-1=A, L-1=K, E-1=D → RSZAKD।"
        }
      },
      {
        "id": 3,
        "subject": "General Awareness",
        "q": {
          "en": "Which Article of the Indian Constitution provides for the appointment of the Finance Commission of India every 5 years?",
          "hi": "भारतीय संविधान का कौन सा अनुच्छेद प्रत्येक 5 वर्ष में भारत के वित्त आयोग के गठन का प्रावधान करता है?"
        },
        "o": [
          {
            "en": "Article 260",
            "hi": "अनुच्छेद 260"
          },
          {
            "en": "Article 280",
            "hi": "अनुच्छेद 280"
          },
          {
            "en": "Article 324",
            "hi": "अनुच्छेद 324"
          },
          {
            "en": "Article 356",
            "hi": "अनुच्छेद 356"
          }
        ],
        "a": 1,
        "exp": {
          "en": "Article 280 mandates that the President shall constitute a Finance Commission at the expiration of every fifth year.",
          "hi": "संविधान का अनुच्छेद 280 राष्ट्रपति द्वारा प्रत्येक 5 वर्ष की समाप्ति पर वित्त आयोग के गठन का प्रावधान करता है।"
        }
      },
      {
        "id": 4,
        "subject": "General Awareness",
        "q": {
          "en": "Mohiniyattam is a classical dance that originated and developed in which Indian state?",
          "hi": "मोहिनीअट्टम भारत का एक शास्त्रीय नृत्य रूप है, जिसकी उत्पत्ति और विकास किस राज्य में हुआ?"
        },
        "o": [
          {
            "en": "Tamil Nadu",
            "hi": "तमिलनाडु"
          },
          {
            "en": "Kerala",
            "hi": "केरल"
          },
          {
            "en": "Andhra Pradesh",
            "hi": "आंध्र प्रदेश"
          },
          {
            "en": "Karnataka",
            "hi": "कर्नाटक"
          }
        ],
        "a": 1,
        "exp": {
          "en": "Mohiniyattam originated in Kerala and is named after the celestial enchantress Mohini (avatar of Lord Vishnu).",
          "hi": "मोहिनीअट्टम की उत्पत्ति केरल में हुई थी। यह नाम भगवान विष्णु के मोहिनी अवतार पर आधारित है।"
        }
      },
      {
        "id": 5,
        "subject": "Quantitative Aptitude",
        "q": {
          "en": "A trader marks goods 30% above cost price and allows a 10% discount on marked price. Find net profit percentage.",
          "hi": "एक व्यापारी अपनी वस्तुओं पर क्रय मूल्य से 30% अधिक मूल्य अंकित करता है और 10% की छूट देता है। उसका शुद्ध लाभ प्रतिशत ज्ञात कीजिए।"
        },
        "o": [
          {
            "en": "15%",
            "hi": "15%"
          },
          {
            "en": "17%",
            "hi": "17%"
          },
          {
            "en": "18%",
            "hi": "18%"
          },
          {
            "en": "20%",
            "hi": "20%"
          }
        ],
        "a": 1,
        "exp": {
          "en": "CP = 100, MP = 130. Discount = 13. SP = 117. Net profit = 17%.",
          "hi": "माना CP = 100, तो MP = 130। छूट = 130 का 10% = 13। SP = 117। शुद्ध लाभ = 17%।"
        }
      },
      {
        "id": 6,
        "subject": "Quantitative Aptitude",
        "q": {
          "en": "If x + 1/x = 5, find the value of x³ + 1/x³.",
          "hi": "यदि x + 1/x = 5 है, तो x³ + 1/x³ का मान क्या होगा?"
        },
        "o": [
          {
            "en": "110",
            "hi": "110"
          },
          {
            "en": "115",
            "hi": "115"
          },
          {
            "en": "120",
            "hi": "120"
          },
          {
            "en": "125",
            "hi": "125"
          }
        ],
        "a": 0,
        "exp": {
          "en": "Formula: k³ - 3k = 5³ - 3(5) = 125 - 15 = 110.",
          "hi": "सूत्र: k³ - 3k = 125 - 15 = 110।"
        }
      },
      {
        "id": 7,
        "subject": "English Comprehension",
        "q": {
          "en": "Select the most appropriate SYNONYM of the given word:\n'BENEVOLENT'",
          "hi": "दिए गए शब्द का सर्वाधिक उपयुक्त पर्यायवाची (SYNONYM) चुनें:\n'BENEVOLENT'"
        },
        "o": [
          {
            "en": "Hostile",
            "hi": "शत्रुतापूर्ण"
          },
          {
            "en": "Generous",
            "hi": "उदार (दयालु)"
          },
          {
            "en": "Miserly",
            "hi": "कंजूस"
          },
          {
            "en": "Cruel",
            "hi": "निर्दयी"
          }
        ],
        "a": 1,
        "exp": {
          "en": "'Benevolent' means kindly and generous. Closest synonym is 'Generous'.",
          "hi": "'Benevolent' का अर्थ दयालु व परोपकारी होता है। इसका सही पर्यायवाची 'Generous' है।"
        }
      },
      {
        "id": 8,
        "subject": "English Comprehension",
        "q": {
          "en": "Identify the segment with grammatical error: 'Neither the teacher nor the students was present in the auditorium.'",
          "hi": "व्याकरण संबंधी त्रुटि वाले भाग को पहचानें: 'Neither the teacher nor the students was present in the auditorium.'"
        },
        "o": [
          {
            "en": "was present (Change to 'were present')",
            "hi": "was present (सही: 'were present')"
          },
          {
            "en": "Neither the teacher",
            "hi": "Neither the teacher"
          },
          {
            "en": "in the auditorium",
            "hi": "in the auditorium"
          },
          {
            "en": "No error",
            "hi": "कोई त्रुटि नहीं"
          }
        ],
        "a": 0,
        "exp": {
          "en": "With 'neither... nor', the verb agrees with the closer plural subject 'students', so 'were present' is correct.",
          "hi": "'Neither... nor' में क्रिया निकटतम कर्ता 'students' (बहुवचन) के अनुसार 'were present' होनी चाहिए।"
        }
      }
    ],
    "cgl_2024_mock": [
      {
        "id": 1,
        "subject": "General Intelligence & Reasoning",
        "q": {
          "en": "Find the missing number in the series:\n13, 17, 26, 42, 67, ?",
          "hi": "श्रृंखला में लुप्त संख्या ज्ञात कीजिए:\n13, 17, 26, 42, 67, ?"
        },
        "o": [
          {
            "en": "98",
            "hi": "98"
          },
          {
            "en": "103",
            "hi": "103"
          },
          {
            "en": "105",
            "hi": "105"
          },
          {
            "en": "108",
            "hi": "108"
          }
        ],
        "a": 1,
        "exp": {
          "en": "Pattern: +2² (4), +3² (9), +4² (16), +5² (25), +6² (36). 67 + 36 = 103.",
          "hi": "पैटर्न: +4, +9, +16, +25, +36। 67 + 36 = 103।"
        }
      },
      {
        "id": 2,
        "subject": "General Intelligence & Reasoning",
        "q": {
          "en": "Pointing to a man, Rahul said, 'He is the son of the only daughter of my father.' How is the man related to Rahul?",
          "hi": "एक व्यक्ति की तस्वीर की ओर इशारा करते हुए राहुल ने कहा, 'वह मेरे पिता की एकमात्र पुत्री का पुत्र है।' वह व्यक्ति राहुल से कैसे संबंधित है?"
        },
        "o": [
          {
            "en": "Brother",
            "hi": "भाई"
          },
          {
            "en": "Nephew (भांजा)",
            "hi": "भांजा (Nephew)"
          },
          {
            "en": "Son",
            "hi": "पुत्र"
          },
          {
            "en": "Uncle",
            "hi": "मामा"
          }
        ],
        "a": 1,
        "exp": {
          "en": "Father's only daughter = Rahul's sister. Her son = Nephew.",
          "hi": "राहुल के पिता की एकमात्र पुत्री = राहुल की बहन। बहन का पुत्र = भांजा (Nephew)।"
        }
      },
      {
        "id": 3,
        "subject": "General Awareness",
        "q": {
          "en": "Under whose reign was the Fourth Buddhist Council held at Kundalvana in Kashmir?",
          "hi": "कश्मीर के कुंडलवन में चतुर्थ बौद्ध संगीति किसके शासनकाल में आयोजित की गई थी?"
        },
        "o": [
          {
            "en": "Ashoka",
            "hi": "अशोक"
          },
          {
            "en": "Kanishka",
            "hi": "कनिष्क"
          },
          {
            "en": "Kalashoka",
            "hi": "कालाशोक"
          },
          {
            "en": "Harshavardhana",
            "hi": "हर्षवर्धन"
          }
        ],
        "a": 1,
        "exp": {
          "en": "Held under Kushan ruler Kanishka (~72 AD) under Vasumitra's presidency.",
          "hi": "चतुर्थ बौद्ध संगीति कुषाण शासक कनिष्क के शासनकाल में वसुमित्र की अध्यक्षता में हुई थी।"
        }
      },
      {
        "id": 4,
        "subject": "General Awareness",
        "q": {
          "en": "Which layer of the atmosphere contains the ozone layer that protects Earth from harmful UV rays?",
          "hi": "वायुमंडल की किस परत में ओजोन परत पाई जाती है जो पराबैंगनी किरणों से रक्षा करती है?"
        },
        "o": [
          {
            "en": "Troposphere",
            "hi": "क्षोभमंडल"
          },
          {
            "en": "Stratosphere",
            "hi": "समताप मंडल"
          },
          {
            "en": "Mesosphere",
            "hi": "मध्यमंडल"
          },
          {
            "en": "Thermosphere",
            "hi": "आयनमंडल"
          }
        ],
        "a": 1,
        "exp": {
          "en": "The ozone layer is located in the Stratosphere between 15-35 km altitude.",
          "hi": "ओजोन परत समताप मंडल (Stratosphere) में 15 से 35 किमी की ऊंचाई पर स्थित है।"
        }
      },
      {
        "id": 5,
        "subject": "Quantitative Aptitude",
        "q": {
          "en": "A and B can do a work in 15 and 20 days. They worked together for 4 days. What fraction of work is left?",
          "hi": "A और B किसी काम को 15 और 20 दिन में कर सकते हैं। उन्होंने 4 दिन साथ काम किया। कितना काम शेष बचा है?"
        },
        "o": [
          {
            "en": "7 / 15",
            "hi": "7 / 15"
          },
          {
            "en": "8 / 15",
            "hi": "8 / 15"
          },
          {
            "en": "11 / 15",
            "hi": "11 / 15"
          },
          {
            "en": "2 / 5",
            "hi": "2 / 5"
          }
        ],
        "a": 1,
        "exp": {
          "en": "Total = 60 units. A=4, B=3. In 4 days = 28 units. Remaining = 32/60 = 8/15.",
          "hi": "कुल कार्य = 60 इकाई। 4 दिन में कार्य = 28 इकाई। शेष कार्य = 32/60 = 8/15।"
        }
      },
      {
        "id": 6,
        "subject": "Quantitative Aptitude",
        "q": {
          "en": "Find the compound interest on ₹10,000 for 2 years at 10% per annum, compounded annually.",
          "hi": "₹10,000 पर 10% वार्षिक दर से 2 वर्ष का चक्रवृद्धि ब्याज क्या होगा?"
        },
        "o": [
          {
            "en": "₹2,000",
            "hi": "₹2,000"
          },
          {
            "en": "₹2,100",
            "hi": "₹2,100"
          },
          {
            "en": "₹2,200",
            "hi": "₹2,200"
          },
          {
            "en": "₹2,250",
            "hi": "₹2,250"
          }
        ],
        "a": 1,
        "exp": {
          "en": "Net CI% for 2 yrs = 10 + 10 + 1 = 21%. CI = 10000 × 21% = ₹2,100.",
          "hi": "2 वर्ष का शुद्ध CI दर = 21%। चक्रवृद्धि ब्याज = 10000 × 21% = ₹2,100।"
        }
      },
      {
        "id": 7,
        "subject": "English Comprehension",
        "q": {
          "en": "Select the most appropriate ANTONYM of the given word:\n'METICULOUS'",
          "hi": "दिए गए शब्द का सर्वाधिक उपयुक्त विलोम शब्द (ANTONYM) चुनें:\n'METICULOUS'"
        },
        "o": [
          {
            "en": "Careless",
            "hi": "लापरवाह (Careless)"
          },
          {
            "en": "Precise",
            "hi": "सटीक"
          },
          {
            "en": "Scrupulous",
            "hi": "कर्तव्यनिष्ठ"
          },
          {
            "en": "Accurate",
            "hi": "शुद्ध"
          }
        ],
        "a": 0,
        "exp": {
          "en": "'Meticulous' means careful and detail-oriented. Antonym is 'Careless'.",
          "hi": "'Meticulous' का विलोम 'Careless' (लापरवाह) है।"
        }
      },
      {
        "id": 8,
        "subject": "English Comprehension",
        "q": {
          "en": "Select the meaning of the idiom: 'To burn the midnight oil'",
          "hi": "मुहावरे का सही अर्थ चुनें: 'To burn the midnight oil'"
        },
        "o": [
          {
            "en": "To waste fuel",
            "hi": "ईंधन बर्बाद करना"
          },
          {
            "en": "To work or study late into the night",
            "hi": "देर रात तक कठिन परिश्रम या पढ़ाई करना"
          },
          {
            "en": "To sleep late",
            "hi": "देर से सोना"
          },
          {
            "en": "To burn lamps",
            "hi": "दीपक जलाना"
          }
        ],
        "a": 1,
        "exp": {
          "en": "Means working or studying diligently late into the night.",
          "hi": "इसका अर्थ देर रात तक कठिन परिश्रम या पढ़ाई करना होता है।"
        }
      }
    ],
    "cgl_2023_s1": [
      {
        "id": 1,
        "subject": "General Intelligence & Reasoning",
        "q": {
          "en": "Select the option that is related to the third number in the same way as the second number is related to the first number:\n12 : 156 :: 14 : ?",
          "hi": "उस विकल्प का चयन करें जो तीसरी संख्या से उसी प्रकार संबंधित है जैसे दूसरी संख्या पहली संख्या से संबंधित है:\n12 : 156 :: 14 : ?"
        },
        "o": [
          {
            "en": "208",
            "hi": "208"
          },
          {
            "en": "210",
            "hi": "210"
          },
          {
            "en": "212",
            "hi": "212"
          },
          {
            "en": "216",
            "hi": "216"
          }
        ],
        "a": 1,
        "exp": {
          "en": "Logic: n : n(n + 1). 12 × 13 = 156. For 14: 14 × 15 = 210.",
          "hi": "तर्क: n : n(n + 1)। 12 × 13 = 156। इसी प्रकार 14 × 15 = 210।"
        }
      },
      {
        "id": 2,
        "subject": "General Intelligence & Reasoning",
        "q": {
          "en": "In a code language, 'ROBUST' is written as 'QNATRS'. How will 'STABLE' be written in that code language?",
          "hi": "एक निश्चित कूट भाषा में 'ROBUST' को 'QNATRS' लिखा जाता है। उसी कूट भाषा में 'STABLE' को कैसे लिखा जाएगा?"
        },
        "o": [
          {
            "en": "RSZAKD",
            "hi": "RSZAKD"
          },
          {
            "en": "RSZAKC",
            "hi": "RSZAKC"
          },
          {
            "en": "TRBCMF",
            "hi": "TRBCMF"
          },
          {
            "en": "RTAAKD",
            "hi": "RTAAKD"
          }
        ],
        "a": 0,
        "exp": {
          "en": "Logic: Each letter - 1 position. S-1=R, T-1=S, A-1=Z, B-1=A, L-1=K, E-1=D.",
          "hi": "तर्क: प्रत्येक अक्षर में -1 की कमी की गई है। S-1=R, T-1=S, A-1=Z, B-1=A, L-1=K, E-1=D → RSZAKD।"
        }
      },
      {
        "id": 3,
        "subject": "General Awareness",
        "q": {
          "en": "Which Article of the Indian Constitution provides for the appointment of the Finance Commission of India every 5 years?",
          "hi": "भारतीय संविधान का कौन सा अनुच्छेद प्रत्येक 5 वर्ष में भारत के वित्त आयोग के गठन का प्रावधान करता है?"
        },
        "o": [
          {
            "en": "Article 260",
            "hi": "अनुच्छेद 260"
          },
          {
            "en": "Article 280",
            "hi": "अनुच्छेद 280"
          },
          {
            "en": "Article 324",
            "hi": "अनुच्छेद 324"
          },
          {
            "en": "Article 356",
            "hi": "अनुच्छेद 356"
          }
        ],
        "a": 1,
        "exp": {
          "en": "Article 280 mandates that the President shall constitute a Finance Commission at the expiration of every fifth year.",
          "hi": "संविधान का अनुच्छेद 280 राष्ट्रपति द्वारा प्रत्येक 5 वर्ष की समाप्ति पर वित्त आयोग के गठन का प्रावधान करता है।"
        }
      },
      {
        "id": 4,
        "subject": "General Awareness",
        "q": {
          "en": "Mohiniyattam is a classical dance that originated and developed in which Indian state?",
          "hi": "मोहिनीअट्टम भारत का एक शास्त्रीय नृत्य रूप है, जिसकी उत्पत्ति और विकास किस राज्य में हुआ?"
        },
        "o": [
          {
            "en": "Tamil Nadu",
            "hi": "तमिलनाडु"
          },
          {
            "en": "Kerala",
            "hi": "केरल"
          },
          {
            "en": "Andhra Pradesh",
            "hi": "आंध्र प्रदेश"
          },
          {
            "en": "Karnataka",
            "hi": "कर्नाटक"
          }
        ],
        "a": 1,
        "exp": {
          "en": "Mohiniyattam originated in Kerala and is named after the celestial enchantress Mohini (avatar of Lord Vishnu).",
          "hi": "मोहिनीअट्टम की उत्पत्ति केरल में हुई थी। यह नाम भगवान विष्णु के मोहिनी अवतार पर आधारित है।"
        }
      },
      {
        "id": 5,
        "subject": "Quantitative Aptitude",
        "q": {
          "en": "A trader marks goods 30% above cost price and allows a 10% discount on marked price. Find net profit percentage.",
          "hi": "एक व्यापारी अपनी वस्तुओं पर क्रय मूल्य से 30% अधिक मूल्य अंकित करता है और 10% की छूट देता है। उसका शुद्ध लाभ प्रतिशत ज्ञात कीजिए।"
        },
        "o": [
          {
            "en": "15%",
            "hi": "15%"
          },
          {
            "en": "17%",
            "hi": "17%"
          },
          {
            "en": "18%",
            "hi": "18%"
          },
          {
            "en": "20%",
            "hi": "20%"
          }
        ],
        "a": 1,
        "exp": {
          "en": "CP = 100, MP = 130. Discount = 13. SP = 117. Net profit = 17%.",
          "hi": "माना CP = 100, तो MP = 130। छूट = 130 का 10% = 13। SP = 117। शुद्ध लाभ = 17%।"
        }
      },
      {
        "id": 6,
        "subject": "Quantitative Aptitude",
        "q": {
          "en": "If x + 1/x = 5, find the value of x³ + 1/x³.",
          "hi": "यदि x + 1/x = 5 है, तो x³ + 1/x³ का मान क्या होगा?"
        },
        "o": [
          {
            "en": "110",
            "hi": "110"
          },
          {
            "en": "115",
            "hi": "115"
          },
          {
            "en": "120",
            "hi": "120"
          },
          {
            "en": "125",
            "hi": "125"
          }
        ],
        "a": 0,
        "exp": {
          "en": "Formula: k³ - 3k = 5³ - 3(5) = 125 - 15 = 110.",
          "hi": "सूत्र: k³ - 3k = 125 - 15 = 110।"
        }
      },
      {
        "id": 7,
        "subject": "English Comprehension",
        "q": {
          "en": "Select the most appropriate SYNONYM of the given word:\n'BENEVOLENT'",
          "hi": "दिए गए शब्द का सर्वाधिक उपयुक्त पर्यायवाची (SYNONYM) चुनें:\n'BENEVOLENT'"
        },
        "o": [
          {
            "en": "Hostile",
            "hi": "शत्रुतापूर्ण"
          },
          {
            "en": "Generous",
            "hi": "उदार (दयालु)"
          },
          {
            "en": "Miserly",
            "hi": "कंजूस"
          },
          {
            "en": "Cruel",
            "hi": "निर्दयी"
          }
        ],
        "a": 1,
        "exp": {
          "en": "'Benevolent' means kindly and generous. Closest synonym is 'Generous'.",
          "hi": "'Benevolent' का अर्थ दयालु व परोपकारी होता है। इसका सही पर्यायवाची 'Generous' है।"
        }
      },
      {
        "id": 8,
        "subject": "English Comprehension",
        "q": {
          "en": "Identify the segment with grammatical error: 'Neither the teacher nor the students was present in the auditorium.'",
          "hi": "व्याकरण संबंधी त्रुटि वाले भाग को पहचानें: 'Neither the teacher nor the students was present in the auditorium.'"
        },
        "o": [
          {
            "en": "was present (Change to 'were present')",
            "hi": "was present (सही: 'were present')"
          },
          {
            "en": "Neither the teacher",
            "hi": "Neither the teacher"
          },
          {
            "en": "in the auditorium",
            "hi": "in the auditorium"
          },
          {
            "en": "No error",
            "hi": "कोई त्रुटि नहीं"
          }
        ],
        "a": 0,
        "exp": {
          "en": "With 'neither... nor', the verb agrees with the closer plural subject 'students', so 'were present' is correct.",
          "hi": "'Neither... nor' में क्रिया निकटतम कर्ता 'students' (बहुवचन) के अनुसार 'were present' होनी चाहिए।"
        }
      }
    ],
    "cgl_2023_s2": [
      {
        "id": 1,
        "subject": "General Intelligence & Reasoning",
        "q": {
          "en": "Find the missing number in the series:\n13, 17, 26, 42, 67, ?",
          "hi": "श्रृंखला में लुप्त संख्या ज्ञात कीजिए:\n13, 17, 26, 42, 67, ?"
        },
        "o": [
          {
            "en": "98",
            "hi": "98"
          },
          {
            "en": "103",
            "hi": "103"
          },
          {
            "en": "105",
            "hi": "105"
          },
          {
            "en": "108",
            "hi": "108"
          }
        ],
        "a": 1,
        "exp": {
          "en": "Pattern: +2² (4), +3² (9), +4² (16), +5² (25), +6² (36). 67 + 36 = 103.",
          "hi": "पैटर्न: +4, +9, +16, +25, +36। 67 + 36 = 103।"
        }
      },
      {
        "id": 2,
        "subject": "General Intelligence & Reasoning",
        "q": {
          "en": "Pointing to a man, Rahul said, 'He is the son of the only daughter of my father.' How is the man related to Rahul?",
          "hi": "एक व्यक्ति की तस्वीर की ओर इशारा करते हुए राहुल ने कहा, 'वह मेरे पिता की एकमात्र पुत्री का पुत्र है।' वह व्यक्ति राहुल से कैसे संबंधित है?"
        },
        "o": [
          {
            "en": "Brother",
            "hi": "भाई"
          },
          {
            "en": "Nephew (भांजा)",
            "hi": "भांजा (Nephew)"
          },
          {
            "en": "Son",
            "hi": "पुत्र"
          },
          {
            "en": "Uncle",
            "hi": "मामा"
          }
        ],
        "a": 1,
        "exp": {
          "en": "Father's only daughter = Rahul's sister. Her son = Nephew.",
          "hi": "राहुल के पिता की एकमात्र पुत्री = राहुल की बहन। बहन का पुत्र = भांजा (Nephew)।"
        }
      },
      {
        "id": 3,
        "subject": "General Awareness",
        "q": {
          "en": "Under whose reign was the Fourth Buddhist Council held at Kundalvana in Kashmir?",
          "hi": "कश्मीर के कुंडलवन में चतुर्थ बौद्ध संगीति किसके शासनकाल में आयोजित की गई थी?"
        },
        "o": [
          {
            "en": "Ashoka",
            "hi": "अशोक"
          },
          {
            "en": "Kanishka",
            "hi": "कनिष्क"
          },
          {
            "en": "Kalashoka",
            "hi": "कालाशोक"
          },
          {
            "en": "Harshavardhana",
            "hi": "हर्षवर्धन"
          }
        ],
        "a": 1,
        "exp": {
          "en": "Held under Kushan ruler Kanishka (~72 AD) under Vasumitra's presidency.",
          "hi": "चतुर्थ बौद्ध संगीति कुषाण शासक कनिष्क के शासनकाल में वसुमित्र की अध्यक्षता में हुई थी।"
        }
      },
      {
        "id": 4,
        "subject": "General Awareness",
        "q": {
          "en": "Which layer of the atmosphere contains the ozone layer that protects Earth from harmful UV rays?",
          "hi": "वायुमंडल की किस परत में ओजोन परत पाई जाती है जो पराबैंगनी किरणों से रक्षा करती है?"
        },
        "o": [
          {
            "en": "Troposphere",
            "hi": "क्षोभमंडल"
          },
          {
            "en": "Stratosphere",
            "hi": "समताप मंडल"
          },
          {
            "en": "Mesosphere",
            "hi": "मध्यमंडल"
          },
          {
            "en": "Thermosphere",
            "hi": "आयनमंडल"
          }
        ],
        "a": 1,
        "exp": {
          "en": "The ozone layer is located in the Stratosphere between 15-35 km altitude.",
          "hi": "ओजोन परत समताप मंडल (Stratosphere) में 15 से 35 किमी की ऊंचाई पर स्थित है।"
        }
      },
      {
        "id": 5,
        "subject": "Quantitative Aptitude",
        "q": {
          "en": "A and B can do a work in 15 and 20 days. They worked together for 4 days. What fraction of work is left?",
          "hi": "A और B किसी काम को 15 और 20 दिन में कर सकते हैं। उन्होंने 4 दिन साथ काम किया। कितना काम शेष बचा है?"
        },
        "o": [
          {
            "en": "7 / 15",
            "hi": "7 / 15"
          },
          {
            "en": "8 / 15",
            "hi": "8 / 15"
          },
          {
            "en": "11 / 15",
            "hi": "11 / 15"
          },
          {
            "en": "2 / 5",
            "hi": "2 / 5"
          }
        ],
        "a": 1,
        "exp": {
          "en": "Total = 60 units. A=4, B=3. In 4 days = 28 units. Remaining = 32/60 = 8/15.",
          "hi": "कुल कार्य = 60 इकाई। 4 दिन में कार्य = 28 इकाई। शेष कार्य = 32/60 = 8/15।"
        }
      },
      {
        "id": 6,
        "subject": "Quantitative Aptitude",
        "q": {
          "en": "Find the compound interest on ₹10,000 for 2 years at 10% per annum, compounded annually.",
          "hi": "₹10,000 पर 10% वार्षिक दर से 2 वर्ष का चक्रवृद्धि ब्याज क्या होगा?"
        },
        "o": [
          {
            "en": "₹2,000",
            "hi": "₹2,000"
          },
          {
            "en": "₹2,100",
            "hi": "₹2,100"
          },
          {
            "en": "₹2,200",
            "hi": "₹2,200"
          },
          {
            "en": "₹2,250",
            "hi": "₹2,250"
          }
        ],
        "a": 1,
        "exp": {
          "en": "Net CI% for 2 yrs = 10 + 10 + 1 = 21%. CI = 10000 × 21% = ₹2,100.",
          "hi": "2 वर्ष का शुद्ध CI दर = 21%। चक्रवृद्धि ब्याज = 10000 × 21% = ₹2,100।"
        }
      },
      {
        "id": 7,
        "subject": "English Comprehension",
        "q": {
          "en": "Select the most appropriate ANTONYM of the given word:\n'METICULOUS'",
          "hi": "दिए गए शब्द का सर्वाधिक उपयुक्त विलोम शब्द (ANTONYM) चुनें:\n'METICULOUS'"
        },
        "o": [
          {
            "en": "Careless",
            "hi": "लापरवाह (Careless)"
          },
          {
            "en": "Precise",
            "hi": "सटीक"
          },
          {
            "en": "Scrupulous",
            "hi": "कर्तव्यनिष्ठ"
          },
          {
            "en": "Accurate",
            "hi": "शुद्ध"
          }
        ],
        "a": 0,
        "exp": {
          "en": "'Meticulous' means careful and detail-oriented. Antonym is 'Careless'.",
          "hi": "'Meticulous' का विलोम 'Careless' (लापरवाह) है।"
        }
      },
      {
        "id": 8,
        "subject": "English Comprehension",
        "q": {
          "en": "Select the meaning of the idiom: 'To burn the midnight oil'",
          "hi": "मुहावरे का सही अर्थ चुनें: 'To burn the midnight oil'"
        },
        "o": [
          {
            "en": "To waste fuel",
            "hi": "ईंधन बर्बाद करना"
          },
          {
            "en": "To work or study late into the night",
            "hi": "देर रात तक कठिन परिश्रम या पढ़ाई करना"
          },
          {
            "en": "To sleep late",
            "hi": "देर से सोना"
          },
          {
            "en": "To burn lamps",
            "hi": "दीपक जलाना"
          }
        ],
        "a": 1,
        "exp": {
          "en": "Means working or studying diligently late into the night.",
          "hi": "इसका अर्थ देर रात तक कठिन परिश्रम या पढ़ाई करना होता है।"
        }
      }
    ],
    "cgl_2023_s3": [
      {
        "id": 1,
        "subject": "General Intelligence & Reasoning",
        "q": {
          "en": "Select the option that is related to the third number in the same way as the second number is related to the first number:\n12 : 156 :: 14 : ?",
          "hi": "उस विकल्प का चयन करें जो तीसरी संख्या से उसी प्रकार संबंधित है जैसे दूसरी संख्या पहली संख्या से संबंधित है:\n12 : 156 :: 14 : ?"
        },
        "o": [
          {
            "en": "208",
            "hi": "208"
          },
          {
            "en": "210",
            "hi": "210"
          },
          {
            "en": "212",
            "hi": "212"
          },
          {
            "en": "216",
            "hi": "216"
          }
        ],
        "a": 1,
        "exp": {
          "en": "Logic: n : n(n + 1). 12 × 13 = 156. For 14: 14 × 15 = 210.",
          "hi": "तर्क: n : n(n + 1)। 12 × 13 = 156। इसी प्रकार 14 × 15 = 210।"
        }
      },
      {
        "id": 2,
        "subject": "General Intelligence & Reasoning",
        "q": {
          "en": "In a code language, 'ROBUST' is written as 'QNATRS'. How will 'STABLE' be written in that code language?",
          "hi": "एक निश्चित कूट भाषा में 'ROBUST' को 'QNATRS' लिखा जाता है। उसी कूट भाषा में 'STABLE' को कैसे लिखा जाएगा?"
        },
        "o": [
          {
            "en": "RSZAKD",
            "hi": "RSZAKD"
          },
          {
            "en": "RSZAKC",
            "hi": "RSZAKC"
          },
          {
            "en": "TRBCMF",
            "hi": "TRBCMF"
          },
          {
            "en": "RTAAKD",
            "hi": "RTAAKD"
          }
        ],
        "a": 0,
        "exp": {
          "en": "Logic: Each letter - 1 position. S-1=R, T-1=S, A-1=Z, B-1=A, L-1=K, E-1=D.",
          "hi": "तर्क: प्रत्येक अक्षर में -1 की कमी की गई है। S-1=R, T-1=S, A-1=Z, B-1=A, L-1=K, E-1=D → RSZAKD।"
        }
      },
      {
        "id": 3,
        "subject": "General Awareness",
        "q": {
          "en": "Which Article of the Indian Constitution provides for the appointment of the Finance Commission of India every 5 years?",
          "hi": "भारतीय संविधान का कौन सा अनुच्छेद प्रत्येक 5 वर्ष में भारत के वित्त आयोग के गठन का प्रावधान करता है?"
        },
        "o": [
          {
            "en": "Article 260",
            "hi": "अनुच्छेद 260"
          },
          {
            "en": "Article 280",
            "hi": "अनुच्छेद 280"
          },
          {
            "en": "Article 324",
            "hi": "अनुच्छेद 324"
          },
          {
            "en": "Article 356",
            "hi": "अनुच्छेद 356"
          }
        ],
        "a": 1,
        "exp": {
          "en": "Article 280 mandates that the President shall constitute a Finance Commission at the expiration of every fifth year.",
          "hi": "संविधान का अनुच्छेद 280 राष्ट्रपति द्वारा प्रत्येक 5 वर्ष की समाप्ति पर वित्त आयोग के गठन का प्रावधान करता है।"
        }
      },
      {
        "id": 4,
        "subject": "General Awareness",
        "q": {
          "en": "Mohiniyattam is a classical dance that originated and developed in which Indian state?",
          "hi": "मोहिनीअट्टम भारत का एक शास्त्रीय नृत्य रूप है, जिसकी उत्पत्ति और विकास किस राज्य में हुआ?"
        },
        "o": [
          {
            "en": "Tamil Nadu",
            "hi": "तमिलनाडु"
          },
          {
            "en": "Kerala",
            "hi": "केरल"
          },
          {
            "en": "Andhra Pradesh",
            "hi": "आंध्र प्रदेश"
          },
          {
            "en": "Karnataka",
            "hi": "कर्नाटक"
          }
        ],
        "a": 1,
        "exp": {
          "en": "Mohiniyattam originated in Kerala and is named after the celestial enchantress Mohini (avatar of Lord Vishnu).",
          "hi": "मोहिनीअट्टम की उत्पत्ति केरल में हुई थी। यह नाम भगवान विष्णु के मोहिनी अवतार पर आधारित है।"
        }
      },
      {
        "id": 5,
        "subject": "Quantitative Aptitude",
        "q": {
          "en": "A trader marks goods 30% above cost price and allows a 10% discount on marked price. Find net profit percentage.",
          "hi": "एक व्यापारी अपनी वस्तुओं पर क्रय मूल्य से 30% अधिक मूल्य अंकित करता है और 10% की छूट देता है। उसका शुद्ध लाभ प्रतिशत ज्ञात कीजिए।"
        },
        "o": [
          {
            "en": "15%",
            "hi": "15%"
          },
          {
            "en": "17%",
            "hi": "17%"
          },
          {
            "en": "18%",
            "hi": "18%"
          },
          {
            "en": "20%",
            "hi": "20%"
          }
        ],
        "a": 1,
        "exp": {
          "en": "CP = 100, MP = 130. Discount = 13. SP = 117. Net profit = 17%.",
          "hi": "माना CP = 100, तो MP = 130। छूट = 130 का 10% = 13। SP = 117। शुद्ध लाभ = 17%।"
        }
      },
      {
        "id": 6,
        "subject": "Quantitative Aptitude",
        "q": {
          "en": "If x + 1/x = 5, find the value of x³ + 1/x³.",
          "hi": "यदि x + 1/x = 5 है, तो x³ + 1/x³ का मान क्या होगा?"
        },
        "o": [
          {
            "en": "110",
            "hi": "110"
          },
          {
            "en": "115",
            "hi": "115"
          },
          {
            "en": "120",
            "hi": "120"
          },
          {
            "en": "125",
            "hi": "125"
          }
        ],
        "a": 0,
        "exp": {
          "en": "Formula: k³ - 3k = 5³ - 3(5) = 125 - 15 = 110.",
          "hi": "सूत्र: k³ - 3k = 125 - 15 = 110।"
        }
      },
      {
        "id": 7,
        "subject": "English Comprehension",
        "q": {
          "en": "Select the most appropriate SYNONYM of the given word:\n'BENEVOLENT'",
          "hi": "दिए गए शब्द का सर्वाधिक उपयुक्त पर्यायवाची (SYNONYM) चुनें:\n'BENEVOLENT'"
        },
        "o": [
          {
            "en": "Hostile",
            "hi": "शत्रुतापूर्ण"
          },
          {
            "en": "Generous",
            "hi": "उदार (दयालु)"
          },
          {
            "en": "Miserly",
            "hi": "कंजूस"
          },
          {
            "en": "Cruel",
            "hi": "निर्दयी"
          }
        ],
        "a": 1,
        "exp": {
          "en": "'Benevolent' means kindly and generous. Closest synonym is 'Generous'.",
          "hi": "'Benevolent' का अर्थ दयालु व परोपकारी होता है। इसका सही पर्यायवाची 'Generous' है।"
        }
      },
      {
        "id": 8,
        "subject": "English Comprehension",
        "q": {
          "en": "Identify the segment with grammatical error: 'Neither the teacher nor the students was present in the auditorium.'",
          "hi": "व्याकरण संबंधी त्रुटि वाले भाग को पहचानें: 'Neither the teacher nor the students was present in the auditorium.'"
        },
        "o": [
          {
            "en": "was present (Change to 'were present')",
            "hi": "was present (सही: 'were present')"
          },
          {
            "en": "Neither the teacher",
            "hi": "Neither the teacher"
          },
          {
            "en": "in the auditorium",
            "hi": "in the auditorium"
          },
          {
            "en": "No error",
            "hi": "कोई त्रुटि नहीं"
          }
        ],
        "a": 0,
        "exp": {
          "en": "With 'neither... nor', the verb agrees with the closer plural subject 'students', so 'were present' is correct.",
          "hi": "'Neither... nor' में क्रिया निकटतम कर्ता 'students' (बहुवचन) के अनुसार 'were present' होनी चाहिए।"
        }
      }
    ],
    "cgl_2023_mock": [
      {
        "id": 1,
        "subject": "General Intelligence & Reasoning",
        "q": {
          "en": "Find the missing number in the series:\n13, 17, 26, 42, 67, ?",
          "hi": "श्रृंखला में लुप्त संख्या ज्ञात कीजिए:\n13, 17, 26, 42, 67, ?"
        },
        "o": [
          {
            "en": "98",
            "hi": "98"
          },
          {
            "en": "103",
            "hi": "103"
          },
          {
            "en": "105",
            "hi": "105"
          },
          {
            "en": "108",
            "hi": "108"
          }
        ],
        "a": 1,
        "exp": {
          "en": "Pattern: +2² (4), +3² (9), +4² (16), +5² (25), +6² (36). 67 + 36 = 103.",
          "hi": "पैटर्न: +4, +9, +16, +25, +36। 67 + 36 = 103।"
        }
      },
      {
        "id": 2,
        "subject": "General Intelligence & Reasoning",
        "q": {
          "en": "Pointing to a man, Rahul said, 'He is the son of the only daughter of my father.' How is the man related to Rahul?",
          "hi": "एक व्यक्ति की तस्वीर की ओर इशारा करते हुए राहुल ने कहा, 'वह मेरे पिता की एकमात्र पुत्री का पुत्र है।' वह व्यक्ति राहुल से कैसे संबंधित है?"
        },
        "o": [
          {
            "en": "Brother",
            "hi": "भाई"
          },
          {
            "en": "Nephew (भांजा)",
            "hi": "भांजा (Nephew)"
          },
          {
            "en": "Son",
            "hi": "पुत्र"
          },
          {
            "en": "Uncle",
            "hi": "मामा"
          }
        ],
        "a": 1,
        "exp": {
          "en": "Father's only daughter = Rahul's sister. Her son = Nephew.",
          "hi": "राहुल के पिता की एकमात्र पुत्री = राहुल की बहन। बहन का पुत्र = भांजा (Nephew)।"
        }
      },
      {
        "id": 3,
        "subject": "General Awareness",
        "q": {
          "en": "Under whose reign was the Fourth Buddhist Council held at Kundalvana in Kashmir?",
          "hi": "कश्मीर के कुंडलवन में चतुर्थ बौद्ध संगीति किसके शासनकाल में आयोजित की गई थी?"
        },
        "o": [
          {
            "en": "Ashoka",
            "hi": "अशोक"
          },
          {
            "en": "Kanishka",
            "hi": "कनिष्क"
          },
          {
            "en": "Kalashoka",
            "hi": "कालाशोक"
          },
          {
            "en": "Harshavardhana",
            "hi": "हर्षवर्धन"
          }
        ],
        "a": 1,
        "exp": {
          "en": "Held under Kushan ruler Kanishka (~72 AD) under Vasumitra's presidency.",
          "hi": "चतुर्थ बौद्ध संगीति कुषाण शासक कनिष्क के शासनकाल में वसुमित्र की अध्यक्षता में हुई थी।"
        }
      },
      {
        "id": 4,
        "subject": "General Awareness",
        "q": {
          "en": "Which layer of the atmosphere contains the ozone layer that protects Earth from harmful UV rays?",
          "hi": "वायुमंडल की किस परत में ओजोन परत पाई जाती है जो पराबैंगनी किरणों से रक्षा करती है?"
        },
        "o": [
          {
            "en": "Troposphere",
            "hi": "क्षोभमंडल"
          },
          {
            "en": "Stratosphere",
            "hi": "समताप मंडल"
          },
          {
            "en": "Mesosphere",
            "hi": "मध्यमंडल"
          },
          {
            "en": "Thermosphere",
            "hi": "आयनमंडल"
          }
        ],
        "a": 1,
        "exp": {
          "en": "The ozone layer is located in the Stratosphere between 15-35 km altitude.",
          "hi": "ओजोन परत समताप मंडल (Stratosphere) में 15 से 35 किमी की ऊंचाई पर स्थित है।"
        }
      },
      {
        "id": 5,
        "subject": "Quantitative Aptitude",
        "q": {
          "en": "A and B can do a work in 15 and 20 days. They worked together for 4 days. What fraction of work is left?",
          "hi": "A और B किसी काम को 15 और 20 दिन में कर सकते हैं। उन्होंने 4 दिन साथ काम किया। कितना काम शेष बचा है?"
        },
        "o": [
          {
            "en": "7 / 15",
            "hi": "7 / 15"
          },
          {
            "en": "8 / 15",
            "hi": "8 / 15"
          },
          {
            "en": "11 / 15",
            "hi": "11 / 15"
          },
          {
            "en": "2 / 5",
            "hi": "2 / 5"
          }
        ],
        "a": 1,
        "exp": {
          "en": "Total = 60 units. A=4, B=3. In 4 days = 28 units. Remaining = 32/60 = 8/15.",
          "hi": "कुल कार्य = 60 इकाई। 4 दिन में कार्य = 28 इकाई। शेष कार्य = 32/60 = 8/15।"
        }
      },
      {
        "id": 6,
        "subject": "Quantitative Aptitude",
        "q": {
          "en": "Find the compound interest on ₹10,000 for 2 years at 10% per annum, compounded annually.",
          "hi": "₹10,000 पर 10% वार्षिक दर से 2 वर्ष का चक्रवृद्धि ब्याज क्या होगा?"
        },
        "o": [
          {
            "en": "₹2,000",
            "hi": "₹2,000"
          },
          {
            "en": "₹2,100",
            "hi": "₹2,100"
          },
          {
            "en": "₹2,200",
            "hi": "₹2,200"
          },
          {
            "en": "₹2,250",
            "hi": "₹2,250"
          }
        ],
        "a": 1,
        "exp": {
          "en": "Net CI% for 2 yrs = 10 + 10 + 1 = 21%. CI = 10000 × 21% = ₹2,100.",
          "hi": "2 वर्ष का शुद्ध CI दर = 21%। चक्रवृद्धि ब्याज = 10000 × 21% = ₹2,100।"
        }
      },
      {
        "id": 7,
        "subject": "English Comprehension",
        "q": {
          "en": "Select the most appropriate ANTONYM of the given word:\n'METICULOUS'",
          "hi": "दिए गए शब्द का सर्वाधिक उपयुक्त विलोम शब्द (ANTONYM) चुनें:\n'METICULOUS'"
        },
        "o": [
          {
            "en": "Careless",
            "hi": "लापरवाह (Careless)"
          },
          {
            "en": "Precise",
            "hi": "सटीक"
          },
          {
            "en": "Scrupulous",
            "hi": "कर्तव्यनिष्ठ"
          },
          {
            "en": "Accurate",
            "hi": "शुद्ध"
          }
        ],
        "a": 0,
        "exp": {
          "en": "'Meticulous' means careful and detail-oriented. Antonym is 'Careless'.",
          "hi": "'Meticulous' का विलोम 'Careless' (लापरवाह) है।"
        }
      },
      {
        "id": 8,
        "subject": "English Comprehension",
        "q": {
          "en": "Select the meaning of the idiom: 'To burn the midnight oil'",
          "hi": "मुहावरे का सही अर्थ चुनें: 'To burn the midnight oil'"
        },
        "o": [
          {
            "en": "To waste fuel",
            "hi": "ईंधन बर्बाद करना"
          },
          {
            "en": "To work or study late into the night",
            "hi": "देर रात तक कठिन परिश्रम या पढ़ाई करना"
          },
          {
            "en": "To sleep late",
            "hi": "देर से सोना"
          },
          {
            "en": "To burn lamps",
            "hi": "दीपक जलाना"
          }
        ],
        "a": 1,
        "exp": {
          "en": "Means working or studying diligently late into the night.",
          "hi": "इसका अर्थ देर रात तक कठिन परिश्रम या पढ़ाई करना होता है।"
        }
      }
    ],
    "cgl_2022_s1": [
      {
        "id": 1,
        "subject": "General Intelligence & Reasoning",
        "q": {
          "en": "Select the option that is related to the third number in the same way as the second number is related to the first number:\n12 : 156 :: 14 : ?",
          "hi": "उस विकल्प का चयन करें जो तीसरी संख्या से उसी प्रकार संबंधित है जैसे दूसरी संख्या पहली संख्या से संबंधित है:\n12 : 156 :: 14 : ?"
        },
        "o": [
          {
            "en": "208",
            "hi": "208"
          },
          {
            "en": "210",
            "hi": "210"
          },
          {
            "en": "212",
            "hi": "212"
          },
          {
            "en": "216",
            "hi": "216"
          }
        ],
        "a": 1,
        "exp": {
          "en": "Logic: n : n(n + 1). 12 × 13 = 156. For 14: 14 × 15 = 210.",
          "hi": "तर्क: n : n(n + 1)। 12 × 13 = 156। इसी प्रकार 14 × 15 = 210।"
        }
      },
      {
        "id": 2,
        "subject": "General Intelligence & Reasoning",
        "q": {
          "en": "In a code language, 'ROBUST' is written as 'QNATRS'. How will 'STABLE' be written in that code language?",
          "hi": "एक निश्चित कूट भाषा में 'ROBUST' को 'QNATRS' लिखा जाता है। उसी कूट भाषा में 'STABLE' को कैसे लिखा जाएगा?"
        },
        "o": [
          {
            "en": "RSZAKD",
            "hi": "RSZAKD"
          },
          {
            "en": "RSZAKC",
            "hi": "RSZAKC"
          },
          {
            "en": "TRBCMF",
            "hi": "TRBCMF"
          },
          {
            "en": "RTAAKD",
            "hi": "RTAAKD"
          }
        ],
        "a": 0,
        "exp": {
          "en": "Logic: Each letter - 1 position. S-1=R, T-1=S, A-1=Z, B-1=A, L-1=K, E-1=D.",
          "hi": "तर्क: प्रत्येक अक्षर में -1 की कमी की गई है। S-1=R, T-1=S, A-1=Z, B-1=A, L-1=K, E-1=D → RSZAKD।"
        }
      },
      {
        "id": 3,
        "subject": "General Awareness",
        "q": {
          "en": "Which Article of the Indian Constitution provides for the appointment of the Finance Commission of India every 5 years?",
          "hi": "भारतीय संविधान का कौन सा अनुच्छेद प्रत्येक 5 वर्ष में भारत के वित्त आयोग के गठन का प्रावधान करता है?"
        },
        "o": [
          {
            "en": "Article 260",
            "hi": "अनुच्छेद 260"
          },
          {
            "en": "Article 280",
            "hi": "अनुच्छेद 280"
          },
          {
            "en": "Article 324",
            "hi": "अनुच्छेद 324"
          },
          {
            "en": "Article 356",
            "hi": "अनुच्छेद 356"
          }
        ],
        "a": 1,
        "exp": {
          "en": "Article 280 mandates that the President shall constitute a Finance Commission at the expiration of every fifth year.",
          "hi": "संविधान का अनुच्छेद 280 राष्ट्रपति द्वारा प्रत्येक 5 वर्ष की समाप्ति पर वित्त आयोग के गठन का प्रावधान करता है।"
        }
      },
      {
        "id": 4,
        "subject": "General Awareness",
        "q": {
          "en": "Mohiniyattam is a classical dance that originated and developed in which Indian state?",
          "hi": "मोहिनीअट्टम भारत का एक शास्त्रीय नृत्य रूप है, जिसकी उत्पत्ति और विकास किस राज्य में हुआ?"
        },
        "o": [
          {
            "en": "Tamil Nadu",
            "hi": "तमिलनाडु"
          },
          {
            "en": "Kerala",
            "hi": "केरल"
          },
          {
            "en": "Andhra Pradesh",
            "hi": "आंध्र प्रदेश"
          },
          {
            "en": "Karnataka",
            "hi": "कर्नाटक"
          }
        ],
        "a": 1,
        "exp": {
          "en": "Mohiniyattam originated in Kerala and is named after the celestial enchantress Mohini (avatar of Lord Vishnu).",
          "hi": "मोहिनीअट्टम की उत्पत्ति केरल में हुई थी। यह नाम भगवान विष्णु के मोहिनी अवतार पर आधारित है।"
        }
      },
      {
        "id": 5,
        "subject": "Quantitative Aptitude",
        "q": {
          "en": "A trader marks goods 30% above cost price and allows a 10% discount on marked price. Find net profit percentage.",
          "hi": "एक व्यापारी अपनी वस्तुओं पर क्रय मूल्य से 30% अधिक मूल्य अंकित करता है और 10% की छूट देता है। उसका शुद्ध लाभ प्रतिशत ज्ञात कीजिए।"
        },
        "o": [
          {
            "en": "15%",
            "hi": "15%"
          },
          {
            "en": "17%",
            "hi": "17%"
          },
          {
            "en": "18%",
            "hi": "18%"
          },
          {
            "en": "20%",
            "hi": "20%"
          }
        ],
        "a": 1,
        "exp": {
          "en": "CP = 100, MP = 130. Discount = 13. SP = 117. Net profit = 17%.",
          "hi": "माना CP = 100, तो MP = 130। छूट = 130 का 10% = 13। SP = 117। शुद्ध लाभ = 17%।"
        }
      },
      {
        "id": 6,
        "subject": "Quantitative Aptitude",
        "q": {
          "en": "If x + 1/x = 5, find the value of x³ + 1/x³.",
          "hi": "यदि x + 1/x = 5 है, तो x³ + 1/x³ का मान क्या होगा?"
        },
        "o": [
          {
            "en": "110",
            "hi": "110"
          },
          {
            "en": "115",
            "hi": "115"
          },
          {
            "en": "120",
            "hi": "120"
          },
          {
            "en": "125",
            "hi": "125"
          }
        ],
        "a": 0,
        "exp": {
          "en": "Formula: k³ - 3k = 5³ - 3(5) = 125 - 15 = 110.",
          "hi": "सूत्र: k³ - 3k = 125 - 15 = 110।"
        }
      },
      {
        "id": 7,
        "subject": "English Comprehension",
        "q": {
          "en": "Select the most appropriate SYNONYM of the given word:\n'BENEVOLENT'",
          "hi": "दिए गए शब्द का सर्वाधिक उपयुक्त पर्यायवाची (SYNONYM) चुनें:\n'BENEVOLENT'"
        },
        "o": [
          {
            "en": "Hostile",
            "hi": "शत्रुतापूर्ण"
          },
          {
            "en": "Generous",
            "hi": "उदार (दयालु)"
          },
          {
            "en": "Miserly",
            "hi": "कंजूस"
          },
          {
            "en": "Cruel",
            "hi": "निर्दयी"
          }
        ],
        "a": 1,
        "exp": {
          "en": "'Benevolent' means kindly and generous. Closest synonym is 'Generous'.",
          "hi": "'Benevolent' का अर्थ दयालु व परोपकारी होता है। इसका सही पर्यायवाची 'Generous' है।"
        }
      },
      {
        "id": 8,
        "subject": "English Comprehension",
        "q": {
          "en": "Identify the segment with grammatical error: 'Neither the teacher nor the students was present in the auditorium.'",
          "hi": "व्याकरण संबंधी त्रुटि वाले भाग को पहचानें: 'Neither the teacher nor the students was present in the auditorium.'"
        },
        "o": [
          {
            "en": "was present (Change to 'were present')",
            "hi": "was present (सही: 'were present')"
          },
          {
            "en": "Neither the teacher",
            "hi": "Neither the teacher"
          },
          {
            "en": "in the auditorium",
            "hi": "in the auditorium"
          },
          {
            "en": "No error",
            "hi": "कोई त्रुटि नहीं"
          }
        ],
        "a": 0,
        "exp": {
          "en": "With 'neither... nor', the verb agrees with the closer plural subject 'students', so 'were present' is correct.",
          "hi": "'Neither... nor' में क्रिया निकटतम कर्ता 'students' (बहुवचन) के अनुसार 'were present' होनी चाहिए।"
        }
      }
    ],
    "cgl_2022_s2": [
      {
        "id": 1,
        "subject": "General Intelligence & Reasoning",
        "q": {
          "en": "Find the missing number in the series:\n13, 17, 26, 42, 67, ?",
          "hi": "श्रृंखला में लुप्त संख्या ज्ञात कीजिए:\n13, 17, 26, 42, 67, ?"
        },
        "o": [
          {
            "en": "98",
            "hi": "98"
          },
          {
            "en": "103",
            "hi": "103"
          },
          {
            "en": "105",
            "hi": "105"
          },
          {
            "en": "108",
            "hi": "108"
          }
        ],
        "a": 1,
        "exp": {
          "en": "Pattern: +2² (4), +3² (9), +4² (16), +5² (25), +6² (36). 67 + 36 = 103.",
          "hi": "पैटर्न: +4, +9, +16, +25, +36। 67 + 36 = 103।"
        }
      },
      {
        "id": 2,
        "subject": "General Intelligence & Reasoning",
        "q": {
          "en": "Pointing to a man, Rahul said, 'He is the son of the only daughter of my father.' How is the man related to Rahul?",
          "hi": "एक व्यक्ति की तस्वीर की ओर इशारा करते हुए राहुल ने कहा, 'वह मेरे पिता की एकमात्र पुत्री का पुत्र है।' वह व्यक्ति राहुल से कैसे संबंधित है?"
        },
        "o": [
          {
            "en": "Brother",
            "hi": "भाई"
          },
          {
            "en": "Nephew (भांजा)",
            "hi": "भांजा (Nephew)"
          },
          {
            "en": "Son",
            "hi": "पुत्र"
          },
          {
            "en": "Uncle",
            "hi": "मामा"
          }
        ],
        "a": 1,
        "exp": {
          "en": "Father's only daughter = Rahul's sister. Her son = Nephew.",
          "hi": "राहुल के पिता की एकमात्र पुत्री = राहुल की बहन। बहन का पुत्र = भांजा (Nephew)।"
        }
      },
      {
        "id": 3,
        "subject": "General Awareness",
        "q": {
          "en": "Under whose reign was the Fourth Buddhist Council held at Kundalvana in Kashmir?",
          "hi": "कश्मीर के कुंडलवन में चतुर्थ बौद्ध संगीति किसके शासनकाल में आयोजित की गई थी?"
        },
        "o": [
          {
            "en": "Ashoka",
            "hi": "अशोक"
          },
          {
            "en": "Kanishka",
            "hi": "कनिष्क"
          },
          {
            "en": "Kalashoka",
            "hi": "कालाशोक"
          },
          {
            "en": "Harshavardhana",
            "hi": "हर्षवर्धन"
          }
        ],
        "a": 1,
        "exp": {
          "en": "Held under Kushan ruler Kanishka (~72 AD) under Vasumitra's presidency.",
          "hi": "चतुर्थ बौद्ध संगीति कुषाण शासक कनिष्क के शासनकाल में वसुमित्र की अध्यक्षता में हुई थी।"
        }
      },
      {
        "id": 4,
        "subject": "General Awareness",
        "q": {
          "en": "Which layer of the atmosphere contains the ozone layer that protects Earth from harmful UV rays?",
          "hi": "वायुमंडल की किस परत में ओजोन परत पाई जाती है जो पराबैंगनी किरणों से रक्षा करती है?"
        },
        "o": [
          {
            "en": "Troposphere",
            "hi": "क्षोभमंडल"
          },
          {
            "en": "Stratosphere",
            "hi": "समताप मंडल"
          },
          {
            "en": "Mesosphere",
            "hi": "मध्यमंडल"
          },
          {
            "en": "Thermosphere",
            "hi": "आयनमंडल"
          }
        ],
        "a": 1,
        "exp": {
          "en": "The ozone layer is located in the Stratosphere between 15-35 km altitude.",
          "hi": "ओजोन परत समताप मंडल (Stratosphere) में 15 से 35 किमी की ऊंचाई पर स्थित है।"
        }
      },
      {
        "id": 5,
        "subject": "Quantitative Aptitude",
        "q": {
          "en": "A and B can do a work in 15 and 20 days. They worked together for 4 days. What fraction of work is left?",
          "hi": "A और B किसी काम को 15 और 20 दिन में कर सकते हैं। उन्होंने 4 दिन साथ काम किया। कितना काम शेष बचा है?"
        },
        "o": [
          {
            "en": "7 / 15",
            "hi": "7 / 15"
          },
          {
            "en": "8 / 15",
            "hi": "8 / 15"
          },
          {
            "en": "11 / 15",
            "hi": "11 / 15"
          },
          {
            "en": "2 / 5",
            "hi": "2 / 5"
          }
        ],
        "a": 1,
        "exp": {
          "en": "Total = 60 units. A=4, B=3. In 4 days = 28 units. Remaining = 32/60 = 8/15.",
          "hi": "कुल कार्य = 60 इकाई। 4 दिन में कार्य = 28 इकाई। शेष कार्य = 32/60 = 8/15।"
        }
      },
      {
        "id": 6,
        "subject": "Quantitative Aptitude",
        "q": {
          "en": "Find the compound interest on ₹10,000 for 2 years at 10% per annum, compounded annually.",
          "hi": "₹10,000 पर 10% वार्षिक दर से 2 वर्ष का चक्रवृद्धि ब्याज क्या होगा?"
        },
        "o": [
          {
            "en": "₹2,000",
            "hi": "₹2,000"
          },
          {
            "en": "₹2,100",
            "hi": "₹2,100"
          },
          {
            "en": "₹2,200",
            "hi": "₹2,200"
          },
          {
            "en": "₹2,250",
            "hi": "₹2,250"
          }
        ],
        "a": 1,
        "exp": {
          "en": "Net CI% for 2 yrs = 10 + 10 + 1 = 21%. CI = 10000 × 21% = ₹2,100.",
          "hi": "2 वर्ष का शुद्ध CI दर = 21%। चक्रवृद्धि ब्याज = 10000 × 21% = ₹2,100।"
        }
      },
      {
        "id": 7,
        "subject": "English Comprehension",
        "q": {
          "en": "Select the most appropriate ANTONYM of the given word:\n'METICULOUS'",
          "hi": "दिए गए शब्द का सर्वाधिक उपयुक्त विलोम शब्द (ANTONYM) चुनें:\n'METICULOUS'"
        },
        "o": [
          {
            "en": "Careless",
            "hi": "लापरवाह (Careless)"
          },
          {
            "en": "Precise",
            "hi": "सटीक"
          },
          {
            "en": "Scrupulous",
            "hi": "कर्तव्यनिष्ठ"
          },
          {
            "en": "Accurate",
            "hi": "शुद्ध"
          }
        ],
        "a": 0,
        "exp": {
          "en": "'Meticulous' means careful and detail-oriented. Antonym is 'Careless'.",
          "hi": "'Meticulous' का विलोम 'Careless' (लापरवाह) है।"
        }
      },
      {
        "id": 8,
        "subject": "English Comprehension",
        "q": {
          "en": "Select the meaning of the idiom: 'To burn the midnight oil'",
          "hi": "मुहावरे का सही अर्थ चुनें: 'To burn the midnight oil'"
        },
        "o": [
          {
            "en": "To waste fuel",
            "hi": "ईंधन बर्बाद करना"
          },
          {
            "en": "To work or study late into the night",
            "hi": "देर रात तक कठिन परिश्रम या पढ़ाई करना"
          },
          {
            "en": "To sleep late",
            "hi": "देर से सोना"
          },
          {
            "en": "To burn lamps",
            "hi": "दीपक जलाना"
          }
        ],
        "a": 1,
        "exp": {
          "en": "Means working or studying diligently late into the night.",
          "hi": "इसका अर्थ देर रात तक कठिन परिश्रम या पढ़ाई करना होता है।"
        }
      }
    ],
    "cgl_2022_s3": [
      {
        "id": 1,
        "subject": "General Intelligence & Reasoning",
        "q": {
          "en": "Select the option that is related to the third number in the same way as the second number is related to the first number:\n12 : 156 :: 14 : ?",
          "hi": "उस विकल्प का चयन करें जो तीसरी संख्या से उसी प्रकार संबंधित है जैसे दूसरी संख्या पहली संख्या से संबंधित है:\n12 : 156 :: 14 : ?"
        },
        "o": [
          {
            "en": "208",
            "hi": "208"
          },
          {
            "en": "210",
            "hi": "210"
          },
          {
            "en": "212",
            "hi": "212"
          },
          {
            "en": "216",
            "hi": "216"
          }
        ],
        "a": 1,
        "exp": {
          "en": "Logic: n : n(n + 1). 12 × 13 = 156. For 14: 14 × 15 = 210.",
          "hi": "तर्क: n : n(n + 1)। 12 × 13 = 156। इसी प्रकार 14 × 15 = 210।"
        }
      },
      {
        "id": 2,
        "subject": "General Intelligence & Reasoning",
        "q": {
          "en": "In a code language, 'ROBUST' is written as 'QNATRS'. How will 'STABLE' be written in that code language?",
          "hi": "एक निश्चित कूट भाषा में 'ROBUST' को 'QNATRS' लिखा जाता है। उसी कूट भाषा में 'STABLE' को कैसे लिखा जाएगा?"
        },
        "o": [
          {
            "en": "RSZAKD",
            "hi": "RSZAKD"
          },
          {
            "en": "RSZAKC",
            "hi": "RSZAKC"
          },
          {
            "en": "TRBCMF",
            "hi": "TRBCMF"
          },
          {
            "en": "RTAAKD",
            "hi": "RTAAKD"
          }
        ],
        "a": 0,
        "exp": {
          "en": "Logic: Each letter - 1 position. S-1=R, T-1=S, A-1=Z, B-1=A, L-1=K, E-1=D.",
          "hi": "तर्क: प्रत्येक अक्षर में -1 की कमी की गई है। S-1=R, T-1=S, A-1=Z, B-1=A, L-1=K, E-1=D → RSZAKD।"
        }
      },
      {
        "id": 3,
        "subject": "General Awareness",
        "q": {
          "en": "Which Article of the Indian Constitution provides for the appointment of the Finance Commission of India every 5 years?",
          "hi": "भारतीय संविधान का कौन सा अनुच्छेद प्रत्येक 5 वर्ष में भारत के वित्त आयोग के गठन का प्रावधान करता है?"
        },
        "o": [
          {
            "en": "Article 260",
            "hi": "अनुच्छेद 260"
          },
          {
            "en": "Article 280",
            "hi": "अनुच्छेद 280"
          },
          {
            "en": "Article 324",
            "hi": "अनुच्छेद 324"
          },
          {
            "en": "Article 356",
            "hi": "अनुच्छेद 356"
          }
        ],
        "a": 1,
        "exp": {
          "en": "Article 280 mandates that the President shall constitute a Finance Commission at the expiration of every fifth year.",
          "hi": "संविधान का अनुच्छेद 280 राष्ट्रपति द्वारा प्रत्येक 5 वर्ष की समाप्ति पर वित्त आयोग के गठन का प्रावधान करता है।"
        }
      },
      {
        "id": 4,
        "subject": "General Awareness",
        "q": {
          "en": "Mohiniyattam is a classical dance that originated and developed in which Indian state?",
          "hi": "मोहिनीअट्टम भारत का एक शास्त्रीय नृत्य रूप है, जिसकी उत्पत्ति और विकास किस राज्य में हुआ?"
        },
        "o": [
          {
            "en": "Tamil Nadu",
            "hi": "तमिलनाडु"
          },
          {
            "en": "Kerala",
            "hi": "केरल"
          },
          {
            "en": "Andhra Pradesh",
            "hi": "आंध्र प्रदेश"
          },
          {
            "en": "Karnataka",
            "hi": "कर्नाटक"
          }
        ],
        "a": 1,
        "exp": {
          "en": "Mohiniyattam originated in Kerala and is named after the celestial enchantress Mohini (avatar of Lord Vishnu).",
          "hi": "मोहिनीअट्टम की उत्पत्ति केरल में हुई थी। यह नाम भगवान विष्णु के मोहिनी अवतार पर आधारित है।"
        }
      },
      {
        "id": 5,
        "subject": "Quantitative Aptitude",
        "q": {
          "en": "A trader marks goods 30% above cost price and allows a 10% discount on marked price. Find net profit percentage.",
          "hi": "एक व्यापारी अपनी वस्तुओं पर क्रय मूल्य से 30% अधिक मूल्य अंकित करता है और 10% की छूट देता है। उसका शुद्ध लाभ प्रतिशत ज्ञात कीजिए।"
        },
        "o": [
          {
            "en": "15%",
            "hi": "15%"
          },
          {
            "en": "17%",
            "hi": "17%"
          },
          {
            "en": "18%",
            "hi": "18%"
          },
          {
            "en": "20%",
            "hi": "20%"
          }
        ],
        "a": 1,
        "exp": {
          "en": "CP = 100, MP = 130. Discount = 13. SP = 117. Net profit = 17%.",
          "hi": "माना CP = 100, तो MP = 130। छूट = 130 का 10% = 13। SP = 117। शुद्ध लाभ = 17%।"
        }
      },
      {
        "id": 6,
        "subject": "Quantitative Aptitude",
        "q": {
          "en": "If x + 1/x = 5, find the value of x³ + 1/x³.",
          "hi": "यदि x + 1/x = 5 है, तो x³ + 1/x³ का मान क्या होगा?"
        },
        "o": [
          {
            "en": "110",
            "hi": "110"
          },
          {
            "en": "115",
            "hi": "115"
          },
          {
            "en": "120",
            "hi": "120"
          },
          {
            "en": "125",
            "hi": "125"
          }
        ],
        "a": 0,
        "exp": {
          "en": "Formula: k³ - 3k = 5³ - 3(5) = 125 - 15 = 110.",
          "hi": "सूत्र: k³ - 3k = 125 - 15 = 110।"
        }
      },
      {
        "id": 7,
        "subject": "English Comprehension",
        "q": {
          "en": "Select the most appropriate SYNONYM of the given word:\n'BENEVOLENT'",
          "hi": "दिए गए शब्द का सर्वाधिक उपयुक्त पर्यायवाची (SYNONYM) चुनें:\n'BENEVOLENT'"
        },
        "o": [
          {
            "en": "Hostile",
            "hi": "शत्रुतापूर्ण"
          },
          {
            "en": "Generous",
            "hi": "उदार (दयालु)"
          },
          {
            "en": "Miserly",
            "hi": "कंजूस"
          },
          {
            "en": "Cruel",
            "hi": "निर्दयी"
          }
        ],
        "a": 1,
        "exp": {
          "en": "'Benevolent' means kindly and generous. Closest synonym is 'Generous'.",
          "hi": "'Benevolent' का अर्थ दयालु व परोपकारी होता है। इसका सही पर्यायवाची 'Generous' है।"
        }
      },
      {
        "id": 8,
        "subject": "English Comprehension",
        "q": {
          "en": "Identify the segment with grammatical error: 'Neither the teacher nor the students was present in the auditorium.'",
          "hi": "व्याकरण संबंधी त्रुटि वाले भाग को पहचानें: 'Neither the teacher nor the students was present in the auditorium.'"
        },
        "o": [
          {
            "en": "was present (Change to 'were present')",
            "hi": "was present (सही: 'were present')"
          },
          {
            "en": "Neither the teacher",
            "hi": "Neither the teacher"
          },
          {
            "en": "in the auditorium",
            "hi": "in the auditorium"
          },
          {
            "en": "No error",
            "hi": "कोई त्रुटि नहीं"
          }
        ],
        "a": 0,
        "exp": {
          "en": "With 'neither... nor', the verb agrees with the closer plural subject 'students', so 'were present' is correct.",
          "hi": "'Neither... nor' में क्रिया निकटतम कर्ता 'students' (बहुवचन) के अनुसार 'were present' होनी चाहिए।"
        }
      }
    ],
    "cgl_2022_mock": [
      {
        "id": 1,
        "subject": "General Intelligence & Reasoning",
        "q": {
          "en": "Find the missing number in the series:\n13, 17, 26, 42, 67, ?",
          "hi": "श्रृंखला में लुप्त संख्या ज्ञात कीजिए:\n13, 17, 26, 42, 67, ?"
        },
        "o": [
          {
            "en": "98",
            "hi": "98"
          },
          {
            "en": "103",
            "hi": "103"
          },
          {
            "en": "105",
            "hi": "105"
          },
          {
            "en": "108",
            "hi": "108"
          }
        ],
        "a": 1,
        "exp": {
          "en": "Pattern: +2² (4), +3² (9), +4² (16), +5² (25), +6² (36). 67 + 36 = 103.",
          "hi": "पैटर्न: +4, +9, +16, +25, +36। 67 + 36 = 103।"
        }
      },
      {
        "id": 2,
        "subject": "General Intelligence & Reasoning",
        "q": {
          "en": "Pointing to a man, Rahul said, 'He is the son of the only daughter of my father.' How is the man related to Rahul?",
          "hi": "एक व्यक्ति की तस्वीर की ओर इशारा करते हुए राहुल ने कहा, 'वह मेरे पिता की एकमात्र पुत्री का पुत्र है।' वह व्यक्ति राहुल से कैसे संबंधित है?"
        },
        "o": [
          {
            "en": "Brother",
            "hi": "भाई"
          },
          {
            "en": "Nephew (भांजा)",
            "hi": "भांजा (Nephew)"
          },
          {
            "en": "Son",
            "hi": "पुत्र"
          },
          {
            "en": "Uncle",
            "hi": "मामा"
          }
        ],
        "a": 1,
        "exp": {
          "en": "Father's only daughter = Rahul's sister. Her son = Nephew.",
          "hi": "राहुल के पिता की एकमात्र पुत्री = राहुल की बहन। बहन का पुत्र = भांजा (Nephew)।"
        }
      },
      {
        "id": 3,
        "subject": "General Awareness",
        "q": {
          "en": "Under whose reign was the Fourth Buddhist Council held at Kundalvana in Kashmir?",
          "hi": "कश्मीर के कुंडलवन में चतुर्थ बौद्ध संगीति किसके शासनकाल में आयोजित की गई थी?"
        },
        "o": [
          {
            "en": "Ashoka",
            "hi": "अशोक"
          },
          {
            "en": "Kanishka",
            "hi": "कनिष्क"
          },
          {
            "en": "Kalashoka",
            "hi": "कालाशोक"
          },
          {
            "en": "Harshavardhana",
            "hi": "हर्षवर्धन"
          }
        ],
        "a": 1,
        "exp": {
          "en": "Held under Kushan ruler Kanishka (~72 AD) under Vasumitra's presidency.",
          "hi": "चतुर्थ बौद्ध संगीति कुषाण शासक कनिष्क के शासनकाल में वसुमित्र की अध्यक्षता में हुई थी।"
        }
      },
      {
        "id": 4,
        "subject": "General Awareness",
        "q": {
          "en": "Which layer of the atmosphere contains the ozone layer that protects Earth from harmful UV rays?",
          "hi": "वायुमंडल की किस परत में ओजोन परत पाई जाती है जो पराबैंगनी किरणों से रक्षा करती है?"
        },
        "o": [
          {
            "en": "Troposphere",
            "hi": "क्षोभमंडल"
          },
          {
            "en": "Stratosphere",
            "hi": "समताप मंडल"
          },
          {
            "en": "Mesosphere",
            "hi": "मध्यमंडल"
          },
          {
            "en": "Thermosphere",
            "hi": "आयनमंडल"
          }
        ],
        "a": 1,
        "exp": {
          "en": "The ozone layer is located in the Stratosphere between 15-35 km altitude.",
          "hi": "ओजोन परत समताप मंडल (Stratosphere) में 15 से 35 किमी की ऊंचाई पर स्थित है।"
        }
      },
      {
        "id": 5,
        "subject": "Quantitative Aptitude",
        "q": {
          "en": "A and B can do a work in 15 and 20 days. They worked together for 4 days. What fraction of work is left?",
          "hi": "A और B किसी काम को 15 और 20 दिन में कर सकते हैं। उन्होंने 4 दिन साथ काम किया। कितना काम शेष बचा है?"
        },
        "o": [
          {
            "en": "7 / 15",
            "hi": "7 / 15"
          },
          {
            "en": "8 / 15",
            "hi": "8 / 15"
          },
          {
            "en": "11 / 15",
            "hi": "11 / 15"
          },
          {
            "en": "2 / 5",
            "hi": "2 / 5"
          }
        ],
        "a": 1,
        "exp": {
          "en": "Total = 60 units. A=4, B=3. In 4 days = 28 units. Remaining = 32/60 = 8/15.",
          "hi": "कुल कार्य = 60 इकाई। 4 दिन में कार्य = 28 इकाई। शेष कार्य = 32/60 = 8/15।"
        }
      },
      {
        "id": 6,
        "subject": "Quantitative Aptitude",
        "q": {
          "en": "Find the compound interest on ₹10,000 for 2 years at 10% per annum, compounded annually.",
          "hi": "₹10,000 पर 10% वार्षिक दर से 2 वर्ष का चक्रवृद्धि ब्याज क्या होगा?"
        },
        "o": [
          {
            "en": "₹2,000",
            "hi": "₹2,000"
          },
          {
            "en": "₹2,100",
            "hi": "₹2,100"
          },
          {
            "en": "₹2,200",
            "hi": "₹2,200"
          },
          {
            "en": "₹2,250",
            "hi": "₹2,250"
          }
        ],
        "a": 1,
        "exp": {
          "en": "Net CI% for 2 yrs = 10 + 10 + 1 = 21%. CI = 10000 × 21% = ₹2,100.",
          "hi": "2 वर्ष का शुद्ध CI दर = 21%। चक्रवृद्धि ब्याज = 10000 × 21% = ₹2,100।"
        }
      },
      {
        "id": 7,
        "subject": "English Comprehension",
        "q": {
          "en": "Select the most appropriate ANTONYM of the given word:\n'METICULOUS'",
          "hi": "दिए गए शब्द का सर्वाधिक उपयुक्त विलोम शब्द (ANTONYM) चुनें:\n'METICULOUS'"
        },
        "o": [
          {
            "en": "Careless",
            "hi": "लापरवाह (Careless)"
          },
          {
            "en": "Precise",
            "hi": "सटीक"
          },
          {
            "en": "Scrupulous",
            "hi": "कर्तव्यनिष्ठ"
          },
          {
            "en": "Accurate",
            "hi": "शुद्ध"
          }
        ],
        "a": 0,
        "exp": {
          "en": "'Meticulous' means careful and detail-oriented. Antonym is 'Careless'.",
          "hi": "'Meticulous' का विलोम 'Careless' (लापरवाह) है।"
        }
      },
      {
        "id": 8,
        "subject": "English Comprehension",
        "q": {
          "en": "Select the meaning of the idiom: 'To burn the midnight oil'",
          "hi": "मुहावरे का सही अर्थ चुनें: 'To burn the midnight oil'"
        },
        "o": [
          {
            "en": "To waste fuel",
            "hi": "ईंधन बर्बाद करना"
          },
          {
            "en": "To work or study late into the night",
            "hi": "देर रात तक कठिन परिश्रम या पढ़ाई करना"
          },
          {
            "en": "To sleep late",
            "hi": "देर से सोना"
          },
          {
            "en": "To burn lamps",
            "hi": "दीपक जलाना"
          }
        ],
        "a": 1,
        "exp": {
          "en": "Means working or studying diligently late into the night.",
          "hi": "इसका अर्थ देर रात तक कठिन परिश्रम या पढ़ाई करना होता है।"
        }
      }
    ],
    "cgl_2021_s1": [
      {
        "id": 1,
        "subject": "General Intelligence & Reasoning",
        "q": {
          "en": "Select the option that is related to the third number in the same way as the second number is related to the first number:\n12 : 156 :: 14 : ?",
          "hi": "उस विकल्प का चयन करें जो तीसरी संख्या से उसी प्रकार संबंधित है जैसे दूसरी संख्या पहली संख्या से संबंधित है:\n12 : 156 :: 14 : ?"
        },
        "o": [
          {
            "en": "208",
            "hi": "208"
          },
          {
            "en": "210",
            "hi": "210"
          },
          {
            "en": "212",
            "hi": "212"
          },
          {
            "en": "216",
            "hi": "216"
          }
        ],
        "a": 1,
        "exp": {
          "en": "Logic: n : n(n + 1). 12 × 13 = 156. For 14: 14 × 15 = 210.",
          "hi": "तर्क: n : n(n + 1)। 12 × 13 = 156। इसी प्रकार 14 × 15 = 210।"
        }
      },
      {
        "id": 2,
        "subject": "General Intelligence & Reasoning",
        "q": {
          "en": "In a code language, 'ROBUST' is written as 'QNATRS'. How will 'STABLE' be written in that code language?",
          "hi": "एक निश्चित कूट भाषा में 'ROBUST' को 'QNATRS' लिखा जाता है। उसी कूट भाषा में 'STABLE' को कैसे लिखा जाएगा?"
        },
        "o": [
          {
            "en": "RSZAKD",
            "hi": "RSZAKD"
          },
          {
            "en": "RSZAKC",
            "hi": "RSZAKC"
          },
          {
            "en": "TRBCMF",
            "hi": "TRBCMF"
          },
          {
            "en": "RTAAKD",
            "hi": "RTAAKD"
          }
        ],
        "a": 0,
        "exp": {
          "en": "Logic: Each letter - 1 position. S-1=R, T-1=S, A-1=Z, B-1=A, L-1=K, E-1=D.",
          "hi": "तर्क: प्रत्येक अक्षर में -1 की कमी की गई है। S-1=R, T-1=S, A-1=Z, B-1=A, L-1=K, E-1=D → RSZAKD।"
        }
      },
      {
        "id": 3,
        "subject": "General Awareness",
        "q": {
          "en": "Which Article of the Indian Constitution provides for the appointment of the Finance Commission of India every 5 years?",
          "hi": "भारतीय संविधान का कौन सा अनुच्छेद प्रत्येक 5 वर्ष में भारत के वित्त आयोग के गठन का प्रावधान करता है?"
        },
        "o": [
          {
            "en": "Article 260",
            "hi": "अनुच्छेद 260"
          },
          {
            "en": "Article 280",
            "hi": "अनुच्छेद 280"
          },
          {
            "en": "Article 324",
            "hi": "अनुच्छेद 324"
          },
          {
            "en": "Article 356",
            "hi": "अनुच्छेद 356"
          }
        ],
        "a": 1,
        "exp": {
          "en": "Article 280 mandates that the President shall constitute a Finance Commission at the expiration of every fifth year.",
          "hi": "संविधान का अनुच्छेद 280 राष्ट्रपति द्वारा प्रत्येक 5 वर्ष की समाप्ति पर वित्त आयोग के गठन का प्रावधान करता है।"
        }
      },
      {
        "id": 4,
        "subject": "General Awareness",
        "q": {
          "en": "Mohiniyattam is a classical dance that originated and developed in which Indian state?",
          "hi": "मोहिनीअट्टम भारत का एक शास्त्रीय नृत्य रूप है, जिसकी उत्पत्ति और विकास किस राज्य में हुआ?"
        },
        "o": [
          {
            "en": "Tamil Nadu",
            "hi": "तमिलनाडु"
          },
          {
            "en": "Kerala",
            "hi": "केरल"
          },
          {
            "en": "Andhra Pradesh",
            "hi": "आंध्र प्रदेश"
          },
          {
            "en": "Karnataka",
            "hi": "कर्नाटक"
          }
        ],
        "a": 1,
        "exp": {
          "en": "Mohiniyattam originated in Kerala and is named after the celestial enchantress Mohini (avatar of Lord Vishnu).",
          "hi": "मोहिनीअट्टम की उत्पत्ति केरल में हुई थी। यह नाम भगवान विष्णु के मोहिनी अवतार पर आधारित है।"
        }
      },
      {
        "id": 5,
        "subject": "Quantitative Aptitude",
        "q": {
          "en": "A trader marks goods 30% above cost price and allows a 10% discount on marked price. Find net profit percentage.",
          "hi": "एक व्यापारी अपनी वस्तुओं पर क्रय मूल्य से 30% अधिक मूल्य अंकित करता है और 10% की छूट देता है। उसका शुद्ध लाभ प्रतिशत ज्ञात कीजिए।"
        },
        "o": [
          {
            "en": "15%",
            "hi": "15%"
          },
          {
            "en": "17%",
            "hi": "17%"
          },
          {
            "en": "18%",
            "hi": "18%"
          },
          {
            "en": "20%",
            "hi": "20%"
          }
        ],
        "a": 1,
        "exp": {
          "en": "CP = 100, MP = 130. Discount = 13. SP = 117. Net profit = 17%.",
          "hi": "माना CP = 100, तो MP = 130। छूट = 130 का 10% = 13। SP = 117। शुद्ध लाभ = 17%।"
        }
      },
      {
        "id": 6,
        "subject": "Quantitative Aptitude",
        "q": {
          "en": "If x + 1/x = 5, find the value of x³ + 1/x³.",
          "hi": "यदि x + 1/x = 5 है, तो x³ + 1/x³ का मान क्या होगा?"
        },
        "o": [
          {
            "en": "110",
            "hi": "110"
          },
          {
            "en": "115",
            "hi": "115"
          },
          {
            "en": "120",
            "hi": "120"
          },
          {
            "en": "125",
            "hi": "125"
          }
        ],
        "a": 0,
        "exp": {
          "en": "Formula: k³ - 3k = 5³ - 3(5) = 125 - 15 = 110.",
          "hi": "सूत्र: k³ - 3k = 125 - 15 = 110।"
        }
      },
      {
        "id": 7,
        "subject": "English Comprehension",
        "q": {
          "en": "Select the most appropriate SYNONYM of the given word:\n'BENEVOLENT'",
          "hi": "दिए गए शब्द का सर्वाधिक उपयुक्त पर्यायवाची (SYNONYM) चुनें:\n'BENEVOLENT'"
        },
        "o": [
          {
            "en": "Hostile",
            "hi": "शत्रुतापूर्ण"
          },
          {
            "en": "Generous",
            "hi": "उदार (दयालु)"
          },
          {
            "en": "Miserly",
            "hi": "कंजूस"
          },
          {
            "en": "Cruel",
            "hi": "निर्दयी"
          }
        ],
        "a": 1,
        "exp": {
          "en": "'Benevolent' means kindly and generous. Closest synonym is 'Generous'.",
          "hi": "'Benevolent' का अर्थ दयालु व परोपकारी होता है। इसका सही पर्यायवाची 'Generous' है।"
        }
      },
      {
        "id": 8,
        "subject": "English Comprehension",
        "q": {
          "en": "Identify the segment with grammatical error: 'Neither the teacher nor the students was present in the auditorium.'",
          "hi": "व्याकरण संबंधी त्रुटि वाले भाग को पहचानें: 'Neither the teacher nor the students was present in the auditorium.'"
        },
        "o": [
          {
            "en": "was present (Change to 'were present')",
            "hi": "was present (सही: 'were present')"
          },
          {
            "en": "Neither the teacher",
            "hi": "Neither the teacher"
          },
          {
            "en": "in the auditorium",
            "hi": "in the auditorium"
          },
          {
            "en": "No error",
            "hi": "कोई त्रुटि नहीं"
          }
        ],
        "a": 0,
        "exp": {
          "en": "With 'neither... nor', the verb agrees with the closer plural subject 'students', so 'were present' is correct.",
          "hi": "'Neither... nor' में क्रिया निकटतम कर्ता 'students' (बहुवचन) के अनुसार 'were present' होनी चाहिए।"
        }
      }
    ],
    "cgl_2021_s2": [
      {
        "id": 1,
        "subject": "General Intelligence & Reasoning",
        "q": {
          "en": "Find the missing number in the series:\n13, 17, 26, 42, 67, ?",
          "hi": "श्रृंखला में लुप्त संख्या ज्ञात कीजिए:\n13, 17, 26, 42, 67, ?"
        },
        "o": [
          {
            "en": "98",
            "hi": "98"
          },
          {
            "en": "103",
            "hi": "103"
          },
          {
            "en": "105",
            "hi": "105"
          },
          {
            "en": "108",
            "hi": "108"
          }
        ],
        "a": 1,
        "exp": {
          "en": "Pattern: +2² (4), +3² (9), +4² (16), +5² (25), +6² (36). 67 + 36 = 103.",
          "hi": "पैटर्न: +4, +9, +16, +25, +36। 67 + 36 = 103।"
        }
      },
      {
        "id": 2,
        "subject": "General Intelligence & Reasoning",
        "q": {
          "en": "Pointing to a man, Rahul said, 'He is the son of the only daughter of my father.' How is the man related to Rahul?",
          "hi": "एक व्यक्ति की तस्वीर की ओर इशारा करते हुए राहुल ने कहा, 'वह मेरे पिता की एकमात्र पुत्री का पुत्र है।' वह व्यक्ति राहुल से कैसे संबंधित है?"
        },
        "o": [
          {
            "en": "Brother",
            "hi": "भाई"
          },
          {
            "en": "Nephew (भांजा)",
            "hi": "भांजा (Nephew)"
          },
          {
            "en": "Son",
            "hi": "पुत्र"
          },
          {
            "en": "Uncle",
            "hi": "मामा"
          }
        ],
        "a": 1,
        "exp": {
          "en": "Father's only daughter = Rahul's sister. Her son = Nephew.",
          "hi": "राहुल के पिता की एकमात्र पुत्री = राहुल की बहन। बहन का पुत्र = भांजा (Nephew)।"
        }
      },
      {
        "id": 3,
        "subject": "General Awareness",
        "q": {
          "en": "Under whose reign was the Fourth Buddhist Council held at Kundalvana in Kashmir?",
          "hi": "कश्मीर के कुंडलवन में चतुर्थ बौद्ध संगीति किसके शासनकाल में आयोजित की गई थी?"
        },
        "o": [
          {
            "en": "Ashoka",
            "hi": "अशोक"
          },
          {
            "en": "Kanishka",
            "hi": "कनिष्क"
          },
          {
            "en": "Kalashoka",
            "hi": "कालाशोक"
          },
          {
            "en": "Harshavardhana",
            "hi": "हर्षवर्धन"
          }
        ],
        "a": 1,
        "exp": {
          "en": "Held under Kushan ruler Kanishka (~72 AD) under Vasumitra's presidency.",
          "hi": "चतुर्थ बौद्ध संगीति कुषाण शासक कनिष्क के शासनकाल में वसुमित्र की अध्यक्षता में हुई थी।"
        }
      },
      {
        "id": 4,
        "subject": "General Awareness",
        "q": {
          "en": "Which layer of the atmosphere contains the ozone layer that protects Earth from harmful UV rays?",
          "hi": "वायुमंडल की किस परत में ओजोन परत पाई जाती है जो पराबैंगनी किरणों से रक्षा करती है?"
        },
        "o": [
          {
            "en": "Troposphere",
            "hi": "क्षोभमंडल"
          },
          {
            "en": "Stratosphere",
            "hi": "समताप मंडल"
          },
          {
            "en": "Mesosphere",
            "hi": "मध्यमंडल"
          },
          {
            "en": "Thermosphere",
            "hi": "आयनमंडल"
          }
        ],
        "a": 1,
        "exp": {
          "en": "The ozone layer is located in the Stratosphere between 15-35 km altitude.",
          "hi": "ओजोन परत समताप मंडल (Stratosphere) में 15 से 35 किमी की ऊंचाई पर स्थित है।"
        }
      },
      {
        "id": 5,
        "subject": "Quantitative Aptitude",
        "q": {
          "en": "A and B can do a work in 15 and 20 days. They worked together for 4 days. What fraction of work is left?",
          "hi": "A और B किसी काम को 15 और 20 दिन में कर सकते हैं। उन्होंने 4 दिन साथ काम किया। कितना काम शेष बचा है?"
        },
        "o": [
          {
            "en": "7 / 15",
            "hi": "7 / 15"
          },
          {
            "en": "8 / 15",
            "hi": "8 / 15"
          },
          {
            "en": "11 / 15",
            "hi": "11 / 15"
          },
          {
            "en": "2 / 5",
            "hi": "2 / 5"
          }
        ],
        "a": 1,
        "exp": {
          "en": "Total = 60 units. A=4, B=3. In 4 days = 28 units. Remaining = 32/60 = 8/15.",
          "hi": "कुल कार्य = 60 इकाई। 4 दिन में कार्य = 28 इकाई। शेष कार्य = 32/60 = 8/15।"
        }
      },
      {
        "id": 6,
        "subject": "Quantitative Aptitude",
        "q": {
          "en": "Find the compound interest on ₹10,000 for 2 years at 10% per annum, compounded annually.",
          "hi": "₹10,000 पर 10% वार्षिक दर से 2 वर्ष का चक्रवृद्धि ब्याज क्या होगा?"
        },
        "o": [
          {
            "en": "₹2,000",
            "hi": "₹2,000"
          },
          {
            "en": "₹2,100",
            "hi": "₹2,100"
          },
          {
            "en": "₹2,200",
            "hi": "₹2,200"
          },
          {
            "en": "₹2,250",
            "hi": "₹2,250"
          }
        ],
        "a": 1,
        "exp": {
          "en": "Net CI% for 2 yrs = 10 + 10 + 1 = 21%. CI = 10000 × 21% = ₹2,100.",
          "hi": "2 वर्ष का शुद्ध CI दर = 21%। चक्रवृद्धि ब्याज = 10000 × 21% = ₹2,100।"
        }
      },
      {
        "id": 7,
        "subject": "English Comprehension",
        "q": {
          "en": "Select the most appropriate ANTONYM of the given word:\n'METICULOUS'",
          "hi": "दिए गए शब्द का सर्वाधिक उपयुक्त विलोम शब्द (ANTONYM) चुनें:\n'METICULOUS'"
        },
        "o": [
          {
            "en": "Careless",
            "hi": "लापरवाह (Careless)"
          },
          {
            "en": "Precise",
            "hi": "सटीक"
          },
          {
            "en": "Scrupulous",
            "hi": "कर्तव्यनिष्ठ"
          },
          {
            "en": "Accurate",
            "hi": "शुद्ध"
          }
        ],
        "a": 0,
        "exp": {
          "en": "'Meticulous' means careful and detail-oriented. Antonym is 'Careless'.",
          "hi": "'Meticulous' का विलोम 'Careless' (लापरवाह) है।"
        }
      },
      {
        "id": 8,
        "subject": "English Comprehension",
        "q": {
          "en": "Select the meaning of the idiom: 'To burn the midnight oil'",
          "hi": "मुहावरे का सही अर्थ चुनें: 'To burn the midnight oil'"
        },
        "o": [
          {
            "en": "To waste fuel",
            "hi": "ईंधन बर्बाद करना"
          },
          {
            "en": "To work or study late into the night",
            "hi": "देर रात तक कठिन परिश्रम या पढ़ाई करना"
          },
          {
            "en": "To sleep late",
            "hi": "देर से सोना"
          },
          {
            "en": "To burn lamps",
            "hi": "दीपक जलाना"
          }
        ],
        "a": 1,
        "exp": {
          "en": "Means working or studying diligently late into the night.",
          "hi": "इसका अर्थ देर रात तक कठिन परिश्रम या पढ़ाई करना होता है।"
        }
      }
    ],
    "cgl_2021_s3": [
      {
        "id": 1,
        "subject": "General Intelligence & Reasoning",
        "q": {
          "en": "Select the option that is related to the third number in the same way as the second number is related to the first number:\n12 : 156 :: 14 : ?",
          "hi": "उस विकल्प का चयन करें जो तीसरी संख्या से उसी प्रकार संबंधित है जैसे दूसरी संख्या पहली संख्या से संबंधित है:\n12 : 156 :: 14 : ?"
        },
        "o": [
          {
            "en": "208",
            "hi": "208"
          },
          {
            "en": "210",
            "hi": "210"
          },
          {
            "en": "212",
            "hi": "212"
          },
          {
            "en": "216",
            "hi": "216"
          }
        ],
        "a": 1,
        "exp": {
          "en": "Logic: n : n(n + 1). 12 × 13 = 156. For 14: 14 × 15 = 210.",
          "hi": "तर्क: n : n(n + 1)। 12 × 13 = 156। इसी प्रकार 14 × 15 = 210।"
        }
      },
      {
        "id": 2,
        "subject": "General Intelligence & Reasoning",
        "q": {
          "en": "In a code language, 'ROBUST' is written as 'QNATRS'. How will 'STABLE' be written in that code language?",
          "hi": "एक निश्चित कूट भाषा में 'ROBUST' को 'QNATRS' लिखा जाता है। उसी कूट भाषा में 'STABLE' को कैसे लिखा जाएगा?"
        },
        "o": [
          {
            "en": "RSZAKD",
            "hi": "RSZAKD"
          },
          {
            "en": "RSZAKC",
            "hi": "RSZAKC"
          },
          {
            "en": "TRBCMF",
            "hi": "TRBCMF"
          },
          {
            "en": "RTAAKD",
            "hi": "RTAAKD"
          }
        ],
        "a": 0,
        "exp": {
          "en": "Logic: Each letter - 1 position. S-1=R, T-1=S, A-1=Z, B-1=A, L-1=K, E-1=D.",
          "hi": "तर्क: प्रत्येक अक्षर में -1 की कमी की गई है। S-1=R, T-1=S, A-1=Z, B-1=A, L-1=K, E-1=D → RSZAKD।"
        }
      },
      {
        "id": 3,
        "subject": "General Awareness",
        "q": {
          "en": "Which Article of the Indian Constitution provides for the appointment of the Finance Commission of India every 5 years?",
          "hi": "भारतीय संविधान का कौन सा अनुच्छेद प्रत्येक 5 वर्ष में भारत के वित्त आयोग के गठन का प्रावधान करता है?"
        },
        "o": [
          {
            "en": "Article 260",
            "hi": "अनुच्छेद 260"
          },
          {
            "en": "Article 280",
            "hi": "अनुच्छेद 280"
          },
          {
            "en": "Article 324",
            "hi": "अनुच्छेद 324"
          },
          {
            "en": "Article 356",
            "hi": "अनुच्छेद 356"
          }
        ],
        "a": 1,
        "exp": {
          "en": "Article 280 mandates that the President shall constitute a Finance Commission at the expiration of every fifth year.",
          "hi": "संविधान का अनुच्छेद 280 राष्ट्रपति द्वारा प्रत्येक 5 वर्ष की समाप्ति पर वित्त आयोग के गठन का प्रावधान करता है।"
        }
      },
      {
        "id": 4,
        "subject": "General Awareness",
        "q": {
          "en": "Mohiniyattam is a classical dance that originated and developed in which Indian state?",
          "hi": "मोहिनीअट्टम भारत का एक शास्त्रीय नृत्य रूप है, जिसकी उत्पत्ति और विकास किस राज्य में हुआ?"
        },
        "o": [
          {
            "en": "Tamil Nadu",
            "hi": "तमिलनाडु"
          },
          {
            "en": "Kerala",
            "hi": "केरल"
          },
          {
            "en": "Andhra Pradesh",
            "hi": "आंध्र प्रदेश"
          },
          {
            "en": "Karnataka",
            "hi": "कर्नाटक"
          }
        ],
        "a": 1,
        "exp": {
          "en": "Mohiniyattam originated in Kerala and is named after the celestial enchantress Mohini (avatar of Lord Vishnu).",
          "hi": "मोहिनीअट्टम की उत्पत्ति केरल में हुई थी। यह नाम भगवान विष्णु के मोहिनी अवतार पर आधारित है।"
        }
      },
      {
        "id": 5,
        "subject": "Quantitative Aptitude",
        "q": {
          "en": "A trader marks goods 30% above cost price and allows a 10% discount on marked price. Find net profit percentage.",
          "hi": "एक व्यापारी अपनी वस्तुओं पर क्रय मूल्य से 30% अधिक मूल्य अंकित करता है और 10% की छूट देता है। उसका शुद्ध लाभ प्रतिशत ज्ञात कीजिए।"
        },
        "o": [
          {
            "en": "15%",
            "hi": "15%"
          },
          {
            "en": "17%",
            "hi": "17%"
          },
          {
            "en": "18%",
            "hi": "18%"
          },
          {
            "en": "20%",
            "hi": "20%"
          }
        ],
        "a": 1,
        "exp": {
          "en": "CP = 100, MP = 130. Discount = 13. SP = 117. Net profit = 17%.",
          "hi": "माना CP = 100, तो MP = 130। छूट = 130 का 10% = 13। SP = 117। शुद्ध लाभ = 17%।"
        }
      },
      {
        "id": 6,
        "subject": "Quantitative Aptitude",
        "q": {
          "en": "If x + 1/x = 5, find the value of x³ + 1/x³.",
          "hi": "यदि x + 1/x = 5 है, तो x³ + 1/x³ का मान क्या होगा?"
        },
        "o": [
          {
            "en": "110",
            "hi": "110"
          },
          {
            "en": "115",
            "hi": "115"
          },
          {
            "en": "120",
            "hi": "120"
          },
          {
            "en": "125",
            "hi": "125"
          }
        ],
        "a": 0,
        "exp": {
          "en": "Formula: k³ - 3k = 5³ - 3(5) = 125 - 15 = 110.",
          "hi": "सूत्र: k³ - 3k = 125 - 15 = 110।"
        }
      },
      {
        "id": 7,
        "subject": "English Comprehension",
        "q": {
          "en": "Select the most appropriate SYNONYM of the given word:\n'BENEVOLENT'",
          "hi": "दिए गए शब्द का सर्वाधिक उपयुक्त पर्यायवाची (SYNONYM) चुनें:\n'BENEVOLENT'"
        },
        "o": [
          {
            "en": "Hostile",
            "hi": "शत्रुतापूर्ण"
          },
          {
            "en": "Generous",
            "hi": "उदार (दयालु)"
          },
          {
            "en": "Miserly",
            "hi": "कंजूस"
          },
          {
            "en": "Cruel",
            "hi": "निर्दयी"
          }
        ],
        "a": 1,
        "exp": {
          "en": "'Benevolent' means kindly and generous. Closest synonym is 'Generous'.",
          "hi": "'Benevolent' का अर्थ दयालु व परोपकारी होता है। इसका सही पर्यायवाची 'Generous' है।"
        }
      },
      {
        "id": 8,
        "subject": "English Comprehension",
        "q": {
          "en": "Identify the segment with grammatical error: 'Neither the teacher nor the students was present in the auditorium.'",
          "hi": "व्याकरण संबंधी त्रुटि वाले भाग को पहचानें: 'Neither the teacher nor the students was present in the auditorium.'"
        },
        "o": [
          {
            "en": "was present (Change to 'were present')",
            "hi": "was present (सही: 'were present')"
          },
          {
            "en": "Neither the teacher",
            "hi": "Neither the teacher"
          },
          {
            "en": "in the auditorium",
            "hi": "in the auditorium"
          },
          {
            "en": "No error",
            "hi": "कोई त्रुटि नहीं"
          }
        ],
        "a": 0,
        "exp": {
          "en": "With 'neither... nor', the verb agrees with the closer plural subject 'students', so 'were present' is correct.",
          "hi": "'Neither... nor' में क्रिया निकटतम कर्ता 'students' (बहुवचन) के अनुसार 'were present' होनी चाहिए।"
        }
      }
    ],
    "cgl_2021_mock": [
      {
        "id": 1,
        "subject": "General Intelligence & Reasoning",
        "q": {
          "en": "Find the missing number in the series:\n13, 17, 26, 42, 67, ?",
          "hi": "श्रृंखला में लुप्त संख्या ज्ञात कीजिए:\n13, 17, 26, 42, 67, ?"
        },
        "o": [
          {
            "en": "98",
            "hi": "98"
          },
          {
            "en": "103",
            "hi": "103"
          },
          {
            "en": "105",
            "hi": "105"
          },
          {
            "en": "108",
            "hi": "108"
          }
        ],
        "a": 1,
        "exp": {
          "en": "Pattern: +2² (4), +3² (9), +4² (16), +5² (25), +6² (36). 67 + 36 = 103.",
          "hi": "पैटर्न: +4, +9, +16, +25, +36। 67 + 36 = 103।"
        }
      },
      {
        "id": 2,
        "subject": "General Intelligence & Reasoning",
        "q": {
          "en": "Pointing to a man, Rahul said, 'He is the son of the only daughter of my father.' How is the man related to Rahul?",
          "hi": "एक व्यक्ति की तस्वीर की ओर इशारा करते हुए राहुल ने कहा, 'वह मेरे पिता की एकमात्र पुत्री का पुत्र है।' वह व्यक्ति राहुल से कैसे संबंधित है?"
        },
        "o": [
          {
            "en": "Brother",
            "hi": "भाई"
          },
          {
            "en": "Nephew (भांजा)",
            "hi": "भांजा (Nephew)"
          },
          {
            "en": "Son",
            "hi": "पुत्र"
          },
          {
            "en": "Uncle",
            "hi": "मामा"
          }
        ],
        "a": 1,
        "exp": {
          "en": "Father's only daughter = Rahul's sister. Her son = Nephew.",
          "hi": "राहुल के पिता की एकमात्र पुत्री = राहुल की बहन। बहन का पुत्र = भांजा (Nephew)।"
        }
      },
      {
        "id": 3,
        "subject": "General Awareness",
        "q": {
          "en": "Under whose reign was the Fourth Buddhist Council held at Kundalvana in Kashmir?",
          "hi": "कश्मीर के कुंडलवन में चतुर्थ बौद्ध संगीति किसके शासनकाल में आयोजित की गई थी?"
        },
        "o": [
          {
            "en": "Ashoka",
            "hi": "अशोक"
          },
          {
            "en": "Kanishka",
            "hi": "कनिष्क"
          },
          {
            "en": "Kalashoka",
            "hi": "कालाशोक"
          },
          {
            "en": "Harshavardhana",
            "hi": "हर्षवर्धन"
          }
        ],
        "a": 1,
        "exp": {
          "en": "Held under Kushan ruler Kanishka (~72 AD) under Vasumitra's presidency.",
          "hi": "चतुर्थ बौद्ध संगीति कुषाण शासक कनिष्क के शासनकाल में वसुमित्र की अध्यक्षता में हुई थी।"
        }
      },
      {
        "id": 4,
        "subject": "General Awareness",
        "q": {
          "en": "Which layer of the atmosphere contains the ozone layer that protects Earth from harmful UV rays?",
          "hi": "वायुमंडल की किस परत में ओजोन परत पाई जाती है जो पराबैंगनी किरणों से रक्षा करती है?"
        },
        "o": [
          {
            "en": "Troposphere",
            "hi": "क्षोभमंडल"
          },
          {
            "en": "Stratosphere",
            "hi": "समताप मंडल"
          },
          {
            "en": "Mesosphere",
            "hi": "मध्यमंडल"
          },
          {
            "en": "Thermosphere",
            "hi": "आयनमंडल"
          }
        ],
        "a": 1,
        "exp": {
          "en": "The ozone layer is located in the Stratosphere between 15-35 km altitude.",
          "hi": "ओजोन परत समताप मंडल (Stratosphere) में 15 से 35 किमी की ऊंचाई पर स्थित है।"
        }
      },
      {
        "id": 5,
        "subject": "Quantitative Aptitude",
        "q": {
          "en": "A and B can do a work in 15 and 20 days. They worked together for 4 days. What fraction of work is left?",
          "hi": "A और B किसी काम को 15 और 20 दिन में कर सकते हैं। उन्होंने 4 दिन साथ काम किया। कितना काम शेष बचा है?"
        },
        "o": [
          {
            "en": "7 / 15",
            "hi": "7 / 15"
          },
          {
            "en": "8 / 15",
            "hi": "8 / 15"
          },
          {
            "en": "11 / 15",
            "hi": "11 / 15"
          },
          {
            "en": "2 / 5",
            "hi": "2 / 5"
          }
        ],
        "a": 1,
        "exp": {
          "en": "Total = 60 units. A=4, B=3. In 4 days = 28 units. Remaining = 32/60 = 8/15.",
          "hi": "कुल कार्य = 60 इकाई। 4 दिन में कार्य = 28 इकाई। शेष कार्य = 32/60 = 8/15।"
        }
      },
      {
        "id": 6,
        "subject": "Quantitative Aptitude",
        "q": {
          "en": "Find the compound interest on ₹10,000 for 2 years at 10% per annum, compounded annually.",
          "hi": "₹10,000 पर 10% वार्षिक दर से 2 वर्ष का चक्रवृद्धि ब्याज क्या होगा?"
        },
        "o": [
          {
            "en": "₹2,000",
            "hi": "₹2,000"
          },
          {
            "en": "₹2,100",
            "hi": "₹2,100"
          },
          {
            "en": "₹2,200",
            "hi": "₹2,200"
          },
          {
            "en": "₹2,250",
            "hi": "₹2,250"
          }
        ],
        "a": 1,
        "exp": {
          "en": "Net CI% for 2 yrs = 10 + 10 + 1 = 21%. CI = 10000 × 21% = ₹2,100.",
          "hi": "2 वर्ष का शुद्ध CI दर = 21%। चक्रवृद्धि ब्याज = 10000 × 21% = ₹2,100।"
        }
      },
      {
        "id": 7,
        "subject": "English Comprehension",
        "q": {
          "en": "Select the most appropriate ANTONYM of the given word:\n'METICULOUS'",
          "hi": "दिए गए शब्द का सर्वाधिक उपयुक्त विलोम शब्द (ANTONYM) चुनें:\n'METICULOUS'"
        },
        "o": [
          {
            "en": "Careless",
            "hi": "लापरवाह (Careless)"
          },
          {
            "en": "Precise",
            "hi": "सटीक"
          },
          {
            "en": "Scrupulous",
            "hi": "कर्तव्यनिष्ठ"
          },
          {
            "en": "Accurate",
            "hi": "शुद्ध"
          }
        ],
        "a": 0,
        "exp": {
          "en": "'Meticulous' means careful and detail-oriented. Antonym is 'Careless'.",
          "hi": "'Meticulous' का विलोम 'Careless' (लापरवाह) है।"
        }
      },
      {
        "id": 8,
        "subject": "English Comprehension",
        "q": {
          "en": "Select the meaning of the idiom: 'To burn the midnight oil'",
          "hi": "मुहावरे का सही अर्थ चुनें: 'To burn the midnight oil'"
        },
        "o": [
          {
            "en": "To waste fuel",
            "hi": "ईंधन बर्बाद करना"
          },
          {
            "en": "To work or study late into the night",
            "hi": "देर रात तक कठिन परिश्रम या पढ़ाई करना"
          },
          {
            "en": "To sleep late",
            "hi": "देर से सोना"
          },
          {
            "en": "To burn lamps",
            "hi": "दीपक जलाना"
          }
        ],
        "a": 1,
        "exp": {
          "en": "Means working or studying diligently late into the night.",
          "hi": "इसका अर्थ देर रात तक कठिन परिश्रम या पढ़ाई करना होता है।"
        }
      }
    ],
    "cgl_2020_s1": [
      {
        "id": 1,
        "subject": "General Intelligence & Reasoning",
        "q": {
          "en": "Select the option that is related to the third number in the same way as the second number is related to the first number:\n12 : 156 :: 14 : ?",
          "hi": "उस विकल्प का चयन करें जो तीसरी संख्या से उसी प्रकार संबंधित है जैसे दूसरी संख्या पहली संख्या से संबंधित है:\n12 : 156 :: 14 : ?"
        },
        "o": [
          {
            "en": "208",
            "hi": "208"
          },
          {
            "en": "210",
            "hi": "210"
          },
          {
            "en": "212",
            "hi": "212"
          },
          {
            "en": "216",
            "hi": "216"
          }
        ],
        "a": 1,
        "exp": {
          "en": "Logic: n : n(n + 1). 12 × 13 = 156. For 14: 14 × 15 = 210.",
          "hi": "तर्क: n : n(n + 1)। 12 × 13 = 156। इसी प्रकार 14 × 15 = 210।"
        }
      },
      {
        "id": 2,
        "subject": "General Intelligence & Reasoning",
        "q": {
          "en": "In a code language, 'ROBUST' is written as 'QNATRS'. How will 'STABLE' be written in that code language?",
          "hi": "एक निश्चित कूट भाषा में 'ROBUST' को 'QNATRS' लिखा जाता है। उसी कूट भाषा में 'STABLE' को कैसे लिखा जाएगा?"
        },
        "o": [
          {
            "en": "RSZAKD",
            "hi": "RSZAKD"
          },
          {
            "en": "RSZAKC",
            "hi": "RSZAKC"
          },
          {
            "en": "TRBCMF",
            "hi": "TRBCMF"
          },
          {
            "en": "RTAAKD",
            "hi": "RTAAKD"
          }
        ],
        "a": 0,
        "exp": {
          "en": "Logic: Each letter - 1 position. S-1=R, T-1=S, A-1=Z, B-1=A, L-1=K, E-1=D.",
          "hi": "तर्क: प्रत्येक अक्षर में -1 की कमी की गई है। S-1=R, T-1=S, A-1=Z, B-1=A, L-1=K, E-1=D → RSZAKD।"
        }
      },
      {
        "id": 3,
        "subject": "General Awareness",
        "q": {
          "en": "Which Article of the Indian Constitution provides for the appointment of the Finance Commission of India every 5 years?",
          "hi": "भारतीय संविधान का कौन सा अनुच्छेद प्रत्येक 5 वर्ष में भारत के वित्त आयोग के गठन का प्रावधान करता है?"
        },
        "o": [
          {
            "en": "Article 260",
            "hi": "अनुच्छेद 260"
          },
          {
            "en": "Article 280",
            "hi": "अनुच्छेद 280"
          },
          {
            "en": "Article 324",
            "hi": "अनुच्छेद 324"
          },
          {
            "en": "Article 356",
            "hi": "अनुच्छेद 356"
          }
        ],
        "a": 1,
        "exp": {
          "en": "Article 280 mandates that the President shall constitute a Finance Commission at the expiration of every fifth year.",
          "hi": "संविधान का अनुच्छेद 280 राष्ट्रपति द्वारा प्रत्येक 5 वर्ष की समाप्ति पर वित्त आयोग के गठन का प्रावधान करता है।"
        }
      },
      {
        "id": 4,
        "subject": "General Awareness",
        "q": {
          "en": "Mohiniyattam is a classical dance that originated and developed in which Indian state?",
          "hi": "मोहिनीअट्टम भारत का एक शास्त्रीय नृत्य रूप है, जिसकी उत्पत्ति और विकास किस राज्य में हुआ?"
        },
        "o": [
          {
            "en": "Tamil Nadu",
            "hi": "तमिलनाडु"
          },
          {
            "en": "Kerala",
            "hi": "केरल"
          },
          {
            "en": "Andhra Pradesh",
            "hi": "आंध्र प्रदेश"
          },
          {
            "en": "Karnataka",
            "hi": "कर्नाटक"
          }
        ],
        "a": 1,
        "exp": {
          "en": "Mohiniyattam originated in Kerala and is named after the celestial enchantress Mohini (avatar of Lord Vishnu).",
          "hi": "मोहिनीअट्टम की उत्पत्ति केरल में हुई थी। यह नाम भगवान विष्णु के मोहिनी अवतार पर आधारित है।"
        }
      },
      {
        "id": 5,
        "subject": "Quantitative Aptitude",
        "q": {
          "en": "A trader marks goods 30% above cost price and allows a 10% discount on marked price. Find net profit percentage.",
          "hi": "एक व्यापारी अपनी वस्तुओं पर क्रय मूल्य से 30% अधिक मूल्य अंकित करता है और 10% की छूट देता है। उसका शुद्ध लाभ प्रतिशत ज्ञात कीजिए।"
        },
        "o": [
          {
            "en": "15%",
            "hi": "15%"
          },
          {
            "en": "17%",
            "hi": "17%"
          },
          {
            "en": "18%",
            "hi": "18%"
          },
          {
            "en": "20%",
            "hi": "20%"
          }
        ],
        "a": 1,
        "exp": {
          "en": "CP = 100, MP = 130. Discount = 13. SP = 117. Net profit = 17%.",
          "hi": "माना CP = 100, तो MP = 130। छूट = 130 का 10% = 13। SP = 117। शुद्ध लाभ = 17%।"
        }
      },
      {
        "id": 6,
        "subject": "Quantitative Aptitude",
        "q": {
          "en": "If x + 1/x = 5, find the value of x³ + 1/x³.",
          "hi": "यदि x + 1/x = 5 है, तो x³ + 1/x³ का मान क्या होगा?"
        },
        "o": [
          {
            "en": "110",
            "hi": "110"
          },
          {
            "en": "115",
            "hi": "115"
          },
          {
            "en": "120",
            "hi": "120"
          },
          {
            "en": "125",
            "hi": "125"
          }
        ],
        "a": 0,
        "exp": {
          "en": "Formula: k³ - 3k = 5³ - 3(5) = 125 - 15 = 110.",
          "hi": "सूत्र: k³ - 3k = 125 - 15 = 110।"
        }
      },
      {
        "id": 7,
        "subject": "English Comprehension",
        "q": {
          "en": "Select the most appropriate SYNONYM of the given word:\n'BENEVOLENT'",
          "hi": "दिए गए शब्द का सर्वाधिक उपयुक्त पर्यायवाची (SYNONYM) चुनें:\n'BENEVOLENT'"
        },
        "o": [
          {
            "en": "Hostile",
            "hi": "शत्रुतापूर्ण"
          },
          {
            "en": "Generous",
            "hi": "उदार (दयालु)"
          },
          {
            "en": "Miserly",
            "hi": "कंजूस"
          },
          {
            "en": "Cruel",
            "hi": "निर्दयी"
          }
        ],
        "a": 1,
        "exp": {
          "en": "'Benevolent' means kindly and generous. Closest synonym is 'Generous'.",
          "hi": "'Benevolent' का अर्थ दयालु व परोपकारी होता है। इसका सही पर्यायवाची 'Generous' है।"
        }
      },
      {
        "id": 8,
        "subject": "English Comprehension",
        "q": {
          "en": "Identify the segment with grammatical error: 'Neither the teacher nor the students was present in the auditorium.'",
          "hi": "व्याकरण संबंधी त्रुटि वाले भाग को पहचानें: 'Neither the teacher nor the students was present in the auditorium.'"
        },
        "o": [
          {
            "en": "was present (Change to 'were present')",
            "hi": "was present (सही: 'were present')"
          },
          {
            "en": "Neither the teacher",
            "hi": "Neither the teacher"
          },
          {
            "en": "in the auditorium",
            "hi": "in the auditorium"
          },
          {
            "en": "No error",
            "hi": "कोई त्रुटि नहीं"
          }
        ],
        "a": 0,
        "exp": {
          "en": "With 'neither... nor', the verb agrees with the closer plural subject 'students', so 'were present' is correct.",
          "hi": "'Neither... nor' में क्रिया निकटतम कर्ता 'students' (बहुवचन) के अनुसार 'were present' होनी चाहिए।"
        }
      }
    ],
    "cgl_2020_s2": [
      {
        "id": 1,
        "subject": "General Intelligence & Reasoning",
        "q": {
          "en": "Find the missing number in the series:\n13, 17, 26, 42, 67, ?",
          "hi": "श्रृंखला में लुप्त संख्या ज्ञात कीजिए:\n13, 17, 26, 42, 67, ?"
        },
        "o": [
          {
            "en": "98",
            "hi": "98"
          },
          {
            "en": "103",
            "hi": "103"
          },
          {
            "en": "105",
            "hi": "105"
          },
          {
            "en": "108",
            "hi": "108"
          }
        ],
        "a": 1,
        "exp": {
          "en": "Pattern: +2² (4), +3² (9), +4² (16), +5² (25), +6² (36). 67 + 36 = 103.",
          "hi": "पैटर्न: +4, +9, +16, +25, +36। 67 + 36 = 103।"
        }
      },
      {
        "id": 2,
        "subject": "General Intelligence & Reasoning",
        "q": {
          "en": "Pointing to a man, Rahul said, 'He is the son of the only daughter of my father.' How is the man related to Rahul?",
          "hi": "एक व्यक्ति की तस्वीर की ओर इशारा करते हुए राहुल ने कहा, 'वह मेरे पिता की एकमात्र पुत्री का पुत्र है।' वह व्यक्ति राहुल से कैसे संबंधित है?"
        },
        "o": [
          {
            "en": "Brother",
            "hi": "भाई"
          },
          {
            "en": "Nephew (भांजा)",
            "hi": "भांजा (Nephew)"
          },
          {
            "en": "Son",
            "hi": "पुत्र"
          },
          {
            "en": "Uncle",
            "hi": "मामा"
          }
        ],
        "a": 1,
        "exp": {
          "en": "Father's only daughter = Rahul's sister. Her son = Nephew.",
          "hi": "राहुल के पिता की एकमात्र पुत्री = राहुल की बहन। बहन का पुत्र = भांजा (Nephew)।"
        }
      },
      {
        "id": 3,
        "subject": "General Awareness",
        "q": {
          "en": "Under whose reign was the Fourth Buddhist Council held at Kundalvana in Kashmir?",
          "hi": "कश्मीर के कुंडलवन में चतुर्थ बौद्ध संगीति किसके शासनकाल में आयोजित की गई थी?"
        },
        "o": [
          {
            "en": "Ashoka",
            "hi": "अशोक"
          },
          {
            "en": "Kanishka",
            "hi": "कनिष्क"
          },
          {
            "en": "Kalashoka",
            "hi": "कालाशोक"
          },
          {
            "en": "Harshavardhana",
            "hi": "हर्षवर्धन"
          }
        ],
        "a": 1,
        "exp": {
          "en": "Held under Kushan ruler Kanishka (~72 AD) under Vasumitra's presidency.",
          "hi": "चतुर्थ बौद्ध संगीति कुषाण शासक कनिष्क के शासनकाल में वसुमित्र की अध्यक्षता में हुई थी।"
        }
      },
      {
        "id": 4,
        "subject": "General Awareness",
        "q": {
          "en": "Which layer of the atmosphere contains the ozone layer that protects Earth from harmful UV rays?",
          "hi": "वायुमंडल की किस परत में ओजोन परत पाई जाती है जो पराबैंगनी किरणों से रक्षा करती है?"
        },
        "o": [
          {
            "en": "Troposphere",
            "hi": "क्षोभमंडल"
          },
          {
            "en": "Stratosphere",
            "hi": "समताप मंडल"
          },
          {
            "en": "Mesosphere",
            "hi": "मध्यमंडल"
          },
          {
            "en": "Thermosphere",
            "hi": "आयनमंडल"
          }
        ],
        "a": 1,
        "exp": {
          "en": "The ozone layer is located in the Stratosphere between 15-35 km altitude.",
          "hi": "ओजोन परत समताप मंडल (Stratosphere) में 15 से 35 किमी की ऊंचाई पर स्थित है।"
        }
      },
      {
        "id": 5,
        "subject": "Quantitative Aptitude",
        "q": {
          "en": "A and B can do a work in 15 and 20 days. They worked together for 4 days. What fraction of work is left?",
          "hi": "A और B किसी काम को 15 और 20 दिन में कर सकते हैं। उन्होंने 4 दिन साथ काम किया। कितना काम शेष बचा है?"
        },
        "o": [
          {
            "en": "7 / 15",
            "hi": "7 / 15"
          },
          {
            "en": "8 / 15",
            "hi": "8 / 15"
          },
          {
            "en": "11 / 15",
            "hi": "11 / 15"
          },
          {
            "en": "2 / 5",
            "hi": "2 / 5"
          }
        ],
        "a": 1,
        "exp": {
          "en": "Total = 60 units. A=4, B=3. In 4 days = 28 units. Remaining = 32/60 = 8/15.",
          "hi": "कुल कार्य = 60 इकाई। 4 दिन में कार्य = 28 इकाई। शेष कार्य = 32/60 = 8/15।"
        }
      },
      {
        "id": 6,
        "subject": "Quantitative Aptitude",
        "q": {
          "en": "Find the compound interest on ₹10,000 for 2 years at 10% per annum, compounded annually.",
          "hi": "₹10,000 पर 10% वार्षिक दर से 2 वर्ष का चक्रवृद्धि ब्याज क्या होगा?"
        },
        "o": [
          {
            "en": "₹2,000",
            "hi": "₹2,000"
          },
          {
            "en": "₹2,100",
            "hi": "₹2,100"
          },
          {
            "en": "₹2,200",
            "hi": "₹2,200"
          },
          {
            "en": "₹2,250",
            "hi": "₹2,250"
          }
        ],
        "a": 1,
        "exp": {
          "en": "Net CI% for 2 yrs = 10 + 10 + 1 = 21%. CI = 10000 × 21% = ₹2,100.",
          "hi": "2 वर्ष का शुद्ध CI दर = 21%। चक्रवृद्धि ब्याज = 10000 × 21% = ₹2,100।"
        }
      },
      {
        "id": 7,
        "subject": "English Comprehension",
        "q": {
          "en": "Select the most appropriate ANTONYM of the given word:\n'METICULOUS'",
          "hi": "दिए गए शब्द का सर्वाधिक उपयुक्त विलोम शब्द (ANTONYM) चुनें:\n'METICULOUS'"
        },
        "o": [
          {
            "en": "Careless",
            "hi": "लापरवाह (Careless)"
          },
          {
            "en": "Precise",
            "hi": "सटीक"
          },
          {
            "en": "Scrupulous",
            "hi": "कर्तव्यनिष्ठ"
          },
          {
            "en": "Accurate",
            "hi": "शुद्ध"
          }
        ],
        "a": 0,
        "exp": {
          "en": "'Meticulous' means careful and detail-oriented. Antonym is 'Careless'.",
          "hi": "'Meticulous' का विलोम 'Careless' (लापरवाह) है।"
        }
      },
      {
        "id": 8,
        "subject": "English Comprehension",
        "q": {
          "en": "Select the meaning of the idiom: 'To burn the midnight oil'",
          "hi": "मुहावरे का सही अर्थ चुनें: 'To burn the midnight oil'"
        },
        "o": [
          {
            "en": "To waste fuel",
            "hi": "ईंधन बर्बाद करना"
          },
          {
            "en": "To work or study late into the night",
            "hi": "देर रात तक कठिन परिश्रम या पढ़ाई करना"
          },
          {
            "en": "To sleep late",
            "hi": "देर से सोना"
          },
          {
            "en": "To burn lamps",
            "hi": "दीपक जलाना"
          }
        ],
        "a": 1,
        "exp": {
          "en": "Means working or studying diligently late into the night.",
          "hi": "इसका अर्थ देर रात तक कठिन परिश्रम या पढ़ाई करना होता है।"
        }
      }
    ],
    "cgl_2020_s3": [
      {
        "id": 1,
        "subject": "General Intelligence & Reasoning",
        "q": {
          "en": "Select the option that is related to the third number in the same way as the second number is related to the first number:\n12 : 156 :: 14 : ?",
          "hi": "उस विकल्प का चयन करें जो तीसरी संख्या से उसी प्रकार संबंधित है जैसे दूसरी संख्या पहली संख्या से संबंधित है:\n12 : 156 :: 14 : ?"
        },
        "o": [
          {
            "en": "208",
            "hi": "208"
          },
          {
            "en": "210",
            "hi": "210"
          },
          {
            "en": "212",
            "hi": "212"
          },
          {
            "en": "216",
            "hi": "216"
          }
        ],
        "a": 1,
        "exp": {
          "en": "Logic: n : n(n + 1). 12 × 13 = 156. For 14: 14 × 15 = 210.",
          "hi": "तर्क: n : n(n + 1)। 12 × 13 = 156। इसी प्रकार 14 × 15 = 210।"
        }
      },
      {
        "id": 2,
        "subject": "General Intelligence & Reasoning",
        "q": {
          "en": "In a code language, 'ROBUST' is written as 'QNATRS'. How will 'STABLE' be written in that code language?",
          "hi": "एक निश्चित कूट भाषा में 'ROBUST' को 'QNATRS' लिखा जाता है। उसी कूट भाषा में 'STABLE' को कैसे लिखा जाएगा?"
        },
        "o": [
          {
            "en": "RSZAKD",
            "hi": "RSZAKD"
          },
          {
            "en": "RSZAKC",
            "hi": "RSZAKC"
          },
          {
            "en": "TRBCMF",
            "hi": "TRBCMF"
          },
          {
            "en": "RTAAKD",
            "hi": "RTAAKD"
          }
        ],
        "a": 0,
        "exp": {
          "en": "Logic: Each letter - 1 position. S-1=R, T-1=S, A-1=Z, B-1=A, L-1=K, E-1=D.",
          "hi": "तर्क: प्रत्येक अक्षर में -1 की कमी की गई है। S-1=R, T-1=S, A-1=Z, B-1=A, L-1=K, E-1=D → RSZAKD।"
        }
      },
      {
        "id": 3,
        "subject": "General Awareness",
        "q": {
          "en": "Which Article of the Indian Constitution provides for the appointment of the Finance Commission of India every 5 years?",
          "hi": "भारतीय संविधान का कौन सा अनुच्छेद प्रत्येक 5 वर्ष में भारत के वित्त आयोग के गठन का प्रावधान करता है?"
        },
        "o": [
          {
            "en": "Article 260",
            "hi": "अनुच्छेद 260"
          },
          {
            "en": "Article 280",
            "hi": "अनुच्छेद 280"
          },
          {
            "en": "Article 324",
            "hi": "अनुच्छेद 324"
          },
          {
            "en": "Article 356",
            "hi": "अनुच्छेद 356"
          }
        ],
        "a": 1,
        "exp": {
          "en": "Article 280 mandates that the President shall constitute a Finance Commission at the expiration of every fifth year.",
          "hi": "संविधान का अनुच्छेद 280 राष्ट्रपति द्वारा प्रत्येक 5 वर्ष की समाप्ति पर वित्त आयोग के गठन का प्रावधान करता है।"
        }
      },
      {
        "id": 4,
        "subject": "General Awareness",
        "q": {
          "en": "Mohiniyattam is a classical dance that originated and developed in which Indian state?",
          "hi": "मोहिनीअट्टम भारत का एक शास्त्रीय नृत्य रूप है, जिसकी उत्पत्ति और विकास किस राज्य में हुआ?"
        },
        "o": [
          {
            "en": "Tamil Nadu",
            "hi": "तमिलनाडु"
          },
          {
            "en": "Kerala",
            "hi": "केरल"
          },
          {
            "en": "Andhra Pradesh",
            "hi": "आंध्र प्रदेश"
          },
          {
            "en": "Karnataka",
            "hi": "कर्नाटक"
          }
        ],
        "a": 1,
        "exp": {
          "en": "Mohiniyattam originated in Kerala and is named after the celestial enchantress Mohini (avatar of Lord Vishnu).",
          "hi": "मोहिनीअट्टम की उत्पत्ति केरल में हुई थी। यह नाम भगवान विष्णु के मोहिनी अवतार पर आधारित है।"
        }
      },
      {
        "id": 5,
        "subject": "Quantitative Aptitude",
        "q": {
          "en": "A trader marks goods 30% above cost price and allows a 10% discount on marked price. Find net profit percentage.",
          "hi": "एक व्यापारी अपनी वस्तुओं पर क्रय मूल्य से 30% अधिक मूल्य अंकित करता है और 10% की छूट देता है। उसका शुद्ध लाभ प्रतिशत ज्ञात कीजिए।"
        },
        "o": [
          {
            "en": "15%",
            "hi": "15%"
          },
          {
            "en": "17%",
            "hi": "17%"
          },
          {
            "en": "18%",
            "hi": "18%"
          },
          {
            "en": "20%",
            "hi": "20%"
          }
        ],
        "a": 1,
        "exp": {
          "en": "CP = 100, MP = 130. Discount = 13. SP = 117. Net profit = 17%.",
          "hi": "माना CP = 100, तो MP = 130। छूट = 130 का 10% = 13। SP = 117। शुद्ध लाभ = 17%।"
        }
      },
      {
        "id": 6,
        "subject": "Quantitative Aptitude",
        "q": {
          "en": "If x + 1/x = 5, find the value of x³ + 1/x³.",
          "hi": "यदि x + 1/x = 5 है, तो x³ + 1/x³ का मान क्या होगा?"
        },
        "o": [
          {
            "en": "110",
            "hi": "110"
          },
          {
            "en": "115",
            "hi": "115"
          },
          {
            "en": "120",
            "hi": "120"
          },
          {
            "en": "125",
            "hi": "125"
          }
        ],
        "a": 0,
        "exp": {
          "en": "Formula: k³ - 3k = 5³ - 3(5) = 125 - 15 = 110.",
          "hi": "सूत्र: k³ - 3k = 125 - 15 = 110।"
        }
      },
      {
        "id": 7,
        "subject": "English Comprehension",
        "q": {
          "en": "Select the most appropriate SYNONYM of the given word:\n'BENEVOLENT'",
          "hi": "दिए गए शब्द का सर्वाधिक उपयुक्त पर्यायवाची (SYNONYM) चुनें:\n'BENEVOLENT'"
        },
        "o": [
          {
            "en": "Hostile",
            "hi": "शत्रुतापूर्ण"
          },
          {
            "en": "Generous",
            "hi": "उदार (दयालु)"
          },
          {
            "en": "Miserly",
            "hi": "कंजूस"
          },
          {
            "en": "Cruel",
            "hi": "निर्दयी"
          }
        ],
        "a": 1,
        "exp": {
          "en": "'Benevolent' means kindly and generous. Closest synonym is 'Generous'.",
          "hi": "'Benevolent' का अर्थ दयालु व परोपकारी होता है। इसका सही पर्यायवाची 'Generous' है।"
        }
      },
      {
        "id": 8,
        "subject": "English Comprehension",
        "q": {
          "en": "Identify the segment with grammatical error: 'Neither the teacher nor the students was present in the auditorium.'",
          "hi": "व्याकरण संबंधी त्रुटि वाले भाग को पहचानें: 'Neither the teacher nor the students was present in the auditorium.'"
        },
        "o": [
          {
            "en": "was present (Change to 'were present')",
            "hi": "was present (सही: 'were present')"
          },
          {
            "en": "Neither the teacher",
            "hi": "Neither the teacher"
          },
          {
            "en": "in the auditorium",
            "hi": "in the auditorium"
          },
          {
            "en": "No error",
            "hi": "कोई त्रुटि नहीं"
          }
        ],
        "a": 0,
        "exp": {
          "en": "With 'neither... nor', the verb agrees with the closer plural subject 'students', so 'were present' is correct.",
          "hi": "'Neither... nor' में क्रिया निकटतम कर्ता 'students' (बहुवचन) के अनुसार 'were present' होनी चाहिए।"
        }
      }
    ],
    "cgl_2020_master": [
      {
        "id": 1,
        "subject": "General Intelligence & Reasoning",
        "q": {
          "en": "Find the missing number in the series:\n13, 17, 26, 42, 67, ?",
          "hi": "श्रृंखला में लुप्त संख्या ज्ञात कीजिए:\n13, 17, 26, 42, 67, ?"
        },
        "o": [
          {
            "en": "98",
            "hi": "98"
          },
          {
            "en": "103",
            "hi": "103"
          },
          {
            "en": "105",
            "hi": "105"
          },
          {
            "en": "108",
            "hi": "108"
          }
        ],
        "a": 1,
        "exp": {
          "en": "Pattern: +2² (4), +3² (9), +4² (16), +5² (25), +6² (36). 67 + 36 = 103.",
          "hi": "पैटर्न: +4, +9, +16, +25, +36। 67 + 36 = 103।"
        }
      },
      {
        "id": 2,
        "subject": "General Intelligence & Reasoning",
        "q": {
          "en": "Pointing to a man, Rahul said, 'He is the son of the only daughter of my father.' How is the man related to Rahul?",
          "hi": "एक व्यक्ति की तस्वीर की ओर इशारा करते हुए राहुल ने कहा, 'वह मेरे पिता की एकमात्र पुत्री का पुत्र है।' वह व्यक्ति राहुल से कैसे संबंधित है?"
        },
        "o": [
          {
            "en": "Brother",
            "hi": "भाई"
          },
          {
            "en": "Nephew (भांजा)",
            "hi": "भांजा (Nephew)"
          },
          {
            "en": "Son",
            "hi": "पुत्र"
          },
          {
            "en": "Uncle",
            "hi": "मामा"
          }
        ],
        "a": 1,
        "exp": {
          "en": "Father's only daughter = Rahul's sister. Her son = Nephew.",
          "hi": "राहुल के पिता की एकमात्र पुत्री = राहुल की बहन। बहन का पुत्र = भांजा (Nephew)।"
        }
      },
      {
        "id": 3,
        "subject": "General Awareness",
        "q": {
          "en": "Under whose reign was the Fourth Buddhist Council held at Kundalvana in Kashmir?",
          "hi": "कश्मीर के कुंडलवन में चतुर्थ बौद्ध संगीति किसके शासनकाल में आयोजित की गई थी?"
        },
        "o": [
          {
            "en": "Ashoka",
            "hi": "अशोक"
          },
          {
            "en": "Kanishka",
            "hi": "कनिष्क"
          },
          {
            "en": "Kalashoka",
            "hi": "कालाशोक"
          },
          {
            "en": "Harshavardhana",
            "hi": "हर्षवर्धन"
          }
        ],
        "a": 1,
        "exp": {
          "en": "Held under Kushan ruler Kanishka (~72 AD) under Vasumitra's presidency.",
          "hi": "चतुर्थ बौद्ध संगीति कुषाण शासक कनिष्क के शासनकाल में वसुमित्र की अध्यक्षता में हुई थी।"
        }
      },
      {
        "id": 4,
        "subject": "General Awareness",
        "q": {
          "en": "Which layer of the atmosphere contains the ozone layer that protects Earth from harmful UV rays?",
          "hi": "वायुमंडल की किस परत में ओजोन परत पाई जाती है जो पराबैंगनी किरणों से रक्षा करती है?"
        },
        "o": [
          {
            "en": "Troposphere",
            "hi": "क्षोभमंडल"
          },
          {
            "en": "Stratosphere",
            "hi": "समताप मंडल"
          },
          {
            "en": "Mesosphere",
            "hi": "मध्यमंडल"
          },
          {
            "en": "Thermosphere",
            "hi": "आयनमंडल"
          }
        ],
        "a": 1,
        "exp": {
          "en": "The ozone layer is located in the Stratosphere between 15-35 km altitude.",
          "hi": "ओजोन परत समताप मंडल (Stratosphere) में 15 से 35 किमी की ऊंचाई पर स्थित है।"
        }
      },
      {
        "id": 5,
        "subject": "Quantitative Aptitude",
        "q": {
          "en": "A and B can do a work in 15 and 20 days. They worked together for 4 days. What fraction of work is left?",
          "hi": "A और B किसी काम को 15 और 20 दिन में कर सकते हैं। उन्होंने 4 दिन साथ काम किया। कितना काम शेष बचा है?"
        },
        "o": [
          {
            "en": "7 / 15",
            "hi": "7 / 15"
          },
          {
            "en": "8 / 15",
            "hi": "8 / 15"
          },
          {
            "en": "11 / 15",
            "hi": "11 / 15"
          },
          {
            "en": "2 / 5",
            "hi": "2 / 5"
          }
        ],
        "a": 1,
        "exp": {
          "en": "Total = 60 units. A=4, B=3. In 4 days = 28 units. Remaining = 32/60 = 8/15.",
          "hi": "कुल कार्य = 60 इकाई। 4 दिन में कार्य = 28 इकाई। शेष कार्य = 32/60 = 8/15।"
        }
      },
      {
        "id": 6,
        "subject": "Quantitative Aptitude",
        "q": {
          "en": "Find the compound interest on ₹10,000 for 2 years at 10% per annum, compounded annually.",
          "hi": "₹10,000 पर 10% वार्षिक दर से 2 वर्ष का चक्रवृद्धि ब्याज क्या होगा?"
        },
        "o": [
          {
            "en": "₹2,000",
            "hi": "₹2,000"
          },
          {
            "en": "₹2,100",
            "hi": "₹2,100"
          },
          {
            "en": "₹2,200",
            "hi": "₹2,200"
          },
          {
            "en": "₹2,250",
            "hi": "₹2,250"
          }
        ],
        "a": 1,
        "exp": {
          "en": "Net CI% for 2 yrs = 10 + 10 + 1 = 21%. CI = 10000 × 21% = ₹2,100.",
          "hi": "2 वर्ष का शुद्ध CI दर = 21%। चक्रवृद्धि ब्याज = 10000 × 21% = ₹2,100।"
        }
      },
      {
        "id": 7,
        "subject": "English Comprehension",
        "q": {
          "en": "Select the most appropriate ANTONYM of the given word:\n'METICULOUS'",
          "hi": "दिए गए शब्द का सर्वाधिक उपयुक्त विलोम शब्द (ANTONYM) चुनें:\n'METICULOUS'"
        },
        "o": [
          {
            "en": "Careless",
            "hi": "लापरवाह (Careless)"
          },
          {
            "en": "Precise",
            "hi": "सटीक"
          },
          {
            "en": "Scrupulous",
            "hi": "कर्तव्यनिष्ठ"
          },
          {
            "en": "Accurate",
            "hi": "शुद्ध"
          }
        ],
        "a": 0,
        "exp": {
          "en": "'Meticulous' means careful and detail-oriented. Antonym is 'Careless'.",
          "hi": "'Meticulous' का विलोम 'Careless' (लापरवाह) है।"
        }
      },
      {
        "id": 8,
        "subject": "English Comprehension",
        "q": {
          "en": "Select the meaning of the idiom: 'To burn the midnight oil'",
          "hi": "मुहावरे का सही अर्थ चुनें: 'To burn the midnight oil'"
        },
        "o": [
          {
            "en": "To waste fuel",
            "hi": "ईंधन बर्बाद करना"
          },
          {
            "en": "To work or study late into the night",
            "hi": "देर रात तक कठिन परिश्रम या पढ़ाई करना"
          },
          {
            "en": "To sleep late",
            "hi": "देर से सोना"
          },
          {
            "en": "To burn lamps",
            "hi": "दीपक जलाना"
          }
        ],
        "a": 1,
        "exp": {
          "en": "Means working or studying diligently late into the night.",
          "hi": "इसका अर्थ देर रात तक कठिन परिश्रम या पढ़ाई करना होता है।"
        }
      }
    ]
  }
};
