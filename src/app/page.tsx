import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Features from "@/components/Features";
import Simulator from "@/components/Simulator";
import Workflow from "@/components/Workflow";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#141517] selection:bg-[#F6C445]/30 selection:text-[#141517]">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Features />
        <Simulator />
        <Workflow />
        <Pricing />
        <Testimonials />
        <Faq />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
}
