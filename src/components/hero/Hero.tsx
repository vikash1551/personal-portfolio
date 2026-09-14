"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HeroBackground from "./HeroBackground";
import HeroText from "./HeroText";
import Character from "./Character";
import DomainExpansionOverlay from "./DomainExpansionOverlay";

interface HeroProps {
  onUnlock?: () => void;
  onExpanding?: () => void;
}

export default function Hero({ onUnlock, onExpanding }: HeroProps) {
  const [domainPhase, setDomainPhase] = useState<"idle" | "expanding" | "finished">("idle");

  const handleExploreClick = () => {
    if (domainPhase !== "idle") return; // Prevent double trigger
    setDomainPhase("expanding");
    if (onExpanding) onExpanding();
  };

  const handleSequenceComplete = () => {
    setDomainPhase("finished");
    if (onUnlock) onUnlock();
  };

  return (
    <section
      id="hero"
      className="relative w-full h-screen min-h-[700px] overflow-hidden"
    >
      {/* Background layer */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <HeroBackground isExpandingDomain={domainPhase === "expanding"} />
      </motion.div>

      {/* Manga Overlay */}
      {domainPhase === "expanding" && (
        <DomainExpansionOverlay onComplete={handleSequenceComplete} />
      )}

      {/* Content layer */}
      <div className="relative z-10 section-container h-full">
        <div className="flex flex-col lg:flex-row h-full">
          {/* Left side - Text */}
          <div className="flex-1 flex items-center lg:pr-8 xl:pr-16 z-20">
            <AnimatePresence>
              {domainPhase !== "expanding" && (
                <motion.div
                  key="hero-text"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                >
                  <HeroText
                    onExploreClick={handleExploreClick}
                    hideCTA={domainPhase === "finished"}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right side - Character */}
          <div className="flex-1 flex items-end justify-center lg:justify-end pb-0 lg:pb-0 min-h-[300px] lg:min-h-0">
            <AnimatePresence>
              {domainPhase !== "expanding" && (
                <motion.div
                  key="character"
                  initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                  transition={{ duration: 0.5 }}
                  className="h-full w-full"
                >
                  <Character />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

    </section>
  );
}
