"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Menu, X, Lock, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

interface NavbarProps {
  activeSection: string;
  onSelectSection: (sectionId: string) => void;
}

export default function Navbar({ activeSection, onSelectSection }: NavbarProps) {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginSuccess, setLoginSuccess] = useState(false);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setLoginModalOpen(false);
      }
    };
    if (loginModalOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [loginModalOpen]);

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoginSuccess(true);
    setTimeout(() => {
      setLoginSuccess(false);
      setLoginModalOpen(false);
    }, 1200);
  };

  const navLinks = [
    { id: "platform", label: "Platform" },
    { id: "solutions", label: "Solutions" },
    { id: "ai-automation", label: "AI & Automation" },
    { id: "resources", label: "Resources" },
  ];

  const handleNavSelect = (sectionId: string) => {
    if (typeof window !== "undefined" && window.location.pathname !== "/") {
      router.push(`/#${sectionId}`);
    } else {
      onSelectSection(sectionId);
    }
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full pt-3 sm:pt-4 pb-1 px-4 sm:px-6 lg:px-8 transition-all">
        <div className="max-w-6xl mx-auto">
          {/* Unified Floating Capsule with Pure Glassmorphism Effect */}
          <div className="bg-white/60 sm:bg-white/65 supports-[backdrop-filter]:bg-white/55 backdrop-blur-xl sm:backdrop-blur-2xl border border-white/80 sm:border-white/70 shadow-[0_8px_32px_0_rgba(20,21,23,0.06),inset_0_1px_1px_0_rgba(255,255,255,0.9),inset_0_-1px_1px_0_rgba(234,230,223,0.35)] rounded-full px-4 sm:px-6 lg:px-7 py-2 sm:py-2.5 flex items-center justify-between transition-all">
            
            {/* Brand Logo & Name */}
            <button
              onClick={() => handleNavSelect("platform")}
              className="flex items-center gap-2.5 group cursor-pointer text-left focus:outline-none"
              aria-label="Youkt Home"
            >
              <div className="w-6 h-6 sm:w-6.5 sm:h-6.5 text-[#141517] transition-transform duration-300 group-hover:scale-110 flex items-center justify-center shrink-0">
                {/* Minimalist Organic Curved Silhouette Mark with Yellow Accent */}
                <svg
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full"
                >
                  {/* Primary Charcoal Curved Petal */}
                  <path
                    d="M14.5 2.5C8.8 2.5 4.1 7.2 4.1 12.9c0 5.5 4.1 10.1 9.4 10.8 2.2.3 4.3-.2 6.2-1.2-1.9-.4-3.6-1.6-4.8-3.2-2.1-2.8-2.3-6.6-.5-9.6 1.2-2 3.1-3.4 5.4-4-1.6-1.6-3.4-2.8-5.3-2.8z"
                    fill="#141517"
                  />
                  {/* Signature Yellow Accent Petal */}
                  <path
                    d="M18.2 4.9c-.8.6-1.5 1.4-1.9 2.3-.9 2.2-.4 4.7 1.4 6.3 1.3 1.2 3.1 1.7 4.9 1.3-.4-3.2-1.8-6-4.4-9.9z"
                    fill="#F6C445"
                  />
                </svg>
              </div>
              <span className="text-lg sm:text-[19px] font-bold tracking-tight text-[#141517] transition-colors group-hover:text-black">
                Youkt
              </span>
            </button>

            {/* Desktop Navigation Links with Smooth Animated Yellow Underscore */}
            <nav className="hidden md:flex items-center gap-6 lg:gap-8 whitespace-nowrap">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavSelect(link.id)}
                    className={`relative text-[14px] lg:text-[15px] transition-colors cursor-pointer py-1 ${
                      isActive
                        ? "text-[#141517] font-semibold"
                        : "text-[#52555C] hover:text-[#141517] font-medium"
                    }`}
                  >
                    <span>{link.label}</span>
                    {/* Smooth Spring-Animated Yellow Underscore */}
                    {isActive && (
                      <motion.span
                        layoutId="activeNavUnderscore"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                        className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 sm:w-5 h-[2.5px] rounded-full bg-[#F6C445] shadow-[0_0_8px_rgba(246,196,69,0.7)]"
                      />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Right Action Cluster (Login + CTA Pill without yellow dot) */}
            <div className="hidden sm:flex items-center gap-3 lg:gap-4 whitespace-nowrap">
              {/* Login Button */}
              <button
                onClick={() => setLoginModalOpen(true)}
                className="text-xs sm:text-sm font-semibold text-[#141517] hover:text-[#5E6168] px-2.5 py-1.5 rounded-full transition-colors cursor-pointer"
              >
                Log in
              </button>

              {/* Primary Dark Pill Button */}
              <button
                onClick={() => handleNavSelect("resources")}
                className="px-5 sm:px-6 py-2 sm:py-2.5 bg-[#141517] hover:bg-[#282A2F] text-white text-xs sm:text-sm font-semibold rounded-full shadow-[0_2px_8px_rgba(20,21,23,0.12)] hover:shadow-[0_4px_16px_rgba(20,21,23,0.22)] hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer whitespace-nowrap"
              >
                Try Youkt free
              </button>
            </div>

            {/* Mobile Right Controls */}
            <div className="flex md:hidden items-center gap-1.5 sm:gap-2">
              <button
                onClick={() => setLoginModalOpen(true)}
                className="text-xs font-semibold text-[#141517] px-2 py-1 hover:text-[#5E6168] transition-colors cursor-pointer"
              >
                Log in
              </button>
              <button
                onClick={() => handleNavSelect("resources")}
                className="px-3.5 py-1.5 bg-[#141517] text-white text-xs font-semibold rounded-full shadow-xs"
              >
                Try free
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-1.5 text-[#141517] hover:bg-white/60 rounded-full transition-colors cursor-pointer focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>

          {/* Mobile Dropdown Pill Card with Glass Effect */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-2 bg-white/75 backdrop-blur-2xl border border-white/80 rounded-2xl p-4 shadow-[0_12px_36px_rgba(20,21,23,0.08),inset_0_1px_1px_rgba(255,255,255,0.9)] animate-align-in">
              <div className="space-y-1">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.id;
                  return (
                    <button
                      key={link.id}
                      onClick={() => {
                        handleNavSelect(link.id);
                        setMobileMenuOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2.5 rounded-xl text-sm transition-colors cursor-pointer flex items-center justify-between ${
                        isActive
                          ? "text-[#141517] font-semibold bg-black/[0.03]"
                          : "text-[#52555C] hover:bg-white/60 hover:text-[#141517] font-medium"
                      }`}
                    >
                      <span>{link.label}</span>
                      {isActive && (
                        <span className="w-2 h-2 rounded-full bg-[#F6C445] shadow-[0_0_6px_rgba(246,196,69,0.9)]" />
                      )}
                    </button>
                  );
                })}
              </div>
              <div className="pt-3 mt-3 border-t border-[#EAE6DF]/60 flex flex-col gap-2">
                <button
                  onClick={() => {
                    handleNavSelect("resources");
                    setMobileMenuOpen(false);
                  }}
                  className="w-full py-2.5 bg-[#141517] text-white text-sm font-semibold rounded-full shadow-sm cursor-pointer"
                >
                  Try Youkt free
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setLoginModalOpen(true);
                  }}
                  className="w-full py-2.5 bg-white/70 hover:bg-white text-[#141517] text-sm font-semibold rounded-full border border-white/90 shadow-xs transition-colors cursor-pointer"
                >
                  Log in
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Glassmorphic Login Modal */}
      {loginModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/35 backdrop-blur-sm animate-align-in">
          <div
            className="fixed inset-0"
            onClick={() => setLoginModalOpen(false)}
            aria-hidden="true"
          />
          <div className="relative w-full max-w-md bg-white/85 backdrop-blur-2xl border border-white/90 shadow-[0_24px_64px_rgba(20,21,23,0.18),inset_0_1px_2px_rgba(255,255,255,0.9)] rounded-3xl p-6 sm:p-8 z-10">
            {/* Close Button */}
            <button
              onClick={() => setLoginModalOpen(false)}
              className="absolute top-5 right-5 p-1.5 text-[#5E6168] hover:text-[#141517] hover:bg-black/5 rounded-full transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="text-center mb-6">
              <div className="w-12 h-12 mx-auto mb-3 rounded-2xl bg-white shadow-sm border border-[#EAE6DF] flex items-center justify-center">
                <Lock className="w-6 h-6 text-[#141517]" />
              </div>
              <h3 className="text-2xl font-bold text-[#141517] tracking-tight">
                Log in to Youkt
              </h3>
              <p className="text-xs sm:text-sm text-[#5E6168] mt-1">
                Enter your credentials to access your autonomous hiring workspace
              </p>
            </div>

            {/* Form */}
            {loginSuccess ? (
              <div className="p-4 bg-[#FFF9E6] border border-[#FCE29A] rounded-2xl text-center">
                <p className="text-sm font-bold text-[#8B640A]">
                  Welcome back! Redirecting to workspace...
                </p>
              </div>
            ) : (
              <form onSubmit={handleLoginSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-[#141517] mb-1.5">
                    Work Email
                  </label>
                  <input
                    type="email"
                    required
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-white/80 border border-[#EAE6DF] text-sm text-[#141517] placeholder-[#A0A2A8] focus:outline-none focus:border-[#141517] focus:ring-1 focus:ring-[#141517] transition-all"
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="text-xs font-semibold text-[#141517]">
                      Password
                    </label>
                    <a
                      href="#forgot"
                      onClick={(e) => e.preventDefault()}
                      className="text-xs text-[#5E6168] hover:text-[#141517] transition-colors"
                    >
                      Forgot?
                    </a>
                  </div>
                  <input
                    type="password"
                    required
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    placeholder="••••••••••••"
                    className="w-full px-4 py-2.5 rounded-xl bg-white/80 border border-[#EAE6DF] text-sm text-[#141517] placeholder-[#A0A2A8] focus:outline-none focus:border-[#141517] focus:ring-1 focus:ring-[#141517] transition-all"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full mt-2 py-3 bg-[#141517] hover:bg-[#282A2F] text-white text-sm font-semibold rounded-full shadow-[0_2px_10px_rgba(20,21,23,0.18)] hover:shadow-[0_4px_16px_rgba(20,21,23,0.28)] hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Sign In</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="pt-2 text-center">
                  <p className="text-xs text-[#5E6168]">
                    Don&apos;t have an enterprise account?{" "}
                    <button
                      type="button"
                      onClick={() => {
                        setLoginModalOpen(false);
                        onSelectSection("resources");
                      }}
                      className="font-semibold text-[#141517] hover:underline cursor-pointer"
                    >
                      Schedule Demo
                    </button>
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
