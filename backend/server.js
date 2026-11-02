import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { v4 as uuidv4 } from 'uuid';
import { getDb, saveDb } from './database.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distPath = path.join(__dirname, '../frontend/dist');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Request logger
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// ==========================================
// AUTHENTICATION ROUTES
// ==========================================
app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
  }

  const db = getDb();
  const user = db.users.find(u => u.email.toLowerCase() === email.toLowerCase());

  if (!user || user.password !== password) {
    return res.status(401).json({ error: 'Invalid email or password' });
  }

  // Return user info and a token (simplified for zero-dependency demo reliability)
  const token = `token-${user.id}-${Date.now()}`;
  const { password: _, ...userInfo } = user;
  
  res.json({
    message: 'Login successful',
    token,
    user: userInfo
  });
});

app.get('/api/auth/me', (req, res) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ error: 'No authorization header provided' });
  }

  const db = getDb();
  // For demo, return the admin user or matched token
  const token = authHeader.replace('Bearer ', '');
  const userId = token.split('-')[1];
  const user = db.users.find(u => u.id === userId) || db.users[0];

  const { password: _, ...userInfo } = user;
  res.json({ user: userInfo });
});

// ==========================================
// 1. ADMISSION PROCESS (PDF Section 2)
// ==========================================
app.get('/api/admissions', (req, res) => {
  const db = getDb();
  const { stage, search } = req.query;
  let results = db.admissions || [];

  if (stage && stage !== 'All') {
    results = results.filter(a => a.stage === stage);
  }

  if (search) {
    const q = search.toLowerCase();
    results = results.filter(a => 
      a.childName.toLowerCase().includes(q) ||
      a.applicationNo.toLowerCase().includes(q) ||
      a.nativeVillage.toLowerCase().includes(q)
    );
  }

  res.json(results);
});

app.post('/api/admissions', (req, res) => {
  const db = getDb();
  const newApp = {
    id: `adm-${Date.now()}`,
    applicationNo: `APP-2026-${Math.floor(100 + Math.random() * 900)}`,
    childName: req.body.childName || "New Applicant",
    dob: req.body.dob || "2015-01-01",
    age: req.body.age || 11,
    currentGrade: req.body.currentGrade || "5th Standard",
    nativeVillage: req.body.nativeVillage || "Karnataka",
    parentName: req.body.parentName || "",
    parentPhone: req.body.parentPhone || "",
    parentOccupation: req.body.parentOccupation || "",
    howKnown: req.body.howKnown || "Direct Enquiry",
    enquiryDate: new Date().toISOString().split('T')[0],
    interviewDate: req.body.interviewDate || "",
    stage: req.body.stage || "Application Received",
    observations: req.body.observations || "",
    nextAction: req.body.nextAction || "Review application",
    followUpDate: req.body.followUpDate || "",
    notes: req.body.notes || ""
  };

  db.admissions.unshift(newApp);
  saveDb(db);
  res.status(201).json(newApp);
});

app.put('/api/admissions/:id', (req, res) => {
  const db = getDb();
  const idx = db.admissions.findIndex(a => a.id === req.params.id);
  if (idx === -1) {
    return res.status(404).json({ error: 'Admission record not found' });
  }

  db.admissions[idx] = { ...db.admissions[idx], ...req.body };
  saveDb(db);
  res.json(db.admissions[idx]);
});

// Convert an Admission record into an Active Gurukula Student
// "Once the admission process is completed and the child joins the Gurukula,
// the same record should be converted into a Gurukula Child record." (PDF Section 2)
app.post('/api/admissions/:id/convert-to-student', (req, res) => {
  const db = getDb();
  const adm = db.admissions.find(a => a.id === req.params.id);
  if (!adm) {
    return res.status(404).json({ error: 'Admission applicant not found' });
  }

  // Update admission status
  adm.stage = "Selected as Student";

  // Create new active student profile
  const newStudent = {
    id: `stu-${Date.now()}`,
    rollNo: `SKMG-2026-${Math.floor(100 + Math.random() * 900)}`,
    name: adm.childName,
    admissionYear: 2026,
    currentGana: "Shradha Gana (1st Year / Class 6)",
    dob: adm.dob,
    native: adm.nativeVillage,
    parentName: adm.parentName,
    parentContact: adm.parentPhone,
    dormitory: "Maitreyi Nilaya - New Intake",
    mentor: "Matrushree Sharada Devi",
    avatar: "/assets/images/intro.png",
    convertedFromAdmissionId: adm.id,

    academics: {
      stateBoardProgress: "Commencing 6th Standard State Syllabus",
      sanskritUniversityLevel: "Prathama (1st Year) Enrolled",
      paniniSutrasMemorized: 0,
      amaraKoshaVerses: 0,
      gitaChaptersChanted: "Commencing Chapter 12",
      languages: "Spoken Sanskrit immersion begun"
    },
    health: {
      generalStatus: "Healthy",
      bmi: "Normal",
      suryanamaskarDaily: 6,
      dietaryAppetite: "Good",
      recentMedicalCheckup: "Intake medical verified"
    },
    skills: {
      bharatanatyam: "Foundations & Mudras started",
      musicAndHarikatha: "Bhajan chanting group",
      gandhariVidya: "Beginning sensory concentration exercises",
      traditionalArts: "Rangoli & Seva"
    },
    responsibilities: {
      role: "Tulasi Vana & Room Tidiness Seva",
      duties: "Assisting senior sisters in dormitory upkeep",
      swadhyaya: "Evening group review"
    },
    achievements: [],
    observations: [
      {
        id: `obs-${Date.now()}`,
        date: new Date().toISOString().split('T')[0],
        time: "10:00 AM",
        user: "Sri Pramod Kamat",
        category: "Admission & Conversion",
        tags: ["New Intake", "Welcomed to Gurukula", "Shradha Gana"],
        note: `Child successfully admitted into Gurukula from application ${adm.applicationNo}. Welcomed with Deeksha blessings.`,
        followUpDate: adm.followUpDate || ""
      }
    ]
  };

  db.students.unshift(newStudent);
  saveDb(db);

  res.status(201).json({
    message: 'Child successfully converted into Gurukula Student',
    student: newStudent,
    admission: adm
  });
});

