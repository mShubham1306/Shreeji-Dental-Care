import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, CalendarHeart, ArrowUpRight, Sparkles } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    date: '',
    treatment: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    
    const messageLines = [
      "Hello, I would like to book an appointment.",
      "",
      `*Patient Name:* ${formData.name}`,
      `*Mobile:* ${formData.mobile}`
    ];
    
    if (formData.email) messageLines.push(`*Email:* ${formData.email}`);
    messageLines.push(`*Preferred Date:* ${formData.date}`);
    messageLines.push(`*Treatment Needed:* ${formData.treatment}`);
    if (formData.message) messageLines.push(`*Message:* ${formData.message}`);
    
    const text = encodeURIComponent(messageLines.join('\n'));
    const whatsappUrl = `https://wa.me/917567368089?text=${text}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden" id="contact">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[120px] -z-10 -translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-primary/10 text-primary px-5 py-2 rounded-full text-xs font-black mb-6 tracking-[0.2em] uppercase"
          >
            <Sparkles className="w-4 h-4" />
            Connect With Us
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-extrabold text-textPrimary mb-6"
          >
             Book Your <span className="text-primary">Appointment</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-lg text-textMuted max-w-2xl mx-auto font-medium"
          >
             Take the first step towards a healthier, brighter smile. Contact us today for world-class dental care.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 bg-white rounded-[40px] shadow-premium overflow-hidden border border-gray-100">
          
          {/* Left Side: Clinic Details */}
          <motion.div 
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="w-full lg:w-5/12 bg-primary p-10 md:p-14 text-white flex flex-col justify-between relative overflow-hidden"
          >
             <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

             <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-10 tracking-tight">Contact Information</h3>
                
                <div className="space-y-10">
                   <div className="flex items-start gap-6 group">
                      <div className="bg-white/15 p-4 rounded-2xl shrink-0 group-hover:bg-white group-hover:text-primary transition-all duration-500">
                         <MapPin className="w-6 h-6" />
                      </div>
                      <div>
                         <h4 className="font-bold text-lg mb-2">Clinic Address</h4>
                         <p className="text-white/80 leading-relaxed font-medium">
                            GF/04, Yaksha Shree Complex,<br/>
                            Below Vraj Hospital, Chhani Jakatnaka,<br/>
                            Vadodara, Gujarat
                         </p>
                      </div>
                   </div>

                   <div className="flex items-start gap-6 group">
                      <div className="bg-white/15 p-4 rounded-2xl shrink-0 group-hover:bg-white group-hover:text-primary transition-all duration-500">
                         <Phone className="w-6 h-6" />
                      </div>
                      <div>
                         <h4 className="font-bold text-lg mb-2">Call Us</h4>
                         <a href="tel:+917567368089" className="text-2xl font-black hover:text-white/80 transition-colors">
                            +91 75673 68089
                         </a>
                         <p className="text-white/60 text-sm font-bold mt-1 uppercase tracking-widest">Available for Emergencies</p>
                      </div>
                   </div>

                   <div className="flex items-start gap-6 group">
                      <div className="bg-white/15 p-4 rounded-2xl shrink-0 group-hover:bg-white group-hover:text-primary transition-all duration-500">
                         <Clock className="w-6 h-6" />
                      </div>
                      <div>
                         <h4 className="font-bold text-lg mb-2">Clinic Hours</h4>
                         <div className="text-white/80 font-medium space-y-1">
                            <p>Mon - Sat: 9:30 AM – 1:00 PM</p>
                            <p className="pl-0">Evening: 4:30 PM – 8:00 PM</p>
                            <p className="text-white/40 text-sm mt-2 font-bold uppercase tracking-wider italic">Closed on Sundays</p>
                         </div>
                      </div>
                   </div>
                </div>
             </div>

             <div className="relative z-10 mt-16 bg-white/10 p-8 rounded-3xl border border-white/20 backdrop-blur-md">
                <h4 className="font-bold mb-2 flex items-center gap-2 text-xl">
                   Locate Us
                </h4>
                <p className="text-sm text-white/70 mb-6 font-medium">Get real-time directions on Google Maps.</p>
                <a href="https://share.google/pIXji9Xu2MjzlUKsY" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-white text-primary px-8 py-4 rounded-2xl font-black hover:bg-gray-100 transition-all w-full group shadow-lg">
                   Open Maps <ArrowUpRight className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
             </div>
          </motion.div>

          {/* Right Side: Appointment Form */}
          <motion.div 
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="w-full lg:w-7/12 p-10 md:p-14"
          >
             <h3 className="text-2xl font-bold text-textPrimary mb-10 tracking-tight">Request an Appointment</h3>
             
             <form className="space-y-6" onSubmit={handleWhatsAppSubmit}>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="space-y-2">
                      <label className="text-xs font-black text-textMuted uppercase tracking-widest ml-1">Full Name</label>
                      <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Your Name" required className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:bg-white focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all font-medium" />
                   </div>
                   <div className="space-y-2">
                      <label className="text-xs font-black text-textMuted uppercase tracking-widest ml-1">Mobile Number</label>
                      <input type="tel" name="mobile" value={formData.mobile} onChange={handleInputChange} placeholder="+91" required className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:bg-white focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all font-medium" />
                   </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="space-y-2">
                      <label className="text-xs font-black text-textMuted uppercase tracking-widest ml-1">Email (Optional)</label>
                      <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Email" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:bg-white focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all font-medium" />
                   </div>
                   <div className="space-y-2">
                      <label className="text-xs font-black text-textMuted uppercase tracking-widest ml-1">Preferred Date</label>
                      <input type="date" name="date" value={formData.date} onChange={handleInputChange} required className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:bg-white focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all font-medium text-textMuted" />
                   </div>
                </div>

                <div className="space-y-2">
                   <label className="text-xs font-black text-textMuted uppercase tracking-widest ml-1">Select Treatment</label>
                   <div className="relative">
                      <select name="treatment" value={formData.treatment} onChange={handleInputChange} required className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:bg-white focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all font-medium text-textMuted appearance-none">
                         <option value="">Choose a treatment...</option>
                         <option value="General Checkup">General Checkup</option>
                         <option value="Root Canal Treatment">Root Canal Treatment</option>
                         <option value="Dental Implants">Dental Implants</option>
                         <option value="Braces / Invisible Aligners">Braces & Aligners</option>
                         <option value="Teeth Whitening">Teeth Whitening</option>
                         <option value="Emergency Dental Care">Emergency Dental Care</option>
                         <option value="Other">Other</option>
                      </select>
                      <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-textMuted">
                         <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                      </div>
                   </div>
                </div>

                <div className="space-y-2">
                   <label className="text-xs font-black text-textMuted uppercase tracking-widest ml-1">How can we help?</label>
                   <textarea name="message" value={formData.message} onChange={handleInputChange} rows="4" placeholder="Your Message..." className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:bg-white focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all resize-none font-medium"></textarea>
                </div>

                <div className="pt-4">
                   <button type="submit" className="w-full bg-primary text-white py-5 rounded-2xl font-black text-lg hover:bg-blue-600 shadow-premium hover:shadow-premium-hover hover:-translate-y-1 transition-all flex items-center justify-center gap-3">
                      <CalendarHeart className="w-6 h-6" />
                      Confirm Booking via WhatsApp
                   </button>
                   <p className="text-center text-textMuted text-xs mt-6 font-bold uppercase tracking-widest opacity-60">
                      We'll respond instantly to confirm your slot.
                   </p>
                </div>
             </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
