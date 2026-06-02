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
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={lora.className}>{children}</body>
    </html>
  );
}