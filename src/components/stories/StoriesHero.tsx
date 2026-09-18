export default function StoriesHero() {
  return (
    <section className="pt-36 sm:pt-44 lg:pt-50 pb-12 sm:pb-16 bg-tsl-black relative overflow-hidden">
      <div className="max-w-container mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
        <div className="max-w-4xl space-y-6">
          {/* Subtle Editorial Accent Mark */}
          <div className="flex items-center space-x-3">
            <span className="w-8 h-[2px] bg-tsl-blue" />
            <span className="font-mono text-xs uppercase tracking-widest text-tsl-blue">
              EDITORIAL
            </span>
          </div>

          {/* Hero Headline */}
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tight text-tsl-white leading-[0.95]">
            STORIES FROM <br />
            <span className="text-tsl-blue">THE BUILD.</span>
          </h1>

          {/* Supporting Copy */}
          <p className="text-lg sm:text-2xl text-tsl-white-soft/80 font-sans font-light max-w-2xl leading-relaxed pt-2">
            The people, ideas, experiments and lessons behind Africa&apos;s emerging startups.
          </p>
        </div>
      </div>
    </section>
  );
}
