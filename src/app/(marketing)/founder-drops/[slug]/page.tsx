import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Play, Clock, Share2, ArrowUpRight, Sparkles } from "lucide-react";
import { DEMO_FOUNDER_DROPS } from "@/data/demo/founder-drops";
import { DEMO_BUILDERS } from "@/data/demo/builders";

interface FounderDropPageProps {
  params: Promise<{ slug: string }>;
}

export default async function FounderDropDetailPage({ params }: FounderDropPageProps) {
  const { slug } = await params;

  const drop =
    DEMO_FOUNDER_DROPS.find((d) => d.slug.toLowerCase() === slug.toLowerCase()) ||
    DEMO_FOUNDER_DROPS[0];

  if (!drop) {
    notFound();
  }

  const matchedBuilder = DEMO_BUILDERS.find(
    (b) => b.displayName.toLowerCase() === drop.founderName.toLowerCase()
  );

  const relatedDrops = DEMO_FOUNDER_DROPS.filter((d) => d.id !== drop.id);

  return (
    <main className="min-h-screen bg-tsl-black text-tsl-white pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6 sm:px-10 space-y-12">
        {/* Navigation Breadcrumb */}
        <Link
          href="/founder-drops"
          className="inline-flex items-center space-x-2 text-xs font-mono text-tsl-grey hover:text-tsl-blue transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>BACK TO ALL FOUNDER DROPS</span>
        </Link>

        {/* Drop Header */}
        <div className="space-y-6">
          <div className="flex items-center space-x-4 text-xs font-mono text-tsl-blue">
            <span className="px-3 py-1 bg-tsl-surface border border-tsl-dark-grey uppercase font-bold">
              FOUNDER DROP // RAW LESSON
            </span>
            <span className="flex items-center space-x-1.5 text-tsl-grey">
              <Clock className="w-3.5 h-3.5" />
              <span>{drop.duration} DURATION</span>
            </span>
          </div>

          <h1 className="font-display text-3xl sm:text-5xl font-bold uppercase tracking-tight text-tsl-white leading-tight">
            {drop.title}
          </h1>

          {/* Founder Metadata */}
          <div className="flex items-center justify-between pt-6 border-t border-tsl-dark-grey">
            <div className="flex items-center space-x-4">
              <div className="relative w-12 h-12 overflow-hidden border border-tsl-dark-grey">
                <Image src={drop.avatarUrl} alt={drop.founderName} fill className="object-cover" />
              </div>
              <div>
                <div className="text-base font-bold text-tsl-white">{drop.founderName}</div>
                <div className="text-xs font-mono text-tsl-grey">
                  {drop.founderRole} @ <span className="text-tsl-blue">{drop.startupName}</span>
                </div>
              </div>
            </div>

            {matchedBuilder && (
              <Link
                href={`/builders/${matchedBuilder.username}`}
                className="inline-flex items-center space-x-1 text-xs font-mono text-tsl-blue hover:text-tsl-white transition-colors"
              >
                <span>VIEW PROFILE</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            )}
          </div>
        </div>

        {/* Video Player Display */}
        <div className="relative h-96 sm:h-[480px] w-full bg-tsl-surface border border-tsl-dark-grey overflow-hidden group">
          <Image
            src={drop.videoThumbnailUrl}
            alt={drop.title}
            fill
            className="object-cover filter grayscale-[10%]"
            priority
          />
          <div className="absolute inset-0 bg-tsl-black/40 flex items-center justify-center">
            <button
              type="button"
              className="w-20 h-20 rounded-full bg-tsl-blue text-tsl-black flex items-center justify-center shadow-[0_0_30px_rgba(0,212,255,0.6)] hover:scale-110 transition-transform"
              aria-label="Play video"
            >
              <Play className="w-8 h-8 fill-current ml-1" />
            </button>
          </div>
        </div>

        {/* Highlighted Trench Quote */}
        <div className="surface-card p-8 sm:p-10 border-l-4 border-tsl-blue bg-tsl-surface/60 space-y-4">
          <div className="flex items-center space-x-2 text-xs font-mono text-tsl-blue uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>UNFILTERED VERBATIM</span>
          </div>
          <blockquote className="font-display text-2xl sm:text-3xl uppercase tracking-wide text-tsl-white leading-relaxed">
            &ldquo;{drop.quote}&rdquo;
          </blockquote>
        </div>

        {/* Related Drops */}
        <div className="pt-12 border-t border-tsl-dark-grey/60 space-y-6">
          <h3 className="font-display text-xl font-bold uppercase tracking-tight text-tsl-white">
            MORE FOUNDER DROPS
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {relatedDrops.map((d) => (
              <Link
                key={d.id}
                href={`/founder-drops/${d.slug}`}
                className="surface-card p-5 border border-tsl-dark-grey hover:border-tsl-blue transition-colors group space-y-2"
              >
                <div className="text-xs font-mono text-tsl-blue">{d.duration} • {d.founderName}</div>
                <div className="font-display text-base font-bold uppercase text-tsl-white group-hover:text-tsl-blue transition-colors">
                  {d.title}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
