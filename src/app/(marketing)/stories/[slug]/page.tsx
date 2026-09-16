import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, Share2 } from "lucide-react";
import { DEMO_STORIES } from "@/data/demo/stories";

interface StoryDetailPageProps {
  params: Promise<{ slug: string }>;
}

export default async function StoryDetailPage({ params }: StoryDetailPageProps) {
  const { slug } = await params;
  const story = DEMO_STORIES.find((s) => s.slug === slug) || DEMO_STORIES[0];

  return (
    <main className="min-h-screen bg-tsl-black text-tsl-white pt-32 pb-24">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <Link
          href="/stories"
          className="inline-flex items-center space-x-2 text-xs font-mono text-tsl-grey hover:text-tsl-blue transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>BACK TO ALL STORIES</span>
        </Link>

        <div className="space-y-6">
          <div className="flex items-center space-x-4 text-xs font-mono text-tsl-blue">
            <span className="px-3 py-1 bg-tsl-surface border border-tsl-dark-grey uppercase font-bold">
              {story.category} DIARY
            </span>
            <span className="flex items-center space-x-1.5 text-tsl-grey">
              <Clock className="w-3.5 h-3.5" />
              <span>{story.readingTime} MIN READ</span>
            </span>
          </div>

          <h1 className="font-display text-3xl sm:text-5xl font-bold uppercase tracking-tight text-tsl-white leading-tight">
            {story.title}
          </h1>

          <p className="text-xl text-tsl-white-soft font-sans leading-relaxed">
            {story.excerpt}
          </p>

          <div className="flex items-center justify-between pt-6 border-t border-tsl-dark-grey">
            <div className="flex items-center space-x-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border border-tsl-dark-grey">
                <Image src={story.author.avatarUrl} alt={story.author.name} fill className="object-cover" />
              </div>
              <div>
                <div className="text-sm font-bold text-tsl-white">{story.author.name}</div>
                <div className="text-xs font-mono text-tsl-grey">{story.author.role}</div>
              </div>
            </div>
            <button type="button" className="p-2.5 bg-tsl-surface border border-tsl-dark-grey text-tsl-grey hover:text-tsl-blue">
              <Share2 className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="relative h-96 sm:h-[480px] w-full bg-tsl-surface border border-tsl-dark-grey overflow-hidden">
          <Image src={story.coverImageUrl} alt={story.title} fill className="object-cover" priority />
        </div>

        <div className="prose prose-invert max-w-none space-y-6 text-tsl-white-soft text-lg leading-relaxed font-sans">
          <p>
            Across Africa&apos;s leading technology capitals—Lagos, Nairobi, Accra, and Cape Town—a fundamental transformation is taking place. Founders are shifting away from chasing vanity benchmarks and focusing heavily on product validation.
          </p>
          <p>
            When building for fragmented markets with variable connectivity and low consumer disposable income, traditional Silicon Valley playbook assumptions frequently fail. High customer acquisition costs paired with weak unit economics can drain seed rounds before product-market fit is achieved.
          </p>
          <blockquote className="p-6 bg-tsl-surface border-l-4 border-tsl-blue text-xl font-display uppercase tracking-wide text-tsl-white my-8">
            &ldquo;Building in public is not about vanity metrics; it is about building trust with your users and partners before you ever ask for capital.&rdquo;
          </blockquote>
          <p>
            As ecosystems mature, the signal-to-noise ratio matters more than ever. The Startup Lens continues to document these journeys in real-time.
          </p>
        </div>
      </article>
    </main>
  );
}
