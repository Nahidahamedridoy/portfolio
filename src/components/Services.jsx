"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Magnetic from "./Magnetic";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Product Design",
    description: "Creating end-to-end digital solutions that solve real-world problems through research and empathy.",
    icon: "layers",
  },
  {
    title: "Brand Identity",
    description: "Developing cohesive visual systems that tell a compelling story and resonate with your target audience.",
    icon: "brush",
    offset: true,
  },
  {
    title: "UI/UX Design",
    description: "Crafting pixel-perfect interfaces that provide seamless user experiences across all devices and platforms.",
    icon: "devices",
  },
];

const Services = () => {
  const sectionRef = useRef(null);


  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".service-card", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="services" className="max-w-container-max mx-auto px-margin-x-mobile md:px-margin-x-desktop pb-section-gap relative">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        {services.map((service, idx) => (
          <div
            key={idx}
            className={`service-card p-10 glass-panel rounded-lg hover:bg-white/60 transition-all duration-500 group cursor-pointer border-transparent hover:border-primary/20 ${
              service.offset ? "md:-translate-y-12" : ""
            }`}
          >
            <Magnetic strength={0.2}>
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-blue-900/5 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                <span className="material-symbols-outlined text-primary text-[28px]">
                  {service.icon}
                </span>
              </div>
            </Magnetic>
            <h3 className="text-[32px] font-semibold text-on-surface mb-4">
              {service.title}
            </h3>
            <p className="text-body-md text-on-surface-variant leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
