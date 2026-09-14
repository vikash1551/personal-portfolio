  "use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

interface Hackathon {
  name: string;
  date: string;
  venue: string;
  city: string;
  duration: string;
  highlights: string[];
  sponsors: string[];
  certificateImage?: string;
  quote?: string;
  doodleImage?: string;
}

const hackathons: Hackathon[] = [
  {
    name: "HackPrix Season 3",
    date: "June 13 – 14, 2026",
    venue: "Lords Institute of Engineering & Technology",
    city: "Hyderabad",
    duration: "36 HOURS",
    highlights: [
      "Built and submitted a full working project in a grueling 36-hour coding marathon",
      "Demonstrated end-to-end product development from ideation to deployment",
      "Collaborated with cross-functional teams, sharpening rapid decision-making skills",
    ],
    sponsors: ["IET", "HACKPRIX", "TEAMWORK", "PRODUCT DEVELOPMENT"],
    certificateImage: "/certificates/hackprix.png",
    quote: "LET'S BUILD\nSOMETHING\nCRAZY!",
    doodleImage: "/doodles/anime_laptop.jpg",
  },
  {
    name: "NMIT Hacks 2026",
    date: "May 8 – 10, 2026",
    venue: "Nitte Meenakshi Institute of Technology",
    city: "Bengaluru",
    duration: "48 HOURS",
    highlights: [
      "Participated in a GitHub-powered national-level hackathon with 500+ developers",
      "Developed innovative solutions pushing the boundaries of technology",
      "Networked with industry professionals from MLH and Logitech",
    ],
    sponsors: ["GITHUB", "MLH", "LOGITECH", "HACKCULTURE"],
    certificateImage: "/certificates/nmit.png",
    quote: "GOOD\nIDEAS\nBETTER\nPEOPLE",
    doodleImage: "/doodles/anime_sleeping.jpg",
  },
  {
    name: "Tech Fusion 2026",
    date: "April 8, 2026",
    venue: "Vellore Institute of Technology",
    city: "Chennai",
    duration: "24 HOURS",
    highlights: [
      "Competed in VIT's flagship hackathon organized by SENSE",
      "Engineered a competitive solution under intense time constraints",
      "Gained exposure to cutting-edge problem statements spanning AI and Web3",
    ],
    sponsors: ["INNOVATION", "PROTOTYPING", "REAL WORLD PROBLEMS"],
    certificateImage: "/certificates/techfusion.png",
    quote: '"SMALL\nIDEAS\nBIG\nPOSSIBILITIES"',
    doodleImage: "/doodles/anime_pointing.jpg",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
};

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(null);

  return (
    <section id="experience" className="relative pt-[100px] pb-[100px]">
      <div className="section-container" ref={ref}>
        {/* Section header */}
        <motion.div
          className="mb-40 relative w-fit"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          <motion.h2
            variants={fadeUp}
            className="inline-block font-hammock text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-wide text-[#ff5500] mb-8 uppercase relative z-10 pb-10 border-b-[4px] sm:border-b-[6px] border-dashed border-black"
          >
            Experience
          </motion.h2>

          {/* Top Right Doodle (Trophy) */}
          <div className="absolute -top-12 -right-8 sm:-top-16 sm:-right-24 transform rotate-12 z-0 pointer-events-none opacity-90">
            <svg width="70" height="70" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              {/* Trophy Base */}
              <path d="M 30 80 L 70 80 L 65 95 L 35 95 Z" fill="none" stroke="black" strokeWidth="4" strokeLinejoin="round" />
              <line x1="45" y1="80" x2="45" y2="60" stroke="black" strokeWidth="4" />
              <line x1="55" y1="80" x2="55" y2="60" stroke="black" strokeWidth="4" />
              {/* Trophy Cup */}
              <path d="M 25 20 L 75 20 C 75 50, 60 60, 50 60 C 40 60, 25 50, 25 20 Z" fill="none" stroke="#ff5500" strokeWidth="4" strokeLinejoin="round" />
              {/* Handles */}
              <path d="M 25 25 C 10 25, 10 45, 30 45" fill="none" stroke="black" strokeWidth="4" />
              <path d="M 75 25 C 90 25, 90 45, 70 45" fill="none" stroke="black" strokeWidth="4" />
              {/* Star in middle */}
              <path d="M 50 30 L 53 38 L 62 38 L 55 43 L 57 52 L 50 47 L 43 52 L 45 43 L 38 38 L 47 38 Z" fill="black" />
            </svg>
          </div>

          {/* Bottom Left Doodle (Abstract Swoosh) */}
          <div className="absolute top-[80%] -left-10 sm:-left-20 transform -rotate-12 z-0 pointer-events-none opacity-80">
            <svg width="60" height="60" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <path d="M 50 10 Q 50 50 10 50 Q 50 50 50 90 Q 50 50 90 50 Q 50 50 50 10 Z" fill="none" stroke="#ff5500" strokeWidth="5" strokeLinejoin="round" />
              <circle cx="20" cy="20" r="4" fill="black" />
              <circle cx="80" cy="80" r="4" fill="black" />
              <circle cx="20" cy="80" r="4" fill="black" />
            </svg>
          </div>
          <motion.div variants={fadeUp} className="divider max-w-[200px]" />
        </motion.div>

        {/* Comic/Manga Style Cards */}
        <div className="flex flex-col gap-[32px] max-w-6xl mx-auto">
          {hackathons.map((hack, i) => (
            <motion.div
              key={hack.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: i * 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative flex flex-col md:flex-row w-full bg-[#fffdd0] hover:bg-black border-[4px] border-black hover:border-[#ff5500] transition-colors duration-500 overflow-hidden shadow-[8px_8px_0_0_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_rgba(255,85,0,0.5)]"
            >
              
              {/* Subtle comic halftone background */}
              <div 
                className="absolute inset-0 opacity-10 group-hover:opacity-20 pointer-events-none transition-opacity duration-500 mix-blend-multiply group-hover:mix-blend-screen"
                style={{
                  backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1px)",
                  backgroundSize: "8px 8px"
                }}
              />

              {/* ── LEFT COLUMN: Text Info ── */}
              <div className="flex-1 p-6 sm:p-8 relative z-10 flex flex-col">
                
                {/* Top Badges */}
                <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-4">
                  <span className="border-[3px] border-black group-hover:border-[#ff5500] bg-[#ff5500] group-hover:bg-[#fffdd0] text-black px-3 py-1 font-black text-sm sm:text-base uppercase tracking-wider transition-colors duration-500 shadow-[2px_2px_0_0_#000] group-hover:shadow-[2px_2px_0_0_#ff5500]">
                    {hack.date}
                  </span>
                  <span className="border-[3px] border-black group-hover:border-[#ff5500] bg-white group-hover:bg-black text-black group-hover:text-[#ff5500] px-3 py-1 font-black text-sm sm:text-base uppercase tracking-wider transition-colors duration-500 shadow-[2px_2px_0_0_#000] group-hover:shadow-[2px_2px_0_0_#ff5500]">
                    {hack.duration}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-black group-hover:text-[#fffdd0] uppercase tracking-tighter leading-none mb-3 transition-colors duration-500 drop-shadow-sm">
                  {hack.name}
                  <span className="inline-block ml-3 text-[#ff5500] scale-75 align-top opacity-80 group-hover:opacity-100 transition-opacity">✦</span>
                </h3>

                {/* Location */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-[#ff5500] text-xl">📍</span>
                  <p className="font-sans font-bold text-black group-hover:text-[#fffdd0] text-base sm:text-lg transition-colors duration-500">
                    {hack.venue}, <span className="text-[#ff5500]">{hack.city}</span>
                  </p>
                </div>

                {/* Thin black divider */}
                <div className="w-full border-b-[2px] border-black group-hover:border-[#ff5500] mb-5 transition-colors duration-500" />

                {/* Highlights */}
                <h4 className="font-display text-[#ff5500] font-black uppercase text-lg sm:text-xl mb-3 tracking-wide drop-shadow-sm">
                  KEY HIGHLIGHTS
                </h4>
                <ul className="space-y-2 mb-6 flex-1">
                  {hack.highlights.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-[#ff5500] text-lg leading-none mt-0.5">▶</span>
                      <span className="font-architects font-bold tracking-wide text-neutral-900 group-hover:text-[#fffdd0] text-base sm:text-lg leading-tight transition-colors duration-500">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Tags (Bottom Left) */}
                <div className="flex flex-wrap gap-2">
                  {hack.sponsors.map((tag) => (
                    <span
                      key={tag}
                      className="border-[2px] border-black group-hover:border-[#ff5500] bg-transparent group-hover:bg-transparent text-black group-hover:text-[#ff5500] px-2 py-1 font-black text-[10px] sm:text-xs uppercase tracking-wider transition-colors duration-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* ── RIGHT COLUMN: Manga Graphic Area & Button ── */}
              <div className="w-full md:w-[320px] lg:w-[380px] border-t-[4px] md:border-t-0 md:border-l-[4px] border-black group-hover:border-[#ff5500] p-6 relative flex flex-col justify-between items-end transition-colors duration-500 bg-white/50 group-hover:bg-black/50">
                
                {/* Speech Bubble / Quote with Doodles */}
                <div className="w-full h-full min-h-[300px] md:min-h-0 flex items-start justify-center relative mb-16 overflow-hidden">
                  
                  {/* Anime Character Doodle Image */}
                  {hack.doodleImage && (
                    <img 
                      src={hack.doodleImage} 
                      alt="Anime Doodle" 
                      className="absolute inset-0 w-full h-full object-cover object-center mix-blend-multiply group-hover:mix-blend-screen group-hover:invert group-hover:grayscale group-hover:opacity-90 transition-all duration-500 z-0 pointer-events-none transform group-hover:scale-105"
                    />
                  )}

                  {/* Doodle: Orange Spark/Star (Top Right) */}
                  <svg viewBox="0 0 100 100" className="absolute -top-2 right-2 w-16 h-16 text-[#ff5500] fill-current group-hover:fill-[#fffdd0] transition-colors duration-500 transform rotate-12 z-0" aria-hidden="true">
                    <path d="M50 5 C50 35, 65 50, 95 50 C65 50, 50 65, 50 95 C50 65, 35 50, 5 50 C35 50, 50 35, 50 5 Z" stroke="black" strokeWidth="4" strokeLinejoin="round" />
                  </svg>

                  {/* Doodle: Action/Burst Lines (Top Left) */}
                  <svg viewBox="0 0 100 100" className="absolute top-4 left-4 w-20 h-20 text-black group-hover:text-[#ff5500] transition-colors duration-500 stroke-current z-0" strokeWidth="6" strokeLinecap="round" aria-hidden="true">
                    <line x1="20" y1="20" x2="40" y2="40" />
                    <line x1="50" y1="5" x2="50" y2="30" />
                    <line x1="80" y1="20" x2="60" y2="40" />
                  </svg>

                  {/* Doodle: Messy Scribble/Cross (Bottom Left) */}
                  <svg viewBox="0 0 100 100" className="absolute bottom-4 left-8 w-12 h-12 text-black group-hover:text-[#ff5500] transition-colors duration-500 stroke-current z-0 transform -rotate-12" strokeWidth="8" strokeLinecap="round" aria-hidden="true">
                    <line x1="20" y1="20" x2="80" y2="80" />
                    <line x1="80" y1="20" x2="20" y2="80" />
                    <circle cx="50" cy="50" r="40" fill="none" strokeWidth="4" strokeDasharray="10 10" />
                  </svg>

                  {/* Doodle: Speed Dots/Halftone Block (Right Center) */}
                  <div className="absolute top-1/2 right-4 w-12 h-12 bg-black group-hover:bg-[#ff5500] transition-colors duration-500 z-0" style={{ clipPath: 'polygon(0 0, 100% 20%, 80% 100%, 20% 80%)', maskImage: 'radial-gradient(circle, black 2px, transparent 2px)', maskSize: '6px 6px' }} />

                  {/* Thought Bubble */}
                  <div className="absolute top-2 left-2 z-10 flex flex-col items-start transform -rotate-6 group-hover:rotate-0 transition-all duration-500">
                    <div className="relative w-24 h-24 sm:w-28 sm:h-28 bg-white group-hover:bg-[#fffdd0] border-[3px] border-black rounded-[50%] flex items-center justify-center p-2 sm:p-3 text-center shadow-[4px_4px_0_0_#000] group-hover:shadow-[6px_6px_0_0_#ff5500] transition-colors duration-500">
                      <p className="font-display font-black text-black text-[9px] sm:text-[11px] leading-[1.1] whitespace-pre-line italic">
                        {hack.quote}
                      </p>
                    </div>
                    {/* Thought dots (clouds) trailing down towards the character */}
                    <div className="w-4 h-4 bg-white group-hover:bg-[#fffdd0] border-[2px] border-black rounded-full ml-12 mt-1 shadow-[2px_2px_0_0_#000] transition-colors duration-500" />
                    <div className="w-2 h-2 bg-white group-hover:bg-[#fffdd0] border-[1.5px] border-black rounded-full ml-16 mt-0.5 shadow-[1px_1px_0_0_#000] transition-colors duration-500" />
                  </div>

                  {/* Cyberpunk Kanji/Decor in background */}
                  <div className="absolute -bottom-6 right-2 opacity-15 group-hover:opacity-40 pointer-events-none transition-opacity duration-500 z-0 transform rotate-12">
                    <span className="font-black text-7xl text-black group-hover:text-[#ff5500]">熱</span>
                  </div>
                </div>

                {/* View Certificate Button */}
                <div className="w-full mt-auto relative z-20">
                  <button
                    onClick={() => hack.certificateImage ? setSelectedCertificate(hack.certificateImage) : null}
                    className="w-full flex justify-between items-center bg-[#ff5500] group-hover:bg-[#fffdd0] border-[4px] border-black group-hover:border-[#ff5500] text-black px-4 py-3 font-black text-sm sm:text-base uppercase tracking-widest transition-colors duration-500 shadow-[4px_4px_0_0_#000] group-hover:shadow-[0_0_15px_rgba(255,85,0,0.5)] active:translate-y-1 active:shadow-none hover:pl-6"
                  >
                    <span>VIEW CERTIFICATE</span>
                    <span className="text-xl">→</span>
                  </button>
                </div>
              </div>

            </motion.div>
          ))}
        </div>
      </div>

      {/* Certificate Modal */}
      <AnimatePresence>
        {selectedCertificate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-12 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedCertificate(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-5xl w-full max-h-[90vh] bg-[#fffdd0] border-[4px] border-[#ff5500] p-2 flex flex-col shadow-[12px_12px_0_0_#000]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedCertificate(null)}
                className="absolute -top-4 -right-4 w-10 h-10 bg-[#ff5500] border-[4px] border-black text-black flex items-center justify-center hover:bg-black hover:text-[#ff5500] hover:border-[#ff5500] transition-colors z-10 font-black text-xl"
              >
                ✕
              </button>
              <div className="relative w-full h-full overflow-hidden border-[4px] border-black bg-white flex-1 min-h-[50vh]">
                <img 
                  src={selectedCertificate} 
                  alt="Hackathon Certificate" 
                  className="w-full h-full object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
