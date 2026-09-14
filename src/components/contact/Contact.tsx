"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Send, Mail, GitFork, Link as LinkIcon, Power, Download, Maximize2 } from "lucide-react";
import { SiLeetcode } from "react-icons/si";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
};

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isPhoneOn, setIsPhoneOn] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formState);
  };

  return (
    <section id="contact" className="relative pt-[100px] pb-[100px]">
      <div className="section-container" ref={ref}>
        {/* Section Header */}
        <motion.div
          className="mb-32 sm:mb-40 lg:mb-48 relative w-fit"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          <motion.h2
            variants={fadeUp}
            className="inline-block font-hammock text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-wide text-[#ff5500] mb-8 relative z-10 pb-10 border-b-[4px] sm:border-b-[6px] border-dashed border-black"
          >
            Get in Touch
          </motion.h2>

          {/* Top Right Doodle (Paper Plane) */}
          <div className="absolute -top-12 -right-10 sm:-top-16 sm:-right-24 transform rotate-12 z-0 pointer-events-none opacity-90 animate-pulse">
            <svg width="70" height="70" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              {/* Plane body */}
              <polygon points="10,40 90,20 60,90 50,60" fill="none" stroke="black" strokeWidth="4" strokeLinejoin="round" />
              {/* Fold line */}
              <polygon points="90,20 30,55 50,60" fill="none" stroke="#ff5500" strokeWidth="4" strokeLinejoin="round" />
              <line x1="30" y1="55" x2="35" y2="75" stroke="black" strokeWidth="4" strokeLinecap="round" />
              {/* Trailing dashed line */}
              <path d="M 10 90 Q 20 80 15 60" fill="none" stroke="black" strokeWidth="4" strokeLinecap="round" strokeDasharray="6 6" />
            </svg>
          </div>

          {/* Bottom Left Doodle (Envelope) */}
          <div className="absolute top-[75%] -left-12 sm:-left-20 transform -rotate-12 z-0 pointer-events-none opacity-85">
            <svg width="60" height="60" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <rect x="15" y="25" width="70" height="50" fill="none" stroke="black" strokeWidth="4" strokeLinejoin="round" />
              <polyline points="15,25 50,55 85,25" fill="none" stroke="#ff5500" strokeWidth="4" strokeLinejoin="round" />
              <polyline points="15,75 40,50" fill="none" stroke="black" strokeWidth="4" strokeLinecap="round" />
              <polyline points="85,75 60,50" fill="none" stroke="black" strokeWidth="4" strokeLinecap="round" />
            </svg>
          </div>
          <motion.div variants={fadeUp} className="divider max-w-[200px]" />
        </motion.div>

        {/* Dummy Space */}
        <div className="h-4 sm:h-6 w-full" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 relative">
          
          {/* Floating Doodle (Computer Monitor) */}
          <div className="absolute top-[35%] sm:top-[45%] lg:top-[30%] xl:top-[40%] -left-4 sm:-left-12 lg:left-1/2 lg:-translate-x-1/2 transform -rotate-12 lg:rotate-6 z-0 pointer-events-none opacity-60 hover:opacity-100 transition-opacity duration-500">
            <svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              {/* Monitor screen */}
              <rect x="15" y="20" width="70" height="45" rx="4" fill="none" stroke="black" strokeWidth="4" strokeLinejoin="round" />
              <rect x="22" y="27" width="56" height="31" fill="none" stroke="black" strokeWidth="3" strokeLinejoin="round" />
              {/* Stand */}
              <path d="M 40 65 L 45 80 L 55 80 L 60 65" fill="none" stroke="black" strokeWidth="4" strokeLinejoin="round" />
              {/* Base */}
              <line x1="30" y1="80" x2="70" y2="80" stroke="black" strokeWidth="4" strokeLinecap="round" />
              {/* Screen content (Code lines) */}
              <path d="M 27 35 L 50 35 M 27 43 L 38 43 M 27 50 L 65 50" fill="none" stroke="#ff5500" strokeWidth="4" strokeLinecap="round" />
            </svg>
          </div>
          {/* Left - info */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-8 relative"
          >
            {/* Bug Doodle (Floating in empty space) */}
            <div className="absolute top-[10%] -right-12 sm:-right-6 lg:-right-16 xl:-right-24 transform rotate-[25deg] z-0 pointer-events-none opacity-85">
              <svg width="70" height="70" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                {/* Antennae */}
                <path d="M 40 25 C 30 15, 20 15, 25 5" fill="none" stroke="black" strokeWidth="4" strokeLinecap="round" />
                <path d="M 60 25 C 70 15, 80 15, 75 5" fill="none" stroke="black" strokeWidth="4" strokeLinecap="round" />
                {/* Legs Left */}
                <path d="M 35 45 L 15 40 L 5 50" fill="none" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M 35 60 L 10 60 L 0 75" fill="none" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M 40 75 L 20 85 L 10 95" fill="none" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                {/* Legs Right */}
                <path d="M 65 45 L 85 40 L 95 50" fill="none" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M 65 60 L 90 60 L 100 75" fill="none" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M 60 75 L 80 85 L 90 95" fill="none" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                {/* Body (Bug Abdomen) */}
                <ellipse cx="50" cy="65" rx="22" ry="26" fill="#ff5500" stroke="black" strokeWidth="4" />
                {/* Body lines (stripes) */}
                <line x1="32" y1="55" x2="68" y2="55" stroke="black" strokeWidth="3" />
                <line x1="28" y1="65" x2="72" y2="65" stroke="black" strokeWidth="3" />
                <line x1="32" y1="75" x2="68" y2="75" stroke="black" strokeWidth="3" />
                <line x1="50" y1="39" x2="50" y2="91" stroke="black" strokeWidth="4" />
                {/* Head */}
                <circle cx="50" cy="32" r="10" fill="black" />
                {/* Eyes */}
                <circle cx="45" cy="30" r="2.5" fill="#ff5500" />
                <circle cx="55" cy="30" r="2.5" fill="#ff5500" />
              </svg>
            </div>

            <div className="pt-24 lg:pt-40 xl:pt-48 relative z-10">

              {/* PHONE VIEW (Mobile) */}
              <div className="relative flex items-center md:hidden max-w-[280px] mx-auto sm:mx-0">
                {/* Phone Body */}
                <div className="relative w-[280px] h-[560px] bg-neutral-900 rounded-[40px] border-[12px] border-black shadow-[20px_20px_0px_0px_rgba(0,0,0,0.1)] overflow-hidden shrink-0">
                  
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-20 flex justify-center items-center gap-2">
                    <div className="w-12 h-1.5 bg-neutral-800 rounded-full" />
                    <div className="w-2 h-2 bg-blue-900/40 rounded-full" />
                  </div>

                  {/* Screen Content */}
                  <div className="relative w-full h-full bg-black overflow-hidden">
                    <AnimatePresence initial={false}>
                      {isPhoneOn ? (
                        <motion.div
                          key="on"
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 1.05 }}
                          transition={{ duration: 0.4 }}
                          className="absolute inset-0 bg-[#fffdd0]"
                        >
                          {/* Status Bar */}
                          <div className="absolute top-0 left-0 right-0 h-7 flex justify-between items-center px-5 z-10 font-sans text-[10px] font-bold text-black pointer-events-none">
                            <span>{time}</span>
                            <div className="flex gap-1 items-center">
                              <div className="w-3 h-2 bg-black rounded-sm relative">
                                <div className="absolute -right-[2px] top-0.5 w-[2px] h-1 bg-black rounded-r-sm" />
                              </div>
                            </div>
                          </div>

                          {/* App Content */}
                          <div className="pt-8 h-full flex flex-col">
                            <div className="px-4 py-2 flex items-center justify-between border-b border-neutral-200">
                              <span className="font-display font-bold text-sm"></span>
                              <a
                                href="/resume/Vikash%20Resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#ff5500] hover:text-black transition-colors"
                              >
                                <Maximize2 size={16} />
                              </a>
                            </div>
                            
                            <div className="flex-1 bg-neutral-200 relative overflow-hidden">
                              <iframe 
                                src="/resume/Vikash%20Resume.pdf" 
                                className="w-full h-full border-none pointer-events-auto"
                                title="Resume PDF"
                              />
                            </div>

                            {/* App Bottom Bar */}
                            <div className="h-16 bg-white border-t border-neutral-200 flex items-center justify-center px-4 shrink-0">
                              <a
                                href="/resume/Vikash%20Resume.pdf"
                                download="Vikash_Resume.pdf"
                                className="w-full bg-[#ff5500] hover:bg-black text-white font-mono text-[10px] tracking-widest uppercase font-bold py-3 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-lg"
                              >
                                <Download size={14} />
                                Download PDF
                              </a>
                            </div>
                          </div>
                        </motion.div>
                      ) : (
                        <motion.div
                          key="off"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="absolute inset-0 bg-black flex items-center justify-center flex-col gap-4"
                        >
                          <span className="text-neutral-600 font-mono text-xs font-bold tracking-widest uppercase">
                            Screen Off
                          </span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Power Button */}
                <div className="absolute -right-[14px] top-32 z-10">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setIsPhoneOn(!isPhoneOn)}
                      className={`w-3 h-16 rounded-r-md transition-all duration-300 shadow-xl border-y border-r border-black flex items-center justify-center ${
                        isPhoneOn 
                          ? 'bg-neutral-800' 
                          : 'bg-[#ff5500] hover:bg-[#ff7733]'
                      }`}
                      aria-label="Toggle Phone Power"
                    >
                      <div className="w-1 h-8 bg-black/20 rounded-full" />
                    </button>
                    
                    {/* Helper text with arrow */}
                    <motion.div 
                      animate={{ x: [0, -5, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                      className="flex items-center gap-2 absolute left-6"
                    >
                      <span className="text-[#ff5500] font-bold">←</span>
                      <span className="font-mono text-[10px] uppercase font-bold tracking-widest text-neutral-500 whitespace-nowrap">
                        {isPhoneOn ? "Turn Off" : "Turn On"}
                      </span>
                    </motion.div>
                  </div>
                </div>

                {/* Volume Buttons (Decorative) */}
                <div className="absolute -left-[14px] top-24 w-1.5 h-10 bg-neutral-800 rounded-l-md border-y border-l border-black" />
                <div className="absolute -left-[14px] top-36 w-1.5 h-10 bg-neutral-800 rounded-l-md border-y border-l border-black" />
              </div>

              {/* TABLET VIEW (iPad style) */}
              <div className="hidden md:flex lg:hidden relative items-center justify-center w-full max-w-[460px] mx-auto mt-8">
                {/* Tablet Body */}
                <div className="relative w-[460px] h-[640px] bg-neutral-900 rounded-[32px] border-[16px] border-black shadow-[20px_20px_0px_0px_rgba(0,0,0,0.15)] overflow-hidden shrink-0">
                  
                  {/* Camera (Tablet) */}
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-2 h-2 bg-neutral-800 rounded-full z-20 flex justify-center items-center">
                     <div className="w-1 h-1 bg-blue-900/40 rounded-full" />
                  </div>

                  {/* Screen Content */}
                  <div className="relative w-full h-full bg-black overflow-hidden">
                    <AnimatePresence initial={false}>
                      {isPhoneOn ? (
                        <motion.div
                          key="on-tab"
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 1.05 }}
                          transition={{ duration: 0.4 }}
                          className="absolute inset-0 bg-[#fffdd0]"
                        >
                          {/* Status Bar */}
                          <div className="absolute top-0 left-0 right-0 h-8 flex justify-between items-center px-6 z-10 font-sans text-xs font-bold text-black pointer-events-none">
                            <span>{time}</span>
                            <div className="flex gap-1.5 items-center">
                              <span className="text-[10px]">100%</span>
                              <div className="w-4 h-2.5 bg-black rounded-sm relative">
                                <div className="absolute -right-[2px] top-[2px] w-[2px] h-1.5 bg-black rounded-r-sm" />
                              </div>
                            </div>
                          </div>

                          {/* App Content */}
                          <div className="pt-10 h-full flex flex-col">
                            <div className="px-6 py-3 flex items-center justify-between border-b border-neutral-200">
                              <span className="font-display font-bold text-base"></span>
                              <a
                                href="/resume/Vikash%20Resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#ff5500] hover:text-black transition-colors"
                              >
                                <Maximize2 size={18} />
                              </a>
                            </div>
                            
                            <div className="flex-1 bg-neutral-200 relative overflow-hidden">
                              <iframe 
                                src="/resume/Vikash%20Resume.pdf" 
                                className="w-full h-full border-none pointer-events-auto"
                                title="Resume PDF"
                              />
                            </div>

                            {/* App Bottom Bar */}
                            <div className="h-20 bg-white border-t border-neutral-200 flex items-center justify-center px-6 shrink-0">
                              <a
                                href="/resume/Vikash%20Resume.pdf"
                                download="Vikash_Resume.pdf"
                                className="w-full max-w-sm bg-[#ff5500] hover:bg-black text-white font-mono text-[11px] tracking-widest uppercase font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-lg"
                              >
                                <Download size={16} />
                                Download PDF
                              </a>
                            </div>
                          </div>
                        </motion.div>
                      ) : (
                        <motion.div
                          key="off-tab"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="absolute inset-0 bg-black flex items-center justify-center flex-col gap-4"
                        >
                          <span className="text-neutral-600 font-mono text-sm font-bold tracking-widest uppercase">
                            Screen Off
                          </span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Power Button (Top Right edge) */}
                <div className="absolute -top-[19px] right-16 z-10">
                  <div className="flex flex-col items-center gap-3">
                    <button
                      onClick={() => setIsPhoneOn(!isPhoneOn)}
                      className={`w-16 h-3 rounded-t-md transition-all duration-300 shadow-xl border-x border-t border-black flex items-center justify-center ${
                        isPhoneOn 
                          ? 'bg-neutral-800' 
                          : 'bg-[#ff5500] hover:bg-[#ff7733]'
                      }`}
                      aria-label="Toggle Tablet Power"
                    >
                      <div className="w-8 h-1 bg-black/20 rounded-full" />
                    </button>
                    
                    {/* Helper text with arrow */}
                    <motion.div 
                      animate={{ y: [0, 5, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                      className="flex flex-col items-center gap-1 absolute top-6"
                    >
                      <span className="font-mono text-[10px] uppercase font-bold tracking-widest text-neutral-500 whitespace-nowrap">
                        {isPhoneOn ? "Turn Off" : "Turn On"}
                      </span>
                      <span className="text-[#ff5500] font-bold -rotate-90 inline-block -translate-y-1">→</span>
                    </motion.div>
                  </div>
                </div>

                {/* Volume Buttons (Decorative - Side) */}
                <div className="absolute -right-[19px] top-12 w-1 h-12 bg-neutral-800 rounded-r-md border-y border-r border-black" />
                <div className="absolute -right-[19px] top-28 w-1 h-12 bg-neutral-800 rounded-r-md border-y border-r border-black" />
              </div>

              {/* MACBOOK VIEW (Desktop) */}
              <div className="hidden lg:flex flex-col items-center w-full max-w-[600px] mt-20 relative">
                {/* Power helper for MacBook */}
                <div className="absolute -top-10 right-4 flex items-center gap-2">
                  <span className="font-mono text-[10px] uppercase font-bold tracking-widest text-neutral-500 whitespace-nowrap">
                    {isPhoneOn ? "Turn Off" : "Turn On"}
                  </span>
                  <span className="text-[#ff5500] font-bold rotate-90 inline-block translate-y-1">→</span>
                </div>
                
                {/* Macbook Screen */}
                <div className="relative w-full aspect-[16/10] bg-black rounded-t-2xl border-[12px] border-b-[24px] border-black shadow-2xl overflow-hidden">
                  
                  {/* Camera */}
                  <div className="absolute top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-neutral-800 rounded-full z-20 flex justify-center items-center">
                     <div className="w-0.5 h-0.5 bg-blue-900/50 rounded-full" />
                  </div>

                  {/* MacBook Label */}
                  <div className="absolute bottom-[-18px] left-1/2 -translate-x-1/2 font-sans text-[8px] tracking-widest text-neutral-400 font-bold z-20">
                    MACBOOK PRO
                  </div>

                  {/* Screen Content */}
                  <div className="relative w-full h-full bg-black overflow-hidden">
                    <AnimatePresence initial={false}>
                      {isPhoneOn ? (
                        <motion.div
                          key="on-mac"
                          initial={{ opacity: 0, scale: 0.98 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 1.02 }}
                          transition={{ duration: 0.4 }}
                          className="absolute inset-0 bg-neutral-100 flex flex-col"
                        >
                          {/* macOS Menu Bar */}
                          <div className="h-6 bg-white/80 backdrop-blur-md flex justify-between items-center px-3 z-10 border-b border-neutral-200">
                            <div className="flex gap-4 items-center">
                              <span className="font-display font-bold text-[10px]"></span>
                              <span className="font-sans font-bold text-[9px]">Finder</span>
                              <span className="font-sans font-medium text-[9px] text-neutral-600">File</span>
                              <span className="font-sans font-medium text-[9px] text-neutral-600">Edit</span>
                            </div>
                            <div className="flex gap-3 items-center font-sans font-medium text-[9px] text-black">
                              <span>100%</span>
                              <span>{time}</span>
                            </div>
                          </div>

                          {/* App Window */}
                          <div className="flex-1 p-4 pb-0 flex flex-col bg-neutral-200">
                            {/* Window Title Bar */}
                            <div className="h-7 bg-white rounded-t-lg border border-neutral-300 border-b-0 flex items-center px-3 gap-2 shrink-0">
                              <div className="flex gap-1.5">
                                <div className="w-2.5 h-2.5 rounded-full bg-red-400 border border-red-500" />
                                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400 border border-yellow-500" />
                                <div className="w-2.5 h-2.5 rounded-full bg-green-400 border border-green-500" />
                              </div>
                              <div className="flex-1 text-center font-sans font-bold text-[10px] text-neutral-700">
                                
                              </div>
                            </div>
                            
                            {/* PDF Viewer */}
                            <div className="flex-1 bg-white border-x border-neutral-300 relative overflow-hidden">
                              <iframe 
                                src="/resume/Vikash%20Resume.pdf" 
                                className="w-full h-full border-none pointer-events-auto"
                                title="Resume PDF"
                              />
                            </div>
                            
                            {/* Bottom Toolbar */}
                            <div className="h-10 bg-white border border-neutral-300 rounded-b-lg flex items-center justify-center px-4 shrink-0 mb-4 shadow-sm">
                              <a
                                href="/resume/Vikash%20Resume.pdf"
                                download="Vikash_Resume.pdf"
                                className="bg-[#ff5500] hover:bg-black text-white font-mono text-[10px] tracking-widest uppercase font-bold py-1.5 px-4 rounded transition-colors flex items-center gap-2"
                              >
                                <Download size={12} />
                                Download PDF
                              </a>
                            </div>
                          </div>
                        </motion.div>
                      ) : (
                        <motion.div
                          key="off-mac"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="absolute inset-0 bg-black flex items-center justify-center flex-col gap-4"
                        >
                          <span className="text-neutral-600 font-mono text-xs font-bold tracking-widest uppercase">
                            Screen Off
                          </span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* MacBook Base (Keyboard Deck) */}
                <div 
                  className="relative w-full h-[240px] bg-gradient-to-b from-[#e5e5e5] to-[#a3a3a3] rounded-b-3xl shadow-[0_20px_40px_rgba(0,0,0,0.4)] flex flex-col items-center border-t border-white/50 -mt-1 z-30 overflow-hidden"
                  style={{
                    transform: "perspective(1000px) rotateX(65deg)",
                    transformOrigin: "top"
                  }}
                >
                  {/* Keyboard indentation */}
                  <div className="w-[85%] h-[120px] mt-6 bg-[#1a1a1a] rounded-lg p-1.5 flex flex-col gap-[2px] shadow-inner border-b border-white/20">
                    {/* Row 1 */}
                    <div className="flex-1 grid grid-cols-[repeat(14,1fr)] gap-[2px]">
                      {Array(14).fill(0).map((_, i) => <div key={`r1-${i}`} className="bg-neutral-800 hover:bg-neutral-700 active:bg-neutral-500 active:scale-90 active:translate-y-[1px] transition-all duration-75 cursor-pointer rounded-[2px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] border-b border-black" />)}
                    </div>
                    {/* Row 2 */}
                    <div className="flex-1 grid grid-cols-[1.5fr_repeat(12,1fr)_1.5fr] gap-[2px]">
                      {Array(14).fill(0).map((_, i) => <div key={`r2-${i}`} className="bg-neutral-800 hover:bg-neutral-700 active:bg-neutral-500 active:scale-90 active:translate-y-[1px] transition-all duration-75 cursor-pointer rounded-[2px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] border-b border-black" />)}
                    </div>
                    {/* Row 3 */}
                    <div className="flex-1 grid grid-cols-[1.8fr_repeat(12,1fr)_1.2fr] gap-[2px]">
                      {Array(14).fill(0).map((_, i) => <div key={`r3-${i}`} className="bg-neutral-800 hover:bg-neutral-700 active:bg-neutral-500 active:scale-90 active:translate-y-[1px] transition-all duration-75 cursor-pointer rounded-[2px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] border-b border-black" />)}
                    </div>
                    {/* Row 4 */}
                    <div className="flex-1 grid grid-cols-[2.2fr_repeat(11,1fr)_2.2fr] gap-[2px]">
                      {Array(13).fill(0).map((_, i) => <div key={`r4-${i}`} className="bg-neutral-800 hover:bg-neutral-700 active:bg-neutral-500 active:scale-90 active:translate-y-[1px] transition-all duration-75 cursor-pointer rounded-[2px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] border-b border-black" />)}
                    </div>
                    {/* Row 5 */}
                    <div className="flex-1 grid grid-cols-[2.8fr_repeat(10,1fr)_2.8fr] gap-[2px]">
                      {Array(12).fill(0).map((_, i) => <div key={`r5-${i}`} className="bg-neutral-800 hover:bg-neutral-700 active:bg-neutral-500 active:scale-90 active:translate-y-[1px] transition-all duration-75 cursor-pointer rounded-[2px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] border-b border-black" />)}
                    </div>
                    {/* Row 6 (Spacebar) */}
                    <div className="flex-1 grid grid-cols-[1.5fr_1.2fr_1.5fr_6fr_1.5fr_1.2fr_1.5fr] gap-[2px]">
                      {Array(7).fill(0).map((_, i) => <div key={`r6-${i}`} className="bg-neutral-800 hover:bg-neutral-700 active:bg-neutral-500 active:scale-90 active:translate-y-[1px] transition-all duration-75 cursor-pointer rounded-[2px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] border-b border-black" />)}
                    </div>
                  </div>
                  
                  {/* Trackpad */}
                  <div className="w-[35%] h-[60px] mt-2 border border-black/10 bg-[#cfcfcf] rounded-md shadow-[inset_0_1px_3px_rgba(0,0,0,0.1)]" />
                  
                  {/* Trackpad notch */}
                  <div className="absolute bottom-0 w-24 h-2 bg-gradient-to-t from-black/20 to-transparent rounded-t-lg" />
                  
                  {/* Power Button on MacBook Keyboard Deck */}
                  <button
                    onClick={() => setIsPhoneOn(!isPhoneOn)}
                    className={`absolute top-6 right-[10%] w-8 h-8 rounded-full transition-all duration-150 shadow-[inset_0_1px_3px_rgba(0,0,0,0.5)] border border-black/40 flex items-center justify-center z-30 cursor-pointer active:scale-95 active:translate-y-[1px] ${
                      isPhoneOn 
                        ? 'bg-neutral-800 text-white' 
                        : 'bg-[#ff5500] hover:bg-[#ff7733] text-black'
                    }`}
                    aria-label="Toggle MacBook Power"
                  >
                    <Power size={14} />
                  </button>
                </div>
              </div>
            </div>
            </motion.div>

            {/* Right - Sticky Note */}
            <motion.div
              initial={{ opacity: 0, rotate: -10, x: 50 }}
              whileInView={{ opacity: 1, rotate: 3, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, type: "spring", bounce: 0.4 }}
              className="flex items-center justify-center relative w-full h-full lg:min-h-[500px] p-8 pb-16 lg:pb-0 lg:p-0"
            >
              <div className="relative w-full max-w-[400px] aspect-square bg-[#ffeb3b] border-[4px] border-black p-8 sm:p-10 shadow-[12px_12px_0_0_#000] flex flex-col justify-center transform transition-transform hover:rotate-0 duration-300 group cursor-default">
                {/* Tape */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-28 h-8 bg-white/70 border-2 border-black rotate-[-3deg] opacity-90 shadow-sm" />
                
                <h3 className="font-architects text-3xl sm:text-4xl font-bold mb-6 uppercase leading-tight tracking-tight text-black">
                  Want To Build <br/> <span className="text-[#ff5500]">Something Cool?</span>
                </h3>
                
                <p className="font-architects text-lg sm:text-xl font-bold leading-relaxed text-black/90">
                 Let's connect, collaborate, or just chat about exciting ideas. Feel free to reach out to me via the links below!
                </p>
        
              
              </div>
            </motion.div>
          </div>

        {/* Social Links - Full Page Centered */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 mt-80 sm:mt-48 w-full relative z-20"
        >
          <a href="https://github.com/vikash1551" target="_blank" rel="noopener noreferrer" className="p-4 bg-white border-[3px] border-black text-black hover:bg-[#ff5500] hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-[4px_4px_0_0_#000] hover:shadow-[6px_6px_0_0_#000]">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.24c3-.34 6-1.53 6-6.76a5.2 5.2 0 0 0-1.39-3.5 4.8 4.8 0 0 0-.12-3.4s-1.12-.36-3.7 1.4a12.8 12.8 0 0 0-7 0C5.12 2.66 4 3.02 4 3.02a4.8 4.8 0 0 0-.12 3.4A5.2 5.2 0 0 0 2.5 9.92c0 5.23 3 6.42 6 6.76a4.8 4.8 0 0 0-1 3.24v4"></path>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/vikash-kumar-397052372" target="_blank" rel="noopener noreferrer" className="p-4 bg-white border-[3px] border-black text-black hover:bg-[#ff5500] hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-[4px_4px_0_0_#000] hover:shadow-[6px_6px_0_0_#000]">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
              <rect width="4" height="12" x="2" y="9"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
          </a>
          <a href="https://leetcode.com/u/uxu8XJStol/" target="_blank" rel="noopener noreferrer" className="p-4 bg-white border-[3px] border-black text-black hover:bg-[#ff5500] hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-[4px_4px_0_0_#000] hover:shadow-[6px_6px_0_0_#000]">
            <SiLeetcode size={28} />
          </a>
          <a href="https://www.instagram.com/xo__vikash_/" target="_blank" rel="noopener noreferrer" className="p-4 bg-white border-[3px] border-black text-black hover:bg-[#ff5500] hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-[4px_4px_0_0_#000] hover:shadow-[6px_6px_0_0_#000]">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
            </svg>
          </a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=vikashkumar221005@gmail.com" target="_blank" rel="noopener noreferrer" className="p-4 bg-white border-[3px] border-black text-black hover:bg-[#ff5500] hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-[4px_4px_0_0_#000] hover:shadow-[6px_6px_0_0_#000]">
            <Mail size={28} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
