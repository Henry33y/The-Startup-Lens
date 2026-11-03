"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Share2,
  Check,
  Play,
  Pause,
  Heart,
  Send,
  Sparkles,
  HelpCircle,
  Volume2,
  FileText,
  UserCheck,
} from "lucide-react";
import { StoryStartup, JOURNEY_STAGES } from "@/data/startupsStoryData";

interface QuickStoryDrawerProps {
  startup: StoryStartup | null;
  isOpen: boolean;
  onClose: () => void;
  onCheer: (startupId: string) => void;
  isCheered: boolean;
  cheersCount: number;
}

export default function QuickStoryDrawer({
  startup,
  isOpen,
  onClose,
  onCheer,
  isCheered,
  cheersCount,
}: QuickStoryDrawerProps) {
  const [copied, setCopied] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioProgress, setAudioProgress] = useState(0); // 0 to 1
  const [showTranscript, setShowTranscript] = useState(false);

  // Encouragement form state
  const [senderName, setSenderName] = useState("");
  const [encouragementNote, setEncouragementNote] = useState("");
  const [submittedNote, setSubmittedNote] = useState(false);

  // Audio timer ref & Web Audio Context
  const audioIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const oscillatorRef = useRef<OscillatorNode | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Reset audio & note state when startup changes
  useEffect(() => {
    setIsPlaying(false);
    setAudioProgress(0);
    setSubmittedNote(false);
    setEncouragementNote("");
    setShowTranscript(false);

    if (audioIntervalRef.current) {
      clearInterval(audioIntervalRef.current);
    }
    stopAudioTone();
  }, [startup?.id]);

  // Prevent background body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      stopAudioTone();
    }
    return () => {
      document.body.style.overflow = "";
      stopAudioTone();
    };
  }, [isOpen]);

  // Gentle acoustic ambient tone synthesis via Web Audio API
  const startAudioTone = () => {
    try {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext })
          .webkitAudioContext;
      if (!AudioCtx) return;
      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioCtx();
      }
      if (audioCtxRef.current.state === "suspended") {
        audioCtxRef.current.resume();
      }

      const osc = audioCtxRef.current.createOscillator();
      const gain = audioCtxRef.current.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(220, audioCtxRef.current.currentTime);
      gain.gain.setValueAtTime(0.015, audioCtxRef.current.currentTime);

      osc.connect(gain);
      gain.connect(audioCtxRef.current.destination);
      osc.start();

      oscillatorRef.current = osc;
      gainNodeRef.current = gain;
    } catch {
      // Audio synthesis fallback
    }
  };

  const stopAudioTone = () => {
    try {
      if (oscillatorRef.current) {
        oscillatorRef.current.stop();
        oscillatorRef.current.disconnect();
        oscillatorRef.current = null;
      }
    } catch {
      // Ignore audio cleanup errors
    }
  };

  // Toggle Play / Pause simulation
  const togglePlayAudio = () => {
    if (!startup) return;

    if (isPlaying) {
      setIsPlaying(false);
      stopAudioTone();
      if (audioIntervalRef.current) clearInterval(audioIntervalRef.current);
    } else {
      setIsPlaying(true);
      startAudioTone();

      const durationMs = startup.voiceNote.durationSeconds * 1000;
      const stepMs = 250;

      audioIntervalRef.current = setInterval(() => {
        setAudioProgress((prev) => {
          const next = prev + stepMs / durationMs;
          if (next >= 1) {
            setIsPlaying(false);
            stopAudioTone();
            if (audioIntervalRef.current) clearInterval(audioIntervalRef.current);
            return 0;
          }
          return next;
        });
      }, stepMs);
    }
  };

  const handleCopyLink = () => {
    if (!startup) return;
    const url = `${window.location.origin}/startups/${startup.slug}`;
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSendEncouragement = (e: React.FormEvent) => {
    e.preventDefault();
    if (!encouragementNote.trim()) return;
    setSubmittedNote(true);
  };

  if (!startup) return null;

  const stageConfig =
    JOURNEY_STAGES.find((s) => s.stage === startup.stage) || JOURNEY_STAGES[0];

  const currentSeconds = Math.floor(
    audioProgress * startup.voiceNote.durationSeconds
  );
  const formattedCurrentTime = `0:${currentSeconds < 10 ? "0" : ""}${currentSeconds}`;

  const getStageBadgeStyle = (stage: string) => {
    switch (stage) {
      case "Just Getting Started":
        return "bg-amber-50 text-amber-800 border-amber-200/80";
      case "Testing with Real People":
        return "bg-sky-50 text-sky-800 border-sky-200/80";
      case "Live & Open to Everyone":
        return "bg-emerald-50 text-emerald-800 border-emerald-200/80";
      default:
        return "bg-slate-100 text-slate-700 border-slate-200";
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* 1. Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs z-50 cursor-pointer"
          />

          {/* 2. Slide-Over Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 w-full md:max-w-xl bg-white border-l border-slate-200 z-50 overflow-y-auto flex flex-col shadow-2xl"
          >
            {/* Top Sticky Header */}
            <div className="sticky top-0 bg-white/95 backdrop-blur-md border-b border-slate-200 p-5 sm:px-8 flex items-center justify-between z-20">
              
              {/* Stage Pill */}
              <div
                className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full border text-[11px] font-mono tracking-wider uppercase ${getStageBadgeStyle(
                  startup.stage
                )}`}
              >
                <span className={`w-2 h-2 rounded-full ${stageConfig.dotClass}`} />
                <span>{startup.stage}</span>
              </div>

              {/* Actions: Copy Link & Close */}
              <div className="flex items-center space-x-2">
                <button
                  type="button"
                  onClick={handleCopyLink}
                  className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200 text-xs font-mono uppercase tracking-wider text-slate-700 hover:text-slate-900 transition-colors cursor-pointer shadow-2xs"
                  title="Copy direct story link"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-600 font-semibold">COPIED</span>
                    </>
                  ) : (
                    <>
                      <Share2 className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">SHARE</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={onClose}
                  className="p-1.5 rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-500 hover:text-slate-900 transition-colors cursor-pointer border border-slate-200 shadow-2xs"
                  aria-label="Close drawer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Scrollable Content Container */}
            <div className="p-6 sm:p-8 space-y-8 flex-1">
              
              {/* 1. HERO FOUNDER BANNER */}
              <div className="space-y-4">
                <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden border border-slate-200 bg-slate-900 group shadow-xs">
                  <Image
                    src={startup.founderImageUrl}
                    alt={`${startup.founders[0].name} building ${startup.name}`}
                    fill
                    priority
                    unoptimized
                    className="object-cover object-center filter contrast-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                  
                  {/* Location badge on photo */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/15 text-xs font-mono text-white flex items-center space-x-1.5 shadow-sm">
                      <span>{startup.countryFlag}</span>
                      <span>{startup.city}, {startup.country}</span>
                    </span>
                  </div>

                  {/* Title overlay on bottom of photo */}
                  <div className="absolute bottom-4 left-4 right-4 z-10">
                    <div className="text-[11px] font-mono uppercase tracking-widest text-sky-300 font-semibold">
                      {startup.category}
                    </div>
                    <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white">
                      {startup.name}
                    </h1>
                  </div>
                </div>

                <p className="text-slate-700 font-sans text-base sm:text-lg font-medium leading-snug italic pt-1">
                  &ldquo;{startup.oneLiner}&rdquo;
                </p>
              </div>

              {/* 2. THE EVERYDAY REALITY CALLOUT */}
              <div className="bg-slate-50 border border-slate-200/90 rounded-xl p-5 space-y-2 shadow-2xs">
                <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-[#0284C7] font-semibold">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>THE REALITY ON THE GROUND</span>
                </div>
                <p className="text-slate-700 text-sm font-sans leading-relaxed">
                  {startup.everydayReality}
                </p>
              </div>

              {/* 3. INTERACTIVE AUDIO VOICE CLIP PREVIEW */}
              <div className="bg-sky-50/50 border border-sky-200/80 rounded-2xl p-5 sm:p-6 space-y-4 shadow-xs">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-[#0284C7] font-semibold">
                    <Volume2 className="w-4 h-4 animate-pulse text-[#0284C7]" />
                    <span>AUTHENTIC VOICE DISPATCH</span>
                  </div>
                  <span className="text-xs font-mono text-slate-500">
                    {formattedCurrentTime} / {startup.voiceNote.durationLabel}
                  </span>
                </div>

                <p className="text-sm font-sans font-medium text-slate-900">
                  {startup.voiceNote.title}
                </p>

                {/* Player Interface */}
                <div className="flex items-center space-x-4 pt-1">
                  {/* Play / Pause Toggle Button */}
                  <motion.button
                    type="button"
                    whileTap={{ scale: 0.92 }}
                    onClick={togglePlayAudio}
                    className="w-12 h-12 rounded-xl bg-[#0284C7] hover:bg-slate-900 text-white flex items-center justify-center shrink-0 transition-all duration-200 shadow-sm cursor-pointer"
                    aria-label={isPlaying ? "Pause voice note" : "Play voice note"}
                  >
                    {isPlaying ? (
                      <Pause className="w-5 h-5 fill-white" />
                    ) : (
                      <Play className="w-5 h-5 fill-white ml-0.5" />
                    )}
                  </motion.button>

                  {/* Animated Waveform Visualization */}
                  <div className="flex-1 flex items-center space-x-1 sm:space-x-1.5 h-10 px-3 bg-white rounded-xl border border-slate-200 overflow-hidden shadow-2xs">
                    {[
                      40, 65, 85, 45, 95, 75, 55, 80, 100, 60, 45, 85, 70, 90, 50,
                      65, 80, 40, 95, 70, 55, 85, 60, 75, 90, 45, 65, 80, 50,
                    ].map((height, i) => {
                      const barProgress = i / 29;
                      const hasPlayed = barProgress <= audioProgress;
                      return (
                        <motion.div
                          key={i}
                          animate={
                            isPlaying
                              ? {
                                  scaleY: [
                                    1,
                                    0.4 + Math.sin(i * 1.5) * 0.5 + Math.random() * 0.4,
                                    1,
                                  ],
                                }
                              : { scaleY: 1 }
                          }
                          transition={
                            isPlaying
                              ? {
                                  duration: 0.4 + (i % 5) * 0.1,
                                  repeat: Infinity,
                                  ease: "easeInOut",
                                }
                              : {}
                          }
                          style={{ height: `${height}%` }}
                          className={`w-1 rounded-full transition-colors duration-150 origin-bottom ${
                            hasPlayed ? "bg-[#0284C7]" : "bg-slate-200"
                          }`}
                        />
                      );
                    })}
                  </div>
                </div>

                {/* Transcript Toggle */}
                {startup.voiceNote.transcriptSnippet && (
                  <div className="pt-1">
                    <button
                      type="button"
                      onClick={() => setShowTranscript(!showTranscript)}
                      className="inline-flex items-center space-x-1.5 text-xs font-mono uppercase tracking-wider text-slate-500 hover:text-slate-900 transition-colors"
                    >
                      <FileText className="w-3.5 h-3.5" />
                      <span>{showTranscript ? "Hide Transcript" : "Read Transcript Snippet"}</span>
                    </button>

                    {showTranscript && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-2.5 p-3.5 rounded-xl bg-white border border-slate-200 text-xs font-sans text-slate-700 leading-relaxed italic shadow-2xs"
                      >
                        &ldquo;{startup.voiceNote.transcriptSnippet}&rdquo;
                      </motion.div>
                    )}
                  </div>
                )}
              </div>

              {/* 4. FOUNDER BACKSTORY ("Why We Started This") */}
              <div className="space-y-4 pt-2">
                <div className="flex items-center space-x-2 border-b border-slate-200 pb-3">
                  <UserCheck className="w-4 h-4 text-[#0284C7]" />
                  <h3 className="font-display text-xl font-bold uppercase tracking-tight text-slate-900">
                    {startup.backstory.title}
                  </h3>
                </div>

                <div className="space-y-4 text-slate-700 font-sans text-sm sm:text-base font-normal leading-relaxed">
                  {startup.backstory.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>

                {/* Founders Credential Strip */}
                <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {startup.founders.map((founder) => (
                    <div
                      key={founder.name}
                      className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center space-x-3 shadow-2xs"
                    >
                      <div className="relative w-11 h-11 rounded-full overflow-hidden border border-slate-200 shrink-0 bg-slate-200">
                        <Image
                          src={founder.avatarUrl}
                          alt={founder.name}
                          fill
                          unoptimized
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <div className="text-sm font-sans font-semibold text-slate-900">
                          {founder.name}
                        </div>
                        <div className="text-xs font-mono text-slate-500">
                          {founder.context}
                        </div>
                        <div className="text-[11px] font-mono text-[#0284C7] font-medium">
                          {founder.role}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 5. "WHAT WE NEED RIGHT NOW" HIGHLIGHT CARD */}
              <div className="bg-sky-50/60 border border-sky-200/90 rounded-2xl p-6 space-y-4 shadow-xs">
                <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-[#0284C7] font-bold">
                  <HelpCircle className="w-4 h-4 text-[#0284C7]" />
                  <span>WHAT WE NEED RIGHT NOW</span>
                </div>

                <p className="text-xs text-slate-600 font-sans">
                  The Startup Lens is community-backed. If you or someone you know can help with these, reach out directly:
                </p>

                <ul className="space-y-2.5 pt-1">
                  {startup.needsRightNow.map((need, idx) => (
                    <li
                      key={idx}
                      className="flex items-start space-x-2.5 text-xs sm:text-sm text-slate-800 font-sans leading-relaxed"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0284C7] mt-2 shrink-0" />
                      <span>{need}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 6. CHEER & ENCOURAGEMENT FORM */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-5 shadow-xs">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
                    <span className="font-display text-base font-bold uppercase tracking-tight text-slate-900">
                      Cheer Them On
                    </span>
                  </div>

                  {/* Quick Cheer Button */}
                  <motion.button
                    type="button"
                    whileTap={{ scale: 0.92 }}
                    onClick={() => onCheer(startup.id)}
                    className={`inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg border text-xs font-mono uppercase tracking-wider transition-all cursor-pointer shadow-2xs ${
                      isCheered
                        ? "bg-rose-50 border-rose-200 text-rose-600"
                        : "bg-white border-slate-200 text-slate-700 hover:text-slate-900 hover:bg-slate-100"
                    }`}
                  >
                    <Heart
                      className={`w-3.5 h-3.5 ${
                        isCheered ? "fill-rose-500 text-rose-500" : ""
                      }`}
                    />
                    <span>{cheersCount} Cheers</span>
                  </motion.button>
                </div>

                {submittedNote ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-5 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-2"
                  >
                    <div className="w-9 h-9 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                      <Check className="w-5 h-5" />
                    </div>
                    <div className="text-sm font-sans font-semibold text-emerald-900">
                      Your note has been received!
                    </div>
                    <p className="text-xs text-slate-600 font-sans max-w-sm mx-auto">
                      We will bundle your encouragement into {startup.name}&apos;s weekly builder digest.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSendEncouragement} className="space-y-3.5">
                    <p className="text-xs text-slate-600 font-sans">
                      Leave a genuine word of encouragement or an offer to help{" "}
                      <strong className="text-slate-900 font-semibold">
                        {startup.founders[0].name}
                      </strong>
                      :
                    </p>

                    <input
                      type="text"
                      value={senderName}
                      onChange={(e) => setSenderName(e.target.value)}
                      placeholder="Your name or organization (e.g. Ama from Kumasi)"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#0284C7] focus:ring-1 focus:ring-[#0284C7]"
                    />

                    <textarea
                      required
                      rows={3}
                      value={encouragementNote}
                      onChange={(e) => setEncouragementNote(e.target.value)}
                      placeholder="Loved reading about the offline sync idea. Keep pushing, we need this in Takoradi too!"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#0284C7] focus:ring-1 focus:ring-[#0284C7] resize-none font-sans"
                    />

                    <button
                      type="submit"
                      className="w-full py-3 rounded-xl bg-slate-900 hover:bg-[#0284C7] text-white font-display font-bold text-xs uppercase tracking-widest transition-all duration-200 flex items-center justify-center space-x-2 shadow-xs cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Send Encouragement to {startup.founders[0].name}</span>
                    </button>
                  </form>
                )}
              </div>

            </div>

            {/* Bottom Footer Action */}
            <div className="p-5 sm:px-8 border-t border-slate-200 bg-white/95 backdrop-blur-md flex items-center justify-between">
              <span className="text-xs font-mono text-slate-500">
                The Startup Lens • Human-First Directory
              </span>
              <button
                type="button"
                onClick={onClose}
                className="text-xs font-mono uppercase tracking-wider text-[#0284C7] hover:underline cursor-pointer font-medium"
              >
                Close Story [ESC]
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
