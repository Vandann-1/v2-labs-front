"use client";

import React from "react";
import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`${styles.footerGrid} container`}>
        {/* Brand Column */}
        <div className={styles.footerCol}>
          <Link href="/" className={styles.footerLogo}>
            <svg width="28" height="28" viewBox="0 0 45 40" fill="none">
              <path d="M5 5H18L26.5 22L35 5H40L29 27L22.5 40L5 5Z" fill="#2596be" />
            </svg>
            <span>V2 Labs</span>
          </Link>
          <p className={styles.footerDescription}>
            Engineering high-performance digital products. From custom web systems to scalable e-commerce infrastructure.
          </p>
          <div className={styles.socials}>
            <a href="#" className={styles.socialIcon} aria-label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a href="#" className={styles.socialIcon} aria-label="GitHub">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            </a>
          </div>
        </div>

        {/* Explore Links */}
        <div className={styles.footerCol}>
          <h4 className={styles.columnHeading}>Explore</h4>
          <nav className={styles.linkList}>
            <Link href="/" className={styles.link}>Home</Link>
            <Link href="/work" className={styles.link}>Case Studies</Link>
            <Link href="/contact" className={styles.link}>Get Estimate</Link>
          </nav>
        </div>

        {/* Services Links */}
        <div className={styles.footerCol}>
          <h4 className={styles.columnHeading}>Services</h4>
          <nav className={styles.linkList}>
            <Link href="/services/web-dev" className={styles.link}>Web Development</Link>
            <Link href="/services/design" className={styles.link}>UI/UX Design</Link>
            <Link href="/services/full-stack" className={styles.link}>Full Stack Systems</Link>
          </nav>
        </div>

        {/* Contact Column */}
        <div className={styles.footerCol}>
          <h4 className={styles.columnHeading}>Coordinates</h4>
          <div className={styles.contactInfo}>
            <div className={styles.contactItem}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              <span>hello@v2labs.co</span>
            </div>
            <div className={styles.contactItem}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              <span>Silicon Square, India</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <div className={`${styles.bottomBarContent} container`}>
          <p>© {currentYear} V2 Labs. All rights reserved.</p>
          <div className={styles.legalLinks}>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}