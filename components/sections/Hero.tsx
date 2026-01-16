"use client";

import { useRef } from "react";
import Image from "next/image";
import Button from "../ui/Button";
import { motion, useInView } from "framer-motion";

interface HeroProps {
  onJoinClick: () => void;
}

export default function Hero({ onJoinClick }: HeroProps) {
  // Ref for scroll trigger
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="text-center px-4 sm:px-6 pt-12 sm:pt-16 pb-0 bg-[url('/images/hero.png')] bg-cover bg-center relative min-h-150 sm:min-h-175 mb-8 sm:mb-12">
      {/* Content area at top */}
      <div className="relative z-10">
        {/* Updated Launching Soon Badge */}
        <div className="inline-flex items-center justify-center gap-2 mb-4 rounded-full bg-orange-100 px-4 py-2">
          <div className="w-3 h-3 rounded-full bg-orange-500 relative flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
          </div>
          <span className="text-sm text-orange-500 font-medium">Launching soon</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-4xl font-bold max-w-2xl mx-auto">
          Get gas from your preferred vendor<br />
          Delivered to your door
        </h1>

        <p className="mt-4 text-sm sm:text-base text-gray-600 max-w-xl mx-auto">
          Order cooking gas safely from verified local vendors, choose who you trust,
          and get fast doorstep delivery without stress.
        </p>

        <div className="mt-6">
          <Button onClick={onJoinClick}>Join the waitlist</Button>
        </div>
      </div>

      {/* Mobile images with animation */}
      <div 
        ref={ref}
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full flex justify-center items-end overflow-hidden px-4"
      >
        {/* First Mobile Image - Slides up from bottom */}
        <motion.div 
          className="relative mr-2 sm:mr-12"
          initial={{ y: 100, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Image
            src="/images/mobileImage-1.png"
            alt="Gas vendor app screen"
            width={180}
            height={360}
            className="w-32 sm:w-45 h-auto"
          />
        </motion.div>

        {/* Main Center Mobile Image - Slides up with more delay */}
        <motion.div 
          className="relative mx-2 sm:mx-6"
          initial={{ y: 100, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Image
            src="/images/mobileImage-2.png"
            alt="Refil mobile app"
            width={200}
            height={400}
            className="w-36 sm:w-50 h-auto"
          />
        </motion.div>

        {/* Third Mobile Image - Slides up with most delay */}
        <motion.div 
          className="relative ml-2 sm:ml-12"
          initial={{ y: 100, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Image
            src="/images/mobileImage-3.png"
            alt="Order gas screen"
            width={180}
            height={360}
            className="w-32 sm:w-45 h-auto"
          />
        </motion.div>
      </div>
    </section>
  );
}


