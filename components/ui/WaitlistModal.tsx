"use client";

import { Dispatch, SetStateAction } from "react";

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
      <div className="bg-white rounded-2xl p-8 max-w-md w-full relative">
        <button
          aria-label="Close modal"
          onClick={() => setOpen(false)}
          className="absolute right-4 top-4 text-xl"
        >
          ✕
        </button>

        <span className="inline-block mb-4 rounded-full bg-orange-100 px-4 py-1 text-sm text-orange-600">
          ● Launching soon
        </span>

        <h2 id="waitlist-title" className="text-3xl font-bold mb-2">
          Join the waitlist
        </h2>

        <p className="text-gray-600 mb-6">
          Obtain early access to our program and remain informed about release announcements.
        </p>

        <input
          type="email"
          aria-label="Email address"
          placeholder="Enter your email"
          className="w-full border rounded-full px-4 py-3 mb-4
          focus:outline-none focus:ring-2 focus:ring-orange-500"
        />

        <button className="w-full bg-orange-500 text-white rounded-full py-3 font-medium hover:bg-orange-600 transition">
          Join the waitlist
        </button>
      </div>
    </div>
  );
}

