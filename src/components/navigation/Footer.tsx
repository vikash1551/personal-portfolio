"use client";

import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-16 lg:py-20 border-t border-neutral-300">
      <div className="section-container">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8">



          {/* Center */}
          <span className="font-mono text-[10px] tracking-wider text-neutral-500 font-semibold">
            © {new Date().getFullYear()} — All rights reserved
          </span>

          {/* Right - back to top */}
          <motion.button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-neutral-600 font-semibold hover:text-black transition-colors duration-300"
            whileHover={{ y: -2 }}
            whileTap={{ y: 0 }}
          >
            <span className="font-mono text-[10px] tracking-[0.15em] uppercase">
              Back to top
            </span>
            <ArrowUp
              size={14}
              className="group-hover:-translate-y-1 transition-transform duration-300"
            />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
