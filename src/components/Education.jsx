import React, { useState, useRef, useMemo } from "react";
import { motion, useMotionValue, useMotionTemplate, AnimatePresence } from "framer-motion";
import { CardSpotlight  } from './ui/card-spotlight';

// Utility function for className merging
const cn = (...classes) => {
  return classes.filter(Boolean).join(' ');
};

// Canvas Reveal Effect Component
const CanvasRevealEffect = ({
  animationSpeed = 0.4,
  opacities = [0.3, 0.3, 0.3, 0.5, 0.5, 0.5, 0.8, 0.8, 0.8, 1],
  colors = [[0, 255, 255]],
  containerClassName,
  dotSize,
  showGradient = true
}) => {
  return (
    <div className={cn("h-full relative bg-white w-full", containerClassName)}>
      <div className="h-full w-full">
        <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 animate-pulse"></div>
      </div>
      {showGradient && (
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 to-[84%]" />
      )}
    </div>
  );
};

// Hover Effect Component
const HoverEffect = ({ items, className }) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 gap-6 py-10", className)}>
      {items.map((item, idx) => (
        <div
          key={idx}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}>
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }} />
            )}
          </AnimatePresence>
          <Card>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="text-blue-400 font-semibold text-sm">{item.period}</span>
            </div>
            <CardTitle>{item.title}</CardTitle>
            <div className="text-purple-300 font-medium mb-3">{item.institution}</div>
            <CardDescription>{item.description}</CardDescription>
            {item.modules && (
              <div className="mt-4">
                <h5 className="text-white font-semibold mb-2">Notable Modules:</h5>
                <div className="flex flex-wrap gap-2">
                  {item.modules.map((module, i) => (
                    <span key={i} className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded-md text-xs">
                      {module}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {item.focus && (
              <div className="mt-4">
                <h5 className="text-white font-semibold mb-2">Focus Areas:</h5>
                <div className="flex flex-wrap gap-2">
                  {item.focus.map((area, i) => (
                    <span key={i} className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded-md text-xs">
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </Card>
        </div>
      ))}
    </div>
  );
};

const Card = ({ className, children }) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-6 overflow-hidden bg-black/50 border border-neutral-800 group-hover:border-blue-500/50 relative z-20 backdrop-blur-sm transition-all duration-300",
        className
      )}>
      <div className="relative z-50">
        {children}
      </div>
    </div>
  );
};

const CardTitle = ({ className, children }) => {
  return (
    <h4 className={cn("text-white font-bold tracking-wide text-lg mb-2", className)}>
      {children}
    </h4>
  );
};

const CardDescription = ({ className, children }) => {
  return (
    <p className={cn("text-zinc-300 tracking-wide leading-relaxed text-sm", className)}>
      {children}
    </p>
  );
};

// Education data
const educationData = [
  {
    period: "2023 - 2026",
    title: "BEng (Hons) Software Engineering",
    institution: "Informatics Institute of Technology, Colombo | University of Westminster, UK",
    description: "Currently pursuing a Bachelor's degree in Software Engineering with excellent academic performance across multiple core modules.",
    modules: [
      "Software Development I (73)",
      "Software Development II (69)", 
      "Mathematics for Computing (76)",
      "Computer Systems Fundamentals (89)",
      "Web Design and Development (79)"
    ]
  },
  {
    period: "2023",
    title: "Diploma in Enterprise Software Application Development",
    institution: "Institute of Engineering Technology - IDET",
    description: "Completed comprehensive diploma program focusing on modern software development practices and enterprise application architecture.",
    focus: [
      "Object-Oriented Programming (OOP)",
      "MySQL Database Management",
      "UI/UX Design",
      "Software Development Life Cycle (Agile)"
    ]
  },
  {
    period: "2019 - 2020",
    title: "G.C.E Advanced Level",
    institution: "Mahinda College, Galle, Sri Lanka",
    description: "Successfully completed Advanced Level examinations, demonstrating strong academic performance and preparation for higher education."
  },
  {
    period: "2012 - 2013", 
    title: "G.C.E Ordinary Level",
    institution: "Mahinda College, Galle, Sri Lanka",
    description: "Completed Ordinary Level examinations with excellent results, establishing a strong foundation for further academic pursuits."
  }
];

// Main Education Showcase Component
export default function Education() {
  return (
    <CardSpotlight className="">
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white tracking-tight relative z-20">
              Education
              <div className="w-24 h-1 bg-blue-500  mx-auto mt-4"></div>
            </h1>
            <p className="text-xl text-zinc-300 relative z-20 max-w-2xl mx-auto">
              A comprehensive journey through software engineering education, from foundational studies to advanced specialization
            </p>
          </div>
        

        {/* Education Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <HoverEffect items={educationData} className="max-w-6xl mx-auto" />
        </motion.div>

      </div>
    </div>
    </CardSpotlight>
  );
}