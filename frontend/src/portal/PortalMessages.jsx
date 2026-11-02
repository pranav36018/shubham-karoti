import React, { useState, useEffect } from 'react';
import { API_BASE } from '../config/api';
import { 
  Mail, 
  Search, 
  Phone, 
  Calendar, 
  CheckCircle2, 
  MessageSquare
} from 'lucide-react';

export default function PortalMessages() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const loadMessages = () => {
    fetch(`${API_BASE}/api/contact-messages`)
      .then(res => res.json())
      .then(data => {
        setMessages(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error loading messages:', err);
        setLoading(false);
      });
  };

  useEffect(() => {
    loadMessages();
  }, []);

  const handleStatusUpdate = async (id, newStatus) => {
    try {
      const res = await fetch(`${API_BASE}/api/contact-messages/${id}/status`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus })
      });
      if (res.ok) {
        loadMessages();
      }
    } catch (err) {
      console.error('Status update failed:', err);
    }
  };

  const filtered = messages.filter(m =>
    (m.name || '').toLowerCase().includes(search.toLowerCase()) ||
    (m.purpose || '').toLowerCase().includes(search.toLowerCase()) ||
    (m.token || '').toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-8 max-w-7xl mx-auto font-sans">
      
      {/* Header */}
      <div className="border-b border-[#D5B989]/30 pb-6">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#80142C]" />
          <span className="text-xs font-mono font-bold text-[#702E42] uppercase tracking-wider block">
            Public Correspondence Desk
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-serif font-black text-[#0F172A] tracking-tight mt-1">
          Inbound Inquiries & Correspondence
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 mt-0.5 max-w-2xl">
          Review incoming questions regarding Class 6 admission eligibility, guest campus visits, volunteering, and public communication.
        </p>
      </div>

      <div className="max-w-md">
        <input
          type="text"
          placeholder="Search by sender name, purpose, or reference token..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-2.5 rounded-xl border border-[#D5B989]/40 bg-white text-xs sm:text-sm text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#80142C] transition-all shadow-sm"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map((msg) => (
          <div key={msg.id} className="bg-white p-6 rounded-2xl border border-[#D5B989]/30 shadow-sm hover:shadow-md transition-all space-y-4 flex flex-col justify-between group">
            <div className="space-y-3">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <span className="font-mono text-[11px] font-bold text-[#702E42] block uppercase tracking-wider">
                    {msg.token} • {msg.date}
                  </span>
                  <h3 className="text-xl font-serif font-black text-[#0F172A] group-hover:text-[#80142C] transition-colors mt-0.5">
                    {msg.name}
                  </h3>
                  <span className="inline-block mt-1 px-2.5 py-0.5 rounded-full bg-[#0F172A]/10 text-[#0F172A] font-bold text-[10px] uppercase tracking-wider">
                    {msg.purpose}
                  </span>
                </div>

                <select
                  value={msg.status}
                  onChange={(e) => handleStatusUpdate(msg.id, e.target.value)}
                  className="px-3 py-1.5 text-xs font-sans font-bold rounded-lg bg-[#FAF9F6] border border-[#D5B989] text-[#0F172A] cursor-pointer focus:outline-none"
                >
                  <option value="New">New</option>
                  <option value="Responded">Responded</option>
                  <option value="Archived">Archived</option>
                </select>
              </div>

              <div className="text-xs text-slate-700 space-y-1.5 pt-1">
                <p className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#80142C] shrink-0" />
                  <span>{msg.phone}</span>
                </p>
                {msg.email && (
                  <p className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-[#80142C] shrink-0" />
                    <span>{msg.email}</span>
                  </p>
                )}
              </div>

              <p className="text-xs sm:text-sm text-slate-800 p-4 rounded-xl bg-[#FAF9F6] border border-[#D5B989]/30 leading-relaxed italic">
                "{msg.message}"
              </p>
            </div>

            <div className="pt-3 border-t border-[#D5B989]/20 text-[11px] text-slate-500 flex items-center justify-between">
              <span>Status: <strong className="text-[#0F172A]">{msg.status}</strong></span>
              <span className="font-bold text-[#80142C]">Official Follow-up</span>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
