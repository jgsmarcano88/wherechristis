"use client";

import { useEffect, useState } from "react";
import { pages } from "../data/pages.js";
import SubPageHeader from "../components/SubPageHeader";
import Footer from "../components/Footer";

export default function ContactPage() {
  const [lang, setLang] = useState("en");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("wci-lang");
      if (saved && pages[saved]) setLang(saved);
    } catch (e) {}
  }, []);

  const t = pages[lang].contact;

  return (
    <main style={{ minHeight: "100vh", padding: "48px 24px 0" }}>
      <div style={{ maxWidth: "540px", margin: "0 auto", textAlign: "center" }}>
        <SubPageHeader />

        <h1
          style={{
            fontSize: "22px",
            color: "var(--navy)",
            marginBottom: "32px",
            fontWeight: 600,
          }}
        >
          {t.title}
        </h1>

        <div style={{ fontSize: "15px", lineHeight: 1.85, color: "var(--brown)" }}>
          <p style={{ marginBottom: "20px" }}>{t.intro}</p>

          <p style={{ marginBottom: "32px", color: "var(--navy)", fontWeight: 600 }}>
            hello@wherechristis.com
          </p>

          <p style={{ fontSize: "13px", color: "var(--muted)", fontStyle: "italic" }}>
            {t.note}
          </p>
        </div>
      </div>

      <Footer />
    </main>
  );
}