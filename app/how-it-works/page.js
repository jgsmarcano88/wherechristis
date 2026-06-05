import SubPageHeader from "../components/SubPageHeader";
import Footer from "../components/Footer";

export const metadata = {
  title: "How It Works — Where Christ Is",
  description:
    "Open it. Read today's verse, meditation, and question. Close it and go live it.",
};

export default function HowItWorksPage() {
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
          How It Works
        </h1>

        <div style={{ fontSize: "15px", lineHeight: 1.85, color: "var(--brown)", textAlign: "left" }}>
          <p style={{ marginBottom: "24px" }}>
            Where Christ Is is as simple as it looks. There is nothing hidden,
            nothing to unlock, and nothing to configure.
          </p>

          <div style={{ marginBottom: "24px" }}>
            <p style={{ color: "var(--navy)", fontWeight: 600, marginBottom: "6px" }}>Open it.</p>
            <p>Visit the site any time. No login, no account, no setup. It is ready the moment you arrive.</p>
          </div>

          <div style={{ marginBottom: "24px" }}>
            <p style={{ color: "var(--navy)", fontWeight: 600, marginBottom: "6px" }}>Read today's entry.</p>
            <p>Each day brings one verse about heaven and eternity, a short meditation connecting it to real life, and one question to carry with you. It takes about sixty seconds.</p>
          </div>

          <div style={{ marginBottom: "24px" }}>
            <p style={{ color: "var(--navy)", fontWeight: 600, marginBottom: "6px" }}>Close it and go live it.</p>
            <p>That is the whole point. The app succeeds by being shut. A new entry waits tomorrow, but it will not chase you.</p>
          </div>

          <div style={{ marginBottom: "24px" }}>
            <p style={{ color: "var(--navy)", fontWeight: 600, marginBottom: "6px" }}>Share if moved.</p>
            <p>If an entry touches you, you can share it as an image. Offered gently, never pushed.</p>
          </div>

          <div style={{ marginBottom: "24px" }}>
            <p style={{ color: "var(--navy)", fontWeight: 600, marginBottom: "6px" }}>Available in three languages.</p>
            <p>English, Español, and Français. Switch at any time from the main page.</p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}