import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"),
  title: "The Startup Lens | See What's Being Built Next",
  description:
    "The African startup ecosystem platform focused on discovering, documenting, and amplifying early-stage builders before everyone else catches on.",
  icons: {
    icon: "/logos/shirt-logo.png",
    shortcut: "/logos/shirt-logo.png",
    apple: "/logos/shirt-logo.png",
  },
  keywords: [
    "African startups",
    "African founders",
    "Build in Public Africa",
    "African Tech Ecosystem",
    "Early stage startups Africa",
    "Lagos tech",
    "Nairobi startups",
  ],
  authors: [{ name: "The Startup Lens Team" }],
  openGraph: {
    title: "The Startup Lens | See What's Being Built Next",
    description:
      "Discover early-stage African founders, startups, and progress before everyone else catches on.",
    url: "https://thestartuplens.com",
    siteName: "The Startup Lens",
    images: [
      {
        url: "/logos/TheStartUPLens-Logo-white.png",
        width: 1200,
        height: 630,
        alt: "The Startup Lens Brand Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Startup Lens | See What's Being Built Next",
    description: "Discover early-stage African builders and raw startup progress.",
    images: ["/logos/TheStartUPLens-Logo-white.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`} suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className="min-h-screen bg-tsl-black text-tsl-white selection:bg-tsl-blue selection:text-tsl-black antialiased"
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
