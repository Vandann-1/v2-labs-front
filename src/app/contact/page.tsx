"use client";

import React, { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "website_dev",
    budget: "$1,000 - $3,000",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: null, message: "" });

    try {
      // Send data to Django API
      const response = await fetch("http://localhost:8000/api/contact/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus({
          type: "success",
          message: data.message || "Thank you! Your project request has been submitted successfully.",
        });
        // Reset fields
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "website_dev",
          budget: "$1,000 - $3,000",
          message: "",
        });
      } else {
        const errorMsg = data.errors
          ? Object.entries(data.errors)
              .map(([key, val]) => `${key}: ${Array.isArray(val) ? val.join(", ") : val}`)
              .join(" | ")
          : data.message || "Failed to submit request. Please try again.";
        
        setStatus({
          type: "error",
          message: errorMsg,
        });
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus({
        type: "error",
        message: "Unable to connect to the server. Please verify the Django API backend is running or try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container" style={{ padding: "80px 24px" }}>
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1.2fr",
        gap: "60px",
        alignItems: "start",
      }}>
        {/* Left Side: Contact details */}
        <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
          <div>
            <p style={{ color: "var(--accent-blue)", fontSize: "0.85rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "10px" }}>
              GET IN TOUCH
            </p>
            <h1 style={{ fontSize: "clamp(2rem, 4.5vw, 3rem)", color: "var(--text-primary)", marginBottom: "16px" }}>
              Let's Build Something Revolutionary
            </h1>
            <p style={{ color: "var(--text-secondary)", fontSize: "1.05rem", lineHeight: "1.7" }}>
              Have an idea for a startup? Looking to overhaul your corporate site, spin up a secure Shopify hub, design vector assets, or sync custom video cuts? Fill out the estimator form and we will reach out with a detailed proposal.
            </p>
          </div>

          {/* Core contact details */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <div style={{
                width: "48px",
                height: "48px",
                borderRadius: "6px",
                backgroundColor: "var(--accent-blue-light)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--accent-blue)",
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div>
                <p style={{ fontSize: "0.75rem", fontWeight: 600, color: "var(--text-muted)", textTransform: "uppercase" }}>Email Us</p>
                <p style={{ fontSize: "1rem", fontWeight: 600, color: "var(--text-primary)" }}>hello@v2labs.co</p>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <div style={{
                width: "48px",
                height: "48px",
                borderRadius: "6px",
                backgroundColor: "var(--accent-blue-light)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--accent-blue)",
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <div>
                <p style={{ fontSize: "0.75rem", fontWeight: 600, color: "var(--text-muted)", textTransform: "uppercase" }}>Call Studio</p>
                <p style={{ fontSize: "1rem", fontWeight: 600, color: "var(--text-primary)" }}>+91 (800) 555-0199</p>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <div style={{
                width: "48px",
                height: "48px",
                borderRadius: "6px",
                backgroundColor: "var(--accent-blue-light)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--accent-blue)",
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div>
                <p style={{ fontSize: "0.75rem", fontWeight: 600, color: "var(--text-muted)", textTransform: "uppercase" }}>Headquarters</p>
                <p style={{ fontSize: "1rem", fontWeight: 600, color: "var(--text-primary)" }}>Silicon Square, Mumbai, India</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Interactive Project Estimator Lead Form */}
        <div className="card-clean" style={{ padding: "40px" }}>
          {status.type && (
            <div style={{
              padding: "14px 20px",
              borderRadius: "6px",
              marginBottom: "24px",
              fontSize: "0.95rem",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              backgroundColor: status.type === "success" ? "#ECFDF5" : "#FEF2F2",
              border: `1px solid ${status.type === "success" ? "#A7F3D0" : "#FCA5A5"}`,
              color: status.type === "success" ? "#065F46" : "#991B1B",
            }}>
              {status.type === "success" ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
              )}
              {status.message}
            </div>
          )}

          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <label style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--text-secondary)", textTransform: "uppercase" }}>Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  style={{
                    padding: "12px 16px",
                    border: "1px solid var(--border-light)",
                    borderRadius: "6px",
                    fontSize: "0.95rem",
                    outline: "none",
                  }}
                  onFocus={(e) => e.target.style.borderColor = "var(--accent-blue)"}
                  onBlur={(e) => e.target.style.borderColor = "var(--border-light)"}
                />
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <label style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--text-secondary)", textTransform: "uppercase" }}>Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@startup.com"
                  style={{
                    padding: "12px 16px",
                    border: "1px solid var(--border-light)",
                    borderRadius: "6px",
                    fontSize: "0.95rem",
                    outline: "none",
                  }}
                  onFocus={(e) => e.target.style.borderColor = "var(--accent-blue)"}
                  onBlur={(e) => e.target.style.borderColor = "var(--border-light)"}
                />
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <label style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--text-secondary)", textTransform: "uppercase" }}>Phone (Optional)</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 (555) 000-0000"
                  style={{
                    padding: "12px 16px",
                    border: "1px solid var(--border-light)",
                    borderRadius: "6px",
                    fontSize: "0.95rem",
                    outline: "none",
                  }}
                  onFocus={(e) => e.target.style.borderColor = "var(--accent-blue)"}
                  onBlur={(e) => e.target.style.borderColor = "var(--border-light)"}
                />
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <label style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--text-secondary)", textTransform: "uppercase" }}>Service Required</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  style={{
                    padding: "12px 16px",
                    border: "1px solid var(--border-light)",
                    borderRadius: "6px",
                    fontSize: "0.95rem",
                    outline: "none",
                    backgroundColor: "#FFFFFF",
                  }}
                  onFocus={(e) => e.target.style.borderColor = "var(--accent-blue)"}
                  onBlur={(e) => e.target.style.borderColor = "var(--border-light)"}
                >
                  <option value="website_dev">Website Development</option>
                  <option value="webapp_dev">Web Application Development</option>
                  <option value="ecommerce">Shopify & E-Commerce</option>
                  <option value="wordpress">WordPress Custom Site</option>
                  <option value="video_editing">Video Editing</option>
                  <option value="logo_design">Logo & Graphic Design</option>
                  <option value="other">Other / Custom Services</option>
                </select>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <label style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--text-secondary)", textTransform: "uppercase" }}>Estimated Budget</label>
              <select
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                style={{
                  padding: "12px 16px",
                  border: "1px solid var(--border-light)",
                  borderRadius: "6px",
                  fontSize: "0.95rem",
                  outline: "none",
                  backgroundColor: "#FFFFFF",
                }}
                onFocus={(e) => e.target.style.borderColor = "var(--accent-blue)"}
                onBlur={(e) => e.target.style.borderColor = "var(--border-light)"}
              >
                <option value="Under $1,000">Under $1,000</option>
                <option value="$1,000 - $3,000">$1,000 - $3,000</option>
                <option value="$3,000 - $5,000">$3,000 - $5,000</option>
                <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                <option value="$10,000+">$10,000+</option>
              </select>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <label style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--text-secondary)", textTransform: "uppercase" }}>Project Scope</label>
              <textarea
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Describe your design specifications, product outlines, timeline needs..."
                style={{
                  padding: "12px 16px",
                  border: "1px solid var(--border-light)",
                  borderRadius: "6px",
                  fontSize: "0.95rem",
                  outline: "none",
                  minHeight: "120px",
                  resize: "vertical",
                }}
                onFocus={(e) => e.target.style.borderColor = "var(--accent-blue)"}
                onBlur={(e) => e.target.style.borderColor = "var(--border-light)"}
              />
            </div>

            <button type="submit" disabled={loading} className="btn-primary" style={{ display: "flex", justifyContent: "center", padding: "14px 0" }}>
              {loading ? "Submitting Estimations..." : "Submit Project lead"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