// ==========================================
// 2. GURUKULA STUDENTS & 6 DIMENSIONS (PDF Section 3 & 4)
// ==========================================
app.get('/api/students', (req, res) => {
  const db = getDb();
  const { gana, search } = req.query;
  let results = db.students || [];

  if (gana && gana !== 'All') {
    results = results.filter(s => s.currentGana.toLowerCase().includes(gana.toLowerCase()));
  }

  if (search) {
    const q = search.toLowerCase();
    results = results.filter(s =>
      s.name.toLowerCase().includes(q) ||
      s.rollNo.toLowerCase().includes(q) ||
      s.native.toLowerCase().includes(q)
    );
  }

  res.json(results);
});

app.get('/api/students/:id', (req, res) => {
  const db = getDb();
  const student = db.students.find(s => s.id === req.params.id);
  if (!student) {
    return res.status(404).json({ error: 'Student not found' });
  }
  res.json(student);
});

app.post('/api/students', (req, res) => {
  const db = getDb();
  const newStudent = {
    id: `stu-${Date.now()}`,
    rollNo: `SKMG-2026-${Math.floor(100 + Math.random() * 900)}`,
    name: req.body.name,
    admissionYear: req.body.admissionYear || 2026,
    currentGana: req.body.currentGana || "Shradha Gana (1st Year / Class 6)",
    dob: req.body.dob || "2015-01-01",
    native: req.body.native || "Karnataka",
    parentName: req.body.parentName || "",
    parentContact: req.body.parentContact || "",
    dormitory: req.body.dormitory || "Maitreyi Nilaya",
    mentor: req.body.mentor || "Matrushree Sharada Devi",
    avatar: req.body.avatar || "/assets/images/banner-2.jpg",
    academics: req.body.academics || {
      stateBoardProgress: "Enrolled in 6th Standard",
      sanskritUniversityLevel: "Prathama Level",
      paniniSutrasMemorized: 0,
      amaraKoshaVerses: 0,
      gitaChaptersChanted: "Chapter 12",
      languages: "Spoken Sanskrit immersion"
    },
    health: req.body.health || {
      generalStatus: "Healthy",
      bmi: "Normal",
      suryanamaskarDaily: 6,
      dietaryAppetite: "Good",
      recentMedicalCheckup: "Normal"
    },
    skills: req.body.skills || {
      bharatanatyam: "Beginner",
      musicAndHarikatha: "Bhajan singing",
      gandhariVidya: "Beginning sensory training",
      traditionalArts: "Rangoli"
    },
    responsibilities: req.body.responsibilities || {
      role: "Dormitory Upkeep",
      duties: "Assisting in morning chores",
      swadhyaya: "Evening reading"
    },
    achievements: [],
    observations: []
  };

  db.students.unshift(newStudent);
  saveDb(db);
  res.status(201).json(newStudent);
});

app.put('/api/students/:id', (req, res) => {
  const db = getDb();
  const idx = db.students.findIndex(s => s.id === req.params.id);
  if (idx === -1) {
    return res.status(404).json({ error: 'Student not found' });
  }

  db.students[idx] = { ...db.students[idx], ...req.body };
  saveDb(db);
  res.json(db.students[idx]);
});

// Quick Observation Recorder (PDF Section 6: "Teachers should be able to record a short observation from a mobile phone quickly... tagged by date, time and user")
app.post('/api/students/:id/observations', (req, res) => {
  const db = getDb();
  const student = db.students.find(s => s.id === req.params.id);
  if (!student) {
    return res.status(404).json({ error: 'Student not found' });
  }

  const now = new Date();
  const newObs = {
    id: `obs-${Date.now()}`,
    date: req.body.date || now.toISOString().split('T')[0],
    time: req.body.time || now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    user: req.body.user || "Matrushree Sharada Devi",
    category: req.body.category || "General",
    tags: Array.isArray(req.body.tags) ? req.body.tags : [req.body.tags || "Observation"],
    note: req.body.note || "",
    followUpDate: req.body.followUpDate || "",
    actionTaken: req.body.actionTaken || ""
  };

  if (!student.observations) {
    student.observations = [];
  }
  student.observations.unshift(newObs);
  saveDb(db);

  res.status(201).json({
    message: 'Observation recorded successfully',
    observation: newObs,
    student
  });
});

