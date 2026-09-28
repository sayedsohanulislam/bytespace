import React from "react";
import Link from "next/link";
import { Home } from "lucide-react";
import { ByteSpaceLogo, LimeSpiral, WhiteTorus, LimePrism } from "@/components/DecorativeShapes";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-brand-blue flex flex-col justify-between items-center text-white relative overflow-hidden px-4 py-12">
      {/* Decorative Grid */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      {/* Floating 3D Shapes */}
      <div className="absolute top-16 left-12 pointer-events-none opacity-80 animate-bounce duration-[4000ms]">
        <LimeSpiral className="w-20 h-20 filter drop-shadow-xl" />
      </div>
      <div className="absolute bottom-20 left-16 pointer-events-none opacity-80 animate-pulse duration-[3000ms]">
        <WhiteTorus className="w-16 h-16 filter drop-shadow-xl" />
      </div>
      <div className="absolute top-20 right-16 pointer-events-none opacity-80 animate-bounce duration-[5000ms]">
        <LimePrism className="w-20 h-20 filter drop-shadow-xl" />
      </div>

      {/* Header Logo */}
      <div className="relative z-10">
        <Link href="/">
          <ByteSpaceLogo light={true} />
        </Link>
      </div>

      {/* Center 404 Visual Content */}
      <div className="relative z-10 text-center max-w-xl mx-auto my-auto space-y-6">
        <div className="relative inline-block">
          <h1 className="text-8xl sm:text-9xl font-black tracking-tighter text-brand-lime drop-shadow-2xl">
            404
          </h1>
          <div className="absolute -bottom-2 inset-x-0 h-1.5 bg-brand-lime/40 rounded-full blur-sm" />
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
          The page you are looking for doesn&apos;t exist!
        </h2>

        <p className="text-white/80 text-sm sm:text-base leading-relaxed max-w-md mx-auto">
          It looks like you ventured into uncharted space. The page you requested might have been moved or doesn&apos;t exist.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-brand-lime hover:bg-brand-lime-hover text-black font-extrabold text-sm sm:text-base px-8 py-3.5 rounded-full shadow-lg hover:shadow-glow transition-all transform hover:-translate-y-0.5"
          >
            <Home className="w-4 h-4 text-black" />
            <span>Back to Home</span>
          </Link>
          <Link
            href="/#courses"
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold text-sm sm:text-base px-6 py-3.5 rounded-full border border-white/20 transition-colors"
          >
            <span>Browse Courses</span>
          </Link>
        </div>
      </div>

      {/* Footer copyright */}
      <div className="relative z-10 text-xs text-white/60">
        © 2026 ByteSpace. All rights reserved.
      </div>
    </div>
  );
}
