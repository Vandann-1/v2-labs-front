"use client";

import React from "react";
import Link from "next/link";
import Logo from "@/components/Logo";


export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#020B1C] pt-20 text-[#F8FAFC] border-t border-white/5">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.5fr] gap-10 pb-[60px] max-w-[1200px] mx-auto px-6">
        {/* Brand Column */}
        <div className="flex flex-col">
          <Link href="/" className="flex items-center gap-3 mb-5 group">
            <Logo showTagline={true} dark={true} />
          </Link>
          <p className="text-[#94A3B8] text-[0.95rem] leading-relaxed mb-6">
            Engineering high-performance digital products. From custom web systems to scalable e-commerce infrastructure.
          </p>
          <div className="flex gap-3">
            <a href="#" className="w-[38px] h-[38px] rounded-lg bg-[#1E293B] border border-[#334155] flex items-center justify-center text-[#94A3B8] transition-all duration-200 hover:bg-[#1161ed] hover:text-white hover:border-[#1161ed]" aria-label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a href="#" className="w-[38px] h-[38px] rounded-lg bg-[#1E293B] border border-[#334155] flex items-center justify-center text-[#94A3B8] transition-all duration-200 hover:bg-[#1161ed] hover:text-white hover:border-[#1161ed]" aria-label="GitHub">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            </a>
          </div>
        </div>

        {/* Explore Links */}
        <div className="flex flex-col">
          <h4 className="text-[0.8rem] font-semibold uppercase tracking-wider text-[#1161ed] mb-6">Explore</h4>
          <nav className="flex flex-col gap-3.5">
            <Link href="/" className="text-[#94A3B8] text-[0.95rem] transition-all duration-200 hover:text-white hover:translate-x-1 hover:text-white">Home</Link>
            <Link href="/work" className="text-[#94A3B8] text-[0.95rem] transition-all duration-200 hover:text-white hover:translate-x-1 hover:text-white">Case Studies</Link>
            <Link href="/contact" className="text-[#94A3B8] text-[0.95rem] transition-all duration-200 hover:text-white hover:translate-x-1 hover:text-white">Get Estimate</Link>
          </nav>
        </div>

        {/* Services Links */}
        <div className="flex flex-col">
          <h4 className="text-[0.8rem] font-semibold uppercase tracking-wider text-[#1161ed] mb-6">Services</h4>
          <nav className="flex flex-col gap-3.5">
            <Link href="/services/web-dev" className="text-[#94A3B8] text-[0.95rem] transition-all duration-200 hover:text-white hover:translate-x-1 hover:text-white">Web Development</Link>
            <Link href="/services/design" className="text-[#94A3B8] text-[0.95rem] transition-all duration-200 hover:text-white hover:translate-x-1 hover:text-white">UI/UX Design</Link>
            <Link href="/services/full-stack" className="text-[#94A3B8] text-[0.95rem] transition-all duration-200 hover:text-white hover:translate-x-1 hover:text-white">Full Stack Systems</Link>
          </nav>
        </div>

        {/* Contact Column */}
        <div className="flex flex-col">
          <h4 className="text-[0.8rem] font-semibold uppercase tracking-wider text-[#1161ed] mb-6">Coordinates</h4>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 text-[#94A3B8] text-[0.9rem]">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              <span>hello@v2labs.co</span>
            </div>
            <div className="flex items-center gap-3 text-[#94A3B8] text-[0.9rem]">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              <span>Silicon Square, India</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5 py-[30px]">
        <div className="flex flex-col sm:flex-row justify-between items-center text-[#64748B] text-[0.85rem] max-w-[1200px] mx-auto px-6 gap-5 sm:gap-0 text-center sm:text-left">
          <p>© {currentYear} V2 Labs. All rights reserved.</p>
          <div className="flex gap-[30px]">
            <Link href="/privacy" className="text-[#64748B] hover:text-white transition-colors duration-200">Privacy</Link>
            <Link href="/terms" className="text-[#64748B] hover:text-white transition-colors duration-200">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
