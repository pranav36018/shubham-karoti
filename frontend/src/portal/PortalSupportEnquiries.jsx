import React, { useState, useEffect } from 'react';
import { API_BASE } from '../config/api';
import { 
  Heart, 
  Search, 
  Phone, 
  Mail, 
  MapPin, 
  Calendar, 
  CheckCircle2, 
  Clock,
  Sparkles
} from 'lucide-react';

export default function PortalSupportEnquiries() {
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const loadEnquiries = () => {
    fetch(`${API_BASE}/api/support-enquiries`)
      .then(res => res.json())
      .then(data => {
        setEnquiries(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error loading enquiries:', err);
        setLoading(false);
      });
  };

  useEffect(() => {
    loadEnquiries();
  }, []);

  const handleStatusUpdate = async (id, newStatus) => {
    try {
      const res = await fetch(`${API_BASE}/api/support-enquiries/${id}/status`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus })
      });
      if (res.ok) {
        loadEnquiries();
      }
    } catch (err) {
      console.error('Status update failed:', err);
    }
  };

  const filtered = enquiries.filter(e => 
    (e.name || '').toLowerCase().includes(search.toLowerCase()) ||
    (e.refCode || '').toLowerCase().includes(search.toLowerCase()) ||
    (e.sevaTitle || '').toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-8 max-w-7xl mx-auto font-sans">
      
      {/* Header */}
      <div className="border-b border-[#D5B989]/30 pb-6">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#80142C]" />
          <span className="text-xs font-mono font-bold text-[#702E42] uppercase tracking-wider block">
            Philanthropic Registry
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-serif font-black text-[#0F172A] tracking-tight mt-1">
          Public Support & Seva Pledges
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 mt-0.5 max-w-2xl">
          Real-time ledger of sponsorship pledges, Annadana contributions, and education funds from patrons and well-wishers.
        </p>
      </div>

      {/* Search */}
      <div className="max-w-md">
        <input
          type="text"
          placeholder="Search by patron name, ref code, or seva..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-2.5 rounded-xl border border-[#D5B989]/40 bg-white text-xs sm:text-sm text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#80142C] transition-all shadow-sm"
        />
      </div>

      {/* Enquiries Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map((enq) => (
          <div key={enq.id} className="bg-white p-6 rounded-2xl border border-[#D5B989]/30 shadow-sm hover:shadow-md transition-all space-y-4 flex flex-col justify-between group">
            <div className="space-y-3">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <span className="font-mono text-[11px] font-bold text-[#702E42] block uppercase tracking-wider">
                    Ref: {enq.refCode} • {enq.date}
                  </span>
                  <h3 className="text-xl font-serif font-black text-[#0F172A] group-hover:text-[#80142C] transition-colors mt-0.5">
                    {enq.name}
                  </h3>
                  <span className="text-xs text-slate-500">{enq.city}</span>
                </div>

                <select
                  value={enq.status}
                  onChange={(e) => handleStatusUpdate(enq.id, e.target.value)}
                  className="px-3 py-1.5 text-xs font-sans font-bold rounded-lg bg-[#FAF9F6] border border-[#D5B989] text-[#0F172A] cursor-pointer focus:outline-none"
                >
                  <option value="New">New</option>
                  <option value="Followed Up">Followed Up</option>
                  <option value="Receipt Sent">Receipt Sent</option>
                  <option value="Completed">Completed</option>
                </select>
              </div>

              <div className="p-4 rounded-xl bg-[#FAF9F6] border border-[#D5B989]/30 text-xs space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-serif font-bold text-sm text-[#0F172A]">{enq.sevaTitle}</span>
                  <span className="font-mono font-black text-base text-[#80142C]">₹{enq.amount.toLocaleString('en-IN')}</span>
                </div>
                <p className="flex items-center gap-2 text-slate-700 pt-1">
                  <Phone className="w-3.5 h-3.5 text-[#80142C] shrink-0" />
                  <span>{enq.phone} {enq.email && `• ${enq.email}`}</span>
                </p>
              </div>

              {enq.notes && (
                <p className="text-xs text-slate-700 italic bg-[#FAF9F6] p-3 rounded-lg border border-[#D5B989]/20 leading-relaxed">
                  "{enq.notes}"
                </p>
              )}
            </div>

            <div className="pt-3 border-t border-[#D5B989]/20 text-[11px] text-slate-500 flex items-center justify-between">
              <span>Status: <strong className="text-[#0F172A]">{enq.status}</strong></span>
              <span className="font-bold text-[#80142C]">Direct Trustee Review</span>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
