import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import api from '../services/api';

const AboutDoctor = () => {
  const [clinicInfo, setClinicInfo] = useState(null);

  useEffect(() => {
    const fetchClinicInfo = async () => {
      try {
        const response = await api.get('/clinic');
        setClinicInfo(response.data);
      } catch (error) {
        console.error('Error fetching clinic info:', error);
      }
    };
    fetchClinicInfo();
  }, []);

  if (!clinicInfo) {
    return (
      <section className="py-20 bg-white" id="about">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-shimmer h-96 bg-gray-200 rounded-2xl w-full"></div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Doctor Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden bg-gradient-to-tr from-primary/20 to-secondary/20 flex items-center justify-center p-8">
              <div className="absolute inset-0 z-0 bg-white">
                <img src="/doctor.png" alt="Dr. Amit Vankar" className="w-full h-full object-contain rounded-3xl" />
              </div>
            </div>
          </motion.div>

          {/* Doctor Info */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-textPrimary leading-tight">
              {clinicInfo.doctor_name}
            </h2>
            <p className="text-lg text-textMuted leading-relaxed">
              Serving the community at <span className="font-semibold text-textPrimary">{clinicInfo.clinic_name}</span>. 
              Our mission is to provide you with the most comfortable, modern, and effective dental treatments. 
              Your smile is your best asset, and we are here to protect it.
            </p>
            
            <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row gap-4">
               <button className="bg-textPrimary text-white px-8 py-3.5 rounded-full font-semibold hover:bg-gray-800 transition-colors shadow-lg">
                 Book Appointment
               </button>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default AboutDoctor;
