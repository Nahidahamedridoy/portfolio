"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { FaWhatsapp, FaLinkedin, FaGithub, FaDiscord } from "react-icons/fa";
import Magnetic from "./Magnetic";

gsap.registerPlugin(ScrollTrigger);

const socialLinks = [
  { 
    name: "WhatsApp", 
    icon: FaWhatsapp, 
    href: "https://wa.me/8801841964561", 
    color: "#25D366" 
  },
  { 
    name: "LinkedIn", 
    icon: FaLinkedin, 
    href: "https://linkedin.com/in/nahid-ahamed-ridoy", 
    color: "#0077B5" 
  },
  { 
    name: "GitHub", 
    icon: FaGithub, 
    href: "https://github.com/Nahidahamedridoy", 
    color: "#181717" 
  },
  { 
    name: "Discord", 
    icon: FaDiscord, 
    href: "https://discord.com/users/nahidahamedridoy", 
    color: "#5865F2" 
  },
];

const Contact = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".reveal-contact", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
        y: 60,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power4.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="contact" className="py-section-gap px-margin-x-mobile md:px-margin-x-desktop bg-white relative overflow-hidden">
      <div className="max-w-container-max mx-auto text-center relative z-10">
        <div className="reveal-contact inline-block px-6 py-2 rounded-full glass-panel mb-8 border-primary/10">
          <p className="text-body-lg text-primary font-medium">Let's Talk</p>
        </div>
        <h2 className="reveal-contact text-[64px] md:text-[100px] font-bold tracking-tighter leading-none mb-12">
          Have a project <br /> in mind?
        </h2>
        
        <div className="reveal-contact flex flex-col items-center gap-12">
          <Magnetic strength={0.3}>
            <a 
              href="https://wa.me/8801841964561"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-secondary text-white text-[20px] md:text-[24px] font-bold px-10 md:px-16 py-6 md:py-8 rounded-full overflow-hidden transition-all duration-500 hover:scale-105 active:scale-95 shadow-2xl shadow-secondary/20 block"
            >
              <span className="relative z-10 flex items-center gap-4">
                Start a Conversation <span className="material-symbols-outlined group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500">send</span>
              </span>
              <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.7,0,0.3,1)]" />
            </a>
          </Magnetic>

          <div className="flex flex-wrap justify-center gap-6 md:gap-8 mt-12">
            {socialLinks.map((social, idx) => (
              <Magnetic key={idx} strength={0.5}>
                <a 
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full glass-panel flex flex-col items-center justify-center text-on-surface-variant hover:border-primary/50 transition-all duration-500 group relative"
                >
                  <social.icon 
                    className="text-[24px] md:text-[28px] group-hover:scale-110 transition-transform duration-500" 
                    style={{ color: "inherit" }}
                  />
                  <div 
                    className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                    style={{ backgroundColor: social.color }}
                  />
                  <style jsx>{`
                    a:hover {
                      color: ${social.color} !important;
                    }
                  `}</style>
                </a>
              </Magnetic>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Blobs */}
      <div className="organic-blob w-[400px] h-[400px] bg-blue-100/50 -bottom-40 -left-20" />
      <div className="organic-blob w-[300px] h-[300px] bg-purple-100/50 -bottom-20 -right-20" style={{ animationDelay: "-7s" }} />
    </section>
  );
};

export default Contact;
