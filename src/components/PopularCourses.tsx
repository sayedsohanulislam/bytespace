"use client";

import React, { useState } from "react";
import { COURSES, CATEGORIES, Course } from "@/data/courses";
import { Star, Clock, BookOpen, Heart, ArrowRight, X, Check } from "lucide-react";

interface PopularCoursesProps {
  externalFilter?: string;
}

export default function PopularCourses({ externalFilter }: PopularCoursesProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Courses");
  const [wishlist, setWishlist] = useState<Record<string, boolean>>({});
  const [activeModalCourse, setActiveModalCourse] = useState<Course | null>(null);
  const [enrolledCourses, setEnrolledCourses] = useState<Record<string, boolean>>({});

  const toggleWishlist = (courseId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setWishlist((prev) => ({
      ...prev,
      [courseId]: !prev[courseId],
    }));
  };

  const handleEnroll = (courseId: string) => {
    setEnrolledCourses((prev) => ({
      ...prev,
      [courseId]: true,
    }));
  };

  const filteredCourses = COURSES.filter((course) => {
    // Check category filter
    const matchesCategory =
      selectedCategory === "All Courses" || course.category === selectedCategory;

    // Check search filter from hero
    const matchesSearch =
      !externalFilter ||
      course.title.toLowerCase().includes(externalFilter.toLowerCase()) ||
      course.category.toLowerCase().includes(externalFilter.toLowerCase()) ||
      course.description.toLowerCase().includes(externalFilter.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <section id="courses" className="py-20 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header matching Figma */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-brand-blue-light text-brand-blue font-bold text-xs uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-3">
            Top Quality Learning
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Explore Our Popular & Top Rated Courses
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Choose from hundreds of hands-on courses designed to boost your tech skills and accelerate your professional career.
          </p>

          {/* Category Filter Tabs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {CATEGORIES.map((category) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 select-none ${
                    isActive
                      ? "bg-brand-lime text-black shadow-md ring-2 ring-brand-lime/80 scale-105"
                      : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Courses Grid */}
        {filteredCourses.length === 0 ? (
          <div className="text-center py-16 bg-slate-50 rounded-3xl border border-slate-200">
            <BookOpen className="w-12 h-12 text-slate-400 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-800">No courses found</h3>
            <p className="text-sm text-slate-500 mt-1">
              Try searching with different keywords or switch back to &ldquo;All Courses&rdquo;.
            </p>
            <button
              onClick={() => setSelectedCategory("All Courses")}
              className="mt-4 bg-brand-lime text-black font-bold text-xs px-5 py-2 rounded-full"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => {
              const isWishlisted = !!wishlist[course.id];
              const isEnrolled = !!enrolledCourses[course.id];

              return (
                <div
                  key={course.id}
                  onClick={() => setActiveModalCourse(course)}
                  className="group bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col cursor-pointer transform hover:-translate-y-1.5"
                >
                  {/* Thumbnail Container */}
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

                  {/* Course Body */}
                  <div className="p-6 flex flex-col flex-1">
                    {/* Meta info: Rating & Lessons */}
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

                    {/* Instructor Info */}
                    <div className="mt-5 pt-4 border-t border-slate-100 flex items-center gap-3">
                      <img
                        src={course.instructor.avatar}
                        alt={course.instructor.name}
                        className="w-9 h-9 rounded-full object-cover border border-slate-200"
                      />
                      <div className="text-left">
                        <p className="text-xs font-bold text-slate-800">{course.instructor.name}</p>
                        <p className="text-[11px] text-slate-500">{course.instructor.role}</p>
                      </div>
                    </div>

                    {/* Price and Action */}
                    <div className="mt-5 pt-3 flex items-center justify-between">
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-black text-slate-900">${course.price}</span>
                        <span className="text-xs text-slate-400 line-through">
                          ${course.originalPrice}
                        </span>
                      </div>

                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleEnroll(course.id);
                        }}
                        className={`text-xs font-bold px-4 py-2.5 rounded-full transition-all duration-200 flex items-center gap-1.5 ${
                          isEnrolled
                            ? "bg-emerald-500 text-white"
                            : "bg-slate-900 group-hover:bg-brand-lime group-hover:text-black text-white"
                        }`}
                      >
                        {isEnrolled ? (
                          <>
                            <Check className="w-3.5 h-3.5" />
                            <span>Enrolled</span>
                          </>
                        ) : (
                          <>
                            <span>Enroll Now</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* View All Button */}
        <div className="mt-14 text-center">
          <button
            type="button"
            onClick={() => setSelectedCategory("All Courses")}
            className="inline-flex items-center gap-2 bg-brand-lime hover:bg-brand-lime-hover text-black font-extrabold text-sm sm:text-base px-8 py-3.5 rounded-full shadow-md hover:shadow-glow transition-all transform hover:-translate-y-0.5"
          >
            <span>Explore All 5000+ Courses</span>
            <ArrowRight className="w-4 h-4 text-black" />
          </button>
        </div>
      </div>

      {/* Course Quick View Modal */}
      {activeModalCourse && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-100 relative">
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setActiveModalCourse(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image Header */}
            <div className="relative aspect-video w-full">
              <img
                src={activeModalCourse.image}
                alt={activeModalCourse.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
                <div>
                  <span className="bg-brand-lime text-black font-extrabold text-xs px-3 py-1 rounded-full uppercase tracking-wider">
                    {activeModalCourse.categoryBadge}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-white mt-2">
                    {activeModalCourse.title}
                  </h3>
                </div>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6">
              {/* Stats Bar */}
              <div className="grid grid-cols-3 gap-4 py-3 px-4 bg-slate-50 rounded-2xl border border-slate-200 text-center">
                <div>
                  <p className="text-xs text-slate-500 font-medium">Rating</p>
                  <p className="font-extrabold text-slate-900 flex items-center justify-center gap-1 mt-0.5">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    {activeModalCourse.rating} ({activeModalCourse.reviewsCount})
                  </p>
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium">Content</p>
                  <p className="font-extrabold text-slate-900 mt-0.5">
                    {activeModalCourse.lessonsCount} Lessons • {activeModalCourse.duration}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium">Students</p>
                  <p className="font-extrabold text-slate-900 mt-0.5">
                    {activeModalCourse.enrolled.toLocaleString()}+
                  </p>
                </div>
              </div>

              {/* Description */}
              <div>
                <h4 className="font-bold text-slate-900 mb-2">About this Course</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {activeModalCourse.description}
                </p>
              </div>

              {/* Key Features */}
              <div>
                <h4 className="font-bold text-slate-900 mb-3">What You Will Learn</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeModalCourse.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <div className="w-4 h-4 rounded-full bg-brand-lime text-black flex items-center justify-center shrink-0 mt-0.5 font-bold">
                        ✓
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Instructor */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-blue-50/60 border border-blue-100">
                <img
                  src={activeModalCourse.instructor.avatar}
                  alt={activeModalCourse.instructor.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
                />
                <div>
                  <p className="text-xs font-semibold text-brand-blue uppercase tracking-wider">
                    Instructor
                  </p>
                  <p className="font-bold text-slate-900 text-base">
                    {activeModalCourse.instructor.name}
                  </p>
                  <p className="text-xs text-slate-500">{activeModalCourse.instructor.role}</p>
                </div>
              </div>

              {/* Modal Footer CTA */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                <div>
                  <p className="text-xs text-slate-400">Total Tuition</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-black text-slate-900">
                      ${activeModalCourse.price}
                    </span>
                    <span className="text-sm text-slate-400 line-through">
                      ${activeModalCourse.originalPrice}
                    </span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setActiveModalCourse(null)}
                    className="px-5 py-2.5 rounded-full border border-slate-300 text-slate-700 text-sm font-semibold hover:bg-slate-50 transition-colors"
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      handleEnroll(activeModalCourse.id);
                      setActiveModalCourse(null);
                    }}
                    className="px-6 py-2.5 rounded-full bg-brand-lime hover:bg-brand-lime-hover text-black text-sm font-bold shadow-md hover:shadow-glow transition-all"
                  >
                    {enrolledCourses[activeModalCourse.id] ? "Already Enrolled" : "Enroll Now"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
