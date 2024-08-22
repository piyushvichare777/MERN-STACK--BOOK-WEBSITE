import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import toast, { Toaster } from 'react-hot-toast';

function Contact() {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() === '') {
      toast.error("Please type a message before sending.");
    } else {
      toast.success("Your message was successfully sent!");
      // Here, you can handle form submission, e.g., sending the message to a server
      // Reset message field after successful submission
      setMessage('');
    }
  };

  return (
    <>
      <Navbar />
      <div className="bg-[your-background-color] text-[your-text-color] py-16 px-8">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold text-center mb-8 text-[your-primary-color] mt-10">Contact Us</h1>
          <p className="text-lg leading-relaxed text-center mb-8">
            We’d love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to reach out to us.
          </p>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-[your-text-color]">Name</label>
              <input
                type="text"
                id="name"
                className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[your-primary-color]"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[your-text-color]">Email</label>
              <input
                type="email"
                id="email"
                className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[your-primary-color]"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-[your-text-color]">Subject</label>
              <input
                type="text"
                id="subject"
                className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[your-primary-color]"
                placeholder="Subject"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-[your-text-color]">Message</label>
              <textarea
                id="message"
                className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[your-primary-color]"
                rows="5"
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-white text-black p-2 rounded-md cursor-pointer hover:bg-slate-500 duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
      <Toaster /> {/* This will render the toaster container */}
    </>
  );
}

export default Contact;
