import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import api from '../services/api';
import { Award, GraduationCap, ShieldCheck } from 'lucide-react';

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

  if (!clinicInfo) return null;

  return (
    <section className="py-24 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 relative"
          >
            {/* Soft background shape */}
            <div className="absolute inset-0 bg-primary/5 rounded-[40px] transform rotate-3 scale-105 -z-10" />
            <div className="relative aspect-[4/5] md:aspect-[4/3] lg:aspect-[4/5] rounded-[30px] overflow-hidden bg-gray-50 border border-gray-100 shadow-sm">
              <img src="/doctor.png" alt={clinicInfo.doctor_name} className="w-full h-full object-cover object-top" />
            </div>
            
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-6 lg:-right-10 bg-white p-6 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] hidden sm:flex items-center gap-4">
               <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <Award className="w-7 h-7" />
               </div>
               <div>
                  <div className="text-2xl font-black text-textPrimary">{clinicInfo.experience}</div>
                  <div className="text-sm font-medium text-textMuted leading-tight">Successful<br/>Experience</div>
               </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <div className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-6 tracking-wide">
              Chief Dental Surgeon
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-textPrimary leading-tight mb-4">
              {clinicInfo.doctor_name} <br/>
              <span className="text-2xl md:text-3xl font-medium text-textMuted uppercase tracking-wider">{clinicInfo.qualification}</span>
            </h2>
            <p className="text-lg text-textMuted leading-relaxed mb-10">
              With over 12 years of clinical excellence, our chief surgeon is dedicated to providing painless, 
              precision-driven dental treatments. Specializing in advanced endodontics and restorative dentistry,
              we ensure that every patient leaves with a confident, healthy smile.
            </p>
            
            <div className="space-y-6 mb-10">
               <div className="flex items-start gap-4">
                  <div className="mt-1 w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center text-secondary shrink-0">
                     <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                     <h4 className="text-lg font-bold text-textPrimary">Highly Qualified</h4>
                     <p className="text-textMuted leading-snug mt-1">Extensive training in modern cosmetic dentistry and implantology.</p>
                  </div>
               </div>
               <div className="flex items-start gap-4">
                  <div className="mt-1 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                     <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                     <h4 className="text-lg font-bold text-textPrimary">Sterilization & Safety</h4>
                     <p className="text-textMuted leading-snug mt-1">Strict adherence to international sterilization protocols for your safety.</p>
                  </div>
               </div>
            </div>

            <a href="tel:+917567368089" className="inline-flex items-center justify-center bg-textPrimary text-white px-8 py-4 rounded-full font-bold hover:bg-gray-800 transition-colors shadow-lg hover:-translate-y-1">
              Speak With The Doctor
            </a>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default AboutDoctor;
