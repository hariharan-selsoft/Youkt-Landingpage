"use client";

import { useState } from "react";
import { Sparkles, Menu, X, ArrowRight, Bell, Terminal, Shield } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("platform");

  const navLinks = [
    { id: "platform", label: "Platform", href: "#platform" },
    { id: "solutions", label: "Solutions", href: "#solutions" },
    { id: "ai-automation", label: "AI & Automation", href: "#ai-automation" },
    { id: "how-it-works", label: "How It Works", href: "#how-it-works" },
    { id: "resources", label: "Resources", href: "#resources" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#EAE6DF]/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo Brand Pill */}
          <a
            href="#"
            className="flex items-center gap-2.5 px-3.5 py-1.5 sm:px-4 sm:py-2 bg-white rounded-full border border-[#EAE6DF] shadow-[0_2px_8px_rgba(20,21,23,0.03)] hover:border-[#DDD8CE] transition-all group"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#F6C445] shadow-[0_0_8px_rgba(246,196,69,0.5)] group-hover:scale-110 transition-transform" />
            <span className="text-sm sm:text-base font-bold tracking-tight text-[#141517]">
              Youkt
            </span>
            <span className="text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-full bg-[#F4F1EA] text-[#606268] border border-[#EAE6DF]">
              AI
            </span>
          </a>

          {/* Desktop Capsule Navigation */}
          <nav className="hidden lg:flex items-center bg-white/95 backdrop-blur-md rounded-full p-1.5 border border-[#EAE6DF] shadow-[0_4px_16px_rgba(20,21,23,0.04)] gap-1">
            {navLinks.map((link) => {
              const isActive = activeTab === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setActiveTab(link.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs transition-all font-medium ${
                    isActive
                      ? "bg-[#141517] text-white font-semibold shadow-sm"
                      : "text-[#5E6168] hover:text-[#141517] hover:bg-[#F4F1EA]"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action Cluster */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* User Profile / Sign In Pill */}
            <a
              href="#signin"
              className="flex items-center gap-2 px-3.5 py-1.5 bg-white hover:bg-[#F4F1EA] border border-[#EAE6DF] rounded-full shadow-[0_2px_6px_rgba(20,21,23,0.02)] transition-all text-xs font-medium text-[#141517]"
            >
              <span className="w-5 h-5 rounded-full bg-[#141517] text-white flex items-center justify-center text-[10px] font-bold">
                Y
              </span>
              <span className="hidden md:inline">Sign In</span>
            </a>

            {/* Primary Action Button (Yellow Accent Pill) */}
            <a
              href="#demo"
              className="flex items-center gap-1.5 px-4 py-2 bg-[#F6C445] hover:bg-[#EDB735] text-[#141517] font-semibold text-xs rounded-full shadow-[0_2px_10px_rgba(246,196,69,0.3)] hover:shadow-[0_4px_14px_rgba(246,196,69,0.45)] hover:-translate-y-0.5 transition-all"
            >
              <span className="text-sm font-bold leading-none">+</span>
              <span>Schedule a Demo</span>
            </a>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="lg:hidden flex items-center gap-2">
            <a
              href="#demo"
              className="sm:hidden px-3 py-1.5 bg-[#F6C445] text-[#141517] font-semibold text-xs rounded-full"
            >
              Schedule a Demo
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 bg-white border border-[#EAE6DF] rounded-full text-[#141517] shadow-sm hover:bg-[#F4F1EA] focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[#EAE6DF] bg-white/98 backdrop-blur-xl px-4 pt-3 pb-6 shadow-xl">
          <div className="space-y-1.5">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => {
                  setActiveTab(link.id);
                  setMobileMenuOpen(false);
                }}
                className={`block px-4 py-2.5 rounded-full text-sm font-medium transition-colors ${
                  activeTab === link.id
                    ? "bg-[#141517] text-white font-semibold"
                    : "text-[#5E6168] hover:bg-[#F4F1EA] hover:text-[#141517]"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-4 mt-4 border-t border-[#EAE6DF] flex flex-col gap-2.5">
            <a
              href="#demo"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-full text-sm font-bold text-[#141517] bg-[#F6C445] hover:bg-[#EDB735] shadow-sm transition-all"
            >
              <span>+ Schedule a Demo</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#signin"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 rounded-full text-xs font-semibold text-[#5E6168] bg-[#F4F1EA] hover:bg-[#EAE6DF]"
            >
              Sign In
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
