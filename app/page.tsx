"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import ExclusiveBenefits from "@/components/sections/ExclusiveBenefits"; // Add this import
import Journey from "@/components/sections/Journey";
import Features from "@/components/sections/Features";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/layout/Footer";
import WaitlistModal from "@/components/ui/WaitlistModal";

export default function Home() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Navbar onJoinClick={() => setOpenModal(true)} />

      {/* Hero Section */}
      <Hero onJoinClick={() => setOpenModal(true)} />

      {/* Add gap after Hero */}
      <div className="mt-8 sm:mt-12"></div>

      {/* Exclusive Benefits Section - NEW */}
      <ExclusiveBenefits onJoinClick={() => setOpenModal(true)} />

      {/* Add gap after ExclusiveBenefits */}
      <div className="mt-8 sm:mt-12"></div>

      {/* Journey Section */}
      <Journey onJoinClick={() => setOpenModal(true)} />

      {/* Add gap after Journey */}
      <div className="mt-8 sm:mt-12"></div>

      {/* Features Section */}
      <Features onJoinClick={() => setOpenModal(true)} />

      {/* Add gap after Features */}
      <div className="mt-8 sm:mt-12"></div>

      {/* FAQ Section */}
      <FAQ />

      {/* Footer */}
      <Footer />

      {/* Waitlist Modal */}
      <WaitlistModal open={openModal} setOpen={setOpenModal} />
    </>
  );
}
