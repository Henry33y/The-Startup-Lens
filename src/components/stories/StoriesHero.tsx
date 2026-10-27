export default function StoriesHero() {
  return (
    <section className="pt-36 sm:pt-44 lg:pt-50 pb-12 sm:pb-16 bg-tsl-black relative overflow-hidden">
      <div className="max-w-container mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
        {/* Centered Section Heading */}
        <div className="w-full flex justify-center mb-8 sm:mb-12 pb-2">
          <span className="font-mono text-base sm:text-lg uppercase tracking-widest text-tsl-white font-semibold border-b-2 border-tsl-white pb-1 inline-block">
            EDITORIAL
          </span>
        </div>

        <div className="max-w-4xl space-y-6">

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
