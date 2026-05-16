"use client";

import React from "react";
import Magnetic from "./Magnetic";
import { FaGithub, FaLinkedin, FaWhatsapp, FaDiscord } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-12 px-margin-x-mobile md:px-margin-x-desktop bg-white relative mt-auto border-t border-primary/5">
      <div className="max-w-container-max mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-12">
          <div className="flex flex-col items-center md:items-start gap-6">
            <Magnetic strength={0.2}>
              <div className="flex items-center gap-3 cursor-pointer group">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-blue-400 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-500 shadow-lg shadow-primary/20">
                  <span className="material-symbols-outlined text-white text-[20px]">
                    shield
                  </span>
                </div>
                <span className="text-[20px] font-black tracking-tighter text-on-surface uppercase">
                  Nahid
                </span>
              </div>
            </Magnetic>
            <p className="text-body-md text-on-surface-variant max-w-[300px] text-center md:text-left leading-relaxed">
              Building high-end, responsive web experiences with a focus on clean code and pixel-perfect design.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-6">
            <p className="text-label-sm font-bold text-primary uppercase tracking-[0.2em]">Connect With Me</p>
            <div className="flex items-center gap-6">
              {[
                { icon: FaGithub, href: "https://github.com/Nahidahamedridoy", color: "#181717" },
                { icon: FaLinkedin, href: "https://linkedin.com/in/nahid-ahamed-ridoy", color: "#0077B5" },
                { icon: FaWhatsapp, href: "https://wa.me/8801841964561", color: "#25D366" },
                { icon: FaDiscord, href: "https://discord.com/users/nahidahamedridoy", color: "#5865F2" }
              ].map((social, idx) => (
                <Magnetic key={idx} strength={0.4}>
                  <a 
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-on-surface-variant hover:text-primary transition-all duration-300 transform hover:scale-125"
                  >
                    <social.icon className="text-[22px]" />
                  </a>
                </Magnetic>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-primary/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[13px] font-medium text-on-surface-variant/60">
            © {currentYear} Nahid Ahamed Ridoy. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            {["Built with Next.js", "Framer Motion", "GSAP"].map((item) => (
              <span key={item} className="text-[11px] font-bold text-on-surface-variant/40 uppercase tracking-widest">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
