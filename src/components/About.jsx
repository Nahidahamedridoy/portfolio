"use client";

import React from "react";
import { motion } from "framer-motion";
import Magnetic from "./Magnetic";

import { FiMonitor, FiCode, FiZap, FiGlobe, FiCpu, FiBookOpen } from "react-icons/fi";

const highlights = [
  { icon: FiMonitor, label: "Responsive UI Development", desc: "Pixel-perfect layouts across all screen sizes" },
  { icon: FiCode,    label: "Clean & Maintainable Code", desc: "Readable, well-structured and scalable codebases" },
  { icon: FiGlobe,  label: "REST API Integration",       desc: "Seamless connection between frontend and backend" },
  { icon: FiZap,    label: "Performance Optimization",   desc: "Fast load times and smooth user experiences" },
  { icon: FiCpu,    label: "Problem Solving",            desc: "Breaking down complex challenges into clean solutions" },
  { icon: FiBookOpen, label: "Continuous Learning",      desc: "Always growing with the latest web technologies" },
];

const badges = [
  "Responsive",
  "Creative",
  "Fast Learner",
  "Problem Solver",
  "Team Player",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

const About = () => {
  return (
    <section id="about" className="py-section-gap px-margin-x-mobile md:px-margin-x-desktop bg-white relative overflow-hidden">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start"
      >
        {/* Left Content */}
        <div className="lg:col-span-7">
          <motion.div variants={itemVariants} className="mb-8">
             <h2 className="text-[40px] md:text-[64px] font-bold tracking-tighter leading-[1.1] mb-8 text-on-surface">
              Building <span className="text-primary">modern</span> and <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">responsive</span> web experiences.
            </h2>
          </motion.div>
          
          <motion.div variants={itemVariants} className="space-y-6">
            <p className="text-[16px] md:text-[18px] text-on-surface-variant leading-relaxed">
              Hi, I'm <span className="text-on-surface font-bold">Nahid Ahamed</span>, a dedicated <span className="text-on-surface font-bold">Frontend Developer</span>. My programming journey began in late 2024, and since then, I have developed a strong passion for building modern, responsive, and user-friendly web applications.
            </p>
            <p className="text-[16px] md:text-[18px] text-on-surface-variant leading-relaxed">
              While my primary interest lies in Frontend and Full Stack Development, my current focus is mastering <span className="text-primary font-medium">Next.js</span> and continuously improving my <span className="text-primary font-medium">TypeScript</span> skills. My long-term goal is to transition into a proficient Full Stack Developer.
            </p>
            <p className="text-[16px] md:text-[18px] text-on-surface-variant leading-relaxed">
              Outside of writing code, I enjoy gaming, traveling, and playing cricket.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-3 mt-12">
            {badges.map((badge) => (
              <Magnetic key={badge} strength={0.2}>
                <span className="px-5 py-2.5 rounded-full border border-outline-variant/30 text-on-surface-variant text-[13px] md:text-[14px] font-bold uppercase tracking-wider hover:border-primary hover:text-primary transition-all duration-500 cursor-default bg-white">
                  {badge}
                </span>
              </Magnetic>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="mt-12">
            <Magnetic strength={0.4}>
              <a 
                href="/resume.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 bg-primary text-white px-8 md:px-10 py-4 md:py-5 rounded-2xl font-bold hover:shadow-2xl hover:shadow-primary/30 transition-all duration-500 active:scale-95 group"
                aria-label="Download Resume (opens in a new tab)"
              >
                <span>Download Resume</span>
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center group-hover:bg-white/30 transition-colors" aria-hidden="true">
                  <span className="material-symbols-outlined text-[18px]">download</span>
                </div>
              </a>
            </Magnetic>
          </motion.div>
        </div>
        
        {/* Right Content - Professional Highlights */}
        <motion.div variants={itemVariants} className="lg:col-span-5 w-full">
          <div className="glass-panel p-8 md:p-12 rounded-[2.5rem] border-primary/5 shadow-2xl shadow-blue-900/5 bg-white/40 backdrop-blur-xl">
            <h3 className="text-[22px] md:text-[24px] font-bold mb-10 flex items-center gap-3 text-on-surface">
              Professional Highlights
              <div className="h-[2px] flex-grow bg-gradient-to-r from-primary/20 to-transparent" />
            </h3>

            <ul className="space-y-5">
              {highlights.map(({ icon: Icon, label, desc }) => (
                <li
                  key={label}
                  className="group flex items-start gap-4 p-4 rounded-2xl hover:bg-primary/[0.04] transition-colors duration-300"
                >
                  <div className="mt-0.5 w-9 h-9 flex-shrink-0 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <Icon size={17} />
                  </div>
                  <div>
                    <p className="text-[15px] font-bold text-on-surface leading-snug">{label}</p>
                    <p className="text-[13px] text-on-surface-variant mt-0.5 leading-relaxed">{desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8 p-5 rounded-2xl bg-primary/[0.03] border border-primary/5">
              <p className="text-[13px] text-on-surface-variant leading-relaxed italic">
                "The best code is the code that solves real problems — clearly, efficiently, and with the user always in mind."
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
      
      {/* Decorative background element */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/[0.03] blur-[120px] rounded-full -z-10" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-400/[0.03] blur-[120px] rounded-full -z-10" />
    </section>
  );
};

export default About;
