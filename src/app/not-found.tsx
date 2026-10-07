import Link from "next/link";
import { ArrowLeft, Compass, Radio, Users, Sparkles, BookOpen } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-tsl-black text-tsl-white flex items-center justify-center pt-28 pb-20 px-6 sm:px-10">
      <div className="max-w-2xl w-full text-center space-y-8">
        {/* Radar Signal Icon */}
        <div className="relative mx-auto w-24 h-24 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border border-tsl-blue/30 animate-ping" />
          <div className="absolute inset-2 rounded-full border border-tsl-blue/50" />
          <div className="relative w-14 h-14 bg-tsl-surface border border-tsl-blue flex items-center justify-center text-tsl-blue">
            <Radio className="w-7 h-7 animate-pulse" />
          </div>
        </div>

        {/* Header Content */}
        <div className="space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-tsl-surface border border-tsl-dark-grey text-xs font-mono text-tsl-blue uppercase tracking-widest">
            <span>SIGNAL LOST // ERROR 404</span>
          </div>
          <h1 className="font-display text-4xl sm:text-6xl font-bold uppercase tracking-tight text-tsl-white">
            OUT OF RADAR RANGE
          </h1>
          <p className="text-tsl-grey text-base sm:text-lg max-w-lg mx-auto font-sans">
            The page, founder profile, or startup artifact you requested does not exist or has moved across the ecosystem.
          </p>
        </div>

        {/* Quick Nav Destination Chips */}
        <div className="pt-4 border-t border-tsl-dark-grey/60 space-y-4">
          <p className="text-xs font-mono text-tsl-grey uppercase tracking-wider">
            RE-CALIBRATE TO ACTIVE CHANNELS:
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center space-x-2 px-4 py-2.5 bg-tsl-blue text-tsl-black font-display text-xs font-bold uppercase tracking-wider hover:bg-tsl-white transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>RETURN HOME</span>
            </Link>
            <Link
              href="/stories"
              className="inline-flex items-center space-x-2 px-4 py-2.5 bg-tsl-surface border border-tsl-dark-grey text-xs font-mono text-tsl-white hover:border-tsl-blue hover:text-tsl-blue transition-colors uppercase"
            >
              <BookOpen className="w-3.5 h-3.5 text-tsl-blue" />
              <span>STORIES</span>
            </Link>
            <Link
              href="/builders"
              className="inline-flex items-center space-x-2 px-4 py-2.5 bg-tsl-surface border border-tsl-dark-grey text-xs font-mono text-tsl-white hover:border-tsl-blue hover:text-tsl-blue transition-colors uppercase"
            >
              <Users className="w-3.5 h-3.5 text-tsl-blue" />
              <span>BUILDERS</span>
            </Link>
            <Link
              href="/startups"
              className="inline-flex items-center space-x-2 px-4 py-2.5 bg-tsl-surface border border-tsl-dark-grey text-xs font-mono text-tsl-white hover:border-tsl-blue hover:text-tsl-blue transition-colors uppercase"
            >
              <Sparkles className="w-3.5 h-3.5 text-tsl-blue" />
              <span>STARTUPS</span>
            </Link>
            <Link
              href="/discover"
              className="inline-flex items-center space-x-2 px-4 py-2.5 bg-tsl-surface border border-tsl-dark-grey text-xs font-mono text-tsl-white hover:border-tsl-blue hover:text-tsl-blue transition-colors uppercase"
            >
              <Compass className="w-3.5 h-3.5 text-tsl-blue" />
              <span>DISCOVER</span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
