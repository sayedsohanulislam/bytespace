"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { COURSES, CATEGORIES } from "@/data/courses";
import { Search, Star, Clock, BookOpen, Heart, ArrowRight, SlidersHorizontal, ChevronLeft, ChevronRight } from "lucide-react";
import { LimeSpiral, LimePrism } from "@/components/DecorativeShapes";

export default function CoursesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Courses");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("popular");
  const [wishlist, setWishlist] = useState<Record<string, boolean>>({});

  const toggleWishlist = (courseId: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setWishlist((prev) => ({
      ...prev,
      [courseId]: !prev[courseId],
    }));
  };

  // Filter courses
  let filtered = COURSES.filter((course) => {
    const matchesCat =
      selectedCategory === "All Courses" || course.category === selectedCategory;
    const matchesSearch =
      !searchQuery ||
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  // Sort courses
  if (sortBy === "rating") {
    filtered = [...filtered].sort((a, b) => b.rating - a.rating);
  } else if (sortBy === "price-low") {
    filtered = [...filtered].sort((a, b) => a.price - b.price);
  } else if (sortBy === "price-high") {
    filtered = [...filtered].sort((a, b) => b.price - a.price);
  } else {
    filtered = [...filtered].sort((a, b) => b.enrolled - a.enrolled);
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      {/* Header Blue Banner matching Figma Screen 3 */}
      <section className="bg-brand-blue pt-28 pb-16 md:pt-36 md:pb-20 text-white relative overflow-hidden">
        {/* Subtle grid background */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: "28px 28px",
          }}
        />

        {/* Floating 3D Shapes */}
        <div className="absolute top-16 left-8 pointer-events-none select-none opacity-80 animate-bounce duration-[4000ms]">
          <LimeSpiral className="w-16 h-16 filter drop-shadow-xl" />
        </div>
        <div className="absolute top-20 right-10 pointer-events-none select-none opacity-80 animate-bounce duration-[5000ms]">
          <LimePrism className="w-16 h-16 filter drop-shadow-xl" />
        </div>

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-semibold mb-4 border border-white/20">
            <span className="text-brand-lime">Interactive Catalog</span>
            <span>• 5,000+ Online Tracks</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            Courses Available
          </h1>
          <p className="mt-3 text-sm sm:text-base text-white/85 max-w-xl mx-auto">
            Browse our full catalog of cutting-edge tech courses. Learn from industry leaders and gain job-ready engineering and design skills.
          </p>

          {/* Search bar inside header */}
          <div className="mt-8 max-w-2xl mx-auto relative flex items-center bg-white rounded-full p-2 shadow-2xl">
            <div className="pl-4 pr-2 text-slate-400 flex items-center pointer-events-none">
              <Search className="w-5 h-5 text-slate-500" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search your favorite course by name or technology..."
              className="w-full text-sm sm:text-base text-slate-900 placeholder-slate-400 bg-transparent border-0 focus:outline-none focus:ring-0 py-2.5"
            />
            <button
              type="button"
              className="bg-brand-lime hover:bg-brand-lime-hover text-black font-extrabold text-sm px-6 py-2.5 rounded-full shrink-0 shadow-sm transition-all"
            >
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Main Catalog Body */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1">
        {/* Top Controls: Category Pills & Sorting Bar */}
        <div className="space-y-6 mb-10">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                    isActive
                      ? "bg-brand-lime text-black shadow-md ring-2 ring-brand-lime/80 scale-105"
                      : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Results Count & Sort Dropdown */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-slate-200 text-sm text-slate-600">
            <p>
              Showing <span className="font-bold text-slate-900">{filtered.length}</span> courses
              {selectedCategory !== "All Courses" && (
                <span> in <span className="font-semibold text-brand-blue">{selectedCategory}</span></span>
              )}
            </p>

            <div className="flex items-center gap-2 self-end sm:self-auto">
              <SlidersHorizontal className="w-4 h-4 text-slate-400" />
              <span className="text-xs font-semibold text-slate-500">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-slate-50 border border-slate-200 rounded-xl px-3 py-1.5 text-xs font-semibold text-slate-800 focus:outline-none focus:border-brand-blue"
              >
                <option value="popular">Most Popular</option>
                <option value="rating">Highest Rated</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>

        {/* Courses Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-20 bg-slate-50 rounded-3xl border border-slate-200">
            <BookOpen className="w-12 h-12 text-slate-400 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-800">No courses match your search</h3>
            <p className="text-sm text-slate-500 mt-1">Try resetting your keywords or filter categories.</p>
            <button
              onClick={() => {
                setSelectedCategory("All Courses");
                setSearchQuery("");
              }}
              className="mt-4 bg-brand-lime text-black font-bold text-xs px-6 py-2.5 rounded-full"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((course) => {
              const isWishlisted = !!wishlist[course.id];

              return (
                <Link
                  key={course.id}
                  href={`/courses/${course.id}`}
                  className="group bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col transform hover:-translate-y-1.5"
                >
                  {/* Thumbnail */}
                  <div className="relative aspect-video w-full overflow-hidden bg-slate-100">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Badge */}
                    <div className="absolute top-3.5 left-3.5">
                      <span className="bg-brand-lime text-black font-extrabold text-xs px-3 py-1 rounded-full shadow-md uppercase tracking-wider">
                        {course.categoryBadge}
                      </span>
                    </div>

                    {/* Wishlist Button */}
                    <button
                      type="button"
                      onClick={(e) => toggleWishlist(course.id, e)}
                      aria-label="Add to wishlist"
                      className={`absolute top-3.5 right-3.5 w-9 h-9 rounded-full flex items-center justify-center transition-all ${
                        isWishlisted
                          ? "bg-red-50 text-red-500 shadow-md"
                          : "bg-white/80 hover:bg-white text-slate-600 backdrop-blur-sm"
                      }`}
                    >
                      <Heart
                        className={`w-4 h-4 ${isWishlisted ? "fill-red-500 text-red-500" : ""}`}
                      />
                    </button>
                  </div>

                  {/* Body */}
                  <div className="p-6 flex flex-col flex-1">
                    {/* Meta info */}
                    <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                      <div className="flex items-center gap-1.5 font-bold text-slate-800">
                        <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                        <span>{course.rating}</span>
                        <span className="text-slate-400 font-normal">({course.reviewsCount})</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1">
                          <BookOpen className="w-3.5 h-3.5 text-slate-400" />
                          <span>{course.lessonsCount} Lessons</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-slate-400" />
                          <span>{course.duration}</span>
                        </div>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="font-bold text-lg text-slate-900 leading-snug group-hover:text-brand-blue transition-colors line-clamp-2">
                      {course.title}
                    </h3>

                    {/* Description snippet */}
                    <p className="mt-2 text-xs text-slate-500 line-clamp-2 leading-relaxed">
                      {course.description}
                    </p>

                    {/* Instructor */}
                    <div className="mt-5 pt-4 border-t border-slate-100 flex items-center gap-3">
                      <img
                        src={course.instructor.avatar}
                        alt={course.instructor.name}
                        className="w-9 h-9 rounded-full object-cover border border-slate-200"
                      />
                      <div>
                        <p className="text-xs font-bold text-slate-800">{course.instructor.name}</p>
                        <p className="text-[11px] text-slate-500">{course.instructor.role}</p>
                      </div>
                    </div>

                    {/* Price and CTA */}
                    <div className="mt-5 pt-3 flex items-center justify-between">
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-black text-slate-900">${course.price}</span>
                        <span className="text-xs text-slate-400 line-through">
                          ${course.originalPrice}
                        </span>
                      </div>

                      <div className="text-xs font-bold px-4 py-2.5 rounded-full bg-slate-900 group-hover:bg-brand-lime group-hover:text-black text-white transition-colors flex items-center gap-1.5">
                        <span>View Details</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}

        {/* Pagination UI matching Figma */}
        <div className="mt-14 flex items-center justify-center gap-2">
          <button
            type="button"
            className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-slate-100 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            className="w-10 h-10 rounded-full bg-brand-lime text-black font-extrabold text-sm shadow-sm"
          >
            1
          </button>
          <button
            type="button"
            className="w-10 h-10 rounded-full border border-slate-200 text-slate-700 font-bold text-sm hover:bg-slate-100 transition-colors"
          >
            2
          </button>
          <button
            type="button"
            className="w-10 h-10 rounded-full border border-slate-200 text-slate-700 font-bold text-sm hover:bg-slate-100 transition-colors"
          >
            3
          </button>
          <button
            type="button"
            className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-slate-100 transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
