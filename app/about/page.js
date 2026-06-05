import SubPageHeader from "../components/SubPageHeader";
import Footer from "../components/Footer";

export const metadata = {
  title: "About — Where Christ Is",
  description:
    "Where Christ Is is a free, calm daily moment to lift your eyes off this passing world and onto your eternal home in Christ.",
};

export default function AboutPage() {
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
          About
        </h1>

        <div style={{ fontSize: "15px", lineHeight: 1.85, color: "var(--brown)", textAlign: "left" }}>
          <p style={{ marginBottom: "20px" }}>
            Where Christ Is is a free, calm, daily moment to lift your eyes off
            this passing world and onto your eternal home in Christ.
          </p>
          <p style={{ marginBottom: "20px" }}>
            Each day, you receive one verse about heaven and eternity, a short
            meditation connecting it to ordinary life, and one question to carry
            with you. Then it sends you away — back to your real life and toward
            God.
          </p>
          <p style={{ marginBottom: "20px" }}>
            Almost every Christian app today is built for engagement — streaks,
            feeds, notifications, daily active users. That is the opposite of
            the verse. Where Christ Is is built to do the reverse: lift your
            eyes for about sixty seconds and then release you.
          </p>
          <p style={{ marginBottom: "20px" }}>
            There are no streaks, no guilt mechanics, no feeds, no ads, no
            paywall. It is free forever. Success is measured by a heart turned
            upward and a person released — not by time in app.
          </p>
          <p style={{ marginBottom: "20px" }}>
            Where Christ Is is the companion to WalkedWithGod
            (walkedwithgod.com). WalkedWithGod is where you meet Jesus. Where
            Christ Is is where you walk with Him daily, eyes fixed on home. One
            mission, two halves.
          </p>
        </div>
      </div>

      <Footer />
    </main>
  );
}