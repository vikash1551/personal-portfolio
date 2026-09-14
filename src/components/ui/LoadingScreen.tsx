"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<"loading" | "exit">("loading");

  useEffect(() => {
    let frame: number;
    let start: number | null = null;
    const duration = 2400; // total loading time in ms

    const tick = (timestamp: number) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;

      // Ease-in-out progress curve for a natural feel
      const raw = Math.min(elapsed / duration, 1);
      const eased =
        raw < 0.5
          ? 4 * raw * raw * raw
          : 1 - Math.pow(-2 * raw + 2, 3) / 2;

      setProgress(Math.round(eased * 100));

      if (raw < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        // Hit 100%, pause briefly then exit
        setTimeout(() => setPhase("exit"), 300);
        setTimeout(() => onComplete(), 900);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase === "loading" ? (
        <motion.div
          className="fixed inset-0 z-[9999] bg-[#fffdd0] flex items-center justify-center"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
        >
          {/* Subtle grid */}
          <div className="absolute inset-0 bg-splatter" />

          {/* Center content */}
          <div className="relative z-10 flex flex-col items-center gap-10">
            {/* Percentage counter */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="relative"
            >
              <span className="font-display text-7xl sm:text-8xl lg:text-9xl font-bold tracking-tight text-black tabular-nums">
                {progress}
              </span>
              <span className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-500 ml-1">
                %
              </span>
            </motion.div>

            {/* Status text */}
            <motion.span
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-architects text-xl text-neutral-800 font-bold"
            >
              Getting things ready...
            </motion.span>
          </div>

          {/* Doodle Progress bar */}
          <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-64 sm:w-80 flex flex-col items-center">
            <div className="w-full h-8 border-[3px] border-black rounded-lg p-1 bg-white shadow-[5px_5px_0_0_#000] rotate-[-2deg] relative">
              <motion.div
                className="h-full bg-[#ff5500] rounded-md border-r-[3px] border-black relative overflow-hidden"
                style={{ width: `${progress}%` }}
                transition={{ duration: 0.05 }}
              >
                {/* Diagonal doodle stripes inside the fill */}
                <div 
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: "repeating-linear-gradient(-45deg, transparent, transparent 6px, #000 6px, #000 8px)"
                  }}
                />
              </motion.div>
            </div>
          </div>

          {/* Anime Doodle 1 - Ghost */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3, type: "spring", bounce: 0.5 }}
            className="absolute top-[20%] left-[10%] sm:left-[20%] md:left-[25%] lg:left-[30%] transform -rotate-12 z-0"
          >
            <svg width="60" height="60" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="opacity-80">
              <path d="M20 70 Q 20 20 50 20 Q 80 20 80 70 Q 75 80 70 70 Q 65 60 60 70 Q 55 80 50 70 Q 45 60 40 70 Q 35 80 30 70 Q 25 60 20 70 Z" fill="none" stroke="black" strokeWidth="4" strokeLinejoin="round" />
              <circle cx="40" cy="45" r="4" fill="black" />
              <circle cx="60" cy="45" r="4" fill="black" />
              <path d="M 45 55 Q 50 60 55 55" fill="none" stroke="#ff5500" strokeWidth="4" strokeLinecap="round" />
              <line x1="32" y1="50" x2="36" y2="54" stroke="#ff5500" strokeWidth="3" strokeLinecap="round" />
              <line x1="64" y1="50" x2="68" y2="54" stroke="#ff5500" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </motion.div>

          {/* Anime Doodle 2 - Shuriken */}
          <motion.div
            initial={{ opacity: 0, scale: 0, rotate: -90 }}
            animate={{ opacity: 1, scale: 1, rotate: 15 }}
            transition={{ duration: 0.7, delay: 0.4, type: "spring", bounce: 0.4 }}
            className="absolute bottom-[30%] right-[10%] sm:right-[20%] md:right-[25%] lg:right-[30%] z-0"
          >
            <svg width="50" height="50" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="opacity-80">
              <path d="M50 10 Q 55 45 90 50 Q 55 55 50 90 Q 45 55 10 50 Q 45 45 50 10 Z" fill="none" stroke="black" strokeWidth="4" strokeLinejoin="round" />
              <circle cx="50" cy="50" r="10" fill="none" stroke="#ff5500" strokeWidth="4" />
            </svg>
          </motion.div>

          {/* Corner frames */}
          <motion.div
            className="absolute top-8 left-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="w-8 h-8 border-t-2 border-l-2 border-neutral-400" />
          </motion.div>
          <motion.div
            className="absolute bottom-8 right-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="w-8 h-8 border-b-2 border-r-2 border-neutral-400" />
          </motion.div>
        </motion.div>
      ) : (
        /* Curtain wipe exit */
        <motion.div
          className="fixed inset-0 z-[9999] pointer-events-none"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
        >
          <motion.div
            className="absolute inset-0 bg-[#fffdd0]"
            initial={{ y: 0 }}
            animate={{ y: "-100%" }}
            transition={{
              duration: 0.7,
              ease: [0.85, 0, 0.15, 1] as [number, number, number, number],
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
