import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { LimeSpiral, WhiteTorus, LimePrism, WhiteZigzag } from "./DecorativeShapes";

export default function CtaBanner() {
  return (
    <section className="relative bg-brand-blue py-16 sm:py-24 overflow-hidden text-white text-center w-full">
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: "28px 28px",
        }}
      />

      {/* Floating 3D Shapes on sides */}
      <div className="absolute top-8 left-6 sm:left-14 pointer-events-none select-none opacity-90 animate-bounce duration-[4000ms]">
        <LimeSpiral className="w-16 h-16 sm:w-24 sm:h-24 filter drop-shadow-xl" />
      </div>
      <div className="absolute bottom-8 left-10 sm:left-24 pointer-events-none select-none opacity-85 animate-pulse duration-[3500ms]">
        <WhiteTorus className="w-12 h-12 sm:w-16 sm:h-16 filter drop-shadow-xl" />
      </div>
      <div className="absolute top-10 right-8 sm:right-16 pointer-events-none select-none opacity-90 animate-bounce duration-[5000ms]">
        <LimePrism className="w-16 h-16 sm:w-24 sm:h-24 filter drop-shadow-xl" />
      </div>
      <div className="absolute bottom-10 right-10 sm:right-24 pointer-events-none select-none opacity-80 animate-pulse duration-[4500ms]">
        <WhiteZigzag className="w-12 h-12 sm:w-16 sm:h-16 filter drop-shadow-xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-6 border border-white/20">
          <Sparkles className="w-4 h-4 text-brand-lime" />
          <span>Join 50,000+ tech learners worldwide</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight text-balance">
          30 Days Free Trial with full access to 5000+ courses
        </h2>

        <p className="mt-5 text-base sm:text-lg text-white/85 max-w-2xl mx-auto leading-relaxed">
          Sign up today and get 30 days of unlimited access to over 5,000+ courses, interactive quizzes, and career guidance.
        </p>

        {/* Value checklist */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-white/90 font-medium">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-brand-lime shrink-0" />
            <span>No Credit Card Required</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-brand-lime shrink-0" />
            <span>Cancel Anytime</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-brand-lime shrink-0" />
            <span>Full Portfolio Access</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/signup"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-lime hover:bg-brand-lime-hover text-black font-extrabold text-sm sm:text-base px-9 py-4 rounded-full shadow-lg hover:shadow-glow transition-all transform hover:-translate-y-0.5"
          >
            <span>Get Started for Free</span>
            <ArrowRight className="w-5 h-5 text-black" />
          </Link>
          <Link
            href="/courses"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold text-sm sm:text-base px-8 py-4 rounded-full border border-white/20 transition-all"
          >
            <span>Browse All Courses</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
