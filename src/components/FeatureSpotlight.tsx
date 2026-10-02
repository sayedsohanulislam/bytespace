import React from "react";
import Link from "next/link";
import { TrendingUp, ArrowRight, ShieldCheck } from "lucide-react";

export default function FeatureSpotlight() {
  const steps = [
    {
      num: "01",
      title: "Industry-standard Curriculum",
      description: "Updated continuously with modern tools like Next.js 14, Tailwind, Figma, and Python AI.",
    },
    {
      num: "02",
      title: "Hands-on Project Building",
      description: "Build full-fledged portfolio applications that you can showcase directly in technical interviews.",
    },
    {
      num: "03",
      title: "Career & Interview Preparation",
      description: "Receive resume audits, mock algorithmic interviews, and referrals through our hiring partner network.",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Text & Value Propositions */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-50 text-brand-blue font-bold text-xs uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-4">
                Career Transformation
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Find Skills for High-Demand Modern Tech Careers
              </h2>
              <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
                We bridge the gap between classroom theory and real-world tech requirements with production-ready projects and direct mentorship.
              </p>
            </div>

            {/* Benefit Steps */}
            <div className="space-y-6">
              {steps.map((step) => (
                <div key={step.num} className="flex items-start gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors">
                  <div className="w-12 h-12 rounded-2xl bg-brand-lime/30 text-slate-900 font-extrabold text-base flex items-center justify-center shrink-0">
                    {step.num}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-slate-900">{step.title}</h3>
                    <p className="mt-1 text-sm text-slate-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA button */}
            <div className="pt-2">
              <Link
                href="/signup"
                className="inline-flex items-center gap-2 bg-brand-lime hover:bg-brand-lime-hover text-black font-bold text-sm sm:text-base px-8 py-3.5 rounded-full shadow-md hover:shadow-glow transition-all transform hover:-translate-y-0.5"
              >
                <span>Start Learning Today</span>
                <ArrowRight className="w-4 h-4 text-black" />
              </Link>
            </div>
          </div>

          {/* Right Column: Visual Mockup with Floating Badges */}
          <div className="relative flex justify-center items-center">
            {/* Soft decorative background gradient */}
            <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-brand-lime/20 blur-3xl -z-10" />

            {/* Main Image Frame */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white max-w-md w-full">
              <img
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80"
                alt="Students collaborating"
                className="w-full h-auto object-cover"
              />

              {/* Floating Overlay Badge 1: 98% Completion (Top Right) */}
              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-extrabold text-slate-900 text-sm">98% Completion</p>
                  <p className="text-[11px] text-slate-500 font-medium">Industry Leading</p>
                </div>
              </div>

              {/* Floating Overlay Badge 2: Verified Mentorship (Bottom Left) */}
              <div className="absolute bottom-4 left-4 bg-slate-900/95 text-white backdrop-blur-md px-4 py-3 rounded-2xl shadow-xl border border-slate-700 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-lime text-black flex items-center justify-center font-bold">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold text-white text-xs sm:text-sm">Verified Credentials</p>
                  <p className="text-[11px] text-slate-400">Accredited Certificates</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
