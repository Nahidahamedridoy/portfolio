"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, GraduationCap, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";
import Magnetic from "./Magnetic";

const experienceData = [
  {
    title: "Frontend Developer",
    subtitle: "Freelance & Personal Projects",
    date: "2024 - Present",
    desc: "Developing high-end frontend applications using React, Next.js, and modern CSS frameworks."
  },
  {
    title: "NextJs Developer",
    subtitle: "Modern UI & Responsive Design",
    date: "2025 - Present",
    desc: "Specializing in component-driven development and creating interactive, animated user interfaces."
  },
  {
    title: "Web Developer",
    subtitle: "Building Responsive Websites",
    date: "2024 - Present",
    desc: "Crafting pixel-perfect, mobile-first websites with a focus on clean code and accessibility."
  },
];

const educationData = [
  {
    title: "BSC in Computer Science Engineering",
    subtitle: "Northern University",
    date: "2025 - Present",
  },
  {
    title: "HSC",
    subtitle: "Milestone College",
    date: "2023 - 2025",
  },
  {
    title: "SSC",
    subtitle: "Fazlul Haque Bidyaniketon",
    date: "2021 - 2023",
  },
];

const Qualification = () => {
  const [activeTab, setActiveTab] = useState("education");
  const containerRef = useRef(null);

  const data = activeTab === "experience" ? experienceData : educationData;

  return (
    <section
      ref={containerRef}
      id="qualification"
      className="py-section-gap px-margin-x-mobile md:px-margin-x-desktop bg-[#f8faff] relative overflow-hidden"
    >
      <div className="max-w-container-max mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-primary/5 text-primary text-[12px] font-bold uppercase tracking-[0.2em] mb-4 border border-primary/10"
          >
            Journey
          </motion.div>
          <h2 className="text-[48px] md:text-[64px] font-bold tracking-tighter mb-4 text-on-surface">Qualification</h2>
          <p className="text-on-surface-variant text-body-lg max-w-2xl mx-auto">
            My personal journey
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex justify-center gap-4 md:gap-8 mb-24">
          {[
            { id: "education", label: "Education", icon: GraduationCap },
            { id: "experience", label: "Experience", icon: Briefcase }
          ].map((tab) => (
            <Magnetic key={tab.id} strength={0.3}>
              <button
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "relative px-8 py-4 rounded-2xl flex items-center gap-3 text-[16px] font-bold transition-all duration-500 overflow-hidden",
                  activeTab === tab.id
                    ? "text-white shadow-xl shadow-primary/20"
                    : "text-on-surface-variant hover:text-on-surface hover:bg-primary/5"
                )}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="tab-bg-light"
                    className="absolute inset-0 bg-primary -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <tab.icon className={cn("w-5 h-5 transition-transform", activeTab === tab.id && "scale-110")} />
                {tab.label}
              </button>
            </Magnetic>
          ))}
        </div>

        {/* Vertical Timeline */}
        <div className="relative max-w-4xl mx-auto min-h-[600px]">
          {/* Central Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-primary/10 -translate-x-1/2 hidden md:block" />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "circOut" }}
              className="space-y-16"
            >
              {data.map((item, idx) => (
                <div
                  key={idx}
                  className={cn(
                    "relative flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0 w-full",
                    idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  )}
                >
                  {/* Timeline Card */}
                  <motion.div
                    initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: idx * 0.1 }}
                    className="w-full md:w-[calc(50%-40px)]"
                  >
                    <div className="glass-panel p-8 rounded-[2.5rem] border-primary/5 hover:border-primary/20 transition-all duration-500 shadow-xl shadow-blue-900/5 bg-white/60 backdrop-blur-xl group relative">
                      <div className="flex items-center gap-2 text-primary font-bold text-[12px] uppercase tracking-widest mb-4">
                        <Calendar className="w-3.5 h-3.5" />
                        {item.date}
                      </div>
                      <h3 className="text-[22px] font-bold mb-2 text-on-surface group-hover:text-primary transition-colors">{item.title}</h3>
                      <p className="text-on-surface-variant font-medium text-[15px] mb-4">{item.subtitle}</p>
                      {item.desc && (
                        <p className="text-on-surface-variant/70 text-[14px] leading-relaxed">
                          {item.desc}
                        </p>
                      )}
                    </div>
                  </motion.div>

                  {/* Central Dot */}
                  <div className="relative z-10 w-12 h-12 flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-primary border-4 border-white shadow-lg ring-4 ring-primary/5" />
                  </div>

                  {/* Spacer for other side */}
                  <div className="hidden md:block md:w-[calc(50%-40px)]" />
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-primary/[0.02] blur-[100px] rounded-full -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400/[0.02] blur-[120px] rounded-full -z-10" />
    </section>
  );
};

export default Qualification;
