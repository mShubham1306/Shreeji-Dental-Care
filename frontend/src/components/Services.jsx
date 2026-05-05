import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import api from '../services/api';

const serviceData = {
  "Root Canal Treatment": {
    image: "https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=600&q=80",
    desc: "Relieves severe toothache by removing infected pulp. Painless, safe & completed in one visit with modern precision tools."
  },
  "Dental Implants": {
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=600&q=80",
    desc: "Permanent titanium tooth roots that look, feel and function exactly like your real teeth — for a lifetime."
  },
  "Teeth Whitening": {
    image: "https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?auto=format&fit=crop&w=600&q=80",
    desc: "Professional-grade whitening that removes stains and brightens your smile by several shades in a single session."
  },
  "Tooth Extraction": {
    image: "https://images.unsplash.com/photo-1588776813677-77aaf5595b83?auto=format&fit=crop&w=600&q=80",
    desc: "Gentle and safe removal of damaged, broken or wisdom teeth under local anaesthesia with minimal discomfort."
  },
  "Crowns & Bridges": {
    image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=600&q=80",
    desc: "Custom-crafted ceramic caps (crowns) and bridges to restore broken teeth and fill missing tooth gaps naturally."
  },
  "Dentures": {
    image: "https://images.unsplash.com/photo-1571772996211-2f02c9727629?auto=format&fit=crop&w=600&q=80",
    desc: "Comfortable, removable full or partial dentures that closely replicate natural teeth and restore your chewing ability."
  },
  "Gum Treatment": {
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=600&q=80",
    desc: "Effective treatment for bleeding gums, gum disease (pyorrhoea) and deep periodontal pockets using gentle techniques."
  },
  "Dental Cleaning": {
    image: "https://images.unsplash.com/photo-1598256989728-6623f99aa1fa?auto=format&fit=crop&w=600&q=80",
    desc: "Professional ultrasonic scaling and polishing to remove tartar, plaque and stains — keeping your teeth healthy & bright."
  }
};

const DEFAULT = {
  image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80",
  desc: "High quality professional dental treatment tailored for your comfort."
};

const ServiceCard = ({ service }) => {
  const data = serviceData[service] || DEFAULT;
  return (
    <motion.div
      whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(0,0,0,0.18)" }}
      className="group relative rounded-2xl overflow-hidden shadow-md w-full bg-white cursor-pointer flex flex-col"
    >
      {/* Image */}
      <div className="relative h-52 w-full overflow-hidden">
        <img
          src={data.image}
          alt={service}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          onError={(e) => { e.target.src = DEFAULT.image; }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 bg-white">
        <h3 className="text-lg font-bold text-gray-900 mb-2 leading-snug">{service}</h3>
        <p className="text-gray-500 text-sm leading-relaxed flex-1">{data.desc}</p>
        <a
          href="https://wa.me/917567368089?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20dental%20treatment."
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center text-sm font-semibold text-primary hover:text-blue-700 transition-colors group/btn"
        >
          Learn More
          <ChevronRight className="ml-1 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </a>
      </div>
    </motion.div>
  );
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
  hidden: { y: 24, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
};

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    api.get('/services')
      .then(r => setServices(r.data.services))
      .catch(() => {});
  }, []);

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block bg-blue-50 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-4 tracking-wide"
          >
            Enhancing Your Smile
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Our Dental <span className="text-primary">Services</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-lg text-gray-500 max-w-2xl mx-auto"
          >
            We offer a full range of modern dental treatments for the whole family — comfortable, affordable and expert care.
          </motion.p>
        </div>

        {/* Grid */}
        {services.length > 0 ? (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {services.map((service, i) => (
              <motion.div key={i} variants={itemVariants}>
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 animate-pulse">
                <div className="bg-gray-200 h-52 w-full" />
                <div className="p-5 space-y-3">
                  <div className="h-4 bg-gray-200 rounded w-3/4" />
                  <div className="h-3 bg-gray-100 rounded w-full" />
                  <div className="h-3 bg-gray-100 rounded w-5/6" />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;
