"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Contact from "@/components/sections/Contact"; // This has TopContactCard + FAQ + Form
import Footer from "@/components/layout/Footer";
import WaitlistModal from "@/components/ui/WaitlistModal";

export default function ContactPage() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Navbar onJoinClick={() => setOpenModal(true)} />
      <Contact /> {/* TopContactCard + FAQ + Form */}
      <Footer />
      <WaitlistModal open={openModal} setOpen={setOpenModal} />
    </>
  );
}
