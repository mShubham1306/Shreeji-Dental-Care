import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Reviews', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md py-4 shadow-[0_4px_30px_rgba(0,0,0,0.03)] border-b border-gray-100/50' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center"
          >
            <a href="#" className="font-extrabold text-2xl tracking-tighter text-textPrimary flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-primary text-white flex items-center justify-center text-lg shadow-sm">S</span>
              Shreeji<span className="text-primary font-medium">Dental</span>
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 lg:space-x-8 items-center">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-[14px] lg:text-[15px] text-textMuted hover:text-primary font-medium transition-colors"
              >
                {link.name}
              </motion.a>
            ))}
            <motion.a
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ delay: 0.4 }}
               href="https://wa.me/917567368089?text=Hello%2C%20I%20would%20like%20to%20book%20a%20dental%20appointment."
               target="_blank"
               rel="noopener noreferrer"
               className="bg-primary text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-blue-600 shadow-[0_4px_15px_rgba(14,165,233,0.3)] hover:shadow-[0_8px_25px_rgba(14,165,233,0.4)] transition-all transform hover:-translate-y-0.5 ml-2"
            >
              Book Appointment
            </motion.a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
            <a href="https://wa.me/917567368089" className="text-primary bg-primary/10 p-2 rounded-full">
               <Phone className="w-5 h-5"/>
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-textPrimary hover:text-primary focus:outline-none"
            >
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-b border-gray-100 overflow-hidden shadow-2xl absolute w-full"
          >
            <div className="px-5 pt-4 pb-8 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3.5 rounded-xl text-base font-semibold text-textPrimary hover:text-primary hover:bg-blue-50 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="https://wa.me/917567368089?text=Hello%2C%20I%20would%20like%20to%20book%20a%20dental%20appointment."
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 w-full mt-6 bg-primary text-white px-5 py-4 rounded-xl font-bold hover:bg-blue-700 shadow-[0_8px_30px_rgba(14,165,233,0.3)]"
              >
                Book Appointment
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
