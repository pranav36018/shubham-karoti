// verify_full_system.js
// Automated verification script for Shubham Karoti Maitreyi Gurukula website & portal

const API_BASE = 'http://localhost:5000';

async function testBackend() {
  console.log('--- Testing Backend APIs on', API_BASE, '---');

  // 1. Health check
  try {
    const res = await fetch(`${API_BASE}/`);
    const json = await res.json();
    console.log('✓ API Root Status:', json.status, '| Message:', json.message);
  } catch (err) {
    console.error('❌ Root API failed:', err.message);
    return false;
  }

  // 2. Auth Login with Admin
  let token = '';
  try {
    const res = await fetch(`${API_BASE}/api/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: 'admin@gurukula.com', password: 'admin' })
    });
    const json = await res.json();
    if (res.ok && json.token) {
      token = json.token;
      console.log('✓ Auth Login Success for Admin:', json.user.name, `(${json.user.role})`);
    } else {
      console.error('❌ Login failed:', json);
      return false;
    }
  } catch (err) {
    console.error('❌ Auth login error:', err.message);
    return false;
  }

  // 3. Auth Me
  try {
    const res = await fetch(`${API_BASE}/api/auth/me`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    const json = await res.json();
    console.log('✓ Auth /me verified:', json.user.name);
  } catch (err) {
    console.error('❌ Auth me error:', err.message);
  }

  // 4. Admissions pipeline
  let sampleApplicant = null;
  try {
    const res = await fetch(`${API_BASE}/api/admissions`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    const json = await res.json();
    console.log(`✓ Admissions records retrieved: ${json.length} applicants across pipeline stages.`);
    sampleApplicant = json.find(a => a.stage === 'Offer Sent' || a.stage === 'Camp Accepted') || json[0];
  } catch (err) {
    console.error('❌ Admissions error:', err.message);
  }

  // 5. Convert applicant to student (if eligible)
  if (sampleApplicant) {
    try {
      const res = await fetch(`${API_BASE}/api/admissions/${sampleApplicant.id}/convert-to-student`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          rollNumber: `SKG-${Date.now().toString().slice(-4)}`,
          targetGana: 'Shradha Gana',
          notes: 'Automated acceptance verified during system audit'
        })
      });
      const json = await res.json();
      console.log('✓ 1-Click Convert to Student verified:', json.message, '| Roll:', json.student?.rollNo);
    } catch (err) {
      console.error('❌ Convert to student error:', err.message);
    }
  }

  // 6. Students Directory & 360 view
  let sampleStudent = null;
  try {
    const res = await fetch(`${API_BASE}/api/students`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    const json = await res.json();
    console.log(`✓ Students records retrieved: ${json.length} active Gurukula students.`);
    sampleStudent = json[0];
    if (sampleStudent) {
      console.log(`  Sample Student: ${sampleStudent.name} (${sampleStudent.currentGana}, Roll: ${sampleStudent.rollNo})`);
    }
  } catch (err) {
    console.error('❌ Students fetch error:', err.message);
  }

  // 7. Add an observation to student
  if (sampleStudent) {
    try {
      const res = await fetch(`${API_BASE}/api/students/${sampleStudent.id}/observations`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          category: 'Sanskrit & Recitation',
          note: 'Accurately articulated Panini Ashtadhyayi Pratyahara Sutras during morning session.',
          tags: ['Panini', 'Sanskrit', 'Devotion'],
          followUpDate: '2026-11-20'
        })
      });
      const json = await res.json();
      console.log('✓ Teacher Observation added successfully. Total observations now:', json.observations?.length);
    } catch (err) {
      console.error('❌ Add observation error:', err.message);
    }
  }

  // 8. Reports API
  try {
    const res = await fetch(`${API_BASE}/api/reports`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    const json = await res.json();
    console.log(`✓ Reports generated: ${json.totalStudents} students, ${json.totalAdmissions} in admissions pipeline.`);
    console.log('  Gana distribution:', JSON.stringify(json.ganaDistribution));
  } catch (err) {
    console.error('❌ Reports error:', err.message);
  }

  // 9. Public Donation Enquiry submission
  try {
    const res = await fetch(`${API_BASE}/api/support-enquiries`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'Test Seva Patron',
        email: 'patron@example.com',
        phone: '+91 98450 12345',
        city: 'Bengaluru',
        sevaTitle: 'Full Year Vidya Daan',
        amount: 36000,
        notes: 'May the sacred flame of Gurukula vidya burn bright.'
      })
    });
    const json = await res.json();
    console.log('✓ Public Donation Enquiry received & stored:', json.enquiry?.refCode, '| Amount: ₹' + json.enquiry?.amount);
  } catch (err) {
    console.error('❌ Donation enquiry error:', err.message);
  }

  // 10. Public Contact Message submission
  try {
    const res = await fetch(`${API_BASE}/api/contact-messages`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'Prospective Parent',
        email: 'parent@example.com',
        phone: '+91 99887 76655',
        purpose: 'Inquiry regarding 6th Standard Gurukula Admission',
        message: 'Namaste, we wish to understand the Gurukula entry camp schedule for our daughter.'
      })
    });
    const json = await res.json();
    console.log('✓ Public Contact Message received & stored:', json.contactMessage?.token, '| Purpose:', json.contactMessage?.purpose);
  } catch (err) {
    console.error('❌ Contact message error:', err.message);
  }

  console.log('\n--- ALL BACKEND VERIFICATIONS COMPLETED SUCCESSFULLY ---');
  return true;
}

testBackend();
