"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight, Eye, EyeOff, Loader2, AlertCircle, CheckCircle2 } from "lucide-react";
import AuthSplitLayout from "@/components/auth/AuthSplitLayout";
import { auth } from "@/lib/firebase/config";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
} from "firebase/auth";

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

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [resetSent, setResetSent] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      if (auth.app.options.apiKey && auth.app.options.apiKey !== "demo-api-key") {
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        // Smooth demo fallback for preview environments
        await new Promise((resolve) => setTimeout(resolve, 800));
      }
      router.push("/discover");
    } catch (err: unknown) {
      const code = (err as { code?: string })?.code;
      if (code === "auth/invalid-credential" || code === "auth/wrong-password" || code === "auth/user-not-found") {
        setError("Invalid email address or password. Please verify and try again.");
      } else if (code === "auth/too-many-requests") {
        setError("Too many attempts. Please wait a few moments and try again.");
      } else {
        setError("Unable to authenticate. Please check your network connection.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
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

  const handleForgotPassword = async () => {
    if (!email) {
      setError("Please enter your email address above to receive a reset link.");
      return;
    }
    setError(null);
    try {
      if (auth.app.options.apiKey && auth.app.options.apiKey !== "demo-api-key") {
        await sendPasswordResetEmail(auth, email);
      }
      setResetSent(true);
      setTimeout(() => setResetSent(false), 5000);
    } catch {
      setError("Unable to send password reset email. Please ensure your email is valid.");
    }
  };

  return (
    <AuthSplitLayout mode="login">
      <div className="space-y-6">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-slate-900">
            WELCOME BACK
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 font-sans">
            Sign in to access your builder radar, signals, and ecosystem index.
          </p>
        </div>

        {/* Error Feedback Banner */}
        {error && (
          <div className="p-3.5 rounded-xl bg-red-50 border border-red-200/80 flex items-start space-x-2.5 text-xs text-red-600 font-sans">
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-red-500" />
            <span>{error}</span>
          </div>
        )}

        {/* Reset Feedback Banner */}
        {resetSent && (
          <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200/80 flex items-start space-x-2.5 text-xs text-emerald-700 font-sans">
            <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-emerald-600" />
            <span>Password reset link sent to your email. Check your inbox!</span>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          {/* Email Field */}
          <div className="space-y-1.5">
            <label className="text-[11px] font-mono uppercase tracking-wider text-slate-700 font-semibold block">
              EMAIL ADDRESS
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="founder@startup.africa"
              className="w-full bg-slate-50/80 hover:bg-slate-50 border border-slate-200 focus:bg-white rounded-xl px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#0284C7] focus:ring-2 focus:ring-[#0284C7]/15 transition-all font-sans"
            />
          </div>

          {/* Password Field */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <label className="text-[11px] font-mono uppercase tracking-wider text-slate-700 font-semibold block">
                PASSWORD
              </label>
              <button
                type="button"
                onClick={handleForgotPassword}
                className="text-[11px] font-mono text-[#0284C7] hover:underline uppercase transition-colors"
              >
                Forgot Password?
              </button>
            </div>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                className="w-full bg-slate-50/80 hover:bg-slate-50 border border-slate-200 focus:bg-white rounded-xl px-4 py-3 pr-11 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#0284C7] focus:ring-2 focus:ring-[#0284C7]/15 transition-all font-sans"
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

          {/* Remember Me Checkbox */}
          <div className="flex items-center space-x-2 pt-1">
            <input
              type="checkbox"
              id="remember"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="w-4 h-4 rounded border-slate-300 bg-white text-[#0284C7] focus:ring-[#0284C7] focus:ring-offset-0 cursor-pointer accent-[#0284C7]"
            />
            <label htmlFor="remember" className="text-xs text-slate-600 font-sans cursor-pointer select-none">
              Remember this device for 30 days
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
                <span>SIGNING IN...</span>
              </span>
            ) : (
              <span className="relative z-10 flex items-center justify-center space-x-2">
                <span>SIGN IN TO THE LENS</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 ease-out group-hover:translate-x-1.5" />
              </span>
            )}
          </button>
        </form>

        {/* Divider */}
        <div className="relative flex items-center justify-center my-4">
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
          onClick={handleGoogleSignIn}
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
              <span>SIGN IN WITH GOOGLE</span>
            </>
          )}
        </button>

        {/* Switcher Link */}
        <div className="text-center pt-2">
          <span className="text-xs text-slate-500 font-sans">Need an account? </span>
          <Link
            href="/signup"
            className="text-xs font-mono uppercase tracking-wider text-[#0284C7] hover:text-slate-900 font-semibold transition-colors ml-1"
          >
            Join The Lens →
          </Link>
        </div>
      </div>
    </AuthSplitLayout>
  );
}
