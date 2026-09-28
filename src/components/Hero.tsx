"use client";

import React, { useState } from "react";
import { Search, Star, Users, BookOpen, ArrowRight } from "lucide-react";
import { LimeSpiral, WhiteTorus, LimePrism, WhiteZigzag } from "./DecorativeShapes";

interface HeroProps {
  onSearch?: (query: string) => void;
}

export default function Hero({ onSearch }: HeroProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchQuery);
    }
    const coursesElem = document.getElementById("courses");
    if (coursesElem) {
      coursesElem.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleTagClick = (tag: string) => {
    setSearchQuery(tag);
    if (onSearch) {
      onSearch(tag);
    }
    const coursesElem = document.getElementById("courses");
    if (coursesElem) {
      coursesElem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative bg-brand-blue pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden text-white">
      {/* Background Decorative Grid */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      {/* Floating 3D Geometric Elements */}
      <div className="absolute top-28 left-6 md:left-16 animate-bounce duration-[4000ms] pointer-events-none opacity-90 select-none">
        <LimeSpiral className="w-16 h-16 md:w-24 md:h-24 filter drop-shadow-2xl" />
      </div>

      <div className="absolute top-80 left-4 md:left-24 animate-pulse duration-[3000ms] pointer-events-none opacity-85 select-none">
        <WhiteTorus className="w-12 h-12 md:w-16 md:h-16 filter drop-shadow-xl" />
      </div>

      <div className="absolute top-24 right-8 md:right-20 animate-bounce duration-[5000ms] pointer-events-none opacity-90 select-none">
        <LimePrism className="w-16 h-16 md:w-22 md:h-22 filter drop-shadow-2xl" />
      </div>

      <div className="absolute top-72 right-6 md:right-28 animate-pulse duration-[4500ms] pointer-events-none opacity-80 select-none">
        <WhiteZigzag className="w-12 h-12 md:w-16 md:h-16 filter drop-shadow-xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Hero Header */}
        <div className="text-center max-w-3xl mx-auto">
          {/* Discount / Announcement Pill */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-6 text-white shadow-sm">
            <span className="w-2 h-2 rounded-full bg-brand-lime animate-ping" />
            <span className="text-brand-lime">Special Launch Offer:</span>
            <span>Get 30% off all career tracks this week</span>
          </div>

          {/* Headline matching Figma */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-balance">
            Get Access to <span className="text-brand-lime">5000+</span> Courses Available
          </h1>

          {/* Subtitle */}
          <p className="mt-5 text-base sm:text-lg text-white/85 max-w-2xl mx-auto leading-relaxed">
            Discover new skills, advance your career, and achieve your goals with high quality courses led by industry experts.
          </p>

          {/* 4 Key Feature Bullets under Headline matching Figma Screen 1 */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-white/90 font-medium">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-lime" />
              <span>Life Time Access</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-lime" />
              <span>Online Tutoring</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-lime" />
              <span>100% Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-lime" />
              <span>250+ Mentors</span>
            </div>
          </div>

          {/* Search Bar Container */}
          <form
            onSubmit={handleSearchSubmit}
            className="mt-8 max-w-2xl mx-auto relative flex items-center bg-white rounded-full p-2 shadow-2xl transition-all focus-within:ring-4 focus-within:ring-brand-lime/50"
          >
            <div className="pl-4 pr-2 text-slate-400 flex items-center pointer-events-none">
              <Search className="w-5 h-5 text-slate-500" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="What do you want to learn today? (e.g. Next.js, Figma, Python...)"
              className="w-full text-sm sm:text-base text-slate-900 placeholder-slate-400 bg-transparent border-0 focus:outline-none focus:ring-0 py-2.5"
            />
            <button
              type="submit"
              className="bg-brand-lime hover:bg-brand-lime-hover text-black font-bold text-sm sm:text-base px-6 sm:px-8 py-3 rounded-full flex items-center gap-2 transition-all shadow-md shrink-0 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Search</span>
              <ArrowRight className="w-4 h-4 text-black hidden sm:inline-block" />
            </button>
          </form>

          {/* Popular Search Tags */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xs text-white/80">
            <span className="font-medium text-white/60">Trending:</span>
            {["Next.js", "UI/UX Figma", "Python & AI", "Growth Marketing", "React Native"].map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => handleTagClick(tag)}
                className="bg-white/10 hover:bg-white/20 hover:text-brand-lime px-3 py-1 rounded-full border border-white/10 transition-colors"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Hero Visual Showcase Centerpiece */}
        <div className="mt-12 sm:mt-16 max-w-4xl mx-auto relative flex justify-center items-center">
          {/* Center Lime Circle Graphic */}
          <div className="relative w-72 h-72 sm:w-96 sm:h-96 md:w-[440px] md:h-[440px] rounded-full bg-brand-lime flex items-center justify-center shadow-2xl">
            {/* Inner Ring Glow */}
            <div className="absolute inset-3 rounded-full border-4 border-dashed border-black/10 animate-spin duration-[60000ms]" />

            {/* Student Image */}
            <div className="relative w-64 h-64 sm:w-88 sm:h-88 md:w-[400px] md:h-[400px] rounded-full overflow-hidden border-4 border-white shadow-inner">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
                alt="Student learning on ByteSpace"
                className="w-full h-full object-cover object-top scale-105 hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Floating Metric Badge 1: 4.9 Rating (Top Left) */}
            <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-12 bg-white text-brand-dark px-4 py-3 rounded-2xl shadow-xl flex items-center gap-3 border border-slate-100 transform -rotate-3 hover:rotate-0 transition-transform select-none">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-500 flex items-center justify-center">
                <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
              </div>
              <div className="text-left">
                <div className="flex items-center gap-1">
                  <span className="font-extrabold text-base text-slate-900">4.9</span>
                  <span className="text-xs text-slate-400">/ 5.0</span>
                </div>
                <p className="text-xs text-slate-500 font-medium">12k+ Student Reviews</p>
              </div>
            </div>

            {/* Floating Metric Badge 2: 5000+ Courses (Mid Right) */}
            <div className="absolute top-1/3 -right-6 sm:-right-16 bg-white text-brand-dark px-4 py-3 rounded-2xl shadow-xl flex items-center gap-3 border border-slate-100 transform rotate-3 hover:rotate-0 transition-transform select-none">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-brand-blue flex items-center justify-center">
                <BookOpen className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="font-extrabold text-base text-slate-900">5,000+</p>
                <p className="text-xs text-slate-500 font-medium">Available Courses</p>
              </div>
            </div>

            {/* Floating Metric Badge 3: 20k+ Students (Bottom Left) */}
            <div className="absolute -bottom-6 -left-2 sm:-bottom-8 sm:-left-8 bg-brand-dark text-white px-5 py-3.5 rounded-2xl shadow-2xl flex items-center gap-3 border border-slate-700 transform rotate-1 hover:rotate-0 transition-transform select-none">
              <div className="w-10 h-10 rounded-xl bg-brand-lime text-black flex items-center justify-center font-bold">
                <Users className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="font-extrabold text-sm sm:text-base text-white">Over 20k+ Students</p>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs text-slate-300 font-medium">Active Community</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
