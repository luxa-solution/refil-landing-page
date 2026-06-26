// components/layout/Navbar.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "../ui/Button";

interface NavbarProps {
  onJoinClick: () => void;
}

export default function Navbar({ onJoinClick }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <>
      {/* NAVBAR */}
      <div className="sticky top-0 z-50 w-full bg-white transition-all duration-300 shadow-sm">
        <nav 
          className={`w-full transition-all duration-300 ${
            scrolled ? "bg-white/95 backdrop-blur-sm shadow-md" : "bg-white"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
            <Link href="/">
              <Image
                src="/icons/refil_logo.png"
                alt="Refil logo"
                width={40}
                height={70}
                className="max-w-full h-16"
                priority
              />
            </Link>

            {/* Desktop Menu */}
            <ul className="hidden md:flex gap-10 text-sm text-gray-700">
              <li>
                <Link
                  href="/"
                  className={`transition-colors duration-200 hover:text-orange-500 ${
                    isActive("/") ? "text-orange-500 font-medium" : ""
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className={`transition-colors duration-200 hover:text-orange-500 ${
                    isActive("/contact") ? "text-orange-500 font-medium" : ""
                  }`}
                >
                  Contact Us
                </Link>
              </li>
            </ul>

            <div className="hidden md:block">
              <Button onClick={onJoinClick}>Join the waitlist</Button>
            </div>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center"
              onClick={() => setMenuOpen(true)}
            >
              ☰
            </button>
          </div>
        </nav>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="fixed inset-0 z-[100] bg-white w-screen max-w-full overflow-y-auto px-6 pt-8">
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-6 right-6 text-3xl"
          >
            ✕
          </button>

          <div className="mt-24 space-y-12 wrap-break-word">
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className={`block text-4xl font-bold ${
                isActive("/") ? "text-orange-500" : "text-gray-900"
              }`}
            >
              Home
            </Link>

            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className={`block text-4xl font-bold ${
                isActive("/contact") ? "text-orange-500" : "text-gray-900"
              }`}
            >
              Contact Us
            </Link>

            <button
              onClick={() => {
                setMenuOpen(false);
                onJoinClick();
              }}
              className="w-full rounded-full bg-orange-500 py-5 text-white text-lg font-medium"
            >
              Join the waitlist
            </button>
          </div>
        </div>
      )}
    </>
  );
}