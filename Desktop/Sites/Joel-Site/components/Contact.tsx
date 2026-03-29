"use client";

import { useState, useRef } from "react";
import FadeIn from "./FadeIn";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    businessType: "",
    service: "",
    budget: "",
    message: "",
  });
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, message: "" });

    try {
      // Using Formspree - simple form backend
      const response = await fetch("https://formspree.io/f/xovqgqka", {
        method: "POST",
        body: new FormData(formRef.current!),
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus({
          type: "success",
          message:
            "Message sent successfully! We'll get back to you within 24 hours.",
        });
        setFormData({
          name: "",
          email: "",
          businessType: "",
          service: "",
          budget: "",
          message: "",
        });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      setStatus({
        type: "error",
        message:
          "Failed to send message. Please try again or email us directly at magalhaesjoel5@gmail.com",
      });
      console.error("Form error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header with Reciprocity Offer */}
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display mb-4">
              Ready to build something?
            </h2>
            <p className="text-textMuted font-light text-lg mb-6">
              Tell us about your project. We will get back to you within 24 hours.
            </p>

            {/* Free Offer - Reciprocity */}
            <div className="inline-block bg-gold/10 border border-gold/30 px-8 py-4 mt-4">
              <p className="text-gold font-medium mb-1">FREE Website Audit Included</p>
              <p className="text-textMuted text-sm font-light">
                Get actionable insights on how to improve your current site — no strings attached
              </p>
            </div>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Form - Takes 2 columns */}
          <div className="lg:col-span-2">
            {/* Status Messages */}
            {status.type && (
              <div
                className={`mb-6 p-4 border ${
                  status.type === "success"
                    ? "bg-green-900/20 border-green-500/50 text-green-300"
                    : "bg-red-900/20 border-red-500/50 text-red-300"
                }`}
              >
                {status.message}
              </div>
            )}

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Smith"
                  required
                  className="w-full bg-surface border border-border px-4 py-3 text-textPrimary placeholder:text-textMuted focus:border-gold focus:outline-none transition-colors"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@yourbusiness.com"
                  required
                  className="w-full bg-surface border border-border px-4 py-3 text-textPrimary placeholder:text-textMuted focus:border-gold focus:outline-none transition-colors"
                />
              </div>

              {/* Business Type */}
              <div>
                <label
                  htmlFor="businessType"
                  className="block text-sm font-medium mb-2"
                >
                  Business Type
                </label>
                <select
                  id="businessType"
                  name="businessType"
                  value={formData.businessType}
                  onChange={handleChange}
                  required
                  className="w-full bg-surface border border-border px-4 py-3 text-textPrimary focus:border-gold focus:outline-none transition-colors"
                >
                  <option value="">Select...</option>
                  <option value="restaurant">Restaurant / Café</option>
                  <option value="wellness">Wellness / Beauty</option>
                  <option value="retail">Retail / Shop</option>
                  <option value="professional">Professional Services</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Service */}
              <div>
                <label
                  htmlFor="service"
                  className="block text-sm font-medium mb-2"
                >
                  Service
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full bg-surface border border-border px-4 py-3 text-textPrimary focus:border-gold focus:outline-none transition-colors"
                >
                  <option value="">Select...</option>
                  <option value="website">Website Creation</option>
                  <option value="branding">Brand & Design</option>
                  <option value="social">Social Media</option>
                  <option value="package">Full Package</option>
                  <option value="unsure">Not sure yet</option>
                </select>
              </div>

              {/* Budget */}
              <div>
                <label
                  htmlFor="budget"
                  className="block text-sm font-medium mb-2"
                >
                  Budget
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  required
                  className="w-full bg-surface border border-border px-4 py-3 text-textPrimary focus:border-gold focus:outline-none transition-colors"
                >
                  <option value="">Select...</option>
                  <option value="500-800">€500–€800</option>
                  <option value="800-1500">€800–€1,500</option>
                  <option value="1500-3000">€1,500–€3,000</option>
                  <option value="3000+">€3,000+</option>
                  <option value="discuss">Let&apos;s discuss</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Tell me about your project
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="What do you do, who are your customers, what do you need?"
                  rows={5}
                  required
                  className="w-full bg-surface border border-border px-4 py-3 text-textPrimary placeholder:text-textMuted focus:border-gold focus:outline-none transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gold text-background px-8 py-4 font-medium hover:bg-goldLight transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* Direct Contact Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-display mb-4">Direct Contact</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-textMuted font-light mb-1">
                    Email
                  </p>
                  <a
                    href="mailto:magalhaesjoel5@gmail.com"
                    className="text-gold hover:text-goldLight transition-colors"
                  >
                    magalhaesjoel5@gmail.com
                  </a>
                </div>
                <div>
                  <p className="text-sm text-textMuted font-light mb-1">
                    Location
                  </p>
                  <p className="text-textPrimary">Luxembourg · Switzerland</p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-border">
              <p className="text-sm text-textMuted font-light leading-relaxed">
                Prefer email? Send your project details directly and we&apos;ll
                respond within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
