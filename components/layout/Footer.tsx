// components/layout/footer.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "../ui/Button";
import ScrollReveal from "../animations/ScrollReveal";

interface FooterProps {
  onJoinClick?: () => void;
}

export default function Footer({ onJoinClick }: FooterProps) {
  return (
    <footer className="border-t mt-8 sm:mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid gap-12 md:grid-cols-2 items-start">
          
          {/* LEFT - Slides from left */}
          <ScrollReveal direction="left" delay={0.1}>
            <div>
              <div className="flex items-center gap-2">
                <Image
                  src="/icons/refil_logo.png"
                  alt="Refil"
                  width={35}
                  height={30}
                />
              </div>

              <p className="text-sm text-gray-600 mt-6 max-w-sm">
                Your Trusted Platform to Order Gas from Vendors You Know
              </p>

              <div className="flex gap-5 mt-6">
                {/* Twitter */}
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity hover:scale-110 transform duration-200"
                >
                  <Image src="/icons/twitter-icon.png" alt="X" width={18} height={18} />
                </a>
                
                {/* Instagram */}
                <a 
                  href="https://www.instagram.com/refil.gas/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity hover:scale-110 transform duration-200"
                >
                  <Image src="/icons/instagram-icon.png" alt="Instagram" width={18} height={18} />
                </a>
                
                {/* LinkedIn */}
                <a 
                  href="https://www.linkedin.com/company/refilgas" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity hover:scale-110 transform duration-200"
                >
                  <Image src="/icons/linkind-icon.png" alt="LinkedIn" width={18} height={18} />
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* RIGHT - Slides from right (Left aligned) */}
          <ScrollReveal direction="right" delay={0.3}>
            <div className="flex flex-col gap-6 text-sm md:items-start">
              {/* Only Home and Contact Us links */}
              <div className="flex flex-wrap gap-6">
                <Link href="/" className="cursor-pointer hover:text-black transition-colors hover:scale-105 transform duration-200 inline-block text-gray-700">
                  Home
                </Link>
                <Link href="/contact" className="cursor-pointer hover:text-black transition-colors hover:scale-105 transform duration-200 inline-block text-gray-700">
                  Contact Us
                </Link>
              </div>
              
              {/* Copyright text - Left aligned */}
              <p className="text-gray-500">© Refil 2026 - All Rights Reserved by Refil</p>
              
              {/* Join the waitlist as a BUTTON */}
              {onJoinClick && (
                <Button 
                  onClick={onJoinClick}
                  className="mt-2"
                >
                  Join the waitlist
                </Button>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </footer>
  );
}


