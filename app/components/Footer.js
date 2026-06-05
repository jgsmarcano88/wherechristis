import Link from "next/link";

export default function Footer() {
  const links = [
    { href: "/about", label: "About" },
    { href: "/how-it-works", label: "How It Works" },
    { href: "/faq", label: "Common Questions" },
    { href: "/support", label: "Support This Mission" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <footer
      style={{
        textAlign: "center",
        padding: "40px 24px 48px",
        maxWidth: "540px",
        margin: "0 auto",
      }}
    >
      <div
        style={{
          width: "32px",
          height: "1px",
          backgroundColor: "var(--gold)",
          margin: "0 auto 24px",
        }}
      />
      <nav
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "8px 20px",
        }}
      >
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            style={{
              fontSize: "12px",
              color: "var(--muted)",
              textDecoration: "none",
              letterSpacing: "0.5px",
            }}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <p
        style={{
          fontSize: "11px",
          color: "var(--muted)",
          marginTop: "20px",
          opacity: 0.5,
        }}
      >
        Where Christ Is
      </p>
    </footer>
  );
}