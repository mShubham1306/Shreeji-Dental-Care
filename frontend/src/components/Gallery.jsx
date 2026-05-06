import React from 'react';
import { motion } from 'framer-motion';

const galleryImages = [
  {
    before: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80",
    after: "https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?auto=format&fit=crop&w=600&q=80",
    title: "Teeth Whitening"
  },
  {
    before: "https://images.unsplash.com/photo-1598256989800-fea99e4d41fa?auto=format&fit=crop&w=600&q=80",
    after: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&q=80",
    title: "Invisible Braces"
  },
  {
    before: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=600&q=80",
    after: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=600&q=80",
    title: "Smile Makeover"
  }
];

const Gallery = () => {
  return (
    <section className="py-24 bg-gray-50" id="gallery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-textPrimary mb-4"
          >
            Smile <span className="text-primary">Gallery</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-lg text-textMuted max-w-2xl mx-auto"
          >
            Browse through our successful patient transformations. Real results from real patients.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {galleryImages.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-white rounded-[24px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 group"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                {/* Before Image (Bottom) */}
                <img 
                   src={item.before} 
                   alt="Before"
                   className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out opacity-100 group-hover:opacity-0" 
                />
                
                {/* After Image (Top) */}
                <img 
                   src={item.after} 
                   alt="After"
                   className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out scale-110 group-hover:scale-100 opacity-0 group-hover:opacity-100" 
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Badge Overlay */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1.5 rounded-full text-xs font-bold text-textPrimary flex items-center gap-2 transition-all duration-300 group-hover:-translate-y-10 group-hover:opacity-0">
                  <div className="w-2 h-2 rounded-full bg-red-400"></div>
                  Before
                </div>
                
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1.5 rounded-full text-xs font-bold text-primary flex items-center gap-2 opacity-0 translate-y-10 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="w-2 h-2 rounded-full bg-green-400"></div>
                  After
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 translate-y-4 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                   <h3 className="text-xl font-bold">{item.title}</h3>
                   <p className="text-sm text-white/80">Slide to see transformation</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
