"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    company: "Continuous Learning",
    role: "Frontend Development Journey",
    period: "2024",
    description: "Started learning web development, building a strong foundation in modern web technologies. Focused on creating responsive, accessible, and performant user interfaces using HTML, CSS, JavaScript, and Tailwind CSS.",
  },
  {
    company: "Personal Projects",
    role: "React.js Applications",
    period: "2024",
    description: "Developed interactive single-page applications focusing on state management, component reusability, and API integrations. Built fully functional web apps that solve real-world problems.",
  },
  {
    company: "Skill Advancement",
    role: "Next.js & TypeScript Focus",
    period: "Present",
    description: "Currently mastering Next.js for server-side rendering, routing, and full-stack capabilities. Concurrently improving TypeScript skills to write more robust, type-safe, and maintainable code.",
  },
];

const Experience = () => {
  const containerRef = useRef(null);
  const lineRef = useRef(null);


  useEffect(() => {
    const ctx = gsap.context(() => {
      // Timeline line animation
      gsap.from(lineRef.current, {
        scaleY: 0,
        transformOrigin: "top",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%",
          end: "bottom 80%",
          scrub: true,
        },
      });

      // Cards animation
      gsap.from(".exp-card", {
        x: (i) => (i % 2 === 0 ? -50 : 50),
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="experience" className="py-section-gap px-margin-x-mobile md:px-margin-x-desktop bg-white relative">
      <div className="max-w-container-max mx-auto">
        <div className="mb-24 text-center">
          <div className="inline-block px-5 py-1.5 rounded-full glass-panel mb-6 border-primary/20">
            <span className="text-label-md text-primary font-bold uppercase tracking-[0.2em]">My Journey</span>
          </div>
          <h2 className="text-[48px] md:text-[80px] font-bold tracking-tighter leading-none">
            Development <br /> <span className="text-primary">Journey</span>
          </h2>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div 
            ref={lineRef}
            className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-primary/20 -translate-x-1/2 hidden md:block" 
            aria-hidden="true"
          />

          <div className="space-y-24">
            {experiences.map((exp, idx) => (
              <div 
                key={idx} 
                className={`exp-card flex flex-col md:flex-row items-center gap-12 ${
                  idx % 2 !== 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Content Card */}
                <div className="md:w-1/2 w-full">
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="glass-panel p-8 md:p-10 rounded-[2rem] border-primary/5 hover:border-primary/20 transition-colors"
                  >
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-6 gap-4 sm:gap-0">
                      <div>
                        <h3 className="text-[24px] md:text-[28px] font-bold text-on-surface leading-tight mb-1">{exp.role}</h3>
                        <p className="text-primary font-bold uppercase tracking-wider text-[13px] md:text-[14px]">
                          {exp.company}
                        </p>
                      </div>
                      <span className="inline-block self-start px-4 py-1.5 rounded-full bg-primary/5 text-primary text-[12px] md:text-[14px] font-bold">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-[16px] md:text-[17px] text-on-surface-variant leading-relaxed">
                      {exp.description}
                    </p>
                  </motion.div>
                </div>

                {/* Dot */}
                <div className="relative z-10 w-4 h-4 rounded-full bg-primary border-4 border-white shadow-lg hidden md:block" aria-hidden="true" />

                {/* Spacer */}
                <div className="md:w-1/2 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
