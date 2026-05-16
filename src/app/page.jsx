import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Showcase from "@/components/Showcase";
import About from "@/components/About";
import Technologies from "@/components/Technologies";
import Qualification from "@/components/Qualification";
import Projects from "@/components/Projects";
import ResumeCTA from "@/components/ResumeCTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <Navbar />
      <main className="relative flex-grow">
        <Hero />
        <Showcase />
        <About />
        <Technologies />
        <Qualification />
        <Projects />
        <ResumeCTA />
        <Contact />
      <Footer />
      </main>
    </div>
  );
}
