"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export interface AuthUser {
  name: string;
  email: string;
  avatar: string;
  provider: "google" | "github" | "email";
}

interface AuthContextType {
  user: AuthUser | null;
  loginWithGoogle: (account?: { name: string; email: string; avatar?: string }) => void;
  logout: () => void;
  isGoogleModalOpen: boolean;
  openGoogleModal: () => void;
  closeGoogleModal: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isGoogleModalOpen, setIsGoogleModalOpen] = useState(false);

  // Load persisted user session from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem("bytespace_user");
      if (stored) {
        setUser(JSON.parse(stored));
      }
    } catch (e) {
      console.error("Failed to load user session", e);
    }
  }, []);

  const loginWithGoogle = (account?: { name: string; email: string; avatar?: string }) => {
    const newUser: AuthUser = {
      name: account?.name || "Sayed Sohanul Islam",
      email: account?.email || "sohanul06@gmail.com",
      avatar:
        account?.avatar ||
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      provider: "google",
    };
    setUser(newUser);
    try {
      localStorage.setItem("bytespace_user", JSON.stringify(newUser));
    } catch (e) {
      console.error(e);
    }
    setIsGoogleModalOpen(false);
  };

  const logout = () => {
    setUser(null);
    try {
      localStorage.removeItem("bytespace_user");
    } catch (e) {
      console.error(e);
    }
  };

  const openGoogleModal = () => setIsGoogleModalOpen(true);
  const closeGoogleModal = () => setIsGoogleModalOpen(false);

  return (
    <AuthContext.Provider
      value={{
        user,
        loginWithGoogle,
        logout,
        isGoogleModalOpen,
        openGoogleModal,
        closeGoogleModal,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
