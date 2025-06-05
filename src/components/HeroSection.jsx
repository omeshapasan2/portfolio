import React from 'react';
import { Github, Linkedin, Mail, Phone, Download, ExternalLink } from 'lucide-react';
import cn from 'clsx';

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
  return (
    <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 group">
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-1 text-sm font-medium text-white backdrop-blur-3xl group-hover:bg-slate-900 transition-colors">
        <Download className="w-4 h-4 mr-2" />
        View CV
        <ExternalLink className="w-3 h-3 ml-2 opacity-70" />
      </span>
    </button>
  );
};

const FloatingDock = () => {
  const links = [
    {
      title: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/in/omesha-pasan-1503a5292",
      color: "hover:text-blue-500"
    },
    {
      title: "GitHub",
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/omeshapasan2",
      color: "hover:text-gray-300"
    },
    {
      title: "Email",
      icon: <Mail className="w-5 h-5" />,
      href: "mailto:omeshapasan@gmail.com",
      color: "hover:text-red-500"
    },
    {
      title: "Phone",
      icon: <Phone className="w-5 h-5" />,
      href: "tel:+94787386042",
      color: "hover:text-green-500"
    }
  ];

  return (
    <div className="z-50">
      <div className="relative inline-flex overflow-hidden rounded-full p-[2px] group focus:outline-none">
        {/* Animated Border */}
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        
        {/* Inner content */}
        <div className="relative flex items-center gap-2 bg-black/20 backdrop-blur-lg border border-white/10 rounded-full px-4 py-3">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              title={link.title}
              className={`p-3 rounded-full bg-white/5 hover:bg-white/10 text-white ${link.color} transition-all duration-300 hover:scale-110 hover:-translate-y-1`}
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
      
      
      {/* Spotlight Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 opacity-30">
        <Spotlight className="w-full h-full" fill="rgba(59, 130, 246, 0.5)" />
      </div>
      <div className="absolute top-1/2 right-0 w-80 h-80 opacity-20">
        <Spotlight className="w-full h-full" fill="rgba(147, 51, 234, 0.4)" />
      </div>
      <div className="absolute bottom-0 left-1/3 w-64 h-64 opacity-25">
        <Spotlight className="w-full h-full" fill="rgba(236, 72, 153, 0.3)" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="space-y-2">
                  <p className="text-xl text-gray-300 font-light">Hello, I'm</p>
                  <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                    Omesha Pasan
                  </h1>
                  <h2 className="text-2xl lg:text-3xl text-blue-400 font-semibold">
                    Undergraduate Software Engineer
                  </h2>
                </div>
                
                <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
                  Skilled Full Stack Software Developer with a strong foundation in designing and implementing innovative software solutions. Proficient in programming languages such as Python and Java, with extensive experience in developing web applications using Angular and Spring Boot.
                </p>
              </div>

              {/* CTA Button */}
              <div className="pt-4 flex items-center gap-4">
                <ViewCVButton />
                {/* Floating Social Links */}
                <FloatingDock />
              </div>
            </div>

            {/* Right Content - Profile Picture */}
            <div className="flex justify-center lg:justify-end">
                    <div className="relative w-72 h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96">
                      {/* Backdrop element */}
                      <div className="absolute -top-10 -left-10 w-[120%] h-[120%] bg-gradient-to-br from-[var(--primary)] to-blue-400 rounded-[30%] skew-y-6 opacity-40 z-0"></div>

                      {/* Profile image */}
                      <img 
                        src="https://avatars.githubusercontent.com/u/100626688?v=4"
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