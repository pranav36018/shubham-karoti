import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { API_BASE } from '../config/api';
import { 
  Eye, 
  Sparkles, 
  CheckCircle2, 
  Calendar, 
  Clock, 
  Tag, 
  Send,
  User,
  Heart
} from 'lucide-react';

const QUICK_TAGS = [
  "Sanskrit Fluency",
  "High Attention",
  "Quick Grasping",
  "Panini Memorization",
  "Bharatanatyam Grace",
  "Harikatha Melody",
  "Kho-Kho Agility",
  "Peer Support",
  "Leadership in Seva",
  "Annakshetra Punctuality",
  "Room Neatness",
  "Homesick / Sensitive",
  "Needs Encouragement",
  "Joyful & Settled",
  "Creative Expression"
];

const CATEGORIES = [
  "Academic & Sanskrit",
  "Physical & Yogasana",
  "Emotional & Mental",
  "Traditional Arts",
  "Leadership & Seva"
];

export default function PortalObservations() {
  const { user } = useAuth();
  const [students, setStudents] = useState([]);
  const [selectedStudentId, setSelectedStudentId] = useState("");
  const [category, setCategory] = useState(CATEGORIES[0]);
  const [selectedTags, setSelectedTags] = useState(["Sanskrit Fluency"]);
  const [note, setNote] = useState("");
  const [followUpDate, setFollowUpDate] = useState("");
  const [actionTaken, setActionTaken] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  useEffect(() => {
    fetch(`${API_BASE}/api/students`)
      .then(res => res.json())
      .then(data => {
        setStudents(data);
        if (data.length > 0) {
          setSelectedStudentId(data[0].id);
        }
      })
      .catch(err => console.error('Error loading students:', err));
  }, []);

  const toggleTag = (tg) => {
    if (selectedTags.includes(tg)) {
      setSelectedTags(selectedTags.filter(t => t !== tg));
    } else {
      setSelectedTags([...selectedTags, tg]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedStudentId || !note) {
      alert("Please select a student and enter a short observation note.");
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch(`${API_BASE}/api/students/${selectedStudentId}/observations`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          user: user?.name || "Matrushree Sharada Devi",
          category,
          tags: selectedTags,
          note,
          followUpDate,
          actionTaken
        })
      });

      setSubmitting(false);
      if (res.ok) {
        setSuccessMsg("✓ Observation recorded successfully and saved to student's 360° record!");
        setNote("");
        setFollowUpDate("");
        setActionTaken("");
        setTimeout(() => setSuccessMsg(""), 4000);
      }
    } catch (err) {
      setSubmitting(false);
      console.error('Observation save failed:', err);
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8 font-sans">
      
      {/* Header */}
      <div className="border-b border-[#D5B989]/30 pb-5">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#80142C]" />
          <span className="text-xs font-mono font-bold text-[#702E42] uppercase tracking-wider block">
            Formative Continuous Mentoring
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-serif font-black text-[#0F172A] tracking-tight mt-1">
          Quick Daily Observation
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
          Fast recording with one-tap tags, automated timestamping, and teacher identity attribution.
        </p>
      </div>

      {successMsg && (
        <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs sm:text-sm text-emerald-900 font-semibold flex items-center gap-2.5 shadow-sm">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
          <span>{successMsg}</span>
        </div>
      )}

      {/* Observation Form */}
      <form onSubmit={handleSubmit} className="bg-white p-6 sm:p-8 rounded-3xl border border-[#D5B989]/40 shadow-xl space-y-6">
        
        {/* Step 1: Select Student */}
        <div>
          <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#0F172A] mb-2 flex items-center gap-2">
            <User className="w-4 h-4 text-[#80142C]" />
            Select Gurukula Student *
          </label>
          <select
            value={selectedStudentId}
            onChange={(e) => setSelectedStudentId(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-[#D5B989]/40 bg-[#FAF9F6] text-xs sm:text-sm font-semibold text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#80142C] transition-all"
          >
            {students.map((stu) => (
              <option key={stu.id} value={stu.id}>
                {stu.name} — {stu.currentGana.split('(')[0]} ({stu.rollNo})
              </option>
            ))}
          </select>
        </div>

        {/* Step 2: Select Category */}
        <div>
          <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#0F172A] mb-2 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#80142C]" />
            Developmental Dimension *
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
            {CATEGORIES.map((cat) => (
              <button
                type="button"
                key={cat}
                onClick={() => setCategory(cat)}
                className={`p-3 rounded-xl text-xs font-sans font-bold text-center transition-all cursor-pointer border ${
                  category === cat
                    ? 'bg-[#0F172A] text-white border-[#D5B989] shadow-sm'
                    : 'bg-[#FAF9F6] text-slate-700 border-[#D5B989]/30 hover:border-[#80142C]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Step 3: One-Tap Quick Tags */}
        <div>
          <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#0F172A] mb-2 flex items-center gap-2">
            <Tag className="w-4 h-4 text-[#80142C]" />
            One-Tap Quick Tags (Select Multiple)
          </label>
          <div className="flex flex-wrap gap-2">
            {QUICK_TAGS.map((tg) => {
              const isSelected = selectedTags.includes(tg);
              return (
                <button
                  type="button"
                  key={tg}
                  onClick={() => toggleTag(tg)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer border ${
                    isSelected
                      ? 'bg-[#80142C] text-white font-bold border-[#80142C] shadow-sm'
                      : 'bg-[#FAF9F6] text-slate-700 border-[#D5B989]/30 hover:border-[#80142C]'
                  }`}
                >
                  {isSelected ? '✓ ' : '+ '}{tg}
                </button>
              );
            })}
          </div>
        </div>

        {/* Step 4: Short Note Field */}
        <div>
          <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#0F172A] mb-2">
            Observation Narrative Note *
          </label>
          <textarea
            rows="3"
            required
            placeholder="e.g. Demonstrated exceptional focus in Amarakosha recitation today; cheerful interaction with peers during morning Annakshetra seva..."
            value={note}
            onChange={(e) => setNote(e.target.value)}
            className="w-full p-4 rounded-xl border border-[#D5B989]/40 bg-[#FAF9F6] text-xs sm:text-sm text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#80142C] transition-all"
          />
        </div>

        {/* Step 5: Schedule Follow-up Date */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#0F172A] mb-1.5">
              Schedule Follow-up Date (Optional)
            </label>
            <input
              type="date"
              value={followUpDate}
              onChange={(e) => setFollowUpDate(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-[#D5B989]/40 bg-[#FAF9F6] text-xs text-[#0F172A]"
            />
          </div>
          <div>
            <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#0F172A] mb-1.5">
              Corrective / Follow-up Action
            </label>
            <input
              type="text"
              placeholder="e.g. Review in next week's assembly"
              value={actionTaken}
              onChange={(e) => setActionTaken(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-[#D5B989]/40 bg-[#FAF9F6] text-xs text-[#0F172A]"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={submitting}
          className="w-full py-3.5 px-4 rounded-xl bg-[#80142C] hover:bg-[#9B1D36] text-white text-xs sm:text-sm font-sans font-bold uppercase tracking-wider shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 border border-[#D5B989]/40"
        >
          <Send className="w-4 h-4 text-[#F59E0B]" />
          <span>{submitting ? 'Recording...' : 'Record Observation Now'}</span>
        </button>

        <p className="text-[11px] text-center text-slate-500 font-sans">
          Auto-attributed to <strong>{user?.name || "Matrushree Sharada Devi"}</strong> with live institutional timestamp.
        </p>

      </form>

    </div>
  );
}
