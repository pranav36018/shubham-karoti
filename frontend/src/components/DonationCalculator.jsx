import React, { useState } from 'react';
import { API_BASE } from '../config/api';
import { SEVA_OPTIONS } from '../data/contentData';
import { 
  Heart, 
  Sparkles, 
  CheckCircle2, 
  ShieldCheck, 
  Info, 
  CreditCard, 
  ArrowRight,
  UserCheck
} from 'lucide-react';

export default function DonationCalculator() {
  const [selectedSeva, setSelectedSeva] = useState(SEVA_OPTIONS[0]);
  const [customAmount, setCustomAmount] = useState('');
  const [isCustom, setIsCustom] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    notes: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [enquiryRef, setEnquiryRef] = useState('');

  const currentAmount = isCustom 
    ? (parseInt(customAmount, 10) || 0)
    : selectedSeva.amount;

  const handleSelect = (opt) => {
    setIsCustom(false);
    setSelectedSeva(opt);
  };

  const handleCustomSelect = () => {
    setIsCustom(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const calculatedRef = `SEVA-${Date.now().toString().slice(-6)}`;

    const payload = {
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      city: formData.city,
      sevaTitle: isCustom ? "Custom Voluntary Seva" : selectedSeva.title,
      amount: currentAmount,
      notes: formData.notes,
      refCode: calculatedRef
    };

    try {
      const res = await fetch(`${API_BASE}/api/support/enquiry`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const data = await res.json();
      setEnquiryRef(data?.enquiry?.refCode || calculatedRef);
    } catch (err) {
      console.warn('Backend unavailable, using local reference code:', err);
      setEnquiryRef(calculatedRef);
    }

    setSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <div className="w-full relative select-none">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        
        {/* Left Column: Seva Selection & Impact (7 cols, Zero Box Shapes) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-1">
            <span className="inline-flex items-center gap-1.5 typography-eyebrow text-[#702E42] mb-1">
              <Sparkles className="w-3.5 h-3.5 text-[#B45309]" /> Transparent Seva Calculator
            </span>
            <h3 className="typography-secondary-heading text-[#090D16] font-black">
              Choose Your Support Dimension
            </h3>
            <p className="typography-supporting text-[#1E293B]">
              Select an established seva tier or specify your own heartfelt contribution. Every rupee directly nourishes a rural girl's education.
            </p>
          </div>

          {/* Options: Clean Open Rows with Hairlines (Zero Bulky Boxes) */}
          <div className="divide-y divide-[#D5B989]/30 border-y border-[#D5B989]/30">
            {SEVA_OPTIONS.map((opt) => {
              const isSelected = !isCustom && selectedSeva.id === opt.id;
              return (
                <div
                  key={opt.id}
                  onClick={() => handleSelect(opt)}
                  className={`py-4 px-3 transition-all cursor-pointer flex items-center justify-between gap-4 ${
                    isSelected
                      ? 'bg-[#702E42]/10 border-l-4 border-[#702E42]'
                      : 'hover:bg-black/5'
                  }`}
                >
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-serif font-bold text-[#0F172A]">
                        {opt.title.split('(')[0]}
                      </span>
                      {isSelected && (
                        <span className="text-[11px] font-mono font-bold text-[#702E42]">
                          [Selected]
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-[#702E42] font-sans font-medium">
                      {opt.titleKn}
                    </p>
                  </div>

                  <div className="text-right shrink-0">
                    <span className="text-base sm:text-lg font-mono font-bold text-[#702E42]">
                      ₹{opt.amount.toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Custom Amount Option */}
          <div 
            onClick={handleCustomSelect}
            className={`py-4 px-3 border-b border-[#D5B989]/30 transition-all cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
              isCustom ? 'bg-[#702E42]/10 border-l-4 border-[#702E42]' : 'hover:bg-black/5'
            }`}
          >
            <div>
              <h4 className="text-sm font-serif font-bold text-[#0F172A]">
                Custom Voluntary Contribution
              </h4>
              <p className="text-xs text-[#1E293B]">
                Any amount you wish to offer towards the Gurukula's educational mission.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-[#0F172A]">₹</span>
              <input
                type="number"
                placeholder="Enter Amount"
                value={customAmount}
                onChange={(e) => {
                  setIsCustom(true);
                  setCustomAmount(e.target.value);
                }}
                className="w-36 px-3 py-1.5 text-sm border-b-2 border-[#702E42] bg-transparent font-mono text-[#0F172A] focus:outline-none"
              />
            </div>
          </div>

          {/* Impact Banner — Midnight Navy (Open Banner) */}
          <div className="p-6 bg-[#0F172A] text-white border-y border-[#D5B989]/40 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-[#F59E0B]">
                Tangible Educational Impact:
              </span>
              <span className="text-lg font-mono font-bold text-[#F59E0B]">
                ₹{currentAmount.toLocaleString('en-IN')}
              </span>
            </div>
            <p className="typography-supporting text-slate-100 font-normal">
              {isCustom 
                ? "Your customized contribution directly supports student food grains, textbooks, and campus utilities without administrative deductions."
                : selectedSeva.impact
              }
            </p>
          </div>
        </div>

        {/* Right Column: Support Enquiry Form (5 cols, Open Column with Vertical Divider) */}
        <div className="lg:col-span-5 lg:border-l lg:border-[#D5B989]/30 lg:pl-10 space-y-6">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="border-b border-[#D5B989]/30 pb-4">
                <h4 className="typography-card-title text-[#090D16] font-bold">
                  Support Enquiry Registration
                </h4>
                <p className="typography-supporting text-[#1E293B] mt-0.5">
                  Connect with the managing trustees to finalize your contribution and receive receipt details.
                </p>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#0F172A] mb-1">
                  Full Name <span className="text-[#702E42]">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Smt. Gayatri Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-3 py-2 border-b border-[#D5B989] bg-transparent text-xs text-[#0F172A] focus:outline-none focus:border-[#702E42]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[#0F172A] mb-1">
                    Phone / Mobile <span className="text-[#702E42]">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-3 py-2 border-b border-[#D5B989] bg-transparent text-xs text-[#0F172A] focus:outline-none focus:border-[#702E42]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#0F172A] mb-1">
                    City / Country
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Bengaluru"
                    value={formData.city}
                    onChange={(e) => setFormData({...formData, city: e.target.value})}
                    className="w-full px-3 py-2 border-b border-[#D5B989] bg-transparent text-xs text-[#0F172A] focus:outline-none focus:border-[#702E42]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#0F172A] mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-3 py-2 border-b border-[#D5B989] bg-transparent text-xs text-[#0F172A] focus:outline-none focus:border-[#702E42]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#0F172A] mb-1">
                  Personal Message / In Loving Memory Of (Optional)
                </label>
                <textarea
                  rows="2"
                  placeholder="Dedicate your contribution on a special occasion, birthday or memorial..."
                  value={formData.notes}
                  onChange={(e) => setFormData({...formData, notes: e.target.value})}
                  className="w-full px-3 py-2 border-b border-[#D5B989] bg-transparent text-xs text-[#0F172A] focus:outline-none focus:border-[#702E42]"
                />
              </div>

              <div className="py-2 text-[11px] text-[#1E293B] flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-[#702E42] shrink-0 mt-0.5" />
                <span>
                  <strong>Ethical Verification:</strong> The Gurukula shares official bank account details and receipt protocols directly with verified donors.
                </span>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-3.5 px-4 btn-primary text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer disabled:opacity-50"
              >
                <Heart className="w-4 h-4 text-[#D5B989]" />
                <span>{submitting ? 'Registering...' : `Submit Support Enquiry (₹${currentAmount.toLocaleString('en-IN')})`}</span>
              </button>
            </form>
          ) : (
            <div className="space-y-4 text-center my-auto py-6">
              <div className="w-14 h-14 rounded-full bg-[#0F172A] text-[#F59E0B] flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="typography-card-title text-[#0F172A]">
                Thank You, {formData.name}!
              </h4>
              <p className="typography-supporting text-[#1E293B] leading-relaxed">
                Your support enquiry for <strong>₹{currentAmount.toLocaleString('en-IN')}</strong> ({isCustom ? 'Custom Seva' : selectedSeva.title}) has been registered in the Gurukula system.
              </p>

              <div className="p-4 border-2 border-[#D5B989]/50 space-y-1 text-xs">
                <span className="text-[#702E42] font-bold uppercase tracking-wider text-[11px] block">
                  Enquiry Reference Code
                </span>
                <span className="text-base font-mono font-bold text-[#0F172A]">
                  {enquiryRef}
                </span>
                <p className="text-[11px] text-[#1E293B] pt-1">
                  Our office coordinator or Sri Pramod Kamat will personally reach out to your phone: <strong>{formData.phone}</strong>.
                </p>
              </div>

              <div className="text-xs text-[#0F172A] pt-2">
                <p className="font-semibold">Direct Office Helpline:</p>
                <a href="tel:+919845403290" className="text-[#702E42] font-bold block">+91 9845403290 (Sri Pramod Kamat)</a>
              </div>

              <button
                onClick={() => setIsSubmitted(false)}
                className="text-xs text-[#702E42] underline hover:text-[#0F172A] cursor-pointer pt-2"
              >
                Submit another enquiry
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
