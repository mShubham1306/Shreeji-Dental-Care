import React, { useState, useEffect } from 'react';
import api from '../services/api';

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
    <footer className="bg-textPrimary text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <div className="space-y-4">
            <h3 className="text-2xl font-bold tracking-tighter">
              Shreeji<span className="text-primary">Dental</span>
            </h3>
            <p className="text-gray-400 leading-relaxed">
              {clinicInfo.tagline}. Delivering premium dental healthcare with modern technology and expert professionals.
            </p>
            <div className="flex space-x-4 pt-2">
               <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors text-sm font-bold">
                  FB
               </a>
               <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors text-sm font-bold">
                  IG
               </a>
               <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors text-sm font-bold">
                  X
               </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Services', 'Live Queue', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '')}`} className="text-gray-400 hover:text-white transition-colors flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mr-3 inline-block"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {clinicInfo.services.slice(0, 5).map((service) => (
                <li key={service} className="text-gray-400">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Book Appointment</h4>
            <p className="text-gray-400 mb-4">Save time by booking online and tracking your token status.</p>
            <a href="https://wa.me/917567368089?text=Hello%2C%20I%20would%20like%20to%20book%20a%20dental%20appointment." target="_blank" rel="noopener noreferrer" className="inline-block bg-primary text-white px-6 py-3 rounded-full font-medium hover:bg-blue-600 transition-colors w-full text-center">
              Book Now
            </a>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} {clinicInfo.clinic_name}. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-400">
             <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
             <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
