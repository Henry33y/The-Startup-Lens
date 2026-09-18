import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function StoriesJoinCTA() {
  return (
    <section className="py-20 sm:py-28 bg-tsl-black border-t border-tsl-dark-grey/40">
      <div className="max-w-container mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          {/* Accent Marker */}
          <div className="flex items-center justify-center space-x-3">
            <span className="w-8 h-[2px] bg-tsl-blue" />
            <span className="font-mono text-xs uppercase tracking-widest text-tsl-blue">
              BUILD IN PUBLIC
            </span>
            <span className="w-8 h-[2px] bg-tsl-blue" />
          </div>

          {/* Heading */}
          <h2 className="font-display text-3xl sm:text-5xl font-bold uppercase tracking-tight text-tsl-white">
            BUILDING SOMETHING?
          </h2>

          {/* Supporting Copy */}
          <p className="text-base sm:text-xl text-tsl-white-soft/80 font-sans font-light max-w-xl mx-auto leading-relaxed">
            Document the journey and share it with the people paying attention.
          </p>

          {/* Action */}
          <div className="pt-4 flex justify-center">
            <Link
              href="/signup"
              className="group relative inline-flex items-center justify-center btn-hero bg-tsl-white text-tsl-black font-display font-bold text-xs sm:text-sm tracking-widest uppercase rounded-none overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,212,255,0.4)]"
            >
              {/* Cyan slide up background */}
              <span className="absolute inset-0 bg-tsl-blue transition-transform duration-500 ease-out origin-bottom translate-y-full group-hover:translate-y-0 pointer-events-none" />

              <span className="relative z-10 flex items-center space-x-2 transition-colors duration-300 group-hover:text-tsl-black pointer-events-none">
                <span>JOIN THE LENS</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
