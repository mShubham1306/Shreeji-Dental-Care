import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ArrowRight, Instagram, Facebook, Linkedin, Sparkles } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  // Handle scroll for navbar background
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.touchAction = 'auto';
    }
    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.touchAction = 'auto';
    };
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Reviews', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      const offset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-500 ${
          scrolled || isOpen ? 'bg-white/90 backdrop-blur-xl py-3 shadow-premium border-b border-gray-100/50' : 'bg-transparent py-6'
        }`}
      >
        <motion.div className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary origin-left z-[1001] hidden md:block" style={{ scaleX }} />

        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center relative z-[1002]">
            {/* Logo */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
              <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="group flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center text-xl font-black shadow-lg group-hover:rotate-6 transition-transform duration-500">S</div>
                <div className="flex flex-col">
                  <span className={`font-black text-lg tracking-tight leading-none transition-colors duration-300 ${isOpen ? 'text-white' : 'text-textPrimary'}`}>Shreeji<span className={`${isOpen ? 'text-white/80' : 'text-primary'}`}>Dental</span></span>
                <span className={`text-[9px] font-black uppercase tracking-[0.2em] mt-1 transition-colors duration-300 ${isOpen ? 'text-white/60' : 'text-textMuted'}`}>Care & Cure</span>
                </div>
              </a>
            </motion.div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-1">
              {navLinks.map((link, i) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-4 py-2 rounded-full text-[14px] text-textMuted hover:text-primary hover:bg-primary/5 font-bold transition-all duration-300"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="https://wa.me/917567368089"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-4 bg-primary text-white px-7 py-3 rounded-2xl text-sm font-black hover:bg-blue-600 shadow-premium transition-all transform hover:-translate-y-0.5"
              >
                Book Appointment
              </a>
            </nav>

            {/* Mobile Controls */}
            <div className="md:hidden flex items-center gap-3 relative z-[1100]">
              <a href="tel:+917567368089" className={`p-2.5 rounded-xl transition-all duration-300 ${isOpen ? 'bg-white/10 text-white' : 'bg-primary/10 text-primary active:scale-90'}`}>
                <Phone className="w-5 h-5" />
              </a>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`p-2.5 rounded-xl transition-all duration-300 ${isOpen ? 'bg-white text-primary rotate-90 shadow-lg' : 'bg-textPrimary text-white'}`}
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1050] md:hidden overflow-hidden"
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-primary backdrop-blur-3xl" />
            
            {/* Design Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.03]">
               <div className="absolute top-[-10%] right-[-10%] w-[100vw] h-[100vw] bg-white rounded-full blur-3xl" />
               <span className="absolute center text-[25vh] font-black text-white rotate-90 whitespace-nowrap select-none">SHREEJI DENTAL</span>
            </div>

            <div className="relative h-full flex flex-col justify-between px-8 pt-32 pb-12 overflow-y-auto">
              {/* Links */}
              <nav className="flex flex-col space-y-6">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
                  >
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="group flex items-center justify-between text-white active:opacity-70"
                    >
                      <span className="text-5xl font-black tracking-tighter uppercase">{link.name}</span>
                      <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-primary transition-all">
                        <ArrowRight className="w-6 h-6" />
                      </div>
                    </a>
                  </motion.div>
                ))}
              </nav>

              {/* Bottom UI */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="space-y-8"
              >
                <a
                  href="https://wa.me/917567368089"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full bg-white text-primary px-8 py-6 rounded-[30px] text-xl font-black shadow-2xl active:scale-[0.98] transition-all uppercase"
                >
                  <Sparkles className="w-6 h-6" />
                  Book Appointment
                </a>

                <div className="flex justify-between items-end border-t border-white/10 pt-8">
                  <div className="flex gap-4">
                    {[Facebook, Instagram, Linkedin].map((Icon, idx) => (
                      <a key={idx} href="#" className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-white active:bg-white active:text-primary transition-all">
                        <Icon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                  <div className="text-right text-white">
                    <p className="text-[10px] font-black uppercase tracking-widest opacity-40 mb-1">Clinic line</p>
                    <a href="tel:+917567368089" className="text-xl font-black">+91 75673 68089</a>
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
