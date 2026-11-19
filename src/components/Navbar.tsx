"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Menu, X, Lock, ArrowRight, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface NavbarProps {
  activeSection: string;
  onSelectSection: (sectionId: string) => void;
  loginModalOpen?: boolean;
  onSetLoginModalOpen?: (open: boolean) => void;
}

export default function Navbar({
  activeSection,
  onSelectSection,
  loginModalOpen: controlledOpen,
  onSetLoginModalOpen,
}: NavbarProps) {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [internalLoginOpen, setInternalLoginOpen] = useState(false);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginSuccess, setLoginSuccess] = useState(false);

  const loginModalOpen = controlledOpen ?? internalLoginOpen;
  const setLoginModalOpen = useCallback(
    (open: boolean) => {
      if (onSetLoginModalOpen) {
        onSetLoginModalOpen(open);
      } else {
        setInternalLoginOpen(open);
      }
    },
    [onSetLoginModalOpen]
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setLoginModalOpen(false);
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [setLoginModalOpen]);

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoginSuccess(true);
    setTimeout(() => {
      setLoginSuccess(false);
      setLoginEmail("");
      setLoginPassword("");
      setLoginModalOpen(false);
    }, 1400);
  };

  const navLinks = [
    { id: "platform", label: "Platform" },
    { id: "features", label: "Features" },
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
      <header className="fixed top-0 inset-x-0 z-50 pt-2.5 px-2.5 sm:px-3.5 lg:px-4">
        <div className="w-full max-w-[1280px] mx-auto h-[64px] rounded-2xl bg-white/92 backdrop-blur-xl border border-[#EAE6DF] shadow-[0_14px_34px_-18px_rgba(20,21,23,0.16)] px-4 sm:px-6 flex lg:grid lg:grid-cols-[1fr_auto_1fr] items-center justify-between gap-4">
          {/* Left: Official YOUKT Wordmark */}
          <div className="flex items-center justify-start">
            <button
              onClick={() => handleNavSelect("platform")}
              className="flex items-center group cursor-pointer shrink-0 py-1 rounded-lg"
              aria-label="Youkt Home"
            >
              <Image
                src="/youkt-wordmark.png"
                alt="YOUKT"
                width={372}
                height={81}
                preload
                className="h-[22px] sm:h-[25px] w-auto object-contain transition-opacity duration-200 group-hover:opacity-85"
              />
            </button>
          </div>

          {/* Center: Centered Navigation Links */}
          <nav
            aria-label="Primary Navigation"
            className="hidden lg:flex items-center justify-center gap-1"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavSelect(link.id)}
                  className={`relative px-3.5 py-2 rounded-lg text-[13.5px] transition-colors cursor-pointer whitespace-nowrap ${
                    isActive
                      ? "text-[#141517] font-semibold"
                      : "text-[#5E6168] hover:text-[#141517] hover:bg-[#FAF8F5] font-medium"
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <motion.span
                      layoutId="youktEditorialNavBar"
                      transition={{
                        type: "spring",
                        stiffness: 440,
                        damping: 34,
                      }}
                      className="absolute left-3.5 right-3.5 bottom-0.5 h-[2px] rounded-full bg-[#F6C445]"
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right: Crisp Enterprise Actions + Mobile Controls */}
          <div className="flex items-center justify-end gap-2.5 shrink-0">
            <div className="hidden sm:flex items-center gap-2.5">
              <button
                onClick={() => setLoginModalOpen(true)}
                className="px-4 py-2 rounded-xl text-[13.5px] font-semibold text-[#141517] border border-transparent hover:border-[#EAE6DF] hover:bg-[#FAF8F5] transition-all cursor-pointer"
              >
                Log in
              </button>
              <button
                onClick={() => handleNavSelect("resources")}
                className="group px-4.5 py-2.5 rounded-xl bg-[#141517] hover:bg-[#24262B] text-white text-[13px] font-semibold transition-all cursor-pointer inline-flex items-center gap-2 shadow-[0_8px_20px_-10px_rgba(20,21,23,0.45)]"
              >
                <span>Request a demo</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#F6C445] transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>

            <div className="flex sm:hidden items-center gap-2">
              <button
                onClick={() => handleNavSelect("resources")}
                className="px-3.5 py-1.5 rounded-xl bg-[#141517] text-white text-xs font-semibold cursor-pointer"
              >
                Demo
              </button>
              <button
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                className="p-2 rounded-xl border border-[#EAE6DF] bg-[#FAF8F5] text-[#141517] hover:border-[#141517] transition-colors cursor-pointer"
                aria-label="Toggle navigation menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? (
                  <X className="w-4 h-4" />
                ) : (
                  <Menu className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Floating Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -6, scale: 0.99 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -6, scale: 0.99 }}
              transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
              className="lg:hidden mt-2 max-w-[1280px] mx-auto rounded-2xl border border-[#EAE6DF] bg-white/98 backdrop-blur-xl shadow-xl p-3"
            >
              <div className="space-y-0.5">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.id;
                  return (
                    <button
                      key={link.id}
                      onClick={() => {
                        handleNavSelect(link.id);
                        setMobileMenuOpen(false);
                      }}
                      className={`w-full text-left px-3.5 py-2.5 rounded-xl text-sm flex items-center justify-between transition-colors cursor-pointer ${
                        isActive
                          ? "bg-[#FAF8F5] text-[#141517] font-semibold"
                          : "text-[#5E6168] hover:bg-[#FAF8F5] hover:text-[#141517] font-medium"
                      }`}
                    >
                      <span>{link.label}</span>
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#F6C445]" />
                      )}
                    </button>
                  );
                })}
              </div>
              <div className="mt-3 pt-3 border-t border-[#EAE6DF] grid grid-cols-2 gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setLoginModalOpen(true);
                  }}
                  className="py-2.5 rounded-xl border border-[#EAE6DF] text-[#141517] text-xs font-semibold cursor-pointer"
                >
                  Log in
                </button>
                <button
                  onClick={() => {
                    handleNavSelect("resources");
                    setMobileMenuOpen(false);
                  }}
                  className="py-2.5 rounded-xl bg-[#141517] text-white text-xs font-semibold cursor-pointer"
                >
                  Request a demo
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Role-Scoped Workspace Login Modal */}
      <AnimatePresence>
        {loginModalOpen && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby="login-modal-title"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLoginModalOpen(false)}
              className="fixed inset-0 bg-[#141517]/45 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              transition={{ duration: 0.22 }}
              className="relative w-full max-w-md bg-white border border-[#EAE6DF] rounded-3xl overflow-hidden z-10 shadow-2xl"
            >
              <div className="h-1.5 w-full bg-[#F6C445]" />
              <div className="p-7 sm:p-8">
                <button
                  onClick={() => setLoginModalOpen(false)}
                  className="absolute top-6 right-6 p-1.5 text-[#555861] hover:text-[#141517] rounded-full cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-4 h-4" />
                </button>

                <div className="mb-6">
                  <div className="inline-flex items-center gap-2 text-[11px] font-mono font-semibold uppercase tracking-[0.12em] text-[#8B640A] mb-2.5">
                    <Lock className="w-3.5 h-3.5 text-[#C98908]" />
                    <span>Role-Scoped Workspace</span>
                  </div>
                  <h3
                    id="login-modal-title"
                    className="text-2xl font-bold text-[#141517] tracking-tight"
                  >
                    Log in to Youkt
                  </h3>
                  <p className="text-sm text-[#5E6168] mt-1">
                    Sign in with email or linked Google account to access your
                    tenant workspace.
                  </p>
                </div>

                {loginSuccess ? (
                  <div className="p-5 rounded-2xl bg-[#FFF9E6] border border-[#F2D27A] text-center space-y-2">
                    <CheckCircle2 className="w-6 h-6 text-[#8B640A] mx-auto" />
                    <p className="text-sm font-bold text-[#141517]">
                      Welcome back! Redirecting to your workspace...
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleLoginSubmit} className="space-y-4">
                    <div>
                      <label
                        htmlFor="youkt-login-email"
                        className="block text-xs font-semibold text-[#141517] mb-1.5"
                      >
                        Work Email
                      </label>
                      <input
                        id="youkt-login-email"
                        type="email"
                        required
                        value={loginEmail}
                        onChange={(e) => setLoginEmail(e.target.value)}
                        placeholder="name@company.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#EAE6DF] text-sm text-[#141517] placeholder-[#8E929E] focus:bg-white focus:border-[#141517] focus:outline-none transition-all"
                      />
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <label
                          htmlFor="youkt-login-password"
                          className="text-xs font-semibold text-[#141517]"
                        >
                          Password
                        </label>
                        <button
                          type="button"
                          onClick={(e) => e.preventDefault()}
                          className="text-xs text-[#5E6168] hover:text-[#141517] cursor-pointer"
                        >
                          Forgot?
                        </button>
                      </div>
                      <input
                        id="youkt-login-password"
                        type="password"
                        required
                        value={loginPassword}
                        onChange={(e) => setLoginPassword(e.target.value)}
                        placeholder="••••••••••••"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#EAE6DF] text-sm text-[#141517] placeholder-[#8E929E] focus:bg-white focus:border-[#141517] focus:outline-none transition-all"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full mt-2 py-3 rounded-full btn-youkt-pill-yellow text-sm font-bold flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Sign In</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <div className="pt-3 border-t border-[#F0ECE4] flex items-center justify-between text-xs text-[#5E6168]">
                      <span>Google Sign-In supported</span>
                      <button
                        type="button"
                        onClick={() => {
                          setLoginModalOpen(false);
                          onSelectSection("resources");
                        }}
                        className="font-semibold text-[#141517] hover:text-[#8B640A] cursor-pointer"
                      >
                        Request a demo →
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
