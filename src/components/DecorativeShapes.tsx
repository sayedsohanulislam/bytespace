import React from "react";

export function ByteSpaceLogo({ className = "h-8", light = false }: { className?: string; light?: boolean }) {
  return (
    <div className={`flex items-center gap-2.5 font-bold tracking-tight select-none ${className}`}>
      <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-brand-lime text-black shadow-sm group-hover:scale-105 transition-transform">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5 text-black"
        >
          <path d="m7 8-4 4 4 4" />
          <path d="m17 8 4 4-4 4" />
          <path d="M14 4 10 20" />
        </svg>
      </div>
      <span className={`text-xl font-extrabold tracking-tight ${light ? "text-white" : "text-brand-dark"}`}>
        Byte<span className="text-brand-blue">Space</span>
      </span>
    </div>
  );
}

// 3D Geometric Playful SVG Elements matching the Figma design
export function LimeSpiral({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="limeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E4FF4D" />
          <stop offset="100%" stopColor="#B3E600" />
        </linearGradient>
        <filter id="shadow3d" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="3" dy="5" stdDeviation="4" floodOpacity="0.25" floodColor="#0A2540" />
        </filter>
      </defs>
      <g filter="url(#shadow3d)">
        {/* Playful spiral ribbon coils */}
        <path
          d="M20 30 C 20 15, 80 15, 80 30 C 80 45, 20 45, 20 60 C 20 75, 80 75, 80 90"
          stroke="url(#limeGrad)"
          strokeWidth="16"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M26 28 C 30 18, 70 18, 74 28"
          stroke="#FFFFFF"
          strokeWidth="4"
          strokeLinecap="round"
          opacity="0.6"
        />
      </g>
    </svg>
  );
}

export function WhiteTorus({ className = "w-14 h-14" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="torusGrad" x1="20%" y1="10%" x2="80%" y2="90%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="70%" stopColor="#E2E8F0" />
          <stop offset="100%" stopColor="#CBD5E1" />
        </linearGradient>
        <filter id="torusShadow" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="4" dy="8" stdDeviation="6" floodOpacity="0.3" floodColor="#0F172A" />
        </filter>
      </defs>
      <ellipse
        cx="50"
        cy="50"
        rx="36"
        ry="24"
        fill="url(#torusGrad)"
        filter="url(#torusShadow)"
        transform="rotate(-20 50 50)"
      />
      <ellipse
        cx="50"
        cy="50"
        rx="16"
        ry="10"
        fill="#1E4FFF"
        transform="rotate(-20 50 50)"
      />
    </svg>
  );
}

export function LimePrism({ className = "w-14 h-14" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="prismTop" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E5FF59" />
          <stop offset="100%" stopColor="#D2F829" />
        </linearGradient>
        <linearGradient id="prismSide" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#B3E600" />
          <stop offset="100%" stopColor="#8CBF00" />
        </linearGradient>
        <filter id="prismShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="4" dy="8" stdDeviation="5" floodOpacity="0.25" floodColor="#0F172A" />
        </filter>
      </defs>
      <g filter="url(#prismShadow)" transform="rotate(15 50 50)">
        <polygon points="50,15 85,75 15,75" fill="url(#prismTop)" />
        <polygon points="50,15 85,75 50,85" fill="url(#prismSide)" />
        <line x1="50" y1="15" x2="85" y2="75" stroke="#FFF" strokeWidth="2" opacity="0.5" />
      </g>
    </svg>
  );
}

export function WhiteZigzag({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <filter id="zzShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="3" dy="5" stdDeviation="4" floodOpacity="0.25" floodColor="#0F172A" />
        </filter>
      </defs>
      <path
        d="M15 15 L35 30 L20 45 L50 65 L65 50"
        stroke="#FFFFFF"
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#zzShadow)"
      />
    </svg>
  );
}
