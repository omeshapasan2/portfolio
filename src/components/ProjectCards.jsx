"use client";
import React from "react";
import { motion } from "framer-motion";
import { PinContainer } from "./ui/3d-pin";
import fably from "../assets/fably.png";
import timely from "../assets/timely.png";
import hypernotes from "../assets/hypernotes.png";
import flixlog from "../assets/flixlog.png";

const projects = [
  {
    title: "https://fably.pro",
    component: (
      <PinContainer title="Visit Live Site" href="https://fably.pro">
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] min-h-[20rem]">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
            "Fably" Virtual Try-On Shopping App
          </h3>
          <p className="text-base !m-0 !p-0 font-normal text-slate-500">
            Developed a virtual try-on shopping app that allows users to select clothing items from a store and upload their photo. The app uses the CatVTON AI model to fit the selected clothing onto the user's image.
          </p>

          <ul className="list-disc pl-5 mt-2 text-slate-500 text-sm">
            <li>Clothing selection from a virtual store</li>
            <li>Image upload for virtual try-on</li>
            <li>AI-powered clothing fitting using CatVTON</li>
            <li>Responsive and user-friendly interface</li>
          </ul>

          <p className="mt-2 text-slate-500 text-sm">
            <strong>Tech Stack:</strong> Python, AI/ML, CatVTON, Web Development
          </p>

          <div className="flex flex-1 w-full rounded-lg mt-4 overflow-hidden">
            <img
              src={fably}
              alt="Fably Virtual Try-On App"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </PinContainer>
    ),
  },
  {
    title: "https://timely.omeshapasan.site",
    component: (
      <PinContainer title="Visit Live Site" href="https://timely.omeshapasan.site">
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] min-h-[20rem]">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
            "Timely" Timetable App
          </h3>
          <p className="text-base !m-0 !p-0 font-normal text-slate-500">
            A Flutter-based timetable management app that helps users organize their daily schedules efficiently. Features a clean dark theme interface with intuitive controls for adding, editing, and tracking schedule entries.
          </p>

          <ul className="list-disc pl-5 mt-2 text-slate-500 text-sm">
            <li>Add timetable entries with time, title and description</li>
            <li>Day-wise organization with slidable tabs</li>
            <li>AMOLED dark theme for better visibility</li>
            <li>Local storage using Hive for offline access</li>
            <li>Countdown timer for upcoming events</li>
          </ul>

          <p className="mt-2 text-slate-500 text-sm">
            <strong>Tech Stack:</strong> Flutter, Dart, Hive, Material Design
          </p>

          <div className="flex flex-1 w-full rounded-lg mt-4 overflow-hidden">
            <img
              src={timely}
              alt="Timely Timetable App"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </PinContainer>
    ),
  },
  {
    title: "https://notes.omeshapasan.site",
    component: (
      <PinContainer title="Visit Live Site" href="https://notes.omeshapasan.site">
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] min-h-[20rem]">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
            "HyperNotes" Cross-Platform Notes App
          </h3>
          <p className="text-base !m-0 !p-0 font-normal text-slate-500">
            A Cross-platform notes app enabling users to create, view, and organize notes, with seamless access and editing through both mobile and web apps.
          </p>

          <ul className="list-disc pl-5 mt-2 text-slate-500 text-sm">
            <li>Cross-platform functionality (mobile and web)</li>
            <li>Real-time synchronization using Firebase</li>
            <li>Responsive design with Tailwind CSS</li>
            <li>User authentication and data security</li>
          </ul>

          <p className="mt-2 text-slate-500 text-sm">
            <strong>Tech Stack:</strong> Flutter, React, Firebase, Firestore, Tailwind CSS
          </p>

          <div className="flex flex-1 w-full rounded-lg mt-4 overflow-hidden">
            <img
              src={hypernotes}
              alt="HyperNotes Cross-Platform App"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </PinContainer>
    ),
  },
  {
    title: "https://flixlog.omeshapasan.site",
    component: (
      <PinContainer title="Visit Live Site" href="https://flixlog.omeshapasan.site">
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] min-h-[20rem]">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
            "FlixLog" Movie/Series Explorer App
          </h3>
          <p className="text-base !m-0 !p-0 font-normal text-slate-500">
            A responsive web app with React and TMDb API to search movies/series, view details, track ongoing shows, and manage a synced Favorites & Watchlist tied to user accounts.
          </p>

          <ul className="list-disc pl-5 mt-2 text-slate-500 text-sm">
            <li>Search movies and series via TMDb API.</li>
            <li>Responsive design with light/dark theme toggle.</li>
            <li>Add titles to categorized watchlists and favorites.</li>
            <li>Ongoing tab shows next episode release dates.</li>
            <li>Profile tab with name and avatar customization.</li>
            <li>Filter options for movies and series.</li>
          </ul>

          <p className="mt-2 text-slate-500 text-sm">
            <strong>Tech Stack:</strong> React, TMDb API, Firebase, Tailwind CSS
          </p>

          <div className="flex flex-1 w-full rounded-lg mt-4 overflow-hidden">
            <img
              src={flixlog}
              alt="FlixLog Movie Explorer App"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </PinContainer>
    ),
  },
];

export function ProjectCards() {
  const duplicatedProjects = [...projects, ...projects];
  const cardWidth = 336; // 20rem + gap (320px + 16px gap)
  const totalWidth = projects.length * cardWidth;

  return (
    <div className="h-[40rem] w-full overflow-hidden">
      <div className="flex items-center justify-center h-full">
        <motion.div
          className="flex gap-20"
          animate={{ 
            x: [0, -totalWidth] 
          }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            duration: 25, // Slower for better readability
          }}
          style={{
            width: `${duplicatedProjects.length * cardWidth}px`
          }}
        >
          {duplicatedProjects.map((proj, index) => (
            <div 
              key={`${proj.title}-${index}`} 
              className="shrink-0 w-[20rem]"
            >
              {proj.component}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}