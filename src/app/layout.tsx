import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Youkt | Autonomous Multi-Agent AI Orchestration Platform",
  description:
    "Youkt unifies modern ATS workflows, client CRM, automated skill assessments, and stateful AI Copilot orchestration into one lightning-fast, enterprise-secure platform.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#FAF8F5] text-[#141517] min-h-screen selection:bg-[#F6C445]/30 selection:text-[#141517]">
        {children}
      </body>
    </html>
  );
}
