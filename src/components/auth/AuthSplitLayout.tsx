"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface AuthSplitLayoutProps {
  children: React.ReactNode;
  mode: "login" | "signup";
}

export default function AuthSplitLayout({ children, mode }: AuthSplitLayoutProps) {
  const isSignup = mode === "signup";

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 flex flex-col justify-center items-center px-4 sm:px-6 md:px-10 pt-28 sm:pt-36 pb-16 relative overflow-hidden selection:bg-[#0284C7] selection:text-white">
      {/* 1. Subtle Atmospheric Light Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_15%,rgba(2,132,199,0.06),transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_85%,rgba(2,132,199,0.03),transparent_50%)] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-slate-200/60 pointer-events-none" />

      {/* 2. Floating Split Container (Sharp rectangular card without border-radius) */}
      <div className="max-w-4xl w-full mx-auto rounded-none overflow-hidden grid grid-cols-1 md:grid-cols-2 shadow-[0_20px_60px_-15px_rgba(15,23,42,0.09),0_1px_3px_rgba(15,23,42,0.05)] border border-slate-200/90 relative z-10 bg-white">
        
        {/* 3. Left Panel (Brand & Visual Anchor - Desktop) */}
        <div className="relative hidden md:flex flex-col justify-between p-8 lg:p-12 overflow-hidden bg-slate-950 min-h-[520px]">
          {/* Background Documentary Image */}
          <Image
            src="/two-men-producing-radio-show-at-home.jpg"
            alt="African builders in action"
            fill
            priority
            unoptimized
            className="object-cover object-center filter grayscale contrast-125 brightness-90 scale-105"
          />

          {/* Editorial Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/40 z-10" />
          <div className="absolute inset-0 bg-[#00D4FF]/5 mix-blend-color-dodge z-10 pointer-events-none" />

          {/* Top: Anchored Brand Logo */}
          <div className="relative z-20">
            <Link href="/" className="inline-block group">
              <Image
                src="/logos/TheStartUPLens-Logo-white-trimmed.png"
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
          <div className="relative z-20 space-y-4 my-auto py-8">
            <h2 className="font-display text-2xl lg:text-3xl font-bold uppercase tracking-tight text-white leading-tight">
              {isSignup ? "YOUR JOURNEY DESERVES TO BE SEEN." : "SEE WHAT'S BEING BUILT NEXT."}
            </h2>

            <p className="text-xs lg:text-sm text-slate-300 font-sans leading-relaxed">
              {isSignup
                ? "Discover, document, and amplify early-stage African builders shaping the continent's tech future."
                : "Access your builder profile, milestone logs, radar alerts, and founder network."}
            </p>
          </div>

          {/* Bottom spacer to keep visual balance */}
          <div className="relative z-20" />
        </div>

        {/* Mobile Top Header (Visible on < md) */}
        <div className="md:hidden p-5 border-b border-slate-100 bg-slate-50 flex items-center justify-between">
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
        </div>

        {/* 4. Right Panel (The Clean Light Auth Canvas) */}
        <div className="bg-white p-6 sm:p-8 lg:p-10 flex flex-col justify-center relative z-20">
          {children}
        </div>

      </div>

      {/* Footer Meta */}
      <div className="w-full max-w-4xl mx-auto mt-6 text-center text-[11px] font-mono text-slate-400 relative z-20">
        <span>© {new Date().getFullYear()} The Startup Lens. Dedicated to documenting Africa&apos;s builders.</span>
      </div>
    </div>
  );
}
