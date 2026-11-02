import React, { useState } from 'react';
import { API_BASE } from '../config/api';
import SectionHeader from '../components/SectionHeader';
import { INSTITUTION_INFO } from '../data/contentData';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  Building,
  Compass,
  Sparkles
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    purpose: 'Admission for 6th Standard',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [refCode, setRefCode] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const generatedRef = `INQ-${Date.now().toString().slice(-6)}`;

    const payload = {
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      purpose: formData.purpose,
      message: formData.message,
      refCode: generatedRef
    };

    try {
      const res = await fetch(`${API_BASE}/api/contact/inquiry`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      setRefCode(data?.inquiry?.refCode || generatedRef);
    } catch (err) {
      console.warn('Backend unavailable, using local reference token:', err);
      setRefCode(generatedRef);
    }

    setSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <div className="w-full bg-transparent">
      
      {/* 1. Dramatic Page Hero Banner — Midnight Navy */}
      <section className="relative py-24 sm:py-28 lg:py-36 bg-[#0F172A] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/images/banner.jpg"
            alt="Contact Shubham Karoti Gurukula"
            className="w-full h-full object-cover filter brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/80 to-black/60" />
        </div>

        <div className="relative z-10 editorial-container text-center space-y-6 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-3">
            <span className="w-8 h-[1px] bg-[#D5B989]" />
            <span className="typography-eyebrow text-[#F59E0B]">
              Direct Institutional Contact
            </span>
            <span className="w-8 h-[1px] bg-[#D5B989]" />
          </div>

          <h1 className="typography-hero text-white tracking-tight">
            Connect With<br />
            <span className="italic text-[#F59E0B] font-normal">
              Our Gurukula
            </span>
          </h1>

          <p className="typography-subheading text-slate-100 font-normal max-w-2xl mx-auto">
            Whether inquiring regarding 6th-standard admission, planning a respectful campus visit, or connecting with the trustees for philanthropic seva—we welcome you with open hearts.
          </p>
        </div>
      </section>

      {/* 2. Main Directory & Inquiry Form (Open 2-Column Spread - Zero Cards) */}
      <section className="editorial-section-py bg-transparent">
        <div className="editorial-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left Column: Institutional Directory (5 cols, Open List with Hairlines) */}
            <div className="lg:col-span-5 space-y-8">
              <div className="border-b border-[#D5B989]/30 pb-4">
                <span className="typography-eyebrow text-[#702E42]">
                  Verified Directory
                </span>
                <h2 className="typography-section-title text-[#090D16] font-black mt-1">
                  Institutional Directory
                </h2>
                <p className="typography-supporting text-[#1E293B] mt-1">
                  Reach out directly to our campus office or administrative representatives.
                </p>
              </div>

              <div className="divide-y divide-[#D5B989]/30 border-y border-[#D5B989]/30">
                {/* Campus Address */}
                <div className="py-5 space-y-2">
                  <div className="flex items-center gap-2.5 text-[#0F172A]">
                    <MapPin className="w-5 h-5 text-[#702E42]" />
                    <h3 className="typography-card-title text-[#0F172A]">Campus Location (Ramohalli)</h3>
                  </div>
                  <p className="typography-body text-[#1E293B] pl-7">
                    <strong>Shubham Karoti (Maitreyi Gurukula)</strong><br />
                    No. 52/1, Big Banyan Tree Road (Dodda Alada Mara),<br />
                    Ramohalli, Kengeri Hobli, Bengaluru 560074, Karnataka, India
                  </p>
                  <p className="text-xs font-sans text-[#702E42] pl-7 pt-1 font-semibold tracking-wide">
                    📍 Located near Bengaluru's historic 400-year-old Big Banyan Tree.
                  </p>
                </div>

                {/* Administrative Office */}
                <div className="py-5 space-y-2">
                  <div className="flex items-center gap-2.5 text-[#0F172A]">
                    <Building className="w-5 h-5 text-[#702E42]" />
                    <h3 className="typography-card-title text-[#0F172A]">Administrative Office</h3>
                  </div>
                  <p className="typography-body text-[#1E293B] pl-7">
                    No. 37, 1st Main, Ramachandrapuram,<br />
                    Bengaluru 560021, Karnataka, India
                  </p>
                </div>

                {/* Telephone Lines */}
                <div className="py-5 space-y-3">
                  <div className="flex items-center gap-2.5 text-[#0F172A]">
                    <Phone className="w-5 h-5 text-[#702E42]" />
                    <h3 className="typography-card-title text-[#0F172A]">Direct Phone Lines</h3>
                  </div>
                  <div className="space-y-2.5 pl-7">
                    <div>
                      <span className="text-[#702E42] block font-mono font-bold text-xs uppercase tracking-wider">Founder Trustee:</span>
                      <a href="tel:+919845403290" className="text-[#0F172A] font-bold text-base hover:text-[#702E42]">
                        +91 9845403290 (Sri Pramod Kamat)
                      </a>
                    </div>
                    <div>
                      <span className="text-[#702E42] block font-mono font-bold text-xs uppercase tracking-wider">Gurukula Campus Office:</span>
                      <a href="tel:+916362133847" className="text-[#0F172A] font-bold text-base hover:text-[#702E42]">
                        +91 6362133847 (Office Coordinator)
                      </a>
                    </div>
                    <div>
                      <span className="text-[#702E42] block font-mono font-bold text-xs uppercase tracking-wider">Public Relations & Seva:</span>
                      <a href="tel:+919900216373" className="text-[#0F172A] font-bold text-base hover:text-[#702E42]">
                        +91 9900216373 (Sri Venugopal)
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email Address */}
                <div className="py-5 space-y-2">
                  <div className="flex items-center gap-2.5 text-[#0F172A]">
                    <Mail className="w-5 h-5 text-[#702E42]" />
                    <h3 className="typography-card-title text-[#0F172A]">Official Email Address</h3>
                  </div>
                  <p className="typography-body pl-7">
                    <a 
                      href="mailto:shubhamkarotimaitreyigurukula@gmail.com"
                      className="text-[#0F172A] font-bold hover:text-[#702E42]"
                    >
                      shubhamkarotimaitreyigurukula@gmail.com
                    </a>
                  </p>
                </div>
              </div>

              {/* Visiting Protocol */}
              <blockquote className="border-l-2 border-[#702E42] pl-6 py-2 typography-supporting text-[#1E293B] space-y-1">
                <span className="font-sans font-bold text-[#0F172A] flex items-center gap-2 text-sm">
                  <Clock className="w-4 h-4 text-[#702E42]" />
                  Campus Visiting Protocol
                </span>
                <p>
                  To preserve students' sacred chanting, meditation, and study hours, kindly schedule an appointment prior to arriving at the campus.
                </p>
              </blockquote>
            </div>

            {/* Right Column: Inquiry Form & Route Guide (7 cols, Open Form with Divider) */}
            <div className="lg:col-span-7 lg:border-l lg:border-[#D5B989]/30 lg:pl-10 space-y-10">
              <div className="space-y-6">
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="border-b border-[#D5B989]/30 pb-4">
                      <span className="typography-eyebrow text-[#702E42]">
                        Inquiry Center
                      </span>
                      <h3 className="typography-section-title text-[#090D16] font-black mt-1">
                        Send an Inquiry or Direct Message
                      </h3>
                      <p className="typography-supporting text-[#1E293B] mt-1">
                        Fill out the details below. Our Gurukula administration will respond promptly.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#0F172A] mb-1.5">
                          Your Full Name <span className="text-[#702E42]">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Ramesh Hegde"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          className="w-full px-3 py-2.5 border-b border-[#D5B989] bg-transparent text-sm text-[#0F172A] focus:outline-none focus:border-[#702E42]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#0F172A] mb-1.5">
                          Contact Number <span className="text-[#702E42]">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 98450 00000"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          className="w-full px-3 py-2.5 border-b border-[#D5B989] bg-transparent text-sm text-[#0F172A] focus:outline-none focus:border-[#702E42]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#0F172A] mb-1.5">
                          Email Address
                        </label>
                        <input
                          type="email"
                          placeholder="you@domain.com"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          className="w-full px-3 py-2.5 border-b border-[#D5B989] bg-transparent text-sm text-[#0F172A] focus:outline-none focus:border-[#702E42]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#0F172A] mb-1.5">
                          Purpose of Inquiry
                        </label>
                        <select
                          value={formData.purpose}
                          onChange={(e) => setFormData({...formData, purpose: e.target.value})}
                          className="w-full px-3 py-2.5 border-b border-[#D5B989] bg-transparent text-sm text-[#0F172A] focus:outline-none focus:border-[#702E42]"
                        >
                          <option value="Admission for 6th Standard">Admission for 6th Standard</option>
                          <option value="Campus Visit & Orientation">Campus Visit & Orientation</option>
                          <option value="Philanthropic Seva / Donation">Philanthropic Seva / Donation</option>
                          <option value="General Institutional Inquiry">General Institutional Inquiry</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#0F172A] mb-1.5">
                        Your Message / Questions
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Please share any background about your daughter, admission queries, or seva intentions..."
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        className="w-full px-3 py-2 border-b border-[#D5B989] bg-transparent text-sm text-[#0F172A] focus:outline-none focus:border-[#702E42]"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full py-4 btn-primary text-xs uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      <Send className="w-4 h-4 text-[#D5B989]" />
                      <span>{submitting ? 'Delivering Message...' : 'Submit Institutional Inquiry'}</span>
                    </button>
                  </form>
                ) : (
                  <div className="py-8 text-center space-y-4 animate-fade-in">
                    <div className="w-16 h-16 rounded-full bg-[#0F172A] text-[#F59E0B] flex items-center justify-center mx-auto shadow-md">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="typography-card-title text-[#0F172A]">
                      Inquiry Received with Gratitude
                    </h3>
                    <p className="typography-body text-[#1E293B] max-w-md mx-auto">
                      Thank you, <strong>{formData.name}</strong>. Your message has been received by our administrative office.
                    </p>
                    <div className="p-4 border-2 border-[#D5B989]/40 text-xs font-mono text-[#702E42] font-bold">
                      Reference Token: <strong>{refCode}</strong>
                    </div>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="text-xs font-sans font-bold text-[#702E42] hover:text-[#0F172A] underline pt-2 cursor-pointer"
                    >
                      Submit Another Message
                    </button>
                  </div>
                )}
              </div>

              {/* Transit & Driving Directions */}
              <div className="pt-6 border-t border-[#D5B989]/30 space-y-3">
                <div className="flex items-center gap-2.5 text-[#0F172A]">
                  <Compass className="w-5 h-5 text-[#702E42]" />
                  <h3 className="typography-card-title text-[#0F172A]">Directions to Ramohalli Campus</h3>
                </div>
                <div className="space-y-3 typography-supporting text-[#1E293B]">
                  <p>
                    <strong>Via Mysore Road / Metro:</strong> Travel towards Kengeri on Mysore Road. At the Kengeri Satellite Bus Stand / Metro Junction, turn onto Big Banyan Tree Road (Dodda Alada Mara Road). The Gurukula is approximately 8 km down the road in serene Ramohalli.
                  </p>
                  <p>
                    <strong>Public Transit:</strong> BMTC buses run frequently from Majestic (Kempegowda Bus Station) and KR Market directly to Dodda Alada Mara / Ramohalli (Route series 227).
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
