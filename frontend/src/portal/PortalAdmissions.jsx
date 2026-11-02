import React, { useState, useEffect } from 'react';
import { API_BASE } from '../config/api';
import { 
  UserPlus, 
  Search, 
  Filter, 
  CheckCircle2, 
  Clock, 
  Phone, 
  MapPin, 
  Calendar, 
  FileText, 
  GraduationCap,
  Sparkles,
  ChevronRight,
  X
} from 'lucide-react';

const STAGES = [
  "All",
  "Application Received",
  "Selected for Interview",
  "Invited",
  "Selected as Student",
  "To be Followed Up Later",
  "Not Interested",
  "Not Eligible",
  "Admission Not Taken"
];

export default function PortalAdmissions() {
  const [admissions, setAdmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedStage, setSelectedStage] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [convertingId, setConvertingId] = useState(null);
  const [successMsg, setSuccessMsg] = useState("");

  const [newApplicant, setNewApplicant] = useState({
    childName: "",
    dob: "2015-05-01",
    age: 11,
    currentGrade: "5th Standard (Passed)",
    nativeVillage: "",
    parentName: "",
    parentPhone: "",
    parentOccupation: "",
    howKnown: "Alumni Recommendation",
    interviewDate: "",
    stage: "Application Received",
    observations: "",
    nextAction: "Schedule preliminary orientation",
    followUpDate: "",
    notes: ""
  });

  const loadAdmissions = () => {
    fetch(`${API_BASE}/api/admissions`)
      .then(res => res.json())
      .then(data => {
        setAdmissions(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to load admissions:', err);
        setLoading(false);
      });
  };

  useEffect(() => {
    loadAdmissions();
  }, []);

  const handleStageUpdate = async (id, newStage) => {
    try {
      const res = await fetch(`${API_BASE}/api/admissions/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ stage: newStage })
      });
      if (res.ok) {
        setSuccessMsg(`Status updated to "${newStage}"`);
        setTimeout(() => setSuccessMsg(""), 3000);
        loadAdmissions();
      }
    } catch (err) {
      console.error('Update failed:', err);
    }
  };

  // Convert to Gurukula Student
  const handleConvertToStudent = async (id, name) => {
    if (!window.confirm(`Admit ${name} into Shubham Karoti Maitreyi Gurukula as an active student in Shradha Gana?`)) {
      return;
    }
    setConvertingId(id);
    try {
      const res = await fetch(`${API_BASE}/api/admissions/${id}/convert-to-student`, {
        method: 'POST'
      });
      const data = await res.json();
      if (res.ok) {
        setSuccessMsg(`Successfully admitted ${name} into Gurukula as Student (Roll No: ${data.student?.rollNo || 'Created'})!`);
        setTimeout(() => setSuccessMsg(""), 4000);
        loadAdmissions();
      } else {
        alert(data.error || 'Failed to convert applicant to student.');
      }
    } catch (err) {
      console.error('Conversion failed:', err);
      alert('Network error during student admission.');
    } finally {
      setConvertingId(null);
    }
  };

  const handleCreateApplicant = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${API_BASE}/api/admissions`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newApplicant)
      });
      if (res.ok) {
        setShowModal(false);
        setSuccessMsg(`Registered applicant: ${newApplicant.childName}`);
        setTimeout(() => setSuccessMsg(""), 3000);
        setNewApplicant({
          childName: "",
          dob: "2015-05-01",
          age: 11,
          currentGrade: "5th Standard (Passed)",
          nativeVillage: "",
          parentName: "",
          parentPhone: "",
          parentOccupation: "",
          howKnown: "Alumni Recommendation",
          interviewDate: "",
          stage: "Application Received",
          observations: "",
          nextAction: "Schedule preliminary orientation",
          followUpDate: "",
          notes: ""
        });
        loadAdmissions();
      }
    } catch (err) {
      console.error('Creation failed:', err);
    }
  };

  const filteredAdmissions = admissions.filter(item => {
    const matchesStage = selectedStage === 'All' || item.stage === selectedStage;
    const matchesSearch = !searchQuery || 
      item.childName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.applicationNo.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.nativeVillage.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStage && matchesSearch;
  });

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      
      {/* Top Banner & Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-b border-[#D5B989]/30 pb-6">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#80142C]" />
            <span className="text-xs font-mono font-bold text-[#702E42] uppercase tracking-wider block">
              Admissions Intake Console
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-black text-[#0F172A] tracking-tight">
            Candidate Intake & Admission Pipeline
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 font-sans mt-0.5 max-w-2xl">
            Track applicants through initial verification, family interview, circadian trial, and formal Gurukula student enrollment.
          </p>
        </div>

        <button
          onClick={() => setShowModal(true)}
          className="px-5 py-3 rounded-xl bg-[#80142C] hover:bg-[#9B1D36] text-white text-xs font-sans font-bold uppercase tracking-wider flex items-center gap-2 shadow-md transition-all cursor-pointer border border-[#D5B989]/40 self-start sm:self-auto"
        >
          <UserPlus className="w-4 h-4 text-[#F59E0B]" />
          <span>Register New Applicant</span>
        </button>
      </div>

      {/* Success Notification */}
      {successMsg && (
        <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs sm:text-sm text-emerald-900 font-semibold flex items-center gap-2.5 shadow-sm">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
          <span>{successMsg}</span>
        </div>
      )}

      {/* Controls: Search & Stage Filter Tabs */}
      <div className="space-y-3.5">
        {/* Search Input */}
        <div className="relative max-w-md">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#702E42]" />
          <input
            type="text"
            placeholder="Search by child name, application number, or district..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#D5B989]/40 bg-white text-xs sm:text-sm text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#80142C] transition-all shadow-sm"
          />
        </div>

        {/* Stage Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {STAGES.map((st) => (
            <button
              key={st}
              onClick={() => setSelectedStage(st)}
              className={`shrink-0 px-4 py-2 rounded-xl text-xs font-sans font-bold transition-all cursor-pointer border ${
                selectedStage === st
                  ? 'bg-[#0F172A] text-white border-[#D5B989] shadow-sm'
                  : 'bg-white text-slate-700 border-[#D5B989]/30 hover:border-[#80142C]'
              }`}
            >
              {st}
            </button>
          ))}
        </div>
      </div>

      {/* Admissions Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredAdmissions.map((adm) => (
          <div 
            key={adm.id}
            className="bg-white rounded-2xl p-6 border border-[#D5B989]/30 shadow-sm hover:shadow-md transition-all space-y-4 flex flex-col justify-between group"
          >
            <div className="space-y-3.5">
              {/* Header with App Number & Stage Tag */}
              <div className="flex items-start justify-between gap-3">
                <div>
                  <span className="font-mono text-[11px] font-bold text-[#702E42] uppercase tracking-wider block">
                    {adm.applicationNo} • Received: {adm.enquiryDate}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-serif font-black text-[#0F172A] group-hover:text-[#80142C] transition-colors mt-0.5">
                    {adm.childName}
                  </h3>
                  <span className="text-xs text-slate-500 font-sans block">
                    Age {adm.age} • {adm.currentGrade}
                  </span>
                </div>

                <div className="text-right">
                  <select
                    value={adm.stage}
                    onChange={(e) => handleStageUpdate(adm.id, e.target.value)}
                    className="px-3 py-1.5 text-xs font-sans font-bold rounded-lg bg-[#FAF9F6] border border-[#D5B989] text-[#0F172A] focus:outline-none cursor-pointer"
                  >
                    {STAGES.filter(s => s !== 'All').map(st => (
                      <option key={st} value={st}>{st}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Family & Native Info */}
              <div className="p-4 rounded-xl bg-[#FAF9F6] border border-[#D5B989]/30 text-xs font-sans space-y-1.5 text-slate-700">
                <p className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#80142C] shrink-0" />
                  <span>Native: <strong className="text-[#0F172A]">{adm.nativeVillage}</strong></span>
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#80142C] shrink-0" />
                  <span>Parents: {adm.parentName} ({adm.parentPhone})</span>
                </p>
                <p className="text-[11px] text-slate-500 pl-5.5">
                  Occupation: {adm.parentOccupation || "Agricultural Worker"} • Channel: {adm.howKnown}
                </p>
              </div>

              {/* Observation & Follow-up Note */}
              <div className="space-y-1 text-xs font-sans">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#702E42] block">
                  Intake Assessment Observation:
                </span>
                <p className="text-slate-800 italic bg-[#FAF9F6] p-3 rounded-lg border border-[#D5B989]/30 leading-relaxed">
                  "{adm.observations || "Preliminary review pending."}"
                </p>
              </div>

              {/* Next Action & Follow up Date */}
              <div className="flex flex-wrap items-center justify-between text-xs pt-2 border-t border-[#D5B989]/20 text-slate-600 font-sans">
                <span>
                  Next Action: <strong className="text-[#0F172A]">{adm.nextAction}</strong>
                </span>
                {adm.followUpDate && (
                  <span className="text-[#80142C] font-mono font-bold">
                    Follow-up: {adm.followUpDate}
                  </span>
                )}
              </div>
            </div>

            {/* Action Bar: Convert to Student Button */}
            <div className="pt-3 border-t border-[#D5B989]/20 flex items-center justify-between">
              <span className="text-[11px] font-sans text-slate-500">
                Stage: <strong className="text-[#0F172A]">{adm.stage}</strong>
              </span>

              {adm.stage !== "Selected as Student" ? (
                <button
                  onClick={() => handleConvertToStudent(adm.id, adm.childName)}
                  disabled={convertingId === adm.id}
                  className="px-4 py-2 rounded-lg bg-[#80142C] hover:bg-[#9B1D36] text-white text-xs font-sans font-bold uppercase tracking-wider transition-all shadow-sm flex items-center gap-1.5 cursor-pointer border border-[#D5B989]/30"
                >
                  <GraduationCap className="w-4 h-4 text-[#F59E0B]" />
                  <span>{convertingId === adm.id ? 'Admitting...' : 'Admit Child to Gurukula'}</span>
                </button>
              ) : (
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Admitted as Student
                </span>
              )}
            </div>

          </div>
        ))}
      </div>

      {/* Modal: Register New Applicant */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-[#0F172A]/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl border-2 border-[#D5B989]/40 space-y-5">
            <div className="flex items-center justify-between border-b border-[#D5B989]/30 pb-3">
              <h3 className="text-2xl font-serif font-black text-[#0F172A]">
                Register New Admission Applicant
              </h3>
              <button onClick={() => setShowModal(false)} className="text-slate-400 hover:text-black">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreateApplicant} className="space-y-4 text-xs font-sans">
              <div>
                <label className="block font-bold text-[#0F172A] uppercase tracking-wider mb-1">Child's Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Kumari..."
                  value={newApplicant.childName}
                  onChange={(e) => setNewApplicant({...newApplicant, childName: e.target.value})}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#D5B989]/40 text-sm focus:outline-none focus:ring-2 focus:ring-[#80142C]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-[#0F172A] uppercase tracking-wider mb-1">Date of Birth</label>
                  <input
                    type="date"
                    value={newApplicant.dob}
                    onChange={(e) => setNewApplicant({...newApplicant, dob: e.target.value})}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#D5B989]/40 text-sm focus:outline-none focus:ring-2 focus:ring-[#80142C]"
                  />
                </div>
                <div>
                  <label className="block font-bold text-[#0F172A] uppercase tracking-wider mb-1">Native Village *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Malavalli, Mandya"
                    value={newApplicant.nativeVillage}
                    onChange={(e) => setNewApplicant({...newApplicant, nativeVillage: e.target.value})}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#D5B989]/40 text-sm focus:outline-none focus:ring-2 focus:ring-[#80142C]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-[#0F172A] uppercase tracking-wider mb-1">Parent / Guardian Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Father / Mother name"
                    value={newApplicant.parentName}
                    onChange={(e) => setNewApplicant({...newApplicant, parentName: e.target.value})}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#D5B989]/40 text-sm focus:outline-none focus:ring-2 focus:ring-[#80142C]"
                  />
                </div>
                <div>
                  <label className="block font-bold text-[#0F172A] uppercase tracking-wider mb-1">Parent Phone *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91..."
                    value={newApplicant.parentPhone}
                    onChange={(e) => setNewApplicant({...newApplicant, parentPhone: e.target.value})}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#D5B989]/40 text-sm focus:outline-none focus:ring-2 focus:ring-[#80142C]"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-[#0F172A] uppercase tracking-wider mb-1">Observations during Interview</label>
                <textarea
                  rows="3"
                  placeholder="Memory retention, musical interest, family commitment..."
                  value={newApplicant.observations}
                  onChange={(e) => setNewApplicant({...newApplicant, observations: e.target.value})}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#D5B989]/40 text-sm focus:outline-none focus:ring-2 focus:ring-[#80142C]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-[#0F172A] uppercase tracking-wider mb-1">Follow-up Date</label>
                  <input
                    type="date"
                    value={newApplicant.followUpDate}
                    onChange={(e) => setNewApplicant({...newApplicant, followUpDate: e.target.value})}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#D5B989]/40 text-sm focus:outline-none focus:ring-2 focus:ring-[#80142C]"
                  />
                </div>
                <div>
                  <label className="block font-bold text-[#0F172A] uppercase tracking-wider mb-1">Initial Status</label>
                  <select
                    value={newApplicant.stage}
                    onChange={(e) => setNewApplicant({...newApplicant, stage: e.target.value})}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#D5B989]/40 text-sm focus:outline-none focus:ring-2 focus:ring-[#80142C]"
                  >
                    {STAGES.filter(s => s !== 'All').map(st => (
                      <option key={st} value={st}>{st}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="pt-3 flex items-center justify-end gap-3 border-t border-[#D5B989]/30">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-5 py-2.5 rounded-xl border border-[#D5B989]/40 text-slate-600 font-bold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-[#80142C] text-white font-sans font-bold uppercase tracking-wider shadow-md hover:bg-[#9B1D36] transition-all"
                >
                  Save Applicant
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
