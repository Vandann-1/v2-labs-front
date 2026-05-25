"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// --- Icons (Professional SVG paths) ---
const Icons = {
  Web: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
    </svg>
  ),
  App: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
  ),
  Saas: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
    </svg>
  ),
  Design: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
    </svg>
  )
};

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const services = [
    { 
      name: "CRM & ERP Systems", 
      desc: "Custom enterprise infrastructures", 
      href: "/services/crm-erp", 
      icon: <Icons.Saas /> 
    },
    { 
      name: "Web Development", 
      desc: "High-performance React/Next.js", 
      href: "/services/web-dev", 
      icon: <Icons.Web /> 
    },
    { 
      name: "E-commerce Solutions", 
      desc: "Scalable online storefronts", 
      href: "/services/ecomm", 
      icon: <Icons.App /> 
    },
    { 
      name: "UI/UX & Branding", 
      desc: "Minimalist digital identity", 
      href: "/services/design", 
      icon: <Icons.Design /> 
    },
  ];

  return (
    <header className="sticky top-0 left-0 w-full h-[72px] bg-white/80 backdrop-blur-xl border-b border-slate-100 z-[1000] flex items-center">
      <div className="flex justify-between items-center w-full max-w-[1280px] mx-auto px-6">
        
        {/* Brand Logo */}
        <Link href="/" className="flex items-center group">
          <div className="w-9 h-9 bg-[#2596be] rounded-lg flex items-center justify-center transition-transform group-hover:rotate-6">
            <svg width="20" height="20" viewBox="0 0 45 40" fill="none">
              <path d="M5 5H18L26.5 22L35 5H40L29 27L22.5 40L5 5Z" fill="white" />
            </svg>
          </div>
          <span className="text-slate-900 font-black text-xl ml-3 tracking-tight">V2 Labs</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden min-[901px]:flex items-center gap-1">
          <Link href="/" className={`px-4 py-2 rounded-lg text-[0.95rem] font-semibold transition-all ${pathname === "/" ? "text-[#2596be] bg-[#2596be]/5" : "text-slate-600 hover:text-[#2596be]"}`}>
            Home
          </Link>
          
          {/* Services Mega-Menu Dropdown */}
          <div className="relative group py-5 px-4">
            <button className="flex items-center gap-1 text-slate-600 group-hover:text-[#2596be] font-semibold text-[0.95rem] transition-all">
              Services
              <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
            </button>
            
            <div className="invisible opacity-0 absolute top-full left-1/2 -translate-x-1/2 bg-white min-w-[480px] grid grid-cols-2 gap-2 rounded-2xl p-4 shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100 transition-all duration-300 group-hover:visible group-hover:opacity-100 group-hover:translate-y-2">
              {services.map((s) => (
                <Link key={s.href} href={s.href} className="flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 transition-all group/item">
                  <div className="mt-1 text-slate-400 group-hover/item:text-[#2596be] transition-colors">
                    {s.icon}
                  </div>
                  <div>
                    <div className="text-slate-900 font-bold text-sm leading-none mb-1.5">{s.name}</div>
                    <div className="text-slate-500 text-[0.75rem] leading-snug">{s.desc}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <Link href="/work" className={`px-4 py-2 rounded-lg text-[0.95rem] font-semibold transition-all ${pathname === "/work" ? "text-[#2596be] bg-[#2596be]/5" : "text-slate-600 hover:text-[#2596be]"}`}>
            Work
          </Link>
        </nav>

        {/* CTA Button */}
        <div className="hidden min-[901px]:block">
          <Link href="/contact" className="bg-slate-900 text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-[#2596be] transition-all hover:shadow-lg active:scale-95">
            Start a Project
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="min-[901px]:hidden p-2 text-slate-900" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="w-6 h-5 flex flex-col justify-between relative">
            <span className={`w-full h-[2.5px] bg-current rounded transition-all ${isMenuOpen ? "rotate-45 translate-y-[9px]" : ""}`} />
            <span className={`w-full h-[2.5px] bg-current rounded transition-all ${isMenuOpen ? "opacity-0" : ""}`} />
            <span className={`w-full h-[2.5px] bg-current rounded transition-all ${isMenuOpen ? "-rotate-45 -translate-y-[9px]" : ""}`} />
          </div>
        </button>

        {/* Mobile Sidebar */}
        <aside className={`fixed top-0 left-0 w-full h-screen bg-white z-[1100] transition-transform duration-500 ease-[cubic-bezier(0.85,0,0.15,1)] ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
          <div className="flex flex-col h-full px-8 py-24 overflow-y-auto">
            <div className="mb-10">
              <p className="text-[#2596be] font-black text-[0.7rem] uppercase tracking-widest mb-6">Navigation</p>
              <div className="flex flex-col gap-6">
                <Link href="/" className="text-3xl font-black text-slate-900">Home</Link>
                <Link href="/work" className="text-3xl font-black text-slate-900">Work</Link>
              </div>
            </div>

            <div>
              <p className="text-slate-400 font-black text-[0.7rem] uppercase tracking-widest mb-6">Expertise</p>
              <div className="grid gap-6">
                {services.map((s) => (
                  <Link key={s.href} href={s.href} className="flex items-center gap-4 group">
                    <div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center text-slate-400 group-hover:text-[#2596be]">
                      {s.icon}
                    </div>
                    <span className="text-lg font-bold text-slate-700">{s.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="mt-auto pb-10">
              <Link href="/contact" className="block w-full bg-[#2596be] text-white text-center py-5 rounded-2xl font-black text-lg">
                Let&apos;s Talk
              </Link>
            </div>
          </div>
        </aside>
      </div>
    </header>
  );
}