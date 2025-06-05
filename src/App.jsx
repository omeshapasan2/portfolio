import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeroSection from './components/HeroSection'
import Skills from './components/Skills'
import { ProjectsMarquee } from './components/ProjectsMarquee'
import { ProjectCards } from './components/ProjectCards'
import Education from './components/Education'

function App() {
  

  return (
    <>
      <HeroSection />
      <Skills />
      <ProjectsMarquee />
      <ProjectCards />
      <Education />
    </>
  )
}

export default App
