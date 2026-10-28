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
          <h1 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-slate-900">
            CREATE YOUR ACCOUNT
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 font-sans">
            Join Africa&apos;s premier early-stage builder radar and signal network.
          </p>
        </div>

        {/* Error Feedback Banner */}
        {error && (
          <div className="p-3.5 rounded-xl bg-red-50 border border-red-200/80 flex items-start space-x-2.5 text-xs text-red-600 font-sans">
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-red-500" />
            <span>{error}</span>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSignup} className="space-y-3.5">
          {/* Name Fields (2-Column Grid) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="text-[11px] font-mono uppercase tracking-wider text-slate-700 font-semibold block">
                FIRST NAME
              </label>
              <input
                type="text"
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Kwame"
                className="w-full bg-slate-50/80 hover:bg-slate-50 border border-slate-200 focus:bg-white rounded-xl px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#0284C7] focus:ring-2 focus:ring-[#0284C7]/15 transition-all font-sans"
              />
            </div>
            <div className="space-y-1">
              <label className="text-[11px] font-mono uppercase tracking-wider text-slate-700 font-semibold block">
                LAST NAME
              </label>
              <input
                type="text"
                required
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Mensah"
                className="w-full bg-slate-50/80 hover:bg-slate-50 border border-slate-200 focus:bg-white rounded-xl px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#0284C7] focus:ring-2 focus:ring-[#0284C7]/15 transition-all font-sans"
              />
            </div>
          </div>

          {/* Email Field */}
          <div className="space-y-1">
            <label className="text-[11px] font-mono uppercase tracking-wider text-slate-700 font-semibold block">
              EMAIL ADDRESS
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="founder@startup.africa"
              className="w-full bg-slate-50/80 hover:bg-slate-50 border border-slate-200 focus:bg-white rounded-xl px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#0284C7] focus:ring-2 focus:ring-[#0284C7]/15 transition-all font-sans"
            />
          </div>

          {/* Sector / What are you building */}
          <div className="space-y-1">
            <label className="text-[11px] font-mono uppercase tracking-wider text-slate-700 font-semibold block">
              WHAT ARE YOU BUILDING?
            </label>
            <select
              value={sector}
              onChange={(e) => setSector(e.target.value)}
              className="w-full bg-slate-50/80 border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-[#0284C7] focus:ring-2 focus:ring-[#0284C7]/15 transition-all font-sans cursor-pointer"
            >
              {SECTORS.map((s) => (
                <option key={s} value={s} className="bg-white text-slate-900">
                  {s}
                </option>
              ))}
            </select>
          </div>

          {/* Password Field */}
          <div className="space-y-1">
            <label className="text-[11px] font-mono uppercase tracking-wider text-slate-700 font-semibold block">
              PASSWORD (MIN 6 CHARS)
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                className="w-full bg-slate-50/80 hover:bg-slate-50 border border-slate-200 focus:bg-white rounded-xl px-3.5 py-2.5 pr-11 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#0284C7] focus:ring-2 focus:ring-[#0284C7]/15 transition-all font-sans"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 transition-colors"
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
              className="w-4 h-4 mt-0.5 rounded border-slate-300 bg-white text-[#0284C7] focus:ring-[#0284C7] focus:ring-offset-0 cursor-pointer accent-[#0284C7]"
            />
            <label htmlFor="terms" className="text-xs text-slate-600 font-sans leading-snug cursor-pointer select-none">
              I agree to the{" "}
              <Link href="/privacy" className="text-[#0284C7] hover:underline">
                Terms of Service
              </Link>{" "}
              &amp;{" "}
              <Link href="/privacy" className="text-[#0284C7] hover:underline">
                Privacy Policy
              </Link>
            </label>
          </div>

          {/* Primary Submit Button */}
          <button
            type="submit"
            disabled={loading || googleLoading}
            className="group relative w-full py-3.5 bg-slate-900 text-white font-display font-bold text-xs uppercase tracking-widest rounded-xl overflow-hidden transition-all duration-300 flex items-center justify-center space-x-2 shadow-sm hover:shadow-[0_0_25px_rgba(2,132,199,0.35)] active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed mt-2"
          >
            {/* Horizontal sweep accent layer (distinct from Join the Lens vertical bottom slide) */}
            <span className="absolute inset-0 bg-gradient-to-r from-[#0284C7] to-[#0369a1] transition-transform duration-500 ease-out -translate-x-full group-hover:translate-x-0 pointer-events-none" />

            {loading ? (
              <span className="relative z-10 flex items-center justify-center space-x-2">
                <Loader2 className="w-4 h-4 animate-spin text-white" />
                <span>INITIALIZING PROFILE...</span>
              </span>
            ) : (
              <span className="relative z-10 flex items-center justify-center space-x-2">
                <span>CREATE BUILDER PROFILE</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 ease-out group-hover:translate-x-1.5" />
              </span>
            )}
          </button>
        </form>

        {/* Divider */}
        <div className="relative flex items-center justify-center my-3">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-200" />
          </div>
          <span className="relative px-3 bg-white text-[10px] font-mono uppercase tracking-widest text-slate-400">
            OR
          </span>
        </div>

        {/* Google Social Auth */}
        <button
          type="button"
          onClick={handleGoogleSignUp}
          disabled={loading || googleLoading}
          className="group w-full py-3 px-4 bg-white hover:bg-slate-50 border border-slate-200 hover:border-slate-300 text-slate-800 rounded-xl text-xs font-mono uppercase tracking-wider transition-all duration-200 flex items-center justify-center space-x-3 active:scale-[0.99] shadow-sm hover:shadow disabled:opacity-60"
        >
          {googleLoading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin text-slate-500" />
              <span>CONNECTING GOOGLE...</span>
            </>
          ) : (
            <>
              <GoogleIcon className="w-4 h-4 transition-transform duration-200 group-hover:scale-110" />
              <span>SIGN UP WITH GOOGLE</span>
            </>
          )}
        </button>

        {/* Switcher Link */}
        <div className="text-center pt-1">
          <span className="text-xs text-slate-500 font-sans">Already building? </span>
          <Link
            href="/login"
            className="text-xs font-mono uppercase tracking-wider text-[#0284C7] hover:text-slate-900 font-semibold transition-colors ml-1"
          >
            Sign In →
          </Link>
        </div>
      </div>
    </AuthSplitLayout>
  );
}
