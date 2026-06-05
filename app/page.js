"use client";

import { useState, useEffect } from "react";
import { languages, entriesByLang, ui } from "./data/index.js";
import ShareButton from "./components/ShareButton.js";
import Footer from "./components/Footer.js";

export default function Home() {
  const [lang, setLang] = useState("en");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("wci-lang");
    if (saved && entriesByLang[saved]) setLang(saved);
  }, []);

  function changeLang(code) {
    setLang(code);
    setOpen(false);
    try {
      localStorage.setItem("wci-lang", code);
    } catch (e) {}
  }

  const entries = entriesByLang[lang];
  const t = ui[lang];

  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const dayOfYear = Math.floor((now - start) / (1000 * 60 * 60 * 24));
  const index = dayOfYear % entries.length;
  const today = entries[index];

  const currentLabel =
    languages.find((l) => l.code === lang)?.label || "English";

  return (
    <>
      <main
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "64px 24px",
          position: "relative",
        }}
      >
        {/* Language switcher — top right */}
        <div
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            fontSize: "13px",
          }}
        >
          <button
            onClick={() => setOpen(!open)}
            style={{
              background: "none",
              border: "none",
              color: "var(--gold)",
              fontFamily: "inherit",
              fontSize: "13px",
              cursor: "pointer",
              padding: "6px 10px",
              letterSpacing: "0.5px",
            }}
          >
            {currentLabel} ▾
          </button>
          {open && (
            <div
              style={{
                position: "absolute",
                right: 0,
                marginTop: "4px",
                backgroundColor: "#FFFDF9",
                border: "1px solid rgba(201,168,76,0.4)",
                borderRadius: "8px",
                overflow: "hidden",
                boxShadow: "0 2px 10px rgba(26,58,107,0.08)",
                minWidth: "120px",
              }}
            >
              {languages.map((l) => (
                <button
                  key={l.code}
                  onClick={() => changeLang(l.code)}
                  style={{
                    display: "block",
                    width: "100%",
                    textAlign: "left",
                    background:
                      l.code === lang ? "rgba(201,168,76,0.12)" : "none",
                    border: "none",
                    color: l.code === lang ? "var(--gold)" : "var(--brown)",
                    fontFamily: "inherit",
                    fontSize: "13px",
                    cursor: "pointer",
                    padding: "10px 14px",
                  }}
                >
                  {l.label}
                </button>
              ))}
            </div>
          )}
        </div>

        <div style={{ maxWidth: "540px", width: "100%", textAlign: "center" }}>
          {/* Logo */}
          <div style={{ marginBottom: "44px" }}>
            <p
              style={{
                fontSize: "11px",
                letterSpacing: "4px",
                color: "var(--gold)",
                fontWeight: 400,
                marginBottom: "6px",
              }}
            >
              WHERE
            </p>
            <p
              style={{
                fontSize: "28px",
                color: "var(--navy)",
                fontStyle: "italic",
                fontWeight: 400,
                lineHeight: 1.2,
              }}
            >
              Christ Is
            </p>
            <div
              style={{
                width: "64px",
                height: "1px",
                backgroundColor: "var(--gold)",
                margin: "10px auto 0",
                opacity: 0.6,
              }}
            />
          </div>

          {/* Verse card */}
          <div
            style={{
              backgroundColor: "var(--dawn-light)",
              borderRadius: "8px",
              padding: "36px 32px",
              marginBottom: "44px",
              maxWidth: "520px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <p
              style={{
                fontSize: "19px",
                lineHeight: 1.8,
                color: "var(--navy)",
                fontStyle: "italic",
                fontWeight: 400,
              }}
            >
              {today.verse}
            </p>
            <p
              style={{
                fontSize: "13px",
                color: "var(--muted)",
                marginTop: "16px",
              }}
            >
              {today.reference}
            </p>
          </div>

          {/* Meditation */}
          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.9,
              color: "var(--brown)",
              textAlign: "center",
              marginBottom: "44px",
              padding: "0 8px",
            }}
          >
            {today.meditation}
          </p>

          <div
            style={{
              width: "32px",
              height: "1px",
              backgroundColor: "var(--gold)",
              margin: "0 auto 40px",
            }}
          />

          {/* Question */}
          <p
            style={{
              fontSize: "15px",
              lineHeight: 1.8,
              color: "var(--navy)",
              fontStyle: "italic",
              marginBottom: "52px",
              padding: "0 12px",
            }}
          >
            {today.question}
          </p>

          <div
            style={{
              width: "32px",
              height: "1px",
              backgroundColor: "var(--gold)",
              margin: "0 auto 40px",
            }}
          />

          {/* Closing */}
          <p
            style={{
              fontSize: "13px",
              letterSpacing: "1px",
              color: "var(--muted)",
              fontStyle: "italic",
            }}
          >
            {t.closing}
          </p>

          {/* Share */}
          <ShareButton
            verse={today.verse}
            reference={today.reference}
            meditation={today.meditation}
            shareLabel={t.share}
            preparingLabel={t.preparing}
            tagline={t.tagline}
          />

          {/* Tagline */}
          <p
            style={{
              fontSize: "12px",
              color: "var(--muted)",
              marginTop: "40px",
              opacity: 0.6,
            }}
          >
            &ldquo;{t.tagline}&rdquo;
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}