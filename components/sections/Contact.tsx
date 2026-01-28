"use client";

import { useState } from "react";
import { FaUser, FaEnvelope, FaFileAlt, FaPaperPlane } from "react-icons/fa";
import FaqItem from "./FaqItem";
import { faqs } from "./faqData";
import TopContactCard from "./TopContactCard";
import ScrollReveal from "../animations/ScrollReveal";
import { submitContactForm } from "@/lib/contact-api";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim()) {
      setStatus({ type: "error", message: "Please enter your name" });
      return;
    }
    if (!formData.email.trim()) {
      setStatus({ type: "error", message: "Please enter your email" });
      return;
    }
    if (!formData.subject.trim()) {
      setStatus({ type: "error", message: "Please enter a subject" });
      return;
    }
    if (!formData.message.trim()) {
      setStatus({ type: "error", message: "Please enter your message" });
      return;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus({ type: "error", message: "Please enter a valid email address" });
      return;
    }

    setLoading(true);
    setStatus({ type: null, message: "" });

    try {
      const result = await submitContactForm(formData);
      
      if (result.success) {
        setStatus({ 
          type: "success", 
          message: result.message || "✅ Message sent successfully! We'll get back to you soon." 
        });
        
  
        setFormData({ 
          name: "", 
          email: "", 
          subject: "", 
          message: "" 
        });
        
      
        setTimeout(() => {
          setStatus({ type: null, message: "" });
        }, 5000);
      } else {
        setStatus({ 
          type: "error", 
          message: result.message || "Failed to send message. Please try again." 
        });
      }
    } catch (error) {
      setStatus({ 
        type: "error", 
        message: "An unexpected error occurred. Please try again." 
      });
    } finally {
      setLoading(false);
    }
  };

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
              <form onSubmit={handleSubmit} className="space-y-6">
                
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

                {/* FULL NAME */}
                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Full Name *
                  </label>
                  <div className="relative mt-2">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                      <FaUser size={20} />
                    </div>
                    <input
                      type="text"
                      name="name"
                      placeholder="John Mercie Brown"
                      value={formData.name}
                      onChange={handleChange}
                      disabled={loading}
                      className="w-full rounded-xl border border-gray-200 pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 disabled:bg-gray-100"
                      required
                    />
                  </div>
                </div>

                {/* EMAIL */}
                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Email *
                  </label>
                  <div className="relative mt-2">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                      <FaEnvelope size={20} />
                    </div>
                    <input
                      type="email"
                      name="email"
                      placeholder="johnmercy03@gmail.com"
                      value={formData.email}
                      onChange={handleChange}
                      disabled={loading}
                      className="w-full rounded-xl border border-gray-200 pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 disabled:bg-gray-100"
                      required
                    />
                  </div>
                </div>

                {/* SUBJECT */}
                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Subject *
                  </label>
                  <div className="relative mt-2">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                      <FaFileAlt size={20} />
                    </div>
                    <input
                      type="text"
                      name="subject"
                      placeholder="How can we help you?"
                      value={formData.subject}
                      onChange={handleChange}
                      disabled={loading}
                      className="w-full rounded-xl border border-gray-200 pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 disabled:bg-gray-100"
                      required
                    />
                  </div>
                </div>

                {/* MESSAGE */}
                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    placeholder="Type your message here"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    disabled={loading}
                    className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-orange-500 disabled:bg-gray-100"
                    required
                  />
                </div>

                {/* BUTTON */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-orange-500 text-white font-semibold py-4 rounded-full flex items-center justify-center gap-2 hover:bg-orange-600 transition disabled:bg-orange-300 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <FaPaperPlane />
                    </>
                  )}
                </button>

                <p className="text-xs text-gray-500 text-center mt-4">
                  * Required fields. We'll respond to your message within 24 hours.
                </p>
              </form>
            </div>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}
