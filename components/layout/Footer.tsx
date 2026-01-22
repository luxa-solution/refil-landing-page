"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "../animations/ScrollReveal";

export default function Footer() {
  return (
    <footer className="border-t mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid gap-12 md:grid-cols-3 items-start">
          
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
                  href="https://instagram.com" 
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

          {/* CENTER - Slides up */}
          <ScrollReveal direction="up" delay={0.2}>
            <div className="flex flex-col gap-6 text-sm text-gray-700 md:items-center">
              <div className="flex flex-wrap gap-6">
                <Link href="/" className="cursor-pointer hover:text-black transition-colors hover:scale-105 transform duration-200 inline-block">
                  Home
                </Link>
                <span className="cursor-pointer hover:text-black transition-colors hover:scale-105 transform duration-200 inline-block">
                  About Us
                </span>
                <Link href="/contact" className="cursor-pointer hover:text-black transition-colors hover:scale-105 transform duration-200 inline-block">
                  Contact Us
                </Link>
                <span className="cursor-pointer hover:text-black transition-colors hover:scale-105 transform duration-200 inline-block">
                  Our Partners
                </span>
              </div>

              <div className="flex gap-6 text-gray-500">
                <span className="cursor-pointer hover:text-black transition-colors hover:scale-105 transform duration-200 inline-block">
                  Terms & privacy
                </span>
                <span className="cursor-pointer hover:text-black transition-colors hover:scale-105 transform duration-200 inline-block">
                  Privacy
                </span>
              </div>
            </div>
          </ScrollReveal>

          {/* RIGHT - Slides from right */}
          <ScrollReveal direction="right" delay={0.3}>
            <div className="flex flex-col gap-6 text-sm text-gray-500 md:items-end">
              <p>© Refil 2026 - All Rights Reserved by Refil</p>
              <span className="cursor-pointer text-gray-700 hover:text-black transition-colors hover:scale-105 transform duration-200 inline-block">
                Join the waitlist
              </span>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </footer>
  );
}


