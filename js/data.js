// UdaanSetu Data Repository: Mock Tests, Questions & Step-by-Step Solutions
const APP_DATA = {
  exams: [
    {
      id: "jee_main_1",
      title: "JEE Main Mock 1",
      subtitle: "Physics, Chemistry and Maths",
      metaQuestions: "4 questions",
      metaDuration: "10 minutes",
      questionsCount: 4,
      durationMinutes: 10,
      totalMarks: 16,
      marking: { positive: 4, negative: 1 },
      category: "Engineering (JEE)"
    },
    {
      id: "neet_bio_quick",
      title: "NEET Biology Quick Test",
      subtitle: "Cell biology and genetics",
      metaQuestions: "4 questions",
      metaDuration: "8 minutes",
      questionsCount: 4,
      durationMinutes: 8,
      totalMarks: 16,
      marking: { positive: 4, negative: 1 },
      category: "Medical (NEET)"
    },
    {
      id: "ssc_ga_maths",
      title: "SSC General Awareness and Maths",
      subtitle: "Reasoning, GK and arithmetic",
      metaQuestions: "4 questions",
      metaDuration: "8 minutes",
      questionsCount: 4,
      durationMinutes: 8,
      totalMarks: 8,
      marking: { positive: 2, negative: 0.5 },
      category: "Staff Selection Commission"
    },
    {
      id: "quant_set_1",
      title: "Quantitative Aptitude – Set 1",
      subtitle: "Percentage, speed, profit and loss, ratio, average, interest",
      metaQuestions: "100 questions",
      metaDuration: "60 minutes",
      questionsCount: 6,
      displayCount: "100",
      durationMinutes: 60,
      totalMarks: 200,
      marking: { positive: 2, negative: 0.5 },
      category: "Aptitude Drill"
    },
    {
      id: "quant_set_2",
      title: "Quantitative Aptitude – Set 2",
      subtitle: "Time and work, HCF and LCM, algebra, mensuration, ages",
      metaQuestions: "100 questions",
      metaDuration: "60 minutes",
      questionsCount: 6,
      displayCount: "100",
      durationMinutes: 60,
      totalMarks: 200,
      marking: { positive: 2, negative: 0.5 },
      category: "Aptitude Drill"
    },
    {
      id: "quant_set_3",
      title: "Quantitative Aptitude – Set 3",
      subtitle: "Discount, series sums, equations and mixed arithmetic",
      metaQuestions: "100 questions",
      metaDuration: "60 minutes",
      questionsCount: 6,
      displayCount: "100",
      durationMinutes: 60,
      totalMarks: 200,
      marking: { positive: 2, negative: 0.5 },
      category: "Aptitude Drill"
    }
  ],

  // Questions Database
  questions: {
    // 1. JEE Main Mock 1 (4 questions · 10 minutes)
    jee_main_1: [
      {
        id: 1,
        subject: "Physics",
        q: {
          en: "A projectile is thrown with an initial velocity v at an angle θ with the horizontal. What is the ratio of maximum height reached (H) to horizontal range (R) when θ = 45°?",
          hi: "एक प्रक्षेप्य को क्षैतिज से θ कोण पर प्रारंभिक वेग v से प्रक्षेपित किया जाता है। जब θ = 45° हो, तो अधिकतम ऊंचाई (H) और क्षैतिज परास (R) का अनुपात क्या होगा?"
        },
        o: [
          { en: "1 : 4", hi: "1 : 4" },
          { en: "1 : 2", hi: "1 : 2" },
          { en: "1 : 1", hi: "1 : 1" },
          { en: "1 : 8", hi: "1 : 8" }
        ],
        a: 0,
        exp: {
          en: "Formula: H = (v² sin²θ)/(2g) and R = (v² sin 2θ)/g. Therefore, H/R = (sin²θ) / (2 sin 2θ) = tan θ / 4. For θ = 45°, tan 45° = 1. Hence, H/R = 1/4 (1 : 4).",
          hi: "सूत्र: H = (v² sin²θ)/(2g) और R = (v² sin 2θ)/g। अतः H/R = tan θ / 4। चूंकि θ = 45° है, tan 45° = 1, इसलिए अनुपात 1 : 4 होगा।"
        }
      },
      {
        id: 2,
        subject: "Physics",
        q: {
          en: "A hollow spherical conductor of radius R carries a charge Q. What is the electric potential at a point located at distance r (where r < R) from the center?",
          hi: "त्रिज्या R के एक खोखले गोलाकार चालक पर Q आवेश है। केंद्र से r दूरी (जहाँ r < R) पर स्थित किसी बिंदु पर विद्युत विभव क्या होगा?"
        },
        o: [
          { en: "Zero", hi: "शून्य" },
          { en: "Q / (4πε₀ R)", hi: "Q / (4πε₀ R)" },
          { en: "Q / (4πε₀ r)", hi: "Q / (4πε₀ r)" },
          { en: "Q / (4πε₀ R²)", hi: "Q / (4πε₀ R²)" }
        ],
        a: 1,
        exp: {
          en: "Inside a conducting hollow sphere, the electric field is zero (E = 0). Since E = -dV/dr = 0, the electric potential remains constant throughout the interior and is equal to the potential at the surface: V = Q / (4πε₀ R).",
          hi: "चालक खोखले गोले के अंदर विद्युत क्षेत्र शून्य होता है (E = 0)। चूंकि E = -dV/dr = 0, अतः अंदर सभी बिंदुओं पर विभव स्थिर रहता है और सतह के विभव Q / (4πε₀ R) के बराबर होता है।"
        }
      },
      {
        id: 3,
        subject: "Chemistry",
        q: {
          en: "What is the hybridization and molecular geometry of Sulfur tetrafluoride (SF₄)?",
          hi: "सल्फर टेट्राफ्लोराइड (SF₄) का संकरण (hybridization) और आणविक ज्यामिति क्या है?"
        },
        o: [
          { en: "sp³d, See-saw", hi: "sp³d, सी-सॉ (See-saw)" },
          { en: "sp³d², Square planar", hi: "sp³d², वर्ग समतलीय (Square planar)" },
          { en: "sp³, Tetrahedral", hi: "sp³, चतुष्फलकीय (Tetrahedral)" },
          { en: "sp³d, Trigonal bipyramidal", hi: "sp³d, त्रिकोणीय द्विपिरामिडी" }
        ],
        a: 0,
        exp: {
          en: "Sulfur has 6 valence electrons. In SF₄, it forms 4 bonding pairs with fluorine and possesses 1 lone pair. Total steric number = 4 + 1 = 5 (sp³d hybridization). According to VSEPR theory, 4 bond pairs + 1 lone pair yields a See-saw molecular geometry.",
          hi: "सल्फर के संयोजी कोश में 6 इलेक्ट्रॉन होते हैं। SF₄ में 4 आबंधी युग्म (bond pairs) और 1 एकाकी युग्म (lone pair) होते हैं। कुल स्टेरिक संख्या = 5 (sp³d संकरण)। VSEPR सिद्धांत के अनुसार इसकी ज्यामिति सी-सॉ (See-saw) होती है।"
        }
      },
      {
        id: 4,
        subject: "Mathematics",
        q: {
          en: "Evaluate the definite integral: I = ∫₀^(π/2) (sin x) / (sin x + cos x) dx.",
          hi: "निश्चित समाकल का मान ज्ञात कीजिए: I = ∫₀^(π/2) (sin x) / (sin x + cos x) dx."
        },
        o: [
          { en: "π / 2", hi: "π / 2" },
          { en: "π / 4", hi: "π / 4" },
          { en: "π", hi: "π" },
          { en: "1", hi: "1" }
        ],
        a: 1,
        exp: {
          en: "Using the property ∫₀^a f(x) dx = ∫₀^a f(a - x) dx:\nI = ∫₀^(π/2) cos x / (cos x + sin x) dx.\nAdding both equations: 2I = ∫₀^(π/2) (sin x + cos x)/(sin x + cos x) dx = ∫₀^(π/2) 1 dx = π/2.\nTherefore, I = π / 4.",
          hi: "निश्चित समाकल के गुणधर्म ∫₀^a f(x) dx = ∫₀^a f(a - x) dx का उपयोग करने पर:\nI = ∫₀^(π/2) cos x / (cos x + sin x) dx.\nदोनों समीकरणों को जोड़ने पर: 2I = ∫₀^(π/2) 1 dx = [x]₀^(π/2) = π/2.\nअतः I = π/4."
        }
      }
    ],

    // 2. NEET Biology Quick Test (4 questions · 8 minutes)
    neet_bio_quick: [
      {
        id: 1,
        subject: "Cell Biology",
        q: {
          en: "During which phase of the eukaryotic cell cycle does actual DNA replication and duplication of centrioles occur?",
          hi: "यूकेरियोटिक कोशिका चक्र के किस चरण के दौरान डीएनए की वास्तविक प्रतिकृति और तारककेंद्र (सेंट्रिओल) का द्विगुणन होता है?"
        },
        o: [
          { en: "G₁ phase", hi: "G₁ अवस्था" },
          { en: "S phase", hi: "S अवस्था (संश्लेषण चरण)" },
          { en: "G₂ phase", hi: "G₂ अवस्था" },
          { en: "Metaphase", hi: "मध्यावस्था (Metaphase)" }
        ],
        a: 1,
        exp: {
          en: "During S (Synthesis) phase, the amount of DNA per cell doubles from 2C to 4C while the chromosome number remains 2n. In animal cells, centriole duplication also takes place in the cytoplasm during this phase.",
          hi: "S (सिंथेसिस) अवस्था में प्रति कोशिका DNA की मात्रा दोगुनी हो जाती है (2C से 4C), यद्यपि गुणसूत्रों की संख्या अपरिवर्तित रहती है। इसी चरण में जंतु कोशिका में सेंट्रिओल का द्विगुणन भी होता है।"
        }
      },
      {
        id: 2,
        subject: "Genetics",
        q: {
          en: "What is the expected phenotypic ratio in the F₂ generation of a Mendelian dihybrid cross involving two independently assorting unlinked genes?",
          hi: "दो स्वतंत्र अपव्यूहन करने वाले जीनों के मेंडेलियन द्विसंकर क्रॉस (dihybrid cross) की F₂ पीढ़ी में क्या लक्षणप्ररूपी (phenotypic) अनुपात प्राप्त होता है?"
        },
        o: [
          { en: "3 : 1", hi: "3 : 1" },
          { en: "9 : 3 : 3 : 1", hi: "9 : 3 : 3 : 1" },
          { en: "1 : 2 : 1", hi: "1 : 2 : 1" },
          { en: "9 : 7", hi: "9 : 7" }
        ],
        a: 1,
        exp: {
          en: "According to Mendel's Law of Independent Assortment, the dihybrid F₂ phenotypic ratio is 9 (Round Yellow) : 3 (Round Green) : 3 (Wrinkled Yellow) : 1 (Wrinkled Green).",
          hi: "मेंडल के स्वतंत्र अपव्यूहन के नियमानुसार, द्विसंकर संकरण की F₂ पीढ़ी का लक्षणप्ररूपी अनुपात 9:3:3:1 (गोल पीला : गोल हरा : झुर्रीदार पीला : झुर्रीदार हरा) होता है।"
        }
      },
      {
        id: 3,
        subject: "Molecular Biology",
        q: {
          en: "Which codon functions universally as the initiation (start) codon in protein translation and simultaneously codes for Methionine?",
          hi: "प्रोटीन संश्लेषण (अनुवादन) में कौन सा कोडॉन सार्वभौमिक रूप से प्रारंभिक (start) कोडॉन के रूप में कार्य करता है और साथ ही मिथियोनीन को कोड करता है?"
        },
        o: [
          { en: "UAA", hi: "UAA" },
          { en: "AUG", hi: "AUG" },
          { en: "UAG", hi: "UAG" },
          { en: "UGA", hi: "UGA" }
        ],
        a: 1,
        exp: {
          en: "AUG is the universal initiator codon that binds the initiator tRNA carrying Methionine. UAA, UAG, and UGA are stop (nonsense/termination) codons.",
          hi: "AUG प्रारंभिक कोडॉन है जो मिथियोनीन को कोड करता है। UAA, UAG और UGA समापन (stop) कोडॉन हैं।"
        }
      },
      {
        id: 4,
        subject: "Cell Biology",
        q: {
          en: "Which of the following organelles are semi-autonomous, possess their own circular double-stranded DNA, and contain 70S ribosomes?",
          hi: "निम्नलिखित में से कौन से कोशिकांग अर्ध-स्वायत्त हैं, जिनका अपना वृत्ताकार द्विरज्जुक डीएनए और 70S राइबोसोम होता है?"
        },
        o: [
          { en: "Mitochondria and Chloroplasts", hi: "माइटोकॉन्ड्रिया और हरितलवक (क्लोरोप्लास्ट)" },
          { en: "Golgi apparatus and Lysosomes", hi: "गॉल्जी काय और लयनकाय (लाइसोसोम)" },
          { en: "Endoplasmic reticulum and Vacuoles", hi: "अंतर्द्रव्यी जालिका और रसधानियाँ" },
          { en: "Peroxisomes and Ribosomes", hi: "परऑक्सीसोम और राइबोसोम" }
        ],
        a: 0,
        exp: {
          en: "Both Mitochondria and Chloroplasts are endosymbiotic semi-autonomous organelles possessing their own circular double-stranded DNA, RNA, enzymes, and prokaryotic-like 70S ribosomes.",
          hi: "माइटोकॉन्ड्रिया और क्लोरोप्लास्ट दोनों अर्ध-स्वायत्त कोशिकांग हैं। इनके पास अपना वृत्ताकार DNA और 70S राइबोसोम होता है जिससे ये अपने कुछ प्रोटीन स्वयं बना सकते हैं।"
        }
      }
    ],

    // 3. SSC General Awareness and Maths (4 questions · 8 minutes)
    ssc_ga_maths: [
      {
        id: 1,
        subject: "Reasoning",
        q: {
          en: "Find the missing term in the given number series:\n7, 11, 19, 31, ?, 67",
          hi: "दी गई संख्या श्रृंखला में लुप्त पद ज्ञात कीजिए:\n7, 11, 19, 31, ?, 67"
        },
        o: [
          { en: "43", hi: "43" },
          { en: "47", hi: "47" },
          { en: "49", hi: "49" },
          { en: "51", hi: "51" }
        ],
        a: 1,
        exp: {
          en: "The pattern of differences between successive terms is:\n11 - 7 = 4\n19 - 11 = 8\n31 - 19 = 12\nNext difference = 16 → 31 + 16 = 47\nVerification: 67 - 47 = 20 (Multiples of 4: +4, +8, +12, +16, +20).",
          hi: "पदों के बीच अंतर 4 के गुणज में बढ़ रहा है:\n11 - 7 = 4\n19 - 11 = 8\n31 - 19 = 12\nअगला अंतर = 16 → 31 + 16 = 47\nजाँच: 67 - 47 = 20।"
        }
      },
      {
        id: 2,
        subject: "General Awareness (Polity)",
        q: {
          en: "Which Article of the Indian Constitution provides for 'Equality before law and equal protection of the laws' for all persons within the territory of India?",
          hi: "भारतीय संविधान का कौन सा अनुच्छेद भारत के राज्यक्षेत्र में सभी व्यक्तियों के लिए 'विधि के समक्ष समता और विधियों के समान संरक्षण' का प्रावधान करता है?"
        },
        o: [
          { en: "Article 12", hi: "अनुच्छेद 12" },
          { en: "Article 14", hi: "अनुच्छेद 14" },
          { en: "Article 19", hi: "अनुच्छेद 19" },
          { en: "Article 21", hi: "अनुच्छेद 21" }
        ],
        a: 1,
        exp: {
          en: "Article 14 guarantees equality before the law and equal protection of laws to both citizens and non-citizens within the territory of India.",
          hi: "अनुच्छेद 14 भारत के राज्यक्षेत्र में नागरिकों व विदेशियों दोनों को विधि के समक्ष समता और विधियों के समान संरक्षण का मौलिक अधिकार प्रदान करता है।"
        }
      },
      {
        id: 3,
        subject: "Arithmetic",
        q: {
          en: "A shopkeeper bought an article for ₹500 and sold it at a profit of 20%. What was the selling price of the article?",
          hi: "एक दुकानदार ने एक वस्तु ₹500 में खरीदी और उसे 20% लाभ पर बेच दिया। वस्तु का विक्रय मूल्य क्या था?"
        },
        o: [
          { en: "₹580", hi: "₹580" },
          { en: "₹600", hi: "₹600" },
          { en: "₹620", hi: "₹620" },
          { en: "₹650", hi: "₹650" }
        ],
        a: 1,
        exp: {
          en: "Cost Price (CP) = ₹500. Profit = 20% of 500 = ₹100. Selling Price (SP) = CP + Profit = 500 + 100 = ₹600.",
          hi: "क्रय मूल्य (CP) = ₹500। 20% लाभ = (20/100) × 500 = ₹100। अतः विक्रय मूल्य (SP) = 500 + 100 = ₹600।"
        }
      },
      {
        id: 4,
        subject: "General Awareness (History)",
        q: {
          en: "In which year was the historic Battle of Plassey fought between the British East India Company under Robert Clive and Siraj-ud-Daulah (Nawab of Bengal)?",
          hi: "रॉबर्ट क्लाइव के नेतृत्व में ब्रिटिश ईस्ट इंडिया कंपनी और बंगाल के नवाब सिराजुद्दौला के बीच ऐतिहासिक प्लासी का युद्ध किस वर्ष लड़ा गया था?"
        },
        o: [
          { en: "1757", hi: "1757" },
          { en: "1764", hi: "1764" },
          { en: "1857", hi: "1857" },
          { en: "1761", hi: "1761" }
        ],
        a: 0,
        exp: {
          en: "The Battle of Plassey took place on 23 June 1757 at Palashi on the banks of the Bhagirathi River. The British victory marked the beginning of British rule in India.",
          hi: "प्लासी का युद्ध 23 जून 1757 को भागीरथी नदी के तट पर प्लासी नामक स्थान पर हुआ था। इस युद्ध में अंग्रेजों की विजय ने भारत में ब्रिटिश सत्ता की नींव रखी।"
        }
      }
    ],

    // 4. Quantitative Aptitude – Set 1 (Percentage, speed, profit and loss, ratio, average, interest)
    quant_set_1: [
      {
        id: 1,
        subject: "Percentage",
        q: {
          en: "If the price of sugar increases by 25%, by what percentage must a household reduce its consumption so that total expenditure remains unchanged?",
          hi: "यदि चीनी की कीमत में 25% की वृद्धि हो जाती है, तो किसी परिवार को अपनी खपत में कितने प्रतिशत की कमी करनी होगी ताकि कुल खर्च अपरिवर्तित रहे?"
        },
        o: [
          { en: "15%", hi: "15%" },
          { en: "20%", hi: "20%" },
          { en: "25%", hi: "25%" },
          { en: "16.67%", hi: "16.67%" }
        ],
        a: 1,
        exp: {
          en: "Reduction in consumption = [r / (100 + r)] × 100% = [25 / 125] × 100% = (1/5) × 100% = 20%.",
          hi: "खपत में प्रतिशत कमी = [r / (100 + r)] × 100% = [25 / (100 + 25)] × 100% = (25/125) × 100 = 20%."
        }
      },
      {
        id: 2,
        subject: "Speed, Time & Distance",
        q: {
          en: "A train traveling at a constant speed of 72 km/h crosses a telegraph post in 15 seconds. Find the length of the train.",
          hi: "72 किमी/घंटा की स्थिर गति से यात्रा करने वाली एक ट्रेन एक टेलीग्राफ खंभे को 15 सेकंड में पार करती है। ट्रेन की लंबाई ज्ञात कीजिए।"
        },
        o: [
          { en: "250 meters", hi: "250 मीटर" },
          { en: "300 meters", hi: "300 मीटर" },
          { en: "360 meters", hi: "360 मीटर" },
          { en: "400 meters", hi: "400 मीटर" }
        ],
        a: 1,
        exp: {
          en: "Speed in m/s = 72 × (5/18) = 20 m/s. Length of train = Speed × Time = 20 m/s × 15 s = 300 meters.",
          hi: "चाल मीटर/सेकंड में = 72 × (5/18) = 20 मी/से। ट्रेन की लंबाई = चाल × समय = 20 × 15 = 300 मीटर।"
        }
      },
      {
        id: 3,
        subject: "Profit and Loss",
        q: {
          en: "By selling an article for ₹840, a trader gains 20%. At what price should he sell it to gain 30%?",
          hi: "किसी वस्तु को ₹840 में बेचने पर एक व्यापारी को 20% का लाभ होता है। 30% लाभ कमाने के लिए उसे इसे किस मूल्य पर बेचना चाहिए?"
        },
        o: [
          { en: "₹880", hi: "₹880" },
          { en: "₹910", hi: "₹910" },
          { en: "₹920", hi: "₹920" },
          { en: "₹950", hi: "₹950" }
        ],
        a: 1,
        exp: {
          en: "CP = (SP / 120) × 100 = (840 / 120) × 100 = ₹700. For 30% profit, new SP = 700 × 1.30 = ₹910.",
          hi: "क्रय मूल्य = (840 / 120) × 100 = ₹700। 30% लाभ के लिए नया विक्रय मूल्य = 700 × 1.30 = ₹910।"
        }
      },
      {
        id: 4,
        subject: "Ratio and Proportion",
        q: {
          en: "Two numbers are in the ratio 4 : 5. If 6 is added to each number, the ratio becomes 5 : 6. What is the sum of the original numbers?",
          hi: "दो संख्याएँ 4 : 5 के अनुपात में हैं। यदि प्रत्येक संख्या में 6 जोड़ दिया जाए, तो अनुपात 5 : 6 हो जाता है। मूल संख्याओं का योग क्या है?"
        },
        o: [
          { en: "45", hi: "45" },
          { en: "54", hi: "54" },
          { en: "63", hi: "63" },
          { en: "72", hi: "72" }
        ],
        a: 1,
        exp: {
          en: "Let numbers be 4x and 5x. (4x + 6) / (5x + 6) = 5/6 ⇒ 24x + 36 = 25x + 30 ⇒ x = 6. Numbers are 24 and 30. Sum = 24 + 30 = 54.",
          hi: "माना संख्याएँ 4x और 5x हैं। (4x + 6)/(5x + 6) = 5/6 ⇒ 24x + 36 = 25x + 30 ⇒ x = 6। संख्याएँ = 24 और 30। योग = 24 + 30 = 54।"
        }
      },
      {
        id: 5,
        subject: "Average",
        q: {
          en: "The average weight of 8 students increases by 1.5 kg when a student weighing 65 kg replaces one of the students. What is the weight of the replaced student?",
          hi: "8 छात्रों का औसत वजन 1.5 किग्रा बढ़ जाता है जब 65 किग्रा वजन वाला एक छात्र उनमें से एक छात्र की जगह लेता है। हटाए गए छात्र का वजन कितना है?"
        },
        o: [
          { en: "50 kg", hi: "50 किग्रा" },
          { en: "53 kg", hi: "53 किग्रा" },
          { en: "55 kg", hi: "55 किग्रा" },
          { en: "57 kg", hi: "57 किग्रा" }
        ],
        a: 1,
        exp: {
          en: "Total increase in weight = 8 × 1.5 kg = 12 kg. Weight of replaced student = New weight - Total increase = 65 - 12 = 53 kg.",
          hi: "कुल वजन में वृद्धि = 8 × 1.5 = 12 किग्रा। प्रतिस्थापित छात्र का वजन = 65 - 12 = 53 किग्रा।"
        }
      },
      {
        id: 6,
        subject: "Simple and Compound Interest",
        q: {
          en: "The simple interest on a sum of money for 3 years at 8% per annum is ₹1,200. What would be the compound interest on the same sum at the same rate for 2 years (compounded annually)?",
          hi: "किसी राशि पर 3 वर्षों के लिए 8% वार्षिक दर से साधारण ब्याज ₹1,200 है। उसी राशि पर समान दर से 2 वर्ष का चक्रवृद्धि ब्याज कितना होगा?"
        },
        o: [
          { en: "₹825.60", hi: "₹825.60" },
          { en: "₹832.00", hi: "₹832.00" },
          { en: "₹840.00", hi: "₹840.00" },
          { en: "₹850.50", hi: "₹850.50" }
        ],
        a: 1,
        exp: {
          en: "SI = (P × R × T)/100 ⇒ 1200 = (P × 8 × 3)/100 ⇒ P = (1200 × 100)/24 = ₹5,000. CI for 2 yrs: Net rate = 8 + 8 + (8×8)/100 = 16.64%. CI = 5000 × 0.1664 = ₹832.",
          hi: "मूलधन P = (1200 × 100) / (8 × 3) = ₹5,000। 2 वर्ष का प्रभावी CI दर = 8 + 8 + (8×8)/100 = 16.64%। CI = 5000 × 16.64% = ₹832।"
        }
      }
    ],

    // 5. Quantitative Aptitude – Set 2 (Time and work, HCF and LCM, algebra, mensuration, ages)
    quant_set_2: [
      {
        id: 1,
        subject: "Time and Work",
        q: {
          en: "A can complete a piece of work alone in 12 days, and B can complete the same work in 18 days. If they work together, in how many days will the work be completed?",
          hi: "A अकेले किसी काम को 12 दिनों में पूरा कर सकता है और B उसी काम को 18 दिनों में पूरा कर सकता है। यदि वे एक साथ काम करते हैं, तो काम कितने दिनों में पूरा होगा?"
        },
        o: [
          { en: "6.5 days", hi: "6.5 दिन" },
          { en: "7.2 days", hi: "7.2 दिन" },
          { en: "8 days", hi: "8 दिन" },
          { en: "7.5 days", hi: "7.5 दिन" }
        ],
        a: 1,
        exp: {
          en: "Total work = LCM(12, 18) = 36 units. Efficiency of A = 36/12 = 3 units/day. Efficiency of B = 36/18 = 2 units/day. Combined efficiency = 3 + 2 = 5 units/day. Days required = 36 / 5 = 7.2 days.",
          hi: "कुल कार्य = LCM(12, 18) = 36 इकाई। A की कार्यक्षमता = 3 इकाई/दिन, B की कार्यक्षमता = 2 इकाई/दिन। दोनों की संयुक्त क्षमता = 5 इकाई/दिन। समय = 36/5 = 7.2 दिन।"
        }
      },
      {
        id: 2,
        subject: "HCF and LCM",
        q: {
          en: "The HCF and LCM of two numbers are 12 and 240 respectively. If one of the numbers is 48, find the other number.",
          hi: "दो संख्याओं का म.स.प. (HCF) और ल.स.प. (LCM) क्रमशः 12 और 240 हैं। यदि उनमें से एक संख्या 48 है, तो दूसरी संख्या ज्ञात कीजिए।"
        },
        o: [
          { en: "50", hi: "50" },
          { en: "60", hi: "60" },
          { en: "72", hi: "72" },
          { en: "80", hi: "80" }
        ],
        a: 1,
        exp: {
          en: "Formula: Product of two numbers = HCF × LCM. 48 × N = 12 × 240 ⇒ N = (12 × 240) / 48 = 240 / 4 = 60.",
          hi: "सूत्र: दो संख्याओं का गुणनफल = HCF × LCM। 48 × N = 12 × 240 ⇒ N = (12 × 240) / 48 = 60।"
        }
      },
      {
        id: 3,
        subject: "Algebra",
        q: {
          en: "If x + 1/x = 4, find the value of x³ + 1/x³.",
          hi: "यदि x + 1/x = 4 है, तो x³ + 1/x³ का मान ज्ञात कीजिए।"
        },
        o: [
          { en: "52", hi: "52" },
          { en: "64", hi: "64" },
          { en: "76", hi: "76" },
          { en: "48", hi: "48" }
        ],
        a: 0,
        exp: {
          en: "Formula: x³ + 1/x³ = (x + 1/x)³ - 3(x + 1/x) = 4³ - 3(4) = 64 - 12 = 52.",
          hi: "सूत्र: x³ + 1/x³ = k³ - 3k = 4³ - 3(4) = 64 - 12 = 52।"
        }
      },
      {
        id: 4,
        subject: "Mensuration",
        q: {
          en: "The radius of a solid cylinder is 7 cm and its height is 10 cm. Find its total surface area (Take π = 22/7).",
          hi: "एक ठोस बेलन की त्रिज्या 7 सेमी और ऊंचाई 10 सेमी है। इसका कुल पृष्ठीय क्षेत्रफल ज्ञात कीजिए (π = 22/7 लें)।"
        },
        o: [
          { en: "680 cm²", hi: "680 सेमी²" },
          { en: "748 cm²", hi: "748 सेमी²" },
          { en: "780 cm²", hi: "780 सेमी²" },
          { en: "812 cm²", hi: "812 सेमी²" }
        ],
        a: 1,
        exp: {
          en: "TSA of cylinder = 2πr(h + r) = 2 × (22/7) × 7 × (10 + 7) = 44 × 17 = 748 cm².",
          hi: "बेलन का कुल पृष्ठीय क्षेत्रफल = 2πr(h + r) = 2 × (22/7) × 7 × (10 + 7) = 44 × 17 = 748 सेमी²।"
        }
      },
      {
        id: 5,
        subject: "Problems on Ages",
        q: {
          en: "The present ages of a father and son are in the ratio 7 : 2. After 10 years, the ratio becomes 9 : 4. What is the father's current age?",
          hi: "एक पिता और पुत्र की वर्तमान आयु का अनुपात 7 : 2 है। 10 वर्ष बाद यह अनुपात 9 : 4 हो जाता है। पिता की वर्तमान आयु क्या है?"
        },
        o: [
          { en: "35 years", hi: "35 वर्ष" },
          { en: "42 years", hi: "42 वर्ष" },
          { en: "49 years", hi: "49 वर्ष" },
          { en: "56 years", hi: "56 वर्ष" }
        ],
        a: 0,
        exp: {
          en: "Let present ages be 7x and 2x. (7x + 10) / (2x + 10) = 9/4 ⇒ 28x + 40 = 18x + 90 ⇒ 10x = 50 ⇒ x = 5. Father's age = 7 × 5 = 35 years.",
          hi: "माना वर्तमान आयु 7x व 2x है। (7x + 10)/(2x + 10) = 9/4 ⇒ 28x + 40 = 18x + 90 ⇒ 10x = 50 ⇒ x = 5। पिता की आयु = 7 × 5 = 35 वर्ष।"
        }
      },
      {
        id: 6,
        subject: "Time and Work (Pipes & Cisterns)",
        q: {
          en: "Pipe A can fill a tank in 6 hours and Pipe B can empty it in 8 hours. If both pipes are opened simultaneously, in how many hours will the tank be completely filled?",
          hi: "नल A एक टंकी को 6 घंटे में भर सकता है और नल B इसे 8 घंटे में खाली कर सकता है। यदि दोनों नलों को एक साथ खोल दिया जाए, तो टंकी कितने घंटों में पूरी भर जाएगी?"
        },
        o: [
          { en: "18 hours", hi: "18 घंटे" },
          { en: "20 hours", hi: "20 घंटे" },
          { en: "24 hours", hi: "24 घंटे" },
          { en: "28 hours", hi: "28 घंटे" }
        ],
        a: 2,
        exp: {
          en: "Net filling rate per hour = 1/6 - 1/8 = (4 - 3)/24 = 1/24. Thus, it will take 24 hours to fill the tank.",
          hi: "प्रति घंटा शुद्ध भराई = 1/6 - 1/8 = (4 - 3)/24 = 1/24। अतः पूरी टंकी भरने में 24 घंटे लगेंगे।"
        }
      }
    ],

    // 6. Quantitative Aptitude – Set 3 (Discount, series sums, equations and mixed arithmetic)
    quant_set_3: [
      {
        id: 1,
        subject: "Discount",
        q: {
          en: "What is the single equivalent discount for two successive discounts of 20% and 10%?",
          hi: "20% और 10% की दो क्रमिक छूटों के समतुल्य एकल छूट क्या है?"
        },
        o: [
          { en: "26%", hi: "26%" },
          { en: "28%", hi: "28%" },
          { en: "30%", hi: "30%" },
          { en: "32%", hi: "32%" }
        ],
        a: 1,
        exp: {
          en: "Equivalent Discount = [d₁ + d₂ - (d₁ × d₂)/100]% = 20 + 10 - (20 × 10)/100 = 30 - 2 = 28%.",
          hi: "समतुल्य छूट = [d₁ + d₂ - (d₁ × d₂)/100]% = 20 + 10 - 200/100 = 30 - 2 = 28%।"
        }
      },
      {
        id: 2,
        subject: "Series Sums",
        q: {
          en: "Find the sum of the first 25 odd natural numbers (1 + 3 + 5 + ... + 49).",
          hi: "प्रथम 25 विषम प्राकृतिक संख्याओं का योग ज्ञात कीजिए (1 + 3 + 5 + ... + 49)।"
        },
        o: [
          { en: "575", hi: "575" },
          { en: "625", hi: "625" },
          { en: "650", hi: "650" },
          { en: "675", hi: "675" }
        ],
        a: 1,
        exp: {
          en: "The sum of first n odd natural numbers is n². For n = 25: Sum = 25² = 625.",
          hi: "प्रथम n विषम प्राकृतिक संख्याओं का योग = n² होता है। n = 25 के लिए: योग = 25² = 625।"
        }
      },
      {
        id: 3,
        subject: "Equations",
        q: {
          en: "If the roots of the quadratic equation 2x² - 8x + k = 0 are real and equal, find the value of k.",
          hi: "यदि द्विघात समीकरण 2x² - 8x + k = 0 के मूल वास्तविक और समान हैं, तो k का मान ज्ञात कीजिए।"
        },
        o: [
          { en: "4", hi: "4" },
          { en: "6", hi: "6" },
          { en: "8", hi: "8" },
          { en: "10", hi: "10" }
        ],
        a: 2,
        exp: {
          en: "For real and equal roots, discriminant D = b² - 4ac = 0. (-8)² - 4(2)(k) = 0 ⇒ 64 - 8k = 0 ⇒ 8k = 64 ⇒ k = 8.",
          hi: "समान और वास्तविक मूलों के लिए विविक्तकर (Discriminant) D = b² - 4ac = 0। (-8)² - 4(2)(k) = 0 ⇒ 64 - 8k = 0 ⇒ k = 8।"
        }
      },
      {
        id: 4,
        subject: "Mixed Arithmetic",
        q: {
          en: "In an examination, 65% students passed in English, 60% passed in Mathematics, and 40% passed in both. What percentage of students failed in both subjects?",
          hi: "एक परीक्षा में 65% छात्र अंग्रेजी में, 60% गणित में और 40% दोनों में उत्तीर्ण हुए। दोनों विषयों में कितने प्रतिशत छात्र अनुत्तीर्ण रहे?"
        },
        o: [
          { en: "15%", hi: "15%" },
          { en: "18%", hi: "18%" },
          { en: "20%", hi: "20%" },
          { en: "25%", hi: "25%" }
        ],
        a: 0,
        exp: {
          en: "Percentage of students passed in at least one subject = P(E ∪ M) = P(E) + P(M) - P(E ∩ M) = 65% + 60% - 40% = 85%. Percentage failed in both = 100% - 85% = 15%.",
          hi: "कम से कम एक विषय में उत्तीर्ण = 65 + 60 - 40 = 85%। दोनों में अनुत्तीर्ण = 100 - 85 = 15%।"
        }
      },
      {
        id: 5,
        subject: "Mixtures and Alligation",
        q: {
          en: "In what ratio must water be mixed with milk costing ₹40 per liter to obtain a mixture worth ₹30 per liter? (Water is assumed to be free of cost).",
          hi: "पानी को ₹40 प्रति लीटर वाले दूध के साथ किस अनुपात में मिलाया जाए ताकि ₹30 प्रति लीटर का मिश्रण प्राप्त हो सके? (पानी का मूल्य शून्य माना गया है)।"
        },
        o: [
          { en: "1 : 3", hi: "1 : 3" },
          { en: "1 : 4", hi: "1 : 4" },
          { en: "2 : 3", hi: "2 : 3" },
          { en: "3 : 4", hi: "3 : 4" }
        ],
        a: 0,
        exp: {
          en: "By Alligation: Price of Water = 0, Price of Milk = 40, Mean Price = 30. Ratio of Water : Milk = (40 - 30) : (30 - 0) = 10 : 30 = 1 : 3.",
          hi: "मिश्रण नियम द्वारा: पानी का मूल्य = 0, दूध = 40, औसत = 30। पानी और दूध का अनुपात = (40 - 30) : (30 - 0) = 10 : 30 = 1 : 3।"
        }
      },
      {
        id: 6,
        subject: "Discount & Profit",
        q: {
          en: "A trader marks his goods 40% above cost price and allows a discount of 15% on the marked price. What is his net profit percentage?",
          hi: "एक व्यापारी अपनी वस्तुओं पर क्रय मूल्य से 40% अधिक मूल्य अंकित करता है और अंकित मूल्य पर 15% की छूट देता है। उसका शुद्ध लाभ प्रतिशत क्या है?"
        },
        o: [
          { en: "18%", hi: "18%" },
          { en: "19%", hi: "19%" },
          { en: "20%", hi: "20%" },
          { en: "22%", hi: "22%" }
        ],
        a: 1,
        exp: {
          en: "Let CP = 100. Marked Price (MP) = 140. Discount = 15% of 140 = 21. SP = 140 - 21 = 119. Profit% = (119 - 100) = 19%.",
          hi: "माना CP = 100। अंकित मूल्य = 140। छूट = 140 का 15% = 21। विक्रय मूल्य = 140 - 21 = 119। शुद्ध लाभ = 19%।"
        }
      }
    ]
  }
};
