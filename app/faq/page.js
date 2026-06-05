import SubPageHeader from "../components/SubPageHeader";
import Footer from "../components/Footer";

export const metadata = {
  title: "Common Questions — Where Christ Is",
  description:
    "Answers to common questions about Where Christ Is.",
};

export default function FaqPage() {
  const questions = [
    {
      q: "Is this free?",
      a: "Yes, completely. No account, no payment, no ads. Free forever.",
    },
    {
      q: "Why does it tell me to leave?",
      a: "Because that is the whole point. It exists to lift your eyes to Christ for a moment, then return you to your real life. It is not trying to keep you.",
    },
    {
      q: "Is there a new entry every day?",
      a: "Yes, a new verse and meditation each day. There are no streaks and nothing is lost if you miss a day.",
    },
    {
      q: "Do I need to sign up?",
      a: "No. No login, no name, no tracking. Just open it.",
    },
    {
      q: "What Bible translation do you use?",
      a: "English entries use the New American Standard Bible (NASB). Spanish entries use the Reina-Valera 1960. French entries use the Louis Segond 1910. All on the theme of heaven and eternity.",
    },
    {
      q: "Can I share it?",
      a: "Yes. Any entry can be shared as a quiet image. Offered, never pushed.",
    },
  ];

  return (
    <main style={{ minHeight: "100vh", padding: "48px 24px 0" }}>
      <div style={{ maxWidth: "540px", margin: "0 auto" }}>
        <SubPageHeader />

        <h1
          style={{
            fontSize: "22px",
            color: "var(--navy)",
            textAlign: "center",
            marginBottom: "32px",
            fontWeight: 600,
          }}
        >
          Common Questions
        </h1>

        <div style={{ fontSize: "15px", lineHeight: 1.85, color: "var(--brown)" }}>
          {questions.map((item, i) => (
            <div key={i} style={{ marginBottom: "28px" }}>
              <p
                style={{
                  color: "var(--navy)",
                  fontWeight: 600,
                  marginBottom: "6px",
                }}
              >
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