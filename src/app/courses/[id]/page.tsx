"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { COURSES } from "@/data/courses";
import {
  Star,
  Clock,
  Play,
  Share2,
  Heart,
  Globe,
  Award,
  FileText,
  Smartphone,
  Infinity as InfinityIcon,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Check,
} from "lucide-react";

export default function CourseDetailPage({ params }: { params: { id: string } }) {
  const course = COURSES.find((c) => c.id === params.id) || COURSES[0];
  const [activeTab, setActiveTab] = useState<"overview" | "curriculum" | "reviews">("overview");
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);
  const [expandedModules, setExpandedModules] = useState<Record<number, boolean>>({ 0: true });
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const toggleModule = (index: number) => {
    setExpandedModules((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />

      {/* Top Blue Hero Section matching Figma Screen 4 */}
      <section className="bg-brand-blue pt-28 pb-16 md:pt-36 md:pb-24 text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Content Header */}
            <div className="lg:col-span-8 space-y-4">
              {/* Breadcrumb */}
              <nav className="flex items-center gap-2 text-xs text-white/70 font-medium">
                <Link href="/" className="hover:text-white">Home</Link>
                <span>/</span>
                <Link href="/courses" className="hover:text-white">Courses</Link>
                <span>/</span>
                <span className="text-brand-lime font-bold">{course.category}</span>
              </nav>

              {/* Title */}
              <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight">
                {course.title}
              </h1>

              {/* Description */}
              <p className="text-sm sm:text-base text-white/85 leading-relaxed max-w-3xl">
                {course.description}
              </p>

              {/* Badges Bar */}
              <div className="flex flex-wrap items-center gap-3 pt-2 text-xs">
                <span className="bg-brand-lime text-black font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                  {course.categoryBadge}
                </span>
                <div className="flex items-center gap-1 font-bold text-amber-300 bg-white/10 px-3 py-1 rounded-full">
                  <Star className="w-3.5 h-3.5 fill-amber-300" />
                  <span>{course.rating}</span>
                  <span className="text-white/70 font-normal">({course.reviewsCount} ratings)</span>
                </div>
                <div className="flex items-center gap-1.5 text-white/80 bg-white/10 px-3 py-1 rounded-full">
                  <Globe className="w-3.5 h-3.5" />
                  <span>{course.language}</span>
                </div>
                <div className="flex items-center gap-1.5 text-white/80 bg-white/10 px-3 py-1 rounded-full">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Updated {course.lastUpdated}</span>
                </div>
              </div>

              {/* Video Player Preview Container */}
              <div className="mt-8 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 relative aspect-video bg-black max-w-3xl">
                {isPlayingVideo ? (
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                    title="Course Preview"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <div className="relative w-full h-full group cursor-pointer" onClick={() => setIsPlayingVideo(true)}>
                    <img
                      src={course.videoPreview}
                      alt={course.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                    />
                    <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center gap-3">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-brand-lime text-black flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform">
                        <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-black translate-x-0.5" />
                      </div>
                      <span className="text-white font-bold text-xs sm:text-sm tracking-wide bg-black/60 px-4 py-1.5 rounded-full backdrop-blur-sm">
                        Watch Free Course Preview
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Right Sticky Enrollment Sidebar matching Figma */}
            <div className="lg:col-span-4 lg:sticky lg:top-24">
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200 text-slate-900 space-y-6">
                {/* Price Display */}
                <div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-4xl font-black text-slate-900">${course.price}</span>
                    <span className="text-lg text-slate-400 line-through">${course.originalPrice}</span>
                    <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-2.5 py-1 rounded-full">
                      45% OFF
                    </span>
                  </div>
                  <p className="text-xs text-rose-500 font-semibold mt-1">⏳ Special launch discount ends soon!</p>
                </div>

                {/* Primary CTA button */}
                <button
                  type="button"
                  onClick={() => setIsEnrolled(true)}
                  className={`w-full py-4 rounded-full font-extrabold text-sm sm:text-base transition-all shadow-md flex items-center justify-center gap-2 ${
                    isEnrolled
                      ? "bg-emerald-500 text-white shadow-emerald-500/30"
                      : "bg-brand-lime hover:bg-brand-lime-hover text-black hover:shadow-glow transform hover:-translate-y-0.5"
                  }`}
                >
                  {isEnrolled ? (
                    <>
                      <Check className="w-5 h-5" />
                      <span>Enrolled! Go to Course</span>
                    </>
                  ) : (
                    <>
                      <span>Enroll in Course</span>
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>

                <p className="text-center text-xs text-slate-500">30-Day Money-Back Guarantee</p>

                {/* Inclusions Checklist */}
                <div className="pt-4 border-t border-slate-100 space-y-3">
                  <h4 className="font-bold text-xs uppercase tracking-wider text-slate-900">
                    This Course Includes:
                  </h4>
                  <div className="space-y-2.5 text-xs text-slate-600">
                    <div className="flex items-center gap-2.5">
                      <Clock className="w-4 h-4 text-brand-blue" />
                      <span>{course.duration} on-demand HD video</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <FileText className="w-4 h-4 text-brand-blue" />
                      <span>38 downloadable learning resources</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <InfinityIcon className="w-4 h-4 text-brand-blue" />
                      <span>Full lifetime access with updates</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Smartphone className="w-4 h-4 text-brand-blue" />
                      <span>Access on mobile, tablet & desktop</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Award className="w-4 h-4 text-brand-blue" />
                      <span>Accredited certificate of completion</span>
                    </div>
                  </div>
                </div>

                {/* Instructor Card in Sidebar */}
                <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                  <img
                    src={course.instructor.avatar}
                    alt={course.instructor.name}
                    className="w-12 h-12 rounded-full object-cover border border-slate-200"
                  />
                  <div>
                    <p className="text-xs text-brand-blue font-bold uppercase tracking-wider">Instructor</p>
                    <p className="font-bold text-slate-900 text-sm">{course.instructor.name}</p>
                    <p className="text-xs text-slate-500">{course.instructor.role}</p>
                  </div>
                </div>

                {/* Share / Wishlist buttons */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
                  <button
                    type="button"
                    onClick={() => setIsWishlisted(!isWishlisted)}
                    className="flex items-center gap-1.5 hover:text-red-500 font-semibold"
                  >
                    <Heart className={`w-4 h-4 ${isWishlisted ? "fill-red-500 text-red-500" : ""}`} />
                    <span>{isWishlisted ? "Wishlisted" : "Add to Wishlist"}</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => alert("Course link copied to clipboard!")}
                    className="flex items-center gap-1.5 hover:text-brand-blue font-semibold"
                  >
                    <Share2 className="w-4 h-4" />
                    <span>Share Course</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Course Body with Tabs (Screens 4, 5, 6) */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 space-y-8">
            {/* Interactive Tab Headers */}
            <div className="flex items-center gap-2 p-1.5 bg-slate-200/80 rounded-full max-w-md">
              <button
                type="button"
                onClick={() => setActiveTab("overview")}
                className={`flex-1 py-2.5 rounded-full text-xs sm:text-sm font-extrabold transition-all ${
                  activeTab === "overview"
                    ? "bg-brand-lime text-black shadow-md scale-105"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Overview
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("curriculum")}
                className={`flex-1 py-2.5 rounded-full text-xs sm:text-sm font-extrabold transition-all ${
                  activeTab === "curriculum"
                    ? "bg-brand-lime text-black shadow-md scale-105"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Curriculum
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("reviews")}
                className={`flex-1 py-2.5 rounded-full text-xs sm:text-sm font-extrabold transition-all ${
                  activeTab === "reviews"
                    ? "bg-brand-lime text-black shadow-md scale-105"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Reviews
              </button>
            </div>

            {/* TAB 1: OVERVIEW (Screen 4 in Figma) */}
            {activeTab === "overview" && (
              <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-8 animate-in fade-in duration-200">
                {/* Description */}
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Course Description</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{course.description}</p>
                  <p className="text-sm text-slate-600 leading-relaxed mt-3">
                    Whether you are starting from zero or sharpening production-level skills, this curriculum is designed with direct input from senior engineers to help you build portfolio projects that impress tech recruiters.
                  </p>
                </div>

                {/* What You'll Learn Preview 4 Image Cards matching Figma Screen 4 */}
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">What You Will Learn</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {course.overviewHighlights.map((hl, i) => (
                      <div key={i} className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-brand-lime text-black flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                          ✓
                        </div>
                        <span className="text-xs sm:text-sm text-slate-800 font-medium leading-snug">{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Requirements */}
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Prerequisites & Requirements</h3>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                    {course.requirements.map((req, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Instructor Bio */}
                <div className="pt-6 border-t border-slate-200">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">About the Instructor</h3>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <img
                      src={course.instructor.avatar}
                      alt={course.instructor.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-brand-lime"
                    />
                    <div>
                      <h4 className="font-extrabold text-slate-900 text-lg">{course.instructor.name}</h4>
                      <p className="text-xs text-brand-blue font-semibold">{course.instructor.role}</p>
                      <p className="text-xs text-slate-600 mt-2 leading-relaxed max-w-xl">
                        {course.instructor.bio}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: CURRICULUM (Screen 5 in Figma) */}
            {activeTab === "curriculum" && (
              <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-6 animate-in fade-in duration-200">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Course Content</h3>
                    <p className="text-xs text-slate-500 mt-1">
                      {course.modules.length} modules • {course.lessonsCount} lessons • {course.duration} total length
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      const allOpen: Record<number, boolean> = {};
                      course.modules.forEach((_, idx) => (allOpen[idx] = true));
                      setExpandedModules(allOpen);
                    }}
                    className="text-xs font-bold text-brand-blue hover:underline"
                  >
                    Expand All Modules
                  </button>
                </div>

                {/* Modules Accordion */}
                <div className="space-y-3">
                  {course.modules.map((mod, idx) => {
                    const isExpanded = !!expandedModules[idx];
                    return (
                      <div key={idx} className="border border-slate-200 rounded-2xl overflow-hidden transition-all">
                        {/* Module Accordion Header */}
                        <button
                          type="button"
                          onClick={() => toggleModule(idx)}
                          className="w-full p-4 sm:p-5 bg-slate-50 hover:bg-slate-100/80 transition-colors flex items-center justify-between text-left"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-brand-lime text-black flex items-center justify-center font-bold text-xs shrink-0">
                              0{idx + 1}
                            </div>
                            <div>
                              <p className="font-bold text-sm sm:text-base text-slate-900">{mod.title}</p>
                              <p className="text-[11px] text-slate-500">
                                {mod.lessonsCount} lessons • {mod.duration}
                              </p>
                            </div>
                          </div>
                          {isExpanded ? (
                            <ChevronUp className="w-5 h-5 text-slate-400" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-slate-400" />
                          )}
                        </button>

                        {/* Lessons List */}
                        {isExpanded && (
                          <div className="p-4 sm:p-5 bg-white divide-y divide-slate-100">
                            {mod.lessons.map((lesson, lIdx) => (
                              <div key={lIdx} className="py-2.5 first:pt-0 last:pb-0 flex items-center justify-between text-xs sm:text-sm text-slate-700">
                                <div className="flex items-center gap-3">
                                  <Play className="w-3.5 h-3.5 text-slate-400" />
                                  <span>{lesson.title}</span>
                                </div>
                                <div className="flex items-center gap-3">
                                  {lesson.isPreview && (
                                    <span className="text-[11px] font-bold text-brand-blue bg-blue-50 px-2 py-0.5 rounded-full">
                                      Preview
                                    </span>
                                  )}
                                  <span className="text-slate-400 text-xs">{lesson.duration}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* TAB 3: REVIEWS (Screen 6 in Figma) */}
            {activeTab === "reviews" && (
              <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-8 animate-in fade-in duration-200">
                {/* Rating summary cards matching Figma Screen 6 */}
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center p-6 bg-slate-50 rounded-2xl border border-slate-200">
                  {/* Big Green/Lime Rating Box */}
                  <div className="sm:col-span-4 bg-brand-lime text-black rounded-2xl p-6 text-center shadow-md">
                    <p className="text-5xl font-black">{course.rating}</p>
                    <div className="flex items-center justify-center gap-1 my-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-black text-black" />
                      ))}
                    </div>
                    <p className="text-xs font-bold uppercase tracking-wider">Course Rating</p>
                  </div>

                  {/* Rating Progress Bars */}
                  <div className="sm:col-span-8 space-y-2">
                    {[
                      { stars: 5, pct: 86 },
                      { stars: 4, pct: 10 },
                      { stars: 3, pct: 3 },
                      { stars: 2, pct: 1 },
                      { stars: 1, pct: 0 },
                    ].map((row) => (
                      <div key={row.stars} className="flex items-center gap-3 text-xs text-slate-600">
                        <span className="w-12 font-semibold flex items-center gap-1">
                          {row.stars} <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                        </span>
                        <div className="flex-1 bg-slate-200 h-2 rounded-full overflow-hidden">
                          <div className="bg-amber-400 h-full rounded-full" style={{ width: `${row.pct}%` }} />
                        </div>
                        <span className="w-8 text-right font-medium text-slate-500">{row.pct}%</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Student Reviews List */}
                <div className="space-y-6 pt-4">
                  <h3 className="text-xl font-bold text-slate-900">Student Reviews</h3>
                  {course.reviews.map((rev) => (
                    <div key={rev.id} className="p-5 rounded-2xl border border-slate-100 bg-slate-50/50 space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <img
                            src={rev.avatar}
                            alt={rev.author}
                            className="w-10 h-10 rounded-full object-cover"
                          />
                          <div>
                            <p className="font-bold text-sm text-slate-900">{rev.author}</p>
                            <p className="text-[11px] text-slate-400">{rev.date}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-1 text-amber-400">
                          {[...Array(rev.rating)].map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                          ))}
                        </div>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{rev.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
