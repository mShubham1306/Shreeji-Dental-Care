import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import api from '../services/api';

const updatedServiceData = {
  "Dental Implants": {
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=600&q=80",
    features: ["Permanent and natural-looking", "Tooth replacement solutions"]
  },
  "Invisible Braces": {
    image: "https://images.unsplash.com/photo-1598256989800-fea99e4d41fa?auto=format&fit=crop&w=600&q=80",
    features: ["Straighten teeth comfortably", "Without metal braces"]
  },
  "Teeth Whitening": {
    image: "https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?auto=format&fit=crop&w=600&q=80",
    features: ["Professional whitening", "Brighter confident smile"]
  },
  "Root Canal Treatment": {
    image: "https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=600&q=80",
    features: ["Pain-free treatment", "Save infected teeth"]
  },
  "Smile Makeover": {
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&q=80",
    features: ["Complete cosmetic", "Smile transformation"]
  },
  "Pediatric Dentistry": {
    image: "https://images.unsplash.com/photo-1549429465-b7720dbe45c5?auto=format&fit=crop&w=600&q=80",
    features: ["Gentle dental care", "For children"]
  }
};

const DEFAULT = {
  image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=600&q=80",
  features: ["Professional treatment", "Gentle care"]
};

// Reorder services to put the core ones first if available
const prioritizeServices = () => {
  return [
    "Dental Implants", 
    "Invisible Braces", 
    "Teeth Whitening", 
    "Root Canal Treatment",
    "Smile Makeover",
    "Pediatric Dentistry"
  ];
};

const ServiceCard = ({ service }) => {
  const data = updatedServiceData[service] || DEFAULT;
  return (
    <motion.div
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="group relative rounded-[20px] overflow-hidden bg-white shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.1)] border border-gray-100 transition-all cursor-pointer flex flex-col h-full"
    >
      <div className="relative h-[240px] w-full overflow-hidden">
        <img
          src={data.image}
          alt={service}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          onError={(e) => { e.target.src = DEFAULT.image; }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-textPrimary/80 via-transparent to-transparent opacity-80" />
        <h3 className="absolute bottom-5 left-5 text-2xl font-bold text-white z-10">{service}</h3>
      </div>

      <div className="flex flex-col flex-1 p-6 bg-white">
        <ul className="space-y-3 flex-1 mb-6">
          {data.features.map((feature, idx) => (
            <li key={idx} className="flex items-start text-textMuted text-[15px]">
              <CheckCircle2 className="w-5 h-5 text-secondary mr-2 shrink-0 object-contain" />
              <span className="leading-snug">{feature}</span>
            </li>
          ))}
        </ul>
        
        <div className="pt-4 border-t border-gray-100 mt-auto">
          <a
            href={`https://wa.me/917567368089?text=Hello%2C%20I%20want%20to%20know%20more%20about%20${encodeURIComponent(service)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm font-bold text-primary group-hover:text-blue-700 transition-colors"
          >
            Explore Treatment
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Services = () => {
  const [services, setServices] = useState(prioritizeServices());

  useEffect(() => {
    api.get('/services')
      .then(() => setServices(prioritizeServices()))
      .catch(() => setServices(prioritizeServices()));
  }, []);

  return (
    <section id="services" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-textPrimary mb-4 leading-tight"
          >
            Transforming Smiles with <br/><span className="text-primary">Advanced Procedures</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-lg text-textMuted"
          >
            Experience pain-free treatments with world-class dental technology tailored to your needs.
          </motion.p>
        </div>

        {/* 3 columns on desktop, 1 on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Services;
