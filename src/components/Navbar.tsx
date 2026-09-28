"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ByteSpaceLogo } from "./DecorativeShapes";
import { Menu, X, ArrowRight, LogOut, ChevronDown, BookOpen } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const { user, logout, openGoogleModal } = useAuth();
  const dropdownRef = useRef<HTMLDivElement>(null);

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

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setUserDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
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
              href="/#features"
              className="hover:text-brand-lime transition-colors"
            >
              Why Us
            </Link>
            <Link
              href="/#mentors"
              className="hover:text-brand-lime transition-colors"
            >
              Mentors
            </Link>
            <Link
              href="/#testimonials"
              className="hover:text-brand-lime transition-colors"
            >
              Reviews
            </Link>
          </nav>

          {/* Auth Actions */}
          <div className="hidden md:flex items-center gap-3">
            {user ? (
              <div className="relative" ref={dropdownRef}>
                <button
                  type="button"
                  onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                  className="flex items-center gap-2.5 bg-white/10 hover:bg-white/15 border border-white/20 rounded-full py-1.5 pl-1.5 pr-3 text-white transition-all shadow-sm focus:outline-none"
                >
                  <div className="relative w-8 h-8 rounded-full overflow-hidden bg-brand-lime text-black flex items-center justify-center font-bold text-xs ring-2 ring-brand-lime/50">
                    {user.avatar ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
                    ) : (
                      user.name.charAt(0)
                    )}
                    {user.provider === "google" && (
                      <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-white rounded-full flex items-center justify-center p-0.5 shadow">
                        <svg className="w-2 h-2" viewBox="0 0 24 24">
                          <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.66v3.05h3.9c2.28-2.1 3.64-5.2 3.64-9.15z" />
                          <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.9-3.05c-1.08.72-2.45 1.16-4.03 1.16-3.1 0-5.72-2.1-6.66-4.92H1.3v3.13C3.33 21.36 7.38 24 12 24z" />
                          <path fill="#FBBC05" d="M5.34 14.28c-.24-.72-.38-1.49-.38-2.28s.14-1.56.38-2.28V6.59H1.3A11.97 11.97 0 0 0 0 12c0 1.92.46 3.74 1.3 5.41l4.04-3.13z" />
                          <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.38 0 3.33 2.64 1.3 6.59l4.04 3.13c.94-2.82 3.56-4.97 6.66-4.97z" />
                        </svg>
                      </span>
                    )}
                  </div>
                  <span className="text-xs font-bold truncate max-w-[120px]">{user.name.split(" ")[0]}</span>
                  <ChevronDown className={`w-3.5 h-3.5 text-white/70 transition-transform ${userDropdownOpen ? "rotate-180" : ""}`} />
                </button>

                {/* Dropdown Menu */}
                {userDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-64 bg-white rounded-2xl shadow-2xl border border-slate-100 py-2 text-slate-800 animate-in fade-in zoom-in-95 duration-150 z-50">
                    <div className="px-4 py-3 border-b border-slate-100">
                      <p className="text-xs font-bold text-slate-900 truncate">{user.name}</p>
                      <p className="text-[11px] text-slate-500 truncate">{user.email}</p>
                      <div className="mt-1.5 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-semibold border border-emerald-200">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        Google Authenticated
                      </div>
                    </div>

                    <div className="py-1 text-xs">
                      <Link
                        href="/courses"
                        onClick={() => setUserDropdownOpen(false)}
                        className="flex items-center gap-2.5 px-4 py-2 hover:bg-slate-50 text-slate-700 transition-colors"
                      >
                        <BookOpen className="w-4 h-4 text-brand-blue" />
                        <span>My Enrolled Courses</span>
                      </Link>
                    </div>

                    <div className="border-t border-slate-100 pt-1 mt-1">
                      <button
                        type="button"
                        onClick={() => {
                          logout();
                          setUserDropdownOpen(false);
                        }}
                        className="w-full flex items-center gap-2.5 px-4 py-2 hover:bg-rose-50 text-rose-600 text-xs font-semibold transition-colors"
                      >
                        <LogOut className="w-4 h-4" />
                        <span>Sign Out</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <>
                <button
                  type="button"
                  onClick={openGoogleModal}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-white/95 hover:text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-full px-3.5 py-2 transition-all hover:scale-102"
                  title="Sign up / in with Google"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.66v3.05h3.9c2.28-2.1 3.64-5.2 3.64-9.15z" />
                    <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.9-3.05c-1.08.72-2.45 1.16-4.03 1.16-3.1 0-5.72-2.1-6.66-4.92H1.3v3.13C3.33 21.36 7.38 24 12 24z" />
                    <path fill="#FBBC05" d="M5.34 14.28c-.24-.72-.38-1.49-.38-2.28s.14-1.56.38-2.28V6.59H1.3A11.97 11.97 0 0 0 0 12c0 1.92.46 3.74 1.3 5.41l4.04-3.13z" />
                    <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.38 0 3.33 2.64 1.3 6.59l4.04 3.13c.94-2.82 3.56-4.97 6.66-4.97z" />
                  </svg>
                  <span>Google Sign In</span>
                </button>
                <Link
                  href="/login"
                  className="text-sm font-semibold text-white hover:text-brand-lime transition-colors px-2 py-2"
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
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            {user ? (
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full overflow-hidden bg-brand-lime text-black flex items-center justify-center font-bold text-xs ring-1 ring-white/50">
                  {user.avatar ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
                  ) : (
                    user.name.charAt(0)
                  )}
                </div>
                <button
                  type="button"
                  onClick={logout}
                  className="text-[11px] font-semibold text-white/90 border border-white/20 px-2.5 py-1 rounded-full hover:bg-white/10"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <button
                type="button"
                onClick={openGoogleModal}
                className="bg-brand-lime text-black text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5"
              >
                <svg className="w-3 h-3" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.66v3.05h3.9c2.28-2.1 3.64-5.2 3.64-9.15z" />
                  <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.9-3.05c-1.08.72-2.45 1.16-4.03 1.16-3.1 0-5.72-2.1-6.66-4.92H1.3v3.13C3.33 21.36 7.38 24 12 24z" />
                  <path fill="#FBBC05" d="M5.34 14.28c-.24-.72-.38-1.49-.38-2.28s.14-1.56.38-2.28V6.59H1.3A11.97 11.97 0 0 0 0 12c0 1.92.46 3.74 1.3 5.41l4.04-3.13z" />
                  <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.38 0 3.33 2.64 1.3 6.59l4.04 3.13c.94-2.82 3.56-4.97 6.66-4.97z" />
                </svg>
                <span>Google</span>
              </button>
            )}
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
              href="/#features"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-white/10 transition-colors"
            >
              Why Us
            </Link>
            <Link
              href="/#mentors"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-white/10 transition-colors"
            >
              Mentors
            </Link>
            <Link
              href="/#testimonials"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-white/10 transition-colors"
            >
              Reviews
            </Link>

            {user ? (
              <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
                <div className="px-3 py-2.5 bg-white/10 rounded-xl">
                  <p className="text-xs font-bold text-white">{user.name}</p>
                  <p className="text-[11px] text-white/70">{user.email}</p>
                  <span className="inline-block mt-1 text-[10px] bg-emerald-500/20 text-emerald-300 font-semibold px-2 py-0.5 rounded-full">
                    ✓ Google Authenticated
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    logout();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full text-center py-2.5 text-xs font-bold rounded-full bg-rose-500 hover:bg-rose-600 text-white transition-colors"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openGoogleModal();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-bold rounded-full bg-white text-slate-800 shadow-sm hover:bg-slate-50 transition-colors"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.66v3.05h3.9c2.28-2.1 3.64-5.2 3.64-9.15z" />
                    <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.9-3.05c-1.08.72-2.45 1.16-4.03 1.16-3.1 0-5.72-2.1-6.66-4.92H1.3v3.13C3.33 21.36 7.38 24 12 24z" />
                    <path fill="#FBBC05" d="M5.34 14.28c-.24-.72-.38-1.49-.38-2.28s.14-1.56.38-2.28V6.59H1.3A11.97 11.97 0 0 0 0 12c0 1.92.46 3.74 1.3 5.41l4.04-3.13z" />
                    <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.38 0 3.33 2.64 1.3 6.59l4.04 3.13c.94-2.82 3.56-4.97 6.66-4.97z" />
                  </svg>
                  <span>Continue with Google</span>
                </button>
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
            )}
          </div>
        </div>
      )}
    </header>
  );
}

