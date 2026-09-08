"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Logo from "@/components/shared/Logo";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "Stories", href: "/stories" },
  { name: "Builders", href: "/builders" },
  { name: "Startups", href: "/startups" },
  { name: "Discover", href: "/discover" },
  { name: "About", href: "/about" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-tsl-black/90 backdrop-blur-md border-b border-tsl-dark-grey/60 py-4 shadow-2xl"
          : "bg-transparent py-6 sm:py-8"
      )}
    >
      <nav className="max-w-container mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Logo variant="light" size="md" />

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8 lg:gap-10">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-xs lg:text-sm font-medium tracking-widest uppercase transition-colors duration-200 relative group py-1 font-mono",
                  isActive ? "text-tsl-blue font-bold" : "text-tsl-white-soft/80 hover:text-tsl-white"
                )}
              >
                {link.name}
                <span
                  className={cn(
                    "absolute bottom-0 left-0 w-full h-[2px] bg-tsl-blue transition-transform duration-300 origin-left scale-x-0 group-hover:scale-x-100",
                    isActive && "scale-x-100"
                  )}
                />
              </Link>
            );
          })}
        </div>

        {/* Desktop Primary Action CTA */}
        <div className="hidden md:flex items-center gap-5">
          <Link
            href="/app/feed"
            className="text-xs font-mono font-semibold uppercase tracking-wider text-tsl-grey hover:text-tsl-white transition-colors px-2 py-1"
          >
            Sign In
          </Link>
          <Link
            href="/signup"
            className="group relative inline-flex items-center justify-center px-5 py-2.5 text-xs font-display font-bold uppercase tracking-widest text-tsl-black bg-tsl-white rounded-none overflow-hidden transition-all duration-300 hover:bg-tsl-blue hover:shadow-[0_0_20px_rgba(0,212,255,0.4)]"
          >
            <span className="relative z-10 flex items-center gap-1.5">
              <span>JOIN THE LENS</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-tsl-white hover:text-tsl-blue focus:outline-none rounded-none"
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </nav>

      {/* Mobile Drawer Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[68px] bg-tsl-black/95 backdrop-blur-xl z-40 flex flex-col justify-between px-6 py-10 border-t border-tsl-dark-grey/50 transition-all duration-300">
          <div className="flex flex-col gap-6">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight transition-colors py-2 border-b border-tsl-dark-grey/30 flex items-center justify-between",
                    isActive ? "text-tsl-blue" : "text-tsl-white hover:text-tsl-blue"
                  )}
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="w-5 h-5 text-tsl-grey" />
                </Link>
              );
            })}
          </div>

          <div className="flex flex-col gap-4 pt-8 border-t border-tsl-dark-grey/60">
            <Link
              href="/signup"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-4 text-center text-xs font-display font-bold uppercase tracking-widest text-tsl-black bg-tsl-white hover:bg-tsl-blue transition-colors"
            >
              JOIN THE LENS
            </Link>
            <Link
              href="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 text-center text-xs font-mono uppercase tracking-wider text-tsl-grey hover:text-tsl-white"
            >
              Already Building? Sign In
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
