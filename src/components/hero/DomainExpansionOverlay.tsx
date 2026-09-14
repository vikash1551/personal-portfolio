"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface DomainExpansionOverlayProps {
  onComplete: () => void;
}

export default function DomainExpansionOverlay({
  onComplete,
}: DomainExpansionOverlayProps) {
  const [phase, setPhase] = useState<"enter" | "typing" | "hold" | "exit">("enter");

  const text = "Domain Expansion: Infinite Void";

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("typing"), 800); // Wait for character to settle
    const t2 = setTimeout(() => setPhase("hold"), 800 + text.length * 50 + 500); // Wait for typing + pause
    const t3 = setTimeout(() => {
      setPhase("exit");
      setTimeout(() => onComplete(), 800); // Tell parent we're done
    }, 800 + text.length * 50 + 1500);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== "exit" && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* Centered Character */}
          <motion.div
            className="relative z-10 flex flex-col items-center justify-center h-full"
            initial={{ scale: 0.8, filter: "blur(10px)", y: 50 }}
            animate={{
              scale: 1,
              filter: "blur(0px)",
              y: [50, -5, 0], // slight overshoot
            }}
            transition={{
              duration: 1,
              ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
            }}
          >
            <motion.div
              animate={{
                y: [0, -15, 0],
                scale: [1, 1.03, 1],
                filter: [
                  "drop-shadow(0 20px 40px rgba(0,0,0,0.8))",
                  "drop-shadow(0 0 60px rgba(160,0,255,0.6))",
                  "drop-shadow(0 20px 40px rgba(0,0,0,0.8))",
                ],
              }}
              transition={{
                duration: 4,
                ease: "easeInOut",
                repeat: Infinity,
              }}
            >
              <Image
                src="/character/gojo-domain.png"
                alt="Domain Expansion"
                width={1024}
                height={910}
                priority
                className="select-none w-[320px] sm:w-[400px] md:w-[500px] lg:w-[600px] h-auto object-contain"
                style={{
                  filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.8))",
                }}
              />
            </motion.div>
          </motion.div>

          {/* Manga Typing Box */}
          <AnimatePresence>
            {(phase === "typing" || phase === "hold") && (
              <motion.div
                className="absolute z-20 bottom-[15%] left-1/2 -translate-x-1/2 w-[90%] max-w-2xl bg-white text-black border-4 border-black p-4 sm:p-6 shadow-[8px_8px_0px_rgba(0,0,0,1)]"
                initial={{ opacity: 0, y: 20, rotate: -2 }}
                animate={{ opacity: 1, y: 0, rotate: -2 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                {/* Decorative manga lines */}
                <div className="absolute -inset-1 border border-neutral-300 pointer-events-none" />
                <div className="absolute -inset-2 border border-neutral-200 pointer-events-none" />
                
                <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight uppercase leading-none">
                  {text.split("").map((char, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        duration: 0.1,
                        delay: index * 0.05,
                      }}
                    >
                      {char}
                    </motion.span>
                  ))}
                </h2>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
