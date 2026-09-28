"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ByteSpaceLogo } from "./DecorativeShapes";
import { Menu, X, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-brand-blue/95 backdrop-blur-md shadow-lg py-3 border-b border-white/10"
          : "bg-brand-blue py-4 md:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center group">
            <ByteSpaceLogo light={true} />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-white/90">
            <Link
              href="/"
              className="text-white font-semibold transition-colors hover:text-brand-lime flex items-center gap-1"
            >
              Home
            </Link>
            <Link
              href="/courses"
              className="hover:text-brand-lime transition-colors"
            >
              Courses
            </Link>
            <Link
              href="#features"
              className="hover:text-brand-lime transition-colors"
            >
              Why Us
            </Link>
            <Link
              href="#mentors"
              className="hover:text-brand-lime transition-colors"
            >
              Mentors
            </Link>
            <Link
              href="#testimonials"
              className="hover:text-brand-lime transition-colors"
            >
              Reviews
            </Link>
          </nav>

          {/* Auth Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/login"
              className="text-sm font-semibold text-white hover:text-brand-lime transition-colors px-3 py-2"
            >
              Sign In
            </Link>
            <Link
              href="/signup"
              className="inline-flex items-center gap-1.5 bg-brand-lime hover:bg-brand-lime-hover text-black text-sm font-bold px-5 py-2.5 rounded-full shadow-sm hover:shadow-glow transition-all transform hover:-translate-y-0.5"
            >
              <span>Sign Up</span>
              <ArrowRight className="w-4 h-4 text-black" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <Link
              href="/signup"
              className="bg-brand-lime text-black text-xs font-bold px-3 py-1.5 rounded-full"
            >
              Sign Up
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-white hover:bg-white/10 transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-brand-blue-dark/95 backdrop-blur-lg border-b border-white/10 px-4 pt-3 pb-6 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-3 text-base font-medium text-white/90">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-white/10 transition-colors font-semibold text-brand-lime"
            >
              Home
            </Link>
            <Link
              href="/courses"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-white/10 transition-colors"
            >
              Courses
            </Link>
            <Link
              href="#features"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-white/10 transition-colors"
            >
              Why Us
            </Link>
            <Link
              href="#mentors"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-white/10 transition-colors"
            >
              Mentors
            </Link>
            <Link
              href="#testimonials"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-white/10 transition-colors"
            >
              Reviews
            </Link>
            <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
              <Link
                href="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 text-sm font-semibold rounded-full border border-white/20 text-white hover:bg-white/10"
              >
                Sign In
              </Link>
              <Link
                href="/signup"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 text-sm font-bold rounded-full bg-brand-lime text-black shadow-sm"
              >
                Create Account Free
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
