import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from "react-icons/fa";
import { projects } from "@/lib/data";

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectDetails({ params }) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white text-on-surface pt-24 pb-32">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        
        {/* Back Button */}
        <Link href="/#work" className="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors font-bold mb-8 uppercase tracking-widest text-[12px]">
          <FaArrowLeft /> Back to Portfolio
        </Link>

        {/* Header */}
        <div className="mb-12">
          <p className="text-primary font-bold uppercase tracking-widest mb-4">
            {project.category}
          </p>
          <h1 className="text-[48px] md:text-[72px] font-black tracking-tighter leading-none mb-6">
            {project.title}
          </h1>
          
          <div className="flex flex-wrap gap-3">
            {project.techStack.map((tech, i) => (
              <span key={i} className="px-5 py-2 rounded-full bg-primary/5 border border-primary/10 text-primary text-[14px] font-bold">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Banner Image */}
        <div 
          className="aspect-[16/9] w-full rounded-[2rem] overflow-hidden relative mb-16 shadow-2xl shadow-blue-900/5"
          style={{ backgroundColor: project.color }}
        >
          <Image 
            src={project.image} 
            alt={project.title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 896px"
            className="object-cover mix-blend-multiply opacity-90"
          />
        </div>

        {/* Content */}
        <div className="glass-panel p-8 md:p-12 lg:p-16 rounded-[2.5rem] bg-white/40 backdrop-blur-3xl border border-primary/10 shadow-2xl shadow-blue-900/5 space-y-16 relative overflow-hidden">
          {/* Subtle background decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

          <section className="relative z-10">
            <h2 className="text-[28px] md:text-[32px] font-bold tracking-tight mb-6 text-primary flex items-center gap-4">
              <span className="w-8 h-1 bg-primary rounded-full" /> Overview
            </h2>
            <p className="text-[18px] md:text-[20px] text-on-surface-variant leading-relaxed">
              {project.overview}
            </p>
          </section>

          <section className="relative z-10">
            <h2 className="text-[28px] md:text-[32px] font-bold tracking-tight mb-6 text-primary flex items-center gap-4">
              <span className="w-8 h-1 bg-primary rounded-full" /> Key Features
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-4 bg-white/60 p-6 rounded-2xl border border-primary/5 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                  <div className="w-3 h-3 rounded-full bg-primary mt-2 flex-shrink-0 shadow-[0_0_10px_rgba(var(--primary),0.5)]" />
                  <span className="text-[16px] md:text-[18px] text-on-surface-variant leading-relaxed">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          <section className="relative z-10">
            <h2 className="text-[28px] md:text-[32px] font-bold tracking-tight mb-6 text-primary flex items-center gap-4">
              <span className="w-8 h-1 bg-primary rounded-full" /> Challenges Faced
            </h2>
            <div className="bg-secondary/5 p-6 md:p-8 rounded-2xl border-l-4 border-secondary">
              <p className="text-[18px] md:text-[20px] text-on-surface-variant leading-relaxed">
                {project.challenges}
              </p>
            </div>
          </section>

          <section className="relative z-10">
            <h2 className="text-[28px] md:text-[32px] font-bold tracking-tight mb-6 text-primary flex items-center gap-4">
              <span className="w-8 h-1 bg-primary rounded-full" /> Future Improvements
            </h2>
            <p className="text-[18px] md:text-[20px] text-on-surface-variant leading-relaxed">
              {project.futureImprovements}
            </p>
          </section>

          {/* Action Buttons */}
          <div className="pt-12 mt-8 flex flex-wrap items-center gap-6 border-t border-primary/10 relative z-10">
            <a 
              href={project.live} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/20 hover:-translate-y-1 hover:shadow-primary/40"
            >
              <span>Live Demo</span>
              <FaExternalLinkAlt />
            </a>
            
            <a 
              href={project.repo} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-secondary px-8 py-4 rounded-xl font-bold hover:bg-secondary/5 transition-all duration-300 border border-secondary/20 shadow-sm hover:-translate-y-1 hover:shadow-md"
            >
              <span>GitHub Client Repository</span>
              <FaGithub size={20} />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
