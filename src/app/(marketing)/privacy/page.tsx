import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy & Data Architecture | The Startup Lens",
  description: "Privacy policy, data sovereignty, and founder protection principles at The Startup Lens.",
  openGraph: {
    title: "Privacy & Data Architecture | The Startup Lens",
    description: "Privacy policy and founder protection principles at The Startup Lens.",
    url: "https://thestartuplens.com/privacy",
    siteName: "The Startup Lens",
    images: [
      {
        url: "/logos/TheStartUPLens-Logo-white.png",
        width: 1200,
        height: 630,
        alt: "The Startup Lens — Privacy",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy & Data Architecture | The Startup Lens",
    description: "Privacy policy at The Startup Lens.",
    images: ["/logos/TheStartUPLens-Logo-white.png"],
  },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-tsl-black text-tsl-white pt-32 pb-24 px-6 sm:px-10">
      <div className="max-w-3xl mx-auto space-y-12">
        <Link
          href="/"
          className="inline-flex items-center space-x-2 text-xs font-mono text-tsl-grey hover:text-tsl-blue transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>BACK TO HOME</span>
        </Link>

        <div className="space-y-4">
          <div className="flex items-center space-x-2 text-xs font-mono text-tsl-blue uppercase tracking-widest">
            <Shield className="w-4 h-4" />
            <span>LEGAL & DATA SOVEREIGNTY PROTOCOL</span>
          </div>
          <h1 className="heading-hero text-tsl-white">
            PRIVACY POLICY.
          </h1>
          <p className="text-xs font-mono text-tsl-grey">
            EFFECTIVE DATE: OCTOBER 2026 • REVISION 2.1
          </p>
        </div>

        <div className="surface-card p-8 sm:p-10 border border-tsl-dark-grey space-y-8 text-tsl-white-soft font-sans leading-relaxed text-sm sm:text-base">
          <section className="space-y-3">
            <h2 className="font-display text-xl font-bold uppercase text-tsl-white">
              1. OUR FOUNDER-FIRST PRIVACY PRINCIPLE
            </h2>
            <p>
              The Startup Lens is committed to documenting the African technological revolution while respecting the intellectual property and confidentiality of early-stage builders. We only publish information, metrics, and milestones that founders explicitly choose to share in public or have agreed to publish through editorial interviews.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl font-bold uppercase text-tsl-white">
              2. INFORMATION WE COLLECT
            </h2>
            <p>
              When you create a builder profile, join the lens signal list, or submit a venture for tracking, we collect:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-tsl-grey">
              <li>Profile identity details (name, email address, role, social profiles)</li>
              <li>Company metadata (startup name, sector, stage, problem/solution statement)</li>
              <li>Public milestones and founder drop recordings you submit</li>
              <li>Technical analytics regarding website navigation and engagement</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl font-bold uppercase text-tsl-white">
              3. HOW WE USE YOUR DATA
            </h2>
            <p>
              Your data powers the discovery engine, builder radar, and ecosystem intelligence reports. We do not sell your personal data or private contact information to third-party data brokers.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl font-bold uppercase text-tsl-white">
              4. DATA DELETION & EDITORIAL CORRECTIONS
            </h2>
            <p>
              Builders maintain full sovereignty over their profiles. If you wish to update, modify, or remove your profile or milestones from the index, contact our desk at <span className="text-tsl-blue font-mono">editorial@thestartuplens.com</span>.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
