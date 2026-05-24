import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "V2 Labs | Premium Digital Studio & Agency",
  description: "We build premium digital experiences that drive results. Expert custom websites, web applications, e-commerce solutions, mobile responsive designs, and branding.",
  keywords: ["V2 Labs", "digital agency", "custom website development", "web application development", "shopify ecommerce", "wordpress websites", "video editing", "logo design", "mobile responsive design"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <Navbar />
        <main style={{ flex: 1 }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
