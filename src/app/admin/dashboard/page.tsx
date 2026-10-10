import Link from "next/link";
import { ArrowLeft, Shield, Sparkles } from "lucide-react";

export default function AdminDashboardPage() {
  return (
    <main className="min-h-screen bg-tsl-black text-tsl-white pt-32 pb-20 px-6 sm:px-10">
      <div className="max-w-4xl mx-auto space-y-8">
        <Link
          href="/"
          className="inline-flex items-center space-x-2 text-xs font-mono text-tsl-grey hover:text-tsl-blue transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>RETURN TO PLATFORM</span>
        </Link>

        <div className="surface-card p-8 sm:p-12 border border-tsl-dark-grey space-y-6">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-tsl-surface border border-tsl-dark-grey text-xs font-mono text-tsl-blue uppercase tracking-widest">
            <Shield className="w-3.5 h-3.5" />
            <span>ECOSYSTEM ADMIN PORTAL</span>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight text-tsl-white">
            THE STARTUP LENS // CMS PORTAL
          </h1>

          <p className="text-tsl-grey text-base sm:text-lg font-sans max-w-2xl leading-relaxed">
            The editorial curation pipeline and submission review dashboard are currently in private beta for vetted editors and contributors.
          </p>

          <div className="pt-6 border-t border-tsl-dark-grey/60 flex flex-wrap gap-4">
            <Link
              href="/login"
              className="px-6 py-3 bg-tsl-blue text-tsl-black font-display text-xs font-bold uppercase tracking-widest hover:bg-tsl-white transition-colors"
            >
              AUTHENTICATE AS EDITOR
            </Link>
            <Link
              href="/submit"
              className="px-6 py-3 bg-tsl-surface border border-tsl-dark-grey text-tsl-white font-mono text-xs uppercase tracking-wider hover:border-tsl-blue hover:text-tsl-blue transition-colors"
            >
              SUBMIT A STARTUP OR STORY
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
