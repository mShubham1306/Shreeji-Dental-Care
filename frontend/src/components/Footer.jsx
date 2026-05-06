import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white pt-24 pb-12 border-t border-gray-100 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="space-y-6">
            <a href="#" className="font-extrabold text-2xl tracking-tighter text-textPrimary flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-primary text-white flex items-center justify-center text-lg shadow-sm">S</span>
              Shreeji<span className="text-primary font-medium">Dental</span>
            </a>
            <p className="text-textMuted leading-relaxed pr-4">
              Advanced Dental Care for Healthy & Confident Smiles. Delivering premium dental healthcare with modern technology.
            </p>
            <div className="flex space-x-3 pt-2">
               <a href="#" className="w-10 h-10 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center hover:bg-primary hover:text-white transition-colors text-textMuted text-xs font-bold font-sans hover:-translate-y-1">
                  FB
               </a>
               <a href="#" className="w-10 h-10 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center hover:bg-primary hover:text-white transition-colors text-textMuted text-xs font-bold font-sans hover:-translate-y-1">
                  IG
               </a>
               <a href="#" className="w-10 h-10 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center hover:bg-primary hover:text-white transition-colors text-textMuted text-xs font-bold font-sans hover:-translate-y-1">
                  X
               </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-textPrimary text-lg mb-6 tracking-wide">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'About Dr. Amit Vankar', 'Patient Reviews', 'Contact Us'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-textMuted hover:text-primary transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 bg-gray-300 rounded-full group-hover:bg-primary transition-colors"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-textPrimary text-lg mb-6 tracking-wide">Our Services</h4>
            <ul className="space-y-4">
              {['Root Canal Treatment', 'Dental Implants', 'Teeth Whitening', 'Invisible Braces', 'Pediatric Dentistry'].map((link) => (
                <li key={link}>
                  <a href="#services" className="text-textMuted hover:text-primary transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 bg-gray-300 rounded-full group-hover:bg-primary transition-colors"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold text-textPrimary text-lg mb-6 tracking-wide">Contact Details</h4>
            
            <div className="flex items-start gap-4">
               <div className="mt-1 bg-primary/10 p-2 rounded-full text-primary shrink-0">
                  <MapPin className="w-4 h-4" />
               </div>
               <p className="text-textMuted text-[15px] leading-relaxed">
                  GF/04, Yaksha Shree Complex,<br/>Below Vraj Hospital,<br/>Chhani Jakatnaka,<br/>Vadodara, Gujarat
               </p>
            </div>
            
            <div className="flex items-start gap-4">
               <div className="mt-1 bg-primary/10 p-2 rounded-full text-primary shrink-0">
                  <Phone className="w-4 h-4" />
               </div>
               <a href="tel:+917567368089" className="text-textMuted text-[15px] hover:text-primary transition-colors font-semibold">
                  +91 75673 68089
               </a>
            </div>

            <div className="flex items-start gap-4">
               <div className="mt-1 bg-primary/10 p-2 rounded-full text-primary shrink-0">
                  <Clock className="w-4 h-4" />
               </div>
               <p className="text-textMuted text-[15px] leading-relaxed">
                  Mon-Sat<br/>9:30 AM – 1:00 PM<br/>4:30 PM – 8:00 PM
               </p>
            </div>
          </div>
        </div>

        <div className="pt-8 mt-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-textMuted text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Shreeji Dental Care. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-textMuted">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
