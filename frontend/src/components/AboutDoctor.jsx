import React from 'react';
import { motion } from 'framer-motion';
import { Award, GraduationCap, ShieldCheck, Heart, Sparkles, Zap, Clock } from 'lucide-react';

const AboutDoctor = () => {
  const whyChooseUs = [
    { icon: <Award className="w-8 h-8 text-white" />, title: "Experienced Dentist", color: "bg-blue-500", desc: "14+ years of clinical excellence" },
    { icon: <Zap className="w-8 h-8 text-white" />, title: "Modern Equipment", color: "bg-teal-500", desc: "Advanced dental technology" },
    { icon: <ShieldCheck className="w-8 h-8 text-white" />, title: "Sterilized Instruments", color: "bg-emerald-500", desc: "Strict hygiene protocols" },
    { icon: <Sparkles className="w-8 h-8 text-white" />, title: "Painless Procedures", color: "bg-indigo-500", desc: "Comfortable and stress-free" },
    { icon: <Heart className="w-8 h-8 text-white" />, title: "Friendly Care", color: "bg-pink-500", desc: "Personalized patient attention" },
    { icon: <Clock className="w-8 h-8 text-white" />, title: "Affordable Treatment", color: "bg-amber-500", desc: "Transparent flexible pricing" },
  ];

  return (
    <>
    <section className="py-24 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
          
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 relative"
          >
            {/* Soft background shape */}
            {/* Enhanced Glow Effect for Doctor Image */}
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-secondary/30 blur-2xl rounded-full transform scale-90 translate-y-4"></div>
          
          <div className="relative max-w-md mx-auto lg:mx-0 lg:max-w-none rounded-[30px] overflow-hidden bg-gray-50 border border-gray-100 shadow-[0_0_40px_rgba(14,165,233,0.15)] hover:shadow-[0_0_60px_rgba(14,165,233,0.3)] transition-all duration-500 group aspect-[4/5] w-full">
            <img 
              src="/doctor.png" 
              alt="Dr. Amit Vankar" 
              loading="lazy"
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80" }} 
            />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-6 lg:-right-10 bg-white p-6 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] hidden sm:flex items-center gap-4 hover:-translate-y-2 transition-transform">
               <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <Award className="w-7 h-7" />
               </div>
               <div>
                  <div className="text-2xl font-black text-textPrimary">14+ Years</div>
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
              Welcome to Shreeji Dental Care
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-textPrimary leading-tight mb-4">
              Dr. Amit Vankar <br/>
              <span className="text-2xl md:text-3xl font-medium text-textMuted uppercase tracking-wider">BDS – Cosmetic & Dental Surgeon</span>
            </h2>
            <p className="text-lg text-textMuted leading-relaxed mb-10">
              Welcome to our state-of-the-art clinic where patient comfort and hygiene come first. With over 14 years of clinical experience, Dr. Amit Vankar and our trusted team are dedicated to providing personalized, painless, and highly advanced dental care.
            </p>
            
            <div className="space-y-6 mb-10">
               <div className="flex items-start gap-4">
                  <div className="mt-1 w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center text-secondary shrink-0">
                     <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                     <h4 className="text-lg font-bold text-textPrimary">Trusted Expertise</h4>
                     <p className="text-textMuted leading-snug mt-1">Specialized in cosmetic dentistry and comprehensive smile transformations.</p>
                  </div>
               </div>
               <div className="flex items-start gap-4">
                  <div className="mt-1 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                     <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                     <h4 className="text-lg font-bold text-textPrimary">Strict Sterilization</h4>
                     <p className="text-textMuted leading-snug mt-1">We maintain the highest standard of health, hygiene, and modern environment.</p>
                  </div>
               </div>
            </div>

            <a href="https://wa.me/917567368089?text=Hello%2C%20I%20would%20like%20to%20consult%20with%20Dr.%20Amit." target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-textPrimary text-white px-8 py-4 rounded-full font-bold hover:bg-gray-800 transition-colors shadow-lg hover:-translate-y-1">
              Consult with Doctor
            </a>
          </motion.div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold text-textPrimary mb-4"
            >
              Why <span className="text-primary">Choose Us?</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-lg text-textMuted max-w-2xl mx-auto"
            >
              We deliver Apollo-level healthcare standards tailored locally for your family's smiles.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="group p-8 bg-gray-50 rounded-[24px] border border-gray-100 hover:shadow-[0_10px_40px_rgba(0,0,0,0.06)] hover:bg-white transition-all cursor-pointer flex items-start gap-6"
              >
                <div className={`w-16 h-16 rounded-2xl ${item.color} flex items-center justify-center shrink-0 shadow-md group-hover:scale-110 group-hover:rotate-3 transition-transform`}>
                   {item.icon}
                </div>
                <div>
                   <h3 className="text-xl font-bold text-textPrimary mb-1">{item.title}</h3>
                   <p className="text-textMuted leading-snug">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
    </>
  );
};

export default AboutDoctor;
