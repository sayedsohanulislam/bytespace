import React from "react";
import Link from "next/link";
import { Star, ArrowRight } from "lucide-react";

export default function LiveMentorship() {
  return (
    <section id="mentors" className="py-20 sm:py-28 bg-slate-50 relative overflow-hidden border-t border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Mentor Visual with Live Badge */}
          <div className="relative flex justify-center order-2 lg:order-1">
            {/* Soft decorative glow */}
            <div className="absolute w-80 h-80 rounded-full bg-blue-200/50 blur-3xl -z-10" />

            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white max-w-md w-full">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
                alt="Live Mentor Session"
                className="w-full h-auto object-cover"
              />

              {/* Floating Live Badge (Top Left) */}
              <div className="absolute top-4 left-4 bg-red-600 text-white px-3.5 py-1.5 rounded-full shadow-lg flex items-center gap-2 text-xs font-bold uppercase tracking-wider animate-pulse">
                <span className="w-2 h-2 rounded-full bg-white" />
                <span>Live Q&A Session</span>
              </div>

              {/* Floating Mentor Info Card (Bottom) */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-lime flex items-center justify-center font-bold text-black text-sm">
                    SJ
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 text-sm">Sarah Jenkins</p>
                    <p className="text-xs text-slate-500">Next.js Cloud Architecture</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="inline-flex items-center gap-1 text-xs font-bold text-amber-500">
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <span>4.9</span>
                  </div>
                  <p className="text-[11px] text-emerald-600 font-semibold">120+ Joined</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Mentor Copy & Stats */}
          <div className="space-y-8 order-1 lg:order-2">
            <div>
              <div className="inline-flex items-center gap-2 bg-brand-lime/20 text-brand-dark font-bold text-xs uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-4">
                Interactive Learning
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Connect & Learn Directly from Industry Experts
              </h2>
              <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
                Get personalized guidance, participate in interactive weekly live sessions, and receive comprehensive code reviews from senior engineers at Stripe, Figma, and Google.
              </p>
            </div>

            {/* 3 Key Stats matching design */}
            <div className="grid grid-cols-3 gap-4 pt-2">
              <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 text-center shadow-sm">
                <p className="text-2xl sm:text-3xl font-extrabold text-brand-blue">250+</p>
                <p className="text-xs font-medium text-slate-500 mt-1">Verified Mentors</p>
              </div>
              <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 text-center shadow-sm">
                <p className="text-2xl sm:text-3xl font-extrabold text-slate-900">99%</p>
                <p className="text-xs font-medium text-slate-500 mt-1">Satisfaction Rate</p>
              </div>
              <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 text-center shadow-sm">
                <p className="text-2xl sm:text-3xl font-extrabold text-brand-blue">50+</p>
                <p className="text-xs font-medium text-slate-500 mt-1">Countries</p>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/signup"
                className="inline-flex items-center gap-2 bg-brand-lime hover:bg-brand-lime-hover text-black font-bold text-sm sm:text-base px-8 py-3.5 rounded-full shadow-md hover:shadow-glow transition-all transform hover:-translate-y-0.5"
              >
                <span>Book a Live Mentor</span>
                <ArrowRight className="w-4 h-4 text-black" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
