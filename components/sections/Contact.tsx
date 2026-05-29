"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiSend,
  FiGithub,
  FiLinkedin,
} from "react-icons/fi";
import SectionWrapper from "../SectionWrapper";

const contactInfo = [
  {
    icon: FiMail,
    label: "Email",
    value: "taqihaider591@gmail.com",
    link: "mailto:taqihaider591@gmail.com",
  },
  {
    icon: FiPhone,
    label: "Phone",
    value: "+92-330-287-7064",
    link: "tel:+923302877064",
  },
  { icon: FiMapPin, label: "Location", value: "Karachi, Pakistan", link: null },
];

const socialLinks = [
  {
    icon: FiGithub,
    label: "GitHub",
    link: "https://github.com/Muhammad-Taqi-Dev",
  },
  {
    icon: FiLinkedin,
    label: "LinkedIn",
    link: "https://linkedin.com/in/taqih1",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <SectionWrapper
      id="contact"
      className="bg-[#080d18] relative overflow-hidden"
    >
      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(6,182,212,1) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Ambient glow orbs — boosted */}
      <div className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-cyan-500/12 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
      {/* Centered heading spotlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-64 bg-cyan-500/8 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-cyan-500 font-mono text-sm tracking-[0.35em] uppercase mb-3">
            // get.in.touch
          </p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-[-0.03em] mb-4">
            <span className="text-white">Let's</span>{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              talk.
            </span>
          </h2>
          <p className="text-gray-400 font-body text-base max-w-lg mx-auto">
            Have a project in mind or want to discuss opportunities? I'm open.
          </p>
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-cyan-500/60" />
            <div className="w-2 h-2 rounded-full bg-cyan-400" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-cyan-500/60" />
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-14">
          {/* ── LEFT: Contact info + socials ──────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h3 className="text-white font-display font-bold text-lg mb-6 tracking-[-0.01em]">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: index * 0.08 }}
                    className="flex items-center gap-4 group"
                  >
                    {/* Smaller icon box */}
                    <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 group-hover:bg-cyan-500/15 group-hover:border-cyan-500/35 transition-all duration-300 flex-shrink-0">
                      <info.icon className="text-cyan-400 text-base" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm font-mono uppercase tracking-wider mb-0.5">
                        {info.label}
                      </p>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-gray-300 hover:text-cyan-400 transition-colors font-medium text-sm"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-300 font-medium text-sm">
                          {info.value}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social links */}
            <div>
              <h4 className="text-gray-400 text-sm font-mono uppercase tracking-widest mb-4">
                Connect
              </h4>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    whileHover={{ scale: 1.12, y: -3 }}
                    whileTap={{ scale: 0.92 }}
                    className="p-3 rounded-xl border border-white/8 bg-white/3 text-gray-400 hover:text-cyan-400 hover:border-cyan-500/30 hover:bg-cyan-500/10 transition-all duration-300"
                  >
                    <social.icon className="text-xl" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability note */}
            <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-4">
              <div className="flex items-center gap-2 mb-1">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                </span>
                <span className="text-emerald-400 font-semibold text-sm">
                  Currently available
                </span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Open to Backend &amp; Full Stack roles — remote or
                Karachi-based.
              </p>
            </div>
          </motion.div>

          {/* ── RIGHT: Form ───────────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-white/[0.12] bg-white/[0.05] backdrop-blur-sm p-7 md:p-9 space-y-5"
            >
              <div className="grid md:grid-cols-2 gap-5">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-gray-400 text-sm font-mono uppercase tracking-wider mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm placeholder-gray-600 focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/30 focus:outline-none transition-all duration-300"
                  />
                </div>
                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-400 text-sm font-mono uppercase tracking-wider mb-2"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm placeholder-gray-600 focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/30 focus:outline-none transition-all duration-300"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-gray-400 text-sm font-mono uppercase tracking-wider mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Project Discussion"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm placeholder-gray-600 focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/30 focus:outline-none transition-all duration-300"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-400 text-sm font-mono uppercase tracking-wider mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Tell me about your project or inquiry..."
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm placeholder-gray-600 focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/30 focus:outline-none transition-all duration-300 resize-none"
                />
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                disabled={status === "sending"}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 disabled:from-gray-700 disabled:to-gray-700 text-white font-semibold text-sm rounded-xl transition-all duration-300 flex items-center justify-center gap-2.5 shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40"
              >
                {status === "sending" ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : status === "success" ? (
                  <span>✓ Message sent!</span>
                ) : (
                  <>
                    <FiSend className="text-base" />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>

              {status === "success" && (
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-emerald-400 text-center text-sm font-medium"
                >
                  Thank you! I'll get back to you soon.
                </motion.p>
              )}
              {status === "error" && (
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-400 text-center text-sm font-medium"
                >
                  Oops! Something went wrong. Please try again.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
