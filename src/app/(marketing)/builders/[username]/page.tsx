import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, MapPin, ShieldCheck, ArrowUpRight, Globe, Sparkles, Layers, Quote } from "lucide-react";
import { DEMO_BUILDERS } from "@/data/demo/builders";
import { DEMO_STARTUPS } from "@/data/demo/startups";
import { DEMO_JOURNEYS } from "@/data/demo/journeys";
import { DEMO_FOUNDER_DROPS } from "@/data/demo/founder-drops";

interface BuilderProfilePageProps {
  params: Promise<{ username: string }>;
}

function normalizeUsername(str: string): string {
  return str.toLowerCase().replace(/[-_]/g, "");
}

export default async function BuilderProfilePage({ params }: BuilderProfilePageProps) {
  const { username } = await params;
  const normalized = normalizeUsername(username);

  const builder =
    DEMO_BUILDERS.find((b) => normalizeUsername(b.username) === normalized) ||
    DEMO_BUILDERS.find((b) => normalizeUsername(b.displayName) === normalized) ||
    DEMO_BUILDERS[0]; // fallback to first builder if test username

  if (!builder) {
    notFound();
  }

  const startup = DEMO_STARTUPS.find(
    (s) => s.id === builder.startupIds[0] || s.name.toLowerCase() === builder.startupName.toLowerCase()
  );

  const builderJourneys = DEMO_JOURNEYS.filter((j) => j.builderId === builder.id);
  const journeysToDisplay = builderJourneys.length > 0 ? builderJourneys : DEMO_JOURNEYS;

  const founderDrop = DEMO_FOUNDER_DROPS.find(
    (fd) => fd.founderName.toLowerCase() === builder.displayName.toLowerCase()
  );

  const otherBuilders = DEMO_BUILDERS.filter((b) => b.id !== builder.id).slice(0, 3);

  return (
    <main className="min-h-screen bg-tsl-black text-tsl-white pt-32 pb-24">
      <div className="max-w-container mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 space-y-12">
        {/* Navigation Breadcrumb */}
        <Link
          href="/builders"
          className="inline-flex items-center space-x-2 text-xs font-mono text-tsl-grey hover:text-tsl-blue transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>BACK TO ALL BUILDERS</span>
        </Link>

        {/* Builder Hero Header */}
        <div className="surface-card p-8 sm:p-12 border border-tsl-dark-grey relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 overflow-hidden border-2 border-tsl-dark-grey">
                <Image
                  src={builder.avatarUrl}
                  alt={builder.displayName}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <h1 className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight text-tsl-white">
                    {builder.displayName}
                  </h1>
                  {builder.featured && (
                    <span title="Verified Builder">
                      <ShieldCheck className="w-6 h-6 text-tsl-blue" />
                    </span>
                  )}
                </div>

                <div className="text-sm font-mono text-tsl-blue">
                  {builder.role} @ <span className="text-tsl-white font-bold">{builder.startupName}</span>
                </div>

                <div className="flex items-center space-x-4 text-xs font-mono text-tsl-grey pt-1">
                  <span className="flex items-center space-x-1">
                    <MapPin className="w-3.5 h-3.5 text-tsl-blue" />
                    <span>
                      {builder.city ? `${builder.city}, ` : ""}
                      {builder.country}
                    </span>
                  </span>
                  <span className="px-2.5 py-0.5 bg-tsl-black border border-tsl-dark-grey text-tsl-blue uppercase font-bold">
                    STAGE: {builder.stage.toUpperCase()}
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto">
              <Link
                href="/signup"
                className="px-6 py-3 bg-tsl-blue text-tsl-black font-display font-bold text-xs uppercase tracking-widest hover:bg-tsl-white transition-colors text-center"
              >
                CONNECT WITH BUILDER
              </Link>
            </div>
          </div>
        </div>

        {/* Main Profile Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Bio, Skills, Startup */}
          <div className="lg:col-span-5 space-y-8">
            {/* Bio Card */}
            <div className="surface-card p-6 sm:p-8 space-y-4 border border-tsl-dark-grey">
              <div className="flex items-center space-x-2 text-xs font-mono text-tsl-blue uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5" />
                <span>BUILDER BIO</span>
              </div>
              <p className="text-tsl-white-soft text-base font-sans leading-relaxed">
                {builder.bio}
              </p>

              <div className="pt-4 border-t border-tsl-dark-grey/60 space-y-2">
                <div className="text-xs font-mono text-tsl-grey uppercase">CORE DOMAINS & SKILLS:</div>
                <div className="flex flex-wrap gap-2">
                  {builder.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-tsl-black border border-tsl-dark-grey text-xs font-mono text-tsl-white-soft"
                    >
                      #{skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Associated Startup Card */}
            {startup && (
              <div className="surface-card p-6 sm:p-8 space-y-4 border border-tsl-dark-grey group">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-xs font-mono text-tsl-blue uppercase tracking-widest">
                    <Layers className="w-3.5 h-3.5" />
                    <span>PRIMARY VENTURE</span>
                  </div>
                  <span className="px-2 py-0.5 bg-tsl-black text-[10px] font-mono text-tsl-blue border border-tsl-dark-grey uppercase">
                    {startup.category}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-tsl-white group-hover:text-tsl-blue transition-colors">
                    {startup.name}
                  </h3>
                  <p className="text-xs font-mono text-tsl-blue">{startup.tagline}</p>
                  <p className="text-sm text-tsl-grey font-sans line-clamp-3">
                    {startup.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-tsl-dark-grey/60">
                  <Link
                    href={`/startups/${startup.slug}`}
                    className="w-full inline-flex items-center justify-between px-4 py-2.5 bg-tsl-surface border border-tsl-dark-grey text-xs font-mono uppercase tracking-wider text-tsl-white group-hover:border-tsl-blue group-hover:text-tsl-blue transition-all"
                  >
                    <span>EXPLORE {startup.name.toUpperCase()} PROFILE</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            )}

            {/* Founder Drop Quote Card */}
            {founderDrop && (
              <div className="surface-card p-6 sm:p-8 space-y-4 border border-tsl-dark-grey bg-tsl-surface/50">
                <div className="flex items-center space-x-2 text-xs font-mono text-tsl-blue uppercase tracking-widest">
                  <Quote className="w-3.5 h-3.5" />
                  <span>FOUNDER DROP // RAW SIGNAL</span>
                </div>
                <blockquote className="text-sm font-sans italic text-tsl-white-soft leading-relaxed border-l-2 border-tsl-blue pl-4 py-1">
                  &ldquo;{founderDrop.quote}&rdquo;
                </blockquote>
                <Link
                  href={`/founder-drops/${founderDrop.slug}`}
                  className="inline-flex items-center space-x-1.5 text-xs font-mono text-tsl-blue hover:text-tsl-white transition-colors"
                >
                  <span>WATCH FULL LESSON ({founderDrop.duration})</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            )}
          </div>

          {/* Right Column: Timeline & Journey */}
          <div className="lg:col-span-7 space-y-8">
            <div className="surface-card p-6 sm:p-8 space-y-8 border border-tsl-dark-grey">
              <div className="flex items-center justify-between border-b border-tsl-dark-grey/60 pb-4">
                <div>
                  <div className="text-xs font-mono text-tsl-blue uppercase tracking-widest">
                    CHRONOLOGY
                  </div>
                  <h2 className="font-display text-2xl font-bold uppercase tracking-tight text-tsl-white">
                    LIVING BUILD JOURNEY
                  </h2>
                </div>
                <span className="text-xs font-mono text-tsl-grey">
                  {journeysToDisplay.length} MILESTONES
                </span>
              </div>

              {/* Timeline Items */}
              <div className="relative border-l-2 border-tsl-dark-grey/80 ml-3 pl-6 sm:pl-8 space-y-8">
                {journeysToDisplay.map((entry) => (
                  <div key={entry.id} className="relative group">
                    {/* Node Dot */}
                    <div className="absolute top-1 -left-[31px] sm:-left-[39px] w-5 h-5 rounded-full bg-tsl-black border-2 border-tsl-blue flex items-center justify-center group-hover:scale-125 transition-transform shadow-[0_0_8px_#00D4FF]">
                      <div className="w-1.5 h-1.5 rounded-full bg-tsl-blue" />
                    </div>

                    <div className="bg-tsl-surface p-5 space-y-2 border border-tsl-dark-grey/60 group-hover:border-tsl-blue/50 transition-colors">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-bold text-tsl-blue uppercase">
                          {entry.date}
                        </span>
                        <span className="text-[10px] font-mono text-tsl-grey uppercase px-2 py-0.5 bg-tsl-black border border-tsl-dark-grey">
                          {entry.type}
                        </span>
                      </div>

                      <h4 className="font-display text-lg font-bold uppercase text-tsl-white">
                        {entry.title}
                      </h4>

                      <p className="text-xs sm:text-sm text-tsl-white-soft/80 font-sans leading-relaxed">
                        {entry.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Other Builders Grid */}
        <div className="pt-12 border-t border-tsl-dark-grey/60 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="font-display text-xl font-bold uppercase tracking-tight text-tsl-white">
              DISCOVER MORE BUILDERS
            </h3>
            <Link
              href="/builders"
              className="text-xs font-mono text-tsl-blue hover:text-tsl-white transition-colors"
            >
              VIEW ALL &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherBuilders.map((b) => (
              <Link
                key={b.id}
                href={`/builders/${b.username}`}
                className="surface-card p-5 border border-tsl-dark-grey hover:border-tsl-blue transition-colors group flex items-center space-x-4"
              >
                <div className="relative w-12 h-12 overflow-hidden border border-tsl-dark-grey shrink-0">
                  <Image src={b.avatarUrl} alt={b.displayName} fill className="object-cover" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="font-display text-base font-bold uppercase text-tsl-white group-hover:text-tsl-blue transition-colors truncate">
                    {b.displayName}
                  </div>
                  <div className="text-xs font-mono text-tsl-grey truncate">
                    {b.role} @ {b.startupName}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
