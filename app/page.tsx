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

      {/* Exclusive Benefits Section */}
      <ScrollReveal direction="right" delay={0.1}>
        <ExclusiveBenefits onJoinClick={() => setOpenModal(true)} />
      </ScrollReveal>

      {/* Add gap after ExclusiveBenefits */}
      <div className="mt-8 sm:mt-12"></div>

      {/* Journey Section */}
      <ScrollReveal direction="left" delay={0.1}>
        <Journey onJoinClick={() => setOpenModal(true)} />
      </ScrollReveal>

      {/* Add gap after Journey */}
      <div className="mt-8 sm:mt-12"></div>

      {/* Features Section */}
      <ScrollReveal direction="up" delay={0.2}>
        <Features onJoinClick={() => setOpenModal(true)} />
      </ScrollReveal>

      {/* Add gap after Features */}
      <div className="mt-8 sm:mt-12"></div>

      {/* FAQ Section */}
      <ScrollReveal direction="fade" delay={0.3}>
        <FAQ />
      </ScrollReveal>

      {/* Footer */}
      <Footer onJoinClick={() => setOpenModal(true)} />

      {/* Waitlist Modal */}
      <WaitlistModal open={openModal} setOpen={setOpenModal} />
    </>
  );
}