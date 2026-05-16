"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    company: "Google",
    role: "Senior Product Designer",
    period: "2022 - Present",
    description: "Leading design systems for Next-Gen productivity tools. Collaborative with cross-functional teams to deliver pixel-perfect solutions.",
  },
  {
    company: "Meta",
    role: "Product Designer",
    period: "2020 - 2022",
    description: "Designed core interactions for social discovery features. Improved user retention by 15% through data-driven design iterations.",
  },
  {
    company: "Airbnb",
    role: "UI/UX Intern",
    period: "2019 - 2020",
    description: "Assisted in redesigning the booking flow. Conducted user research and usability testing for new mobile features.",
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
    <section ref={containerRef} className="py-section-gap px-margin-x-mobile md:px-margin-x-desktop bg-white relative">
      <div className="max-w-container-max mx-auto">
        <div className="mb-24 text-center">
            <h2 className="text-[48px] md:text-[80px] font-bold tracking-tighter leading-none">
                Professional <br /> <span className="text-primary">Journey</span>
            </h2>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div 
            ref={lineRef}
            className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-primary/20 -translate-x-1/2 hidden md:block" 
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
                    className="glass-panel p-10 rounded-[2rem] border-primary/5 hover:border-primary/20 transition-colors"
                  >
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h3 className="text-[28px] font-bold text-on-surface">{exp.role}</h3>
                        <p className="text-primary font-bold uppercase tracking-widest text-[14px]">
                          {exp.company}
                        </p>
                      </div>
                      <span className="px-4 py-1 rounded-full bg-primary/5 text-primary text-[14px] font-bold">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-body-md text-on-surface-variant leading-relaxed">
                      {exp.description}
                    </p>
                  </motion.div>
                </div>

                {/* Dot */}
                <div className="relative z-10 w-4 h-4 rounded-full bg-primary border-4 border-white shadow-lg hidden md:block" />

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
