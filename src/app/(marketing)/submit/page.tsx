"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Upload, Sparkles, Building2, BookOpen } from "lucide-react";

type SubmitType = "startup" | "story";

export default function SubmitPage() {
  const [type, setType] = useState<SubmitType>("startup");
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState("AI");
  const [description, setDescription] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-tsl-black text-tsl-white pt-32 pb-24 px-6 sm:px-10">
      <div className="max-w-2xl mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-4 text-center">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-tsl-surface border border-tsl-dark-grey text-xs font-mono text-tsl-blue uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>EDITORIAL DESK // DISPATCH</span>
          </div>
          <h1 className="heading-hero text-tsl-white">
            SUBMIT TO THE LENS.
          </h1>
          <p className="text-tsl-white-soft text-base sm:text-lg font-sans">
            Submit your early-stage African startup for radar tracking or pitch an authentic behind-the-scenes building story to our editorial team.
          </p>
        </div>

        {submitted ? (
          <div className="surface-card p-8 sm:p-10 border border-tsl-blue text-center space-y-6 bg-tsl-surface/60">
            <div className="w-16 h-16 rounded-full bg-tsl-blue/20 border border-tsl-blue text-tsl-blue flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h2 className="font-display text-2xl font-bold uppercase tracking-tight text-tsl-white">
                SUBMISSION RECEIVED // IN REVIEW
              </h2>
              <p className="text-sm text-tsl-white-soft font-sans leading-relaxed">
                Thank you for submitting <span className="text-tsl-blue font-bold">{title}</span>. Our research and editorial team reviews incoming dispatches within 48 hours.
              </p>
            </div>

            <div className="pt-4 border-t border-tsl-dark-grey/60 flex justify-center">
              <Link
                href="/discover"
                className="px-8 py-3 bg-tsl-blue text-tsl-black font-display font-bold text-xs uppercase tracking-widest hover:bg-tsl-white transition-colors"
              >
                RETURN TO DISCOVERY ENGINE
              </Link>
            </div>
          </div>
        ) : (
          <div className="surface-card p-8 sm:p-10 border border-tsl-dark-grey space-y-8">
            {/* Submission Type Toggle */}
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setType("startup")}
                className={`p-4 border flex items-center justify-center space-x-2 transition-all ${
                  type === "startup"
                    ? "bg-tsl-blue text-tsl-black border-tsl-blue font-bold font-display uppercase tracking-wider text-xs"
                    : "bg-tsl-surface text-tsl-grey border-tsl-dark-grey hover:text-tsl-white text-xs font-mono uppercase"
                }`}
              >
                <Building2 className="w-4 h-4" />
                <span>SUBMIT STARTUP</span>
              </button>

              <button
                type="button"
                onClick={() => setType("story")}
                className={`p-4 border flex items-center justify-center space-x-2 transition-all ${
                  type === "story"
                    ? "bg-tsl-blue text-tsl-black border-tsl-blue font-bold font-display uppercase tracking-wider text-xs"
                    : "bg-tsl-surface text-tsl-grey border-tsl-dark-grey hover:text-tsl-white text-xs font-mono uppercase"
                }`}
              >
                <BookOpen className="w-4 h-4" />
                <span>PITCH STORY</span>
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase text-tsl-grey">
                  {type === "startup" ? "STARTUP NAME" : "STORY / ESSAY HEADLINE"}
                </label>
                <input
                  type="text"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder={type === "startup" ? "e.g. SolarGrid Africa" : "e.g. How We Acquired Our First 1,000 Offline Merchants"}
                  className="w-full bg-tsl-surface border border-tsl-dark-grey px-4 py-3 text-sm text-tsl-white placeholder:text-tsl-grey/60 focus:outline-none focus:border-tsl-blue font-sans"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase text-tsl-grey">
                    YOUR NAME & ROLE
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Fatima Diallo (Co-founder)"
                    className="w-full bg-tsl-surface border border-tsl-dark-grey px-4 py-3 text-sm text-tsl-white placeholder:text-tsl-grey/60 focus:outline-none focus:border-tsl-blue font-sans"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase text-tsl-grey">
                    CONTACT EMAIL
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="fatima@domain.com"
                    className="w-full bg-tsl-surface border border-tsl-dark-grey px-4 py-3 text-sm text-tsl-white placeholder:text-tsl-grey/60 focus:outline-none focus:border-tsl-blue font-sans"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase text-tsl-grey">
                  PRIMARY SECTOR
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full bg-tsl-surface border border-tsl-dark-grey px-4 py-3 text-sm text-tsl-white focus:outline-none focus:border-tsl-blue font-sans"
                >
                  <option value="AI">AI & Machine Learning</option>
                  <option value="Fintech">Fintech & Payments</option>
                  <option value="Health">HealthTech & Diagnostics</option>
                  <option value="Agriculture">AgriTech & Supply Chain</option>
                  <option value="Climate">ClimateTech & Clean Energy</option>
                  <option value="EdTech">EdTech & Digital Skills</option>
                  <option value="Other">Other Category</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase text-tsl-grey">
                  {type === "startup" ? "WHAT ARE YOU BUILDING & WHY?" : "SUMMARY OF THE STORY / LESSON"}
                </label>
                <textarea
                  required
                  rows={4}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Provide context, problem statement, key metrics, and what makes your approach unique..."
                  className="w-full bg-tsl-surface border border-tsl-dark-grey px-4 py-3 text-sm text-tsl-white placeholder:text-tsl-grey/60 focus:outline-none focus:border-tsl-blue font-sans"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-tsl-blue text-tsl-black font-display font-bold text-xs uppercase tracking-widest hover:bg-tsl-white transition-colors flex items-center justify-center space-x-2 shadow-[0_0_20px_rgba(0,212,255,0.3)]"
              >
                <span>TRANSMIT DISPATCH TO EDITORS</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        )}
      </div>
    </main>
  );
}
