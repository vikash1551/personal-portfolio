"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "about" },
  { label: "Projects", href: "projects" },
  { label: "Skills", href: "skills" },
  { label: "Experience", href: "experience" },
  { label: "Contact", href: "contact" },
];

export default function Navbar({ isHidden = false }: { isHidden?: boolean }) {
  const [activeSection, setActiveSection] = useState("");
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsInitialLoad(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      let current = "";
      for (const link of navLinks) {
        const el = document.getElementById(link.href);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Check if the section is crossing the middle of the screen
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 3) {
            current = link.href;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger once on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        className="fixed top-6 left-1/2 z-50 rounded-xl p-2 lg:p-2.5 px-3 lg:px-4 shadow-[6px_6px_0_0_rgba(0,0,0,1)] bg-white border-[3px] border-black"
        initial={{ y: -100, opacity: 0, x: "-50%" }}
        animate={isHidden ? { y: -100, opacity: 0, x: "-50%" } : { y: 0, opacity: 1, x: "-50%" }}
        transition={{ 
          duration: 0.8, 
          delay: isHidden ? 0 : (isInitialLoad ? 1.8 : 0), 
          ease: [0.16, 1, 0.3, 1] 
        }}
      >
        <div className="flex items-center">
          {/* Navigation links (always visible) */}
          <div className="flex items-center gap-1 sm:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <a
                  key={link.label}
                  href={`#${link.href}`}
                  className="relative px-3 sm:px-4 lg:px-6 py-2 font-display text-[10px] sm:text-xs md:text-sm tracking-widest uppercase font-black transition-colors duration-300 rounded-lg whitespace-nowrap flex-shrink-0 group"
                  onClick={() => setActiveSection(link.href)}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-[#ff5500] border-[3px] border-black rounded-lg shadow-[3px_3px_0_0_#000] -z-10"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  {/* Subtle hover effect for inactive tabs */}
                  {!isActive && (
                    <div className="absolute inset-0 bg-neutral-200 border-[2px] border-black rounded-lg opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
                  )}
                  <span className={`relative z-10 transition-colors duration-300 ${isActive ? "text-white" : "text-black"}`}>
                    {link.label}
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </motion.nav>
    </>
  );
}
