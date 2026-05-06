import React from 'react';
import { MapPin, Phone, Clock, Instagram, Facebook, Linkedin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white pt-32 pb-12 border-t border-gray-100 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10 translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px] -z-10 -translate-x-1/2 translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-24">
          
          <div className="space-y-8">
            <a href="#" className="group flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-primary text-white flex items-center justify-center text-2xl font-black shadow-lg shadow-primary/20 group-hover:rotate-6 transition-transform">
                S
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-2xl tracking-tight text-textPrimary leading-none">
                  Shreeji<span className="text-primary">Dental</span>
                </span>
                <span className="text-[10px] font-bold text-textMuted uppercase tracking-[0.2em] mt-1">Care & Cure</span>
              </div>
            </a>
            <p className="text-textMuted leading-relaxed font-medium text-[15px]">
              Delivering premium dental healthcare with modern technology and a commitment to painless clinical excellence for over 14 years.
            </p>
            <div className="flex space-x-4">
               {[
                 { icon: <Facebook className="w-5 h-5" />, href: "#", color: "hover:bg-blue-600" },
                 { icon: <Instagram className="w-5 h-5" />, href: "#", color: "hover:bg-pink-600" },
                 { icon: <Linkedin className="w-5 h-5" />, href: "#", color: "hover:bg-blue-700" }
               ].map((social, i) => (
                 <a 
                   key={i} 
                   href={social.href} 
                   className={`w-12 h-12 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center text-textMuted transition-all duration-300 hover:text-white hover:shadow-lg ${social.color} hover:-translate-y-1`}
                 >
                   {social.icon}
                 </a>
               ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-textPrimary text-lg mb-8 uppercase tracking-widest text-xs">Quick Links</h4>
            <ul className="space-y-4">
              {[
                { name: 'Home', href: '#home' },
                { name: 'About Dr. Amit', href: '#about' },
                { name: 'Our Services', href: '#services' },
                { name: 'Patient Reviews', href: '#testimonials' },
                { name: 'Contact Us', href: '#contact' }
              ].map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-textMuted hover:text-primary transition-all flex items-center gap-3 group font-medium text-[15px]">
                    <span className="w-2 h-[2px] bg-gray-200 rounded-full group-hover:w-4 group-hover:bg-primary transition-all"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-textPrimary text-lg mb-8 uppercase tracking-widest text-xs">Our Services</h4>
            <ul className="space-y-4">
              {['Root Canal Treatment', 'Dental Implants', 'Teeth Whitening', 'Invisible Braces', 'Pediatric Dentistry'].map((link) => (
                <li key={link}>
                  <a href="#services" className="text-textMuted hover:text-primary transition-all flex items-center gap-3 group font-medium text-[15px]">
                    <span className="w-2 h-[2px] bg-gray-200 rounded-full group-hover:w-4 group-hover:bg-primary transition-all"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="font-bold text-textPrimary text-lg mb-8 uppercase tracking-widest text-xs">Contact Details</h4>
            
            <div className="flex items-start gap-5 group">
               <div className="mt-1 bg-primary/10 p-3 rounded-xl text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <MapPin className="w-5 h-5" />
               </div>
               <p className="text-textMuted text-[15px] leading-relaxed font-medium">
                  GF/04, Yaksha Shree Complex,<br/>Chhani Jakatnaka,<br/>Vadodara, Gujarat
               </p>
            </div>
            
            <div className="flex items-start gap-5 group">
               <div className="mt-1 bg-primary/10 p-3 rounded-xl text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Phone className="w-5 h-5" />
               </div>
               <div className="flex flex-col">
                  <a href="tel:+917567368089" className="text-textPrimary text-lg font-black hover:text-primary transition-colors">
                     +91 75673 68089
                  </a>
                  <span className="text-[10px] font-bold text-textMuted uppercase tracking-widest mt-1">Direct Clinic Line</span>
               </div>
            </div>

            <div className="flex items-start gap-5 group">
               <div className="mt-1 bg-primary/10 p-3 rounded-xl text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Clock className="w-5 h-5" />
               </div>
               <div className="text-textMuted text-[15px] leading-relaxed font-medium">
                  <p>Mon-Sat: 9:30 AM – 8:00 PM</p>
                  <p className="text-xs font-bold text-textMuted/60 uppercase mt-1">Lunch Break: 1 PM – 4:30 PM</p>
               </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-8 relative">
          <p className="text-textMuted text-sm font-medium text-center md:text-left">
            &copy; {new Date().getFullYear()} <span className="text-textPrimary font-bold">Shreeji Dental Care</span>. Crafted with Excellence.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white border border-gray-100 p-3 rounded-full shadow-premium hover:shadow-premium-hover hover:-translate-y-1 transition-all text-primary group"
          >
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
          </button>

          <div className="flex items-center gap-8 text-sm font-bold text-textMuted uppercase tracking-widest text-[10px]">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
