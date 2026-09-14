import type { Metadata } from "next";
import { Cinzel, Space_Grotesk, JetBrains_Mono, Architects_Daughter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const architectsDaughter = Architects_Daughter({
  variable: "--font-architects",
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

const hammockFont = localFont({
  src: "../assets/fonts/hammock.otf",
  variable: "--font-hammock",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vikash Kumar | Software Developer",
  description:
    "Premium portfolio of Vikash Kumar — Software Developer specializing in modern web applications, scalable systems, and elegant code.",
  keywords: [
    "Vikash Kumar",
    "Software Developer",
    "Full Stack Developer",
    "Portfolio",
    "Web Developer",
    "React",
    "Next.js",
    "TypeScript",
  ],
  authors: [{ name: "Vikash Kumar" }],
  openGraph: {
    title: "Vikash Kumar | Software Developer",
    description:
      "Premium portfolio of Vikash Kumar — Software Developer specializing in modern web applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cinzel.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} ${architectsDaughter.variable} ${hammockFont.variable}`}
    >
      <body className="bg-[#fffdd0] text-black antialiased">
        <div className="bg-splatter" aria-hidden="true" />
        <div className="noise-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
