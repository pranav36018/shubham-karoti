import React, { useState } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { 
  LayoutDashboard, 
  UserPlus, 
  GraduationCap, 
  Eye, 
  BarChart3, 
  Heart, 
  Mail, 
  LogOut, 
  Globe, 
  Menu, 
  X, 
  Sparkles,
  ShieldCheck,
  Bell
} from 'lucide-react';

export default function PortalLayout() {
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const navItems = [
    { path: '/portal', label: 'Operations Overview', icon: LayoutDashboard, exact: true },
    { path: '/portal/admissions', label: 'Admissions Pipeline', icon: UserPlus },
    { path: '/portal/students', label: 'Gurukula Students', icon: GraduationCap },
    { path: '/portal/observations', label: 'Quick Observation', icon: Eye, badge: 'Daily' },
    { path: '/portal/reports', label: 'Holistic Reports', icon: BarChart3 },
    { path: '/portal/support-enquiries', label: 'Seva Enquiries', icon: Heart },
    { path: '/portal/messages', label: 'Public Inquiries', icon: Mail }
  ];

  const isActive = (item) => {
    if (item.exact) return location.pathname === item.path;
    return location.pathname.startsWith(item.path);
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] flex flex-col font-sans text-[#1E293B]">
      {/* Top Application Bar — Midnight Navy */}
      <header className="sticky top-0 z-40 bg-[#0F172A] text-white border-b border-[#D5B989]/30 shadow-md px-4 sm:px-8 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="lg:hidden p-2 rounded-lg bg-white/10 hover:bg-[#80142C] text-white transition-colors cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {sidebarOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
          </button>

          <Link to="/portal" className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-full bg-[#17243B] p-1 border-2 border-[#D5B989] flex items-center justify-center shrink-0 shadow-sm">
              <img 
                src="/assets/images/shubam-karoti-maitreyi-gurukula.png" 
                alt="Shubham Karoti" 
                className="w-full h-full object-contain" 
              />
            </div>
            <div>
              <span className="font-serif font-black text-lg sm:text-xl tracking-tight text-white block leading-tight">
                SHUBHAM KAROTI GURUKULA
              </span>
              <span className="text-[11px] text-[#F59E0B] font-mono font-bold uppercase tracking-wider block">
                Student Journey & Institutional Management Portal
              </span>
            </div>
          </Link>
        </div>

        {/* Right Utility: User Badge & Public Website Link */}
        <div className="flex items-center gap-4 sm:gap-6">
          <Link
            to="/"
            target="_blank"
            className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/10 hover:bg-[#F59E0B] text-white hover:text-[#0F172A] text-xs font-bold transition-all border border-[#D5B989]/40"
          >
            <Globe className="w-3.5 h-3.5" />
            <span>Public Website</span>
          </Link>

          <div className="flex items-center gap-3 pl-3 sm:border-l sm:border-[#D5B989]/30">
            <div className="text-right hidden sm:block">
              <span className="text-xs font-bold text-white block leading-tight">
                {user?.name || "Acharya"}
              </span>
              <span className="text-[10px] text-[#F59E0B] uppercase tracking-wider font-mono font-semibold">
                {user?.title || user?.role || "Staff"}
              </span>
            </div>

            <button
              onClick={handleLogout}
              className="p-2 rounded-lg bg-white/10 hover:bg-[#80142C] text-white transition-colors cursor-pointer"
              title="Sign Out"
            >
              <LogOut className="w-4 h-4 text-[#F59E0B]" />
            </button>
          </div>
        </div>
      </header>

      {/* Main App Body with Sidebar + Content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar Navigation */}
        <aside className={`fixed lg:static inset-y-0 left-0 z-30 w-72 bg-white border-r border-[#D5B989]/30 flex flex-col justify-between transition-transform duration-300 pt-16 lg:pt-0 shadow-2xl lg:shadow-none ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}>
          <div className="p-5 space-y-1.5 overflow-y-auto">
            <div className="px-3 py-2 text-[11px] font-mono font-extrabold uppercase tracking-widest text-[#80142C]">
              Management Modules
            </div>

            {navItems.map((item) => {
              const active = isActive(item);
              const Icon = item.icon;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setSidebarOpen(false)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-xs font-sans font-bold transition-all ${
                    active
                      ? 'bg-[#80142C] text-white shadow-md'
                      : 'text-[#1E293B] hover:bg-[#80142C]/5 hover:text-[#80142C]'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <Icon className={`w-4 h-4 ${active ? 'text-[#F59E0B]' : 'text-[#80142C]'}`} />
                    <span>{item.label}</span>
                  </div>
                  {item.badge && (
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-mono font-extrabold ${
                      active ? 'bg-[#F59E0B] text-[#0F172A]' : 'bg-[#80142C]/10 text-[#80142C]'
                    }`}>
                      {item.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </div>

          {/* Sidebar Footer info */}
          <div className="p-5 border-t border-[#D5B989]/30 bg-[#FAF9F6] text-xs space-y-1.5 text-[#1E293B]">
            <div className="flex items-center gap-2 text-[#80142C] font-bold">
              <ShieldCheck className="w-4 h-4 text-[#B45309]" />
              <span className="font-serif text-sm">Pancha Kosha Engine</span>
            </div>
            <p className="text-[11px] text-[#475569] font-sans">
              Localhost:5000 Active • Institutional Records
            </p>
          </div>
        </aside>

        {/* Backdrop for mobile drawer */}
        {sidebarOpen && (
          <div 
            onClick={() => setSidebarOpen(false)}
            className="fixed inset-0 bg-black/50 z-20 lg:hidden backdrop-blur-xs"
          />
        )}

        {/* Content Area */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-8 lg:p-10">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
