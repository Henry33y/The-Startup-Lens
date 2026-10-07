"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, MessageSquare, CheckCircle2, ArrowRight, Sparkles, MapPin } from "lucide-react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-tsl-black text-tsl-white pt-32 pb-24 px-6 sm:px-10">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-4 max-w-2xl">
          <div className="flex items-center space-x-3">
            <span className="w-8 h-[2px] bg-tsl-blue" />
            <span className="font-mono text-xs uppercase tracking-widest text-tsl-blue">
              COMMUNICATIONS // CONTACT DESK
            </span>
          </div>
          <h1 className="heading-hero text-tsl-white">
            CONTACT THE TEAM.
          </h1>
          <p className="text-tsl-white-soft text-lg font-sans">
            Reach our research bureau, editorial reporters, or platform team directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="surface-card p-6 sm:p-8 space-y-6 border border-tsl-dark-grey">
              <div className="space-y-2">
                <h3 className="font-display text-xl font-bold uppercase text-tsl-white">
                  EDITORIAL TIP LINE
                </h3>
                <p className="text-xs text-tsl-grey font-sans leading-relaxed">
                  Have an unreleased product drop or confidential ecosystem development?
                </p>
                <div className="text-sm font-mono text-tsl-blue pt-1">
                  editorial@thestartuplens.com
                </div>
              </div>

              <div className="pt-4 border-t border-tsl-dark-grey/60 space-y-2">
                <h3 className="font-display text-xl font-bold uppercase text-tsl-white">
                  PARTNERSHIPS & SYNDICATES
                </h3>
                <p className="text-xs text-tsl-grey font-sans leading-relaxed">
                  For venture syndicates, accelerators, and university engineering labs looking to integrate with our builder database.
                </p>
                <div className="text-sm font-mono text-tsl-blue pt-1">
                  partners@thestartuplens.com
                </div>
              </div>

              <div className="pt-4 border-t border-tsl-dark-grey/60 space-y-2">
                <div className="flex items-center space-x-2 text-xs font-mono text-tsl-grey uppercase">
                  <MapPin className="w-3.5 h-3.5 text-tsl-blue" />
                  <span>REGIONAL HUBS</span>
                </div>
                <div className="text-xs text-tsl-white-soft font-mono space-y-1">
                  <div>• LAGOS: Victoria Island</div>
                  <div>• NAIROBI: Kilimani</div>
                  <div>• ACCRA: Airport Residential</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            {submitted ? (
              <div className="surface-card p-8 sm:p-10 border border-tsl-blue text-center space-y-6 bg-tsl-surface/60">
                <div className="w-16 h-16 rounded-full bg-tsl-blue/20 border border-tsl-blue text-tsl-blue flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div className="space-y-2">
                  <h2 className="font-display text-2xl font-bold uppercase tracking-tight text-tsl-white">
                    MESSAGE TRANSMITTED
                  </h2>
                  <p className="text-sm text-tsl-white-soft font-sans">
                    Thank you, <span className="text-tsl-blue font-bold">{name}</span>. Our desk has received your note and will reply promptly.
                  </p>
                </div>

                <div className="pt-4 border-t border-tsl-dark-grey/60">
                  <Link
                    href="/"
                    className="inline-block px-6 py-3 bg-tsl-blue text-tsl-black font-display font-bold text-xs uppercase tracking-widest hover:bg-tsl-white transition-colors"
                  >
                    RETURN HOME
                  </Link>
                </div>
              </div>
            ) : (
              <div className="surface-card p-6 sm:p-8 border border-tsl-dark-grey space-y-6">
                <h3 className="font-display text-xl font-bold uppercase text-tsl-white">
                  TRANSMIT A DIRECT NOTE
                </h3>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase text-tsl-grey">YOUR NAME</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Samuel Osei"
                      className="w-full bg-tsl-surface border border-tsl-dark-grey px-4 py-3 text-sm text-tsl-white placeholder:text-tsl-grey/60 focus:outline-none focus:border-tsl-blue font-sans"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase text-tsl-grey">EMAIL ADDRESS</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="samuel@domain.com"
                      className="w-full bg-tsl-surface border border-tsl-dark-grey px-4 py-3 text-sm text-tsl-white placeholder:text-tsl-grey/60 focus:outline-none focus:border-tsl-blue font-sans"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase text-tsl-grey">MESSAGE</label>
                    <textarea
                      required
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="How can we assist you or collaborate?"
                      className="w-full bg-tsl-surface border border-tsl-dark-grey px-4 py-3 text-sm text-tsl-white placeholder:text-tsl-grey/60 focus:outline-none focus:border-tsl-blue font-sans"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-tsl-blue text-tsl-black font-display font-bold text-xs uppercase tracking-widest hover:bg-tsl-white transition-colors flex items-center justify-center space-x-2 shadow-[0_0_20px_rgba(0,212,255,0.3)]"
                  >
                    <span>SEND MESSAGE</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
