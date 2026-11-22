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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@600;700;800;900&family=Plus+Jakarta+Sans:wght@600;700;800;900&family=Space+Grotesk:wght@600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-[#FFFFFF] text-[#141517] min-h-screen selection:bg-[#F6C445]/35 selection:text-[#141517]">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
