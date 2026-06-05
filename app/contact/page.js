import SubPageHeader from "../components/SubPageHeader";
import Footer from "../components/Footer";

export const metadata = {
  title: "Contact — Where Christ Is",
  description: "Get in touch with the person behind Where Christ Is.",
};

export default function ContactPage() {
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
          Contact
        </h1>

        <div style={{ fontSize: "15px", lineHeight: 1.85, color: "var(--brown)" }}>
          <p style={{ marginBottom: "20px" }}>
            If you have a question, a word of encouragement, or something on
            your heart, you are welcome to reach out.
          </p>

          <p style={{ marginBottom: "32px", color: "var(--navy)", fontWeight: 600 }}>
            hello@wherechristis.com
          </p>

          <p style={{ fontSize: "13px", color: "var(--muted)", fontStyle: "italic" }}>
            Every message is read, and you are always welcome to write.
          </p>
        </div>
      </div>

      <Footer />
    </main>
  );
}