"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  SiHtml5, SiCss, SiTailwindcss, SiJavascript, SiTypescript, SiReact, SiNextdotjs,
  SiNodedotjs, SiExpress,
  SiMongodb, SiFirebase,
  SiGit, SiGithub, SiPostman, SiVercel
} from "react-icons/si";
import { BiLogoVisualStudio } from "react-icons/bi";
import Magnetic from "./Magnetic";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS", icon: SiCss, color: "#1572B6" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express.js", icon: SiExpress, color: "#000000" },
    ]
  },
  {
    title: "Database",
    skills: [
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
    ]
  },
  {
    title: "Tools & Technologies",
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#181717" },
      { name: "VS Code", icon: BiLogoVisualStudio, color: "#007ACC" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      { name: "Vercel", icon: SiVercel, color: "#000000" },
    ]
  }
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
        className="group relative h-full"
      >
        {/* Hover Glow Effect */}
        <div 
          className="absolute -inset-1 rounded-[2rem] opacity-0 group-hover:opacity-100 transition duration-500 blur-xl z-0"
          style={{ backgroundColor: `${tech.color}30` }}
          aria-hidden="true"
        />
        
        {/* Card Content */}
        <div className="relative h-full glass-panel p-6 md:p-8 rounded-[2rem] flex flex-col items-center justify-center gap-4 md:gap-6 border-white/20 group-hover:border-white/60 transition-all duration-500 overflow-hidden z-10 bg-white/30 backdrop-blur-2xl">
          <div 
            className="w-12 h-12 md:w-16 md:h-16 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-inner"
            style={{ 
              backgroundColor: `${tech.color}10`,
              color: tech.color 
            }}
            aria-hidden="true"
          >
            <tech.icon className="text-[28px] md:text-[32px]" />
          </div>
          
          <div className="text-center">
            <p className="font-bold text-on-surface text-[14px] md:text-[15px] tracking-tight group-hover:text-primary transition-colors">
              {tech.name}
            </p>
          </div>

          {/* Subtle bottom indicator */}
          <div 
            className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1.5 w-0 group-hover:w-1/2 transition-all duration-500 rounded-t-full"
            style={{ backgroundColor: tech.color }}
            aria-hidden="true"
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

        <div className="space-y-16 md:space-y-24">
          {skillCategories.map((category, catIdx) => (
            <div key={catIdx} className="space-y-8">
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-[24px] md:text-[32px] font-bold text-on-surface text-center md:text-left"
              >
                {category.title}
              </motion.h3>
              
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-8"
              >
                {category.skills.map((tech, idx) => (
                  <TechCard key={idx} tech={tech} />
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
