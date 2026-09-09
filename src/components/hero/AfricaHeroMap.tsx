"use client";

export default function AfricaHeroMap() {
  return (
    <div
      aria-hidden="true"
      className="absolute pointer-events-none z-0 w-[340px] h-[440px] sm:w-[480px] sm:h-[620px] md:w-[580px] md:h-[750px] lg:w-[680px] lg:h-[880px] xl:w-[760px] xl:h-[980px] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 opacity-80 sm:opacity-85 transition-all duration-700"
    >
      {/* 1. Base Resting Map Layer (Slightly Softened for Balanced Visibility) */}
      <div
        className="absolute inset-0 bg-contain bg-center bg-no-repeat opacity-28 filter brightness-125 contrast-125 drop-shadow-[0_0_15px_rgba(0,212,255,0.25)]"
        style={{ backgroundImage: `url('/africa_outline.svg')` }}
      />

      {/* 2. Masked Illumination Reveal Layer (SVG Masked with Dynamic Drifts) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{
          WebkitMaskImage: `url('/africa_outline.svg')`,
          maskImage: `url('/africa_outline.svg')`,
          WebkitMaskSize: "contain",
          maskSize: "contain",
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
          WebkitMaskPosition: "center",
          maskPosition: "center",
        }}
      >
        {/* Base Ambient Cyan Tint Inside Map Boundary */}
        <div className="absolute inset-0 bg-[rgba(0,212,255,0.16)] mix-blend-screen" />

        {/* Illumination Field 1 (Faster 10s Organic Drift) */}
        <div className="absolute top-0 left-0 w-[460px] h-[460px] rounded-full bg-[radial-gradient(circle,rgba(0,212,255,0.95)_0%,rgba(0,212,255,0.45)_45%,rgba(0,212,255,0)_75%)] blur-2xl animate-africa-drift-1" />

        {/* Illumination Field 2 (Faster 12s Organic Drift) */}
        <div className="absolute top-0 left-0 w-[520px] h-[520px] rounded-full bg-[radial-gradient(circle,rgba(220,245,255,0.9)_0%,rgba(0,212,255,0.4)_40%,rgba(0,212,255,0)_70%)] blur-2xl animate-africa-drift-2" />

        {/* Illumination Field 3 (Faster 14s Organic Drift) */}
        <div className="absolute top-0 left-0 w-[440px] h-[440px] rounded-full bg-[radial-gradient(circle,rgba(0,212,255,0.85)_0%,rgba(189,235,250,0.4)_50%,rgba(0,212,255,0)_75%)] blur-2xl animate-africa-drift-3" />

        {/* Brand Lens Focal Spot (Faster 16s Duration) */}
        <div className="absolute top-0 left-0 w-[320px] h-[320px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,1)_0%,rgba(0,212,255,0.6)_30%,rgba(0,212,255,0)_65%)] blur-xl animate-africa-lens-focal" />
      </div>

      {/* 3. Subtle Radial Vignette Edge Blending */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_85%_85%_at_50%_50%,transparent_55%,#050505_100%)]" />
    </div>
  );
}
