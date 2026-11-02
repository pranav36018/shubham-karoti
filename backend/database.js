import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_DIR = path.join(__dirname, 'data');
const DB_FILE = path.join(DATA_DIR, 'db.json');

const INITIAL_DATA = {
  users: [
    {
      id: "usr-admin",
      name: "Sri Pramod R. Kamat",
      email: "admin@gurukula.com",
      password: "admin", // Demo login
      role: "admin",
      title: "Managing Trustee"
    },
    {
      id: "usr-teacher",
      name: "Matrushree Sharada Devi",
      email: "teacher@gurukula.com",
      password: "teacher", // Demo login
      role: "teacher",
      title: "Senior Resident Acharya (Sanskrit & Yoga)"
    },
    {
      id: "usr-coordinator",
      name: "Sri Venugopal",
      email: "coordinator@gurukula.com",
      password: "coordinator", // Demo login
      role: "coordinator",
      title: "Academic & Seva Coordinator"
    }
  ],

  // 1. Admission Process (Section 2 of Requirements PDF)
  admissions: [
    {
      id: "adm-001",
      applicationNo: "APP-2026-081",
      childName: "Kumari Keerthana R.",
      dob: "2015-05-14",
      age: 11,
      currentGrade: "5th Standard (Passed)",
      nativeVillage: "Malavalli, Mandya District, Karnataka",
      parentName: "Ramegowda (Father) & Sharadamma (Mother)",
      parentPhone: "+91 9481234567",
      parentOccupation: "Small-scale Agriculture",
      howKnown: "Through alumni family in village",
      enquiryDate: "2026-09-10",
      interviewDate: "2026-10-05",
      stage: "Application Received",
      observations: "Eager child, basic Kannada reading is very good. Interested in learning music.",
      nextAction: "Schedule preliminary family orientation & campus tour",
      followUpDate: "2026-11-10",
      notes: "Family requested 100% free residential lodging due to financial hardship."
    },
    {
      id: "adm-002",
      applicationNo: "APP-2026-074",
      childName: "Kumari Sahana M.",
      dob: "2015-08-22",
      age: 11,
      currentGrade: "5th Standard (Passed)",
      nativeVillage: "Madhugiri, Tumakuru District, Karnataka",
      parentName: "Manjunath K. (Father)",
      parentPhone: "+91 9844112233",
      parentOccupation: "Weaver / Artisan",
      howKnown: "Newspaper article on Pejawar Swamiji's Gurukula inauguration",
      enquiryDate: "2026-08-15",
      interviewDate: "2026-09-20",
      stage: "Selected for Interview",
      observations: "Quick cognitive grasping power. Recited 5 Bhagavad Gita shlokas from memory.",
      nextAction: "Conduct face-to-face interview with Matrushrees at Ramohalli campus",
      followUpDate: "2026-11-12",
      notes: "Strong inclination towards Sanskrit and traditional arts."
    },
    {
      id: "adm-003",
      applicationNo: "APP-2026-062",
      childName: "Kumari Meenakshi Shastri",
      dob: "2015-03-09",
      age: 11,
      currentGrade: "5th Standard (Passed)",
      nativeVillage: "Nanjangud, Mysuru District, Karnataka",
      parentName: "Smt. Annapurna (Mother)",
      parentPhone: "+91 9900887766",
      parentOccupation: "Temple Sevika / Tailoring",
      howKnown: "Direct recommendation from Shubha Dayini Alumni",
      enquiryDate: "2026-07-28",
      interviewDate: "2026-09-02",
      stage: "Invited",
      observations: "Well-mannered, quiet demeanor. Both mother and daughter eager for Gurukula upbringing.",
      nextAction: "Send formal Deeksha invitation letter & boarding list",
      followUpDate: "2026-11-15",
      notes: "Selected for full free education sponsorship."
    },
    {
      id: "adm-004",
      applicationNo: "APP-2026-050",
      childName: "Kumari Deepa S.",
      dob: "2015-11-30",
      age: 11,
      currentGrade: "5th Standard",
      nativeVillage: "Sirsi, Uttara Kannada, Karnataka",
      parentName: "Shripad Bhat (Father)",
      parentPhone: "+91 9741556677",
      parentOccupation: "Arecanut Farm Laborer",
      howKnown: "Gurukula public event visit",
      enquiryDate: "2026-06-12",
      interviewDate: "2026-08-10",
      stage: "Selected as Student",
      observations: "High aptitude in memory and linguistic skills. Fit for Shradha Gana intake.",
      nextAction: "Ready for formal admission conversion and hostel room assignment",
      followUpDate: "2026-11-20",
      notes: "Admission confirmed. Ready for conversion."
    },
    {
      id: "adm-005",
      applicationNo: "APP-2026-041",
      childName: "Kumari Tejaswini K.",
      dob: "2015-01-18",
      age: 11,
      currentGrade: "5th Standard",
      nativeVillage: "Channapatna, Ramanagara District",
      parentName: "Kumaraswamy (Father)",
      parentPhone: "+91 9611223344",
      parentOccupation: "Toy Artisan",
      howKnown: "Rotary Club Guruvandana Event",
      enquiryDate: "2026-05-19",
      interviewDate: "2026-07-14",
      stage: "To be Followed Up Later",
      observations: "Child showed interest, but parents undecided on full residential boarding away from home.",
      nextAction: "Follow-up phone call to counsel parents and offer campus trial stay",
      followUpDate: "2026-11-25",
      notes: "Parents requested 2 months time to consult family elders."
    }
  ],

  // 2. Active Gurukula Students (Sections 3 & 4 of Requirements PDF)
  students: [
    {
      id: "stu-101",
      rollNo: "SKMG-2024-001",
      name: "Kumari Ananya G.",
      admissionYear: 2024,
      currentGana: "Medha Gana (2nd Year / Class 7)",
      dob: "2014-04-12",
      native: "Hassan District, Karnataka",
      parentName: "Gundappa & Shailaja",
      parentContact: "+91 9845112233",
      dormitory: "Maitreyi Nilaya - Room 4",
      mentor: "Matrushree Sharada Devi",
      avatar: "/assets/images/banner-2.jpg",

      // 6 Dimensions per Requirements PDF:
      academics: {
        stateBoardProgress: "A Grade (88%) - Mathematics, Science, Social Studies",
        sanskritUniversityLevel: "Prathama (1st Year) in progress",
        paniniSutrasMemorized: 520,
        amaraKoshaVerses: 450,
        gitaChaptersChanted: "Chapters 12 & 15 memorized with correct Swara",
        languages: "Spoken Sanskrit conversational fluency; English basic reading; Kannada literature distinction"
      },
      health: {
        generalStatus: "Healthy & Energetic",
        bmi: "Normal (17.8)",
        suryanamaskarDaily: 12,
        dietaryAppetite: "Good, enjoys sattvic milk and seasonal fruits",
        recentMedicalCheckup: "Normal eyesight, no recurring complaints (Checked Oct 2026)"
      },
      skills: {
        bharatanatyam: "Mastered 4 basic Adavus and Hastamudras (Hand Gestures)",
        musicAndHarikatha: "Sings morning Pratasmaran and devotional Bhajans melodiously",
        gandhariVidya: "Active participation in sensory blindfolded focus training; identifies primary colors via touch/intuition",
        traditionalArts: "Kolam (Rangoli) designs and floral decoration"
      },
      responsibilities: {
        role: "Annakshetra Dining Hall Assistant",
        duties: "Distributing pure drinking water during lunch; assisting younger peers",
        swadhyaya: "Punctual in evening self-study"
      },
      achievements: [
        { date: "2026-08-15", title: "1st Place in Inter-Gurukula Sanskrit Recitation", category: "Sanskrit" },
        { date: "2026-09-07", title: "Janmashtami Folk Dance Certificate of Excellence", category: "Arts" }
      ],
      observations: [
        {
          id: "obs-1",
          date: "2026-10-28",
          time: "10:30 AM",
          user: "Matrushree Sharada Devi",
          category: "Academic",
          tags: ["Sanskrit Fluency", "Curiosity", "Ashtadhyayi"],
          note: "Ananya demonstrated remarkable grasping power in Panini Sutra 1.1.1 (Vriddhiradaich). Encouraged her to help classmates with chanting.",
          followUpDate: "2026-11-15",
          actionTaken: "Assigned peer chanting leader role for morning session."
        },
        {
          id: "obs-2",
          date: "2026-10-15",
          time: "05:00 PM",
          user: "Sri Venugopal",
          category: "Well-being",
          tags: ["Confidence", "Healthy Appetite"],
          note: "Noticed high enthusiasm during Kho-Kho sports period. Social adjustment with roommates is warm and harmonious.",
          followUpDate: "2026-11-20"
        }
      ]
    },
    {
      id: "stu-102",
      rollNo: "SKMG-2022-005",
      name: "Kumari Soundarya M.",
      admissionYear: 2022,
      currentGana: "Pratibha Gana (4th Year / Class 9)",
      dob: "2012-07-19",
      native: "Chamarajanagar District, Karnataka",
      parentName: "Smt. Parvathi (Single Mother)",
      parentContact: "+91 9740223344",
      dormitory: "Gargi Nilaya - Room 2",
      mentor: "Matrushree Sharada Devi",
      avatar: "/assets/images/Shubham-Karoti-005-1024x697.webp",

      academics: {
        stateBoardProgress: "A+ Grade (92%) - High distinction in Science & Mathematics",
        sanskritUniversityLevel: "Prathama Distinction (89%); Preparing for Kavya",
        paniniSutrasMemorized: 1850,
        amaraKoshaVerses: 1600,
        gitaChaptersChanted: "Chapters 1 through 6 memorized fluently",
        languages: "Fluent in Sanskrit debates; delivers speeches in Kannada and English"
      },
      health: {
        generalStatus: "Excellent Vitality",
        bmi: "Normal (18.5)",
        suryanamaskarDaily: 24,
        dietaryAppetite: "Excellent",
        recentMedicalCheckup: "All parameters normal (Oct 2026)"
      },
      skills: {
        bharatanatyam: "Senior stage dancer; performed Jathiswaram and Shabdam at Guru Poornima",
        musicAndHarikatha: "Plays harmonium and cymbals; delivered 20-minute Harikatha on 'Bhakta Prahlada'",
        gandhariVidya: "Advanced sensory concentration; successfully identifies blindfolded flashcard text",
        traditionalArts: "Garland making, rangoli, tailoring fundamentals"
      },
      responsibilities: {
        role: "Gurukula Library In-Charge & Stage Co-Director",
        duties: "Organizing Sanskrit Grantha Nilaya catalog; helping junior students select books",
        swadhyaya: "Guides 7th grade Medha Gana students in grammar"
      },
      achievements: [
        { date: "2026-07-22", title: "Solo Harikatha Presentation on Vyasa Poornima", category: "Cultural" },
        { date: "2026-01-26", title: "State-level Sanskrit University Merit Prize", category: "Academics" }
      ],
      observations: [
        {
          id: "obs-3",
          date: "2026-10-24",
          time: "03:45 PM",
          user: "Matrushree Sharada Devi",
          category: "Skill & Leadership",
          tags: ["Bharatanatyam", "Leadership", "Stage Poise"],
          note: "Soundarya displayed wonderful emotional maturity while teaching footwork to junior sisters. She possesses natural teaching aptitude.",
          followUpDate: "2026-11-18",
          actionTaken: "Nominated as lead performer for upcoming Annual Conclave."
        }
      ]
    },
    {
      id: "stu-103",
      rollNo: "SKMG-2020-002",
      name: "Kumari Bhavana Hegde",
      admissionYear: 2020,
      currentGana: "Dhee Gana (6th Year / 2nd PUC)",
      dob: "2010-02-14",
      native: "Shivamogga District, Karnataka",
      parentName: "Narayana Hegde & Lalitha",
      parentContact: "+91 9980334455",
      dormitory: "Arundhati Nilaya - Room 1",
      mentor: "Sri Pramod Kamat",
      avatar: "/assets/images/Shubham-Karoti-019-1024x683.webp",

      academics: {
        stateBoardProgress: "Preparing for Karnataka 2nd PUC Board (Target: 95%+ in Commerce/Stats)",
        sanskritUniversityLevel: "Completed 'Sahitya' Degree Examination with Gold Medal",
        paniniSutrasMemorized: 3978, // Complete Ashtadhyayi
        amaraKoshaVerses: 2989, // Complete Amarakosha
        gitaChaptersChanted: "All 18 Chapters of Srimad Bhagavad Gita memorized",
        languages: "Trilingual orator (Sanskrit, Kannada, English)"
      },
      health: {
        generalStatus: "Robust & Mentally Serene",
        bmi: "Normal (19.2)",
        suryanamaskarDaily: 36,
        dietaryAppetite: "Wholesome sattvic",
        recentMedicalCheckup: "Excellent health report (Oct 2026)"
      },
      skills: {
        bharatanatyam: "Arangetram completed; exponent of classical Natya Shastra",
        musicAndHarikatha: "Expert Harikatha narrator; conducted public programs in Bengaluru temples",
        gandhariVidya: "Senior mentor conducting concentration workshops for new students",
        traditionalArts: "Panchanga reading, Vedic calculation, environmental gardening"
      },
      responsibilities: {
        role: "Mukhya Chhatra (Senior Head Student)",
        duties: "Overseeing student assembly, conducting morning prayer coordination, mentoring",
        swadhyaya: "Independent research in Vedic literature and modern economics"
      },
      achievements: [
        { date: "2026-09-15", title: "National Level Sanskrit Debate Championship Winner", category: "Academics" },
        { date: "2026-02-10", title: "Shubha Dayini Youth Leadership Fellowship", category: "Leadership" }
      ],
      observations: [
        {
          id: "obs-4",
          date: "2026-10-29",
          time: "07:15 PM",
          user: "Sri Pramod Kamat",
          category: "Character & Wisdom",
          tags: ["Dhee Shakti", "Moral Leadership", "Ready for University"],
          note: "Bhavana demonstrated profound philosophical insight during our review of Brihadaranyaka Upanishad. She is an exemplary model of the Gurukula vision.",
          followUpDate: "2026-12-01",
          actionTaken: "Arranged university career counseling and alumni mentorship match."
        }
      ]
    },
    {
      id: "stu-104",
      rollNo: "SKMG-2025-012",
      name: "Kumari Sneha Patil",
      admissionYear: 2025,
      currentGana: "Shradha Gana (1st Year / Class 6)",
      dob: "2015-06-25",
      native: "Belagavi Rural, Karnataka",
      parentName: "Basavaraj & Renuka",
      parentContact: "+91 9448556677",
      dormitory: "Maitreyi Nilaya - Room 1",
      mentor: "Matrushree Sharada Devi",
      avatar: "/assets/images/intro.png",

      academics: {
        stateBoardProgress: "B+ Grade (78%) - Adjusting well to English and Sanskrit",
        sanskritUniversityLevel: "Prathama Preparatory",
        paniniSutrasMemorized: 180,
        amaraKoshaVerses: 120,
        gitaChaptersChanted: "Chapter 12 memorized",
        languages: "Spoken Sanskrit learning through daily songs and routine commands"
      },
      health: {
        generalStatus: "Good",
        bmi: "Normal (16.9)",
        suryanamaskarDaily: 6,
        dietaryAppetite: "Good",
        recentMedicalCheckup: "Healthy (Oct 2026)"
      },
      skills: {
        bharatanatyam: "Basic footwork and eye coordination exercises",
        musicAndHarikatha: "Sings choir Bhajans",
        gandhariVidya: "Sensory touch games",
        traditionalArts: "Clay modeling and flower picking"
      },
      responsibilities: {
        role: "Tulasi Vana Watering Seva",
        duties: "Watering holy basil plants every morning",
        swadhyaya: "Regular handwriting practice"
      },
      achievements: [
        { date: "2026-09-01", title: "Best Room Tidiness Award", category: "Seva" }
      ],
      observations: [
        {
          id: "obs-5",
          date: "2026-10-27",
          time: "11:00 AM",
          user: "Matrushree Sharada Devi",
          category: "Emotional Wellbeing",
          tags: ["Adjustment", "Homesickness Overcome", "Joyful"],
          note: "Sneha was feeling homesick in the first month; now completely settled with peer sisters. Smiles brightly during morning prayer.",
          followUpDate: "2026-11-20"
        }
      ]
    }
  ],

  // 3. Support Enquiries (Received from Public Support Form)
  supportEnquiries: [
    {
      id: "seq-501",
      refCode: "SKMG-894102",
      name: "Smt. Gayatri Sharma",
      phone: "+91 9880011223",
      email: "gayatri.sharma@gmail.com",
      city: "Bengaluru",
      sevaTitle: "Full Year Complete Girl Child Sponsorship",
      amount: 45000,
      notes: "In memory of my late mother Smt. Veda Sharma. Would like to meet trustees.",
      status: "Followed Up",
      date: "2026-10-29"
    },
    {
      id: "seq-502",
      refCode: "SKMG-452109",
      name: "Sri Raghavendra Rao",
      phone: "+91 9448123987",
      email: "r.rao@techcorp.in",
      city: "Mysuru",
      sevaTitle: "Annadana Seva (Full Day Campus Meals)",
      amount: 5000,
      notes: "On the occasion of my daughter's birthday on Nov 18.",
      status: "New",
      date: "2026-11-01"
    }
  ],

  // 4. Contact Form Inquiries
  contactMessages: [
    {
      id: "msg-301",
      token: "GURUKULA-MSG-9412",
      name: "Smt. Sudha Kulkarni",
      phone: "+91 9845098765",
      email: "sudha.kulkarni@yahoo.com",
      purpose: "Admission for 6th Standard",
      message: "My daughter is currently studying in 5th standard in Dharwad. We are keen on Gurukula education. How can we apply for next academic year?",
      status: "Responded",
      date: "2026-10-25"
    },
    {
      id: "msg-302",
      token: "GURUKULA-MSG-4180",
      name: "Prof. H. R. Nagendra",
      phone: "+91 9900114422",
      email: "hr.nagendra@edu.org",
      purpose: "Volunteer / Guest Lecture",
      message: "Would love to visit campus and conduct a weekend workshop on Vedic Mathematics.",
      status: "New",
      date: "2026-11-02"
    }
  ]
};

// Initialize DB file if missing
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

if (!fs.existsSync(DB_FILE)) {
  fs.writeFileSync(DB_FILE, JSON.stringify(INITIAL_DATA, null, 2), 'utf8');
}

export function getDb() {
  try {
    const raw = fs.readFileSync(DB_FILE, 'utf8');
    return JSON.parse(raw);
  } catch (err) {
    console.error('Error reading db.json, returning fallback:', err);
    return INITIAL_DATA;
  }
}

export function saveDb(data) {
  try {
    fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2), 'utf8');
    return true;
  } catch (err) {
    console.error('Error writing db.json:', err);
    return false;
  }
}
