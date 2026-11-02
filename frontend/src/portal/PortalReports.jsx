import React, { useState, useEffect } from 'react';
import { API_BASE } from '../config/api';
import { 
  BarChart3, 
  FileText, 
  Printer, 
  Download, 
  AlertCircle, 
  Sparkles, 
  Award,
  Users,
  GraduationCap
} from 'lucide-react';

export default function PortalReports() {
  const [reports, setReports] = useState(null);
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch(`${API_BASE}/api/reports`).then(r => r.json()),
      fetch(`${API_BASE}/api/students`).then(r => r.json())
    ]).then(([repData, stuData]) => {
      setReports(repData);
      setStudents(stuData);
      setLoading(false);
    }).catch(err => {
      console.error('Error loading report data:', err);
      setLoading(false);
    });
  }, []);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-8 max-w-7xl mx-auto font-sans">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-b border-[#D5B989]/30 pb-6">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#80142C]" />
            <span className="text-xs font-mono font-bold text-[#702E42] uppercase tracking-wider block">
              Institutional Reporting Engine
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-black text-[#0F172A] tracking-tight">
            Holistic Growth & Outcomes Reporting
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 mt-0.5 max-w-2xl">
            Grade summaries, developmental milestones, follow-up queues, and progress benchmarks across the 6 Gana levels.
          </p>
        </div>

        <button
          onClick={handlePrint}
          className="px-5 py-2.5 rounded-xl bg-white border border-[#D5B989] text-[#0F172A] text-xs font-sans font-bold uppercase tracking-wider flex items-center gap-2 shadow-sm hover:bg-[#FAF9F6] transition-all cursor-pointer self-start sm:self-auto"
        >
          <Printer className="w-4 h-4 text-[#80142C]" />
          <span>Print / Export Ledger</span>
        </button>
      </div>

      {/* Grade-wise & Gana Summary Table */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#D5B989]/30 shadow-sm space-y-5">
        <div className="flex items-center gap-2">
          <GraduationCap className="w-5 h-5 text-[#80142C]" />
          <h3 className="text-xl font-serif font-bold text-[#0F172A]">
            1. Class / Grade-Level Summaries & Developmental Benchmarks
          </h3>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs font-sans">
            <thead className="bg-[#FAF9F6] text-[#702E42] uppercase font-mono font-bold text-[11px] tracking-wider border-b border-[#D5B989]/30">
              <tr>
                <th className="py-3.5 px-4">Gana Level</th>
                <th className="py-3.5 px-4">Standard</th>
                <th className="py-3.5 px-4">Active Enrolled</th>
                <th className="py-3.5 px-4">Target Core Virtue</th>
                <th className="py-3.5 px-4">Sanskrit Benchmark</th>
                <th className="py-3.5 px-4">Progress State</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#D5B989]/20">
              <tr className="hover:bg-[#FAF9F6]/50">
                <td className="py-3.5 px-4 font-serif font-bold text-base text-[#0F172A]">Shradha Gana</td>
                <td className="py-3.5 px-4 text-slate-700">Class 6</td>
                <td className="py-3.5 px-4 font-mono font-bold text-sm text-[#0F172A]">1</td>
                <td className="py-3.5 px-4 text-[#702E42] font-semibold">Dedication & Reverence</td>
                <td className="py-3.5 px-4 text-slate-700">Spoken immersion; basic sandhi & vibhakti</td>
                <td className="py-3.5 px-4"><span className="text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full text-[11px] font-bold">Flourishing</span></td>
              </tr>
              <tr className="hover:bg-[#FAF9F6]/50">
                <td className="py-3.5 px-4 font-serif font-bold text-base text-[#0F172A]">Medha Gana</td>
                <td className="py-3.5 px-4 text-slate-700">Class 7</td>
                <td className="py-3.5 px-4 font-mono font-bold text-sm text-[#0F172A]">1</td>
                <td className="py-3.5 px-4 text-[#702E42] font-semibold">Knowledge & Inquiry</td>
                <td className="py-3.5 px-4 text-slate-700">500+ Panini Ashtadhyayi Sutras</td>
                <td className="py-3.5 px-4"><span className="text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full text-[11px] font-bold">Flourishing</span></td>
              </tr>
              <tr className="hover:bg-[#FAF9F6]/50">
                <td className="py-3.5 px-4 font-serif font-bold text-base text-[#0F172A]">Pragna Gana</td>
                <td className="py-3.5 px-4 text-slate-700">Class 8</td>
                <td className="py-3.5 px-4 font-mono font-bold text-sm text-[#0F172A]">0</td>
                <td className="py-3.5 px-4 text-[#702E42] font-semibold">Application of Knowledge</td>
                <td className="py-3.5 px-4 text-slate-700">Shastrartha Philosophical Debates</td>
                <td className="py-3.5 px-4"><span className="text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full text-[11px] font-bold">Intake Scheduled</span></td>
              </tr>
              <tr className="hover:bg-[#FAF9F6]/50">
                <td className="py-3.5 px-4 font-serif font-bold text-base text-[#0F172A]">Pratibha Gana</td>
                <td className="py-3.5 px-4 text-slate-700">Class 9</td>
                <td className="py-3.5 px-4 font-mono font-bold text-sm text-[#0F172A]">1</td>
                <td className="py-3.5 px-4 text-[#702E42] font-semibold">Skill & Expression</td>
                <td className="py-3.5 px-4 text-slate-700">Prathama Univ. Examination Distinction</td>
                <td className="py-3.5 px-4"><span className="text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full text-[11px] font-bold">Flourishing</span></td>
              </tr>
              <tr className="hover:bg-[#FAF9F6]/50">
                <td className="py-3.5 px-4 font-serif font-bold text-base text-[#0F172A]">Dhruti Gana</td>
                <td className="py-3.5 px-4 text-slate-700">Class 10 (SSLC)</td>
                <td className="py-3.5 px-4 font-mono font-bold text-sm text-[#0F172A]">0</td>
                <td className="py-3.5 px-4 text-[#702E42] font-semibold">Fortitude & Steadfastness</td>
                <td className="py-3.5 px-4 text-slate-700">Kavya Sanskrit Degree & State Board SSLC</td>
                <td className="py-3.5 px-4"><span className="text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full text-[11px] font-bold">Batch Advance</span></td>
              </tr>
              <tr className="hover:bg-[#FAF9F6]/50">
                <td className="py-3.5 px-4 font-serif font-bold text-base text-[#0F172A]">Dhee Gana</td>
                <td className="py-3.5 px-4 text-slate-700">1st & 2nd PUC</td>
                <td className="py-3.5 px-4 font-mono font-bold text-sm text-[#0F172A]">1</td>
                <td className="py-3.5 px-4 text-[#702E42] font-semibold">Higher Spiritual Wisdom</td>
                <td className="py-3.5 px-4 text-slate-700">Complete 3,978 Sutras & Sahitya Mastery</td>
                <td className="py-3.5 px-4"><span className="text-[#80142C] bg-[#80142C]/10 px-2.5 py-1 rounded-full text-[11px] font-bold">Graduating Scholar</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Children Requiring Attention */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#D5B989]/30 shadow-sm space-y-5">
        <div className="flex items-center justify-between border-b border-[#D5B989]/20 pb-4">
          <div className="flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-[#80142C]" />
            <h3 className="text-xl font-serif font-bold text-[#0F172A]">
              2. Student Guidance & Follow-Up Ledger
            </h3>
          </div>
          <span className="text-xs font-mono font-bold text-[#80142C] bg-[#80142C]/10 px-3 py-1 rounded-full">
            {(reports?.followUpRequired || []).length} Inquiries
          </span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {(reports?.followUpRequired || []).map((item, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-[#FAF9F6] border border-[#D5B989]/40 space-y-2.5 text-xs">
              <div className="flex items-center justify-between">
                <span className="font-serif font-black text-lg text-[#0F172A]">{item.studentName}</span>
                <span className="px-3 py-1 rounded-full bg-[#0F172A] text-[#F59E0B] font-mono text-[11px] font-bold">
                  Due: {item.followUpDate}
                </span>
              </div>
              <p className="text-slate-800 leading-relaxed italic text-sm">
                "{item.note}"
              </p>
              <div className="text-[11px] text-[#702E42] font-semibold flex items-center justify-between pt-2 border-t border-[#D5B989]/20">
                <span>{item.currentGana}</span>
                <span className="text-slate-500 font-normal">Mentor: {item.user}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
