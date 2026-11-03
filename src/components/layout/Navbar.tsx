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

  const isDarkPage = pathname.startsWith("/startups");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 flex items-center",
        isScrolled
          ? isDarkPage
            ? "h-[68px] sm:h-[72px] bg-[#07080B]/90 backdrop-blur-md border-b border-white/[0.08] shadow-2xl"
            : "h-[68px] sm:h-[72px] bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm"
          : "h-[80px] sm:h-[88px] bg-transparent"
      )}
    >
      <nav className="w-full max-w-container mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 flex items-center justify-between">
        {/* Brand Logo - Enlarged while strictly maintaining header height */}
        <Logo variant={isDarkPage ? "light" : "dark"} size="header" />

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8 lg:gap-10">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-xs lg:text-sm font-sans font-medium tracking-wider uppercase transition-colors duration-200 relative group py-1",
                  isActive
                    ? isDarkPage
                      ? "text-[#00D4FF] font-bold"
                      : "text-tsl-blue font-bold"
                    : isDarkPage
                    ? "text-slate-300 hover:text-white"
                    : "text-tsl-white-soft/80 hover:text-tsl-white"
                )}
              >
                {link.name}
                <span
                  className={cn(
                    "absolute bottom-0 left-0 w-full h-[2px] transition-transform duration-300 origin-left scale-x-0 group-hover:scale-x-100",
                    isDarkPage ? "bg-[#00D4FF]" : "bg-tsl-blue",
                    isActive && "scale-x-100"
                  )}
                />
              </Link>
            );
          })}
        </div>

        {/* Desktop Primary Action CTA */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            href="/login"
            className={cn(
              "group relative px-2.5 py-1 text-xs font-sans font-medium uppercase tracking-wider transition-colors duration-300 inline-flex items-center",
              isDarkPage ? "text-slate-400 hover:text-white" : "text-tsl-grey hover:text-tsl-white"
            )}
          >
            <span>Sign In</span>
            <span
              className={cn(
                "absolute bottom-0 left-0 w-full h-[2px] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out",
                isDarkPage ? "bg-[#00D4FF]" : "bg-tsl-blue"
              )}
            />
          </Link>
          <Link
            href="/signup"
            className="group relative inline-flex items-center justify-center btn-nav text-xs font-display font-bold uppercase tracking-widest text-black bg-white rounded-none overflow-hidden transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,212,255,0.45)]"
          >
            {/* Color fill layer sliding from bottom */}
            <span className="absolute inset-0 bg-[#00D4FF] transition-transform duration-500 ease-out origin-bottom translate-y-full group-hover:translate-y-0 pointer-events-none" />

            <span className="relative z-10 flex items-center gap-1.5 transition-colors duration-300 group-hover:text-black pointer-events-none">
              <span>JOIN THE LENS</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={cn(
            "md:hidden p-2 focus:outline-none rounded-none transition-colors",
            isDarkPage ? "text-white hover:text-[#00D4FF]" : "text-tsl-white hover:text-tsl-blue"
          )}
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </nav>

      {/* Mobile Drawer Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className={cn(
            "md:hidden fixed inset-0 top-[68px] backdrop-blur-xl z-40 flex flex-col justify-between px-6 py-10 transition-all duration-300",
            isDarkPage
              ? "bg-[#07080B]/98 border-t border-white/[0.08] text-white"
              : "bg-white/98 border-t border-slate-200 text-slate-900"
          )}
        >
          <div className="flex flex-col gap-6">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight transition-colors py-2 border-b flex items-center justify-between",
                    isDarkPage
                      ? isActive
                        ? "text-[#00D4FF] border-white/10"
                        : "text-white hover:text-[#00D4FF] border-white/10"
                      : isActive
                      ? "text-tsl-blue border-slate-200"
                      : "text-slate-900 hover:text-tsl-blue border-slate-200"
                  )}
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="w-5 h-5 text-slate-400" />
                </Link>
              );
            })}
          </div>

          <div
            className={cn(
              "flex flex-col gap-4 pt-8 border-t",
              isDarkPage ? "border-white/10" : "border-slate-200"
            )}
          >
            <Link
              href="/signup"
              onClick={() => setMobileMenuOpen(false)}
              className="group relative w-full inline-flex items-center justify-center py-4 text-center text-xs font-display font-bold uppercase tracking-widest text-black bg-white overflow-hidden transition-all duration-300 shadow-[0_0_20px_rgba(0,212,255,0.3)]"
            >
              <span className="absolute inset-0 bg-[#00D4FF] transition-transform duration-500 ease-out origin-bottom translate-y-full group-hover:translate-y-0 pointer-events-none" />
              <span className="relative z-10 group-hover:text-black">JOIN THE LENS</span>
            </Link>
            <Link
              href="/login"
              onClick={() => setMobileMenuOpen(false)}
              className={cn(
                "group relative w-full inline-flex items-center justify-center py-3.5 text-center text-xs font-sans font-medium uppercase tracking-wider overflow-hidden transition-all duration-300 border",
                isDarkPage
                  ? "bg-white/[0.04] border-white/10 text-slate-300 hover:text-white"
                  : "bg-slate-100 border-slate-200 text-slate-700 hover:text-slate-900"
              )}
            >
              <span className="relative z-10">Already Building? Sign In</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
