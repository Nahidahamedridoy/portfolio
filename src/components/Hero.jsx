"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import Image from "next/image";
import { Download } from "lucide-react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import Magnetic from "./Magnetic";

const typingTexts = [
  "Frontend Developer",
  "Full Stack Developer,",
  "Web Developer",
  "Nextjs Developer",
];

const Hero = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const [index, setIndex] = useState(0);

  const { scrollY } = useScroll();
  
  const y1 = useTransform(scrollY, [0, 500], [0, -100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -50]);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % typingTexts.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!titleRef.current) return;

    const ctx = gsap.context(() => {
      // Split text reveal simulation
      gsap.from(".reveal-item", {
        y: 100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.1,
        ease: "power4.out",
        delay: 0.5,
      });

      // Floating animation for image
      gsap.to(".hero-image", {
        y: -20,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-[90vh] flex items-center px-margin-x-mobile md:px-margin-x-desktop pt-24 md:pt-0"
    >
      <div className="max-w-container-max mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-gutter items-center relative z-10">
        {/* Left Content */}
        <div className="md:col-span-8 z-20 text-center md:text-left">
          <div className="reveal-item inline-block px-6 py-2 rounded-full glass-panel mb-8 border-primary/10">
            <p className="text-[14px] text-primary font-bold tracking-[0.1em] uppercase">
              Frontend & Web Developer
            </p>
          </div>
          
          <div className="mb-8">
            <h1 className="reveal-item text-[40px] md:text-[72px] font-black text-on-surface leading-[1.1] tracking-tighter">
              Nahid Ahamed <br className="md:hidden" />
              <span className="text-primary relative inline-block text-[32px] md:text-[56px] mt-2 md:mt-4">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={index}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="inline-block"
                  >
                    {typingTexts[index]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </h1>
          </div>

          <p className="reveal-item text-[18px] md:text-[20px] text-on-surface-variant mb-8 max-w-lg leading-relaxed">
            Building modern, responsive, and user-focused web applications with React, Next.js, and TypeScript.
          </p>

          <div className="reveal-item flex flex-wrap gap-4 justify-center md:justify-start mb-8">
            {["Next.js Developer", "UI / UX", "Clean Code"].map((tag) => (
              <Magnetic key={tag} strength={0.2}>
                <div className="px-6 py-3 rounded-full glass-panel hover:bg-white/60 transition-colors cursor-default border-primary/5">
                  <span className="text-[12px] text-secondary font-bold uppercase tracking-widest">
                    {tag}
                  </span>
                </div>
              </Magnetic>
            ))}
          </div>

          <div className="reveal-item flex flex-wrap items-center gap-6 justify-center md:justify-start">
            <Magnetic strength={0.2}>
              <a 
                href="/resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/20"
              >
                <span className="font-bold uppercase tracking-wider text-[13px]">Resume</span>
                <Download size={18} />
              </a>
            </Magnetic>
            
            <div className="flex items-center gap-4">
              <Magnetic strength={0.2}>
                <a href="https://github.com/Nahidahamedridoy" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center rounded-full glass-panel hover:bg-primary hover:text-white transition-all duration-300 text-on-surface-variant border-primary/5" aria-label="GitHub Profile">
                  <FaGithub size={20} />
                </a>
              </Magnetic>
              <Magnetic strength={0.2}>
                <a href="https://linkedin.com/in/nahid-ahamed-ridoy" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center rounded-full glass-panel hover:bg-primary hover:text-white transition-all duration-300 text-on-surface-variant border-primary/5" aria-label="LinkedIn Profile">
                  <FaLinkedin size={20} />
                </a>
              </Magnetic>
              <Magnetic strength={0.2}>
                <a href="https://facebook.com/nahidahamedridoy" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center rounded-full glass-panel hover:bg-primary hover:text-white transition-all duration-300 text-on-surface-variant border-primary/5" aria-label="Facebook Profile">
                  <FaFacebook size={20} />
                </a>
              </Magnetic>
            </div>
          </div>
        </div>

        {/* Right Composition */}
        <motion.div 
          style={{ y: y1 }}
          className="md:col-span-4 relative mt-16 md:mt-0 flex items-center justify-center"
        >
          <div className="relative w-full aspect-square max-w-[420px] z-10 group hero-image">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-400/20 to-purple-400/20 rounded-full blur-3xl opacity-50 group-hover:opacity-80 transition-opacity animate-pulse"></div>
            <Image
              alt="Portrait of Nahid Ahamed"
              className="object-cover hero-mask scale-110 hover:grayscale-0 transition-all duration-1000"
              src="/photo.jpg"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 420px"
            />
          </div>

          {/* Realistic Junior Stats Cluster */}
          <motion.div 
            style={{ y: y2 }}
            className="absolute -bottom-8 md:-bottom-12 -right-4 md:-right-4 z-30 flex flex-col gap-4 w-full max-w-[220px]"
          >
            {[
              { label: "Projects Built", value: "30+", color: "from-primary to-blue-400" },
              { label: "Tailwind Confidence", value: "95%", color: "from-blue-400 to-purple-500" }
            ].map((stat, idx) => (
              <Magnetic key={idx} strength={0.2}>
                <div className="relative group/stat">
                  <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} rounded-2xl blur-xl opacity-10 group-hover:opacity-30 transition-opacity`}></div>
                  <div className="relative glass-panel rounded-2xl p-6 shadow-2xl shadow-blue-900/5 border border-white/60 flex items-center justify-between group-hover/stat:border-primary/30 transition-colors duration-500">
                    <div>
                      <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-1">{stat.label}</p>
                      <p className={`text-[28px] md:text-[32px] font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r ${stat.color}`}>
                        {stat.value}
                      </p>
                    </div>
                    <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br ${stat.color} opacity-10 group-hover/stat:opacity-20 transition-opacity flex items-center justify-center`}>
                      <div className="w-2 h-2 rounded-full bg-primary animate-ping"></div>
                    </div>
                  </div>
                </div>
              </Magnetic>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
