import { Lora } from "next/font/google";
import "./globals.css";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "Where Christ Is — Set your mind on things above",
  description:
    "A free, calm, daily moment to lift your eyes off this passing world and onto your eternal home in Christ. Colossians 3:2.",
  keywords: [
    "daily devotional",
    "Christian devotional",
    "heaven",
    "eternity",
    "Colossians 3:2",
    "set your mind on things above",
    "free devotional",
    "daily Bible verse",
    "Christian meditation",
    "eternal home",
  ],
  metadataBase: new URL("https://wherechristis.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Where Christ Is — Set your mind on things above",
    description:
      "A free, calm, daily moment to lift your eyes off this passing world and onto your eternal home in Christ.",
    url: "https://wherechristis.com",
    siteName: "Where Christ Is",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Where Christ Is — Set your mind on things above",
    description:
      "A free, calm, daily moment to lift your eyes off this passing world and onto your eternal home in Christ.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={lora.className}>{children}</body>
    </html>
  );
}