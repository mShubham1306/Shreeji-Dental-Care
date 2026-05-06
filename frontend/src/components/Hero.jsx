import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, MapPin, Award, Smile, Stethoscope, ShieldCheck } from 'lucide-react';

const Hero = () => {
  const trustBadges = [
    { icon: <Award className="w-6 h-6 text-primary" />, text: "14+ Years Experience" },
    { icon: <Smile className="w-6 h-6 text-primary" />, text: "10,000+ Happy Smiles" },
    { icon: <Stethoscope className="w-6 h-6 text-primary" />, text: "Advanced Technology" },
    { icon: <ShieldCheck className="w-6 h-6 text-primary" />, text: "Painless Treatment" },
  ];

  return (
    <section
      id="home"
      className="relative w-full flex items-center justify-center overflow-hidden bg-background"
      style={{ minHeight: '100vh' }}
    >
      {/* Background Image with Parallax-like effect */}
      <div className="absolute inset-0 z-0 h-full w-full">
        <motion.img
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1920&q=80"
          alt="Shreeji Dental Care - Modern Indian Dental Clinic"
          loading="lazy"
          className="w-full h-full object-cover object-center"
        />
        {/* Soft Modern Medical Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-primary/5" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-16 pt-32 pb-16">
        <div className="max-w-xl lg:max-w-3xl">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-8"
          >
            <span className="w-12 h-1.5 bg-primary rounded-full"></span>
            <span className="text-primary font-bold tracking-[0.2em] text-xs uppercase">
              Shreeji Dental Care
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-textPrimary leading-[1.05] mb-8 tracking-tight"
          >
            Your Smile Deserves <br />
            <span className="text-primary">Advanced Care.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg sm:text-xl text-textMuted mb-12 leading-relaxed max-w-2xl font-medium"
          >
            Experience world-class painless dental treatments with cutting-edge technology and a gentle touch in the heart of Vadodara.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-5 mb-20"
          >
            <a
              href="https://wa.me/917567368089?text=Hello%2C%20I%20would%20like%20to%20book%20a%20dental%20appointment."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl text-lg font-bold bg-primary text-white shadow-premium hover:bg-blue-600 hover:-translate-y-1 hover:shadow-premium-hover transition-all"
            >
              <MessageCircle className="w-6 h-6 fill-white" />
              Book Appointment
            </a>
            
            <a
              href="https://share.google/pIXji9Xu2MjzlUKsY"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl text-lg font-bold bg-white text-textPrimary border border-gray-100 shadow-sm hover:shadow-premium hover:border-primary/20 hover:-translate-y-1 transition-all"
            >
              <MapPin className="w-6 h-6 text-primary" />
              Visit Clinic
            </a>
          </motion.div>

          {/* Floating Trust Cards with subtle animation */}
          <motion.div
             initial={{ opacity: 0, y: 40 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 1, delay: 0.6 }}
             className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
             {trustBadges.map((badge, idx) => (
                <motion.div 
                  key={idx} 
                  whileHover={{ y: -8 }}
                  className="bg-white/70 backdrop-blur-xl p-5 rounded-3xl shadow-sm border border-white/50 flex flex-col items-start gap-4 transition-all duration-300 group"
                >
                   <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                     {React.cloneElement(badge.icon, { className: "w-7 h-7 transition-colors duration-500" })}
                   </div>
                   <span className="text-[15px] font-bold text-textPrimary leading-tight">{badge.text}</span>
                </motion.div>
             ))}
          </motion.div>

        </div>
      </div>

      {/* Subtle bottom gradient for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero;
