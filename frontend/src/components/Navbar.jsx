import React, { useState, useEffect, useCallback } from 'react';
import { Menu, X, Phone, ArrowRight, Instagram, Facebook, Linkedin } from 'lucide-react';
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

  // Handle scroll state for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    }
    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Reviews', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = useCallback((e, href) => {
    e.preventDefault();
    setIsOpen(false);
    
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const offset = 80; // Navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      
      // If body is fixed (menu open), we need to adjust calculation
      const currentScroll = isOpen ? Math.abs(parseInt(document.body.style.top || '0')) : window.scrollY;
      const elementPosition = elementRect - (isOpen ? 0 : bodyRect);
      const offsetPosition = elementPosition - offset;

      setTimeout(() => {
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }, isOpen ? 300 : 0); // Wait for menu close animation
    }
  }, [isOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-500 ${
          scrolled 
            ? 'bg-white/80 backdrop-blur-xl py-3 shadow-premium border-b border-gray-100/50' 
            : 'bg-transparent py-6'
        }`}
      >
        {/* Desktop Scroll Progress */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary origin-left z-[1001] hidden md:block"
          style={{ scaleX }}
        />

        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative z-[1100]"
            >
              <a href="#home" onClick={(e) => handleLinkClick(e, '#home')} className="group flex items-center gap-2.5">
                <div className="w-11 h-11 rounded-2xl bg-primary text-white flex items-center justify-center text-2xl font-black shadow-lg shadow-primary/20 group-hover:rotate-6 transition-transform duration-500">
                  S
                </div>
                <div className="flex flex-col">
                  <span className="font-black text-xl tracking-tight text-textPrimary leading-none">
                    Shreeji<span className="text-primary">Dental</span>
                  </span>
                  <span className="text-[10px] font-black text-textMuted uppercase tracking-[0.25em] mt-1">Care & Cure</span>
                </div>
              </a>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-2 items-center">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="px-4 py-2 rounded-full text-[15px] text-textMuted hover:text-primary hover:bg-primary/5 font-bold transition-all duration-300"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.div
                 initial={{ opacity: 0, scale: 0.9 }}
                 animate={{ opacity: 1, scale: 1 }}
                 transition={{ delay: 0.5 }}
                 className="ml-4"
              >
                <a
                  href="https://wa.me/917567368089"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-white px-8 py-3.5 rounded-2xl text-sm font-black hover:bg-blue-600 shadow-premium hover:shadow-premium-hover transition-all transform hover:-translate-y-0.5 inline-block"
                >
                  Book Appointment
                </a>
              </motion.div>
            </nav>

            {/* Mobile Controls */}
            <div className="md:hidden flex items-center gap-4 relative z-[1100]">
              <a 
                href="tel:+917567368089" 
                className={`p-3 rounded-2xl transition-all duration-300 ${isOpen ? 'bg-white/10 text-white' : 'bg-primary/10 text-primary active:scale-90'}`}
              >
                 <Phone className="w-5 h-5"/>
              </a>
              <button
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle Menu"
                className={`p-3 rounded-2xl transition-all duration-500 ${
                  isOpen 
                    ? 'bg-white text-primary rotate-180 shadow-xl' 
                    : 'bg-textPrimary text-white active:scale-90'
                }`}
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Fullscreen Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[1050] md:hidden"
          >
            {/* Backdrop Blur */}
            <div className="absolute inset-0 bg-primary/95 backdrop-blur-2xl" />
            
            {/* Decorative background text */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5 flex items-center justify-center">
               <span className="text-[20vh] font-black text-white rotate-90 whitespace-nowrap">SHREEJI DENTAL</span>
            </div>

            <div className="relative h-full flex flex-col justify-between px-8 pt-32 pb-12">
              {/* Navigation Links */}
              <nav className="flex flex-col gap-4">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="group flex items-center justify-between text-white"
                  >
                    <span className="text-4xl xs:text-5xl font-black tracking-tight group-hover:translate-x-4 transition-transform duration-500 uppercase">
                      {link.name}
                    </span>
                    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-primary transition-all duration-500">
                      <ArrowRight className="w-6 h-6" />
                    </div>
                  </motion.a>
                ))}
              </nav>

              {/* Bottom Content */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="space-y-10"
              >
                <a
                  href="https://wa.me/917567368089"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full bg-white text-primary px-8 py-6 rounded-[32px] text-xl font-black shadow-2xl active:scale-95 transition-all uppercase tracking-wider"
                >
                  Book Appointment
                </a>

                <div className="flex flex-col gap-8">
                  <div className="flex justify-between items-center border-t border-white/10 pt-8">
                    <div className="flex gap-4">
                      {[Facebook, Instagram, Linkedin].map((Icon, idx) => (
                        <a key={idx} href="#" className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-white hover:bg-white hover:text-primary transition-all duration-500">
                          <Icon className="w-5 h-5" />
                        </a>
                      ))}
                    </div>
                    <div className="text-right">
                       <p className="text-white/40 text-[10px] font-black uppercase tracking-widest mb-1">Clinic Line</p>
                       <a href="tel:+917567368089" className="text-white font-black text-lg">+91 75673 68089</a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
