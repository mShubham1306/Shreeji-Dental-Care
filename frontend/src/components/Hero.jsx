import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Phone } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative w-full flex items-center justify-center overflow-hidden bg-background hero"
      style={{ minHeight: '80vh' }}
    >
      {/* Background Image using the provided premium image */}
      <div className="absolute inset-0 z-0 h-full w-full">
        <img
          src="https://images.openai.com/static-rsc-4/ixDVfidJQorNZ44wj-Yw9BlTwcQf32ST9J9FYEd--H4vknxiT2p5vMPahTae6pS7rb-ThHBcTmp7U2j5quEvUp9cUMXqZVybMX8Ig3OFs_0aDd63-Dg3vSP1kyHPA8L37PB5Kbut83oBT0f7FLsvLS4-K0dKnd65ulhbRsWUv_b9Ipq171_Ekay_3CpoNx3K?purpose=fullsize"
          alt="Shreeji Dental Premium Care"
          className="w-full h-full object-cover object-center"
        />
        {/* Gradient Overlay for light theme (makes text readable while keeping image bright) */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-16 pt-24 pb-16">
        <div className="max-w-xl lg:max-w-2xl">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-4"
          >
            <span className="w-8 h-1 bg-primary rounded-full"></span>
            <span className="text-primary font-semibold tracking-wider text-sm sm:text-base uppercase">
              Shreeji Dental Care
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-textPrimary leading-[1.15] mb-6"
          >
            Advanced Dental Care for a <span className="text-primary">Confident Smile</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-textMuted mb-8 leading-relaxed max-w-lg"
          >
            Specialized Treatments in Implants, Braces & Cosmetic Dentistry.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="https://wa.me/917567368089?text=Hello%2C%20I%20would%20like%20to%20book%20a%20dental%20appointment."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-bold bg-primary text-white shadow-[0_8px_30px_rgba(14,165,233,0.3)] hover:bg-blue-600 hover:-translate-y-1 transition-all"
            >
              <Calendar className="w-5 h-5" />
              Book Appointment
            </a>
            
            <a
              href="tel:+917567368089"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-bold bg-white text-textPrimary border border-gray-200 shadow-sm hover:shadow-md hover:border-gray-300 hover:-translate-y-1 transition-all"
            >
              <Phone className="w-5 h-5 text-primary" />
              Call Now
            </a>
          </motion.div>

          <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ duration: 0.8, delay: 0.6 }}
             className="mt-12 flex items-center gap-6"
          >
             <div className="flex -space-x-4">
                <img className="w-12 h-12 rounded-full border-2 border-white shadow-sm object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="Patient" />
                <img className="w-12 h-12 rounded-full border-2 border-white shadow-sm object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80" alt="Patient" />
                <img className="w-12 h-12 rounded-full border-2 border-white shadow-sm object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" alt="Patient" />
                <div className="w-12 h-12 rounded-full border-2 border-white shadow-sm bg-gray-50 flex items-center justify-center text-xs font-bold text-textPrimary">
                   5k+
                </div>
             </div>
             <div className="text-sm font-medium text-textMuted leading-tight">
                Trusted by 5000+ happy<br/>patients in Vadodara
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
