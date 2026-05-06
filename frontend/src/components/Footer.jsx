import React, { useState, useEffect } from 'react';
import api from '../services/api';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
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
    <footer className="bg-white pt-20 pb-10 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="space-y-6">
            <a href="#" className="font-extrabold text-2xl tracking-tighter text-textPrimary flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-primary text-white flex items-center justify-center text-lg">S</span>
              Shreeji<span className="text-primary font-medium">Dental</span>
            </a>
            <p className="text-textMuted leading-relaxed pr-4">
              {clinicInfo.tagline}. Delivering premium dental healthcare with modern technology and expert professionals.
            </p>
            <div className="flex space-x-3 pt-2">
               <a href="#" className="w-10 h-10 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center hover:bg-primary hover:text-white transition-colors text-textMuted">
                  <Facebook className="w-4 h-4" />
               </a>
               <a href="#" className="w-10 h-10 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center hover:bg-primary hover:text-white transition-colors text-textMuted">
                  <Instagram className="w-4 h-4" />
               </a>
               <a href="#" className="w-10 h-10 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center hover:bg-primary hover:text-white transition-colors text-textMuted">
                  <Twitter className="w-4 h-4" />
               </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold text-textPrimary mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Services', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '')}`} className="text-textMuted hover:text-primary transition-colors flex items-center text-sm font-medium">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-textPrimary mb-6">Our Services</h4>
            <ul className="space-y-4">
              {clinicInfo.services.slice(0, 5).map((service) => (
                <li key={service} className="text-textMuted text-sm font-medium">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-textPrimary mb-6">Book Appointment</h4>
            <p className="text-textMuted text-sm mb-6 leading-relaxed">Save time by booking online and tracking your token status in our live queue.</p>
            <a href="https://wa.me/917567368089?text=Hello%2C%20I%20would%20like%20to%20book%20a%20dental%20appointment." target="_blank" rel="noopener noreferrer" className="inline-block bg-primary text-white px-6 py-3.5 rounded-full font-bold hover:bg-blue-600 transition-colors w-full text-center shadow-lg shadow-primary/20 hover:-translate-y-0.5">
              Book WhatsApp
            </a>
          </div>

        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-textMuted text-sm font-medium">
            &copy; {new Date().getFullYear()} {clinicInfo.clinic_name}. All rights reserved.
          </p>
          <div className="flex space-x-8 text-sm font-medium text-textMuted">
             <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
             <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
