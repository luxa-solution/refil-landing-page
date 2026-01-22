// app/page.tsx
"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import ExclusiveBenefits from "@/components/sections/ExclusiveBenefits";
import Journey from "@/components/sections/Journey";
import Features from "@/components/sections/Features";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/layout/Footer";
import WaitlistModal from "@/components/ui/WaitlistModal";
import Providers from "@/components/layout/Providers";
import ScrollReveal from "@/components/animations/ScrollReveal";

export default function Home() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Providers />
      <Navbar onJoinClick={() => setOpenModal(true)} />

      {/* Hero Section */}
      <Hero onJoinClick={() => setOpenModal(true)} />

      {/* Add gap after Hero */}
      <div className="mt-8 sm:mt-12"></div>

      {/* Exclusive Benefits Section - Slides in from right */}
      <ScrollReveal direction="right" delay={0.1}>
        <ExclusiveBenefits onJoinClick={() => setOpenModal(true)} />
      </ScrollReveal>

      {/* Add gap after ExclusiveBenefits */}
      <div className="mt-8 sm:mt-12"></div>

      {/* Journey Section - Slides in from left */}
      <ScrollReveal direction="left" delay={0.1}>
        <Journey onJoinClick={() => setOpenModal(true)} />
      </ScrollReveal>

      {/* Add gap after Journey */}
      <div className="mt-8 sm:mt-12"></div>

      {/* Features Section - Slides up from bottom */}
      <ScrollReveal direction="up" delay={0.2}>
        <Features onJoinClick={() => setOpenModal(true)} />
      </ScrollReveal>

      {/* Add gap after Features */}
      <div className="mt-8 sm:mt-12"></div>

      {/* FAQ Section - Fade in */}
      <ScrollReveal direction="fade" delay={0.3}>
        <FAQ />
      </ScrollReveal>

      {/* Footer - Slides up from bottom */}
      <ScrollReveal direction="up" delay={0.1}>
        <Footer />
      </ScrollReveal>

      {/* Waitlist Modal */}
      <WaitlistModal open={openModal} setOpen={setOpenModal} />
    </>
  );
}
