import entries from "./data/entries.js";

export default function Home() {
  /* Pick today's entry by cycling through the 30 entries based on the date */
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const dayOfYear = Math.floor((now - start) / (1000 * 60 * 60 * 24));
  const index = dayOfYear % entries.length;
  const today = entries[index];

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "64px 24px",
      }}
    >
      <div
        style={{
          maxWidth: "540px",
          width: "100%",
          textAlign: "center",
        }}
      >
        {/* Logo — Option D: WHERE small gold, Christ Is large navy italic */}
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

        {/* Verse block with dawn glow */}
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
              fontStyle: "normal",
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

        {/* Gold divider */}
        <div
          style={{
            width: "32px",
            height: "1px",
            backgroundColor: "var(--gold)",
            margin: "0 auto 40px",
          }}
        />

        {/* Carry-with-you question */}
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

        {/* Gold divider */}
        <div
          style={{
            width: "32px",
            height: "1px",
            backgroundColor: "var(--gold)",
            margin: "0 auto 40px",
          }}
        />

        {/* Closing line */}
        <p
          style={{
            fontSize: "13px",
            letterSpacing: "1px",
            color: "var(--muted)",
            fontStyle: "italic",
          }}
        >
          Now close this, and go live it.
        </p>

        {/* Tagline at the very bottom */}
        <p
          style={{
            fontSize: "12px",
            color: "var(--muted)",
            marginTop: "56px",
            opacity: 0.6,
          }}
        >
          &ldquo;Set your mind on things above.&rdquo;
        </p>
      </div>
    </main>
  );
}