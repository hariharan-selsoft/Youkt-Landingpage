import type { Metadata } from "next";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

export const metadata: Metadata = {
  title: "Youkt | Multi-Tenant Recruiting Workspace",
  description:
    "Youkt brings Client CRM, Candidate CRM, Job Orders, custom pipelines, technical assessments, interview scheduling, offers, onboarding, and a Candidate Careers Portal into one role-scoped platform.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#FFFFFF] text-[#141517] min-h-screen selection:bg-[#F6C445]/35 selection:text-[#141517]">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
