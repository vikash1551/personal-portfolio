"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    icon: "⟨/⟩",
    skills: ["Python", "Java", "C++"],
  },
  {
    title: "Web Technologies",
    icon: "◈",
    skills: ["HTML", "CSS", "React"],
  },
  {
    title: "Frameworks",
    icon: "⚙",
    skills: ["Spring Boot"],
  },
  {
    title: "Databases",
    icon: "◉",
    skills: ["MySQL", "MongoDB",],
  },
  {
    title: "Tools & Platforms",
    icon: "⬡",
    skills: ["Git", "GitHub", "VS Code", "AntiGravity","PostMan"],
  },
  {
    title: "AI Tools",
    icon: "✦",
    skills: ["ChatGPT", "Claude", "Gemini", "Copilot","Google Stitch","Google AI-Studio"],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
};

const getClipPath = (px: number) => 
  `polygon(${px}px 0, calc(100% - ${px}px) 0, 100% ${px}px, 100% calc(100% - ${px}px), calc(100% - ${px}px) 100%, ${px}px 100%, 0 calc(100% - ${px}px), 0 ${px}px)`;

const SkillTicketCard = ({ 
  category, 
  index, 
  total,
  showArrow,
  onNext 
}: { 
  category: SkillCategory, 
  index: number, 
  total: number,
  showArrow: boolean,
  onNext?: () => void
}) => {
  const numStr = (index + 1).toString().padStart(2, '0');
  
  return (
    <div className="w-full h-full group drop-shadow-[8px_8px_0_#ff5500] transition-all duration-300">
      <div 
        className="relative w-full h-full bg-black transition-colors duration-300"
        style={{ clipPath: getClipPath(18), padding: '3px' }}
      >
        <div 
          className="relative w-full h-full bg-[#ff5500] transition-colors duration-300"
          style={{ clipPath: getClipPath(13.8), padding: '2px', paddingRight: '8px' }}
        >
          <div 
            className="w-full h-full bg-[#fffdd0] group-hover:bg-black transition-colors duration-300 p-4 sm:p-5 flex flex-col relative"
            style={{ clipPath: getClipPath(11) }}
          >
          <div className="flex-1 flex flex-col justify-center py-4">
            {/* Top Header */}
            <div className="flex justify-between items-start mb-3">
              <div className="flex items-center gap-4">
                <span className="font-serif font-black text-4xl sm:text-5xl text-[#ff5500] leading-none">
                  {numStr}
                </span>
                <div className="w-[2px] h-10 bg-[#ff5500] mx-1" />
                <h3 className="font-serif font-black text-xl sm:text-2xl text-black group-hover:text-white uppercase leading-none tracking-tight">
                  {category.title}
                </h3>
              </div>
              <div className="text-3xl sm:text-4xl text-black group-hover:text-white">
                {category.icon}
              </div>
            </div>

            {/* Dashed Separator */}
            <div className="w-full border-t-[2px] border-dashed border-[#ff5500] opacity-50 my-4" />

            {/* Skills Pills */}
            <div className="flex flex-wrap gap-2.5 sm:gap-3">
              {category.skills.map((skill) => (
                <span 
                  key={skill}
                  className="px-3 py-1.5 sm:px-4 sm:py-2 border-[1.5px] border-black group-hover:border-white text-black group-hover:text-white bg-transparent font-semibold text-sm sm:text-base rounded-md transition-colors duration-300 shadow-[2px_2px_0_0_#000] group-hover:shadow-[2px_2px_0_0_#fff]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom Footer & Arrow */}
          <div className="mt-auto flex justify-between items-end">
            <div className="flex items-center gap-2">
              <span className="font-serif font-bold text-[10px] text-black group-hover:text-white opacity-60">{numStr}</span>
              <div className="h-[2px] w-12 bg-[#ff5500]" />
              <div className="flex gap-1">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className={`w-1 h-1 rounded-full ${i === 0 ? 'bg-[#ff5500]' : 'bg-black group-hover:bg-white'}`} />
                ))}
              </div>
            </div>

            {showArrow && onNext && (
              <button 
                onClick={(e) => { e.stopPropagation(); onNext(); }}
                className="w-8 h-8 border-[2px] border-black group-hover:border-[#ff5500] flex items-center justify-center bg-white group-hover:bg-[#ff5500] text-[#ff5500] group-hover:text-black transition-all duration-300 z-10 cursor-pointer pointer-events-auto shadow-[2px_2px_0_0_#000] group-hover:shadow-[2px_2px_0_0_#ff5500]"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            )}
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  // Controls how many skill cards are revealed
  const [visibleCount, setVisibleCount] = useState(1);

  return (
    <section id="skills" className="relative pt-[100px] pb-[100px]">
      <div className="section-container" ref={ref}>
        {/* Section Header */}
        <motion.div
          className="mb-40"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          <motion.h2
            variants={fadeUp}
            className="inline-block font-hammock text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-wide text-[#ff5500] mb-8 uppercase pb-10 border-b-[4px] sm:border-b-[6px] border-dashed border-black"
          >
            Skills
          </motion.h2>
          <motion.div variants={fadeUp} className="divider max-w-[200px]" />
        </motion.div>

        {/* Mobile View: Shows all skills, no incremental reveal */}
        <div className="grid grid-cols-1 gap-6 md:hidden">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="w-full min-h-[220px]"
            >
              <SkillTicketCard 
                category={cat} 
                index={i} 
                total={skillCategories.length} 
                showArrow={false}
              />
            </motion.div>
          ))}
        </div>

        {/* Tablet/Desktop View: Incremental reveal using visibleCount */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {skillCategories.map((cat, i) => (
            <div key={cat.title} className="w-full min-h-[220px]">
              <AnimatePresence>
                {i < visibleCount && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, x: -30 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="w-full h-full"
                  >
                    <SkillTicketCard 
                      category={cat} 
                      index={i} 
                      total={skillCategories.length} 
                      showArrow={i === visibleCount - 1 && visibleCount < skillCategories.length}
                      onNext={() => setVisibleCount(v => v + 1)} 
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
