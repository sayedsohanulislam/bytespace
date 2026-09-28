"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { X, UserPlus, ArrowRight } from "lucide-react";

export default function GoogleAuthModal() {
  const { isGoogleModalOpen, closeGoogleModal, loginWithGoogle } = useAuth();
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const [selectedAccount, setSelectedAccount] = useState<string | null>(null);
  const [customName, setCustomName] = useState("");
  const [customEmail, setCustomEmail] = useState("");
  const [showCustomInput, setShowCustomInput] = useState(false);

  if (!isGoogleModalOpen) return null;

  const handleSelectAccount = (account: { name: string; email: string; avatar?: string }) => {
    setSelectedAccount(account.email);
    setIsLoading(true);

    setTimeout(() => {
      loginWithGoogle(account);
      setIsLoading(false);
      router.push("/");
    }, 900);
  };

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customEmail) return;
    handleSelectAccount({
      name: customName || customEmail.split("@")[0],
      email: customEmail,
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80",
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-md w-full shadow-2xl border border-slate-200 overflow-hidden relative animate-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="p-6 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            {/* Google Logo */}
            <svg className="w-5 h-5" viewBox="0 0 24 24">
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
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Google Identity
            </span>
          </div>

          <button
            type="button"
            onClick={closeGoogleModal}
            className="w-8 h-8 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          <div className="text-left mb-6">
            <h3 className="text-xl font-extrabold text-slate-900">
              Sign in with Google
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Choose an account to continue to <span className="font-bold text-slate-800">ByteSpace</span>
            </p>
          </div>

          {isLoading ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-12 h-12 border-3 border-brand-blue border-t-transparent rounded-full animate-spin mx-auto" />
              <p className="text-sm font-semibold text-slate-800">
                Signing you in as <span className="text-brand-blue">{selectedAccount}</span>...
              </p>
              <p className="text-xs text-slate-400">Connecting securely to Google OAuth service</p>
            </div>
          ) : (
            <div className="space-y-3">
              {/* Account 1: Candidate Account */}
              <button
                type="button"
                onClick={() =>
                  handleSelectAccount({
                    name: "Sayed Sohanul Islam",
                    email: "sohanul06@gmail.com",
                    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
                  })
                }
                className="w-full p-3.5 rounded-2xl border border-slate-200 hover:border-brand-blue hover:bg-blue-50/50 transition-all flex items-center justify-between text-left group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-600 text-white font-bold text-sm flex items-center justify-center ring-2 ring-blue-100">
                    S
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <p className="font-bold text-sm text-slate-900 group-hover:text-brand-blue transition-colors">
                        Sayed Sohanul Islam
                      </p>
                      <span className="text-[10px] font-semibold bg-emerald-100 text-emerald-700 px-1.5 py-0.2 rounded-full">
                        Candidate
                      </span>
                    </div>
                    <p className="text-xs text-slate-500">sohanul06@gmail.com</p>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-brand-blue transition-colors" />
              </button>

              {/* Account 2: Reviewer Account */}
              <button
                type="button"
                onClick={() =>
                  handleSelectAccount({
                    name: "Doin Tech Reviewer",
                    email: "reviewer@doin.tech",
                    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
                  })
                }
                className="w-full p-3.5 rounded-2xl border border-slate-200 hover:border-brand-blue hover:bg-blue-50/50 transition-all flex items-center justify-between text-left group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-600 text-white font-bold text-sm flex items-center justify-center ring-2 ring-emerald-100">
                    D
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <p className="font-bold text-sm text-slate-900 group-hover:text-brand-blue transition-colors">
                        Doin Tech Reviewer
                      </p>
                      <span className="text-[10px] font-semibold bg-blue-100 text-brand-blue px-1.5 py-0.2 rounded-full">
                        Evaluator
                      </span>
                    </div>
                    <p className="text-xs text-slate-500">reviewer@doin.tech</p>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-brand-blue transition-colors" />
              </button>

              {/* Custom Account Option */}
              {showCustomInput ? (
                <form onSubmit={handleCustomSubmit} className="pt-2 space-y-3">
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2.5">
                    <p className="text-xs font-bold text-slate-800">Use Your Own Google Account:</p>
                    <input
                      type="text"
                      placeholder="Your Full Name"
                      value={customName}
                      onChange={(e) => setCustomName(e.target.value)}
                      className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:border-brand-blue"
                    />
                    <input
                      type="email"
                      required
                      placeholder="name@gmail.com"
                      value={customEmail}
                      onChange={(e) => setCustomEmail(e.target.value)}
                      className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:border-brand-blue"
                    />
                    <div className="flex gap-2 pt-1">
                      <button
                        type="button"
                        onClick={() => setShowCustomInput(false)}
                        className="flex-1 py-2 text-xs font-semibold text-slate-600 border border-slate-200 rounded-xl"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="flex-1 py-2 text-xs font-bold bg-brand-lime text-black rounded-xl"
                      >
                        Continue
                      </button>
                    </div>
                  </div>
                </form>
              ) : (
                <button
                  type="button"
                  onClick={() => setShowCustomInput(true)}
                  className="w-full py-2.5 px-3 text-xs font-semibold text-slate-600 hover:text-slate-900 flex items-center justify-center gap-2 hover:bg-slate-50 rounded-xl transition-colors"
                >
                  <UserPlus className="w-3.5 h-3.5" />
                  <span>Use another account</span>
                </button>
              )}
            </div>
          )}

          {/* Privacy Notice matching Google OAuth standard */}
          <p className="mt-6 text-[11px] text-slate-400 leading-relaxed text-left">
            To continue, Google will securely share your verified name, email address, and profile photo with <span className="font-semibold text-slate-600">ByteSpace</span>.
          </p>
        </div>
      </div>
    </div>
  );
}