// ==========================================
// 3. HOLISTIC REPORTS & STATS (PDF Section 4)
// ==========================================
app.get('/api/reports', (req, res) => {
  const db = getDb();
  const students = db.students || [];
  const admissions = db.admissions || [];

  // Group by Gana
  const ganaDistribution = {};
  students.forEach(s => {
    const ganaName = s.currentGana.split('(')[0].trim();
    ganaDistribution[ganaName] = (ganaDistribution[ganaName] || 0) + 1;
  });

  // Admission Stages Breakdown
  const admissionStages = {};
  admissions.forEach(a => {
    admissionStages[a.stage] = (admissionStages[a.stage] || 0) + 1;
  });

  // Children needing follow-up
  const followUpRequired = [];
  students.forEach(s => {
    if (s.observations && s.observations.length > 0) {
      const latest = s.observations[0];
      if (latest.followUpDate) {
        followUpRequired.push({
          studentId: s.id,
          studentName: s.name,
          currentGana: s.currentGana,
          note: latest.note,
          followUpDate: latest.followUpDate,
          user: latest.user
        });
      }
    }
  });

  res.json({
    totalStudents: students.length,
    totalAdmissions: admissions.length,
    totalSupportEnquiries: (db.supportEnquiries || []).length,
    ganaDistribution,
    admissionStages,
    followUpRequired
  });
});

// ==========================================
// 4. SUPPORT ENQUIRIES (Public Form)
// ==========================================
app.get('/api/support-enquiries', (req, res) => {
  const db = getDb();
  res.json(db.supportEnquiries || []);
});

app.post('/api/support-enquiries', (req, res) => {
  const db = getDb();
  const refCode = "SKMG-" + Math.floor(100000 + Math.random() * 900000);
  const newEnquiry = {
    id: `seq-${Date.now()}`,
    refCode,
    name: req.body.name,
    phone: req.body.phone,
    email: req.body.email || "",
    city: req.body.city || "",
    sevaTitle: req.body.sevaTitle || "General Seva",
    amount: req.body.amount || 0,
    notes: req.body.notes || "",
    status: "New",
    date: new Date().toISOString().split('T')[0]
  };

  if (!db.supportEnquiries) db.supportEnquiries = [];
  db.supportEnquiries.unshift(newEnquiry);
  saveDb(db);

  res.status(201).json({
    message: 'Support enquiry registered successfully',
    enquiry: newEnquiry
  });
});

app.put('/api/support-enquiries/:id/status', (req, res) => {
  const db = getDb();
  const item = db.supportEnquiries.find(e => e.id === req.params.id);
  if (!item) return res.status(404).json({ error: 'Enquiry not found' });

  item.status = req.body.status || "Followed Up";
  saveDb(db);
  res.json(item);
});

// ==========================================
// 5. CONTACT MESSAGES (Public Form)
// ==========================================
app.get('/api/contact-messages', (req, res) => {
  const db = getDb();
  res.json(db.contactMessages || []);
});

app.post('/api/contact-messages', (req, res) => {
  const db = getDb();
  const token = "GURUKULA-MSG-" + Math.floor(1000 + Math.random() * 9000);
  const newMsg = {
    id: `msg-${Date.now()}`,
    token,
    name: req.body.name,
    phone: req.body.phone,
    email: req.body.email || "",
    purpose: req.body.purpose || "General Inquiry",
    message: req.body.message || "",
    status: "New",
    date: new Date().toISOString().split('T')[0]
  };

  if (!db.contactMessages) db.contactMessages = [];
  db.contactMessages.unshift(newMsg);
  saveDb(db);

  res.status(201).json({
    message: 'Message delivered to Gurukula administration',
    token
  });
});

app.put('/api/contact-messages/:id/status', (req, res) => {
  const db = getDb();
  const msg = db.contactMessages.find(m => m.id === req.params.id);
  if (!msg) return res.status(404).json({ error: 'Message not found' });

  msg.status = req.body.status || "Responded";
  saveDb(db);
  res.json(msg);
});

// Health check route
app.get('/api/health', (req, res) => {
  res.json({
    institution: "Shubham Karoti Maitreyi Gurukula API",
    status: "Active & Operational",
    endpoints: [
      "/api/auth/login",
      "/api/admissions",
      "/api/students",
      "/api/reports",
      "/api/support-enquiries",
      "/api/contact-messages"
    ]
  });
});

// Serve frontend static assets in production or when dist exists
if (fs.existsSync(distPath)) {
  app.use(express.static(distPath));
  app.use((req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
  });
} else {
  app.get('/', (req, res) => {
    res.json({
      institution: "Shubham Karoti Maitreyi Gurukula API",
      status: "Active & Operational (Frontend build not found - run npm run build in frontend)"
    });
  });
}

app.listen(PORT, () => {
  console.log(`[Gurukula Backend API] Running on http://localhost:${PORT}`);
});
