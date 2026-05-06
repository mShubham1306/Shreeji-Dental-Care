import React, { useEffect, useState } from 'react';
import { motion, useAnimationControls } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Priya Sharma",
    date: "2 weeks ago",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80",
    text: "I was always conscious of my smile, but the cosmetic treatment here completely changed my life. Dr. Amit is very professional. Best clinic in Vadodara!"
  },
  {
    name: "Rahul Desai",
    date: "1 month ago",
    image: "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?auto=format&fit=crop&w=150&q=80",
    text: "Getting a dental implant sounded scary, but the team made it entirely comfortable. The new tooth feels exactly like my natural one."
  },
  {
    name: "Anjali Patel",
    date: "3 months ago",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80",
    text: "The invisible braces treatment was a breeze. No one even noticed I was wearing them, and my teeth are now perfectly aligned. Highly recommended."
  },
  {
    name: "Vikram Singh",
    date: "4 months ago",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    text: "I had a sudden severe toothache and they accommodated me immediately for a root canal. Painless procedure and very hygienic clinic environment."
  },
  {
    name: "Meera Joshi",
    date: "5 months ago",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80",
    text: "Taking my 5-year-old to the dentist was always a nightmare until we visited Shreeji Dental Care. They are so gentle and patient with kids!"
  }
];

const TestimmialCard = ({ testimonial }) => (
  <div className="min-w-[340px] md:min-w-[420px] bg-white/70 backdrop-blur-xl p-8 rounded-[32px] shadow-premium border border-white/50 relative flex-shrink-0 mx-4 mb-10 mt-4 h-full flex flex-col hover:bg-white hover:shadow-premium-hover hover:-translate-y-2 transition-all duration-500 group">
    <div className="flex items-center gap-4 mb-6">
      <div className="relative">
        <img 
          src={testimonial.image} 
          alt={testimonial.name}
          loading="lazy"
          className="w-14 h-14 rounded-2xl object-cover shadow-sm bg-gray-100 group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute -bottom-1 -right-1 bg-green-500 w-4 h-4 rounded-full border-2 border-white shadow-sm" />
      </div>
      <div>
        <h4 className="font-bold text-textPrimary leading-tight text-lg">{testimonial.name}</h4>
        <div className="flex items-center gap-2 mt-1">
          <div className="flex text-yellow-400">
             {[...Array(5)].map((_, i) => (
               <Star key={i} className="w-3.5 h-3.5 fill-current" />
             ))}
          </div>
          <span className="text-[10px] font-bold text-textMuted uppercase tracking-wider">{testimonial.date}</span>
        </div>
      </div>
      <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" className="w-6 h-6 ml-auto opacity-40 group-hover:opacity-100 transition-opacity" alt="G" />
    </div>
    <p className="text-textMuted leading-relaxed font-medium text-[15px] flex-grow italic">
      "{testimonial.text}"
    </p>
    <div className="mt-6 pt-6 border-t border-gray-50 flex items-center justify-between">
      <span className="text-[10px] font-bold text-primary uppercase tracking-widest">Verified Review</span>
      <div className="flex -space-x-2">
         {[1,2,3].map(i => (
           <div key={i} className={`w-6 h-6 rounded-full border-2 border-white bg-gray-200 overflow-hidden`}>
             <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="user" />
           </div>
         ))}
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  const controls = useAnimationControls();
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      controls.start({
        x: [0, -100 * testimonials.length],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 35, // Slightly slower for better readability
            ease: "linear",
          },
        },
      });
    } else {
      controls.stop();
    }
  }, [isHovered, controls]);

  return (
    <section className="py-24 bg-blue-50/40 relative overflow-hidden" id="testimonials">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -z-10 translate-x-1/3 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[100px] -z-10 -translate-x-1/3 translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full mb-16">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-primary/10 text-primary px-5 py-2 rounded-full text-xs font-black mb-6 tracking-[0.2em] uppercase"
          >
            <Star className="w-3.5 h-3.5 fill-current" />
            Patient Testimonials
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-extrabold text-textPrimary mb-6"
          >
            Google <span className="text-primary">Reviews</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-lg text-textMuted max-w-2xl mx-auto font-medium"
          >
            Trusted by over <span className="text-primary font-bold">500+ families</span> in Vadodara for our commitment to painless dental excellence.
          </motion.p>
        </div>
      </div>

      {/* Infinite Autoscroll Track */}
      <div 
        className="w-full overflow-hidden py-10"
      >
        <motion.div 
          className="flex cursor-grab active:cursor-grabbing"
          animate={controls}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onPointerDown={() => setIsHovered(true)}
          onPointerUp={() => setIsHovered(false)}
        >
          {/* Repeat testimonials multiple times to create seamless loop effect */}
          {[...testimonials, ...testimonials, ...testimonials].map((testimonial, idx) => (
            <TestimmialCard key={idx} testimonial={testimonial} />
          ))}
        </motion.div>
      </div>

      {/* Google Trust Badge */}
      <div className="flex flex-col items-center justify-center mt-12">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-2xl font-black text-textPrimary">4.9</span>
          <div className="flex text-yellow-400">
             {[...Array(5)].map((_, i) => (
               <Star key={i} className="w-5 h-5 fill-current" />
             ))}
          </div>
        </div>
        <p className="text-textMuted font-bold text-sm uppercase tracking-widest">Average Google Rating</p>
      </div>

    </section>
  );
};

export default Testimonials;
