"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  FiCode, FiLayout, FiSmartphone, FiAward, 
  FiTrendingUp, FiCheckCircle, FiZap, FiBookOpen 
} from "react-icons/fi";
import Magnetic from "./Magnetic";

const stats = [
  { label: "Projects Built",       value: "30+",        icon: FiAward },
  { label: "Started Coding",       value: "Late 2024",  icon: FiZap },
  { label: "Current Focus",        value: "Next.js",    icon: FiTrendingUp },
  { label: "Career Goal",          value: "Full Stack", icon: FiCheckCircle },
];

const services = [
  {
    title: "Frontend Development",
    desc: "Building modern, responsive web applications with React and Next.js, focused on clean code and great UX.",
    icon: FiCode,
  },
  {
    title: "Responsive Web Design",
    desc: "Crafting mobile-first layouts that look and feel great across every screen size and device.",
    icon: FiSmartphone,
  },
  {
    title: "UI Implementation",
    desc: "Turning designs into precise, accessible, and performant React components with attention to detail.",
    icon: FiLayout,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const Showcase = () => {
  return (
    <section id="services" className="py-section-gap px-margin-x-mobile md:px-margin-x-desktop bg-white relative overflow-hidden">
      <div className="max-w-container-max mx-auto relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12"
        >
          {/* Mini About Card */}
          <motion.div variants={itemVariants} className="lg:col-span-5">
            <div className="h-full glass-panel p-10 rounded-[2.5rem] bg-gradient-to-br from-white via-white to-blue-50/30 border-primary/5 flex flex-col justify-between shadow-2xl shadow-blue-900/5">
              <div>
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary to-blue-400"></div>
                </div>
                <h3 className="text-[32px] md:text-[40px] font-bold tracking-tighter mb-6 leading-tight text-on-surface">
                  Building for the <br /> <span className="text-primary">modern web.</span>
                </h3>
                <p className="text-body-md text-on-surface-variant leading-relaxed">
                  I'm <span className="font-bold text-on-surface">Nahid Ahamed</span>, a Frontend Developer who started coding in late 2024 and quickly developed a strong passion for building modern, user-friendly web experiences. I'm on a focused path toward becoming a Full Stack Developer.
                </p>
              </div>
              <div className="mt-12 flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-primary/20" />
                  ))}
                </div>
                <p className="text-[12px] font-extrabold text-primary tracking-widest uppercase">Open to Opportunities</p>
              </div>
            </div>
          </motion.div>

          {/* Stats & Services Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, idx) => (
              <motion.div key={idx} variants={itemVariants}>
                <Magnetic strength={0.1}>
                  <div className="h-full glass-panel p-10 rounded-[2.5rem] border-primary/5 hover:border-primary/20 transition-all duration-500 group bg-white/40">
                    <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <service.icon className="text-primary text-[24px]" />
                    </div>
                    <h3 className="text-[20px] font-bold mb-4 tracking-tight text-on-surface">{service.title}</h3>
                    <p className="text-[14px] text-on-surface-variant leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                </Magnetic>
              </motion.div>
            ))}

            {/* Currently Learning */}
            <motion.div variants={itemVariants}>
              <div className="h-full glass-panel p-10 rounded-[2.5rem] bg-secondary text-white border-transparent shadow-2xl shadow-secondary/10">
                <div className="flex items-center gap-3 mb-6">
                  <FiBookOpen className="text-white" />
                  <span className="text-[11px] font-extrabold tracking-[0.2em] uppercase">Currently Learning</span>
                </div>
                <ul className="space-y-4">
                  {["Advanced Next.js", "TypeScript", "Authentication", "Performance Optimization"].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-[14px] font-medium opacity-80">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Stats Row */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
        >
          {stats.map((stat, idx) => (
            <motion.div key={idx} variants={itemVariants} className="glass-panel p-8 rounded-[2rem] border-primary/5 text-center bg-white/30 backdrop-blur-sm">
              <div className="flex justify-center mb-4">
                <stat.icon className="text-primary/40 text-[20px]" />
              </div>
              <p className="text-[32px] font-extrabold text-on-surface tracking-tighter mb-1">{stat.value}</p>
              <p className="text-[11px] font-bold text-on-surface-variant uppercase tracking-widest opacity-60">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 -right-24 w-96 h-96 bg-primary/[0.03] blur-[100px] rounded-full -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 -left-24 w-96 h-96 bg-blue-400/[0.03] blur-[100px] rounded-full -z-10 animate-pulse" style={{ animationDelay: "2s" }} />
    </section>
  );
};

export default Showcase;
