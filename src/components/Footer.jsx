import React, {useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { FaLinkedin, FaGithub, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { toast, Toaster } from 'react-hot-toast';
import cn from 'clsx';
import { Boxes } from './ui/background-boxes';

function Footer() {
  const form = useRef();
  const [status, setStatus] = useState('');

  useEffect(() => {
    if (status) {
      toast(status);
    }
  }, [status]);

  const sendEmail = (e) => {
    e.preventDefault();

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

  return (
    <div className="h-96 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
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
            <input 
              type="text" 
              name="user_name" 
              placeholder='Name' 
              className='transition duration-200 p-3 bg-slate-800/50 border border-slate-700 rounded-lg text-gray-300 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 backdrop-blur-sm'
            />

            <input 
              type="email" 
              name="user_email" 
              placeholder='Email' 
              className='p-3 bg-slate-800/50 border border-slate-700 rounded-lg text-gray-300 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 backdrop-blur-sm'
            />

            <textarea 
              name="message" 
              placeholder='Message' 
              className='resize-none p-3 h-35 bg-slate-800/50 border border-slate-700 rounded-lg text-gray-300 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 backdrop-blur-sm'
            />

            
            <input 
              type="submit" 
              value="Send" 
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-800 shadow-lg hover:shadow-xl"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Footer;