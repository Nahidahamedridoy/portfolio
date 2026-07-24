"use client";

import React from "react";
import Link from "next/link";
import Magnetic from "./Magnetic";
import { FaGithub, FaLinkedin, FaFacebook, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const navLinks = [
    { name: "Home", href: "/#" },
    { name: "About", href: "/#about" },
    { name: "Experience", href: "/#experience" },
    { name: "Technologies", href: "/#technologies" },
    { name: "Projects", href: "/#work" },
    { name: "Contact", href: "/#contact" }
  ];

  const socialLinks = [
    { name: "GitHub", icon: FaGithub, href: "https://github.com/Nahidahamedridoy", color: "#181717" },
    { name: "LinkedIn", icon: FaLinkedin, href: "https://linkedin.com/in/nahid-ahamed-ridoy", color: "#0077B5" },
    { name: "Facebook", icon: FaFacebook, href: "https://facebook.com/nahidahamedridoy", color: "#1877F2" }
  ];

  return (
    <footer className="w-full pt-16 pb-8 px-margin-x-mobile md:px-margin-x-desktop bg-white relative mt-auto border-t border-primary/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          {/* Brand & Intro */}
          <div className="md:col-span-5 flex flex-col items-center md:items-start gap-6">
            <Magnetic strength={0.2}>
              <Link href="/#" className="flex items-center gap-3 group">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-500 shadow-lg shadow-primary/20">
                  <span className="material-symbols-outlined text-white text-[24px]">
                    code
                  </span>
                </div>
                <span className="text-[24px] font-black tracking-tighter text-on-surface uppercase">
                  Nahid
                </span>
              </Link>
            </Magnetic>
            <p className="text-[16px] text-on-surface-variant max-w-[320px] text-center md:text-left leading-relaxed">
              Building high-end, responsive web experiences with a focus on clean code and pixel-perfect design. Let's create something amazing together.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 flex flex-col items-center md:items-start gap-6">
            <p className="text-[14px] font-bold text-primary uppercase tracking-widest">Navigation</p>
            <nav className="flex flex-col gap-3 items-center md:items-start">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href}
                  className="text-[16px] font-medium text-on-surface-variant hover:text-primary hover:translate-x-1 transition-all duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Socials & Actions */}
          <div className="md:col-span-3 flex flex-col items-center md:items-start gap-6">
            <p className="text-[14px] font-bold text-primary uppercase tracking-widest">Connect</p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social, idx) => (
                <Magnetic key={idx} strength={0.4}>
                  <a 
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-on-surface-variant hover:text-white transition-all duration-300 relative overflow-hidden group border border-primary/5 hover:border-transparent shadow-sm"
                    aria-label={social.name}
                  >
                    <social.icon className="text-[20px] relative z-10" />
                    <div 
                      className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"
                      style={{ backgroundColor: social.color }}
                    />
                  </a>
                </Magnetic>
              ))}
            </div>
            
            <button 
              onClick={scrollToTop}
              className="mt-4 flex items-center gap-2 text-[14px] font-bold text-on-surface-variant hover:text-primary transition-colors group focus:outline-none focus:ring-2 focus:ring-primary/50 rounded-full px-2 py-1"
              aria-label="Scroll back to top"
            >
              <span>Back to Top</span>
              <div className="w-8 h-8 rounded-full bg-primary/5 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <FaArrowUp className="text-[12px] group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </button>
          </div>
          
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-primary/10 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-[14px] font-medium text-on-surface-variant">
            © {currentYear} Nahid Ahamed. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-[12px] font-bold text-on-surface-variant/50 uppercase tracking-widest">
              Designed & Built with ❤️
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
