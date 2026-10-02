export interface FeatureCategory {
  id: string;
  title: string;
  description: string;
  iconName: string;
  stats: string;
}

export const FEATURES: FeatureCategory[] = [
  {
    id: "f-1",
    title: "Expert Mentors",
    description: "Learn directly from senior engineers and designers working at top global tech companies.",
    iconName: "GraduationCap",
    stats: "250+ Mentors",
  },
  {
    id: "f-2",
    title: "Lifetime Access",
    description: "Enroll once and get unlimited access to all lectures, project repositories, and future updates.",
    iconName: "Infinity",
    stats: "Always Free Updates",
  },
  {
    id: "f-3",
    title: "1-on-1 Mentorship",
    description: "Book personal guidance calls, get your code thoroughly reviewed, and resolve tricky bugs.",
    iconName: "UserCheck",
    stats: "Live Q&A Weekly",
  },
  {
    id: "f-4",
    title: "Accredited Certificates",
    description: "Receive industry-verified digital certificates to share on LinkedIn, GitHub, and your resume.",
    iconName: "Award",
    stats: "Verified Badges",
  },
  {
    id: "f-5",
    title: "Flexible Learning",
    description: "Study at your own pace anytime, anywhere with seamless multi-device progress syncing.",
    iconName: "Clock",
    stats: "Self-Paced Paths",
  },
  {
    id: "f-6",
    title: "Active Tech Community",
    description: "Join our private student Discord with over 30,000 peers building and collaborating daily.",
    iconName: "Users",
    stats: "30k+ Members",
  },
];
