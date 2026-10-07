import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Globe, MapPin, AlertCircle, CheckCircle, Users, Sparkles } from "lucide-react";
import { DEMO_STARTUPS } from "@/data/demo/startups";
import { DEMO_BUILDERS } from "@/data/demo/builders";

interface StartupDetailPageProps {
  params: Promise<{ slug: string }>;
}

export default async function StartupDetailPage({ params }: StartupDetailPageProps) {
  const { slug } = await params;

  const startup =
    DEMO_STARTUPS.find((s) => s.slug.toLowerCase() === slug.toLowerCase()) ||
    DEMO_STARTUPS.find((s) => s.id.toLowerCase() === slug.toLowerCase()) ||
    DEMO_STARTUPS[0];

  if (!startup) {
    notFound();
  }

  // Find linked founders
  const linkedFounders = DEMO_BUILDERS.filter(
    (b) =>
      startup.founderIds.includes(b.id) ||
      startup.founders.some((f) => f.name.toLowerCase() === b.displayName.toLowerCase())
  );

  const relatedStartups = DEMO_STARTUPS.filter((s) => s.id !== startup.id).slice(0, 3);

  return (
    <main className="min-h-screen bg-tsl-black text-tsl-white pt-32 pb-24">
      <div className="max-w-container mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 space-y-12">
        {/* Navigation Breadcrumb */}
        <Link
          href="/startups"
          className="inline-flex items-center space-x-2 text-xs font-mono text-tsl-grey hover:text-tsl-blue transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>BACK TO ALL STARTUPS</span>
        </Link>

        {/* Hero Cover Header */}
        <div className="surface-card border border-tsl-dark-grey overflow-hidden relative">
          {/* Cover Image */}
          <div className="relative h-64 sm:h-80 w-full bg-tsl-surface overflow-hidden">
            {startup.coverImageUrl && (
              <Image
                src={startup.coverImageUrl}
                alt={startup.name}
                fill
                className="object-cover filter grayscale-[15%]"
                priority
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-tsl-black via-tsl-black/60 to-transparent" />
          </div>

          {/* Header Info Overlay */}
          <div className="p-6 sm:p-10 -mt-16 sm:-mt-20 relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              {startup.logoUrl && (
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 border-2 border-tsl-dark-grey overflow-hidden bg-tsl-surface shadow-2xl shrink-0">
                  <Image src={startup.logoUrl} alt={startup.name} fill className="object-cover" />
                </div>
              )}

              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2.5">
                  <h1 className="font-display text-3xl sm:text-5xl font-bold uppercase tracking-tight text-tsl-white">
                    {startup.name}
                  </h1>
                  <span className="px-3 py-1 bg-tsl-surface border border-tsl-dark-grey text-xs font-mono text-tsl-blue font-bold uppercase">
                    {startup.category}
                  </span>
                  <span
                    className={`px-3 py-1 text-xs font-mono uppercase font-bold border ${
                      startup.stage.toLowerCase() === "launched"
                        ? "bg-tsl-blue/20 text-tsl-blue border-tsl-blue"
                        : "bg-tsl-white/10 text-tsl-white border-tsl-white-soft"
                    }`}
                  >
                    STAGE: {startup.stage.toUpperCase()}
                  </span>
                </div>

                <p className="text-sm sm:text-base font-mono text-tsl-blue font-medium">
                  {startup.tagline}
                </p>

                <div className="flex items-center space-x-4 text-xs font-mono text-tsl-grey pt-1">
                  <span className="flex items-center space-x-1">
                    <MapPin className="w-3.5 h-3.5 text-tsl-blue" />
                    <span>
                      {startup.city ? `${startup.city}, ` : ""}
                      {startup.country}
                    </span>
                  </span>
                  <span>•</span>
                  <span>DOCUMENTED SINCE {new Date(startup.createdAt).toLocaleDateString("en-US", { month: "short", year: "numeric" })}</span>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Link
                href="/signup"
                className="px-6 py-3 bg-tsl-blue text-tsl-black font-display font-bold text-xs uppercase tracking-widest hover:bg-tsl-white transition-colors text-center"
              >
                REQUEST INTRO / ACCESS
              </Link>
            </div>
          </div>
        </div>

        {/* Problem vs Solution Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Problem Card */}
          <div className="surface-card p-6 sm:p-8 space-y-4 border border-tsl-dark-grey relative overflow-hidden">
            <div className="flex items-center space-x-2 text-xs font-mono text-rose-400 uppercase tracking-widest">
              <AlertCircle className="w-4 h-4" />
              <span>THE PROBLEM BEING SOLVED</span>
            </div>
            <h3 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-tsl-white">
              FRICTION & INEFFICIENCY
            </h3>
            <p className="text-tsl-white-soft text-base font-sans leading-relaxed">
              {startup.problem}
            </p>
          </div>

          {/* Solution Card */}
          <div className="surface-card p-6 sm:p-8 space-y-4 border border-tsl-blue/50 bg-tsl-surface/40 relative overflow-hidden">
            <div className="flex items-center space-x-2 text-xs font-mono text-tsl-blue uppercase tracking-widest">
              <CheckCircle className="w-4 h-4" />
              <span>THE ENGINEERED SOLUTION</span>
            </div>
            <h3 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-tsl-white">
              SYSTEM ARCHITECTURE
            </h3>
            <p className="text-tsl-white-soft text-base font-sans leading-relaxed">
              {startup.solution}
            </p>
          </div>
        </div>

        {/* Full Overview & Deep Dive */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Description */}
          <div className="lg:col-span-8 surface-card p-6 sm:p-10 space-y-6 border border-tsl-dark-grey">
            <div className="flex items-center space-x-2 text-xs font-mono text-tsl-blue uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>VENTURE OVERVIEW</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-tsl-white">
              WHAT {startup.name.toUpperCase()} IS BUILDING
            </h2>
            <div className="prose prose-invert text-tsl-white-soft text-base sm:text-lg font-sans leading-relaxed space-y-4">
              <p>{startup.description}</p>
              <p>
                Operating in the African tech ecosystem requires deep resilience, localized offline-first architecture, and distribution systems adapted to local commerce behaviors. {startup.name} is pioneering a purpose-built model tailored specifically for {startup.country}.
              </p>
            </div>
          </div>

          {/* Founders & Team Column */}
          <div className="lg:col-span-4 space-y-8">
            <div className="surface-card p-6 sm:p-8 space-y-6 border border-tsl-dark-grey">
              <div className="flex items-center space-x-2 text-xs font-mono text-tsl-blue uppercase tracking-widest">
                <Users className="w-3.5 h-3.5" />
                <span>FOUNDING TEAM</span>
              </div>

              <div className="space-y-4">
                {startup.founders.map((founder, idx) => {
                  const matchedBuilder = linkedFounders.find(
                    (b) => b.displayName.toLowerCase() === founder.name.toLowerCase()
                  );

                  return (
                    <div
                      key={idx}
                      className="p-4 bg-tsl-surface border border-tsl-dark-grey flex items-center justify-between"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="relative w-12 h-12 overflow-hidden border border-tsl-dark-grey shrink-0">
                          <Image
                            src={founder.avatarUrl}
                            alt={founder.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <div className="font-display text-base font-bold uppercase text-tsl-white">
                            {founder.name}
                          </div>
                          <div className="text-xs font-mono text-tsl-grey">{founder.role}</div>
                        </div>
                      </div>

                      {matchedBuilder && (
                        <Link
                          href={`/builders/${matchedBuilder.username}`}
                          className="p-2 text-tsl-grey hover:text-tsl-blue transition-colors"
                          title="View Builder Profile"
                        >
                          <ArrowUpRight className="w-4 h-4" />
                        </Link>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Related Startups */}
        <div className="pt-12 border-t border-tsl-dark-grey/60 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="font-display text-xl font-bold uppercase tracking-tight text-tsl-white">
              MORE VENTURES IN THE INDEX
            </h3>
            <Link
              href="/startups"
              className="text-xs font-mono text-tsl-blue hover:text-tsl-white transition-colors"
            >
              EXPLORE ALL STARTUPS &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedStartups.map((s) => (
              <Link
                key={s.id}
                href={`/startups/${s.slug}`}
                className="surface-card p-6 border border-tsl-dark-grey hover:border-tsl-blue transition-colors group space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-tsl-blue uppercase">{s.category}</span>
                  <span className="text-[10px] font-mono text-tsl-grey uppercase">
                    STAGE: {s.stage}
                  </span>
                </div>
                <h4 className="font-display text-xl font-bold uppercase text-tsl-white group-hover:text-tsl-blue transition-colors">
                  {s.name}
                </h4>
                <p className="text-xs text-tsl-grey font-sans line-clamp-2">{s.tagline}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
