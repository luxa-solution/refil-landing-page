"use client";

import { useRef } from "react";
import Image from "next/image";
import Button from "../ui/Button";
import { motion, useInView } from "framer-motion";
import ScrollReveal from "../animations/ScrollReveal";

export default function Journey({ onJoinClick }: { onJoinClick: () => void }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const journeyItems = [
    "Fast & Reliable Delivery",
    "Flexible Ordering Options",
    "Trusted Local Vendors",
    "Built for Homes & Businesses"
  ];

  return (
    <section className="w-full overflow-hidden my-8 sm:my-12">
      <div className="bg-gray-50 mx-4 sm:mx-6 md:mx-8 lg:mx-12 xl:mx-auto xl:max-w-6xl rounded-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-8 md:pt-12 pb-0">
          {/* Mobile: Stacked layout, Desktop: Grid layout */}
          <div className="flex flex-col md:grid md:grid-cols-2 md:items-end">
            {/* Text column  */}
            <ScrollReveal direction="left" delay={0.1}>
              <div className="pb-8 md:pb-12">
                <div className="mb-6">
                  <Image
                    src="/icons/refil-logo-2.png"
                    alt="Refil"
                    width={90}
                    height={30}
                  />
                </div>
                
                <h2 className="text-3xl font-bold mb-6">
                  Your gas ordering journey starts here
                </h2>
                
                <p className="text-gray-600 mb-6">
                  Order gas with confidence using our all-in-one platform. 
                  Select trusted vendors, order instantly, and enjoy reliable 
                  doorstep delivery, anytime you need it.
                </p>
                
                <ul className="space-y-3 mb-8">
                  {journeyItems.map((item, index) => (
                    <motion.li 
                      key={item}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ 
                        duration: 0.4,
                        delay: 0.2 + (index * 0.1),
                        ease: "easeOut"
                      }}
                    >
                      <Image
                        src="/icons/checklist.png"
                        alt="Check"
                        width={20}
                        height={20}
                      />
                      <span className="text-gray-700">{item}</span>
                    </motion.li>
                  ))}
                </ul>

                <ScrollReveal direction="up" delay={0.6}>
                  <Button onClick={onJoinClick}>Join the waitlist</Button>
                </ScrollReveal>
              </div>
            </ScrollReveal>

            {/* Image column */}
            <div ref={ref} className="relative mt-8 md:mt-0">
              <div className="md:absolute md:bottom-0 w-full">
                <motion.div
                  initial={{ y: 100, opacity: 0, rotate: 0 }}
                  animate={isInView ? { 
                    y: 0, 
                    opacity: 1,
                    rotate: [0, -5, 5, -5, 5, 0]
                  } : { y: 100, opacity: 0 }}
                  transition={{ 
                    y: { 
                      duration: 0.6,
                      ease: [0.21, 0.47, 0.32, 0.98]
                    },
                    rotate: { 
                      delay: 0.6, 
                      duration: 0.8,
                      times: [0, 0.2, 0.4, 0.6, 0.8, 1],
                      ease: "easeInOut"
                    }
                  }}
                >
                  <Image
                    src="/images/mobileImage-4.png"
                    alt="Preview"
                    width={280}
                    height={560}
                    className="mx-auto max-w-full h-auto"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



