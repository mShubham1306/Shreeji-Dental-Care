import React from 'react';
import { MessageSquare } from 'lucide-react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import AboutDoctor from '../components/AboutDoctor';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans relative">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <AboutDoctor />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      
      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/917567368089?text=Hello%2C%20I%20would%20like%20to%20book%20a%20dental%20appointment."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[0_8px_30px_rgba(37,211,102,0.4)] hover:-translate-y-1 hover:scale-105 transition-all outline-none"
        aria-label="Contact on WhatsApp"
      >
         <MessageSquare className="w-7 h-7" />
      </a>
    </div>
  );
};

export default Home;
