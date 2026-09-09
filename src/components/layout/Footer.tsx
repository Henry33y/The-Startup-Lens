"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "@/components/shared/Logo";
import { CheckCircle2 } from "lucide-react";

const FOOTER_COLUMNS = [
  {
    title: "EXPLORE",
    links: [
      { name: "Editorial Stories", href: "/stories" },
      { name: "Builders On Radar", href: "/builders" },
      { name: "Startup Index", href: "/startups" },
      { name: "Founder Drops", href: "/founder-drops" },
      { name: "Discovery Engine", href: "/discover" },
    ],
  },
  {
    title: "PLATFORM",
    links: [
      { name: "About The Lens", href: "/about" },
      { name: "Submit Startup", href: "/submit" },
      { name: "Submit Story", href: "/submit" },
      { name: "Events & Hubs", href: "/events" },
      { name: "Contact Team", href: "/contact" },
    ],
  },
  {
    title: "BUILDERS",
    links: [
      { name: "Create Profile", href: "/signup" },
      { name: "Document Journey", href: "/signup" },
      { name: "Sign In", href: "/login" },
      { name: "Admin CMS", href: "/admin/dashboard" },
    ],
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail("");
  };

  return (
    <footer className="bg-tsl-black border-t border-tsl-dark-grey/60 pt-16 pb-12 text-tsl-white">
      <div className="max-w-container mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
        {/* Compact Footer Newsletter Section */}
        <div className="pb-12 mb-12 border-b border-tsl-dark-grey/50 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="space-y-1 max-w-md">
            <div className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-tsl-white">
              DON&apos;T MISS THE SIGNAL.
            </div>
            <p className="text-sm text-tsl-grey font-sans">
              Stories, builders and startups worth watching.
            </p>
          </div>

          {subscribed ? (
            <div className="flex items-center space-x-2 text-tsl-blue font-mono text-xs uppercase tracking-wider py-3">
              <CheckCircle2 className="w-4 h-4 text-tsl-blue" />
              <span>YOU&apos;RE ON THE LENS SIGNAL LIST. WELCOME.</span>
            </div>
          ) : (
            <form
              onSubmit={handleSubscribe}
              className="flex flex-col sm:flex-row items-stretch gap-3 w-full lg:w-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                required
                className="bg-tsl-surface border border-tsl-dark-grey px-4 py-3 text-xs sm:text-sm text-tsl-white placeholder:text-tsl-grey/70 focus:outline-none focus:border-tsl-blue w-full sm:w-72 font-sans"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-tsl-blue text-tsl-black font-display font-bold text-xs uppercase tracking-widest hover:bg-tsl-white transition-colors"
              >
                SUBSCRIBE
              </button>
            </form>
          )}
        </div>

        {/* Main Footer Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-tsl-dark-grey/40">
          {/* Brand & Manifesto Column */}
          <div className="md:col-span-5 space-y-6">
            <Logo variant="light" size="lg" />
            <p className="text-tsl-grey text-sm max-w-md leading-relaxed font-sans">
              The Bloomberg + YouTube + LinkedIn for early-stage African builders. We discover, document, and amplify founders shaping Africa&apos;s tech future before everyone else catches on.
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center space-x-2 px-3 py-1 bg-tsl-surface border border-tsl-dark-grey text-xs font-mono text-tsl-blue">
                <span className="w-2 h-2 rounded-full bg-tsl-blue animate-ping" />
                <span>AFRICAN ECOSYSTEM REAL-TIME FEED</span>
              </span>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {FOOTER_COLUMNS.map((column) => (
              <div key={column.title} className="space-y-4">
                <h4 className="font-display text-xs font-bold uppercase tracking-widest text-tsl-grey">
                  {column.title}
                </h4>
                <ul className="space-y-2.5">
                  {column.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-sm text-tsl-white-soft/70 hover:text-tsl-blue transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-tsl-grey space-y-4 sm:space-y-0">
          <p suppressHydrationWarning>© {new Date().getFullYear()} The Startup Lens. Built for African Builders.</p>
          <div className="flex items-center space-x-6">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-tsl-white transition-colors">
              X / TWITTER
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-tsl-white transition-colors">
              LINKEDIN
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-tsl-white transition-colors">
              YOUTUBE
            </a>
            <Link href="/privacy" className="hover:text-tsl-white transition-colors">
              PRIVACY
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
