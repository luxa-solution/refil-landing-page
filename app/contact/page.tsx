"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import WaitlistModal from "@/components/ui/WaitlistModal";
import Providers from "@/components/layout/Providers";

export default function ContactPage() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Providers />
      <Navbar onJoinClick={() => setOpenModal(true)} />
      
      {/* Navbar → Form: mb-12 already inside Contact component */}
      <Contact />
      
      {/* FAQ → Footer: mt-16 (64px gap) */}
      <div className="mt-16"></div>
      <Footer onJoinClick={() => setOpenModal(true)} />
      
      <WaitlistModal open={openModal} setOpen={setOpenModal} />
    </>
  );
}