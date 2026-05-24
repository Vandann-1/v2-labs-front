"use client";

import React from "react";
import Link from "next/link";

export default function AboutPage() {
  const stats = [
    { value: "120+", label: "Projects Completed" },
    { value: "45+", label: "Active Startups Launched" },
    { value: "100%", label: "Client Satisfaction" },
    { value: "15+", label: "Design Awards" },
  ];

  const values = [
    {
      title: "Modern Design",
      desc: "We build gorgeous, high-fidelity user layouts. Every pixel is deliberately crafted to stun your audiences.",
    },
    {
      title: "Clean Code",
      desc: "Our systems are built on Next.js, Django, and clean engineering principles. Speed, safety, and scale are guaranteed.",
    },
    {
      title: "Scalable Solutions",
      desc: "Whether you represent a local shop or a global corporate hub, our architectures scale alongside your daily users.",
    },
    {
      title: "Timely Delivery",
      desc: "We understand that speed to market defines startup survival. We deliver projects on schedule without cutting corners.",
    },
  ];

  return (
    <div className="container" style={{ padding: "80px 24px" }}>
      {/* Header section */}
      <section style={{ textAlign: "center", marginBottom: "60px" }}>
        <p style={{ color: "var(--accent-blue)", fontSize: "0.85rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "10px" }}>
          WHO WE ARE
        </p>
        <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", color: "var(--text-primary)", marginBottom: "20px" }}>
          Pioneering Premium Web Experiences
        </h1>
        <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem", maxWidth: "700px", margin: "0 auto", lineHeight: "1.7" }}>
          V2 Labs is a modern digital agency and studio. We partner with visionary startups and global brands to architect websites, software products, Shopify setups, logos, and high-fidelity video cuts.
        </p>
      </section>

      {/* Stats Counter Section */}
      <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px", marginBottom: "80px" }}>
        {stats.map((stat, idx) => (
          <div key={idx} className="card-clean" style={{ padding: "30px", textAlign: "center" }}>
            <h3 style={{ fontSize: "2.5rem", color: "var(--accent-blue)", fontWeight: 800, marginBottom: "8px" }}>
              {stat.value}
            </h3>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", fontWeight: 500 }}>
              {stat.label}
            </p>
          </div>
        ))}
      </section>

      {/* Values Section */}
      <section style={{ borderTop: "1px solid var(--border-light)", paddingTop: "80px" }}>
        <div style={{ textAlign: "center", marginBottom: "50px" }}>
          <p style={{ color: "var(--accent-blue)", fontSize: "0.85rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "10px" }}>
            OUR FOUNDATION
          </p>
          <h2 style={{ fontSize: "2rem", color: "var(--text-primary)" }}>Core Studio Principles</h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "24px", marginBottom: "60px" }}>
          {values.map((val, idx) => (
            <div key={idx} className="card-clean" style={{ padding: "30px" }}>
              <h3 style={{ fontSize: "1.2rem", fontWeight: 600, color: "var(--text-primary)", marginBottom: "12px" }}>
                {val.title}
              </h3>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: "1.5" }}>
                {val.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="card-clean" style={{ padding: "50px", textAlign: "center", background: "var(--bg-secondary)", marginTop: "60px" }}>
        <h2 style={{ fontSize: "1.8rem", color: "var(--text-primary)", marginBottom: "12px" }}>Let's Build Your Digital Future</h2>
        <p style={{ color: "var(--text-secondary)", maxWidth: "550px", margin: "0 auto 24px auto", fontSize: "0.95rem" }}>
          Our engineering team is ready to map your code architectures, visual guidelines, or motion sequences. Reach out for a free quote.
        </p>
        <Link href="/contact" className="btn-primary">
          Initiate Estimate
        </Link>
      </section>
    </div>
  );
}
