"use client";

import { useState } from "react";
import Link from "next/link";
import { ShieldCheck, CheckCircle2, ArrowRight, UserCheck, Briefcase, Sparkles, Globe } from "lucide-react";

type Role = "builder" | "investor" | "reader";

export default function SignUpPage() {
  const [role, setRole] = useState<Role>("builder");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [project, setProject] = useState("");
  const [country, setCountry] = useState("Nigeria");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !name) return;
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-tsl-black text-tsl-white pt-32 pb-24 flex items-center justify-center px-6 sm:px-10">
      <div className="max-w-xl w-full space-y-8">
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-tsl-surface border border-tsl-dark-grey text-xs font-mono text-tsl-blue uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>JOIN THE ECOSYSTEM</span>
          </div>
          <h1 className="font-display text-3xl sm:text-5xl font-bold uppercase tracking-tight text-tsl-white">
            JOIN THE LENS.
          </h1>
          <p className="text-tsl-grey text-sm sm:text-base font-sans">
            Connect to Africa&apos;s early-stage builder network before everyone else catches on.
          </p>
        </div>

        {submitted ? (
          <div className="surface-card p-8 sm:p-10 border border-tsl-blue text-center space-y-6 bg-tsl-surface/60">
            <div className="w-16 h-16 rounded-full bg-tsl-blue/20 border border-tsl-blue text-tsl-blue flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h2 className="font-display text-2xl font-bold uppercase tracking-tight text-tsl-white">
                PROFILE SIGNAL ACTIVATED
              </h2>
              <p className="text-sm text-tsl-white-soft font-sans leading-relaxed">
                Welcome to The Startup Lens, <span className="text-tsl-blue font-bold">{name}</span>. Your {role} profile for <span className="text-tsl-white font-semibold">{project || "The Startup Lens"}</span> is initialized.
              </p>
            </div>

            <div className="pt-4 border-t border-tsl-dark-grey/60 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/discover"
                className="w-full sm:w-auto px-6 py-3 bg-tsl-blue text-tsl-black font-display font-bold text-xs uppercase tracking-widest hover:bg-tsl-white transition-colors text-center"
              >
                EXPLORE DISCOVERY ENGINE
              </Link>
              <Link
                href="/builders"
                className="w-full sm:w-auto px-6 py-3 bg-tsl-surface border border-tsl-dark-grey text-tsl-white font-mono text-xs uppercase tracking-wider hover:border-tsl-blue transition-colors text-center"
              >
                VIEW BUILDERS RADAR
              </Link>
            </div>
          </div>
        ) : (
          <div className="surface-card p-8 sm:p-10 border border-tsl-dark-grey space-y-8">
            {/* Role Selection Tabs */}
            <div className="space-y-2">
              <label className="text-xs font-mono uppercase tracking-wider text-tsl-grey">
                SELECT YOUR PROFILE TYPE:
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setRole("builder")}
                  className={`p-3 text-center border flex flex-col items-center justify-center space-y-1 transition-all ${
                    role === "builder"
                      ? "bg-tsl-blue text-tsl-black border-tsl-blue font-bold"
                      : "bg-tsl-surface text-tsl-grey border-tsl-dark-grey hover:text-tsl-white"
                  }`}
                >
                  <UserCheck className="w-4 h-4" />
                  <span className="text-[11px] font-mono uppercase">BUILDER</span>
                </button>

                <button
                  type="button"
                  onClick={() => setRole("investor")}
                  className={`p-3 text-center border flex flex-col items-center justify-center space-y-1 transition-all ${
                    role === "investor"
                      ? "bg-tsl-blue text-tsl-black border-tsl-blue font-bold"
                      : "bg-tsl-surface text-tsl-grey border-tsl-dark-grey hover:text-tsl-white"
                  }`}
                >
                  <Briefcase className="w-4 h-4" />
                  <span className="text-[11px] font-mono uppercase">INVESTOR</span>
                </button>

                <button
                  type="button"
                  onClick={() => setRole("reader")}
                  className={`p-3 text-center border flex flex-col items-center justify-center space-y-1 transition-all ${
                    role === "reader"
                      ? "bg-tsl-blue text-tsl-black border-tsl-blue font-bold"
                      : "bg-tsl-surface text-tsl-grey border-tsl-dark-grey hover:text-tsl-white"
                  }`}
                >
                  <Globe className="w-4 h-4" />
                  <span className="text-[11px] font-mono uppercase">READER</span>
                </button>
              </div>
            </div>

            {/* Form Fields */}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase text-tsl-grey">
                  FULL NAME
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Kwame Mensah"
                  className="w-full bg-tsl-surface border border-tsl-dark-grey px-4 py-3 text-sm text-tsl-white placeholder:text-tsl-grey/60 focus:outline-none focus:border-tsl-blue font-sans"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase text-tsl-grey">
                  EMAIL ADDRESS
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@domain.com"
                  className="w-full bg-tsl-surface border border-tsl-dark-grey px-4 py-3 text-sm text-tsl-white placeholder:text-tsl-grey/60 focus:outline-none focus:border-tsl-blue font-sans"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase text-tsl-grey">
                    {role === "builder" ? "STARTUP / PROJECT NAME" : "ORGANIZATION / FUND"}
                  </label>
                  <input
                    type="text"
                    value={project}
                    onChange={(e) => setProject(e.target.value)}
                    placeholder={role === "builder" ? "e.g. KubeSolar" : "e.g. Future Africa"}
                    className="w-full bg-tsl-surface border border-tsl-dark-grey px-4 py-3 text-sm text-tsl-white placeholder:text-tsl-grey/60 focus:outline-none focus:border-tsl-blue font-sans"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase text-tsl-grey">
                    BASE COUNTRY
                  </label>
                  <select
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="w-full bg-tsl-surface border border-tsl-dark-grey px-4 py-3 text-sm text-tsl-white focus:outline-none focus:border-tsl-blue font-sans"
                  >
                    <option value="Nigeria">Nigeria</option>
                    <option value="Kenya">Kenya</option>
                    <option value="Ghana">Ghana</option>
                    <option value="South Africa">South Africa</option>
                    <option value="Rwanda">Rwanda</option>
                    <option value="Senegal">Senegal</option>
                    <option value="Egypt">Egypt</option>
                    <option value="Other">Other Global / Diaspora</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-tsl-blue text-tsl-black font-display font-bold text-xs uppercase tracking-widest hover:bg-tsl-white transition-colors flex items-center justify-center space-x-2 shadow-[0_0_20px_rgba(0,212,255,0.3)]"
              >
                <span>CREATE PROFILE & ENTER RADAR</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            <div className="text-center pt-2 border-t border-tsl-dark-grey/60">
              <span className="text-xs text-tsl-grey">ALREADY HAVE A SIGNAL ACCOUNT? </span>
              <Link href="/login" className="text-xs font-mono text-tsl-blue hover:text-tsl-white font-bold ml-1">
                SIGN IN
              </Link>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
