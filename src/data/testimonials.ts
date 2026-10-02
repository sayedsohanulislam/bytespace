export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  content: string;
  highlight: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    name: "Amina Rahman",
    role: "Frontend Engineer",
    company: "Vercel Partner",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    highlight: "Landed my dream frontend position in 3 months!",
    content:
      "ByteSpace completely changed how I learn programming. The practical component-driven projects and mentor code reviews helped me build a real portfolio that recruiters immediately noticed.",
  },
  {
    id: "test-2",
    name: "Marcus Sterling",
    role: "Product Designer",
    company: "Fintech Lab",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    highlight: "The Figma and design systems curriculum is gold standard.",
    content:
      "The instructors don't just teach the tools; they teach design thinking, system architecture, and how to collaborate seamlessly with frontend engineers. Worth every penny.",
  },
  {
    id: "test-3",
    name: "Liam O'Connor",
    role: "Full-Stack Developer",
    company: "CloudScale HQ",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    highlight: "Weekly live sessions solved every hurdle I faced.",
    content:
      "The active community on ByteSpace is what sets it apart. Whenever I was stuck debugging an API or styling edge cases, mentors stepped in directly to guide me through the solution.",
  },
];

export interface Mentor {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  students: number;
  courses: number;
  rating: number;
  specialty: string;
}

export const MENTORS: Mentor[] = [
  {
    id: "m-1",
    name: "Sarah Jenkins",
    role: "Principal Engineer",
    company: "Stripe",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
    students: 14500,
    courses: 6,
    rating: 4.9,
    specialty: "React, Next.js & Distributed Systems",
  },
  {
    id: "m-2",
    name: "Marcus Vance",
    role: "Design Lead",
    company: "Figma",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    students: 11200,
    courses: 4,
    rating: 4.8,
    specialty: "UI/UX, Design Systems & Motion",
  },
  {
    id: "m-3",
    name: "Dr. Alex Rivera",
    role: "Senior AI Researcher",
    company: "Google DeepMind",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    students: 18900,
    courses: 8,
    rating: 5.0,
    specialty: "Python, PyTorch & Generative AI",
  },
  {
    id: "m-4",
    name: "Elena Rostova",
    role: "Head of Growth",
    company: "Supabase",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
    students: 9800,
    courses: 3,
    rating: 4.9,
    specialty: "Growth Loops, Product-Led Growth & SEO",
  },
];
