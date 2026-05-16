"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";
import Magnetic from "./Magnetic";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          className="fixed bottom-8 right-8 z-[999]"
        >
          <Magnetic strength={0.5}>
            <button
              onClick={scrollToTop}
              className="w-12 h-12 md:w-14 md:h-14 bg-primary text-white rounded-full flex items-center justify-center shadow-2xl shadow-primary/40 hover:bg-secondary transition-all active:scale-90 group border border-white/20 backdrop-blur-sm"
              aria-label="Scroll to top"
            >
              <ChevronUp className="w-6 h-6 md:w-7 md:h-7 group-hover:-translate-y-1 transition-transform duration-300" />
            </button>
          </Magnetic>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
