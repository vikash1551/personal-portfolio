"use client";

import { useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface HeroBackgroundProps {
  isExpandingDomain?: boolean;
}

export default function HeroBackground({ isExpandingDomain }: HeroBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const particlesRef = useRef<Particle[]>([]);

  interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
    opacity: number;
    fadeSpeed: number;
  }

  const createParticles = useCallback((width: number, height: number) => {
    const particles: Particle[] = [];
    const count = Math.min(60, Math.floor((width * height) / 25000));
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.2 - 0.1,
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.3 + 0.05,
        fadeSpeed: Math.random() * 0.005 + 0.002,
      });
    }
    return particles;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);
      particlesRef.current = createParticles(
        window.innerWidth,
        window.innerHeight
      );
    };

    resize();
    window.addEventListener("resize", resize);

    if (prefersReducedMotion) {
      // Draw static particles once
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particlesRef.current.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 0, 0, ${p.opacity})`;
        ctx.fill();
      });
      return () => window.removeEventListener("resize", resize);
    }

    const animate = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      ctx.clearRect(0, 0, w, h);

      particlesRef.current.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.opacity += Math.sin(Date.now() * p.fadeSpeed) * 0.002;
        p.opacity = Math.max(0.02, Math.min(0.35, p.opacity));

        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 0, 0, ${p.opacity})`;
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", resize);
    };
  }, [createParticles]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Domain Expansion Flash Effect */}
      <AnimatePresence>
        {isExpandingDomain && (
          <motion.div
            key="domain-flash"
            className="absolute inset-0 z-50 bg-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
        )}
      </AnimatePresence>

      {/* Infinite Void Expanding Grid */}
      <motion.div
        className="absolute inset-0 z-0"
        animate={{
          scale: isExpandingDomain ? [1, 2, 4, 8] : 1,
          opacity: isExpandingDomain ? [0, 1, 0.8, 1] : 0,
        }}
        transition={{
          duration: 3.5,
          ease: "easeIn",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(160,0,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(160,0,255,0.2) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            backgroundPosition: "center center",
          }}
        />
      </motion.div>

      {/* Domain expansion darkness overlay */}
      <motion.div
        className="absolute inset-0 bg-black z-[-1]"
        initial={{ opacity: 0 }}
        animate={{ opacity: isExpandingDomain ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      />

      {/* Subtle grid (Normal) */}
      <motion.div
        className="absolute inset-0 grid-bg opacity-40"
        animate={{ opacity: isExpandingDomain ? 0 : 0.4 }}
      />

      {/* Radial ambient glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(0,0,0,0.03) 0%, transparent 70%)",
        }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: isExpandingDomain ? 0 : 1,
          scale: isExpandingDomain ? 2 : 1,
        }}
        transition={{ duration: 2, ease: "easeOut" }}
      />

      {/* Right side ambient glow for character area */}
      <motion.div
        className="absolute top-1/3 right-[10%] w-[500px] h-[600px] rounded-full"
        style={{
          background: isExpandingDomain
            ? "radial-gradient(ellipse, rgba(160,0,255,0.15) 0%, transparent 70%)"
            : "radial-gradient(ellipse, rgba(0,0,0,0.04) 0%, transparent 70%)",
        }}
        initial={{ opacity: 0 }}
        animate={{
          opacity: isExpandingDomain ? [0, 1] : 1,
          scale: isExpandingDomain ? [1, 1.5] : 1,
        }}
        transition={{ duration: 3, delay: 0.5, ease: "easeOut" }}
      />

      {/* Floating particles canvas */}
      <motion.canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-10"
        aria-hidden="true"
        animate={{
          opacity: isExpandingDomain ? 0 : 1,
        }}
        transition={{ duration: 1 }}
      />

      {/* Horizontal accent line */}
      <motion.div
        className="absolute top-1/2 left-0 w-full h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.06) 30%, rgba(0,0,0,0.06) 70%, transparent 100%)",
        }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isExpandingDomain ? 0 : 1 }}
        transition={{ duration: 2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* Vertical accent line */}
      <motion.div
        className="absolute top-0 left-[55%] w-px h-full hidden lg:block"
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.05) 30%, rgba(0,0,0,0.05) 70%, transparent 100%)",
        }}
        initial={{ scaleY: 0 }}
        animate={{ scaleY: isExpandingDomain ? 0 : 1 }}
        transition={{ duration: 2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
      />

      <div
        className="absolute bottom-0 left-0 w-full h-40 z-20 pointer-events-none"
        style={{
          background: "linear-gradient(to top, var(--color-bg) 0%, transparent 100%)",
        }}
      />
    </div>
  );
}
