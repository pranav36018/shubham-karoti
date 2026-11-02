import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { 
  Lock, 
  Mail, 
  ChevronLeft,
  KeyRound
} from 'lucide-react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const res = await login(email, password);
    setLoading(false);

    if (res.success) {
      navigate('/portal');
    } else {
      setError(res.error || 'Invalid credentials. Please verify your email and password.');
    }
  };

  const fillQuickRole = (roleEmail, rolePassword) => {
    setEmail(roleEmail);
    setPassword(rolePassword);
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative overflow-hidden font-sans">
      {/* Decorative background flourishes */}
      <div className="absolute top-0 inset-x-0 h-1 bg-[#D5B989]" />
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#17243B]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#702E42]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Return to website button */}
      <div className="sm:mx-auto sm:w-full sm:max-w-md px-4 mb-4">
        <Link 
          to="/" 
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#17243B] hover:text-[#702E42] transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Return to Public Website</span>
        </Link>
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-md px-4">
        {/* Brand Header */}
        <div className="text-center space-y-2 mb-6">
          <div className="w-16 h-16 rounded-full bg-[#17243B] p-1.5 border-2 border-[#D5B989] shadow-lg mx-auto flex items-center justify-center">
            <img 
              src="/assets/images/shubam-karoti-maitreyi-gurukula.png" 
              alt="Shubham Karoti Emblem" 
              className="w-full h-full object-contain"
            />
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#17243B] tracking-tight">
            SHUBHAM KAROTI
          </h2>
          <p className="text-xs font-semibold tracking-widest text-[#702E42] uppercase">
            Institutional Management & Teacher Portal
          </p>
          <p className="text-xs text-[#687386] italic font-serif">
            Student Journey Tracking • Admissions • Daily Dinacharya
          </p>
        </div>

        {/* Card Container */}
        <div className="bg-white py-8 px-6 sm:px-10 rounded-2xl border border-[#D5B989]/40 shadow-xl space-y-6">
          {error && (
            <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700 font-medium flex items-center gap-2">
              <span className="text-red-500 font-bold">⚠️</span>
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-[#17243B] uppercase tracking-wider mb-1">
                Institutional Email
              </label>
              <div className="relative rounded-xl shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#687386]">
                  <Mail className="h-4 w-4" />
                </div>
                <input
                  type="email"
                  required
                  placeholder="admin@gurukula.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-gray-200 bg-[#FAF9F6] text-xs sm:text-sm text-[#252A33] focus:outline-none focus:ring-2 focus:ring-[#702E42] focus:bg-white transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#17243B] uppercase tracking-wider mb-1">
                Password
              </label>
              <div className="relative rounded-xl shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#687386]">
                  <Lock className="h-4 w-4" />
                </div>
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-gray-200 bg-[#FAF9F6] text-xs sm:text-sm text-[#252A33] focus:outline-none focus:ring-2 focus:ring-[#702E42] focus:bg-white transition-all"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 px-4 rounded-xl bg-[#702E42] hover:bg-[#582434] text-white text-xs font-serif font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {loading ? (
                <span>Authenticating...</span>
              ) : (
                <>
                  <KeyRound className="w-4 h-4 text-[#D5B989]" />
                  <span>Secure Portal Login</span>
                </>
              )}
            </button>
          </form>

          {/* Quick Demo Credentials for Evaluation */}
          <div className="pt-4 border-t border-gray-100 space-y-2.5">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#702E42] block text-center">
              Quick Evaluator Sign-In (Click to Autofill):
            </span>

            <div className="grid grid-cols-1 gap-2">
              <button
                type="button"
                onClick={() => fillQuickRole('admin@gurukula.com', 'admin')}
                className="w-full text-left px-3.5 py-2.5 rounded-xl bg-[#FAF9F6] hover:bg-[#E9DADD]/50 border border-[#D5B989]/40 text-xs transition-colors flex items-center justify-between cursor-pointer group"
              >
                <div>
                  <span className="font-bold text-[#17243B] block group-hover:text-[#702E42] transition-colors">Managing Trustee (Sri Pramod Kamat)</span>
                  <span className="text-[11px] text-[#687386]">Full administrative & admissions control</span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#17243B] text-[#D5B989]">admin</span>
              </button>

              <button
                type="button"
                onClick={() => fillQuickRole('teacher@gurukula.com', 'teacher')}
                className="w-full text-left px-3.5 py-2.5 rounded-xl bg-[#FAF9F6] hover:bg-[#E9DADD]/50 border border-[#D5B989]/40 text-xs transition-colors flex items-center justify-between cursor-pointer group"
              >
                <div>
                  <span className="font-bold text-[#17243B] block group-hover:text-[#702E42] transition-colors">Matrushree Sharada Devi (Teacher)</span>
                  <span className="text-[11px] text-[#687386]">Daily Dinacharya & Student Observations</span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#17243B] text-[#D5B989]">teacher</span>
              </button>

              <button
                type="button"
                onClick={() => fillQuickRole('coordinator@gurukula.com', 'coordinator')}
                className="w-full text-left px-3.5 py-2.5 rounded-xl bg-[#FAF9F6] hover:bg-[#E9DADD]/50 border border-[#D5B989]/40 text-xs transition-colors flex items-center justify-between cursor-pointer group"
              >
                <div>
                  <span className="font-bold text-[#17243B] block group-hover:text-[#702E42] transition-colors">Sri Venugopal (Coordinator)</span>
                  <span className="text-[11px] text-[#687386]">Admissions, Seva & Public Enquiries</span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#17243B] text-[#D5B989]">coordinator</span>
              </button>
            </div>
          </div>

          <div className="text-center text-[11px] text-[#687386] pt-1">
            Protected under registered institutional security protocols • Shubham Karoti Gurukula
          </div>
        </div>
      </div>
    </div>
  );
}
