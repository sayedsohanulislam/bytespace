export interface Course {
  id: string;
  title: string;
  category: "Web Development" | "UI/UX Design" | "Digital Marketing" | "Data Science" | "Mobile Dev" | "Graphic Design";
  categoryBadge: string;
  rating: number;
  reviewsCount: number;
  lessonsCount: number;
  duration: string;
  price: number;
  originalPrice: number;
  level: "Beginner" | "Intermediate" | "Advanced" | "All Levels";
  enrolled: number;
  image: string;
  description: string;
  instructor: {
    name: string;
    role: string;
    avatar: string;
  };
  features: string[];
}

export const COURSES: Course[] = [
  {
    id: "web-dev-bootcamp",
    title: "Full-Stack Web Development Bootcamp 2026",
    category: "Web Development",
    categoryBadge: "Best Seller",
    rating: 4.9,
    reviewsCount: 1420,
    lessonsCount: 38,
    duration: "18h 45m",
    price: 49.99,
    originalPrice: 89.99,
    level: "All Levels",
    enrolled: 8450,
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
    description: "Master modern full-stack development with Next.js 14, React, TypeScript, Node.js, and PostgreSQL through hands-on portfolio projects.",
    instructor: {
      name: "Sarah Jenkins",
      role: "Senior Staff Engineer @ Stripe",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
    },
    features: ["Complete Next.js 14 App Router", "Full Auth & Database Setup", "Deploy to Vercel & AWS", "Certificate of Completion"],
  },
  {
    id: "figma-uiux-masterclass",
    title: "UI/UX Design Masterclass with Figma & Design Systems",
    category: "UI/UX Design",
    categoryBadge: "Top Rated",
    rating: 4.8,
    reviewsCount: 980,
    lessonsCount: 32,
    duration: "14h 20m",
    price: 39.99,
    originalPrice: 79.99,
    level: "Intermediate",
    enrolled: 6200,
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=800&q=80",
    description: "Learn to design production-grade mobile and web user interfaces, build scalable design systems, and master Figma auto-layout and variables.",
    instructor: {
      name: "Marcus Vance",
      role: "Lead Product Designer @ Figma",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    },
    features: ["Component Libraries & Auto Layout", "Interactive Prototyping", "Design Token Architecture", "Figma to Code Workflow"],
  },
  {
    id: "python-ml-data-science",
    title: "Python, Machine Learning & AI Engineering",
    category: "Data Science",
    categoryBadge: "Trending",
    rating: 4.9,
    reviewsCount: 2150,
    lessonsCount: 46,
    duration: "24h 10m",
    price: 59.99,
    originalPrice: 99.99,
    level: "Intermediate",
    enrolled: 11200,
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=800&q=80",
    description: "Build production AI applications from scratch using Python, Pandas, Scikit-Learn, PyTorch, and Large Language Model fine-tuning.",
    instructor: {
      name: "Dr. Alex Rivera",
      role: "AI Research Scientist @ DeepMind",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    },
    features: ["Real-world AI datasets", "Neural Networks & Transformers", "RAG & LLM Application APIs", "Kaggle Benchmark Projects"],
  },
  {
    id: "growth-marketing-strategy",
    title: "Digital Marketing Strategy & High-Growth Hacking",
    category: "Digital Marketing",
    categoryBadge: "Popular",
    rating: 4.7,
    reviewsCount: 840,
    lessonsCount: 26,
    duration: "10h 30m",
    price: 34.99,
    originalPrice: 69.99,
    level: "Beginner",
    enrolled: 4300,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    description: "Accelerate user acquisition, optimize performance ads, master SEO mechanics, and build viral referral loops for tech startups.",
    instructor: {
      name: "Elena Rostova",
      role: "VP of Growth @ Supabase",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    },
    features: ["Funnel Optimization", "Omnichannel Ad Campaigns", "Data-Driven Attribution", "B2B & B2C Playbooks"],
  },
  {
    id: "graphic-design-branding",
    title: "Modern Graphic Design, Typography & Visual Identity",
    category: "Graphic Design",
    categoryBadge: "Featured",
    rating: 4.8,
    reviewsCount: 1120,
    lessonsCount: 28,
    duration: "12h 15m",
    price: 44.99,
    originalPrice: 74.99,
    level: "Beginner",
    enrolled: 5600,
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=80",
    description: "Create memorable brand identities, master typography hierarchies, color theory, editorial layouts, and vector illustration techniques.",
    instructor: {
      name: "David Kim",
      role: "Creative Director @ Studio Mono",
      avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=200&q=80",
    },
    features: ["Vector Logo Construction", "Brand Guidelines Creation", "Print & Digital Formats", "Client Presentation Kit"],
  },
  {
    id: "react-native-mobile-apps",
    title: "Cross-Platform Mobile Dev with React Native & Expo",
    category: "Mobile Dev",
    categoryBadge: "Hot",
    rating: 5.0,
    reviewsCount: 1780,
    lessonsCount: 36,
    duration: "16h 50m",
    price: 54.99,
    originalPrice: 94.99,
    level: "Advanced",
    enrolled: 7100,
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
    description: "Build and deploy production-ready iOS and Android apps using React Native, Expo Router, NativeWind, and Supabase backend.",
    instructor: {
      name: "Sophia Martinez",
      role: "Principal Mobile Architect @ Airbnb",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
    },
    features: ["iOS & Android App Store Ready", "Push Notifications & Deep Linking", "Offline-first Architecture", "Smooth Reanimated 3 Gestures"],
  },
];

export const CATEGORIES = [
  "All Courses",
  "Web Development",
  "UI/UX Design",
  "Data Science",
  "Digital Marketing",
  "Graphic Design",
  "Mobile Dev",
];
