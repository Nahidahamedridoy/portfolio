"use client";

import React from "react";
import { motion } from "framer-motion";
import Magnetic from "./Magnetic";
import { FiDownload, FiFileText } from "react-icons/fi";

const ResumeCTA = () => {
  return (
    <section className="py-24 px-margin-x-mobile md:px-margin-x-desktop bg-white relative overflow-hidden">
      <div className="max-w-container-max mx-auto">
        <div className="relative glass-panel p-10 md:p-20 rounded-[3rem] border-primary/10 overflow-hidden bg-gradient-to-br from-white/80 to-primary/[0.02]">
          {/* Background Decorative Blobs */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/[0.05] blur-[100px] rounded-full -z-10" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-400/[0.05] blur-[100px] rounded-full -z-10" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 text-primary font-bold uppercase tracking-[0.2em] text-[12px] mb-6"
              >
                <FiFileText className="text-[18px]" />
                Resume / CV
              </motion.div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-[32px] md:text-[48px] font-bold tracking-tighter leading-tight mb-6 text-on-surface"
              >
                Take a closer look at my <span className="text-primary underline underline-offset-8 decoration-primary/20">professional journey.</span>
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-body-lg text-on-surface-variant max-w-md mb-8"
              >
                Detailed information about my experience, skills, and educational background available in a clean PDF format.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <Magnetic strength={0.4}>
                  <a 
                    href="/resume.pdf" 
                    target="_blank"
                    className="inline-flex items-center gap-4 bg-secondary text-white px-10 py-5 rounded-2xl font-bold hover:shadow-2xl hover:shadow-secondary/30 transition-all duration-500 active:scale-95 group"
                  >
                    Download Resume
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center group-hover:bg-white/30 transition-colors">
                      <FiDownload className="text-[18px]" />
                    </div>
                  </a>
                </Magnetic>
              </motion.div>
            </div>

            <div className="relative hidden md:flex justify-center">
               <motion.div 
                 initial={{ opacity: 0, scale: 0.9 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.4 }}
                 className="relative w-full max-w-[320px] aspect-[1/1.4] glass-panel rounded-2xl border-primary/10 shadow-2xl p-6 rotate-3 hover:rotate-0 transition-transform duration-700"
               >
                  {/* Visual representation of a resume */}
                  <div className="w-12 h-1.5 bg-primary/20 rounded-full mb-8" />
                  <div className="space-y-4">
                     <div className="w-full h-3 bg-on-surface/5 rounded-full" />
                     <div className="w-[80%] h-3 bg-on-surface/5 rounded-full" />
                     <div className="w-[90%] h-3 bg-on-surface/5 rounded-full" />
                  </div>
                  <div className="mt-12 space-y-4">
                     <div className="w-full h-3 bg-primary/10 rounded-full" />
                     <div className="w-[60%] h-3 bg-primary/10 rounded-full" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/[0.03] to-transparent pointer-events-none" />
                  
                  <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-primary/10 rounded-full blur-2xl animate-pulse" />
               </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeCTA;
