import React from "react";
import { TESTIMONIALS } from "@/data/testimonials";
import { Star, CheckCircle } from "lucide-react";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-slate-50 border-t border-slate-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-brand-lime/20 text-brand-dark font-bold text-xs uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-3">
            Real Student Outcomes
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Student Testimonials & Community Feedback
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Hear how ByteSpace helped over 20,000+ engineers, designers, and marketers transition into fulfilling high-paying tech careers.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                {/* Highlight */}
                <h3 className="font-extrabold text-slate-900 text-base mb-3 leading-snug">
                  &ldquo;{t.highlight}&rdquo;
                </h3>

                {/* Quote */}
                <p className="text-sm text-slate-600 leading-relaxed italic">
                  &ldquo;{t.content}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="mt-8 pt-5 border-t border-slate-100 flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-11 h-11 rounded-full object-cover border border-slate-200"
                />
                <div>
                  <div className="flex items-center gap-1.5">
                    <p className="font-bold text-slate-900 text-sm">{t.name}</p>
                    <CheckCircle className="w-3.5 h-3.5 text-blue-500 fill-blue-50" />
                  </div>
                  <p className="text-xs text-slate-500">
                    {t.role} • <span className="text-brand-blue font-semibold">{t.company}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
