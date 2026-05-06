import React from 'react';
import { motion } from 'framer-motion';

const galleryImages = [
  { src: "/gallery/1.jpg", alt: "Clinic Interior", style: "md:col-span-2 md:row-span-2 aspect-square md:aspect-auto" },
  { src: "/gallery/2.jpg", alt: "Reception Area", style: "aspect-[4/3]" },
  { src: "/gallery/3.jpg", alt: "Dental Chair", style: "aspect-[4/3]" },
  { src: "/gallery/4.jpg", alt: "Modern Equipment", style: "aspect-[4/3]" },
  { src: "/gallery/5.jpg", alt: "Dentist Consultation", style: "aspect-[4/3]" },
  { src: "/gallery/6.jpg", alt: "Smiling Patients", style: "md:col-span-2 aspect-[8/3] object-cover" },
  { src: "/gallery/7.jpg", alt: "Treatment Room", style: "aspect-square" },
  { src: "/gallery/8.jpg", alt: "Orthodontic Procedures", style: "aspect-square" },
  { src: "/gallery/9.jpg", alt: "Cosmetic Dentistry", style: "aspect-[4/3] md:col-span-2" },
  { src: "/gallery/10.jpg", alt: "Sterilization Process", style: "aspect-[4/3] md:col-span-2" }
];

const Gallery = () => {
  return (
    <section className="py-24 bg-white" id="gallery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
           <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-6 tracking-wide uppercase"
          >
            Clinic Tour
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-textPrimary mb-4"
          >
            Smile <span className="text-primary">Gallery & Clinic</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-lg text-textMuted max-w-2xl mx-auto"
          >
            Tour our state-of-the-art clinic and see real transformations from our satisfied patients.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[250px]">
          {galleryImages.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              className={`relative rounded-3xl overflow-hidden group shadow-sm hover:shadow-xl transition-all ${img.style}`}
            >
              <img 
                 src={img.src} 
                 alt={img.alt}
                 loading="lazy"
                 onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80" }}
                 className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                 <h3 className="text-white font-bold text-lg">{img.alt}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
