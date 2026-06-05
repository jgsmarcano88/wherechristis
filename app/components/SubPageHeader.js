import Link from "next/link";

export default function SubPageHeader() {
  return (
    <div style={{ textAlign: "center", marginBottom: "40px" }}>
      <Link
        href="/"
        style={{
          textDecoration: "none",
          display: "inline-block",
        }}
      >
        <span
          style={{
            fontSize: "11px",
            letterSpacing: "3px",
            color: "var(--gold)",
            fontWeight: 400,
          }}
        >
          WHERE
        </span>
        <br />
        <span
          style={{
            fontSize: "26px",
            color: "var(--navy)",
            fontStyle: "italic",
            fontWeight: 600,
          }}
        >
          Christ Is
        </span>
      </Link>

      <div
        style={{
          width: "48px",
          height: "1px",
          backgroundColor: "var(--gold)",
          margin: "24px auto 0",
        }}
      />
    </div>
  );
}