"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ByteSpaceLogo } from "./DecorativeShapes";
import { CheckCircle2 } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-white border-t border-slate-200 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Callout */}
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 text-white mb-16 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="max-w-xl text-center lg:text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-lime">
              Stay in the Loop
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              Subscribe to ByteSpace Weekly Newsletter
            </h3>
            <p className="text-slate-400 text-sm mt-2">
              Receive free programming tutorials, design tips, course discounts, and career advice directly in your inbox.
            </p>
          </div>

          <div className="w-full max-w-md">
            {subscribed ? (
              <div className="bg-emerald-950/80 border border-emerald-500/50 text-emerald-300 p-4 rounded-full flex items-center justify-center gap-2 text-sm font-semibold">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <span>Thank you! You have been subscribed.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex items-center bg-slate-800 rounded-full p-1.5 border border-slate-700 focus-within:border-brand-lime transition-colors">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="w-full bg-transparent border-0 px-4 py-2.5 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-0"
                />
                <button
                  type="submit"
                  className="bg-brand-lime hover:bg-brand-lime-hover text-black font-bold text-xs sm:text-sm px-6 py-2.5 rounded-full shrink-0 transition-colors shadow-sm"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 pb-12 border-b border-slate-200">
          {/* Brand Info */}
          <div className="col-span-2 space-y-4">
            <Link href="/" className="inline-block">
              <ByteSpaceLogo />
            </Link>
            <p className="text-sm text-slate-500 max-w-sm leading-relaxed">
              ByteSpace is the premier online tech education platform providing production-ready skills, interactive mentorship, and accredited certifications for modern engineers and designers.
            </p>
            <div className="flex items-center gap-3 text-slate-400">
              <span className="text-xs font-semibold text-slate-600">Location:</span>
              <span className="text-xs">Global Online Campus</span>
            </div>
          </div>

          {/* Links Column 1: Courses */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">
              Top Categories
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-600">
              <li>
                <Link href="#courses" className="hover:text-brand-blue transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="#courses" className="hover:text-brand-blue transition-colors">
                  UI/UX & Figma
                </Link>
              </li>
              <li>
                <Link href="#courses" className="hover:text-brand-blue transition-colors">
                  Python & AI
                </Link>
              </li>
              <li>
                <Link href="#courses" className="hover:text-brand-blue transition-colors">
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link href="#courses" className="hover:text-brand-blue transition-colors">
                  Data Science
                </Link>
              </li>
            </ul>
          </div>

          {/* Links Column 2: Platform */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">
              Platform
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-600">
              <li>
                <Link href="#features" className="hover:text-brand-blue transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#mentors" className="hover:text-brand-blue transition-colors">
                  Our Mentors
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="hover:text-brand-blue transition-colors">
                  Student Stories
                </Link>
              </li>
              <li>
                <Link href="/login" className="hover:text-brand-blue transition-colors">
                  Student Portal
                </Link>
              </li>
              <li>
                <Link href="/signup" className="hover:text-brand-blue transition-colors">
                  Join Community
                </Link>
              </li>
            </ul>
          </div>

          {/* Links Column 3: Legal & Support */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">
              Legal & Support
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-600">
              <li>
                <span className="hover:text-brand-blue cursor-pointer transition-colors">
                  Privacy Policy
                </span>
              </li>
              <li>
                <span className="hover:text-brand-blue cursor-pointer transition-colors">
                  Terms of Service
                </span>
              </li>
              <li>
                <span className="hover:text-brand-blue cursor-pointer transition-colors">
                  Help Center & FAQs
                </span>
              </li>
              <li>
                <span className="hover:text-brand-blue cursor-pointer transition-colors">
                  Code of Conduct
                </span>
              </li>
              <li>
                <span className="hover:text-brand-blue cursor-pointer transition-colors">
                  Contact Support
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 ByteSpace Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-900 cursor-pointer transition-colors">Twitter (X)</span>
            <span className="hover:text-slate-900 cursor-pointer transition-colors">GitHub</span>
            <span className="hover:text-slate-900 cursor-pointer transition-colors">LinkedIn</span>
            <span className="hover:text-slate-900 cursor-pointer transition-colors">Discord</span>
            <span className="hover:text-slate-900 cursor-pointer transition-colors">YouTube</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
