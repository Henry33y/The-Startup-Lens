"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function AboutScrollProgress() {
  const { scrollYProgress, scrollY } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [showMobileCta, setShowMobileCta] = useState(false);

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      // Show mobile sticky CTA after scrolling past hero (approx 450px)
      setShowMobileCta(latest > 450);
    });
  }, [scrollY]);

  return (
    <>
      {/* Scroll Progress Bar at very top of viewport */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-tsl-blue z-[100] origin-left pointer-events-none shadow-[0_0_8px_rgba(0,212,255,0.6)]"
        style={{ scaleX }}
      />

      {/* Unobtrusive Mobile-Only Sticky CTA (appears after hero) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: showMobileCta ? 1 : 0,
          y: showMobileCta ? 0 : 20,
          pointerEvents: showMobileCta ? "auto" : "none",
        }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-6 right-6 z-40 sm:hidden"
      >
        <Link
          href="/signup"
          className="flex items-center space-x-2 px-4 py-2.5 bg-tsl-black/95 backdrop-blur-md border border-tsl-blue/60 text-tsl-white text-xs font-display font-bold uppercase tracking-wider shadow-[0_4px_20px_rgba(0,212,255,0.25)] active:scale-95 transition-transform"
        >
          <span>JOIN THE LENS</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-tsl-blue" />
        </Link>
      </motion.div>
    </>
  );
}
