"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Lock, Mail, ShieldCheck } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setAuthenticated(true);
  };

  return (
    <main className="min-h-screen bg-tsl-black text-tsl-white pt-32 pb-24 flex items-center justify-center px-6 sm:px-10">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-tsl-surface border border-tsl-dark-grey text-xs font-mono text-tsl-blue uppercase tracking-widest">
            <span>SECURE TERMINAL // AUTH</span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight text-tsl-white">
            SIGN IN TO THE LENS.
          </h1>
          <p className="text-tsl-grey text-sm font-sans">
            Access your builder dashboard, milestone logger, and radar feed.
          </p>
        </div>

        {authenticated ? (
          <div className="surface-card p-8 border border-tsl-blue text-center space-y-6 bg-tsl-surface/60">
            <div className="w-14 h-14 rounded-full bg-tsl-blue/20 border border-tsl-blue text-tsl-blue flex items-center justify-center mx-auto">
              <ShieldCheck className="w-7 h-7" />
            </div>

            <div className="space-y-2">
              <h2 className="font-display text-xl font-bold uppercase tracking-tight text-tsl-white">
                AUTHENTICATED
              </h2>
              <p className="text-xs text-tsl-white-soft font-sans">
                Session established for <span className="text-tsl-blue font-bold">{email}</span>.
              </p>
            </div>

            <div className="pt-2 flex flex-col gap-3">
              <Link
                href="/discover"
                className="w-full py-3.5 bg-tsl-blue text-tsl-black font-display font-bold text-xs uppercase tracking-widest hover:bg-tsl-white transition-colors"
              >
                ENTER DISCOVERY PORTAL
              </Link>
              <Link
                href="/builders"
                className="w-full py-3 bg-tsl-surface border border-tsl-dark-grey text-tsl-white font-mono text-xs uppercase tracking-wider hover:border-tsl-blue transition-colors"
              >
                VIEW BUILDERS RADAR
              </Link>
            </div>
          </div>
        ) : (
          <div className="surface-card p-8 border border-tsl-dark-grey space-y-6">
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase text-tsl-grey flex items-center space-x-1.5">
                  <Mail className="w-3.5 h-3.5 text-tsl-blue" />
                  <span>EMAIL ADDRESS</span>
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="founder@startup.africa"
                  className="w-full bg-tsl-surface border border-tsl-dark-grey px-4 py-3 text-sm text-tsl-white placeholder:text-tsl-grey/60 focus:outline-none focus:border-tsl-blue font-sans"
                />
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-mono uppercase text-tsl-grey flex items-center space-x-1.5">
                    <Lock className="w-3.5 h-3.5 text-tsl-blue" />
                    <span>PASSWORD / KEY</span>
                  </label>
                  <button
                    type="button"
                    onClick={() => alert("Magic login code sent to your email.")}
                    className="text-[10px] font-mono text-tsl-blue hover:underline uppercase"
                  >
                    SEND MAGIC LINK
                  </button>
                </div>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full bg-tsl-surface border border-tsl-dark-grey px-4 py-3 text-sm text-tsl-white placeholder:text-tsl-grey/60 focus:outline-none focus:border-tsl-blue font-sans"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-tsl-blue text-tsl-black font-display font-bold text-xs uppercase tracking-widest hover:bg-tsl-white transition-colors flex items-center justify-center space-x-2 mt-4 shadow-[0_0_20px_rgba(0,212,255,0.3)]"
              >
                <span>AUTHENTICATE & ENTER</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            <div className="text-center pt-4 border-t border-tsl-dark-grey/60">
              <span className="text-xs text-tsl-grey">NEW TO THE STARTUP LENS? </span>
              <Link href="/signup" className="text-xs font-mono text-tsl-blue hover:text-tsl-white font-bold ml-1">
                CREATE PROFILE
              </Link>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
