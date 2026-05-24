"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function WorkPage() {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      title: "Aura Premium Apparel",
      category: "ecommerce",
      categoryLabel: "Shopify E-Commerce",
      desc: "Full custom Shopify store setup, product template optimizations, custom animations, and lightning checkout speed integration.",
      stat: "40% conversion increase",
    },
    {
      title: "SaaS Analytics Dashboard",
      category: "webapp",
      categoryLabel: "Web Application",
      desc: "Real-time analytics portal featuring complex charts, secure Django user authentication, and Next.js frontend state caches.",
      stat: "Sub-second database query loads",
    },
    {
      title: "Apex Venture Capital",
      category: "webdev",
      categoryLabel: "Website Development",
      desc: "High-end corporate portfolio website built with premium typography, elegant scrolling gestures, and headless CMS capabilities.",
      stat: "Perfect 100/100 Lighthouse performance",
    },
    {
      title: "Zenith Logo & Brand Book",
      category: "design",
      categoryLabel: "Logo & Brand Design",
      desc: "Modern minimalist logo configuration, font standard guides, brand identity color templates, and vector assets set.",
      stat: "Premium brand launch ready",
    },
    {
      title: "Hyperion Product Launch Film",
      category: "video",
      categoryLabel: "Video Editing",
      desc: "Cinematic promotional launch clip combining expert cuts, premium sound layout, and sleek motion graphics overlay.",
      stat: "500K+ organic social impressions",
    },
    {
      title: "Vapor Running Shoes",
      category: "ecommerce",
      categoryLabel: "Shopify E-Commerce",
      desc: "High-performance shoe catalog building, Shopify checkout integrations, custom filter options, and mobile-first gestures.",
      stat: "2.1s average page load speed",
    },
  ];

  const categories = [
    { id: "all", label: "All Work" },
    { id: "webdev", label: "Websites" },
    { id: "webapp", label: "Web Apps" },
    { id: "ecommerce", label: "Shopify" },
    { id: "design", label: "Brand Design" },
    { id: "video", label: "Video Editing" },
  ];

  const filteredProjects = filter === "all"
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <div className="container" style={{ padding: "80px 24px" }}>
      {/* Header section */}
      <section style={{ textAlign: "center", marginBottom: "50px" }}>
        <p style={{ color: "var(--accent-blue)", fontSize: "0.85rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "10px" }}>
          OUR PORTFOLIO
        </p>
        <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", color: "var(--text-primary)", marginBottom: "20px" }}>
          Selected Studio Projects
        </h1>
        <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem", maxWidth: "700px", margin: "0 auto", lineHeight: "1.7" }}>
          Explore how we partner with global startup brands to build custom web applications, high performance websites, Shopify hubs, branding visual systems, and motion media assets.
        </p>
      </section>

      {/* Filter Tabs */}
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", justifyContent: "center", marginBottom: "50px" }}>
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setFilter(cat.id)}
            className="btn-secondary"
            style={{
              padding: "10px 20px",
              fontSize: "0.9rem",
              borderRadius: "40px",
              backgroundColor: filter === cat.id ? "var(--text-primary)" : "var(--bg-primary)",
              color: filter === cat.id ? "#FFFFFF" : "var(--text-primary)",
              borderColor: filter === cat.id ? "var(--text-primary)" : "var(--border-light)",
            }}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))", gap: "30px", minHeight: "350px" }}>
        {filteredProjects.map((proj, idx) => (
          <div key={idx} className="card-clean" style={{ display: "flex", flexDirection: "column", height: "100%" }}>
            <div style={{ padding: "40px", display: "flex", flexDirection: "column", flex: 1 }}>
              <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--accent-blue)", textTransform: "uppercase", marginBottom: "10px" }}>
                {proj.categoryLabel}
              </span>
              <h3 style={{ fontSize: "1.35rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "12px" }}>
                {proj.title}
              </h3>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: "1.6", marginBottom: "20px", flex: 1 }}>
                {proj.desc}
              </p>
              
              {/* Stat Highlight */}
              <div style={{
                marginTop: "auto",
                paddingTop: "20px",
                borderTop: "1px solid var(--border-light)",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}>
                <div style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  backgroundColor: "#10B981",
                  boxShadow: "0 0 6px #10B981",
                }}></div>
                <span style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--text-primary)" }}>
                  {proj.stat}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA section */}
      <section className="card-clean" style={{ padding: "50px", textAlign: "center", background: "var(--bg-secondary)", marginTop: "80px" }}>
        <h2 style={{ fontSize: "1.8rem", color: "var(--text-primary)", marginBottom: "12px" }}>Have a Custom Project in Mind?</h2>
        <p style={{ color: "var(--text-secondary)", maxWidth: "550px", margin: "0 auto 24px auto", fontSize: "0.95rem" }}>
          We are ready to build a high-performance web setup for your company. Fill out our budget and project estimator.
        </p>
        <Link href="/contact" className="btn-primary">
          Estimate Project Now
        </Link>
      </section>
    </div>
  );
}
