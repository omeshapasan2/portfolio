"use client";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import fably from '../assets/fably.png';
import timely from '../assets/timely.png';
import hypernotes from '../assets/hypernotes.png';
import flixlog from '../assets/flixlog.png';

export function ProjectCards() {
  return (
    <div className="h-[40rem] w-full flex items-center justify-center ">
        
        {/* Fably */}
        <PinContainer title="Visit Live Site" href="https://fably.pro">
            <div
            className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] min-h-[20rem]"
>
            <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
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
                        alt="Descriptive alt text"
                        className="w-full h-auto object-cover"
                    />
                </div>
            </div>
        </PinContainer>

        {/* Timely */}
        <PinContainer title="Visit Live Site" href="https://timely.omeshapasan.site">
            <div
            className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] min-h-[20rem]"
>
            <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
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
                        alt="Descriptive alt text"
                        className="w-full h-auto object-cover"
                    />
                </div>
            </div>
        </PinContainer>

        {/* HyperNotes */}
        <PinContainer title="Visit Live Site" href="https://notes.omeshapasan.site">
            <div
            className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] min-h-[20rem]"
>
            <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
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
                        alt="Descriptive alt text"
                        className="w-full h-auto object-cover"
                    />
                </div>
            </div>
        </PinContainer>

        {/* FlixLog */}
        <PinContainer title="Visit Live Site" href="https://flixlog.omeshapasan.site">
            <div
            className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] min-h-[20rem]"
>
            <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
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
            <strong>Technologies:</strong> Python, AI/ML, CatVTON, Web Development
            </p>

            <div className="flex flex-1 w-full rounded-lg mt-4 overflow-hidden">
                    <img
                        src={flixlog}
                        alt="Descriptive alt text"
                        className="w-full h-auto object-cover"
                    />
                </div>
            </div>
        </PinContainer>

    </div>
  );
}
