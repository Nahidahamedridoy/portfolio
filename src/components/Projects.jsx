"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Magnetic from "./Magnetic";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Summer Cart",
    category: "E-commerce Platform",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800",
    color: "#E0E7FF",
    repo: "https://github.com/Nahidahamedridoy/A8-SunCart",
    live: "https://a8-sun-cart.vercel.app/"
  },
  {
    title: "Dragon News",
    category: "News Portal",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=800",
    color: "#DCFCE7",
    repo: "https://github.com/Nahidahamedridoy/Dragon-News",
    live: "https://dragon-news-ochre-beta.vercel.app/category/01"
  },
  {
    title: "English Janala",
    category: "Learning Platform",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=800",
    color: "#FEE2E2",
    repo: "https://github.com/Nahidahamedridoy/English-Janala",
    live: "https://nahidahamedridoy.github.io/English-Janala/"
  }
];

const Projects = () => {
  const containerRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const scrollWidth = scrollRef.current.offsetWidth;
      const amountToScroll = scrollWidth - window.innerWidth;

      gsap.to(scrollRef.current, {
        x: -amountToScroll,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=${amountToScroll}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} id="work" className="overflow-hidden bg-white">
      <div className="h-screen flex items-center px-margin-x-mobile md:px-margin-x-desktop overflow-hidden">
        <div className="flex flex-col mb-12">
            <h2 className="text-[64px] md:text-[120px] font-bold tracking-tighter leading-none text-on-surface/10 uppercase">
                Selected Works
            </h2>
        </div>
        
        <div ref={scrollRef} className="flex gap-12 pl-24 pr-[50vw]">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -20 }}
              className="flex-shrink-0 w-[400px] md:w-[600px] group cursor-default"
            >
              <div 
                className="aspect-[4/3] rounded-[2.5rem] overflow-hidden mb-8 relative shadow-2xl shadow-blue-900/5"
                style={{ backgroundColor: project.color }}
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover mix-blend-multiply opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-secondary/60 opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-sm flex items-center justify-center gap-6">
                  <Magnetic strength={0.4}>
                    <a 
                      href={project.repo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-secondary hover:bg-primary hover:text-white transition-all duration-300"
                    >
                      <FaGithub className="text-[24px]" />
                    </a>
                  </Magnetic>
                  <Magnetic strength={0.4}>
                    <a 
                      href={project.live} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-secondary hover:bg-primary hover:text-white transition-all duration-300"
                    >
                      <FaExternalLinkAlt className="text-[20px]" />
                    </a>
                  </Magnetic>
                </div>
              </div>

              <div className="flex justify-between items-end">
                <div>
                  <p className="text-label-md text-primary font-bold uppercase tracking-widest mb-2">
                    {project.category}
                  </p>
                  <h3 className="text-[32px] md:text-[40px] font-bold tracking-tight text-on-surface leading-tight">
                    {project.title}
                  </h3>
                </div>
                <a 
                  href={project.live} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hidden group-hover:block animate-pulse hover:scale-110 transition-transform"
                >
                   <span className="text-primary font-bold tracking-tighter cursor-pointer">VIEW PROJECT →</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
