"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ProjectCard from "./ProjectCard";

export interface Project {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  live?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: "Campus Flow",
    description:
      "An AI-powered campus commerce and intelligence platform that transforms college life. Students can buy, sell, lend, and borrow resources through a trusted peer-to-peer marketplace. The platform features a digital food ordering system with real-time availability, a merchant dashboard with sales analytics, and an AI-driven demand prediction engine. Built with multilingual support and automated report generation using Gemini AI for administrative decision-making.",
    tags: ["React", "TypeScript", "Python", "MongoDB", "Gemini AI"],
    github: "https://github.com/vikash1551/CDS",
    live: "https://cds-gamma.vercel.app",
    featured: true,
  },
  {
    title: "Track Expenses",
    description: "Track Expense is a full-stack personal finance management application designed to help users track their spending, manage budgets, and make smarter financial decisions. It provides a centralized dashboard for monitoring expenses, analyzing spending patterns, and receiving personalized AI-powered financial insights and recommendations. The application also includes secure JWT authentication with email OTP verification, category-wise expense tracking, budget monitoring, overspending alerts, and monthly analytics.",
    tags: ["Java", "Spring Boot", "MySQL", "React", "TanStack", "Tailwind CSS"],
    github: "https://github.com/vikash1551/Track-Expenses",
    featured: false,
  },
  {
    title: "Dayflow-Human Resource Management System",
    description: "Dayflow is a comprehensive Human Resource Management System (HRMS) designed to digitize and streamline essential HR operations. It features separate role-based dashboards for Employees and HR Officers, simplifying employee onboarding, attendance tracking, leave management, and payroll visibility. Built with secure authentication, it ensures smooth and efficient organizational workflows.",
    tags: ["React", "Node.js", "TypeScript", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/vikash1551/kopilot",
    featured: false,
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

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="relative pt-[100px] pb-[100px]">
      <div className="section-container" ref={ref}>
        {/* Section header */}
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
            className="inline-block font-hammock text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-wide text-[#ff5500] mb-8 uppercase relative z-10 pb-10 border-b-[4px] sm:border-b-[6px] border-dashed border-black"
          >
            Projects
          </motion.h2>
          
          {/* Top Right Doodle (Lightbulb) */}
          <div className="absolute -top-10 -right-16 sm:-top-16 sm:-right-24 transform rotate-12 z-0 pointer-events-none opacity-80">
            <svg width="80" height="80" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              {/* Lightbulb Glass */}
              <path d="M 30 40 C 30 10, 70 10, 70 40 C 70 60, 60 70, 60 80 L 40 80 C 40 70, 30 60, 30 40 Z" fill="none" stroke="black" strokeWidth="4" strokeLinejoin="round" />
              {/* Filament */}
              <path d="M 45 40 L 50 25 L 55 40" fill="none" stroke="#ff5500" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
              {/* Base */}
              <rect x="40" y="80" width="20" height="10" fill="black" />
              <line x1="45" y1="95" x2="55" y2="95" stroke="black" strokeWidth="4" strokeLinecap="round" />
              {/* Glow lines */}
              <line x1="50" y1="5" x2="50" y2="15" stroke="#ff5500" strokeWidth="4" strokeLinecap="round" />
              <line x1="20" y1="20" x2="28" y2="28" stroke="#ff5500" strokeWidth="4" strokeLinecap="round" />
              <line x1="80" y1="20" x2="72" y2="28" stroke="#ff5500" strokeWidth="4" strokeLinecap="round" />
            </svg>
          </div>

          {/* Bottom Left Doodle (Pencil) */}
          <div className="absolute top-[80%] -left-12 sm:-left-20 transform -rotate-12 z-0 pointer-events-none opacity-85">
            <svg width="90" height="90" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              {/* Body */}
              <polygon points="20,80 30,85 85,30 75,20" fill="none" stroke="black" strokeWidth="4" strokeLinejoin="round" />
              {/* Tip */}
              <polygon points="20,80 30,85 10,95" fill="none" stroke="black" strokeWidth="4" strokeLinejoin="round" />
              {/* Lead */}
              <polygon points="14,88 22,92 10,95" fill="#ff5500" />
              {/* Lines on body */}
              <line x1="25" y1="82" x2="80" y2="27" stroke="black" strokeWidth="4" />
              {/* Eraser */}
              <path d="M 75 20 Q 80 15 85 20 Q 90 25 85 30" fill="none" stroke="#ff5500" strokeWidth="4" strokeLinejoin="round" />
              {/* Scribble below pencil */}
              <path d="M 5 100 Q 15 90 25 100 T 45 100" fill="none" stroke="black" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </div>

          <motion.div variants={fadeUp} className="divider max-w-[200px]" />
        </motion.div>

        {/* Projects — ticket cards */}
        <div className="flex flex-col gap-12 lg:gap-16 relative">
          
          {/* Background Doodles on the Right Side */}
          <div className="hidden lg:block absolute top-[15%] -right-8 xl:-right-16 opacity-60 transform rotate-12 pointer-events-none z-0 hover:opacity-100 transition-opacity duration-500">
            <svg width="150" height="150" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              {/* Cassette Body */}
              <rect x="10" y="25" width="80" height="50" rx="4" fill="none" stroke="black" strokeWidth="4" strokeLinejoin="round" />
              {/* Top trapezoid */}
              <polygon points="20,25 25,15 75,15 80,25" fill="none" stroke="black" strokeWidth="4" strokeLinejoin="round" />
              {/* Reels */}
              <circle cx="30" cy="50" r="10" fill="none" stroke="#ff5500" strokeWidth="4" />
              <circle cx="70" cy="50" r="10" fill="none" stroke="#ff5500" strokeWidth="4" />
              <circle cx="30" cy="50" r="3" fill="black" />
              <circle cx="70" cy="50" r="3" fill="black" />
              {/* Label */}
              <rect x="45" y="45" width="10" height="10" fill="none" stroke="black" strokeWidth="3" />
              {/* Bottom detail */}
              <line x1="20" y1="65" x2="80" y2="65" stroke="black" strokeWidth="3" strokeLinecap="round" />
              {/* Tape squiggles */}
              <path d="M 85 75 Q 95 85 85 95 T 75 95 T 85 85" fill="none" stroke="#ff5500" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </div>

          <div className="hidden lg:block absolute top-[60%] -right-16 xl:-right-24 opacity-70 transform -rotate-12 pointer-events-none z-0 hover:opacity-100 transition-opacity duration-500">
            <svg width="140" height="140" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              {/* Cup */}
              <path d="M 25 30 L 30 70 C 30 90, 70 90, 70 70 L 75 30 Z" fill="none" stroke="black" strokeWidth="4" strokeLinejoin="round" />
              {/* Handle */}
              <path d="M 72 40 C 95 40, 95 65, 71 65" fill="none" stroke="black" strokeWidth="4" strokeLinecap="round" />
              {/* Steam */}
              <path d="M 40 20 Q 35 10 45 5" fill="none" stroke="#ff5500" strokeWidth="4" strokeLinecap="round" />
              <path d="M 55 22 Q 50 10 60 5" fill="none" stroke="#ff5500" strokeWidth="4" strokeLinecap="round" />
              {/* Accent Lines */}
              <line x1="40" y1="50" x2="60" y2="50" stroke="black" strokeWidth="4" strokeLinecap="round" />
              <line x1="45" y1="65" x2="55" y2="65" stroke="black" strokeWidth="4" strokeLinecap="round" />
              {/* Stars */}
              <path d="M 10 15 L 12 25 L 20 27 L 12 30 L 10 40 L 8 30 L 0 27 L 8 25 Z" fill="#ff5500" />
            </svg>
          </div>

          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}

          {/* Bottom small doodles (Visible on Mobile) */}
          <div className="absolute -bottom-8 left-4 sm:left-20 transform -rotate-12 opacity-80 pointer-events-none z-0">
            {/* Small Gear */}
            <svg width="40" height="40" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="30" fill="none" stroke="black" strokeWidth="8" />
              <circle cx="50" cy="50" r="10" fill="none" stroke="#ff5500" strokeWidth="6" />
              {/* Gear teeth */}
              <rect x="42" y="5" width="16" height="20" fill="black" rx="2" />
              <rect x="42" y="75" width="16" height="20" fill="black" rx="2" />
              <rect x="5" y="42" width="20" height="16" fill="black" rx="2" />
              <rect x="75" y="42" width="20" height="16" fill="black" rx="2" />
              <rect x="20" y="20" width="16" height="20" fill="black" transform="rotate(45 28 30)" rx="2" />
              <rect x="65" y="65" width="16" height="20" fill="black" transform="rotate(45 73 75)" rx="2" />
              <rect x="65" y="20" width="16" height="20" fill="black" transform="rotate(-45 73 30)" rx="2" />
              <rect x="20" y="65" width="16" height="20" fill="black" transform="rotate(-45 28 75)" rx="2" />
            </svg>
          </div>

          <div className="absolute -bottom-16 right-6 sm:right-32 transform rotate-[15deg] opacity-70 pointer-events-none z-0">
            {/* Small Code Brackets */}
            <svg width="50" height="50" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <path d="M 30 20 L 10 50 L 30 80" fill="none" stroke="black" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M 70 20 L 90 50 L 70 80" fill="none" stroke="#ff5500" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
              <line x1="60" y1="20" x2="40" y2="80" stroke="black" strokeWidth="8" strokeLinecap="round" />
            </svg>
          </div>

        </div>
      </div>
    </section>
  );
}
