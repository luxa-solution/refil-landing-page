"use client";

import { Dispatch, SetStateAction, useState, useRef } from "react";
import Image from "next/image";
import { joinWaitlist } from "@/lib/api";

interface ModalProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export default function WaitlistModal({ open, setOpen }: ModalProps) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });
  const timeoutRef = useRef<NodeJS.Timeout>();

  if (!open) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      setStatus({ type: "error", message: "Please enter a valid email address" });
      return;
    }

    setLoading(true);
    setStatus({ type: null, message: "" });


    timeoutRef.current = setTimeout(() => {
      if (loading) {
        setStatus({ 
          type: "error", 
          message: "⏳ Taking longer than expected. Please wait..." 
        });
      }
    }, 4000);

    try {
      const result = await joinWaitlist(email);
      
      // Clear timeout if request completes
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      
      if (result.success) {
        setStatus({ 
          type: "success", 
          message: result.message || "Thank you! You're on the waitlist." 
        });
        setEmail("");
        
        setTimeout(() => {
          setOpen(false);
          setStatus({ type: null, message: "" });
        }, 2500);
      } else {
        setStatus({ 
          type: "error", 
          message: result.message || "Unable to process your request." 
        });
      }
    } catch (error) {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      
      setStatus({ 
        type: "error", 
        message: "An unexpected error occurred. Please try again." 
      });
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    if (!loading) {
      setOpen(false);
      setEmail("");
      setStatus({ type: null, message: "" });
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="waitlist-title"
      onClick={handleClose}
    >
      <div 
        className="bg-white rounded-2xl p-8 max-w-md w-full relative shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          aria-label="Close modal"
          onClick={handleClose}
          className="absolute right-4 top-4 text-xl text-gray-500 hover:text-gray-700 transition"
          disabled={loading}
        >
          ✕
        </button>

        <div className="text-center mb-4">
          <span className="inline-flex items-center justify-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-sm text-black font-medium shadow-sm">
            <div className="w-4 h-4 rounded-full bg-orange-500 relative flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-black"></div>
            </div>
            Launching soon
          </span>
        </div>

        <h2 id="waitlist-title" className="text-3xl font-bold mb-2 text-center">
          Join the waitlist
        </h2>

        <p className="text-gray-600 mb-6 text-center">
          Be among the first to access Refil and receive updates on our launch.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="waitlist-email" className="block text-sm font-medium text-gray-700 mb-2 text-left">
              Email
            </label>
            
            <div className="relative">
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                <Image
                  src="/icons/mail-icon.png"
                  alt="Email"
                  width={20}
                  height={20}
                />
              </div>
              <input
                id="waitlist-email"
                type="email"
                aria-label="Email address"
                placeholder="johnmercy03@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 rounded-full pl-12 pr-4 py-3
                focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 shadow-sm
                disabled:bg-gray-100 disabled:cursor-not-allowed"
                disabled={loading}
                required
              />
            </div>
          </div>

          {/* Status Message */}
          {status.type && (
            <div className={`p-3 rounded-lg text-sm text-center animate-fadeIn ${
              status.type === "success" 
                ? "bg-green-50 text-green-700 border border-green-200" 
                : "bg-red-50 text-red-700 border border-red-200"
            }`}>
              {status.message}
            </div>
          )}

          <button 
            type="submit"
            className="w-full bg-orange-500 text-white rounded-full py-3 font-medium 
            hover:bg-orange-600 transition-all duration-200 shadow-md hover:shadow-lg
            disabled:bg-orange-300 disabled:cursor-not-allowed disabled:shadow-none
            flex items-center justify-center gap-2"
            disabled={loading}
          >
            {loading ? (
              <>
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span>Processing...</span>
              </>
            ) : (
              <span>Join the waitlist</span>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
