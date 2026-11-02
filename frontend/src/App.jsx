import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { AuthProvider, useAuth } from './context/AuthContext';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Public Pages
import Home from './pages/Home';
import OurStory from './pages/OurStory';
import OurPhilosophy from './pages/OurPhilosophy';
import EducationActivities from './pages/EducationActivities';
import LifeAtGurukula from './pages/LifeAtGurukula';
import ChildJourney from './pages/ChildJourney';
import Gallery from './pages/Gallery';
import SupportOurMission from './pages/SupportOurMission';
import Contact from './pages/Contact';
import Login from './pages/Login';

// Portal Components
import PortalLayout from './portal/PortalLayout';
import PortalOverview from './portal/PortalOverview';
import PortalAdmissions from './portal/PortalAdmissions';
import PortalStudents from './portal/PortalStudents';
import PortalObservations from './portal/PortalObservations';
import PortalReports from './portal/PortalReports';
import PortalSupportEnquiries from './portal/PortalSupportEnquiries';
import PortalMessages from './portal/PortalMessages';

// Protected Route Component
function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
}

// Public Layout Wrapper with Authentic Gurukula Campus Background
function PublicLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col relative font-sans text-[#1E293B] bg-transparent selection:bg-[#702E42] selection:text-white">
      {/* Authentic Gurukula Campus Background Image */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <img 
          src="/assets/images/banner.jpg" 
          alt="Shubham Karoti Gurukula Campus Background" 
          className="w-full h-full object-cover object-center filter brightness-[0.98] contrast-[1.02]"
        />
        {/* Luminous Warm Porcelain overlay letting the Gurukula campus show through with high contrast */}
        <div className="absolute inset-0 bg-[#FAF9F6]/85 backdrop-blur-[0.5px]" />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <LanguageProvider>
        <Router>
          <ScrollToTop />
          <Routes>
            {/* Public Website Routes */}
            <Route path="/" element={<PublicLayout><Home /></PublicLayout>} />
            <Route path="/our-story" element={<PublicLayout><OurStory /></PublicLayout>} />
            <Route path="/our-philosophy" element={<PublicLayout><OurPhilosophy /></PublicLayout>} />
            <Route path="/education-activities" element={<PublicLayout><EducationActivities /></PublicLayout>} />
            <Route path="/life-at-gurukula" element={<PublicLayout><LifeAtGurukula /></PublicLayout>} />
            <Route path="/child-journey" element={<PublicLayout><ChildJourney /></PublicLayout>} />
            <Route path="/gallery" element={<PublicLayout><Gallery /></PublicLayout>} />
            <Route path="/support-our-mission" element={<PublicLayout><SupportOurMission /></PublicLayout>} />
            <Route path="/contact" element={<PublicLayout><Contact /></PublicLayout>} />

            {/* Portal Login Route */}
            <Route path="/login" element={<Login />} />

            {/* Internal Portal Routes (Protected) */}
            <Route
              path="/portal"
              element={
                <ProtectedRoute>
                  <PortalLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<PortalOverview />} />
              <Route path="admissions" element={<PortalAdmissions />} />
              <Route path="students" element={<PortalStudents />} />
              <Route path="observations" element={<PortalObservations />} />
              <Route path="reports" element={<PortalReports />} />
              <Route path="support-enquiries" element={<PortalSupportEnquiries />} />
              <Route path="messages" element={<PortalMessages />} />
            </Route>

            {/* Catch-all fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Router>
      </LanguageProvider>
    </AuthProvider>
  );
}
