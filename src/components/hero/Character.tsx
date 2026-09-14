"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Character() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Subtle scroll-based parallax
  const scrollY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const scrollOpacity = useTransform(scrollYProgress, [0, 0.4, 0.8], [1, 0.9, 0.3]);
  const scrollScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.97]);

  // Mouse parallax
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.div
      ref={containerRef}
      className="relative w-full h-full flex items-end justify-center lg:justify-end"
      style={{
        y: scrollY,
        opacity: scrollOpacity,
        scale: scrollScale,
      }}
    >
      {/* Ambient backlight behind character */}
      <motion.div
        className="absolute bottom-[10%] left-1/2 -translate-x-1/2 w-[300px] h-[400px] lg:w-[400px] lg:h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(180,180,220,0.06) 0%, rgba(140,140,180,0.02) 40%, transparent 70%)",
        }}
        animate={{
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Character image with breathing + parallax */}
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, x: 80 }}
        animate={
          isLoaded
            ? { opacity: 1, x: 0 }
            : { opacity: 0, x: 80 }
        }
        transition={{
          duration: 1.2,
          delay: 0.9,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        <motion.div
          animate={{
            y: [0, -6, 0],
            rotate: [0, 0.3, 0, -0.3, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            x: mousePos.x * 8,
            y: mousePos.y * 5,
          }}
        >
          <Image
            src="/character/gojo.png"
            alt="Character illustration"
            width={1024}
            height={910}
            priority
            className="character-glow select-none pointer-events-none w-[280px] h-auto sm:w-[340px] md:w-[400px] lg:w-[440px] xl:w-[500px] 2xl:w-[560px] object-contain max-md:-translate-y-24"
            style={{
              filter:
                "drop-shadow(0 0 30px rgba(180,180,210,0.1)) drop-shadow(0 20px 40px rgba(0,0,0,0.5))",
            }}
            onLoad={() => setIsLoaded(true)}
            draggable={false}
          />
        </motion.div>
      </motion.div>

      {/* Ground shadow / reflection */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[200px] lg:w-[300px] h-[20px] bg-gradient-to-t from-transparent to-transparent opacity-20">
        <div
          className="w-full h-full rounded-full"
          style={{
            background:
              "radial-gradient(ellipse, rgba(255,255,255,0.08) 0%, transparent 70%)",
          }}
        />
      </div>
    </motion.div>
  );
}
