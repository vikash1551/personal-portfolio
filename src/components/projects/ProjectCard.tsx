"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { 
  SiReact, 
  SiTypescript, 
  SiPython, 
  SiMongodb, 
  SiGooglegemini, 
  SiSpringboot, 
  SiMysql, 
  SiTailwindcss, 
  SiNodedotjs, 
  SiReactquery 
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import type { Project } from "./Projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const projectNumber = String(index + 1).padStart(2, "0");
  const isEven = index % 2 === 0;
  const rotationClass = isEven ? "-rotate-1" : "rotate-1";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="w-full max-w-5xl mx-auto group perspective-1000"
    >
      {/* ── Main card body ── */}
      <div className={`relative bg-[#ff5500] group-hover:bg-[#050505] border-[2px] border-black group-hover:border-[#ff5500] p-6 sm:p-10 lg:p-14 transition-all duration-500 overflow-hidden shadow-[12px_12px_0px_rgba(0,0,0,1)] group-hover:shadow-[0_0_15px_rgba(255,85,0,0.3)] hover:-translate-y-2 group-hover:rotate-0 ${rotationClass}`}>
        
        {/* Subtle grid background */}
        <div 
          className="absolute inset-0 opacity-20 group-hover:opacity-10 pointer-events-none transition-opacity duration-500" 
          style={{ 
            backgroundImage: 'radial-gradient(currentColor 1px, transparent 1px)', 
            backgroundSize: '24px 24px',
            backgroundPosition: '0 0'
          }} 
        />

        {/* Decorative Corner Cutouts (Cyberpunk style) */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t-[4px] border-l-[4px] border-black group-hover:border-[#ff5500] -translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-[4px] border-r-[4px] border-black group-hover:border-[#ff5500] translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500" />
        <div className="absolute top-0 right-0 w-8 h-8 border-t-[4px] border-r-[4px] border-black group-hover:border-[#ff5500] translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500" />
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-[4px] border-l-[4px] border-black group-hover:border-[#ff5500] -translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500" />

        {/* Watermark Number */}
        <div className="absolute top-6 right-6 lg:top-10 lg:right-10 pointer-events-none opacity-10 group-hover:opacity-20 transition-opacity duration-500 select-none">
          <span 
            className="font-display font-black text-8xl lg:text-[12rem] leading-none text-transparent transition-colors duration-500 group-hover:!text-transparent"
            style={{ WebkitTextStroke: '2px currentColor', color: 'inherit' }}
          >
            <span className="text-black group-hover:text-[#ff5500] transition-colors duration-500 block" style={{ WebkitTextStroke: 'inherit' }}>
              {projectNumber}
            </span>
          </span>
        </div>

        <div className="relative z-10">
          {/* ═══ Top Bar ═══ */}
          <div className="flex justify-between items-center mb-8 lg:mb-12">
            <div className="border-[2px] border-black group-hover:border-[#ff5500] px-4 py-1.5 flex items-center gap-4 bg-black/10 group-hover:bg-[#ff5500]/10 backdrop-blur-sm transition-colors duration-500">
              <span className="font-architects text-sm sm:text-base tracking-[0.2em] text-black group-hover:text-[#ff5500] uppercase font-bold transition-colors duration-500">
                PROJECT {projectNumber}
              </span>
            </div>
            
            {/* Decorative Dots */}
            <div className="flex gap-2 opacity-100 group-hover:opacity-50 transition-opacity duration-500">
              <div className="w-2 h-2 rounded-full bg-black group-hover:bg-[#ff5500] transition-colors duration-500" />
              <div className="w-2 h-2 rounded-full border border-black group-hover:border-[#ff5500] transition-colors duration-500" />
              <div className="w-2 h-2 rounded-full border border-black group-hover:border-[#ff5500] transition-colors duration-500" />
              <div className="w-2 h-2 rounded-full border border-black group-hover:border-[#ff5500] transition-colors duration-500" />
            </div>
          </div>

          {/* ═══ Title & Description ═══ */}
          <div className="mb-10 lg:mb-16">
            <h3 className="font-architects text-5xl sm:text-6xl lg:text-7xl font-black text-black group-hover:text-[#ff5500] uppercase tracking-tight leading-[0.9] mb-6 lg:mb-8 group-hover:drop-shadow-[0_0_15px_rgba(255,85,0,0.4)] drop-shadow-none transition-all duration-500">
              {project.title}
            </h3>

            {/* ── Title Separator Line ── */}
            <div className="w-full border-b-[3px] border-black group-hover:border-[#ff5500] mb-8 lg:mb-10 transition-colors duration-500" />

            <p className="font-architects text-lg sm:text-xl text-neutral-900 group-hover:text-neutral-300 leading-relaxed max-w-3xl border-l-2 border-black group-hover:border-[#ff5500]/50 pl-4 lg:pl-6 bg-gradient-to-r from-black/10 group-hover:from-[#ff5500]/5 to-transparent py-2 transition-colors duration-500 font-bold">
              {project.description}
            </p>
          </div>

          {/* ── Horizontal dashed line ── */}
          <div className="h-4 sm:h-6 w-full" />
          <div className="w-full border-b-[2px] border-dashed border-black/40 group-hover:border-[#ff5500]/40 relative transition-colors duration-500" />
          <div className="h-1 sm:h-2 w-full" />

          {/* ═══ Tech Stack ═══ */}
          <div className="mb-10 lg:mb-12">
            <div className="flex items-center gap-4 mb-6">
              <h4 className="font-architects text-lg sm:text-xl text-black group-hover:text-[#ff5500] font-bold tracking-[0.1em] uppercase transition-colors duration-500">
                TECH STACK
              </h4>
              <ArrowUpRight className="text-black group-hover:text-[#ff5500] w-4 h-4 rotate-45 transition-colors duration-500" />
            </div>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              {project.tags.map((tag) => {
                const getIcon = () => {
                  const tagLower = tag.toLowerCase();
                  if (tagLower === "react") return <SiReact className="w-3.5 h-3.5 sm:w-4 sm:h-4" />;
                  if (tagLower === "typescript") return <SiTypescript className="w-3.5 h-3.5 sm:w-4 sm:h-4" />;
                  if (tagLower === "python") return <SiPython className="w-3.5 h-3.5 sm:w-4 sm:h-4" />;
                  if (tagLower === "mongodb") return <SiMongodb className="w-3.5 h-3.5 sm:w-4 sm:h-4" />;
                  if (tagLower === "gemini ai") return <SiGooglegemini className="w-3.5 h-3.5 sm:w-4 sm:h-4" />;
                  if (tagLower === "java") return <FaJava className="w-3.5 h-3.5 sm:w-4 sm:h-4" />;
                  if (tagLower === "spring boot") return <SiSpringboot className="w-3.5 h-3.5 sm:w-4 sm:h-4" />;
                  if (tagLower === "mysql") return <SiMysql className="w-3.5 h-3.5 sm:w-4 sm:h-4" />;
                  if (tagLower === "tanstack") return <SiReactquery className="w-3.5 h-3.5 sm:w-4 sm:h-4" />;
                  if (tagLower === "tailwind css") return <SiTailwindcss className="w-3.5 h-3.5 sm:w-4 sm:h-4" />;
                  if (tagLower === "node.js") return <SiNodedotjs className="w-3.5 h-3.5 sm:w-4 sm:h-4" />;
                  return null;
                };

                return (
                  <span
                    key={tag}
                    className="flex items-center gap-2 font-architects text-xs sm:text-sm tracking-wider text-black group-hover:text-[#ff5500] border-[2px] border-black group-hover:border-[#ff5500] px-4 py-2 uppercase font-bold bg-transparent group-hover:bg-black/50 hover:!bg-[#ff5500] hover:!text-black transition-colors duration-300 backdrop-blur-sm"
                  >
                    {getIcon()}
                    {tag}
                  </span>
                );
              })}
            </div>
          </div>

          {/* ── Horizontal dashed line ── */}
          <div className="h-4 sm:h-6 w-full" />
          <div className="w-full border-b-[2px] border-dashed border-black/40 group-hover:border-[#ff5500]/40 relative transition-colors duration-500" />
          <div className="h-4 sm:h-6 w-full" />

          {/* ═══ Bottom Section: Links & Footer ═══ */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 sm:gap-0">
            <div className="flex gap-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 border-[3px] border-black group-hover:border-[#ff5500] text-black group-hover:text-[#ff5500] px-6 py-3 font-architects text-sm sm:text-base tracking-widest font-bold uppercase hover:!bg-[#ff5500] hover:!text-black transition-all duration-300 group/btn"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                  GITHUB
                  <ArrowUpRight className="w-4 h-4 opacity-50 group-hover/btn:opacity-100 transition-opacity" />
                </a>
              )}
              
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-black group-hover:bg-transparent border-[3px] border-black group-hover:border-[#ff5500] text-[#ff5500] group-hover:text-[#ff5500] px-6 py-3 font-architects text-sm sm:text-base tracking-widest font-bold uppercase hover:!bg-[#ff5500] hover:!text-black hover:!border-[#ff5500] transition-all duration-300 group/btn"
                >
                  LIVE DEMO
                  <ArrowUpRight className="w-4 h-4 opacity-50 group-hover/btn:opacity-100 transition-opacity" />
                </a>
              )}
            </div>

            <div className="flex items-center gap-6 opacity-100 group-hover:opacity-70 transition-opacity duration-500 mt-6 sm:mt-0">
              <div className="hidden sm:flex gap-1">
                <div className="w-8 h-[2px] bg-black group-hover:bg-[#ff5500] transition-colors duration-500 -rotate-45" />
                <div className="w-8 h-[2px] bg-black group-hover:bg-[#ff5500] transition-colors duration-500 -rotate-45 -ml-4" />
                <div className="w-8 h-[2px] bg-black group-hover:bg-[#ff5500] transition-colors duration-500 -rotate-45 -ml-4" />
                <div className="w-8 h-[2px] bg-black group-hover:bg-[#ff5500] transition-colors duration-500 -rotate-45 -ml-4" />
              </div>
              <div className="text-right font-mono text-[9px] sm:text-[10px] tracking-[0.3em] text-black group-hover:text-[#ff5500] uppercase leading-tight font-bold transition-colors duration-500">
                BUILDING<br />
                REAL SOLUTIONS
              </div>
            </div>
          </div>

        </div>
      </div>
    </motion.div>
  );
}
