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
          <h1 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-white">
            WELCOME BACK
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 font-sans">
            Sign in to access your builder radar, signals, and ecosystem index.
          </p>
        </div>

        {/* Error Feedback Banner */}
        {error && (
          <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/25 flex items-start space-x-2.5 text-xs text-red-400 font-sans">
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
            <span>{error}</span>
          </div>
        )}

        {/* Reset Feedback Banner */}
        {resetSent && (
          <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/25 flex items-start space-x-2.5 text-xs text-emerald-400 font-sans">
            <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
            <span>Password reset link sent to your email. Check your inbox!</span>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          {/* Email Field */}
          <div className="space-y-1.5">
            <label className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block">
              EMAIL ADDRESS
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="founder@startup.africa"
              className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF]/30 transition-all font-sans"
            />
          </div>

          {/* Password Field */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <label className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block">
                PASSWORD
              </label>
              <button
                type="button"
                onClick={handleForgotPassword}
                className="text-[11px] font-mono text-[#00D4FF] hover:underline uppercase transition-colors"
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
                className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 pr-11 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF]/30 transition-all font-sans"
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

          {/* Remember Me Checkbox */}
          <div className="flex items-center space-x-2 pt-1">
            <input
              type="checkbox"
              id="remember"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="w-4 h-4 rounded border-white/20 bg-white/5 text-[#00D4FF] focus:ring-[#00D4FF] focus:ring-offset-0 cursor-pointer accent-[#00D4FF]"
            />
            <label htmlFor="remember" className="text-xs text-slate-400 font-sans cursor-pointer select-none">
              Remember this device for 30 days
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
                <span>SIGNING IN...</span>
              </>
            ) : (
              <>
                <span>SIGN IN TO THE LENS</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        {/* Divider */}
        <div className="relative flex items-center justify-center my-4">
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
          onClick={handleGoogleSignIn}
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
              <span>SIGN IN WITH GOOGLE</span>
            </>
          )}
        </button>

        {/* Switcher Link */}
        <div className="text-center pt-2">
          <span className="text-xs text-slate-400 font-sans">Need an account? </span>
          <Link
            href="/signup"
            className="text-xs font-mono uppercase tracking-wider text-[#00D4FF] hover:text-white font-semibold transition-colors ml-1"
          >
            Join The Lens →
          </Link>
        </div>
      </div>
    </AuthSplitLayout>
  );
}

