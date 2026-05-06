import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import api from '../services/api';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';

const Contact = () => {
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
    <section className="py-24 bg-gray-50" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-textPrimary mb-4"
          >
            Visit Our <span className="text-primary">Clinic</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-lg text-textMuted max-w-2xl mx-auto"
          >
            We're conveniently located in Vadodara. Feel free to call us or visit during our working hours.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Details */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-start p-8 bg-white rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 hover:shadow-lg transition-all group">
              <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center text-primary shrink-0 group-hover:scale-110 transition-transform">
                <MapPin className="w-7 h-7" />
              </div>
              <div className="ml-6">
                <h4 className="text-xl font-bold text-textPrimary mb-2">Clinic Location</h4>
                <p className="text-textMuted leading-relaxed">
                  {clinicInfo.address}
                </p>
              </div>
            </div>

            <div className="flex items-start p-8 bg-white rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 hover:shadow-lg transition-all group">
              <div className="w-14 h-14 bg-secondary/5 rounded-2xl flex items-center justify-center text-secondary shrink-0 group-hover:scale-110 transition-transform">
                <Clock className="w-7 h-7" />
              </div>
              <div className="ml-6">
                <h4 className="text-xl font-bold text-textPrimary mb-2">Working Hours</h4>
                <div className="text-textMuted space-y-1">
                  <p>Morning:<br/><span className="text-textPrimary font-semibold">{clinicInfo.timings.morning}</span></p>
                  <p className="mt-2">Evening:<br/><span className="text-textPrimary font-semibold">{clinicInfo.timings.evening}</span></p>
                  <p className="mt-3 text-red-500 font-semibold bg-red-50 inline-block px-3 py-1 rounded-md text-sm">{clinicInfo.timings.closed}</p>
                </div>
              </div>
            </div>

            <div className="flex items-start p-8 bg-white rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 hover:shadow-lg transition-all group">
              <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center text-primary shrink-0 group-hover:scale-110 transition-transform">
                <Phone className="w-7 h-7" />
              </div>
              <div className="ml-6 flex items-center h-14">
                <div>
                   <h4 className="text-xl font-bold text-textPrimary mb-1">Direct Call</h4>
                   <p className="text-textMuted text-xl font-medium">
                     {clinicInfo.phone}
                   </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Interactive Map Button */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="min-h-[400px] h-full bg-white rounded-3xl overflow-hidden relative border border-gray-100 flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.03)] group cursor-pointer"
            onClick={() => window.open('https://share.google/LumhNOPJcBz9UFysK', '_blank')}
          >
             <div className="text-center p-8 z-10 w-full h-full flex flex-col items-center justify-center hover:bg-gray-50 transition-colors">
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                   <MapPin className="w-12 h-12 text-primary animate-bounce" style={{animationDuration: '2s'}} />
                </div>
                <h3 className="text-2xl font-bold text-textPrimary mb-3">View on Map</h3>
                <p className="text-textMuted max-w-xs mx-auto mb-8 text-center">
                   Open Google Maps to get direct navigation to our clinic.
                </p>
                <div className="px-8 py-3 bg-white border-2 border-primary text-primary rounded-full font-bold shadow-sm hover:bg-primary hover:text-white transition-colors">
                   Get Directions
                </div>
             </div>
             {/* Simple grid bg */}
             <div className="absolute inset-0 pattern-grid-lg text-gray-100 -z-10 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:40px_40px]"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
