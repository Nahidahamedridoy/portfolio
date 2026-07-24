"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

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
                className="aspect-[16/10] rounded-[2rem] overflow-hidden mb-6 relative shadow-2xl shadow-blue-900/5 group-hover:shadow-primary/20 transition-all duration-500"
                style={{ backgroundColor: project.color }}
              >
                <Image 
                  src={project.image} 
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 600px"
                  className="object-cover mix-blend-multiply opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-transform duration-700 ease-out"
                />
              </div>

              <div className="flex flex-col gap-4">
                <div>
                  <p className="text-[12px] md:text-[14px] text-primary font-bold uppercase tracking-widest mb-1">
                    {project.category}
                  </p>
                  <h3 className="text-[28px] md:text-[36px] font-bold tracking-tight text-on-surface leading-tight">
                    {project.title}
                  </h3>
                </div>
                
                <p className="text-[15px] md:text-[16px] text-on-surface-variant leading-relaxed line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-1">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-primary text-[12px] font-semibold">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-4 flex items-center gap-4">
                  <Link href={`/projects/${project.id}`} className="px-6 py-3 bg-primary text-white rounded-xl font-bold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20 text-[14px]">
                    View Details
                  </Link>
                  <a href={project.repo} target="_blank" rel="noopener noreferrer" className="p-3 bg-secondary/5 rounded-full text-secondary hover:bg-primary hover:text-white transition-colors" aria-label="GitHub Repository">
                    <FaGithub size={20} />
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="p-3 bg-secondary/5 rounded-full text-secondary hover:bg-primary hover:text-white transition-colors" aria-label="Live Demo">
                    <FaExternalLinkAlt size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
