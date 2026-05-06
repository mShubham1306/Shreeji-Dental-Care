import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, MapPin, Award, Smile, Stethoscope, ShieldCheck } from 'lucide-react';

const Hero = () => {
  const trustBadges = [
    { icon: <Award className="w-6 h-6 text-primary" />, text: "14+ Years Experience" },
    { icon: <Smile className="w-6 h-6 text-primary" />, text: "10,000+ Happy Smiles" },
    { icon: <Stethoscope className="w-6 h-6 text-primary" />, text: "Advanced Dental Technology" },
    { icon: <ShieldCheck className="w-6 h-6 text-primary" />, text: "Painless Treatment" },
  ];

  return (
    <section
      id="home"
      className="relative w-full flex items-center justify-center overflow-hidden bg-background hero"
      style={{ minHeight: '100vh' }}
    >
      {/* Background Image using premium clinic interior */}
      <div className="absolute inset-0 z-0 h-full w-full">
        <img
          src="/header.png"
          alt="Shreeji Dental Care - Modern Indian Dental Clinic"
          loading="lazy"
          className="w-full h-full object-cover object-center"
        />
        {/* Soft Modern Medical Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-primary/10" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-16 pt-32 pb-16">
        <div className="max-w-xl lg:max-w-3xl">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="w-10 h-1.5 bg-primary rounded-full"></span>
            <span className="text-primary font-bold tracking-widest text-sm uppercase">
              Shreeji Dental Care
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-extrabold text-textPrimary leading-[1.1] mb-6"
          >
            Advanced Dental Care for Healthy & <span className="text-primary">Confident Smiles</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-textMuted mb-10 leading-relaxed max-w-2xl"
          >
            Modern painless dental treatments with advanced technology and personalized care in Vadodara.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <a
              href="https://wa.me/917567368089?text=Hello%2C%20I%20would%20like%20to%20book%20a%20dental%20appointment."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-lg font-bold bg-primary text-white shadow-[0_8px_30px_rgba(14,165,233,0.3)] hover:bg-blue-600 hover:-translate-y-1 transition-all"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              Book Appointment
            </a>
            
            <a
              href="https://www.google.com/search?q=Shreeji+Dental+Care"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-lg font-bold bg-white text-textPrimary border border-gray-200 shadow-sm hover:shadow-md hover:border-gray-300 hover:-translate-y-1 transition-all"
            >
              <MapPin className="w-5 h-5 text-primary" />
              Visit Clinic
            </a>
          </motion.div>

          {/* Floating Trust Cards */}
          <motion.div
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.5 }}
             className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
             {trustBadges.map((badge, idx) => (
                <div key={idx} className="bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-sm border border-white flex flex-col items-start gap-3 hover:-translate-y-2 transition-transform duration-300">
                   <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center">
                     {badge.icon}
                   </div>
                   <span className="text-sm font-bold text-textPrimary leading-snug">{badge.text}</span>
                </div>
             ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
