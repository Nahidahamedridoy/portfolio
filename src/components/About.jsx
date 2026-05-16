"use client";

import React from "react";
import { motion } from "framer-motion";
import Magnetic from "./Magnetic";

const skills = [
  { name: "HTML/CSS", level: 100 },
  { name: "Tailwind CSS", level: 95 },
  { name: "JavaScript", level: 85 },
  { name: "React.js", level: 80 },
  { name: "Next.js", level: 85 },
  { name: "MongoDB", level: 80 },
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
            <p className="text-body-lg text-on-surface-variant leading-relaxed">
              I’m a passionate <span className="text-on-surface font-bold">Frontend & Web Developer</span> focused on creating seamless, user-friendly digital solutions. My approach blends aesthetic excellence with technical precision to build clean, maintainable applications that resonate with users.
            </p>
            <p className="text-body-lg text-on-surface-variant leading-relaxed">
              With a deep understanding of modern frameworks like <span className="text-primary font-medium">Next.js</span> and <span className="text-primary font-medium">React</span>, I specialize in transforming complex problems into intuitive interfaces. I thrive in collaborative environments and am constantly refining my stack to stay at the forefront of web innovation.
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
                className="inline-flex items-center gap-4 bg-primary text-white px-8 md:px-10 py-4 md:py-5 rounded-2xl font-bold hover:shadow-2xl hover:shadow-primary/30 transition-all duration-500 active:scale-95 group"
              >
                Download Resume
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <span className="material-symbols-outlined text-[18px]">download</span>
                </div>
              </a>
            </Magnetic>
          </motion.div>
        </div>
        
        {/* Right Content - Skills */}
        <motion.div variants={itemVariants} className="lg:col-span-5 w-full">
          <div className="glass-panel p-8 md:p-12 rounded-[2.5rem] border-primary/5 shadow-2xl shadow-blue-900/5 bg-white/40 backdrop-blur-xl">
            <h3 className="text-[22px] md:text-[24px] font-bold mb-10 flex items-center gap-3 text-on-surface">
              Technical Expertise
              <div className="h-[2px] flex-grow bg-gradient-to-r from-primary/20 to-transparent"></div>
            </h3>
            
            <div className="space-y-8">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between items-end mb-3">
                    <span className="font-bold text-on-surface tracking-tight">{skill.name}</span>
                    <span className="text-primary font-bold text-[14px]">{skill.level}%</span>
                  </div>
                  <div className="h-[7px] bg-primary/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "circOut", delay: 0.2 }}
                      className="h-full bg-primary rounded-full relative"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent" />
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 rounded-2xl bg-primary/[0.03] border border-primary/5">
              <p className="text-[14px] text-on-surface-variant leading-relaxed italic">
                "Continuous learning is the key to creating impactful digital experiences that drive value and innovation."
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
