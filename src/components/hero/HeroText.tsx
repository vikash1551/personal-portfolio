"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  },
};

interface HeroTextProps {
  onExploreClick?: () => void;
  hideCTA?: boolean;
}

export default function HeroText({ onExploreClick, hideCTA }: HeroTextProps) {
  const fullText = "VIKASH KUMAR";
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    if (!isDeleting) {
      if (text.length < fullText.length) {
        timeout = setTimeout(() => {
          setText(fullText.slice(0, text.length + 1));
        }, 80); // Sped up typing
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 3000); 
      }
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => {
          setText(fullText.slice(0, text.length - 1));
        }, 40); // Sped up deleting
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(false);
        }, 500); // Wait a bit before typing again
      }
    }
    
    return () => clearTimeout(timeout);
  }, [text, isDeleting, fullText]);

  return (
    <motion.div
      className="relative z-10 flex flex-col justify-center h-full px-6 sm:px-10 lg:px-0 pt-28 pb-16 lg:pt-0 lg:pb-0 -mt-12 md:-mt-20 lg:-mt-24"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Eyebrow */}
      <motion.div variants={fadeUp} className="mb-4 flex items-center gap-3">
        <div className="w-2 h-2 rounded-full bg-[#ff5500]" />
        <span className="font-mono text-[10px] sm:text-xs tracking-[0.3em] text-neutral-500 uppercase font-bold">
          Welcome to
        </span>
      </motion.div>

      {/* Main heading */}
      <motion.div variants={fadeUp} className="mb-8 relative w-fit">
        {/* Left Side Doodle (Baby Gojo / Anime Head) */}
        <div className="absolute -top-16 -left-12 sm:-top-20 sm:-left-24 transform -rotate-12 z-0 pointer-events-none opacity-90 animate-pulse">
          <svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            {/* Spiky Hair */}
            <path d="M 15 45 Q 10 20 30 15 Q 35 5 50 10 Q 65 5 70 15 Q 90 20 85 45" fill="none" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            {/* Face/Jaw */}
            <path d="M 20 45 Q 50 90 80 45" fill="none" stroke="black" strokeWidth="4" strokeLinecap="round" />
            {/* Blindfold */}
            <rect x="18" y="35" width="64" height="20" rx="4" fill="black" />
            {/* Smile */}
            <path d="M 40 65 Q 50 75 60 65" fill="none" stroke="#ff5500" strokeWidth="4" strokeLinecap="round" />
          </svg>
        </div>

        {/* Right Side Doodle (Starburst/Shuriken below header) */}
        <div className="absolute top-[70%] -right-16 sm:-right-28 transform rotate-12 z-0 pointer-events-none opacity-80">
          <svg width="85" height="85" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            {/* Star Burst (Orange) */}
            <path d="M 50 10 L 58 42 L 90 50 L 58 58 L 50 90 L 42 58 L 10 50 L 42 42 Z" fill="none" stroke="#ff5500" strokeWidth="4" strokeLinejoin="round" />
            {/* Inner lines (Black) */}
            <line x1="30" y1="30" x2="70" y2="70" stroke="black" strokeWidth="4" strokeLinecap="round" />
            <line x1="70" y1="30" x2="30" y2="70" stroke="black" strokeWidth="4" strokeLinecap="round" />
            <circle cx="50" cy="50" r="8" fill="none" stroke="black" strokeWidth="4" />
          </svg>
        </div>

        {/* Top Right Doodle (Noodle Bowl) */}
        <div className="absolute -top-12 -right-8 sm:-top-8 sm:-right-16 transform rotate-6 z-0 pointer-events-none opacity-85">
          <svg width="80" height="80" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            {/* Bowl */}
            <path d="M 20 50 Q 50 90 80 50 Z" fill="none" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
            {/* Noodles */}
            <path d="M 30 50 Q 35 30 40 50 Q 45 20 50 50 Q 55 35 60 50 Q 65 25 70 50" fill="none" stroke="#ff5500" strokeWidth="4" strokeLinecap="round" />
            {/* Chopsticks */}
            <line x1="85" y1="15" x2="60" y2="50" stroke="black" strokeWidth="4" strokeLinecap="round" />
            <line x1="95" y1="20" x2="65" y2="52" stroke="black" strokeWidth="4" strokeLinecap="round" />
            {/* Steam */}
            <path d="M 40 20 Q 45 10 40 0" fill="none" stroke="black" strokeWidth="3" strokeLinecap="round" strokeDasharray="4 6"/>
            <path d="M 60 25 Q 55 10 60 0" fill="none" stroke="black" strokeWidth="3" strokeLinecap="round" strokeDasharray="4 6"/>
          </svg>
        </div>

        {/* Bottom Left Doodle (Action Marks) */}
        <div className="absolute top-[80%] -left-10 sm:-left-16 transform -rotate-12 z-0 pointer-events-none opacity-90">
          <svg width="70" height="70" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <line x1="50" y1="10" x2="50" y2="50" stroke="black" strokeWidth="5" strokeLinecap="round" />
            <circle cx="50" cy="70" r="5" fill="#ff5500" />
            
            <line x1="20" y1="30" x2="35" y2="55" stroke="black" strokeWidth="5" strokeLinecap="round" />
            <circle cx="45" cy="70" r="5" fill="#ff5500" />
            
            <path d="M 70 30 Q 80 50 70 70" fill="none" stroke="black" strokeWidth="4" strokeLinecap="round" strokeDasharray="5 5" />
          </svg>
        </div>

        <h1 className="font-display text-6xl sm:text-7xl lg:text-[7.5rem] font-black tracking-tighter leading-[0.85] text-black mix-blend-multiply relative z-10">
          MY<br />
          <span className="text-[#ff5500]">PORTFOLIO</span>
        </h1>
      </motion.div>

      {/* Divider */}
      <motion.div variants={fadeUp} className="mb-6 w-16 sm:w-20 h-[2px] bg-black" />

      {/* Intro & Name */}
      <motion.div variants={fadeUp} className="mb-3 lg:mb-4">
        <div className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-black mb-1 sm:mb-2">
          HI, I'M
        </div>
        <div className="h-[50px] sm:h-[60px] flex items-center">
          <span 
            className="text-blue-600 font-bold"
            style={{ 
              fontFamily: '"MV Boli", cursive, sans-serif', 
              fontSize: '36px' 
            }}
          >
            {text}<span className="animate-pulse font-sans font-light text-black">|</span>
          </span>
        </div>
      </motion.div>

      {/* Role */}
      <motion.div variants={fadeUp} className="mb-10 lg:mb-12">
        <div className="flex items-center gap-4">
          <div className="w-12 sm:w-16 h-[2px] bg-black" />
          <span className="font-sans text-xs sm:text-sm tracking-[0.3em] text-black font-bold uppercase">
            Software Developer
          </span>
        </div>
      </motion.div>

      {/* CTA */}
      {!hideCTA && (
        <motion.div variants={fadeUp}>
          <button
            onClick={onExploreClick}
            className="magnetic-btn group inline-flex items-center justify-center gap-3 px-6 py-3 sm:px-8 sm:py-4 border-2 border-black hover:border-neutral-600 text-black hover:text-white transition-all duration-500 rounded-none bg-transparent hover:bg-black"
          >
            <span className="font-sans text-xs sm:text-sm tracking-[0.15em] uppercase font-bold">
              Explore My Portfolio
            </span>
            <ArrowRight
              size={16}
              className="transform group-hover:translate-x-1 transition-transform duration-300"
            />
          </button>
        </motion.div>
      )}
    </motion.div>
  );
}
