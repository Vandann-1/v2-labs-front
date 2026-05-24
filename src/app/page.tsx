"use client";

import React from "react";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="container">
      {/* Hero Section */}
      <section id="hero" className={styles.hero}>
        <div className={styles.badge}>
          <span className={styles.badgeDot}></span>
          Build • Innovate • Scale
        </div>
        <h1 className={styles.heroTitle}>
          We Build <span className={styles.gradientText}>Digital Experiences</span> That Drive Results.
        </h1>
        <p className={styles.heroDesc}>
          V2 Labs is a premium digital studio focused on building modern websites,
          scalable web applications, and stunning designs for businesses and startups.
        </p>
        <div className={styles.heroActions}>
          <Link href="/contact" className="btn-primary">
            Start a Project
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </Link>
          <button onClick={() => scrollTo("info")} className="btn-secondary">
            Agency Info
          </button>
        </div>
      </section>









      {/* Services Grid Section */}
      <section id="services" className={styles.services}>
        <div className={styles.sectionHeader}>
          <p className={styles.sectionSubtitle}>Exclusive Capabilities</p>
          <h2 className={styles.sectionTitle}>Our Premium Services</h2>
        </div>

        <div className={styles.servicesGrid}>
          {[
            { 
                title: "Website Development", 
                desc: "Custom, responsive, and high performance websites tailored to showcase your unique brand identity.", 
                icon: <polyline points="16 18 22 12 16 6" /> 
            },
            { 
                title: "Web Applications", 
                desc: "Powerful, highly scalable web portals built with cutting-edge technologies to automate and scale business growth.", 
                icon: <rect x="2" y="3" width="20" height="14" rx="2" ry="2" /> 
            },
            { 
                title: "Logo & Brand Identity", 
                desc: "Iconic logos, bespoke branding assets, and graphic design that set your brand miles apart.", 
                icon: <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" /> 
            },
          ].map((service, index) => (
            <div key={index} className={`${styles.serviceCard} glass-card`}>
              <div className={styles.serviceIcon}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#2596be" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  {service.icon}
                  {index === 0 && <><polyline points="8 6 2 12 8 18" /><line x1="14" y1="4" x2="10" y2="20" /></>}
                  {index === 1 && <><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></>}
                  {index === 2 && <path d="M8 12h8" />}
                </svg>
              </div>
              <h3 className={styles.serviceCardTitle}>{service.title}</h3>
              <p className={styles.serviceCardDesc}>{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Information & Coordinates Section */}
      <section id="info" className={styles.infoSection}>
        <div className={styles.infoLayout}>
          {/* Left: About Details */}
          <div className={styles.infoText}>
            <p className={styles.sectionSubtitle}>The Studio</p>
            <h2 className={styles.infoTitle}>Expertise in Modern Engineering</h2>
            <p className={styles.infoDesc}>
              V2 Labs operates at the intersection of design and technology. We don't just build websites; we engineer digital infrastructures that support rapid scale and brand authority.
            </p>
            
            <div className={styles.featureList}>
              <div className={styles.featureItem}>
                <div className={styles.featureCheck}>✓</div>
                <div>
                  <strong>Performance First:</strong> Every build is optimized for sub-second loading speeds.
                </div>
              </div>
              <div className={styles.featureItem}>
                <div className={styles.featureCheck}>✓</div>
                <div>
                  <strong>Bespoke Design:</strong> No templates. We design unique architectures for every client.
                </div>
              </div>
              <div className={styles.featureItem}>
                <div className={styles.featureCheck}>✓</div>
                <div>
                  <strong>Scalable Systems:</strong> Our React & Next.js builds are ready for enterprise traffic.
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Coordinates Card */}
          <div className={`${styles.infoCard} glass-card`}>
            <h3 className={styles.cardHeading}>Global Coordinates</h3>
            <div className={styles.coordList}>
              <div className={styles.coordItem}>
                <span className={styles.coordIcon}>📧</span>
                <div>
                  <p className={styles.coordLabel}>Project Inquiries</p>
                  <p className={styles.coordValue}>hello@v2labs.co</p>
                </div>
              </div>
              <div className={styles.coordItem}>
                <span className={styles.coordIcon}>📍</span>
                <div>
                  <p className={styles.coordLabel}>Studio Location</p>
                  <p className={styles.coordValue}>Silicon Square, Hubli, India</p>
                </div>
              </div>
              <div className={styles.coordItem}>
                <span className={styles.coordIcon}>🕒</span>
                <div>
                  <p className={styles.coordLabel}>Studio Hours</p>
                  <p className={styles.coordValue}>Mon — Fri, 10:00 — 18:00 IST</p>
                </div>
              </div>
            </div>
            <Link href="/contact" className={styles.cardCta}>
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}