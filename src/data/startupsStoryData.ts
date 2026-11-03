export type SectorCategory =
  | "All Ideas"
  | "Money & Shopping"
  | "Farming & Food"
  | "Health & Care"
  | "Learning & Youth"
  | "Getting Around"
  | "Campus Inventions";

export type JourneyStage =
  | "Just Getting Started"
  | "Testing with Real People"
  | "Live & Open to Everyone";

export interface FounderInfo {
  name: string;
  role: string;
  context: string;
  avatarUrl: string;
}

export interface VoiceNoteClip {
  title: string;
  durationSeconds: number;
  durationLabel: string;
  transcriptSnippet?: string;
}

export interface StoryStartup {
  id: string;
  name: string;
  slug: string;
  city: string;
  country: string;
  countryFlag: string;
  category: SectorCategory;
  additionalCategories?: SectorCategory[];
  stage: JourneyStage;
  oneLiner: string;
  everydayReality: string;
  founders: FounderInfo[];
  needsRightNow: string[];
  cheersCount: number;
  backstory: {
    title: string;
    paragraphs: string[];
  };
  voiceNote: VoiceNoteClip;
  coverImageUrl: string;
  founderImageUrl: string;
  stats?: { label: string; value: string }[];
}

export const SECTOR_CATEGORIES: SectorCategory[] = [
  "All Ideas",
  "Money & Shopping",
  "Farming & Food",
  "Health & Care",
  "Learning & Youth",
  "Getting Around",
  "Campus Inventions",
];

export const JOURNEY_STAGES: { stage: JourneyStage; label: string; color: string; dotClass: string }[] = [
  {
    stage: "Just Getting Started",
    label: "Just Getting Started",
    color: "#F59E0B",
    dotClass: "bg-amber-400 shadow-[0_0_8px_rgba(245,158,11,0.6)]",
  },
  {
    stage: "Testing with Real People",
    label: "Testing with Real People",
    color: "#38BDF8",
    dotClass: "bg-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.6)]",
  },
  {
    stage: "Live & Open to Everyone",
    label: "Live & Open to Everyone",
    color: "#10B981",
    dotClass: "bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.6)]",
  },
];

export const COUNTRIES = [
  { name: "All Countries", flag: "🌍" },
  { name: "Ghana", flag: "🇬🇭" },
  { name: "Nigeria", flag: "🇳🇬" },
  { name: "Kenya", flag: "🇰🇪" },
  { name: "Tunisia", flag: "🇹🇳" },
  { name: "Rwanda", flag: "🇷🇼" },
];

