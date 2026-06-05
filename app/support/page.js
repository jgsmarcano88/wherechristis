import SubPageHeader from "../components/SubPageHeader";
import Footer from "../components/Footer";

export const metadata = {
  title: "Support This Mission — Where Christ Is",
  description: "Where Christ Is is free forever. If it has blessed you, you can help sustain it.",
};

export default function SupportPage() {
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
          Support This Mission
        </h1>

        <div style={{ fontSize: "15px", lineHeight: 1.85, color: "var(--brown)" }}>
          <p style={{ marginBottom: "20px" }}>
            Where Christ Is is free forever — no ads, no paywall, no premium
            tier. It exists to lift eyes upward and then send people away, back
            to their real lives and toward God.
          </p>

          <p style={{ marginBottom: "20px" }}>
            If this daily moment has blessed you, the best way to support it is
            simple: share it with someone who could use a quiet moment with God.
          </p>

          <p style={{ marginBottom: "20px" }}>
            Where Christ Is is the companion to WalkedWithGod (walkedwithgod.com).
            Both are free, both pointed away from themselves, and both exist for
            one purpose: to point people to Christ.
          </p>

          <div
            style={{
              width: "32px",
              height: "1px",
              backgroundColor: "var(--gold)",
              margin: "32px auto",
            }}
          />

          <p style={{ fontSize: "13px", color: "var(--muted)", fontStyle: "italic" }}>
            If God moves your heart to give financially, you can reach us at
            hello@walkedwithgod.com and we will point you in the right direction.
          </p>
        </div>
      </div>

      <Footer />
    </main>
  );
}