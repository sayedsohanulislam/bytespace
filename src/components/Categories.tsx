import React from "react";
import { FEATURES } from "@/data/features";
import {
  GraduationCap,
  Infinity,
  UserCheck,
  Award,
  Clock,
  Users,
  CheckCircle2,
} from "lucide-react";

export default function Categories() {
  const getIcon = (name: string) => {
    switch (name) {
      case "GraduationCap":
        return <GraduationCap className="w-6 h-6 text-black" />;
      case "Infinity":
        return <Infinity className="w-6 h-6 text-black" />;
      case "UserCheck":
        return <UserCheck className="w-6 h-6 text-black" />;
      case "Award":
        return <Award className="w-6 h-6 text-black" />;
      case "Clock":
        return <Clock className="w-6 h-6 text-black" />;
      case "Users":
        return <Users className="w-6 h-6 text-black" />;
      default:
        return <CheckCircle2 className="w-6 h-6 text-black" />;
    }
  };

  return (
    <section id="features" className="py-20 sm:py-24 bg-slate-50 border-t border-slate-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-brand-lime/20 text-brand-dark font-bold text-xs uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-3">
            Why Choose ByteSpace
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Find Out Why Thousands Prefer Our Learning Platform
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            We provide a modern engineering curriculum built alongside industry leaders to ensure you gain practical, job-ready skills.
          </p>
        </div>

        {/* 6 Category Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {FEATURES.map((feature, idx) => (
            <div
              key={feature.id}
              className="group bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-1 relative flex flex-col justify-between"
            >
              <div>
                {/* Lime Icon Container */}
                <div className="w-14 h-14 rounded-2xl bg-brand-lime flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                  {getIcon(feature.iconName)}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-brand-blue transition-colors">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Bottom Tag */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-500">
                <span className="text-brand-blue font-bold">{feature.stats}</span>
                <span className="text-slate-400">0{idx + 1}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
