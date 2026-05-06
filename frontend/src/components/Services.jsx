import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Activity, CheckCircle2 } from 'lucide-react';

const allServices = [
  {
    title: "Root Canal Treatment",
    image: "/services/root-canal.jpg",
    features: ["Pain-free procedure", "Save infected teeth"]
  },
  {
    title: "Dental Implants",
    image: "/services/dental-implant.jpg",
    features: ["Permanent replacement", "Natural look & feel"]
  },
  {
    title: "Teeth Whitening",
    image: "/services/teeth-whitening.jpg",
    features: ["Instant results", "Professional standard"]
  },
  {
    title: "Smile Designing",
    image: "/services/smile-design.jpg",
    features: ["Complete makeover", "Customized aesthetic"]
  },
  {
    title: "Braces & Aligners",
    image: "/services/braces.jpg",
    features: ["Invisible options", "Perfect alignment"]
  },
  {
    title: "Cosmetic Dentistry",
    image: "/services/cosmetic-dentistry.jpg",
    features: ["Enhance your smile", "Veneers & bonding"]
  },
  {
    title: "Pediatric Dentistry",
    image: "/services/pediatric.jpg",
    features: ["Child-friendly care", "Preventive treatments"]
  },
  {
    title: "Crown & Bridge",
    image: "/services/crown-bridge.jpg",
    features: ["Restore broken teeth", "Durable ceramics"]
  },
  {
    title: "Tooth Extraction",
    image: "/services/extraction.jpg",
    features: ["Safe & painless", "Wisdom tooth removal"]
  },
  {
    title: "Emergency Dental Care",
    image: "/services/emergency.jpg",
    features: ["Immediate relief", "Walk-ins welcome"]
  }
];

const ServiceCard = ({ service, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay: index * 0.05 }}
    className="group relative bg-white rounded-[24px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 hover:shadow-[0_10px_40px_rgba(0,0,0,0.08)] transition-all flex flex-col h-full cursor-pointer"
  >
    {/* Image Container with Hover Zoom */}
    <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-50">
      <img
        src={service.image}
        alt={service.title}
        loading="lazy"
        onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=600&q=80" }}
        className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
      />
      {/* Modern Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/80 via-[#0f172a]/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
      
      {/* Fast View Action */}
      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur p-2 rounded-full opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
        <ArrowRight className="w-4 h-4 text-primary" />
      </div>

      {/* Floating Medical Icon */}
      <div className="absolute bottom-4 right-4 bg-primary text-white p-2.5 rounded-xl shadow-lg transform translate-y-12 group-hover:translate-y-0 transition-transform duration-500">
         <Activity className="w-5 h-5"/>
      </div>
    </div>

    {/* Content */}
    <div className="p-8 flex-grow flex flex-col">
      <h3 className="text-xl font-bold text-textPrimary mb-4 group-hover:text-primary transition-colors">
        {service.title}
      </h3>
      
      <ul className="mb-6 space-y-3">
        {service.features.map((feature, idx) => (
          <li key={idx} className="flex items-start text-textMuted text-[15px]">
            <CheckCircle2 className="w-5 h-5 text-secondary mr-2 shrink-0 object-contain" />
            <span className="leading-snug">{feature}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto">
        <a href="https://wa.me/917567368089" target="_blank" rel="noopener noreferrer" className="inline-flex items-center font-bold text-primary hover:text-blue-700 transition-colors">
          Book Consultation <ArrowRight className="ml-2 w-4 h-4" />
        </a>
      </div>
    </div>
  </motion.div>
);

const Services = () => {
  return (
    <section className="py-24 bg-gray-50/50" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-6 tracking-wide uppercase"
          >
            Our Treatments
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-textPrimary mb-4"
          >
            Premium Dental <span className="text-primary">Services</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-lg text-textMuted max-w-2xl mx-auto"
          >
            Experience world-class cosmetic and restorative dentistry right here in Vadodara. Uncompromising quality for your perfect smile.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {allServices.map((service, idx) => (
            <ServiceCard key={idx} service={service} index={idx} />
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Services;
