export type Stage = "idea" | "mvp" | "launched" | "Idea" | "MVP" | "Launched";

export type Category = "AI" | "Fintech" | "Health" | "Agriculture" | "Climate" | "EdTech" | "E-Commerce";

export type Builder = {
  id: string;
  userId: string;
  username: string;
  displayName: string;
  bio: string;
  country: string;
  city?: string;
  skills: string[];
  avatarUrl: string;
  startupIds: string[];
  featured: boolean;
  role: string;
  startupName: string;
  stage: Stage;
  createdAt: string;
};

export type Startup = {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  problem: string;
  solution: string;
  category: Category;
  stage: Stage;
  country: string;
  city?: string;
  founderIds: string[];
  founders: {
    name: string;
    role: string;
    avatarUrl: string;
  }[];
  logoUrl?: string;
  coverImageUrl?: string;
  featured: boolean;
  metrics?: {
    mrr?: string;
    growth?: string;
    users?: string;
    [key: string]: string | undefined;
  };
  createdAt: string;
  updatedAt: string;
};

export type StoryCategory = "founder" | "startup" | "ecosystem" | "insight";

export type Story = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImageUrl: string;
  author: {
    name: string;
    avatarUrl: string;
    role: string;
  };
  category: StoryCategory;
  readingTime: number;
  featured: boolean;
  published: boolean;
  createdAt: string;
  updatedAt: string;
};

export type FounderDrop = {
  id: string;
  title: string;
  quote: string;
  founderName: string;
  founderRole: string;
  startupName: string;
  avatarUrl: string;
  videoThumbnailUrl: string;
  duration: string;
  slug: string;
  createdAt: string;
};

export type JourneyEntry = {
  id: string;
  builderId: string;
  title: string;
  description: string;
  date: string;
  mediaUrl?: string;
  type: "milestone" | "update" | "launch";
  createdAt: string;
};

export type EcosystemStat = {
  label: string;
  value: string;
  change?: string;
};
