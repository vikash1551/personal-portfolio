"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import SmoothScroll from "@/components/ui/SmoothScroll";
import CustomCursor from "@/components/ui/CustomCursor";
import LoadingScreen from "@/components/ui/LoadingScreen";
import Navbar from "@/components/navigation/Navbar";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Projects from "@/components/projects/Projects";
import Skills from "@/components/skills/Skills";
import Experience from "@/components/experience/Experience";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/navigation/Footer";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isExpanding, setIsExpanding] = useState(false);

  const handleLoadingComplete = useCallback(() => {
    setIsLoading(false);
  }, []);

  const handleExpanding = useCallback(() => {
    setIsExpanding(true);
  }, []);

  const handleUnlock = useCallback(() => {
    setIsExpanding(false);
    setIsUnlocked(true);
  }, []);

  return (
    <>
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      <SmoothScroll>
        <CustomCursor />
        {!isLoading && <Navbar isHidden={isExpanding} />}
        <main>
          <Hero onUnlock={handleUnlock} onExpanding={handleExpanding} />
          {isUnlocked && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
            >
              <About />
              <Projects />
              <Skills />
              <Experience />
              
              <Contact />
            </motion.div>
          )}
        </main>
        {isUnlocked && <Footer />}
      </SmoothScroll>
    </>
  );
}
