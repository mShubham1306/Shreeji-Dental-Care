import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Priya Sharma",
    treatment: "Smile Makeover",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
    text: "I was always conscious of my smile, but the cosmetic treatment here completely changed my life. Painless procedure and amazing results. I can't stop smiling now!"
  },
  {
    name: "Rahul Desai",
    treatment: "Dental Implants",
    image: "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?auto=format&fit=crop&w=300&q=80",
    text: "Getting a dental implant sounded scary, but Dr. Amit made it entirely comfortable. The new tooth feels exactly like my natural one. Highly professional clinic."
  },
  {
    name: "Anjali Patel",
    treatment: "Invisible Braces",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80",
    text: "The invisible braces treatment was a breeze. No one even noticed I was wearing them, and my teeth are now perfectly aligned. Best clinic in Vadodara!"
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden" id="testimonials">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-6 tracking-wide uppercase"
          >
            Patient Stories
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-textPrimary mb-4"
          >
            Smiles We've <span className="text-primary">Transformed</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-lg text-textMuted max-w-2xl mx-auto"
          >
            Don't just take our word for it. Read what our happy patients have to say about their experience.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white p-8 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100 relative group cursor-pointer"
            >
              <Quote className="absolute top-8 right-8 w-10 h-10 text-primary/10 group-hover:text-primary/20 transition-colors" />
              
              <div className="flex items-center gap-2 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <p className="text-textMuted leading-relaxed mb-8 relative z-10 text-[15px]">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center gap-4 mt-auto">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-primary/20"
                />
                <div>
                  <h4 className="font-bold text-textPrimary">{testimonial.name}</h4>
                  <p className="text-xs font-semibold text-primary">{testimonial.treatment}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Testimonials;
