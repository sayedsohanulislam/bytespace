export interface Lesson {
  title: string;
  duration: string;
  isPreview?: boolean;
}

export interface CourseModule {
  title: string;
  lessonsCount: number;
  duration: string;
  lessons: Lesson[];
}

export interface ReviewItem {
  id: string;
  author: string;
  avatar: string;
  rating: number;
  date: string;
  comment: string;
}

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
  language: string;
  lastUpdated: string;
  enrolled: number;
  image: string;
  videoPreview: string;
  description: string;
  overviewHighlights: string[];
  requirements: string[];
  modules: CourseModule[];
  reviews: ReviewItem[];
  instructor: {
    name: string;
    role: string;
    avatar: string;
    bio: string;
    rating: number;
    students: number;
    coursesCount: number;
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
    language: "English",
    lastUpdated: "September 2026",
    enrolled: 8450,
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
    videoPreview: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    description: "Master modern full-stack web development with Next.js 14, React, TypeScript, Node.js, and PostgreSQL through hands-on portfolio projects built from scratch.",
    overviewHighlights: [
      "Build production-ready Next.js 14 applications with App Router & Server Actions",
      "Design relational databases with PostgreSQL, Prisma ORM, and Supabase",
      "Implement secure authentication with OAuth, sessions, and JWT tokens",
      "Deploy scalable applications to Vercel and AWS cloud infrastructure",
    ],
    requirements: [
      "Basic understanding of HTML, CSS, and fundamental JavaScript",
      "A computer (Mac, Windows, or Linux) with internet connection",
      "No prior backend or database experience required",
    ],
    modules: [
      {
        title: "Module 1: Modern JavaScript & TypeScript Foundations",
        lessonsCount: 8,
        duration: "3h 15m",
        lessons: [
          { title: "Course Introduction & Development Environment Setup", duration: "12:40", isPreview: true },
          { title: "ES6+ Modern Features & Async JavaScript", duration: "24:15", isPreview: true },
          { title: "TypeScript Core Types, Interfaces & Generics", duration: "32:10" },
          { title: "Building your first TypeScript CLI utility", duration: "28:30" },
        ],
      },
      {
        title: "Module 2: React 19 & Next.js 14 Architecture",
        lessonsCount: 12,
        duration: "5h 40m",
        lessons: [
          { title: "App Router Fundamentals: Layouts, Pages & Routing", duration: "18:20", isPreview: true },
          { title: "Server Components vs Client Components in Practice", duration: "25:45" },
          { title: "Data Fetching, Caching & Revalidation Mechanics", duration: "34:10" },
          { title: "Server Actions and Form State Handling", duration: "30:25" },
        ],
      },
      {
        title: "Module 3: Database Design, Auth & Full-Stack Deployment",
        lessonsCount: 18,
        duration: "9h 50m",
        lessons: [
          { title: "PostgreSQL Schema Architecture & Prisma ORM", duration: "29:10" },
          { title: "Complete Auth Flow with NextAuth & OAuth Providers", duration: "38:40" },
          { title: "Building a Production E-Commerce Platform", duration: "55:20" },
          { title: "Continuous Deployment with GitHub Actions & Vercel", duration: "22:15" },
        ],
      },
    ],
    reviews: [
      {
        id: "r1",
        author: "Alex Morgan",
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&q=80",
        rating: 5,
        date: "2 weeks ago",
        comment: "This is easily the highest quality full-stack course on the web. Sarah explains complex Next.js patterns with clarity and the projects are directly portfolio-ready!",
      },
      {
        id: "r2",
        author: "Devon Vance",
        avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=120&q=80",
        rating: 5,
        date: "1 month ago",
        comment: "Helped me transition from junior developer to mid-level. The server actions and database architectural patterns are gold standard.",
      },
    ],
    instructor: {
      name: "Sarah Jenkins",
      role: "Senior Staff Engineer @ Stripe",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
      bio: "Sarah is a Senior Staff Engineer with over 10 years of experience building scalable distributed web applications at Stripe and Shopify. She has taught over 45,000 engineers globally.",
      rating: 4.9,
      students: 45200,
      coursesCount: 6,
    },
    features: ["18.5 hours on-demand video", "38 downloadable resources", "Full lifetime access", "Access on mobile and desktop", "Certificate of completion"],
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
    language: "English",
    lastUpdated: "August 2026",
    enrolled: 6200,
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=800&q=80",
    videoPreview: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1200&q=80",
    description: "Learn to design production-grade mobile and web user interfaces, build scalable design systems, and master Figma auto-layout and variables.",
    overviewHighlights: [
      "Master Figma Auto-Layout 5.0, component variants & component properties",
      "Build a scalable enterprise Design System with token variables",
      "Create high-fidelity interactive prototypes with micro-interactions",
      "Handoff specs seamlessly to frontend engineers using Dev Mode",
    ],
    requirements: [
      "Free Figma account",
      "Passion for user experience and visual design",
    ],
    modules: [
      {
        title: "Module 1: Figma Fundamentals & Wireframing",
        lessonsCount: 10,
        duration: "4h 00m",
        lessons: [
          { title: "Introduction to Figma Workspace & Shortcuts", duration: "15:20", isPreview: true },
          { title: "Wireframing UX Flows & Information Architecture", duration: "25:40", isPreview: true },
          { title: "Typography Hierarchies & Layout Grids", duration: "32:10" },
        ],
      },
      {
        title: "Module 2: Design Systems & Component Architecture",
        lessonsCount: 12,
        duration: "5h 30m",
        lessons: [
          { title: "Building Atomic Design Tokens in Figma", duration: "30:15" },
          { title: "Auto-Layout Mastery & Responsive Constraints", duration: "42:00" },
        ],
      },
    ],
    reviews: [
      {
        id: "r3",
        author: "Emily Taylor",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80",
        rating: 5,
        date: "3 weeks ago",
        comment: "Marcus Vance is phenomenal. The design system module alone is worth ten times the price!",
      },
    ],
    instructor: {
      name: "Marcus Vance",
      role: "Lead Product Designer @ Figma",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      bio: "Marcus has spent 8 years designing design tools and enterprise SaaS applications at Figma and InVision.",
      rating: 4.8,
      students: 31000,
      coursesCount: 4,
    },
    features: ["14 hours on-demand video", "24 design templates", "Full lifetime access", "Certificate of completion"],
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
    language: "English",
    lastUpdated: "September 2026",
    enrolled: 11200,
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=800&q=80",
    videoPreview: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=1200&q=80",
    description: "Build production AI applications from scratch using Python, Pandas, Scikit-Learn, PyTorch, and Large Language Model fine-tuning.",
    overviewHighlights: [
      "Master Python data analysis with Pandas, NumPy, and Matplotlib",
      "Train supervised and unsupervised machine learning algorithms",
      "Deep Learning with PyTorch: CNNs, RNNs, and Transformers",
      "Deploy AI applications using FastAPI and Hugging Face pipelines",
    ],
    requirements: [
      "Basic programming logic in any language",
      "No advanced calculus required; all math explained intuitively",
    ],
    modules: [
      {
        title: "Module 1: Python Data Science Tooling",
        lessonsCount: 14,
        duration: "7h 00m",
        lessons: [
          { title: "Python Environment & Jupyter Notebook Setup", duration: "18:10", isPreview: true },
          { title: "Data Wrangling with Pandas & NumPy", duration: "45:30" },
        ],
      },
    ],
    reviews: [
      {
        id: "r4",
        author: "Rahul Sharma",
        avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=120&q=80",
        rating: 5,
        date: "2 weeks ago",
        comment: "Dr. Alex Rivera breaks down neural networks and transformers in a way that just clicks.",
      },
    ],
    instructor: {
      name: "Dr. Alex Rivera",
      role: "AI Research Scientist @ DeepMind",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
      bio: "Dr. Alex Rivera holds a PhD in Computer Science from MIT and conducts research on generative models at Google DeepMind.",
      rating: 5.0,
      students: 58000,
      coursesCount: 8,
    },
    features: ["24 hours on-demand video", "50+ Jupyter Notebooks", "Full lifetime access", "Certificate of completion"],
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
    language: "English",
    lastUpdated: "July 2026",
    enrolled: 4300,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    videoPreview: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    description: "Accelerate user acquisition, optimize performance ads, master SEO mechanics, and build viral referral loops for tech startups.",
    overviewHighlights: [
      "Master Paid Ads across Google, Meta, and LinkedIn",
      "Build viral referral loops and product-led growth engines",
      "Technical SEO audit and modern programmatic search growth",
    ],
    requirements: ["No marketing prerequisites required"],
    modules: [],
    reviews: [],
    instructor: {
      name: "Elena Rostova",
      role: "VP of Growth @ Supabase",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      bio: "Elena led growth teams taking multiple SaaS companies from seed to \$50M ARR.",
      rating: 4.9,
      students: 22000,
      coursesCount: 3,
    },
    features: ["10.5 hours on-demand video", "Growth spreadsheet templates", "Certificate of completion"],
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
    language: "English",
    lastUpdated: "September 2026",
    enrolled: 5600,
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=80",
    videoPreview: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=1200&q=80",
    description: "Create memorable brand identities, master typography hierarchies, color theory, editorial layouts, and vector illustration techniques.",
    overviewHighlights: [
      "Typography rules, kerning, scale & modern pairings",
      "Brand identity systems from logos to collateral",
      "Exporting print and digital vector assets",
    ],
    requirements: ["Adobe Illustrator or Figma installed"],
    modules: [],
    reviews: [],
    instructor: {
      name: "David Kim",
      role: "Creative Director @ Studio Mono",
      avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=200&q=80",
      bio: "David is an award-winning brand designer who has created visual identities for Spotify and Nike.",
      rating: 4.8,
      students: 19400,
      coursesCount: 4,
    },
    features: ["12 hours video", "Brand guideline templates", "Certificate of completion"],
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
    language: "English",
    lastUpdated: "September 2026",
    enrolled: 7100,
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
    videoPreview: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80",
    description: "Build and deploy production-ready iOS and Android apps using React Native, Expo Router, NativeWind, and Supabase backend.",
    overviewHighlights: [
      "Master Expo Router file-based navigation for iOS and Android",
      "Native animations using Reanimated 3 and Gesture Handler",
      "Push notifications, camera, geolocation, and device sensors",
      "App Store and Google Play publishing guide",
    ],
    requirements: ["Knowledge of React and JavaScript"],
    modules: [],
    reviews: [],
    instructor: {
      name: "Sophia Martinez",
      role: "Principal Mobile Architect @ Airbnb",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
      bio: "Sophia specializes in high-performance native mobile apps used by millions of daily active users.",
      rating: 5.0,
      students: 28000,
      coursesCount: 5,
    },
    features: ["16.8 hours video", "Full GitHub project repositories", "Certificate of completion"],
  },
  {
    id: "cloud-devops-kubernetes",
    title: "Cloud Architecture, Docker & Kubernetes for Developers",
    category: "Web Development",
    categoryBadge: "Popular",
    rating: 4.8,
    reviewsCount: 890,
    lessonsCount: 30,
    duration: "15h 10m",
    price: 49.99,
    originalPrice: 89.99,
    level: "Intermediate",
    language: "English",
    lastUpdated: "August 2026",
    enrolled: 5100,
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
    videoPreview: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    description: "Deploy robust cloud infrastructure using Docker containerization, Kubernetes orchestration, CI/CD pipelines, and AWS Terraform.",
    overviewHighlights: [
      "Docker containers, multi-stage builds, and microservices",
      "Kubernetes pods, deployments, services, and ingress controllers",
      "Automated CI/CD pipelines with GitHub Actions",
    ],
    requirements: ["Basic Linux command line knowledge"],
    modules: [],
    reviews: [],
    instructor: {
      name: "Sarah Jenkins",
      role: "Senior Staff Engineer @ Stripe",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
      bio: "Senior Staff Engineer specializing in distributed cloud infrastructure.",
      rating: 4.9,
      students: 45200,
      coursesCount: 6,
    },
    features: ["15 hours video", "Terraform and Kubernetes scripts", "Certificate of completion"],
  },
  {
    id: "product-management-tech",
    title: "Technical Product Management & Agile Scrum Delivery",
    category: "Digital Marketing",
    categoryBadge: "Career Track",
    rating: 4.7,
    reviewsCount: 760,
    lessonsCount: 22,
    duration: "11h 40m",
    price: 39.99,
    originalPrice: 79.99,
    level: "Beginner",
    language: "English",
    lastUpdated: "July 2026",
    enrolled: 3800,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
    videoPreview: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
    description: "Learn how to define PRDs, prioritize feature backlogs, run sprint retrospectives, and lead cross-functional engineering teams.",
    overviewHighlights: [
      "Product Requirements Documents (PRDs) & user story mapping",
      "Agile, Scrum, and Kanban methodologies in high-growth companies",
      "Product analytics with Amplitude and Mixpanel",
    ],
    requirements: ["No technical prerequisites required"],
    modules: [],
    reviews: [],
    instructor: {
      name: "Elena Rostova",
      role: "VP of Growth @ Supabase",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      bio: "Product and growth leader with 12+ years experience.",
      rating: 4.9,
      students: 22000,
      coursesCount: 3,
    },
    features: ["11.5 hours video", "PRD Templates", "Certificate of completion"],
  },
  {
    id: "design-tokens-systems",
    title: "Advanced Design Tokens & Component Libraries",
    category: "UI/UX Design",
    categoryBadge: "Advanced",
    rating: 4.9,
    reviewsCount: 640,
    lessonsCount: 20,
    duration: "9h 30m",
    price: 34.99,
    originalPrice: 69.99,
    level: "Advanced",
    language: "English",
    lastUpdated: "September 2026",
    enrolled: 2900,
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
    videoPreview: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
    description: "Bridge the gap between design and engineering using Style Dictionary, Figma Variables, and Tailwind CSS configuration.",
    overviewHighlights: [
      "Token taxonomy (Global, Alias, Component tokens)",
      "Syncing Figma tokens to GitHub via automated pipelines",
      "Maintaining accessible color contrast ratios at scale",
    ],
    requirements: ["Figma and basic CSS understanding"],
    modules: [],
    reviews: [],
    instructor: {
      name: "Marcus Vance",
      role: "Lead Product Designer @ Figma",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      bio: "Figma design systems lead.",
      rating: 4.8,
      students: 31000,
      coursesCount: 4,
    },
    features: ["9.5 hours video", "Figma Token Starter Kit", "Certificate of completion"],
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
