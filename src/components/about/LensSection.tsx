"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import Image from "next/image";

export default function LensSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // 3D Magnetic Parallax Values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { stiffness: 80, damping: 18 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);
  const rotateX = useSpring(useMotionValue(0), springConfig);
  const rotateY = useSpring(useMotionValue(0), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    mouseX.set(x * 0.12);
    mouseY.set(y * 0.12);
    rotateX.set(-y * 0.06);
    rotateY.set(x * 0.06);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <section className="py-24 sm:py-32 lg:py-36 bg-tsl-black border-b border-tsl-dark-grey/40 relative overflow-hidden">
      {/* Background Soft Ambient Light */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-tsl-blue/[0.05] rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-container mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Editorial Explanation (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-8"
          >
            <h2 className="heading-section text-tsl-white tracking-tight leading-[1.05]">
              LOOK <br />
              <span className="text-tsl-blue">CLOSER.</span>
            </h2>

            <div className="space-y-6 text-tsl-white-soft/85 font-sans text-base sm:text-xl font-light leading-relaxed">
              <p className="text-tsl-white font-normal text-xl sm:text-2xl">
                The Startup Lens exists to notice the builders, ideas and journeys that are easy to miss.
              </p>

              <p>
                A lens brings into sharp, deliberate clarity the work that people often skim past. It focuses on the substance behind the headlines rather than the noise around them.
              </p>

              <p className="text-tsl-grey">
                When you look closer at the African tech landscape, you see engineers, operators, and problem-solvers quietly building solutions designed for real impact.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Complex Interactive TSL Logo Lens Visual (5 cols) */}
          <motion.div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 flex items-center justify-center p-6 sm:p-10 perspective-[1000px]"
          >
            <motion.div
              style={
                shouldReduceMotion
                  ? {}
                  : {
                      x: springX,
                      y: springY,
                      rotateX: rotateX,
                      rotateY: rotateY,
                    }
              }
              className="relative w-72 h-72 sm:w-88 sm:h-88 lg:w-96 lg:h-96 flex items-center justify-center group"
            >
              {/* Layer 1: Atmospheric Outer Ring with Pulse */}
              <div className="absolute inset-0 rounded-full border border-tsl-dark-grey/50 shadow-[0_0_60px_rgba(0,212,255,0.08)] bg-tsl-black-soft/40 backdrop-blur-sm" />

              {/* Layer 2: Orbiting Laser Track Ring */}
              <motion.div
                className="absolute inset-4 sm:inset-6 rounded-full border border-dashed border-tsl-blue/30"
                animate={shouldReduceMotion ? {} : { rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              >
                <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-tsl-blue shadow-[0_0_12px_#00D4FF]" />
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-tsl-blue/60" />
              </motion.div>

              {/* Layer 3: Counter-Rotating Fine Precision Ring */}
              <motion.div
                className="absolute inset-10 sm:inset-12 rounded-full border border-tsl-dark-grey/80"
                animate={shouldReduceMotion ? {} : { rotate: -360 }}
                transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
              >
                <span className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 rounded-full bg-tsl-white/70 shadow-[0_0_8px_#FFFFFF]" />
              </motion.div>

              {/* Layer 4: Central Elevated Glass Lens Housing */}
              <div className="relative z-10 w-44 h-44 sm:w-52 sm:h-52 rounded-full bg-gradient-to-b from-tsl-surface/90 to-tsl-black/95 border border-tsl-dark-grey group-hover:border-tsl-blue/60 transition-colors duration-500 flex items-center justify-center p-6 backdrop-blur-xl shadow-[0_0_50px_rgba(0,212,255,0.18)] overflow-hidden">
                
                {/* Holographic Specular Light Sweep Animation */}
                <motion.div
                  animate={
                    shouldReduceMotion
                      ? {}
                      : {
                          x: ["-100%", "200%"],
                        }
                  }
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatDelay: 2,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-tsl-blue/25 to-transparent skew-x-12 pointer-events-none"
                />

                {/* TSL White Logo Brandmark */}
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 select-none">
                  <Image
                    src="/logos/TheStartUPLens-Logo-white.png"
                    alt="The Startup Lens"
                    fill
                    priority
                    className="object-contain filter contrast-125 drop-shadow-[0_0_20px_rgba(0,212,255,0.4)] group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Layer 5: Dynamic Aperture Crosshair Accents */}
              <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-tsl-blue/20 to-transparent pointer-events-none" />
              <div className="absolute h-full w-[1px] bg-gradient-to-b from-transparent via-tsl-blue/20 to-transparent pointer-events-none" />
            </motion.div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
