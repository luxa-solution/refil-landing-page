"use client";

import { useRef } from "react";
import Image from "next/image";
import Button from "../ui/Button";
import { motion, useInView } from "framer-motion";
import ScrollReveal from "../animations/ScrollReveal";

interface FeaturesProps {
  onJoinClick: () => void;
}

export default function Features({ onJoinClick }: FeaturesProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const checklistItems = [
    "Reach More Customers",
    "Real-Time Orders",
    "Secure Payment",
    "Data insights"
  ];

  return (
    <section className="w-full overflow-hidden my-8 sm:my-12">
      <div className="bg-gray-50 mx-4 sm:mx-6 md:mx-8 lg:mx-12 xl:mx-auto xl:max-w-6xl rounded-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-8 md:pt-12 pb-0">
          <div className="flex flex-col md:grid md:grid-cols-2 md:items-end">
            
            {/* TEXT COLUMN */}
            <ScrollReveal direction="right" delay={0.1}>
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
                  Grow Your Gas Scales With Our Platform
                </h2>

                <p className="text-gray-600 mb-6">
                  Grow your gas business with confidence using our all-in-one vendor platform. 
                  Receive orders instantly from nearby customers, manage requests easily, 
                  and deliver gas reliably while we handle the technology and customer reach.
                </p>

                <ul className="space-y-3 mb-8">
                  {checklistItems.map((item, index) => (
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

            {/* IMAGE COLUMN  */}
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
                    alt="App Features"
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