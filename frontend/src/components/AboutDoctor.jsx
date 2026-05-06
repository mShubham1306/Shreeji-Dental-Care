import React from 'react';
import { motion } from 'framer-motion';
import { Award, GraduationCap, ShieldCheck, Heart, Sparkles, Zap, Clock } from 'lucide-react';

const AboutDoctor = () => {
  const whyChooseUs = [
    { icon: <Award className="w-8 h-8 text-white" />, title: "Experienced Dentist", color: "bg-blue-500", desc: "14+ years of clinical excellence" },
    { icon: <Zap className="w-8 h-8 text-white" />, title: "Modern Equipment", color: "bg-teal-500", desc: "Advanced dental technology" },
    { icon: <ShieldCheck className="w-8 h-8 text-white" />, title: "Sterilized Environment", color: "bg-emerald-500", desc: "Strict hygiene protocols" },
    { icon: <Sparkles className="w-8 h-8 text-white" />, title: "Painless Procedures", color: "bg-indigo-500", desc: "Comfortable and stress-free" },
    { icon: <Heart className="w-8 h-8 text-white" />, title: "Friendly Care", color: "bg-pink-500", desc: "Personalized patient attention" },
    { icon: <Clock className="w-8 h-8 text-white" />, title: "Affordable Care", color: "bg-amber-500", desc: "Transparent flexible pricing" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden" id="about">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 mb-32">
          
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:mx-0">
              {/* Animated background rings */}
              <motion.div 
                animate={{ scale: [1, 1.05, 1], rotate: [0, 5, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-[40px] blur-3xl" 
              />
              
              <div className="relative h-full w-full rounded-[40px] overflow-hidden bg-gray-50 border border-gray-100 shadow-premium group">
                <img 
                  src="/doctor.png" 
                  alt="Dr. Amit Vankar" 
                  loading="lazy"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80" }} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-8">
                  <p className="text-white font-medium italic">"Dedicated to your smile's health and beauty."</p>
                </div>
              </div>
              
              {/* Experience Floating Badge */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-8 -right-8 bg-white p-6 rounded-3xl shadow-premium-hover flex items-center gap-5 border border-gray-50 group hover:-translate-y-2 transition-transform duration-300"
              >
                 <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-white shadow-lg shadow-primary/30 group-hover:rotate-6 transition-transform">
                    <Award className="w-8 h-8" />
                 </div>
                 <div>
                    <div className="text-3xl font-black text-textPrimary leading-none">14+</div>
                    <div className="text-sm font-bold text-textMuted uppercase tracking-wider mt-1">Years Expert</div>
                 </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-bold mb-8 tracking-wide uppercase">
              <Sparkles className="w-4 h-4" />
              Meet Your Dentist
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold text-textPrimary leading-[1.1] mb-8">
              Dr. Amit Vankar <br/>
              <span className="text-xl md:text-2xl font-bold text-primary/80 uppercase tracking-[0.2em] mt-2 block">BDS – Cosmetic Surgeon</span>
            </h2>
            <p className="text-lg text-textMuted leading-relaxed mb-10 font-medium">
              Welcome to our state-of-the-art clinic where patient comfort and hygiene are our top priorities. With over 14 years of clinical excellence, Dr. Amit Vankar provides personalized, painless, and highly advanced dental care in a modern, welcoming environment.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
               <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors group">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                     <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                     <h4 className="text-lg font-bold text-textPrimary">Elite Education</h4>
                     <p className="text-textMuted text-sm font-medium leading-snug mt-1">Specialized in advanced cosmetic dentistry.</p>
                  </div>
               </div>
               <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors group">
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary shrink-0 group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                     <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                     <h4 className="text-lg font-bold text-textPrimary">Safety First</h4>
                     <p className="text-textMuted text-sm font-medium leading-snug mt-1">International standards of sterilization.</p>
                  </div>
               </div>
            </div>

            <a 
              href="https://wa.me/917567368089?text=Hello%2C%20I%20would%20like%20to%20consult%20with%20Dr.%20Amit." 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center bg-textPrimary text-white px-10 py-5 rounded-2xl font-bold hover:bg-primary transition-all shadow-premium hover:shadow-premium-hover hover:-translate-y-1"
            >
              Consult with Doctor
            </a>
          </motion.div>
        </div>

        {/* Why Choose Us Section */}
        <div className="pt-20 border-t border-gray-100">
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-4"
            >
              The Shreeji Advantage
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-extrabold text-textPrimary mb-6"
            >
              Why Patients <span className="text-primary">Trust Us</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-lg text-textMuted max-w-2xl mx-auto font-medium"
            >
              We combine hospital-grade standards with a boutique clinic experience tailored for your family.
            </motion.p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {whyChooseUs.map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group p-8 bg-gray-50/50 rounded-[32px] border border-gray-100 hover:shadow-premium-hover hover:bg-white hover:border-primary/10 transition-all duration-500 cursor-default"
              >
                <div className={`w-16 h-16 rounded-2xl ${item.color} flex items-center justify-center shrink-0 shadow-lg group-hover:rotate-6 transition-all duration-500 mb-6`}>
                   {item.icon}
                </div>
                <div>
                   <h3 className="text-xl font-bold text-textPrimary mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
                   <p className="text-textMuted leading-relaxed font-medium text-[15px]">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default AboutDoctor;
