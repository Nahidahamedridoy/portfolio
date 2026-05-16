"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  SiJavascript, SiReact, SiNextdotjs, SiMongodb, 
  SiTailwindcss, SiGit, SiHtml5, SiCss, 
  SiFigma, SiDaisyui
} from "react-icons/si";
import { HiLightningBolt } from "react-icons/hi"; 
import { MdOutlineSecurity } from "react-icons/md"; 
import Magnetic from "./Magnetic";

const techStack = [
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", icon: SiCss, color: "#1572B6" },
  { name: "Hero UI", icon: HiLightningBolt, color: "#FF5733" },
  { name: "DaisyUI", icon: SiDaisyui, color: "#5ADFED" },
  { name: "Figma", icon: SiFigma, color: "#F24E1E" },
  { name: "Better Auth", icon: MdOutlineSecurity, color: "#3B82F6" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

const TechCard = ({ tech }) => {
  return (
    <Magnetic strength={0.2}>
      <motion.div
        variants={itemVariants}
        whileHover={{ 
          y: -10,
          transition: { duration: 0.3, ease: "easeOut" }
        }}
        className="group relative"
      >
        {/* Hover Glow Effect */}
        <div 
          className="absolute -inset-1 rounded-[2rem] opacity-0 group-hover:opacity-100 transition duration-500 blur-xl z-0"
          style={{ backgroundColor: `${tech.color}30` }}
        />
        
        {/* Card Content */}
        <div className="relative h-full glass-panel p-8 rounded-[2rem] flex flex-col items-center gap-6 border-white/20 group-hover:border-white/60 transition-all duration-500 overflow-hidden z-10 bg-white/30 backdrop-blur-2xl">
          <div 
            className="w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-inner"
            style={{ 
              backgroundColor: `${tech.color}10`,
              color: tech.color 
            }}
          >
            <tech.icon className="text-[32px]" />
          </div>
          
          <div className="text-center">
            <p className="font-bold text-on-surface text-[15px] tracking-tight group-hover:text-primary transition-colors">
              {tech.name}
            </p>
          </div>

          {/* Subtle bottom indicator */}
          <div 
            className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1 w-0 group-hover:w-1/2 transition-all duration-500 rounded-t-full"
            style={{ backgroundColor: tech.color }}
          />
        </div>
      </motion.div>
    </Magnetic>
  );
};

const Technologies = () => {
  return (
    <section id="technologies" className="py-section-gap px-margin-x-mobile md:px-margin-x-desktop bg-transparent relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none -z-10">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400/10 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: "2s" }} />
      </div>

      <div className="max-w-container-max mx-auto relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-5 py-1.5 rounded-full glass-panel mb-6 border-primary/20"
          >
            <span className="text-label-md text-primary font-bold uppercase tracking-[0.2em]">My Tech Stack</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[56px] md:text-[84px] font-extrabold tracking-tighter mb-4 leading-none text-on-surface"
          >
            Technologies
          </motion.h2>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8"
        >
          {techStack.map((tech, idx) => (
            <TechCard key={idx} tech={tech} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Technologies;
