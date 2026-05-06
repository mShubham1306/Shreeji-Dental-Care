import React, { useEffect, useState } from 'react';
import { motion, useAnimationControls } from 'framer-motion';
import { Quote } from 'lucide-react';

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
  <div className="min-w-[320px] md:min-w-[400px] bg-white/70 backdrop-blur-md p-8 rounded-[24px] shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-white/50 relative flex-shrink-0 mx-3 mb-10 mt-4 h-full flex flex-col hover:bg-white hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all">
    <div className="flex items-center gap-4 mb-6">
      <img 
        src={testimonial.image} 
        alt={testimonial.name}
        loading="lazy"
        className="w-12 h-12 rounded-full object-cover shadow-sm bg-gray-100"
      />
      <div>
        <h4 className="font-bold text-textPrimary leading-tight">{testimonial.name}</h4>
        <div className="flex items-center gap-2 mt-1">
          <div className="flex text-yellow-400">
             <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
             <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
             <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
             <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
             <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
          </div>
          <span className="text-xs font-medium text-textMuted ml-1">{testimonial.date}</span>
        </div>
      </div>
      <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" className="w-5 h-5 ml-auto opacity-70" alt="G" />
    </div>
    <p className="text-textMuted leading-relaxed text-[15px] flex-grow">
      "{testimonial.text}"
    </p>
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
            duration: 25,
            ease: "linear",
          },
        },
      });
    } else {
      controls.stop();
    }
  }, [isHovered, controls]);

  return (
    <section className="py-24 bg-blue-50/30 relative overflow-hidden" id="testimonials">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[80px] -z-10 translate-x-1/3 -translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full mb-12">
        <div className="text-center">
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
            Google <span className="text-primary">Reviews</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-lg text-textMuted max-w-2xl mx-auto"
          >
            Rated 4.9/5 by over 500+ happy patients in Vadodara.
          </motion.p>
        </div>
      </div>

      {/* Infinite Autoscroll Track */}
      <div 
        className="w-full overflow-hidden py-4"
      >
         {/* Using motion.div to animate x translation. We multiply array to ensure endless smooth loop */}
        <motion.div 
          className="flex"
          animate={controls}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onPointerDown={() => setIsHovered(true)}
          onPointerUp={() => setIsHovered(false)}
        >
          {/* Repeat testimonials twice to create seamless loop effect */}
          {[...testimonials, ...testimonials, ...testimonials].map((testimonial, idx) => (
            <TestimmialCard key={idx} testimonial={testimonial} />
          ))}
        </motion.div>
      </div>

    </section>
  );
};

export default Testimonials;
