import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, MapPin } from 'lucide-react';

// Floating particle component (pure CSS animated dots)
const Particle = ({ style }) => (
  <span
    className="absolute rounded-full bg-white/20 pointer-events-none animate-float"
    style={style}
  />
);

const particles = Array.from({ length: 14 }, (_, i) => ({
  width:  `${8 + (i * 7) % 18}px`,
  height: `${8 + (i * 7) % 18}px`,
  left:   `${(i * 683) % 100}%`,
  top:    `${(i * 479) % 100}%`,
  animationDelay: `${(i * 0.4).toFixed(1)}s`,
  animationDuration: `${3 + (i % 4)}s`,
  opacity: 0.15 + (i % 5) * 0.07,
}));

const Hero = () => {
  const parallaxRef = useRef(null);

  // Subtle mouse parallax on desktop
  useEffect(() => {
    const el = parallaxRef.current;
    if (!el) return;
    const handleMove = (e) => {
      const { innerWidth: w, innerHeight: h } = window;
      const x = ((e.clientX / w) - 0.5) * 16;
      const y = ((e.clientY / h) - 0.5) * 10;
      el.style.transform = `translate(${x}px, ${y}px) scale(1.06)`;
    };
    const handleLeave = () => { el.style.transform = 'translate(0,0) scale(1.06)'; };
    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mouseleave', handleLeave);
    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseleave', handleLeave);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative w-full overflow-hidden flex items-center justify-center"
      style={{ minHeight: '100svh' }}
    >
      {/* ── Background image with parallax ── */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          ref={parallaxRef}
          src="/header.png"
          alt="Shreeji Dental Clinic"
          className="w-full h-full object-cover scale-[1.06] transition-transform duration-300 will-change-transform"
          style={{ transformOrigin: 'center center' }}
        />
        {/* gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      {/* ── Animated floating particles ── */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        {particles.map((p, i) => <Particle key={i} style={p} />)}
      </div>

      {/* ── Glowing orbs (3D-feel VFX) ── */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-72 h-72 rounded-full bg-blue-500/20 blur-[80px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-56 h-56 rounded-full bg-cyan-400/15 blur-[60px] animate-pulse-slow" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/2 left-1/2 w-44 h-44 rounded-full bg-white/5 blur-[40px] animate-pulse-slow" style={{ animationDelay: '3s' }} />
      </div>

      {/* ── Main Content ── */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-16 pt-28 pb-16">
        <div className="max-w-2xl">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex items-center gap-2 mb-6"
          >
            <span className="w-10 h-[2px] bg-cyan-400" />
            <span className="text-cyan-300 uppercase tracking-widest text-xs sm:text-sm font-semibold">
              Welcome to Shreeji Dental
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight mb-6 drop-shadow-xl"
          >
            Confident Smiles<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400">
              Start Here
            </span>
          </motion.h1>

          {/* Sub-text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-base sm:text-lg md:text-xl text-gray-200 mb-10 leading-relaxed max-w-lg"
          >
            Experience premium dental care with state-of-the-art technology and compassionate service — since 2012.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="whatsapp://send?phone=917567368089&text=Hello%2C%20I%20would%20like%20to%20book%20a%20dental%20appointment."
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-base font-bold bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-xl hover:from-cyan-400 hover:to-blue-500 active:scale-95 transition-all select-none"
            >
              <MessageCircle className="w-5 h-5" />
              Book via WhatsApp
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-base font-bold bg-white/10 backdrop-blur-md text-white border border-white/25 hover:bg-white/20 active:scale-95 transition-all select-none"
            >
              Our Services
            </a>
          </motion.div>

          {/* Stats strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="mt-14 flex flex-wrap gap-8"
          >
            {[
              { val: "12+", label: "Years of Trust" },
              { val: "5000+", label: "Happy Patients" },
              { val: "8+", label: "Treatments" },
            ].map(({ val, label }) => (
              <div key={label} className="text-white">
                <div className="text-2xl sm:text-3xl font-extrabold text-cyan-300">{val}</div>
                <div className="text-xs sm:text-sm text-gray-300 mt-0.5">{label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1"
      >
        <span className="text-white/50 text-xs tracking-widest uppercase">Scroll</span>
        <span className="w-[1px] h-8 bg-white/30 animate-bounce" />
      </motion.div>
    </section>
  );
};

export default Hero;
