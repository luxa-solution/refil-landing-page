"use client";

import { Dispatch, SetStateAction, useState, useRef } from "react";
import { FaUser, FaEnvelope, FaPhone, FaTimes } from "react-icons/fa";
import { joinWaitlist } from "@/lib/api";

interface ModalProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export default function WaitlistModal({ open, setOpen }: ModalProps) {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: ""
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });
  
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  if (!open) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.first_name.trim()) {
      setStatus({ type: "error", message: "Please enter your first name" });
      return;
    }
    if (!formData.last_name.trim()) {
      setStatus({ type: "error", message: "Please enter your last name" });
      return;
    }
    if (!formData.email || !emailRegex.test(formData.email)) {
      setStatus({ type: "error", message: "Please enter a valid email address" });
      return;
    }
    if (!formData.phone.trim()) {
      setStatus({ type: "error", message: "Please enter your phone number" });
      return;
    }

    // Nigerian phone validation
    const phone = formData.phone.trim().replace(/[^\d+]/g, '');
    if (!phone.match(/^(\+234|0)[789]\d{9}$/) && !phone.match(/^[789]\d{9}$/)) {
      setStatus({ 
        type: "error", 
        message: "Please enter a valid Nigerian phone number (e.g., 08012345678 or +2348012345678)" 
      });
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
      const result = await joinWaitlist(formData);
      
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
      
      if (result.success) {
        setStatus({ 
          type: "success", 
          message: result.message || "🎉 Thank you! You're on the waitlist." 
        });
        setFormData({
          first_name: "",
          last_name: "",
          email: "",
          phone: ""
        });
        
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
        timeoutRef.current = null;
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
      timeoutRef.current = null;
    }
    
    if (!loading) {
      setOpen(false);
      setFormData({
        first_name: "",
        last_name: "",
        email: "",
        phone: ""
      });
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
          <FaTimes />
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
          Be among the first to access Refil and receive updates on our launch and new features.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* First Name */}
          <div>
            <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 mb-2 text-left">
              First Name *
            </label>
            <div className="relative">
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                <FaUser size={20} />
              </div>
              <input
                id="first-name"
                name="first_name"
                type="text"
                placeholder="John"
                value={formData.first_name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-full pl-12 pr-4 py-3
                focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 shadow-sm
                disabled:bg-gray-100 disabled:cursor-not-allowed"
                disabled={loading}
                required
              />
            </div>
          </div>

          {/* Last Name */}
          <div>
            <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 mb-2 text-left">
              Last Name *
            </label>
            <div className="relative">
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                <FaUser size={20} />
              </div>
              <input
                id="last-name"
                name="last_name"
                type="text"
                placeholder="Doe"
                value={formData.last_name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-full pl-12 pr-4 py-3
                focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 shadow-sm
                disabled:bg-gray-100 disabled:cursor-not-allowed"
                disabled={loading}
                required
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label htmlFor="waitlist-email" className="block text-sm font-medium text-gray-700 mb-2 text-left">
              Email *
            </label>
            <div className="relative">
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                <FaEnvelope size={20} />
              </div>
              <input
                id="waitlist-email"
                name="email"
                type="email"
                placeholder="john.doe@example.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-full pl-12 pr-4 py-3
                focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 shadow-sm
                disabled:bg-gray-100 disabled:cursor-not-allowed"
                disabled={loading}
                required
              />
            </div>
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2 text-left">
              Phone Number *
            </label>
            <div className="relative">
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                <FaPhone size={20} />
              </div>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="08012345678"
                value={formData.phone}
                onChange={handleChange}
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
