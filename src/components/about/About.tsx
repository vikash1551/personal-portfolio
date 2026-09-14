"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Code2, Layers, Zap } from "lucide-react";

const philosophyCards: any[] = [];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
};

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative pt-[100px] pb-[100px]">
      <div className="section-container" ref={ref}>
        {/* Section header */}
        <motion.div
          className="mb-32 sm:mb-40 lg:mb-48"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          <motion.h2
            variants={fadeUp}
            className="inline-block font-hammock text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-wide text-[#ff5500] mb-8 pb-10 border-b-[4px] sm:border-b-[6px] border-dashed border-black"
          >
            About Me
          </motion.h2>
          <motion.div variants={fadeUp} className="divider max-w-[200px]" />
        </motion.div>

        {/* Content grid */}
        <div className="grid grid-cols-1 gap-16 lg:gap-24 mb-24">
          {/* Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6 max-w-3xl"
          >
            <p className="font-architects text-lg lg:text-xl text-neutral-800 leading-relaxed font-bold tracking-wide">
              I&apos;m <span className="text-[#ff5500]">Vikash Kumar</span>, an Engineering student who enjoys turning ideas into code.
            </p>
            <p className="font-architects text-lg lg:text-xl text-neutral-800 leading-relaxed font-bold tracking-wide">
              I work mainly with Java, backend technologies, databases, and full-stack development, while continuously improving my problem-solving skills through DSA and hands-on projects.
            </p>
            <p className="font-architects text-lg lg:text-xl text-neutral-800 leading-relaxed font-bold tracking-wide">
              I enjoy going beyond simply making something work. I like understanding how it works, finding better solutions, and building things that are clean, useful, and reliable.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
