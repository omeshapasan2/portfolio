import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, Download, ExternalLink, X } from 'lucide-react';
import cn from 'clsx';
import profile from '../assets/pic2.jpg';

// Typewriter effect component
const Typewriter = ({ options }) => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const { strings, delay = 75, deleteSpeed = 50 } = options;

    const timer = setTimeout(() => {
      const currentString = strings[currentIndex];

      if (!isDeleting) {
        setText(currentString.substring(0, text.length + 1));

        if (text === currentString) {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        setText(currentString.substring(0, text.length - 1));

        if (text === '') {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % strings.length);
        }
      }
    }, isDeleting ? deleteSpeed : delay);

    return () => clearTimeout(timer);
  }, [text, isDeleting, currentIndex, options]);

  return (
    <span className={options.wrapperClassName}>
      {text}
      <span className={options.cursorClassName}>|</span>
    </span>
  );
};

const Spotlight = ({ className, fill }) => {
  return (
    <svg
      className={className}
      width="100%"
      height="100%"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="spotlight" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={fill} stopOpacity="1" />
          <stop offset="100%" stopColor={fill} stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#spotlight)" />
    </svg>
  );
};

const ViewCVButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Handle escape key press
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === 'Escape') {
        setIsModalOpen(false);
      }
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleEscapeKey);
      // Prevent body scrolling when modal is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = 'auto';
    };
  }, [isModalOpen]);

  const openModal = () => {
    setIsModalOpen(true);
    setIsLoading(true); // Reset loading state when opening modal
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsLoading(true); // Reset loading state when closing modal
  };

  const handleModalBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  return (
    <>
      {/* View CV Button */}
      <button
        onClick={openModal}
        className="relative inline-flex h-10 sm:h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 group transition-all duration-300 hover:scale-105"
      >
        <span className="absolute inset-[-1000%] animate-spin bg-gradient-conic from-purple-200 via-indigo-600 to-purple-200" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-4 sm:px-6 py-1 text-xs sm:text-sm font-medium text-white backdrop-blur-3xl group-hover:bg-slate-900 transition-colors">
          <Download className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
          <span className="hidden xs:inline">View CV</span>
          <span className="xs:hidden">View CV</span>
          <ExternalLink className="w-2 h-2 sm:w-3 sm:h-3 ml-1 sm:ml-2 opacity-70" />
        </span>
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm p-2 sm:p-4"
          onClick={handleModalBackdropClick}
        >
          <div className="relative w-full h-full max-w-6xl max-h-screen bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl shadow-2xl overflow-hidden">
            {/* Header with Close Button and Action Buttons */}
            <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between p-3 sm:p-4 bg-gradient-to-b from-black/20 to-transparent">
              {/* Close Button - Left side */}
              <button
                onClick={closeModal}
                className="p-2 bg-white/20 hover:bg-white/30 rounded-full shadow-lg transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-sm"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </button>

              {/* Action Buttons - Right side */}
              <div className="flex items-center space-x-2 sm:space-x-3">
                <a
                  href="https://www.canva.com/design/DAGkTBlVMd0/ydTvrdC_TUqU2mgeLiIQ4Q/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1 sm:space-x-2 px-3 sm:px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg transition-all duration-200 text-white text-xs sm:text-sm font-medium backdrop-blur-sm shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/50"
                >
                  <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="hidden sm:inline">Open in New Tab</span>
                  <span className="sm:hidden">Open in New Tab</span>
                </a>

                <a
                  href="https://media.omesha.site/Static/Omesha_Pasan_CV.pdf"
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1 sm:space-x-2 px-3 sm:px-4 py-2 bg-blue-500/80 hover:bg-blue-600/80 rounded-lg transition-all duration-200 text-white text-xs sm:text-sm font-medium backdrop-blur-sm shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400/50"
                >
                  <Download className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="hidden sm:inline">Download</span>
                  <span className="sm:hidden">Download</span>
                </a>
              </div>
            </div>

            {/* CV Content Container */}
            <div className="w-full h-full pt-16 sm:pt-20 p-2 sm:p-4">
              <div className="relative w-full h-full rounded-lg overflow-hidden shadow-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                {/* Loading overlay */}
                {isLoading && (
                  <div className="absolute inset-0 bg-white/10 backdrop-blur-sm flex items-center justify-center z-10 rounded-lg">
                    <div className="flex flex-col items-center space-y-4">
                      <div className="w-8 h-8 sm:w-12 sm:h-12 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <p className="text-white font-medium text-sm sm:text-base">Loading CV...</p>
                    </div>
                  </div>
                )}

                {/* Iframe with proper Canva embed structure */}
                <div className="relative w-full h-full rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.canva.com/design/DAGkTBlVMd0/ydTvrdC_TUqU2mgeLiIQ4Q/view?embed"
                    allowFullScreen
                    allow="fullscreen"
                    loading="lazy"
                    onLoad={handleIframeLoad}
                    className="absolute inset-0 w-full h-full border-0 rounded-lg"
                    title="Omesha Pasan CV"
                    style={{
                      position: 'absolute',
                      width: '100%',
                      height: '100%',
                      top: 0,
                      left: 0,
                      border: 'none',
                      padding: 0,
                      margin: 0
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const FloatingDock = () => {
  const links = [
    {
      title: "LinkedIn",
      icon: <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />,
      href: "https://www.linkedin.com/in/omesha-pasan-1503a5292",
      color: "hover:text-blue-500"
    },
    {
      title: "GitHub",
      icon: <Github className="w-4 h-4 sm:w-5 sm:h-5" />,
      href: "https://github.com/omeshapasan2",
      color: "hover:text-gray-300"
    },
    {
      title: "Email",
      icon: <Mail className="w-4 h-4 sm:w-5 sm:h-5" />,
      href: "mailto:omeshapasan@gmail.com",
      color: "hover:text-red-500"
    },
    {
      title: "Phone",
      icon: <Phone className="w-4 h-4 sm:w-5 sm:h-5" />,
      href: "tel:+94787386042",
      color: "hover:text-green-500"
    }
  ];

  return (
    <div className="z-40">
      <div className="relative inline-flex overflow-hidden rounded-full p-[2px] group focus:outline-none">
        {/* Animated Border */}
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />

        {/* Inner content */}
        <div className="relative flex items-center gap-1 sm:gap-2 bg-black/20 backdrop-blur-lg border border-white/10 rounded-full px-2 sm:px-4 py-2 sm:py-3">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              title={link.title}
              className={`p-2 sm:p-3 rounded-full bg-white/5 hover:bg-white/10 text-white ${link.color} transition-all duration-300 hover:scale-110 hover:-translate-y-1`}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

const HeroSection = () => {
  return (

    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <div className="block md:hidden [@media(min-width:1920px)]:block h-8"></div>

      {/* Grid Background */}
      <div className="relative flex h-[50rem] w-full items-center justify-center bg-white dark:bg-black">
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:20px_20px]",
            "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
            "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]",
          )}
        />
        {/* Radial gradient for the container to give a faded look */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>

        {/* Spotlight Effects - Adjusted for mobile */}
        <div className="absolute top-0 left-0 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 opacity-20 sm:opacity-30">
          <Spotlight className="w-full h-full" fill="rgba(59, 130, 246, 0.5)" />
        </div>
        <div className="absolute top-1/2 right-0 w-40 h-40 sm:w-60 sm:h-60 lg:w-80 lg:h-80 opacity-15 sm:opacity-20">
          <Spotlight className="w-full h-full" fill="rgba(147, 51, 234, 0.4)" />
        </div>
        <div className="absolute bottom-0 left-1/3 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 opacity-20 sm:opacity-25">
          <Spotlight className="w-full h-full" fill="rgba(236, 72, 153, 0.3)" />
        </div>

        {/* Main Content */}
        <div className="relative z-10 min-h-screen flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">

              {/* Mobile: Profile Picture First */}
              <div className="flex justify-center lg:hidden order-1">
                <div className="relative w-48 h-48 sm:w-64 sm:h-64">
                  {/* Backdrop element */}
                  <div className="absolute -top-6 -left-6 sm:-top-8 sm:-left-8 w-[120%] h-[120%] bg-gradient-to-br from-blue-500 to-blue-400 rounded-[10%] skew-y-6 opacity-40 z-0"></div>

                  {/* Profile image */}
                  <img
                    src={profile}
                    alt="Omesha Pasan"
                    className="w-full h-full object-cover relative z-10 rounded-full"
                  />
                </div>
              </div>

              {/* Left Content */}
              <div className="space-y-6 sm:space-y-8 order-2 lg:order-1 text-center lg:text-left">
                <div className="space-y-4 sm:space-y-6">
                  <div className="space-y-2">
                    <p className="text-lg sm:text-xl text-gray-300 font-light">Hello, I'm</p>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent leading-tight">
                      Omesha Pasan
                    </h1>

                    <div className="h-8 sm:h-12 lg:h-16">
                      <Typewriter options={{
                        strings: ["Undergraduate Software Engineer", "Full Stack Developer"],
                        wrapperClassName: "text-base sm:text-lg md:text-xl lg:text-3xl text-blue-400 font-semibold",
                        autoStart: true,
                        loop: true,
                        delay: 75,
                        deleteSpeed: 50,
                        cursor: "|",
                        cursorClassName: "text-blue-400"
                      }} />
                    </div>
                  </div>

                  <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                    Skilled Full Stack Software Developer with a strong foundation in designing and implementing innovative software solutions. Proficient in programming languages such as Python and Java, with extensive experience in developing web applications using Angular and Spring Boot.
                  </p>
                </div>

                {/* CTA Button - Mobile responsive layout */}
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <ViewCVButton />
                  {/* Floating Social Links */}
                  <FloatingDock />
                </div>
              </div>

              {/* Desktop: Profile Picture */}
              <div className="hidden lg:flex justify-center lg:justify-end order-1 lg:order-2">
                <div className="relative w-72 h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96">
                  {/* Backdrop element */}
                  <div className="absolute -top-10 -left-10 w-[120%] h-[120%] bg-gradient-to-br from-blue-500 to-blue-400 rounded-[10%] skew-y-6 opacity-40 z-0"></div>

                  {/* Profile image */}
                  <img
                    src={profile}
                    alt="Omesha Pasan"
                    className="w-full h-full object-cover relative z-10 rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;