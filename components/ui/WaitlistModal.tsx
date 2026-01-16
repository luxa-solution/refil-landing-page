"use client";

import { Dispatch, SetStateAction } from "react";
import Image from "next/image";

interface ModalProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export default function WaitlistModal({ open, setOpen }: ModalProps) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="waitlist-title"
    >
      <div className="bg-white rounded-2xl p-8 max-w-md w-full relative shadow-xl">
        <button
          aria-label="Close modal"
          onClick={() => setOpen(false)}
          className="absolute right-4 top-4 text-xl text-gray-500 hover:text-gray-700"
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
          Be among the first to access Refil and receive updates on our launch and new features.
        </p>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2 text-left">
            Email
          </label>
          
          <div className="relative">
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
              <Image
                src="/icons/mail-icon.png"
                alt="Email"
                width={20}
                height={20}
                className="text-gray-400"
              />
            </div>
            <input
              type="email"
              aria-label="Email address"
              placeholder="johnmercy03@gmail.com"
              className="w-full border border-gray-300 rounded-full pl-12 pr-4 py-3
              focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 shadow-sm"
            />
          </div>
        </div>

        <button className="w-full bg-orange-500 text-white rounded-full py-3 font-medium hover:bg-orange-600 transition shadow-md hover:shadow-lg">
          Join the waitlist
        </button>
      </div>
    </div>
  );
}
