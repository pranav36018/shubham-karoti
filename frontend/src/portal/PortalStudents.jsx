import React, { useState, useEffect } from 'react';
import { API_BASE } from '../config/api';
import { 
  GraduationCap, 
  Search, 
  BookOpen, 
  HeartPulse, 
  Sparkles, 
  ShieldCheck, 
  MessageSquare, 
  User, 
  MapPin, 
  Calendar,
  X,
  Phone,
  CheckCircle2,
  Award
} from 'lucide-react';

const GANAS = [
  "All",
  "Shradha Gana",
  "Medha Gana",
  "Pragna Gana",
  "Pratibha Gana",
  "Dhruti Gana",
  "Dhee Gana"
];

export default function PortalStudents() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedGana, setSelectedGana] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStudent, setSelectedStudent] = useState(null);

  const loadStudents = () => {
    fetch(`${API_BASE}/api/students`)
      .then(res => res.json())
      .then(data => {
        setStudents(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to load students:', err);
        setLoading(false);
      });
  };

  useEffect(() => {
    loadStudents();
  }, []);

  const filteredStudents = students.filter(s => {
    const matchesGana = selectedGana === 'All' || (s.currentGana || '').toLowerCase().includes(selectedGana.toLowerCase());
    const matchesSearch = !searchQuery ||
      (s.name || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
      (s.rollNo || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
      (s.native || '').toLowerCase().includes(searchQuery.toLowerCase());
    return matchesGana && matchesSearch;
  });

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      
      {/* Header */}
      <div className="border-b border-[#D5B989]/30 pb-6">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#80142C]" />
          <span className="text-xs font-mono font-bold text-[#702E42] uppercase tracking-wider block">
            Holistic Student Directory
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-serif font-black text-[#0F172A] tracking-tight mt-1">
          Gurukula Students Directory
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 font-sans mt-0.5 max-w-2xl">
          Comprehensive 360° progress tracking across academics, spoken Sanskrit fluency, Panini sutra mastery, health, classical arts, and character dimensions.
        </p>
      </div>

      {/* Controls: Search & Gana Filter Tabs */}
      <div className="space-y-3.5">
        <div className="relative max-w-md">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#702E42]" />
          <input
            type="text"
            placeholder="Search by student name, roll number, or district..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#D5B989]/40 bg-white text-xs sm:text-sm text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#80142C] transition-all shadow-sm"
          />
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {GANAS.map((g) => (
            <button
              key={g}
              onClick={() => setSelectedGana(g)}
              className={`shrink-0 px-4 py-2 rounded-xl text-xs font-sans font-bold transition-all cursor-pointer border ${
                selectedGana === g
                  ? 'bg-[#0F172A] text-white border-[#D5B989] shadow-sm'
                  : 'bg-white text-slate-700 border-[#D5B989]/30 hover:border-[#80142C]'
              }`}
            >
              {g}
            </button>
          ))}
        </div>
      </div>

      {/* Student Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredStudents.map((stu) => (
          <div
            key={stu.id}
            onClick={() => setSelectedStudent(stu)}
            className="group bg-white rounded-2xl overflow-hidden border border-[#D5B989]/30 hover:border-[#80142C] shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col justify-between"
          >
            {/* Top Avatar Banner */}
            <div className="p-5 bg-[#FAF9F6] border-b border-[#D5B989]/30 flex items-center gap-4">
              <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#D5B989] bg-[#0F172A] shrink-0 shadow-sm">
                <img
                  src={stu.avatar}
                  alt={stu.name}
                  className="w-full h-full object-cover"
                  onError={(e) => { e.target.src = '/assets/images/banner.jpg'; }}
                />
              </div>
              <div className="overflow-hidden">
                <span className="font-mono text-[10px] font-bold text-[#702E42] block uppercase tracking-wider">
                  {stu.rollNo} • Enrolled {stu.admissionYear}
                </span>
                <h3 className="text-lg font-serif font-black text-[#0F172A] truncate group-hover:text-[#80142C] transition-colors mt-0.5">
                  {stu.name}
                </h3>
                <span className="text-xs text-slate-500 font-sans block truncate">
                  {stu.native}
                </span>
              </div>
            </div>

            {/* Middle: 6-Dimension Highlights */}
            <div className="p-5 space-y-3 text-xs font-sans">
              <div className="flex items-center justify-between">
                <span className="text-[#702E42] font-semibold">Current Gana:</span>
                <span className="px-3 py-1 rounded-full bg-[#0F172A] text-[#F59E0B] font-mono font-bold text-[11px]">
                  {stu.currentGana.split('(')[0]}
                </span>
              </div>

              <div className="space-y-1.5 pt-2 border-t border-[#D5B989]/20">
                <div className="flex items-center justify-between">
                  <span className="text-slate-600">Panini Sutras:</span>
                  <span className="font-mono font-bold text-[#0F172A]">{stu.academics.paniniSutrasMemorized} / 3978</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-600">Sanskrit Univ:</span>
                  <span className="font-semibold text-[#0F172A]">{stu.academics.sanskritUniversityLevel.split(' ')[0]}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-600">Classical Dance:</span>
                  <span className="font-semibold text-[#0F172A] truncate max-w-[150px]">{stu.skills.bharatanatyam}</span>
                </div>
              </div>

              {/* Latest Mentor Tag */}
              {stu.observations && stu.observations.length > 0 && (
                <div className="pt-2 border-t border-[#D5B989]/20 text-[11px] text-[#702E42] italic truncate">
                  Latest Note: "{stu.observations[0].note}"
                </div>
              )}
            </div>

            {/* Bottom Card Footer */}
            <div className="px-5 py-3.5 bg-[#FAF9F6] border-t border-[#D5B989]/30 flex items-center justify-between text-xs text-[#0F172A] font-bold">
              <span>View Full 360° Profile</span>
              <span className="text-[#80142C] font-mono group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </div>
        ))}
      </div>

      {/* Modal: Full 360° Student Journey Profile */}
      {selectedStudent && (
        <div className="fixed inset-0 z-50 bg-[#0F172A]/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 sm:p-10 max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border-2 border-[#D5B989]/40 space-y-6">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-[#D5B989]/30 pb-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#D5B989] bg-[#0F172A] shrink-0">
                  <img
                    src={selectedStudent.avatar}
                    alt={selectedStudent.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <span className="font-mono text-xs font-bold text-[#702E42] block uppercase tracking-wider">
                    {selectedStudent.rollNo} • Enrolled {selectedStudent.admissionYear}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-serif font-black text-[#0F172A]">
                    {selectedStudent.name}
                  </h2>
                  <span className="text-xs text-slate-500 font-sans">
                    {selectedStudent.currentGana} • Native: {selectedStudent.native}
                  </span>
                </div>
              </div>

              <button
                onClick={() => setSelectedStudent(null)}
                className="p-1 rounded-full text-slate-400 hover:text-black hover:bg-slate-100 cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* 3-Board Examination Track */}
            <div className="p-5 rounded-2xl bg-[#FAF9F6] border border-[#D5B989]/40 space-y-3 font-sans text-xs">
              <h4 className="font-mono font-bold uppercase tracking-wider text-[#0F172A] flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[#80142C]" />
                1. Three Examination System Progress
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-3.5 rounded-xl bg-white border border-[#D5B989]/30">
                  <span className="text-[#702E42] font-mono font-bold block text-[10px] uppercase">State Board</span>
                  <p className="font-bold text-[#0F172A] mt-1">{selectedStudent.academics.stateBoardProgress}</p>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-[#D5B989]/30">
                  <span className="text-[#702E42] font-mono font-bold block text-[10px] uppercase">Sanskrit University</span>
                  <p className="font-bold text-[#0F172A] mt-1">{selectedStudent.academics.sanskritUniversityLevel}</p>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-[#D5B989]/30">
                  <span className="text-[#702E42] font-mono font-bold block text-[10px] uppercase">Gurukula Canon</span>
                  <p className="font-bold text-[#0F172A] mt-1">{selectedStudent.academics.paniniSutrasMemorized} Sutras / {selectedStudent.academics.amaraKoshaVerses} Verses</p>
                </div>
              </div>
            </div>

            {/* Health & Vitality */}
            <div className="p-5 rounded-2xl bg-[#FAF9F6] border border-[#D5B989]/40 space-y-2 text-xs font-sans">
              <h4 className="font-mono font-bold uppercase tracking-wider text-[#0F172A] flex items-center gap-2">
                <HeartPulse className="w-4 h-4 text-[#80142C]" />
                2. Health, Vitality & Annamaya / Pranamaya State
              </h4>
              <p>General Status: <strong className="text-[#0F172A]">{selectedStudent.health.generalStatus}</strong> • BMI: <strong>{selectedStudent.health.bmi}</strong> • Suryanamaskars: <strong>{selectedStudent.health.suryanamaskarDaily} daily</strong></p>
              <p className="text-slate-600">Recent Checkup: {selectedStudent.health.recentMedicalCheckup}</p>
            </div>

            {/* Skills, Bharatanatyam & Gandhari Vidya */}
            <div className="p-5 rounded-2xl bg-[#FAF9F6] border border-[#D5B989]/40 space-y-2 text-xs font-sans">
              <h4 className="font-mono font-bold uppercase tracking-wider text-[#0F172A] flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#80142C]" />
                3. Traditional Arts, Dance & Concentration Culture
              </h4>
              <p>Bharatanatyam: <strong className="text-[#0F172A]">{selectedStudent.skills.bharatanatyam}</strong></p>
              <p>Music & Harikatha: <strong className="text-[#0F172A]">{selectedStudent.skills.musicAndHarikatha}</strong></p>
              <p>Gandhari Vidya: <strong className="text-[#0F172A]">{selectedStudent.skills.gandhariVidya}</strong></p>
            </div>

            {/* Responsibilities & Campus Seva */}
            <div className="p-5 rounded-2xl bg-[#FAF9F6] border border-[#D5B989]/40 space-y-2 text-xs font-sans">
              <h4 className="font-mono font-bold uppercase tracking-wider text-[#0F172A] flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#0F172A]" />
                4. Campus Responsibilities & Leadership
              </h4>
              <p>Current Role: <strong className="text-[#0F172A]">{selectedStudent.responsibilities.role}</strong></p>
              <p className="text-slate-600">Duties: {selectedStudent.responsibilities.duties}</p>
            </div>

            {/* Teacher Continuous Observations Log */}
            <div className="space-y-3 font-sans">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#0F172A] flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-[#80142C]" />
                5. Continuous Formative Mentoring Log
              </h4>
              <div className="space-y-2.5">
                {(selectedStudent.observations || []).map((obs) => (
                  <div key={obs.id} className="p-4 rounded-xl bg-[#FAF9F6] border border-[#D5B989]/30 text-xs space-y-1.5">
                    <div className="flex items-center justify-between text-[11px] text-[#702E42]">
                      <span className="font-mono">{obs.date} • {obs.time} • By: {obs.user}</span>
                      <span className="font-bold">{obs.category}</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5 pt-0.5">
                      {obs.tags.map((tg, i) => (
                        <span key={i} className="px-2.5 py-0.5 rounded-full bg-[#0F172A]/10 text-[#0F172A] text-[10px] font-bold">
                          #{tg}
                        </span>
                      ))}
                    </div>
                    <p className="text-slate-800 leading-relaxed pt-1 italic font-serif text-sm">
                      "{obs.note}"
                    </p>
                    {obs.followUpDate && (
                      <p className="text-[11px] text-[#80142C] font-mono font-bold">
                        Follow-up scheduled: {obs.followUpDate}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
