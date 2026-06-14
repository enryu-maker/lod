"use client";

import { useState } from "react";
import { AtSign, Mail, MessageCircle } from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import { authInputClass } from "@/components/auth/shared";

const sectionX = "max-w-[1280px] mx-auto px-4 md:px-12 lg:px-20";

const contactCards = [
  {
    icon: MessageCircle,
    title: "Text Us",
    sub: "Fastest response. Always.",
    contact: "(857) 280-0992",
    contactClass: "text-[20px]",
    cta: "Send a Text",
    href: "tel:8572800992",
    response: "Response within 2 hours",
  },
  {
    icon: Mail,
    title: "Email Us",
    sub: "For detailed questions and account issues.",
    contact: "hello@lodvalet.com",
    contactClass: "text-lg",
    cta: "Send an Email",
    href: "mailto:hello@lodvalet.com",
    response: "Response within 4 hours",
  },
  {
    icon: AtSign,
    title: "Instagram",
    sub: "DMs open. We read every message.",
    contact: "@lodvalet",
    contactClass: "text-xl",
    cta: "Message Us",
    href: "https://instagram.com/lodvalet",
    external: true,
    response: "Response within 4 hours",
  },
] as const;

const businessHours = [
  { label: "Customer support", hours: "7AM – 8PM, 7 days a week" },
  { label: "Pickups and deliveries", hours: "7AM – 8PM, 7 days a week" },
] as const;

const textareaClass =
  "w-full min-h-[140px] px-4 py-3.5 rounded-lg bg-white border border-[#E8EAED] text-[#0A1628] font-sans font-normal text-sm placeholder:text-[#6B7280] focus:outline-none focus:ring-2 focus:ring-[#00C2A8] focus:border-transparent transition-shadow resize-y";

export default function ContactPageContent() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [orderNumber, setOrderNumber] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!name.trim() || !email.trim() || !message.trim()) {
      setError("Please fill in all required fields.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 800));
    setIsSubmitting(false);
    setSubmitted(true);
  };

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-[#0A1628] py-[60px] md:py-[100px] text-center">
        <div className={sectionX}>
          <p className="font-sans font-medium text-[11px] uppercase tracking-[0.15em] text-[#00C2A8] mb-4">
            Contact
          </p>
          <h1 className="font-heading font-bold text-[40px] md:text-[64px] text-white mb-4 leading-tight">
            We&apos;re here.
          </h1>
          <p className="font-heading font-normal text-lg md:text-xl text-white/65 max-w-xl mx-auto">
            Questions, issues, feedback. We respond fast.
            <br />
            Real humans. Not bots.
          </p>
        </div>
      </section>

      {/* Contact cards */}
      <Reveal as="section" className="py-12 md:py-20">
        <div className={`${sectionX} grid grid-cols-1 md:grid-cols-3 gap-6`}>
          {contactCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="bg-[#F4F6F8] rounded-2xl p-9 text-center transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
              >
                <Icon
                  className="w-12 h-12 text-[#00C2A8] mx-auto mb-5"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <h2 className="font-heading font-bold text-[22px] text-[#0A1628] mb-2">
                  {card.title}
                </h2>
                <p className="font-heading font-normal text-sm text-[#6B7280] mb-4">
                  {card.sub}
                </p>
                <p
                  className={`font-heading font-bold text-[#00C2A8] mb-6 ${card.contactClass}`}
                >
                  {card.contact}
                </p>
                <a
                  href={card.href}
                  {...("external" in card && card.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="inline-flex font-heading font-bold text-sm bg-[#00C2A8] text-[#0A1628] px-6 py-3 rounded-lg hover:bg-[#00C2A8]/90 transition-colors"
                >
                  {card.cta}
                </a>
                <p className="font-sans font-normal text-xs text-[#6B7280] mt-3">
                  {card.response}
                </p>
              </div>
            );
          })}
        </div>
      </Reveal>

      {/* Contact form */}
      <Reveal as="section" className="pb-12 md:pb-20">
        <div className="max-w-[640px] mx-auto px-4 md:px-12">
          <h2 className="font-heading font-bold text-[32px] text-[#0A1628] text-center mb-10">
            Send us a message
          </h2>

          {submitted ? (
            <div className="rounded-2xl border border-[#10B981]/30 bg-[#10B981]/10 p-8 text-center">
              <p className="font-heading font-bold text-lg text-[#10B981] mb-3">
                Message sent! We&apos;ll be in touch soon.
              </p>
              <p className="font-heading font-normal text-base text-[#0A1628] mb-2">
                We got your message. You&apos;ll hear from us within 2 hours.
              </p>
              <p className="font-sans font-normal text-sm text-[#6B7280]">
                For urgent order issues text{" "}
                <a href="tel:8572800992" className="text-[#00C2A8] hover:underline">
                  (857) 280-0992
                </a>{" "}
                directly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              {error && (
                <p
                  role="alert"
                  className="font-sans text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-3"
                >
                  {error}
                </p>
              )}

              <div>
                <label
                  htmlFor="contact-name"
                  className="font-sans font-medium text-sm text-[#0A1628] mb-2 block"
                >
                  Your name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={authInputClass}
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="font-sans font-medium text-sm text-[#0A1628] mb-2 block"
                >
                  Email address
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={authInputClass}
                />
              </div>

              <div>
                <label
                  htmlFor="contact-order"
                  className="font-sans font-medium text-sm text-[#0A1628] mb-2 block"
                >
                  Order number (optional)
                </label>
                <input
                  id="contact-order"
                  type="text"
                  placeholder="LOD-XXXXX"
                  value={orderNumber}
                  onChange={(e) => setOrderNumber(e.target.value)}
                  className={authInputClass}
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="font-sans font-medium text-sm text-[#0A1628] mb-2 block"
                >
                  How can we help?
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  placeholder="Tell us what's on your mind..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className={textareaClass}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-14 font-sans text-sm font-medium uppercase tracking-wider bg-[#00C2A8] text-[#00382f] hover:bg-[#00C2A8]/90 disabled:opacity-60 rounded-lg transition-all duration-200"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </div>
      </Reveal>

      {/* Business hours */}
      <Reveal as="section" className="bg-[#F4F6F8] py-12 md:py-[60px]">
        <div className={sectionX}>
          <h2 className="font-heading font-bold text-[28px] text-[#0A1628] mb-8">
            When we&apos;re available
          </h2>
          <dl className="max-w-xl space-y-4">
            {businessHours.map((row) => (
              <div
                key={row.label}
                className="flex flex-col sm:flex-row sm:justify-between gap-1"
              >
                <dt className="font-heading font-normal text-base text-[#6B7280]">
                  {row.label}
                </dt>
                <dd className="font-heading font-bold text-base text-[#0A1628]">
                  {row.hours}
                </dd>
              </div>
            ))}
          </dl>
          <p className="font-sans font-normal text-[13px] text-[#6B7280] italic mt-8 max-w-xl">
            Urgent order issues? Text us anytime. We monitor (857) 280-0992
            around the clock during launch.
          </p>
        </div>
      </Reveal>
    </div>
  );
}
