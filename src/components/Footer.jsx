import React, {useRef, useState} from 'react';
import emailjs from '@emailjs/browser';

function Footer() {
  const form = useRef();
  const [status, setStatus] = useState('');

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
    <div className="text-white">
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" className='bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded cursor-pointer transition-colors duration-200'/>
      </form>
      <p>{status}</p>
    </div>
  );
}

export default Footer;