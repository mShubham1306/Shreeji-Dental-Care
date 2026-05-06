import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: "Root Canal Treatment",
    image: "/services/service-1.jpg",
    description: "Advanced root canal therapy to save your natural teeth with minimal discomfort."
  },
  {
    title: "Dental Implants",
    image: "/services/service-2.jpg",
    description: "Premium dental implants for a permanent, natural-looking solution to missing teeth."
  },
  {
    title: "Teeth Whitening",
    image: "/services/service-3.jpg",
    description: "Professional whitening treatments for a brighter, more confident smile."
  },
  {
    title: "Smile Designing",
    image: "/services/service-4.jpg",
    description: "Customized smile makeovers using the latest digital dentistry technology."
  },
  {
    title: "Braces & Aligners",
    image: "/services/service-5.jpg",
    description: "Modern orthodontic solutions including clear aligners for perfect alignment."
  },
  {
    title: "Cosmetic Dentistry",
    image: "/services/service-6.jpg",
    description: "Enhance your appearance with our comprehensive range of cosmetic procedures."
  },
  {
    title: "Pediatric Dentistry",
    image: "/services/service-7.jpg",
    description: "Specialized dental care for children in a friendly and comfortable environment."
  },
  {
    title: "Crown & Bridge",
    image: "/services/service-8.jpg",
    description: "High-quality dental crowns and bridges to restore function and aesthetics."
  },
  {
    title: "Tooth Extraction",
    image: "/services/service-9.jpg",
    description: "Safe and gentle tooth extractions, including wisdom teeth removal."
  },
  {
    title: "Emergency Dental Care",
    image: "/services/service-10.jpg",
    description: "Immediate assistance for dental emergencies to provide quick relief."
  }
];

const ServiceCard = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-white rounded-[24px] overflow-hidden shadow-soft hover:shadow-hover transition-all duration-500 flex flex-col h-full border border-gray-50"
    >
      {/* Image Container */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          loading="lazy"
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
        />
        {/* Subtle Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Content */}
      <div className="p-6 md:p-8 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">
          {service.title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed flex-grow">
          {service.description}
        </p>
        
        <div className="mt-6 flex items-center text-primary font-semibold text-sm group/link">
          <span className="mr-2">Learn More</span>
          <svg 
            className="w-4 h-4 transform transition-transform duration-300 group-hover/link:translate-x-1" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </motion.div>
  );
};

const Services = () => {
  return (
    <section className="py-20 md:py-28 bg-white" id="services">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-bold tracking-wider uppercase mb-4"
          >
            Expert Care
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6"
          >
            Premium Dental <span className="text-primary">Services</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 leading-relaxed"
          >
            We provide a comprehensive range of dental services with a focus on quality, 
            comfort, and modern technology to give you the perfect smile you deserve.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