export const STORY_STARTUPS: StoryStartup[] = [
  {
    id: "kudopos",
    name: "KudoPOS",
    slug: "kudopos",
    city: "Accra",
    country: "Ghana",
    countryFlag: "🇬🇭",
    category: "Money & Shopping",
    additionalCategories: ["Campus Inventions"],
    stage: "Testing with Real People",
    oneLiner: "No internet? No power? Makola market traders can still record sales.",
    everydayReality:
      "During power outages in Accra, mobile money fails and shop owners lose thousands in walk-away customers. KudoPOS is a battery-powered pocket device that records payments offline until the power returns.",
    founders: [
      {
        name: "Kwame Asante",
        role: "Lead Builder & Hardware Tinkerer",
        context: "21, KNUST student",
        avatarUrl:
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400",
      },
      {
        name: "Efua Mensah",
        role: "Co-Builder & Merchant Operations",
        context: "23, Kumasi Tech Fellow",
        avatarUrl:
          "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=400",
      },
    ],
    needsRightNow: [
      "Looking for 10 more provisions stores in Kumasi and Accra to test our handheld device.",
      "Feedback from industrial designers on 3D casing durability inside humid market stalls.",
      "Introductions to local community credit unions and informal trader associations.",
    ],
    cheersCount: 142,
    backstory: {
      title: "Why We Started KudoPOS",
      paragraphs: [
        "Every Friday afternoon after university lectures, Kwame would visit his mother's provisions stall in the bustling center of Makola Market in Accra. Whenever the lights blinked out or cellular cell towers congested during the 3 PM Friday rush, trade came to a painful standstill. Customers with digital mobile money wallets gave up waiting and walked away, while cardboard paper books recording credit quickly got torn or lost in the rain.",
        "Together with fellow student Efua, they stopped dreaming about complicated Silicon Valley payment APIs and focused on the reality on the ground: battery life that lasts 48 hours without grid power, tactile physical buttons that survive flour dust, and an offline Bluetooth ledger that syncs receipts automatically the minute connectivity blinks back on. The very first prototype was soldered inside a plastic pencil case. Today, six market stalls in central Accra trade on it daily without missing a single cedi.",
      ],
    },
    voiceNote: {
      title: "Hear Kwame explain the Makola pilot in his own words (0:34)",
      durationSeconds: 34,
      durationLabel: "0:34",
      transcriptSnippet:
        "When the network cuts at 4pm in Makola, you see five mothers waving their phones in the air. That is not a tech problem—that is bread lost on their dinner tables. We had to build something that never needs permission from a cell tower to record a trade.",
    },
    coverImageUrl:
      "https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&q=80&w=1200",
    founderImageUrl:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1000",
    stats: [
      { label: "Active Test Stalls", value: "6 Stores" },
      { label: "Offline Trades Handled", value: "3,400+" },
      { label: "Battery Endurance", value: "48 Hours" },
    ],
  },
  {
    id: "agrisensor",
    name: "AgriSensor",
    slug: "agrisensor",
    city: "Kaduna",
    country: "Nigeria",
    countryFlag: "🇳🇬",
    category: "Farming & Food",
    stage: "Testing with Real People",
    oneLiner: "Protecting northern grain crops from drying out using solar field alarms.",
    everydayReality:
      "Farmers in Kaduna lose entire harvests when unpredictable droughts hit unmonitored fields. Amina built simple solar ground stakes that send text messages in Hausa warning when soil moisture drops dangerously low.",
    founders: [
      {
        name: "Amina Bello",
        role: "Field Researcher & Founder",
        context: "24, Agricultural Researcher",
        avatarUrl:
          "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
      },
    ],
    needsRightNow: [
      "Seeking connections to smallholder farming cooperatives in northern Nigeria.",
      "Reliable low-cost suppliers for small 5V solar panels in Kano or Kaduna.",
      "Volunteer community translators to expand our SMS drought alerts into Fulfulde and Kanuri.",
    ],
    cheersCount: 218,
    backstory: {
      title: "Why We Started AgriSensor",
      paragraphs: [
        "During agricultural fieldwork in outer Kaduna, Amina watched third-generation grain farmers walk three miles under scorching midday heat just to dig a stick into parched soil, praying their maize wouldn't wither before harvest. Unpredictable climate patterns had rendered ancient generational intuition unreliable, and industrial smart-farming machinery cost more than an entire village's yearly harvest.",
        "Amina gathered discarded solar garden lights and cheap copper probes, wiring them to recycled GSM phone circuit boards. When soil moisture drops to emergency levels, the ground stake sends an instant SMS in native Hausa to the farmer's basic feature phone: 'Ruwa ya kare a fili na 3' (Water has run dry on Plot 3). Now twelve farming families in Zaria sleep soundly without fearing that their season's crop will dry up overnight.",
      ],
    },
    voiceNote: {
      title: "Amina on testing solar probes with Zaria maize farmers (0:41)",
      durationSeconds: 41,
      durationLabel: "0:41",
      transcriptSnippet:
        "The farmers didn't need a colorful smartphone dashboard with pie charts. They needed an SMS in Hausa on their 2,000-naira phone telling them exactly which row of maize was thirsty before noon.",
    },
    coverImageUrl:
      "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80&w=1200",
    founderImageUrl:
      "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&q=80&w=1000",
    stats: [
      { label: "Participating Farms", value: "12 Farms" },
      { label: "Acreage Protected", value: "85 Acres" },
      { label: "SMS Warnings Delivered", value: "920+" },
    ],
  },
  {
    id: "campusride",
    name: "CampusRide",
    slug: "campusride",
    city: "Kumasi",
    country: "Ghana",
    countryFlag: "🇬🇭",
    category: "Getting Around",
    additionalCategories: ["Campus Inventions"],
    stage: "Just Getting Started",
    oneLiner: "Affordable micro-trips and package delivery connecting university hostels.",
    everydayReality:
      "Students walking between distant lecture halls at night face high taxi fares and safety worries. Kofi is pooling student motorbikes into a verified, affordable on-campus transport network.",
    founders: [
      {
        name: "Kofi Boateng",
        role: "Rider Community Lead",
        context: "3rd-year CS student, KNUST",
        avatarUrl:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
      },
    ],
    needsRightNow: [
      "Looking for a student graphic designer who wants to build real brand identity experience.",
      "Reflective safety vests and bulk helmet sponsors for our first cohort of campus riders.",
      "Campus student ambassadors across University of Ghana (Legon) and UCC Cape Coast.",
    ],
    cheersCount: 89,
    backstory: {
      title: "Why We Started CampusRide",
      paragraphs: [
        "At KNUST in Kumasi, the trek between off-campus student hostels in Ayeduase and the main engineering lecture halls takes 35 minutes across unlit gravel roads. Whenever evening tropical rainstorms hit, commercial campus taxis hike their prices four-fold, forcing stranded students to either miss laboratory sessions or walk home in the dark.",
        "Kofi noticed that hundreds of day students already commuted to campus on their own motorbikes with empty pillion seats. Instead of building a heavy app that chews through expensive student mobile data, he launched a lightweight verified WhatsApp dispatcher matching students travelling in the same direction for a flat 5 cedis fee. In just four weeks, 180 students have logged safe, affordable campus trips.",
      ],
    },
    voiceNote: {
      title: "Kofi on organizing the student motorbike pilot at KNUST (0:29)",
      durationSeconds: 29,
      durationLabel: "0:29",
      transcriptSnippet:
        "Students shouldn't have to choose between eating dinner and paying a private cab just to get to an 8 AM mechanics midterm exam. We're keeping each other safe and keeping the fares honest.",
    },
    coverImageUrl:
      "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&q=80&w=1200",
    founderImageUrl:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=1000",
    stats: [
      { label: "Verified Riders", value: "24 Riders" },
      { label: "Trips Completed", value: "680+" },
      { label: "Average Fare", value: "₵5 (~$0.40)" },
    ],
  },
  {
    id: "scribemed",
    name: "ScribeMed",
    slug: "scribemed",
    city: "Tunis",
    country: "Tunisia",
    countryFlag: "🇹🇳",
    category: "Health & Care",
    stage: "Live & Open to Everyone",
    oneLiner: "Freeing up doctors from paperwork so they spend more time with patients.",
    everydayReality:
      "Public clinics are overcrowded, with doctors spending 40% of their consultation typing notes in French and Arabic. ScribeMed listens and drafts clean clinic records automatically.",
    founders: [
      {
        name: "Dr. Nadia Benali",
        role: "Chief Medical Officer",
        context: "MD, Former Public Hospital Clinician",
        avatarUrl:
          "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=400",
      },
      {
        name: "Youssef Gharbi",
        role: "Biomedical Systems Builder",
        context: "Polytechnique Tunis Graduate",
        avatarUrl:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400",
      },
    ],
    needsRightNow: [
      "Introducing the tool to private healthcare clinics and pediatric networks across North Africa.",
      "Bilingual medical interns in Morocco and Algeria for localized medical dialect testing.",
      "Feedback from rural clinic directors managing high daily consultation queues.",
    ],
    cheersCount: 312,
    backstory: {
      title: "Why We Started ScribeMed",
      paragraphs: [
        "During busy winter shifts at Charles Nicolle Hospital in central Tunis, Dr. Nadia found herself examining up to 60 patients across a single 8-hour period. Halfway through every appointment, she was forced to look away from distressed parents to type detailed diagnostic history across fragmented government medical software, often staying back till midnight just to complete patient files.",
        "Teaming up with biomedical engineer Youssef, they developed a privacy-first ambient listening assistant specially trained to understand Tunisian clinical speech—effortlessly parsing rapid conversational Arabic, medical French, and localized anatomical terms. Today, over 40 community doctors across Tunis save 15 minutes per patient while handing out clearer printed care instructions.",
      ],
    },
    voiceNote: {
      title: "Dr. Nadia on giving doctors 15 extra minutes per patient (0:45)",
      durationSeconds: 45,
      durationLabel: "0:45",
      transcriptSnippet:
        "When a doctor can look directly into a mother's eyes instead of staring at a computer keyboard, medicine changes. ScribeMed takes care of the bureaucratic paperwork so we can be human again.",
    },
    coverImageUrl:
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1200",
    founderImageUrl:
      "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&q=80&w=1000",
    stats: [
      { label: "Active Doctors", value: "42 Clinicians" },
      { label: "Consults Handled", value: "18,000+" },
      { label: "Time Saved / Day", value: "1.8 Hours" },
    ],
  },
  {
    id: "somokids",
    name: "SomoKids",
    slug: "somokids",
    city: "Nairobi",
    country: "Kenya",
    countryFlag: "🇰🇪",
    category: "Learning & Youth",
    stage: "Testing with Real People",
    oneLiner: "Turning WhatsApp voice notes into bite-sized math and science lessons for Eastleigh kids.",
    everydayReality:
      "Families with erratic internet cannot afford tablets or streaming classes, but nearly every mother has basic WhatsApp. SomoKids delivers interactive 3-minute daily audio quizzes over family chat.",
    founders: [
      {
        name: "Halima Aden",
        role: "Community Education Lead",
        context: "22, Eastleigh Youth Mentor",
        avatarUrl:
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400",
      },
      {
        name: "Brian Kiprop",
        role: "Audio Curriculum Creator",
        context: "Former Primary School Teacher",
        avatarUrl:
          "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=400",
      },
    ],
    needsRightNow: [
      "Connecting with passionate primary teachers to record 50 more audio science lessons in Kiswahili and Somali.",
      "Local airtime and bundle sponsorship partners for 200 low-income households in Eastleigh and Kibera.",
      "Parent volunteers to join our weekly feedback circle on homework completion rates.",
    ],
    cheersCount: 175,
    backstory: {
      title: "Why We Started SomoKids",
      paragraphs: [
        "In Nairobi's dense Eastleigh neighborhood, multiple siblings often share a single second-hand smartphone owned by their mother. When homework assignments require downloading heavy PDFs or streaming YouTube video tutorials, children get left behind simply because families can only afford daily 20-shilling micro data bundles.",
        "Halima began recording 2-minute voice notes formatted like catchy folk riddles that teach fractions and biology, sending them to a neighborhood WhatsApp group of 15 mothers. Within two months, children were responding with audio answers before dinner. SomoKids now reaches 340 active young learners without demanding high-speed internet.",
      ],
    },
    voiceNote: {
      title: "Halima explains why voice notes beat downloaded apps in Eastleigh (0:36)",
      durationSeconds: 36,
      durationLabel: "0:36",
      transcriptSnippet:
        "Every mom in our block has WhatsApp to message her family. When you bring the classroom to the tool she already trusts, learning becomes as natural as listening to a family voice note.",
    },
    coverImageUrl:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1200",
    founderImageUrl:
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=1000",
    stats: [
      { label: "Active Learners", value: "340 Kids" },
      { label: "Audio Lessons", value: "120 Modules" },
      { label: "Quiz Completion", value: "88%" },
    ],
  },
  {
    id: "solardry",
    name: "SolarDry",
    slug: "solardry",
    city: "Kigali",
    country: "Rwanda",
    countryFlag: "🇷🇼",
    category: "Campus Inventions",
    additionalCategories: ["Farming & Food"],
    stage: "Just Getting Started",
    oneLiner: "Flat-pack solar food dehydrators turning unsold mangoes into packaged snacks.",
    everydayReality:
      "Smallholder fruit vendors discard up to 30% of unsold ripe mangoes every weekend. University students Jean-Luc and Aline engineered low-cost bamboo-frame solar drying boxes to preserve surplus fruit on-site.",
    founders: [
      {
        name: "Jean-Luc Habimana",
        role: "Hardware & Solar Designer",
        context: "22, University of Rwanda",
        avatarUrl:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
      },
      {
        name: "Aline Umuhoza",
        role: "Preservation & Market Lead",
        context: "Food Science Researcher",
        avatarUrl:
          "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=400",
      },
    ],
    needsRightNow: [
      "Looking for local packaging mentors and food safety inspection guidance in Kigali.",
      "Partnership with urban market women cooperatives around Kimironko Market.",
      "Access to a food-grade manual heat-sealing machine for hygienic fruit pouches.",
    ],
    cheersCount: 126,
    backstory: {
      title: "Why We Started SolarDry",
      paragraphs: [
        "Every Sunday afternoon outside Kimironko Market in Kigali, piles of fragrant, ripe mangoes and pineapples end up in municipal compost bins simply because fruit sellers cannot keep them fresh until Tuesday morning.",
        "As part of their senior engineering thesis, Jean-Luc and Aline designed a foldable solar dehydrator made from locally sourced bamboo slats and UV-treated solar heat sheets. With zero electricity required, a fruit vendor can slice unsold fruit on Sunday evening and have packaged dried fruit chips ready for retail by Monday noon.",
      ],
    },
    voiceNote: {
      title: "Jean-Luc on reducing market fruit waste with modular solar dryers (0:32)",
      durationSeconds: 32,
      durationLabel: "0:32",
      transcriptSnippet:
        "Watching ripe mangoes rot by the roadside while children in the same neighborhood lack nutritious snacks made no sense. Bamboo and sunshine can preserve an entire weekend's surplus.",
    },
    coverImageUrl:
      "https://images.unsplash.com/photo-1595246140625-573b715d11dc?auto=format&fit=crop&q=80&w=1200",
    founderImageUrl:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1000",
    stats: [
      { label: "Market Pilot Units", value: "8 Dryers" },
      { label: "Fruit Saved / Week", value: "240 kg" },
      { label: "Vendor Profit Bump", value: "+28%" },
    ],
  },
];

