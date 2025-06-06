import React, { useRef, useState, useEffect, useCallback } from 'react';
import emailjs from '@emailjs/browser';
import { FaLinkedin, FaGithub, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { toast, Toaster } from 'react-hot-toast';
import cn from 'clsx';
import { Boxes } from './ui/background-boxes';

function Footer() {
  const form = useRef();
  const [status, setStatus] = useState('');
  
  // Vanishing effect states
  const [formValues, setFormValues] = useState({
    user_name: '',
    user_email: '',
    message: ''
  });
  const [animating, setAnimating] = useState(false);
  
  // Canvas refs for each input
  const nameCanvasRef = useRef(null);
  const emailCanvasRef = useRef(null);
  const messageCanvasRef = useRef(null);
  
  // Input refs
  const nameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const messageInputRef = useRef(null);
  
  // Data refs for animation
  const nameDataRef = useRef([]);
  const emailDataRef = useRef([]);
  const messageDataRef = useRef([]);

  useEffect(() => {
    if (status) {
      toast(status);
    }
  }, [status]);

  // Draw function for canvas
  const drawInput = useCallback((inputRef, canvasRef, dataRef, value) => {
    if (!inputRef.current || !canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = 800;
    canvas.height = 200;
    ctx.clearRect(0, 0, 800, 200);
    
    const computedStyles = getComputedStyle(inputRef.current);
    const fontSize = parseFloat(computedStyles.getPropertyValue("font-size"));
    ctx.font = `${fontSize * 1.5}px ${computedStyles.fontFamily}`;
    ctx.fillStyle = "#FFF";
    ctx.fillText(value, 16, 40);

    const imageData = ctx.getImageData(0, 0, 800, 200);
    const pixelData = imageData.data;
    const newData = [];

    for (let t = 0; t < 200; t++) {
      let i = 4 * t * 800;
      for (let n = 0; n < 800; n++) {
        let e = i + 4 * n;
        if (
          pixelData[e] !== 0 &&
          pixelData[e + 1] !== 0 &&
          pixelData[e + 2] !== 0
        ) {
          newData.push({
            x: n,
            y: t,
            color: [
              pixelData[e],
              pixelData[e + 1],
              pixelData[e + 2],
              pixelData[e + 3],
            ],
          });
        }
      }
    }

    dataRef.current = newData.map(({ x, y, color }) => ({
      x,
      y,
      r: 1,
      color: `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${color[3]})`,
    }));
  }, []);

  // Animation function
  const animateInput = (canvasRef, dataRef, start) => {
    const animateFrame = (pos = 0) => {
      requestAnimationFrame(() => {
        const newArr = [];
        for (let i = 0; i < dataRef.current.length; i++) {
          const current = dataRef.current[i];
          if (current.x < pos) {
            newArr.push(current);
          } else {
            if (current.r <= 0) {
              current.r = 0;
              continue;
            }
            current.x += Math.random() > 0.5 ? 1 : -1;
            current.y += Math.random() > 0.5 ? 1 : -1;
            current.r -= 0.05 * Math.random();
            newArr.push(current);
          }
        }
        dataRef.current = newArr;
        const ctx = canvasRef.current?.getContext("2d");
        if (ctx) {
          ctx.clearRect(pos, 0, 800, 200);
          dataRef.current.forEach((t) => {
            const { x: n, y: i, r: s, color: color } = t;
            if (n > pos) {
              ctx.beginPath();
              ctx.rect(n, i, s, s);
              ctx.fillStyle = color;
              ctx.strokeStyle = color;
              ctx.stroke();
            }
          });
        }
        if (dataRef.current.length > 0) {
          animateFrame(pos - 8);
        }
      });
    };
    animateFrame(start);
  };

  // Vanish and submit function
  const vanishAndSubmit = () => {
    setAnimating(true);
    
    // Draw each input's content
    drawInput(nameInputRef, nameCanvasRef, nameDataRef, formValues.user_name);
    drawInput(emailInputRef, emailCanvasRef, emailDataRef, formValues.user_email);
    drawInput(messageInputRef, messageCanvasRef, messageDataRef, formValues.message);

    // Start animations for each input
    setTimeout(() => {
      if (formValues.user_name) {
        const maxX = nameDataRef.current.reduce((prev, current) => (current.x > prev ? current.x : prev), 0);
        animateInput(nameCanvasRef, nameDataRef, maxX);
      }
    }, 100);

    setTimeout(() => {
      if (formValues.user_email) {
        const maxX = emailDataRef.current.reduce((prev, current) => (current.x > prev ? current.x : prev), 0);
        animateInput(emailCanvasRef, emailDataRef, maxX);
      }
    }, 200);

    setTimeout(() => {
      if (formValues.message) {
        const maxX = messageDataRef.current.reduce((prev, current) => (current.x > prev ? current.x : prev), 0);
        animateInput(messageCanvasRef, messageDataRef, maxX);
      }
    }, 300);

    // Reset form after animation
    setTimeout(() => {
      setFormValues({
        user_name: '',
        user_email: '',
        message: ''
      });
      setAnimating(false);
    }, 1500);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    
    // Start vanishing animation
    vanishAndSubmit();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current, 
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          console.log('SUCCESS!');
          setStatus('Message sent successfully!');
        },
        (error) => {
          console.log('FAILED...', error.text);
          setStatus('Failed to send message. Please try again.');
        },
      );
  };

  const handleInputChange = (field, value) => {
    if (!animating) {
      setFormValues(prev => ({
        ...prev,
        [field]: value
      }));
    }
  };

  return (
    <div className="h-140 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
      {/* Background mask - lowest layer */}
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-10 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      
      {/* Animated boxes background - middle layer */}
      <div className="z-20">
        <Boxes />
      </div>
      
      {/* Interactive content - highest layer */}
      <div className='flex relative z-30'>
          {/* Socials */}
          <div className="flex-1 p-6 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Find me on these platforms</h2>
            <div className="w-full space-y-3 max-w-sm">
                <a 
                  href='https://www.linkedin.com/in/omesha-pasan-1503a5292'
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 p-3 bg-slate-800/50 hover:bg-blue-600/20 border border-slate-700 hover:border-blue-500 rounded-lg text-gray-300 hover:text-blue-400 transition-all duration-300 group"
                >
                  <FaLinkedin className="text-xl group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-medium">LinkedIn</span>
                </a>
                
                <a 
                  href='https://github.com/omeshapasan2'
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 p-3 bg-slate-800/50 hover:bg-gray-600/20 border border-slate-700 hover:border-gray-500 rounded-lg text-gray-300 hover:text-gray-100 transition-all duration-300 group"
                >
                  <FaGithub className="text-xl group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-medium">GitHub</span>
                </a>
                
                <a 
                  href='mailto:omeshapasan@gmail.com'
                  className="flex items-center justify-center gap-3 p-3 bg-slate-800/50 hover:bg-red-600/20 border border-slate-700 hover:border-red-500 rounded-lg text-gray-300 hover:text-red-400 transition-all duration-300 group"
                >
                  <MdEmail className="text-xl group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-medium">Email</span>
                </a>
                
                <a 
                  href='tel:+94787386042'
                  className="flex items-center justify-center gap-3 p-3 bg-slate-800/50 hover:bg-green-600/20 border border-slate-700 hover:border-green-500 rounded-lg text-gray-300 hover:text-green-400 transition-all duration-300 group"
                >
                  <FaPhoneAlt className="text-xl group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-medium">Phone</span>
                </a>
              </div>
          </div>

        {/* Vertical Divider */}
        <div className="w-px bg-gray-200 mx-14 md:mx-14" />

        <div className="flex-2 text-white">
          <Toaster />
          <form ref={form} onSubmit={sendEmail} className='flex flex-col space-y-4 p-6'>
            <h3 className="text-2xl font-bold text-white mb-2">Get In Touch</h3>
            <p className="text-gray-300 mb-6">Send me a message and I'll get back to you soon.</p>
            
            {/* Name Input with Canvas */}
            <div className="relative">
              <canvas
                className={cn(
                  "absolute pointer-events-none text-base transform scale-50 top-[20%] left-2 origin-top-left filter invert dark:invert-0",
                  !animating ? "opacity-0" : "opacity-100"
                )}
                ref={nameCanvasRef}
              />
              <input 
                ref={nameInputRef}
                type="text" 
                name="user_name" 
                placeholder='Name' 
                value={formValues.user_name}
                onChange={(e) => handleInputChange('user_name', e.target.value)}
                className={cn(
                  'transition duration-200 p-3 bg-slate-800/50 border border-slate-700 rounded-lg text-gray-300 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 backdrop-blur-sm w-full',
                  animating && "text-transparent"
                )}
              />
            </div>

            {/* Email Input with Canvas */}
            <div className="relative">
              <canvas
                className={cn(
                  "absolute pointer-events-none text-base transform scale-50 top-[20%] left-2 origin-top-left filter invert dark:invert-0",
                  !animating ? "opacity-0" : "opacity-100"
                )}
                ref={emailCanvasRef}
              />
              <input 
                ref={emailInputRef}
                type="email" 
                name="user_email" 
                placeholder='Email' 
                value={formValues.user_email}
                onChange={(e) => handleInputChange('user_email', e.target.value)}
                className={cn(
                  'p-3 bg-slate-800/50 border border-slate-700 rounded-lg text-gray-300 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 backdrop-blur-sm w-full',
                  animating && "text-transparent"
                )}
              />
            </div>

            {/* Message Textarea with Canvas */}
            <div className="relative">
              <canvas
                className={cn(
                  "absolute pointer-events-none text-base transform scale-50 top-[20%] left-2 origin-top-left filter invert dark:invert-0",
                  !animating ? "opacity-0" : "opacity-100"
                )}
                ref={messageCanvasRef}
              />
              <textarea 
                ref={messageInputRef}
                name="message" 
                placeholder='Message' 
                value={formValues.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                className={cn(
                  'resize-none p-3 h-35 bg-slate-800/50 border border-slate-700 rounded-lg text-gray-300 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 backdrop-blur-sm w-full',
                  animating && "text-transparent"
                )}
              />
            </div>
            
            <input 
              type="submit" 
              value="Send" 
              disabled={animating}
              className={cn(
                "w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-800 shadow-lg hover:shadow-xl",
                animating && "opacity-50 cursor-not-allowed"
              )}
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Footer;