import React from "react";

export default function PartnerLogos() {
  const partners = [
    { name: "Google", logoText: "Google" },
    { name: "Microsoft", logoText: "Microsoft" },
    { name: "Amazon", logoText: "amazon" },
    { name: "Slack", logoText: "slack" },
    { name: "Spotify", logoText: "Spotify" },
    { name: "Netflix", logoText: "NETFLIX" },
  ];

  return (
    <section className="bg-slate-50 border-y border-slate-200/80 py-8 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs sm:text-sm font-semibold text-slate-500 uppercase tracking-widest mb-6">
          Trusted by learners & engineers from leading companies worldwide
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-16 opacity-75 grayscale hover:grayscale-0 transition-all duration-300">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex items-center gap-2 text-slate-700 hover:text-brand-blue font-bold text-lg sm:text-xl tracking-tight transition-colors"
            >
              {partner.name === "Google" && (
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
                </svg>
              )}
              {partner.name === "Microsoft" && (
                <div className="grid grid-cols-2 gap-0.5 w-4 h-4">
                  <div className="bg-[#F25022] w-1.5 h-1.5" />
                  <div className="bg-[#7FBA00] w-1.5 h-1.5" />
                  <div className="bg-[#00A4EF] w-1.5 h-1.5" />
                  <div className="bg-[#FFB900] w-1.5 h-1.5" />
                </div>
              )}
              {partner.name === "Spotify" && (
                <svg className="w-5 h-5 text-[#1DB954]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.495 17.295c-.215.352-.674.464-1.026.25-2.812-1.718-6.352-2.107-10.523-1.155-.403.093-.805-.16-.897-.562-.093-.404.16-.806.562-.898 4.567-1.042 8.49-.607 11.632 1.34.354.214.464.673.252 1.025zm1.467-3.26c-.27.44-.85.578-1.29.308-3.22-1.978-8.128-2.55-11.936-1.393-.497.15-1.023-.135-1.174-.632-.15-.497.135-1.023.632-1.174 4.354-1.322 9.774-.682 13.46 1.597.44.27.578.85.308 1.294zm.127-3.395c-3.86-2.292-10.237-2.503-13.924-1.384-.593.18-1.22-.162-1.4-.755-.18-.593.162-1.22.755-1.4 4.237-1.286 11.277-1.04 15.698 1.585.534.317.708 1.01.39 1.544-.317.534-1.01.708-1.52.41z" />
                </svg>
              )}
              {partner.name === "Slack" && (
                <svg className="w-5 h-5 text-[#E01E5A]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313z" />
                </svg>
              )}
              <span>{partner.logoText}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
