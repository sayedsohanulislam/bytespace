"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ByteSpaceLogo, LimeSpiral, LimePrism, WhiteZigzag } from "@/components/DecorativeShapes";
import { Eye, EyeOff, Mail, Lock, User, ArrowLeft, ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

export default function SignupPage() {
  const { openGoogleModal } = useAuth();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreeTerms) return;
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
      {/* Back to Home Link */}
      <Link
        href="/"
        className="fixed top-5 left-5 inline-flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-slate-900 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full border border-slate-200 shadow-sm transition-all hover:-translate-x-0.5 z-20"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        <span>Back to Home</span>
      </Link>

      {/* Main Auth Container */}
      <div className="max-w-5xl w-full bg-white rounded-3xl sm:rounded-4xl shadow-2xl border border-slate-200/90 overflow-hidden grid grid-cols-1 lg:grid-cols-12 min-h-[680px]">
        {/* Left Branded Panel (Blue) */}
        <div className="lg:col-span-5 bg-brand-blue p-8 sm:p-12 text-white relative flex flex-col justify-between overflow-hidden">
          {/* Subtle background dots */}
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
              backgroundSize: "24px 24px",
            }}
          />

          {/* Floating Decorative Shapes */}
          <div className="absolute -top-4 -right-4 pointer-events-none opacity-85 select-none animate-bounce duration-[4000ms]">
            <LimeSpiral className="w-20 h-20 filter drop-shadow-xl" />
          </div>
          <div className="absolute top-1/2 -left-6 pointer-events-none opacity-80 select-none animate-pulse duration-[3500ms]">
            <LimePrism className="w-16 h-16 filter drop-shadow-xl" />
          </div>
          <div className="absolute bottom-8 right-4 pointer-events-none opacity-80 select-none">
            <WhiteZigzag className="w-12 h-12 filter drop-shadow-xl" />
          </div>

          <div className="relative z-10">
            <Link href="/" className="inline-block mb-8">
              <ByteSpaceLogo light={true} />
            </Link>

            <span className="inline-block bg-white/10 text-brand-lime text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4 border border-white/20">
              Start Free Today
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight leading-tight">
              Join Over 50k+ Ambitious Tech Learners
            </h2>
            <p className="mt-3 text-white/80 text-sm leading-relaxed">
              Unlock complete career tracks in Web Development, UI/UX Design, Python AI, and Digital Marketing with real mentor support.
            </p>
          </div>

          {/* Perks list inside panel */}
          <div className="relative z-10 my-6 space-y-3 p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-xs">
            <div className="flex items-center gap-2.5">
              <div className="w-5 h-5 rounded-full bg-brand-lime text-black flex items-center justify-center font-bold text-[10px] shrink-0">
                ✓
              </div>
              <span>Access to all 5,000+ course lessons</span>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="w-5 h-5 rounded-full bg-brand-lime text-black flex items-center justify-center font-bold text-[10px] shrink-0">
                ✓
              </div>
              <span>Weekly live sessions & mentor reviews</span>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="w-5 h-5 rounded-full bg-brand-lime text-black flex items-center justify-center font-bold text-[10px] shrink-0">
                ✓
              </div>
              <span>Verified certificates on course completion</span>
            </div>
          </div>

          <div className="relative z-10 flex items-center gap-2 text-xs text-white/70">
            <ShieldCheck className="w-4 h-4 text-brand-lime" />
            <span>No credit card required • Cancel anytime</span>
          </div>
        </div>

        {/* Right Form Panel (White) */}
        <div className="lg:col-span-7 p-8 sm:p-12 lg:p-14 flex flex-col justify-center">
          <div className="max-w-md w-full mx-auto">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-brand-lime text-black flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Account Created!</h3>
                <p className="text-slate-600 text-sm">
                  Welcome to ByteSpace, <span className="font-bold text-slate-900">{fullName || "Student"}</span>! We have sent a confirmation email to <span className="font-semibold text-brand-blue">{email}</span>.
                </p>
                <div className="pt-4">
                  <Link
                    href="/"
                    className="inline-flex items-center gap-2 bg-brand-lime hover:bg-brand-lime-hover text-black font-bold text-sm px-6 py-3 rounded-full shadow-sm"
                  >
                    <span>Start Learning Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ) : (
              <>
                <div className="mb-6">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    Create your Account
                  </h3>
                  <p className="mt-2 text-sm text-slate-500">
                    Get started with your free 30-day full access pass.
                  </p>
                </div>

                {/* Social Login Buttons */}
                <div className="grid grid-cols-2 gap-3 mb-5">
                  <button
                    type="button"
                    onClick={openGoogleModal}
                    className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-all hover:border-brand-blue shadow-sm group"
                  >
                    <svg className="w-4 h-4 transition-transform group-hover:scale-110" viewBox="0 0 24 24">
                      <path
                        fill="#4285F4"
                        d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.66v3.05h3.9c2.28-2.1 3.64-5.2 3.64-9.15z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.9-3.05c-1.08.72-2.45 1.16-4.03 1.16-3.1 0-5.72-2.1-6.66-4.92H1.3v3.13C3.33 21.36 7.38 24 12 24z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.34 14.28c-.24-.72-.38-1.49-.38-2.28s.14-1.56.38-2.28V6.59H1.3A11.97 11.97 0 0 0 0 12c0 1.92.46 3.74 1.3 5.41l4.04-3.13z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.38 0 3.33 2.64 1.3 6.59l4.04 3.13c.94-2.82 3.56-4.97 6.66-4.97z"
                      />
                    </svg>
                    <span>Google</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setFullName("GitHub Dev");
                      setEmail("dev@github.com");
                      setPassword("Password123!");
                    }}
                    className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors shadow-sm"
                  >
                    <svg className="w-4 h-4 text-slate-900" viewBox="0 0 24 24" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      />
                    </svg>
                    <span>GitHub</span>
                  </button>
                </div>

                <div className="relative flex items-center justify-center mb-5">
                  <div className="border-t border-slate-200 w-full" />
                  <span className="bg-white px-3 text-xs text-slate-400 font-medium absolute">
                    or register with email
                  </span>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Full Name
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5 pointer-events-none" />
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Sayed Sohanul Islam"
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5 pointer-events-none" />
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="sohanul06@gmail.com"
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Create Password
                    </label>
                    <div className="relative">
                      <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5 pointer-events-none" />
                      <input
                        type={showPassword ? "text" : "password"}
                        required
                        minLength={6}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="At least 6 characters"
                        className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 transition-all"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3.5 top-3.5 text-slate-400 hover:text-slate-600 focus:outline-none"
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  <div className="pt-1">
                    <label className="flex items-start gap-2 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        required
                        checked={agreeTerms}
                        onChange={(e) => setAgreeTerms(e.target.checked)}
                        className="w-4 h-4 mt-0.5 rounded border-slate-300 text-brand-blue focus:ring-brand-blue"
                      />
                      <span className="text-xs text-slate-600 leading-snug">
                        I agree to the ByteSpace{" "}
                        <span className="text-brand-blue font-semibold hover:underline">
                          Terms of Service
                        </span>{" "}
                        and{" "}
                        <span className="text-brand-blue font-semibold hover:underline">
                          Privacy Policy
                        </span>
                        .
                      </span>
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading || !agreeTerms}
                    className="w-full bg-brand-lime hover:bg-brand-lime-hover text-black font-extrabold text-sm py-3.5 rounded-full shadow-md hover:shadow-glow transition-all flex items-center justify-center gap-2 mt-3 disabled:opacity-50"
                  >
                    {isLoading ? (
                      <span className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <span>Create Account</span>
                        <ArrowRight className="w-4 h-4 text-black" />
                      </>
                    )}
                  </button>
                </form>

                <p className="mt-6 text-center text-xs text-slate-500">
                  Already have an account?{" "}
                  <Link href="/login" className="font-bold text-brand-blue hover:underline">
                    Sign In
                  </Link>
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
