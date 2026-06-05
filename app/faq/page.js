"use client";

import { useEffect, useState } from "react";
import { pages } from "../data/pages.js";
import SubPageHeader from "../components/SubPageHeader";
import Footer from "../components/Footer";

export default function FaqPage() {
  const [lang, setLang] = useState("en");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("wci-lang");
      if (saved && pages[saved]) setLang(saved);
    } catch (e) {}
  }, []);

  const t = pages[lang].faq;

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

        <div style={{ fontSize: "15px", lineHeight: 1.85, color: "var(--brown)", textAlign: "left" }}>
          {t.questions.map((item, i) => (
            <div key={i} style={{ marginBottom: "28px" }}>
              <p style={{ color: "var(--navy)", fontWeight: 600, marginBottom: "6px" }}>
                {item.q}
              </p>
              <p>{item.a}</p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}