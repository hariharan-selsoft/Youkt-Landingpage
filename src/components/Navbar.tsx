"use client";

import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import YouktLogo from "@/components/YouktLogo";

interface NavbarProps {
  activeSection: string;
  onSelectSection: (sectionId: string) => void;
}

export default function Navbar({ activeSection, onSelectSection }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: "platform", label: "Platform" },
    { id: "solutions", label: "Solutions" },
    { id: "ai-automation", label: "AI & Automation" },
    { id: "how-it-works", label: "How It Works" },
    { id: "resources", label: "Resources" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-transparent transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo Brand Pill */}
          <button
            onClick={() => onSelectSection("platform")}
            className="flex items-center gap-2 px-3 py-1.5 sm:px-3.5 sm:py-2 bg-white rounded-full border border-[#EAE6DF] shadow-[0_2px_8px_rgba(20,21,23,0.03)] hover:border-[#DDD8CE] transition-all group cursor-pointer"
          >
            <YouktLogo
              className="h-5 sm:h-6 w-auto select-none"
              darkColor="#141517"
              yellowColor="#F6C445"
            />
            <span className="text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-full bg-[#FFF9E6] text-[#8B640A] border border-[#FCE29A]">
              AI
            </span>
          </button>

          {/* Desktop Capsule Navigation */}
          <nav className="hidden lg:flex items-center bg-white/95 backdrop-blur-md rounded-full p-1.5 border border-[#EAE6DF] shadow-[0_4px_16px_rgba(20,21,23,0.04)] gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => onSelectSection(link.id)}
                  className={`px-4 py-2 rounded-full text-xs transition-all font-semibold cursor-pointer relative ${
                    isActive
                      ? "bg-[#141517] text-white shadow-sm"
                      : "text-[#5E6168] hover:text-[#141517] hover:bg-[#F4F1EA]"
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#F6C445]" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Cluster */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* User Profile / Sign In Pill */}
            <button
              onClick={() => onSelectSection("resources")}
              className="flex items-center gap-2 px-3.5 py-1.5 bg-white hover:bg-[#F4F1EA] border border-[#EAE6DF] rounded-full shadow-[0_2px_6px_rgba(20,21,23,0.02)] transition-all text-xs font-semibold text-[#141517] cursor-pointer"
            >
              <span className="w-5 h-5 rounded-full bg-[#141517] text-white flex items-center justify-center text-[10px] font-bold">
                Y
              </span>
              <span className="hidden md:inline">Sign In</span>
            </button>

            {/* Primary Action Button (Yellow Accent Pill) */}
            <button
              onClick={() => onSelectSection("resources")}
              className="flex items-center gap-1.5 px-4 py-2 bg-[#F6C445] hover:bg-[#EDB735] text-[#141517] font-bold text-xs rounded-full shadow-[0_2px_10px_rgba(246,196,69,0.3)] hover:shadow-[0_4px_14px_rgba(246,196,69,0.45)] hover:-translate-y-0.5 transition-all cursor-pointer"
            >
              <span className="text-sm font-black leading-none">+</span>
              <span>Schedule a Demo</span>
            </button>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => onSelectSection("resources")}
              className="sm:hidden px-3 py-1.5 bg-[#F6C445] text-[#141517] font-bold text-xs rounded-full"
            >
              Demo
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 bg-white border border-[#EAE6DF] rounded-full text-[#141517] shadow-sm hover:bg-[#F4F1EA] focus:outline-none cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[#EAE6DF] bg-white/98 backdrop-blur-xl px-4 pt-3 pb-6 shadow-xl animate-align-in">
          <div className="space-y-1.5">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => {
                    onSelectSection(link.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2.5 rounded-full text-sm font-semibold transition-colors cursor-pointer flex items-center justify-between ${
                    isActive
                      ? "bg-[#141517] text-white shadow-sm"
                      : "text-[#5E6168] hover:bg-[#F4F1EA] hover:text-[#141517]"
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#F6C445]" />}
                </button>
              );
            })}
          </div>

          <div className="pt-4 mt-4 border-t border-[#EAE6DF] flex flex-col gap-2.5">
            <button
              onClick={() => {
                onSelectSection("resources");
                setMobileMenuOpen(false);
              }}
              className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-full text-sm font-bold text-[#141517] bg-[#F6C445] hover:bg-[#EDB735] shadow-sm transition-all cursor-pointer"
            >
              <span>+ Schedule a Demo</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => {
                onSelectSection("platform");
                setMobileMenuOpen(false);
              }}
              className="w-full text-center py-2.5 rounded-full text-xs font-semibold text-[#5E6168] bg-[#F4F1EA] hover:bg-[#EAE6DF] cursor-pointer"
            >
              Sign In
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
