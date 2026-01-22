"use client";

import { useState } from "react";
import Image from "next/image";

interface FaqItemProps {
  question: string;
  answer: string;
  icon: string;
}

export default function FaqItem({ question, answer, icon }: FaqItemProps) {
  const [open, setOpen] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <div className="bg-gray-100 rounded-full px-6 py-5 shadow-[0_6px_24px_rgba(0,0,0,0.06)] transition">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="flex items-center justify-between w-full text-left focus:outline-none"
      >
        <div className="flex items-center gap-4">
          {/* Icon with error handling */}
          <div className="size-8 shrink-0">
            {!hasError && icon ? (
              <Image
                src={icon}
                alt="FAQ icon"
                width={32}
                height={32}
                className="size-full object-contain"
                onError={() => setHasError(true)}
                onLoad={() => setHasError(false)}
              />
            ) : (
              <div className="size-full rounded-full bg-orange-500 flex items-center justify-center">
                <span className="text-white text-sm font-bold">
                  {icon?.match(/icon-(\d+)/)?.[1] || "?"}
                </span>
              </div>
            )}
          </div>

          <span className="text-gray-900 font-medium">
            {question}
          </span>
        </div>

        <span className="text-xl font-semibold text-gray-900">
          {open ? "−" : "+"}
        </span>
      </button>

      {open && (
        <p className="mt-4 pl-12 text-gray-600 text-sm leading-relaxed">
          {answer}
        </p>
      )}
    </div>
  );
}



