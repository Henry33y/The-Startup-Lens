"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight, Eye, EyeOff, Loader2, AlertCircle } from "lucide-react";
import AuthSplitLayout from "@/components/auth/AuthSplitLayout";
import { auth } from "@/lib/firebase/config";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

const SECTORS = [
  "Fintech",
  "AI / Machine Learning",
  "Climate & CleanTech",
  "Hardware & IoT",
  "Logistics & Supply Chain",
  "HealthTech",
  "Student / Scrappy Project",
  "Other Technology",
];

function GoogleIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
      />
    </svg>
  );
}

export default function SignUpPage() {
  const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [sector, setSector] = useState(SECTORS[0]);
  const [password, setPassword] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!agreed) {
      setError("Please agree to the Terms of Service & Privacy Policy to continue.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    setLoading(true);

    try {
      if (auth.app.options.apiKey && auth.app.options.apiKey !== "demo-api-key") {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const displayName = `${firstName} ${lastName}`.trim();
        if (displayName && userCredential.user) {
          await updateProfile(userCredential.user, { displayName });
        }
      } else {
        // Smooth demo fallback for preview environments
        await new Promise((resolve) => setTimeout(resolve, 800));
      }
      router.push("/discover");
    } catch (err: unknown) {
      const code = (err as { code?: string })?.code;
      if (code === "auth/email-already-in-use") {
        setError("An account with this email address already exists. Please sign in instead.");
      } else if (code === "auth/invalid-email") {
        setError("Please enter a valid email address.");
      } else if (code === "auth/weak-password") {
        setError("Password is too weak. Please use a stronger password.");
      } else {
        setError("Unable to create account. Please check your connection and try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignUp = async () => {
    setError(null);
    setGoogleLoading(true);

    try {
      if (auth.app.options.apiKey && auth.app.options.apiKey !== "demo-api-key") {
        const provider = new GoogleAuthProvider();
        await signInWithPopup(auth, provider);
      } else {
        await new Promise((resolve) => setTimeout(resolve, 800));
      }
      router.push("/discover");
    } catch (err: unknown) {
      const code = (err as { code?: string })?.code;
      if (code !== "auth/popup-closed-by-user") {
        setError("Google authentication could not be completed. Please try again.");
      }
    } finally {
      setGoogleLoading(false);
    }
  };

  return (
    <AuthSplitLayout mode="signup">
      <div className="space-y-5">
        {/* Header */}
        <div className="space-y-1.5">
          <h1 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-white">
            CREATE YOUR ACCOUNT
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 font-sans">
            Join Africa&apos;s premier early-stage builder radar and signal network.
          </p>
        </div>

        {/* Error Feedback Banner */}
        {error && (
          <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/25 flex items-start space-x-2.5 text-xs text-red-400 font-sans">
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
            <span>{error}</span>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSignup} className="space-y-3.5">
          {/* Name Fields (2-Column Grid) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block">
                FIRST NAME
              </label>
              <input
                type="text"
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Kwame"
                className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF]/30 transition-all font-sans"
              />
            </div>
            <div className="space-y-1">
              <label className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block">
                LAST NAME
              </label>
              <input
                type="text"
                required
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Mensah"
                className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF]/30 transition-all font-sans"
              />
            </div>
          </div>

          {/* Email Field */}
          <div className="space-y-1">
            <label className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block">
              EMAIL ADDRESS
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="founder@startup.africa"
              className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF]/30 transition-all font-sans"
            />
          </div>

          {/* Sector / What are you building */}
          <div className="space-y-1">
            <label className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block">
              WHAT ARE YOU BUILDING?
            </label>
            <select
              value={sector}
              onChange={(e) => setSector(e.target.value)}
              className="w-full bg-[#0C1017] border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF]/30 transition-all font-sans cursor-pointer"
            >
              {SECTORS.map((s) => (
                <option key={s} value={s} className="bg-[#0C1017] text-white">
                  {s}
                </option>
              ))}
            </select>
          </div>

          {/* Password Field */}
          <div className="space-y-1">
            <label className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block">
              PASSWORD (MIN 6 CHARS)
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-3.5 py-2.5 pr-11 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF]/30 transition-all font-sans"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white transition-colors"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Terms Agreement Checkbox */}
          <div className="flex items-start space-x-2 pt-1">
            <input
              type="checkbox"
              id="terms"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="w-4 h-4 mt-0.5 rounded border-white/20 bg-white/5 text-[#00D4FF] focus:ring-[#00D4FF] focus:ring-offset-0 cursor-pointer accent-[#00D4FF]"
            />
            <label htmlFor="terms" className="text-xs text-slate-400 font-sans leading-snug cursor-pointer select-none">
              I agree to the{" "}
              <Link href="/privacy" className="text-[#00D4FF] hover:underline">
                Terms of Service
              </Link>{" "}
              &amp;{" "}
              <Link href="/privacy" className="text-[#00D4FF] hover:underline">
                Privacy Policy
              </Link>
            </label>
          </div>

          {/* Primary Submit Button */}
          <button
            type="submit"
            disabled={loading || googleLoading}
            className="w-full py-3.5 bg-[#00D4FF] hover:bg-white text-black font-display font-bold text-xs uppercase tracking-widest rounded-xl transition-all duration-200 flex items-center justify-center space-x-2 shadow-[0_0_25px_rgba(0,212,255,0.3)] hover:shadow-[0_0_35px_rgba(255,255,255,0.4)] active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed mt-2"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-black" />
                <span>INITIALIZING PROFILE...</span>
              </>
            ) : (
              <>
                <span>CREATE BUILDER PROFILE</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        {/* Divider */}
        <div className="relative flex items-center justify-center my-3">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/[0.08]" />
          </div>
          <span className="relative px-3 bg-[#0D111A] text-[10px] font-mono uppercase tracking-widest text-slate-500">
            OR
          </span>
        </div>

        {/* Google Social Auth */}
        <button
          type="button"
          onClick={handleGoogleSignUp}
          disabled={loading || googleLoading}
          className="w-full py-3 px-4 bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 hover:border-white/20 text-white rounded-xl text-xs font-mono uppercase tracking-wider transition-all flex items-center justify-center space-x-3 active:scale-[0.99] disabled:opacity-60"
        >
          {googleLoading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin text-slate-400" />
              <span>CONNECTING GOOGLE...</span>
            </>
          ) : (
            <>
              <GoogleIcon className="w-4 h-4" />
              <span>SIGN UP WITH GOOGLE</span>
            </>
          )}
        </button>

        {/* Switcher Link */}
        <div className="text-center pt-1">
          <span className="text-xs text-slate-400 font-sans">Already building? </span>
          <Link
            href="/login"
            className="text-xs font-mono uppercase tracking-wider text-[#00D4FF] hover:text-white font-semibold transition-colors ml-1"
          >
            Sign In →
          </Link>
        </div>
      </div>
    </AuthSplitLayout>
  );
}

