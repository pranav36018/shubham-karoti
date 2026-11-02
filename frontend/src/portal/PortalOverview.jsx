import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { API_BASE } from '../config/api';
import { 
  Users, 
  UserPlus, 
  Eye, 
  Calendar, 
  TrendingUp, 
  Sparkles, 
  AlertCircle, 
  ArrowRight,
  BookOpen,
  Award,
  CheckCircle2,
  Clock,
  Compass
} from 'lucide-react';

export default function PortalOverview() {
  const [reports, setReports] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_BASE}/api/reports`)
      .then(res => res.json())
      .then(data => {
        setReports(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to load reports:', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-72 text-sm text-[#702E42] space-y-3 font-sans">
        <Sparkles className="w-6 h-6 animate-spin text-[#F59E0B]" />
        <span className="font-semibold tracking-wider uppercase text-xs">Loading Gurukula Institutional Metrics...</span>
      </div>
    );
  }

  const GANAS = [
    { name: "Shradha Gana", grade: "Class 6 / 1st Year", count: reports?.ganaDistribution?.['Shradha Gana'] || 0, color: "#80142C" },
    { name: "Medha Gana", grade: "Class 7 / 2nd Year", count: reports?.ganaDistribution?.['Medha Gana'] || 0, color: "#B45309" },
    { name: "Pragna Gana", grade: "Class 8 / 3rd Year", count: reports?.ganaDistribution?.['Pragna Gana'] || 0, color: "#0F172A" },
    { name: "Pratibha Gana", grade: "Class 9 / 4th Year", count: reports?.ganaDistribution?.['Pratibha Gana'] || 0, color: "#702E42" },
    { name: "Dhruti Gana", grade: "Class 10 / SSLC", count: reports?.ganaDistribution?.['Dhruti Gana'] || 0, color: "#1E293B" },
    { name: "Dhee Gana", grade: "1st & 2nd PUC", count: reports?.ganaDistribution?.['Dhee Gana'] || 0, color: "#D5B989" }
  ];

  return (
    <div className="space-y-10 max-w-7xl mx-auto">
      
      {/* 1. Executive Welcome Banner — Midnight Navy & Gold */}
      <div className="relative overflow-hidden bg-[#0F172A] text-white rounded-3xl p-8 sm:p-10 border border-[#D5B989]/30 shadow-xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
        <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-[#D5B989]/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="space-y-3 relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#80142C] text-[#FAF9F6] text-xs font-sans font-bold uppercase tracking-wider border border-[#D5B989]/40">
            <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
            <span>Gurukula Command Console</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-serif font-black tracking-tight text-white leading-tight">
            Institutional Operations & Student Journey Center
          </h1>
          <p className="text-sm sm:text-base text-slate-200 font-sans font-normal leading-relaxed">
            Real-time multi-dimensional tracking of 100% free residential students across the 6 Gana development stages, Pancha Kosha observations, and candidate admission pipeline.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 relative z-10 shrink-0">
          <Link
            to="/portal/admissions"
            className="px-5 py-3 rounded-xl bg-[#80142C] hover:bg-[#9B1D36] text-white text-xs font-sans font-bold tracking-wider uppercase transition-all shadow-md flex items-center gap-2 border border-[#D5B989]/40"
          >
            <UserPlus className="w-4 h-4 text-[#F59E0B]" />
            <span>Admissions Pipeline</span>
          </Link>

          <Link
            to="/portal/observations"
            className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-sans font-bold tracking-wider uppercase transition-all border border-white/20 flex items-center gap-2"
          >
            <Eye className="w-4 h-4 text-[#F59E0B]" />
            <span>Daily Observation</span>
          </Link>
        </div>
      </div>

      {/* 2. Top Metric Cards — Editorial Cards with Cormorant Garamond Numerals */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* Card 1: Active Students */}
        <div className="bg-white p-6 rounded-2xl border border-[#D5B989]/30 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
          <div className="absolute top-0 left-0 right-0 h-1 bg-[#80142C]" />
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <span className="text-xs font-mono font-bold text-[#702E42] uppercase tracking-wider block">
                Active Enrolled Students
              </span>
              <span className="text-4xl font-serif font-black text-[#0F172A] block tabular-nums">
                {reports?.totalStudents || 0}
              </span>
              <span className="text-xs text-slate-500 font-sans block pt-1">
                100% Free Residential Seva
              </span>
            </div>
            <div className="w-12 h-12 rounded-xl bg-[#80142C]/10 text-[#80142C] flex items-center justify-center shrink-0">
              <Users className="w-6 h-6" />
            </div>
          </div>
        </div>

        {/* Card 2: Admissions Pipeline */}
        <div className="bg-white p-6 rounded-2xl border border-[#D5B989]/30 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
          <div className="absolute top-0 left-0 right-0 h-1 bg-[#B45309]" />
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <span className="text-xs font-mono font-bold text-[#B45309] uppercase tracking-wider block">
                Admissions Pipeline
              </span>
              <span className="text-4xl font-serif font-black text-[#0F172A] block tabular-nums">
                {reports?.totalAdmissions || 0}
              </span>
              <span className="text-xs text-slate-500 font-sans block pt-1">
                Class 6 Applicants Under Review
              </span>
            </div>
            <div className="w-12 h-12 rounded-xl bg-[#B45309]/10 text-[#B45309] flex items-center justify-center shrink-0">
              <UserPlus className="w-6 h-6" />
            </div>
          </div>
        </div>

        {/* Card 3: Pending Follow-ups */}
        <div className="bg-white p-6 rounded-2xl border border-[#D5B989]/30 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
          <div className="absolute top-0 left-0 right-0 h-1 bg-[#80142C]" />
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <span className="text-xs font-mono font-bold text-[#80142C] uppercase tracking-wider block">
                Mentor Action Items
              </span>
              <span className="text-4xl font-serif font-black text-[#80142C] block tabular-nums">
                {(reports?.followUpRequired || []).length}
              </span>
              <span className="text-xs text-slate-500 font-sans block pt-1">
                Special Attention & Guidance Required
              </span>
            </div>
            <div className="w-12 h-12 rounded-xl bg-[#80142C]/10 text-[#80142C] flex items-center justify-center shrink-0">
              <AlertCircle className="w-6 h-6" />
            </div>
          </div>
        </div>

        {/* Card 4: Public Seva Enquiries */}
        <div className="bg-white p-6 rounded-2xl border border-[#D5B989]/30 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
          <div className="absolute top-0 left-0 right-0 h-1 bg-[#0F172A]" />
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <span className="text-xs font-mono font-bold text-[#0F172A] uppercase tracking-wider block">
                Public Seva Pledges
              </span>
              <span className="text-4xl font-serif font-black text-[#0F172A] block tabular-nums">
                {reports?.totalSupportEnquiries || 0}
              </span>
              <span className="text-xs text-slate-500 font-sans block pt-1">
                Vidya Daan & Annadana Pledges
              </span>
            </div>
            <div className="w-12 h-12 rounded-xl bg-[#0F172A]/10 text-[#0F172A] flex items-center justify-center shrink-0">
              <TrendingUp className="w-6 h-6" />
            </div>
          </div>
        </div>

      </div>

      {/* 3. Six Ganas Progression Ribbon */}
      <div className="bg-white p-8 rounded-3xl border border-[#D5B989]/30 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#D5B989]/20 pb-5">
          <div>
            <span className="text-xs font-mono font-bold text-[#702E42] uppercase tracking-wider block">
              Pancha Kosha Pedagogy
            </span>
            <h2 className="text-2xl font-serif font-bold text-[#0F172A] mt-0.5">
              Student Progression Across the Six Ganas
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-sans mt-1">
              Developmental progression tracking from initial Shradha Gana through graduating Dhee Gana.
            </p>
          </div>
          <Link 
            to="/portal/students" 
            className="text-xs font-sans font-bold text-[#80142C] hover:text-[#0F172A] flex items-center gap-1.5 transition-colors shrink-0 uppercase tracking-wider"
          >
            <span>View All Student Records</span>
            <ArrowRight className="w-4 h-4 text-[#F59E0B]" />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {GANAS.map((g, idx) => (
            <div 
              key={idx} 
              className="p-5 rounded-2xl bg-[#FAF9F6] border border-[#D5B989]/40 text-center space-y-2 hover:border-[#80142C] transition-colors group"
            >
              <div className="flex items-center justify-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#80142C]" />
                <span className="text-[11px] font-mono font-bold text-[#702E42] uppercase tracking-widest block">
                  Step 0{idx + 1}
                </span>
              </div>
              <h3 className="text-sm font-serif font-bold text-[#0F172A] group-hover:text-[#80142C] transition-colors truncate">
                {g.name}
              </h3>
              <span className="text-[11px] font-sans text-slate-500 block">
                {g.grade}
              </span>
              <span className="text-3xl font-serif font-black text-[#0F172A] block pt-1 tabular-nums">
                {g.count}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Two Column Grid: Follow-up Alerts & Admission Funnel */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left: Follow-up Action Items (7 cols) */}
        <div className="lg:col-span-7 bg-white p-8 rounded-3xl border border-[#D5B989]/30 shadow-sm space-y-5">
          <div className="flex items-center justify-between border-b border-[#D5B989]/20 pb-4">
            <div>
              <span className="text-xs font-mono font-bold text-[#80142C] uppercase tracking-wider block">
                Mentor Attention Queue
              </span>
              <h3 className="text-xl font-serif font-bold text-[#0F172A] flex items-center gap-2 mt-0.5">
                <AlertCircle className="w-5 h-5 text-[#80142C]" />
                Students Requiring Follow-Up & Guidance
              </h3>
            </div>
            <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-[#80142C]/10 text-[#80142C] border border-[#80142C]/20">
              {reports?.followUpRequired?.length || 0} Pending
            </span>
          </div>

          <div className="space-y-3.5">
            {(reports?.followUpRequired || []).map((item, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-[#FAF9F6] border border-[#D5B989]/40 space-y-2 hover:border-[#80142C] transition-colors">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-serif font-bold text-base text-[#0F172A]">{item.studentName}</span>
                  <span className="px-2.5 py-1 rounded-full bg-[#0F172A] text-[#F59E0B] text-[11px] font-mono font-bold">
                    Target: {item.followUpDate}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 font-sans leading-relaxed italic">
                  "{item.note}"
                </p>
                <div className="text-xs text-[#702E42] font-sans font-semibold flex items-center justify-between pt-1 border-t border-[#D5B989]/20">
                  <span>Current: <strong>{item.currentGana}</strong></span>
                  <span className="text-slate-500 font-normal">Logged by: {item.user}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Admission Funnel Stages (5 cols) */}
        <div className="lg:col-span-5 bg-white p-8 rounded-3xl border border-[#D5B989]/30 shadow-sm space-y-5 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="border-b border-[#D5B989]/20 pb-4">
              <span className="text-xs font-mono font-bold text-[#B45309] uppercase tracking-wider block">
                Intake Funnel
              </span>
              <h3 className="text-xl font-serif font-bold text-[#0F172A] mt-0.5">
                Admission Stages Breakdown
              </h3>
              <p className="text-xs text-slate-500 font-sans mt-1">
                Candidate evaluation across inquiry, parent interview, and enrollment.
              </p>
            </div>

            <div className="space-y-2.5">
              {Object.entries(reports?.admissionStages || {}).map(([stage, count]) => (
                <div 
                  key={stage} 
                  className="flex items-center justify-between p-3.5 rounded-xl bg-[#FAF9F6] border border-[#D5B989]/30 text-xs font-sans hover:border-[#80142C] transition-colors"
                >
                  <span className="font-semibold text-[#0F172A]">{stage}</span>
                  <span className="font-mono font-bold text-sm text-[#0F172A] px-3 py-0.5 rounded-full bg-white border border-[#D5B989]/40 tabular-nums">
                    {count}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4">
            <Link
              to="/portal/admissions"
              className="w-full py-3 px-4 rounded-xl bg-[#0F172A] hover:bg-[#80142C] text-white text-xs font-sans font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer"
            >
              <span>Manage Admissions Pipeline</span>
              <ArrowRight className="w-4 h-4 text-[#F59E0B]" />
            </Link>
          </div>
        </div>

      </div>

    </div>
  );
}
