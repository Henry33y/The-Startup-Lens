"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface AuthSplitLayoutProps {
  children: React.ReactNode;
  mode: "login" | "signup";
}

export default function AuthSplitLayout({ children, mode }: AuthSplitLayoutProps) {
  const isSignup = mode === "signup";

  return (
    <div className="min-h-screen bg-[#07080B] text-white flex flex-col justify-center items-center p-4 sm:p-6 md:p-10 relative overflow-hidden selection:bg-[#00D4FF] selection:text-black">
      {/* 1. Atmospheric Outer Canvas (Radial Vignettes) */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_35%,rgba(0,212,255,0.07),rgba(7,8,11,0)_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_85%,rgba(2,132,199,0.05),transparent_60%)] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />

      {/* Floating Back Navigation */}
      <div className="w-full max-w-4xl mx-auto mb-4 flex items-center justify-between px-2 relative z-20">
        <Link
          href="/"
          className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-slate-400 hover:text-[#00D4FF] transition-colors group"
        >
          <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
          <span>Back to Home</span>
        </Link>
        <span className="text-[11px] font-mono uppercase tracking-widest text-slate-500 hidden sm:inline-block">
          The Startup Lens // Auth Terminal
        </span>
      </div>

      {/* 2. Floating Split Container */}
      <div className="max-w-4xl w-full mx-auto rounded-[24px] sm:rounded-[28px] overflow-hidden grid grid-cols-1 md:grid-cols-2 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.85)] border border-white/[0.08] relative z-10 bg-[#0C0F17]">
        
        {/* 3. Left Panel (Brand & Visual Anchor - Desktop) */}
        <div className="relative hidden md:flex flex-col justify-between p-8 lg:p-10 overflow-hidden bg-[#0A0D14]">
          {/* Background Documentary Image */}
          <Image
            src="/two-men-producing-radio-show-at-home.jpg"
            alt="African builders in action"
            fill
            priority
            unoptimized
            className="object-cover object-center filter grayscale contrast-125 brightness-75 scale-105"
          />

          {/* Dark Gradient Overlay & Subtle Cyan Glow */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#07080B] via-[#07080B]/60 to-[#07080B]/40 z-10" />
          <div className="absolute inset-0 bg-[#00D4FF]/5 mix-blend-color-dodge z-10 pointer-events-none" />

          {/* Top: Anchored Brand Logo */}
          <div className="relative z-20">
            <Link href="/" className="inline-block group">
              <Image
                src="/logos/TheStartUPLens-Logo-trimmed.png"
                alt="The Startup Lens"
                width={120}
                height={50}
                priority
                unoptimized
                className="h-10 w-auto object-contain transition-transform group-hover:scale-[1.02]"
              />
            </Link>
          </div>

          {/* Middle: Editorial Typography */}
          <div className="relative z-20 space-y-4 my-auto py-10">
            <div className="inline-flex items-center space-x-1.5 font-mono text-[10px] tracking-widest uppercase text-[#00D4FF] bg-[#00D4FF]/10 border border-[#00D4FF]/20 px-2.5 py-1 rounded-full">
              <span>{isSignup ? "BUILDER RADAR // JOIN" : "SECURE TERMINAL // AUTH"}</span>
            </div>

            <h2 className="font-display text-2xl lg:text-3xl font-bold uppercase tracking-tight text-white leading-tight">
              {isSignup ? "YOUR JOURNEY DESERVES TO BE SEEN." : "SEE WHAT'S BEING BUILT NEXT."}
            </h2>

            <p className="text-xs lg:text-sm text-slate-300/80 font-sans leading-relaxed">
              {isSignup
                ? "Discover, document, and amplify early-stage African builders shaping the continent's tech future."
                : "Access your builder profile, milestone logs, radar alerts, and founder network."}
            </p>
          </div>

          {/* Bottom: Active Builders Badge */}
          <div className="relative z-20">
            <div className="inline-flex items-center space-x-2 font-mono text-[11px] tracking-wider uppercase text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-full backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>1,420+ ACTIVE BUILDERS ON RADAR</span>
            </div>
          </div>
        </div>

        {/* Mobile Top Header (Visible on < md) */}
        <div className="md:hidden p-6 pb-2 border-b border-white/[0.06] bg-[#0A0D14]/90 flex items-center justify-between">
          <Link href="/">
            <Image
              src="/logos/TheStartUPLens-Logo-trimmed.png"
              alt="The Startup Lens"
              width={100}
              height={40}
              unoptimized
              className="h-7 w-auto object-contain"
            />
          </Link>
          <div className="inline-flex items-center space-x-1.5 font-mono text-[10px] tracking-wider uppercase text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>RADAR LIVE</span>
          </div>
        </div>

        {/* 4. Right Panel (The Auth Canvas) */}
        <div className="bg-[#0D111A] p-6 sm:p-8 lg:p-10 flex flex-col justify-center relative z-20">
          {children}
        </div>

      </div>

      {/* Footer Meta */}
      <div className="w-full max-w-4xl mx-auto mt-6 text-center text-[11px] font-mono text-slate-500 relative z-20">
        <span>© {new Date().getFullYear()} The Startup Lens. Dedicated to documenting Africa&apos;s builders.</span>
      </div>
    </div>
  );
}

