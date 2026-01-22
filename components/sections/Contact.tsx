"use client";

import Image from "next/image";
import FaqItem from "./FaqItem";
import { faqs } from "./faqData";
import TopContactCard from "./TopContactCard";
import ScrollReveal from "../animations/ScrollReveal";

export default function Contact() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-24">
      <div className="hidden md:block mb-20">
        <ScrollReveal direction="down" delay={0.1}>
          <TopContactCard />
        </ScrollReveal>
      </div>


      <div className="flex flex-col md:grid md:grid-cols-2 md:gap-16 md:items-start">
        
        {/* FAQ */}
        <div className="order-1 md:order-1 mb-12 md:mb-0">
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <ScrollReveal 
                key={faq.id} 
                direction="left" 
                delay={0.1 + (index * 0.05)}
                once={true}
              >
                <FaqItem
                  question={faq.question}
                  answer={faq.answer}
                  icon={faq.icon}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Top Contact Card */}
        <div className="order-2 md:hidden mb-12">
          <ScrollReveal direction="up" delay={0.2}>
            <TopContactCard /> 
          </ScrollReveal>
        </div>

        {/* Contact Form  */}
        <div className="order-3 md:order-2">
          <ScrollReveal direction="right" delay={0.3}>
            <div className="bg-white rounded-3xl p-6 md:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
              <form className="space-y-6">

                {/* FULL NAME */}
                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Full Name
                  </label>

                  <div className="relative mt-2">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5">
                      <Image
                        src="/icons/user-icon.png"
                        alt="User"
                        width={20}
                        height={20}
                        className="w-full h-auto"
                      />
                    </div>
                    <input
                      type="text"
                      placeholder="John Mercie Brown"
                      className="w-full rounded-xl border border-gray-200 pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                </div>

                {/* EMAIL */}
                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Email
                  </label>

                  <div className="relative mt-2">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5">
                      <Image
                        src="/icons/mail-icon.png"
                        alt="Mail"
                        width={20}
                        height={20}
                        className="w-full h-auto"
                      />
                    </div>
                    <input
                      type="email"
                      placeholder="johnmercy03@gmail.com"
                      className="w-full rounded-xl border border-gray-200 pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                </div>

                {/* MESSAGE */}
                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Message
                  </label>

                  <textarea
                    placeholder="Type your message here"
                    rows={5}
                    className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>

                {/* BUTTON */}
                <button
                  type="submit"
                  className="
                    w-full
                    bg-orange-500
                    text-white
                    font-semibold
                    py-4
                    rounded-full
                    flex
                    items-center
                    justify-center
                    gap-2
                    hover:bg-orange-600
                    transition
                  "
                >
                  Send Message
                  <div className="w-5 h-5">
                    <Image
                      src="/icons/message-icon.png"
                      alt="Message"
                      width={18}
                      height={18}
                      className="w-full h-auto"
                    />
                  </div>
                </button>

              </form>
            </div>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}
