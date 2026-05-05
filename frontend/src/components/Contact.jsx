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
    <section className="py-20 bg-surface" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-textPrimary mb-4">
            Contact <span className="text-primary">Us</span>
          </h2>
          <p className="text-lg text-textMuted max-w-2xl mx-auto">
            Get in touch with us today. We're here to help you smile with confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Details */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-start p-6 bg-background rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="ml-6">
                <h4 className="text-xl font-semibold text-textPrimary mb-2">Visit Us</h4>
                <p className="text-textMuted leading-relaxed">
                  {clinicInfo.address}
                </p>
              </div>
            </div>

            <div className="flex items-start p-6 bg-background rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center text-secondary shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div className="ml-6">
                <h4 className="text-xl font-semibold text-textPrimary mb-2">Working Hours</h4>
                <div className="text-textMuted space-y-1">
                  <p>Morning: <span className="text-textPrimary font-medium">{clinicInfo.timings.morning}</span></p>
                  <p>Evening: <span className="text-textPrimary font-medium">{clinicInfo.timings.evening}</span></p>
                  <p className="text-red-500 font-medium">{clinicInfo.timings.closed}</p>
                </div>
              </div>
            </div>

            <div className="flex items-start p-6 bg-background rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div className="ml-6">
                <h4 className="text-xl font-semibold text-textPrimary mb-2">Call Us</h4>
                <p className="text-textMuted text-lg">
                  {clinicInfo.phone}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Interactive Map Button */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="h-[500px] bg-gray-100 rounded-3xl overflow-hidden relative border border-gray-200 flex items-center justify-center"
          >
             <div className="text-center p-8 z-10 w-full h-full flex flex-col items-center justify-center bg-background/50 backdrop-blur-sm">
                <MapPin className="w-16 h-16 text-primary mb-6 animate-bounce" />
                <h3 className="text-3xl font-bold text-textPrimary mb-4">Find Our Location</h3>
                <p className="text-textMuted max-w-sm mb-8 text-lg">
                   Click below to open our exact location in Google Maps.
                </p>
                <a 
                  href="https://share.google/LumhNOPJcBz9UFysK" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-primary text-white text-lg rounded-full font-bold shadow-lg shadow-primary/30 hover:bg-blue-600 hover:-translate-y-1 transition-all flex items-center gap-2"
                >
                   Open Google Maps
                </a>
             </div>
             {/* Fake map background */}
             <div className="absolute inset-0 pattern-grid-lg text-gray-200/50 -z-10"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
