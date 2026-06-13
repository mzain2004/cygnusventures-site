import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cygnus Ventures",
  description: "Cygnus Ventures SMC Pvt Ltd is a cybersecurity product company building PhishSlayer, an autonomous SOC intelligence platform for MSSPs and enterprise security teams.",
  keywords: [
    "Cygnus Ventures",
    "PhishSlayer",
    "cybersecurity company",
    "autonomous SOC",
    "SOC intelligence",
    "MSSP platform",
    "cloud security",
    "DevSecOps",
    "Pakistan cybersecurity startup"
  ],
  openGraph: {
    title: "Cygnus Ventures — Autonomous Security Products",
    description: "Cygnus Ventures SMC Pvt Ltd is a cybersecurity product company building PhishSlayer, an autonomous SOC intelligence platform for MSSPs and enterprise security teams.",
    siteName: "Cygnus Ventures",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#FBFAF7] text-[#201827] flex flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
