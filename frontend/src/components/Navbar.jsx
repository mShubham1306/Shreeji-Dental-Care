import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize if screen becomes desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Add padding to prevent layout shift if scrollbar disappears
      document.body.style.paddingRight = '0px'; 
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = '0px';
    }
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Reviews', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e, href) => {
    setIsOpen(false);
    // Smooth scroll handling for mobile
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        const offset = 80; // Navbar height
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-500 ${
        scrolled || isOpen
          ? 'bg-white/95 backdrop-blur-lg py-3 shadow-premium border-b border-gray-100/50' 
          : 'bg-transparent py-6'
      }`}
    >
      {/* Scroll Progress Bar */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary origin-left z-[1001]"
        style={{ scaleX }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center relative z-[1002]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center"
          >
            <a href="#home" onClick={(e) => handleLinkClick(e, '#home')} className="group flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center text-xl font-bold shadow-lg group-hover:rotate-6 transition-transform duration-300">
                S
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-xl tracking-tight text-textPrimary leading-none">
                  Shreeji<span className="text-primary">Dental</span>
                </span>
                <span className="text-[10px] font-bold text-textMuted uppercase tracking-[0.2em]">Care & Cure</span>
              </div>
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1 items-center">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="px-4 py-2 rounded-full text-[14px] lg:text-[15px] text-textMuted hover:text-primary hover:bg-primary/5 font-semibold transition-all duration-300"
              >
                {link.name}
              </motion.a>
            ))}
            <motion.div
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ delay: 0.4 }}
               className="ml-4"
            >
              <a
                href="https://wa.me/917567368089?text=Hello%2C%20I%20would%20like%20to%20book%20a%20dental%20appointment."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white px-7 py-3 rounded-full text-sm font-bold hover:bg-blue-600 shadow-premium hover:shadow-premium-hover transition-all transform hover:-translate-y-0.5 inline-block"
              >
                Book Appointment
              </a>
            </motion.div>
          </nav>

          {/* Mobile UI */}
          <div className="md:hidden flex items-center gap-2">
            <a 
              href="tel:+917567368089" 
              className="text-primary bg-primary/10 p-2.5 rounded-xl hover:bg-primary hover:text-white transition-all duration-300 active:scale-95"
            >
               <Phone className="w-5 h-5"/>
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close Menu" : "Open Menu"}
              className={`p-2.5 rounded-xl transition-all duration-300 relative z-[1100] ${isOpen ? 'bg-primary text-white shadow-lg rotate-90' : 'text-textPrimary hover:bg-gray-100'}`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop for mobile menu */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[998] md:hidden"
            />
            
            <motion.div
              initial={{ opacity: 0, y: -20, height: 0 }}
              animate={{ opacity: 1, y: 0, height: 'auto' }}
              exit={{ opacity: 0, y: -20, height: 0 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="md:hidden bg-white border-b border-gray-100 overflow-hidden shadow-2xl absolute top-full left-0 w-full z-[999]"
            >
              <div className="px-6 pt-4 pb-12 space-y-1 bg-white">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="flex items-center w-full px-5 py-4 rounded-2xl text-base font-bold text-textPrimary hover:text-primary hover:bg-primary/5 active:bg-primary/10 transition-all border border-transparent hover:border-primary/10"
                  >
                    {link.name}
                  </motion.a>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="pt-6"
                >
                  <a
                    href="https://wa.me/917567368089?text=Hello%2C%20I%20would%20like%20to%20book%20a%20dental%20appointment."
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center gap-2 w-full bg-primary text-white px-6 py-5 rounded-2xl font-black shadow-premium active:scale-[0.98] transition-all"
                  >
                    Book Appointment
                  </a>
                </motion.div>
                
                {/* Mobile Quick Contact Info */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="mt-8 pt-8 border-t border-gray-50 flex flex-col items-center gap-4"
                >
                  <p className="text-xs font-bold text-textMuted uppercase tracking-widest">Available 9:30 AM - 8:00 PM</p>
                  <a href="tel:+917567368089" className="text-primary font-black text-lg">+91 75673 68089</a>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
