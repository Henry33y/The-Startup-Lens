"use client";

export default function AfricaHeroMap() {
  return (
    <div
      aria-hidden="true"
      className="absolute pointer-events-none z-[1] w-[360px] h-[460px] sm:w-[500px] sm:h-[650px] md:w-[600px] md:h-[780px] lg:w-[700px] lg:h-[900px] xl:w-[780px] xl:h-[1000px] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 transition-all duration-700"
    >
      {/* 1. Base Resting Map Layer (High-Contrast Continent Outline with Cobalt Shadow) */}
      <div
        className="absolute inset-0 bg-contain bg-center bg-no-repeat opacity-75 filter invert contrast-200 drop-shadow-[0_0_18px_rgba(29,78,216,0.65)]"
        style={{ backgroundImage: `url('/africa_outline.svg')` }}
      />

      {/* 2. Masked Illumination Reveal Layer (SVG Masked with Vivid Deep Cobalt & Royal Blue Drifts) */}
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
        {/* Base Ambient Cobalt/Royal Blue Tint Inside Map Boundary */}
        <div className="absolute inset-0 bg-[rgba(37,99,235,0.22)]" />

        {/* Illumination Field 1 (Deep Cobalt & Royal Blue Drift) */}
        <div className="absolute top-0 left-0 w-[460px] h-[460px] rounded-full bg-[radial-gradient(circle,rgba(29,78,216,0.9)_0%,rgba(37,99,235,0.6)_45%,rgba(37,99,235,0)_75%)] blur-2xl animate-africa-drift-1" />

        {/* Illumination Field 2 (Electric Cyan & Vivid Sapphire Drift) */}
        <div className="absolute top-0 left-0 w-[520px] h-[520px] rounded-full bg-[radial-gradient(circle,rgba(0,212,255,0.9)_0%,rgba(2,132,199,0.6)_40%,rgba(29,78,216,0)_70%)] blur-2xl animate-africa-drift-2" />

        {/* Illumination Field 3 (Deep Indigo-Cobalt Blue Drift) */}
        <div className="absolute top-0 left-0 w-[440px] h-[440px] rounded-full bg-[radial-gradient(circle,rgba(30,64,175,0.85)_0%,rgba(37,99,235,0.5)_50%,rgba(0,212,255,0)_75%)] blur-2xl animate-africa-drift-3" />

        {/* Brand Lens Focal Spot (High Luminance Electric Cyan Core with Cobalt Halo) */}
        <div className="absolute top-0 left-0 w-[320px] h-[320px] rounded-full bg-[radial-gradient(circle,rgba(0,212,255,1)_0%,rgba(37,99,235,0.85)_35%,rgba(29,78,216,0)_65%)] blur-xl animate-africa-lens-focal" />
      </div>
    </div>
  );
}
