"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaLinkedin, FaGithub, FaFacebook, FaEnvelope, FaPhone } from "react-icons/fa";
import Magnetic from "./Magnetic";

const socialLinks = [
  { name: "GitHub", icon: FaGithub, href: "https://github.com/Nahidahamedridoy", color: "#181717" },
  { name: "LinkedIn", icon: FaLinkedin, href: "https://linkedin.com/in/nahid-ahamed-ridoy", color: "#0077B5" },
  { name: "Facebook", icon: FaFacebook, href: "https://facebook.com/nahidahamedridoy", color: "#1877F2" },
];

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length === 0) {
      // Client-side validation passed
      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
      setTimeout(() => setIsSubmitted(false), 5000);
    } else {
      setErrors(newErrors);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  return (
    <section id="contact" className="py-section-gap px-margin-x-mobile md:px-margin-x-desktop bg-white relative overflow-hidden">
      <div className="max-w-container-max mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-5 py-1.5 rounded-full glass-panel mb-6 border-primary/20"
          >
            <span className="text-label-md text-primary font-bold uppercase tracking-[0.2em]">Let's Talk</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[48px] md:text-[84px] font-extrabold tracking-tighter leading-none text-on-surface"
          >
            Get in touch
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-12"
          >
            <div>
              <h3 className="text-[28px] md:text-[36px] font-bold tracking-tight mb-6">
                Don't be shy!
              </h3>
              <p className="text-[18px] text-on-surface-variant leading-relaxed max-w-md">
                Feel free to get in touch with me. I am always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
              </p>
            </div>

            <div className="space-y-6">
              <a href="mailto:nahidahamedridoy@gmail.com" className="group flex items-center gap-6 p-6 rounded-2xl glass-panel border border-primary/5 hover:border-primary/20 transition-all duration-300">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <FaEnvelope size={24} />
                </div>
                <div>
                  <p className="text-[13px] font-bold text-on-surface-variant uppercase tracking-widest mb-1">Mail me</p>
                  <p className="text-[18px] font-bold text-on-surface group-hover:text-primary transition-colors">nahidahamedridoy@gmail.com</p>
                </div>
              </a>

              <a href="tel:+8801841964561" className="group flex items-center gap-6 p-6 rounded-2xl glass-panel border border-primary/5 hover:border-primary/20 transition-all duration-300">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <FaPhone size={24} />
                </div>
                <div>
                  <p className="text-[13px] font-bold text-on-surface-variant uppercase tracking-widest mb-1">Call me</p>
                  <p className="text-[18px] font-bold text-on-surface group-hover:text-primary transition-colors">+880 1841-964561</p>
                </div>
              </a>
            </div>

            <div className="pt-6 border-t border-primary/10">
              <p className="text-[13px] font-bold text-on-surface-variant uppercase tracking-widest mb-6">Follow Me</p>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social, idx) => (
                  <Magnetic key={idx} strength={0.4}>
                    <a 
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-14 h-14 rounded-full glass-panel flex items-center justify-center text-on-surface-variant hover:text-white transition-all duration-300 relative overflow-hidden group"
                      aria-label={social.name}
                    >
                      <social.icon className="text-[22px] relative z-10" />
                      <div 
                        className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"
                        style={{ backgroundColor: social.color }}
                      />
                    </a>
                  </Magnetic>
                ))}
                <Magnetic strength={0.4}>
                    <a 
                      href="https://wa.me/8801841964561"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-14 h-14 rounded-full glass-panel flex items-center justify-center text-on-surface-variant hover:text-white transition-all duration-300 relative overflow-hidden group"
                      aria-label="WhatsApp"
                    >
                      <FaWhatsapp className="text-[22px] relative z-10" />
                      <div 
                        className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out bg-[#25D366]"
                      />
                    </a>
                  </Magnetic>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-8 md:p-12 rounded-[2.5rem] bg-white/50 backdrop-blur-3xl border border-primary/10 shadow-2xl shadow-blue-900/5 relative"
          >
            {isSubmitted && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/95 backdrop-blur-md rounded-[2.5rem] z-20 transition-all duration-500">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6 shadow-xl shadow-green-100/50">
                  <span className="material-symbols-outlined text-[40px]">check_circle</span>
                </div>
                <h3 className="text-[28px] font-bold text-on-surface mb-2">Message Sent!</h3>
                <p className="text-on-surface-variant text-center max-w-[250px]">
                  Thank you for reaching out. I'll get back to you as soon as possible.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10">
              
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-[13px] font-bold text-on-surface-variant uppercase tracking-widest pl-4">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full bg-white/60 border ${errors.name ? 'border-red-500' : 'border-primary/10 focus:border-primary/30'} px-6 py-4 rounded-2xl outline-none focus:ring-4 focus:ring-primary/5 transition-all text-on-surface placeholder:text-on-surface-variant/50`}
                  placeholder="John Doe"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && <span id="name-error" className="text-red-500 text-[13px] font-medium pl-4">{errors.name}</span>}
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-[13px] font-bold text-on-surface-variant uppercase tracking-widest pl-4">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full bg-white/60 border ${errors.email ? 'border-red-500' : 'border-primary/10 focus:border-primary/30'} px-6 py-4 rounded-2xl outline-none focus:ring-4 focus:ring-primary/5 transition-all text-on-surface placeholder:text-on-surface-variant/50`}
                  placeholder="john@example.com"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && <span id="email-error" className="text-red-500 text-[13px] font-medium pl-4">{errors.email}</span>}
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-[13px] font-bold text-on-surface-variant uppercase tracking-widest pl-4">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full bg-white/60 border ${errors.message ? 'border-red-500' : 'border-primary/10 focus:border-primary/30'} px-6 py-4 rounded-2xl outline-none focus:ring-4 focus:ring-primary/5 transition-all text-on-surface placeholder:text-on-surface-variant/50 resize-none`}
                  placeholder="Hi, I think we need a design system for our products..."
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "message-error" : undefined}
                />
                {errors.message && <span id="message-error" className="text-red-500 text-[13px] font-medium pl-4">{errors.message}</span>}
              </div>

              <button
                type="submit"
                className="group relative bg-primary text-white text-[16px] font-bold px-8 py-4 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/20 flex justify-center items-center gap-3 mt-4"
              >
                <span className="relative z-10">Send Message</span>
                <span className="material-symbols-outlined relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">send</span>
              </button>

            </form>
          </motion.div>

        </div>
      </div>

      {/* Decorative Blobs */}
      <div className="absolute w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-[100px] -bottom-40 -left-20 pointer-events-none" />
      <div className="absolute w-[400px] h-[400px] bg-purple-100/40 rounded-full blur-[100px] top-20 -right-20 pointer-events-none" />
    </section>
  );
};

export default Contact;
