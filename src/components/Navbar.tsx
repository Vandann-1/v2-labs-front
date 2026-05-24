"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close sidebar when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const services = [
    { name: "Web Development", href: "/services/web-dev" },
    { name: "UI/UX Design", href: "/services/design" },
    { name: "Branding & Logo", href: "/services/branding" },
    { name: "Full Stack Dev", href: "/services/full-stack" },
  ];

  return (
    <header className={styles.header}>
      <div className={`${styles.navContainer} container`}>
        {/* Brand Logo */}
        <Link href="/" className={styles.logo}>
          <svg width="28" height="28" viewBox="0 0 45 40" fill="none">
            <path d="M5 5H18L26.5 22L35 5H40L29 27L22.5 40L5 5Z" fill="#2596be" />
          </svg>
          <span className={styles.brandName}>V2 Labs</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className={styles.desktopNav}>
          <Link href="/" className={`${styles.navLink} ${pathname === "/" ? styles.active : ""}`}>
            Home
          </Link>
          
          {/* Services Hover Dropdown */}
          <div className={styles.dropdown}>
            <span className={styles.navLink}>Services</span>
            <div className={styles.dropdownContent}>
              {services.map((s) => (
                <Link key={s.href} href={s.href} className={styles.dropdownItem}>
                  {s.name}
                </Link>
              ))}
            </div>
          </div>

          <Link href="/work" className={`${styles.navLink} ${pathname === "/work" ? styles.active : ""}`}>
            Work
          </Link>
          <Link href="/contact" className={styles.ctaButton}>
            Let's Talk
          </Link>
        </nav>

        {/* Mobile Toggle Button */}
        <button 
          className={styles.mobileToggle} 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          <div className={`${styles.burger} ${isMenuOpen ? styles.open : ""}`} />
        </button>

        {/* Mobile Sidebar (Slides from Left) */}
        <aside className={`${styles.sidebar} ${isMenuOpen ? styles.sidebarActive : ""}`}>
          <nav className={styles.mobileNav}>
            <Link href="/" className={styles.mobileLink}>Home</Link>
            <div className={styles.mobileServiceSection}>
              <p className={styles.mobileServiceHeading}>Our Services</p>
              {services.map((s) => (
                <Link key={s.href} href={s.href} className={styles.mobileSubLink}>
                  {s.name}
                </Link>
              ))}
            </div>
            <Link href="/work" className={styles.mobileLink}>Work</Link>
            <Link href="/contact" className={styles.mobileCta}>Let's Talk</Link>
          </nav>
        </aside>

        {/* Overlay Backdrop */}
        {isMenuOpen && <div className={styles.overlay} onClick={() => setIsMenuOpen(false)} />}
      </div>
    </header>
  );
}