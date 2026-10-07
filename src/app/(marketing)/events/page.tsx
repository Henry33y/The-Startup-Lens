import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, MapPin, ArrowUpRight, Sparkles, Radio } from "lucide-react";

export const metadata: Metadata = {
  title: "Events & Hubs | The Startup Lens",
  description:
    "Discover early-stage demo days, founder meetups, and ecosystem gatherings across Lagos, Nairobi, Cape Town, Accra, Kigali, and Dakar.",
  openGraph: {
    title: "Events & Hubs | The Startup Lens",
    description: "Discover early-stage demo days and ecosystem gatherings across Africa.",
    url: "https://thestartuplens.com/events",
    siteName: "The Startup Lens",
    images: [
      {
        url: "/logos/TheStartUPLens-Logo-white.png",
        width: 1200,
        height: 630,
        alt: "The Startup Lens — Events",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Events & Hubs | The Startup Lens",
    description: "Discover African tech demo days and founder meetups.",
    images: ["/logos/TheStartUPLens-Logo-white.png"],
  },
};

const EVENTS = [
  {
    id: "e1",
    title: "Lagos Early Builders Pitch & Product Jam",
    date: "OCT 24, 2026",
    time: "17:00 WAT",
    location: "Victoria Island, Lagos",
    country: "Nigeria",
    type: "In-Person",
    description: "10 early-stage builders demoing live software and hardware MVPs before an audience of peer engineers and angel syndicates.",
    tag: "DEMO DAY",
  },
  {
    id: "e2",
    title: "Nairobi ClimateTech & Agri-Hardware Summit",
    date: "NOV 08, 2026",
    time: "09:30 EAT",
    location: "Kilimani, Nairobi",
    country: "Kenya",
    type: "Hybrid",
    description: "Deep dive into low-power IoT telemetry, solar micro-grid firmware, and satellite ground verification across East Africa.",
    tag: "CONFERENCE",
  },
  {
    id: "e3",
    title: "Accra Frontier Founders Mixer",
    date: "NOV 19, 2026",
    time: "18:00 GMT",
    location: "Airport City, Accra",
    country: "Ghana",
    type: "In-Person",
    description: "An intimate evening with founders building in West Africa sharing unvarnished war stories and unit economics lessons.",
    tag: "MEETUP",
  },
  {
    id: "e4",
    title: "Pan-African AI Telemetry Virtual Showcase",
    date: "DEC 02, 2026",
    time: "15:00 UTC",
    location: "Online / Global Stream",
    country: "Pan-Africa",
    type: "Virtual",
    description: "Live presentations from 8 on-device machine learning teams building offline-first healthcare and fintech protocols.",
    tag: "VIRTUAL DEMO",
  },
];

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-tsl-black text-tsl-white pt-32 sm:pt-40 pb-24 sm:pb-32">
      <div className="max-w-container mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 space-y-16">
        {/* Header */}
        <div className="space-y-6 max-w-3xl">
          <div className="flex items-center space-x-3">
            <span className="w-8 h-[2px] bg-tsl-blue" />
            <span className="font-mono text-xs uppercase tracking-widest text-tsl-blue">
              ECOSYSTEM RADAR // GATHERINGS
            </span>
          </div>
          <h1 className="heading-hero text-tsl-white">
            EVENTS & HUBS.
          </h1>
          <p className="text-tsl-white-soft text-lg sm:text-xl font-sans leading-relaxed">
            Where Africa&apos;s early-stage builders, technical founders, and scouts meet in the real world and across virtual demo channels.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {EVENTS.map((event) => (
            <div
              key={event.id}
              className="surface-card p-6 sm:p-8 border border-tsl-dark-grey hover:border-tsl-blue transition-colors flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 bg-tsl-surface border border-tsl-dark-grey text-xs font-mono font-bold text-tsl-blue uppercase">
                    {event.tag}
                  </span>
                  <span className="text-xs font-mono text-tsl-grey flex items-center space-x-1">
                    <Radio className="w-3.5 h-3.5 text-tsl-blue" />
                    <span>{event.type}</span>
                  </span>
                </div>

                <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-tsl-white">
                  {event.title}
                </h3>

                <p className="text-sm text-tsl-white-soft font-sans leading-relaxed">
                  {event.description}
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono text-tsl-grey border-t border-tsl-dark-grey/50">
                  <span className="flex items-center space-x-1.5 text-tsl-white">
                    <Calendar className="w-3.5 h-3.5 text-tsl-blue" />
                    <span>{event.date} • {event.time}</span>
                  </span>
                  <span className="flex items-center space-x-1.5">
                    <MapPin className="w-3.5 h-3.5 text-tsl-blue" />
                    <span>{event.location}</span>
                  </span>
                </div>
              </div>

              <div>
                <Link
                  href="/signup"
                  className="w-full inline-flex items-center justify-between px-4 py-3 bg-tsl-surface border border-tsl-dark-grey text-xs font-mono uppercase tracking-wider text-tsl-white hover:border-tsl-blue hover:text-tsl-blue transition-all"
                >
                  <span>RSVP / GET ACCESS PASS</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
