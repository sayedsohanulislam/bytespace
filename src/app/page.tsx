"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PartnerLogos from "@/components/PartnerLogos";
import PopularCourses from "@/components/PopularCourses";
import Categories from "@/components/Categories";
import FeatureSpotlight from "@/components/FeatureSpotlight";
import LiveMentorship from "@/components/LiveMentorship";
import CtaBanner from "@/components/CtaBanner";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  const [searchFilter, setSearchFilter] = useState<string>("");

  return (
    <main className="min-h-screen flex flex-col bg-white">
      {/* Top Navigation */}
      <Navbar />

      {/* Hero Section with Search */}
      <Hero onSearch={(q) => setSearchFilter(q)} />

      {/* Partner Brand Logos */}
      <PartnerLogos />

      {/* Popular Courses Grid with Filter */}
      <PopularCourses externalFilter={searchFilter} />

      {/* Why Choose Us / Category Grid */}
      <Categories />

      {/* Feature Spotlight: Career Skills & Hands-on Projects */}
      <FeatureSpotlight />

      {/* Live Mentorship & Expert Guidance */}
      <LiveMentorship />

      {/* High-Impact Blue CTA Banner */}
      <CtaBanner />

      {/* Student Testimonials */}
      <Testimonials />

      {/* Footer & Newsletter */}
      <Footer />
    </main>
  );
}
