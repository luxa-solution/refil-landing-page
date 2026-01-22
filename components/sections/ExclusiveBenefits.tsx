"use client";

import Image from "next/image";
import Button from "../ui/Button";
import ScrollReveal from "../animations/ScrollReveal";

const benefits = [
  {
    title: "Doorstep Gas Delivery",
    description:
      "Order cooking gas anytime and get it delivered directly to your home or business—no queues, no last-minute stress.",
  },
  {
    title: "Flexible Vendor Choice",
    description:
      "Choose from trusted gas vendors based on availability, pricing, or preference, giving you more control over every order.",
  },
  {
    title: "Faster, Reliable Refills",
    description:
      "Schedule refills or place instant orders to avoid running out of gas, with reliable delivery you can count on.",
  },
  {
    title: "Safe & Verified Supply",
    description:
      "Get gas from vetted vendors, ensuring proper handling, accurate measurements, and safer deliveries every time.",
  },
];

export default function ExclusiveBenefits({
  onJoinClick,
}: {
  onJoinClick: () => void;
}) {
  return (
    <section className="w-full bg-gray-50 py-24 my-8 sm:my-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header with animation */}
        <ScrollReveal direction="down" delay={0.1}>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Exclusive benefits
            </h2>
            <p className="text-gray-600">
              Join the Refil waitlist and be part of the first community to
              experience smarter gas ordering.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <ScrollReveal 
              key={benefit.title} 
              direction="up" 
              delay={0.2 + (index * 0.1)}
              once={true}
            >
              <div className="relative bg-white rounded-3xl px-6 pt-10 pb-10 text-center shadow-sm hover:shadow-md transition-shadow duration-300 h-full flex flex-col">
                <div className="flex justify-center mb-6">
                  <Image
                    src="/icons/mark-icon.png"
                    alt="Check mark"
                    width={48}
                    height={48}
                    className="size-12"
                  />
                </div>

                <h3 className="text-orange-500 font-semibold mb-4">
                  {benefit.title}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed grow">
                  {benefit.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA Button with animation */}
        <ScrollReveal direction="up" delay={0.6}>
          <div className="flex justify-center mt-20">
            <Button onClick={onJoinClick}>
              Join the waitlist
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}