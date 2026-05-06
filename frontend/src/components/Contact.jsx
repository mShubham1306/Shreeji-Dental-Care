import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, CalendarHeart, Send, ArrowUpRight } from 'lucide-react';

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
    <section className="py-24 bg-gray-50/50 relative overflow-hidden" id="contact">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
         <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl"></div>
         <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-6 tracking-wide uppercase"
          >
            Get In Touch
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-textPrimary mb-4"
          >
             Book Your <span className="text-primary">Appointment</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-lg text-textMuted max-w-2xl mx-auto"
          >
             Take the first step towards a healthier, brighter smile. Contact us today or easily book an appointment online.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 bg-white rounded-[32px] shadow-[0_10px_50px_rgba(0,0,0,0.05)] overflow-hidden border border-gray-100">
          
          {/* Left Side: Clinic Details */}
          <motion.div 
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="w-full lg:w-5/12 bg-primary p-10 md:p-14 text-white flex flex-col justify-between relative overflow-hidden"
          >
             <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

             <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-8">Contact Information</h3>
                
                <div className="space-y-8">
                   <div className="flex items-start gap-5">
                      <div className="bg-white/10 p-3 rounded-full shrink-0">
                         <MapPin className="w-6 h-6" />
                      </div>
                      <div>
                         <h4 className="font-bold text-lg mb-1">Clinic Address</h4>
                         <p className="text-white/80 leading-relaxed text-[15px]">
                            GF/04, Yaksha Shree Complex,<br/>
                            Below Vraj Hospital,<br/>
                            Chhani Jakatnaka,<br/>
                            Vadodara, Gujarat
                         </p>
                      </div>
                   </div>

                   <div className="flex items-start gap-5">
                      <div className="bg-white/10 p-3 rounded-full shrink-0">
                         <Phone className="w-6 h-6" />
                      </div>
                      <div>
                         <h4 className="font-bold text-lg mb-1">Phone Number</h4>
                         <a href="tel:+917567368089" className="text-white/80 leading-relaxed text-[15px] hover:text-white transition-colors">
                            +91 75673 68089
                         </a>
                      </div>
                   </div>

                   <div className="flex items-start gap-5">
                      <div className="bg-white/10 p-3 rounded-full shrink-0">
                         <Clock className="w-6 h-6" />
                      </div>
                      <div>
                         <h4 className="font-bold text-lg mb-1">Clinic Timing</h4>
                         <p className="text-white/80 leading-relaxed text-[15px]">
                            Mon - Sat<br/>
                            9:30 AM – 1:00 PM<br/>
                            4:30 PM – 8:00 PM
                         </p>
                      </div>
                   </div>
                </div>
             </div>

             <div className="relative z-10 mt-12 bg-white/10 p-6 rounded-2xl border border-white/20 backdrop-blur-sm">
                <h4 className="font-bold mb-3 flex items-center gap-2 text-lg">
                   Google Maps
                </h4>
                <p className="text-sm text-white/80 mb-4">Find directions directly on Google Maps.</p>
                <a href="https://share.google/pIXji9Xu2MjzlUKsY" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-white text-primary px-6 py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors w-full group">
                   View Location <ArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
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
             <h3 className="text-2xl font-bold text-textPrimary mb-8">Request an Appointment</h3>
             
             <form className="space-y-6" onSubmit={handleWhatsAppSubmit}>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="space-y-2">
                      <label className="text-sm font-semibold text-textPrimary">Full Name</label>
                      <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="John Doe" required className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-100 focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" />
                   </div>
                   <div className="space-y-2">
                      <label className="text-sm font-semibold text-textPrimary">Mobile Number</label>
                      <input type="tel" name="mobile" value={formData.mobile} onChange={handleInputChange} placeholder="+91 XXXXX XXXXX" required className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-100 focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" />
                   </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="space-y-2">
                      <label className="text-sm font-semibold text-textPrimary">Email (Optional)</label>
                      <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="john@example.com" className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-100 focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" />
                   </div>
                   <div className="space-y-2">
                      <label className="text-sm font-semibold text-textPrimary">Appointment Date</label>
                      <input type="date" name="date" value={formData.date} onChange={handleInputChange} required className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-100 focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-textMuted" />
                   </div>
                </div>

                <div className="space-y-2">
                   <label className="text-sm font-semibold text-textPrimary">Treatment Type</label>
                   <select name="treatment" value={formData.treatment} onChange={handleInputChange} required className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-100 focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-textMuted appearance-none">
                      <option value="">Select a treatment...</option>
                      <option value="General Checkup">General Checkup</option>
                      <option value="Root Canal Treatment">Root Canal Treatment</option>
                      <option value="Dental Implants">Dental Implants</option>
                      <option value="Braces / Invisible Aligners">Braces & Aligners</option>
                      <option value="Teeth Whitening">Teeth Whitening</option>
                      <option value="Emergency Dental Care">Emergency Dental Care</option>
                      <option value="Other">Other</option>
                   </select>
                </div>

                <div className="space-y-2">
                   <label className="text-sm font-semibold text-textPrimary">Message (Optional)</label>
                   <textarea name="message" value={formData.message} onChange={handleInputChange} rows="4" placeholder="Briefly describe your dental issue..." className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-100 focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none"></textarea>
                </div>

                <div className="pt-2">
                   <button type="submit" className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-600 shadow-[0_8px_30px_rgba(14,165,233,0.3)] hover:-translate-y-1 transition-all flex items-center justify-center gap-2">
                      <CalendarHeart className="w-5 h-5" />
                      Book on WhatsApp
                   </button>
                </div>

             </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
