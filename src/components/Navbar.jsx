"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { fadeInDown } from "@/lib/animations";
import Magnetic from "./Magnetic";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Experience", id: "experience" },
  { name: "Tech", id: "technologies" },
  { name: "Work", id: "work" },
  { name: "Contact", id: "contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  
  const navBackground = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.4)"]
  );
  const navBlur = useTransform(scrollY, [0, 100], ["blur(0px)", "blur(24px)"]);

  useEffect(() => {
    const updateScrolled = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", updateScrolled);
    return () => window.removeEventListener("scroll", updateScrolled);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-30% 0px -30% 0px",
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navItems.forEach((item) => {
      const section = document.getElementById(item.id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      <motion.nav
        initial="initial"
        animate="animate"
        variants={fadeInDown}
        className="fixed w-full top-4 left-0 z-50 px-margin-x-mobile md:px-margin-x-desktop"
      >
        <motion.div
          style={{
            backgroundColor: navBackground,
            backdropFilter: navBlur,
            WebkitBackdropFilter: navBlur,
          }}
          className={cn(
            "max-w-container-max mx-auto rounded-full px-4 md:px-8 py-3 md:py-4 flex justify-between items-center transition-all duration-500",
            isScrolled || isMenuOpen ? "shadow-lg shadow-blue-900/5 border border-white/50 bg-white/40" : ""
          )}
        >
          {/* Logo */}
          <Magnetic strength={0.2}>
            <a 
              href="#home" 
              onClick={(e) => scrollToSection(e, "home")}
              className="flex items-center gap-2 md:gap-3 cursor-pointer group"
            >
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full overflow-hidden border-2 border-primary/20 flex items-center justify-center shadow-md group-hover:rotate-12 transition-all duration-500">
                <Image src="/photo.jpg" alt="Nahid" width={40} height={40} className="w-full h-full object-cover" />
              </div>
              <span className="text-[14px] md:text-body-lg font-bold tracking-tighter text-on-surface uppercase">
                Nahid Ahamed
              </span>
            </a>
          </Magnetic>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, idx) => (
              <Magnetic key={item.id} strength={0.3}>
                <a
                  className={cn(
                    "text-nav-link transition-all duration-500 relative group flex items-center gap-1.5",
                    activeSection === item.id ? "text-primary font-bold" : "text-on-surface-variant hover:text-primary"
                  )}
                  href={`#${item.id}`}
                  onClick={(e) => scrollToSection(e, item.id)}
                >
                  <span className={cn(
                    "text-[10px] font-bold",
                    activeSection === item.id ? "text-primary" : "text-on-surface-variant/40"
                  )}>0{idx + 1}</span>
                  <span className="uppercase tracking-widest text-[13px]">{item.name}</span>
                </a>
              </Magnetic>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 md:gap-4">
            <Magnetic strength={0.3}>
              <a 
                href="/resume.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex text-[11px] md:text-[13px] font-bold text-on-surface-variant hover:text-primary transition-colors uppercase tracking-[0.2em] px-4 py-2"
              >
                Resume
              </a>
            </Magnetic>
            
            <Magnetic strength={0.4}>
              <button 
                onClick={(e) => scrollToSection(e, "contact")}
                className="hidden md:flex group bg-secondary text-white rounded-full pl-6 pr-1 py-1 items-center gap-4 hover:shadow-xl transition-all duration-300"
              >
                <span className="text-label-md">Contact</span>
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </div>
              </button>
            </Magnetic>

            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-full glass-panel"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </motion.div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-20 left-0 right-0 mx-4 glass-panel rounded-[2rem] p-6 shadow-2xl md:hidden flex flex-col gap-4 border border-white/60 bg-white/90"
            >
              {navItems.map((item, idx) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => scrollToSection(e, item.id)}
                  className={cn(
                    "flex items-center justify-between p-4 rounded-xl transition-colors",
                    activeSection === item.id ? "bg-primary/10 text-primary font-bold" : "hover:bg-primary/5"
                  )}
                >
                  <span className="uppercase tracking-widest text-[14px]">{item.name}</span>
                  <span className="text-[10px] opacity-40">0{idx + 1}</span>
                </a>
              ))}
              <div className="h-[1px] bg-primary/10 my-2" />
              <a 
                href="/resume.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 p-4 rounded-xl bg-primary/5 text-primary font-bold uppercase tracking-widest text-[14px]"
              >
                Download Resume
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;
