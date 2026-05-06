import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import api from '../services/api';

const updatedServiceData = {
  "Dental Implants": {
    image: "https://images.openai.com/static-rsc-4/jTPjMky-kiHn3iZJpgufuyvqOnDbWCIQmnaKk5pA-RComhOxwOM_NvXCiZrYDdJBDVg7NS8pV9_davNzjZC8YSzwbYzIMcI_MgCvfDj2KEuLeb526E4e_DfgQlgiLcA1loLIzCcnQPp8V3mUE5reg0oMwAAV20JcSdsZDlcjD0T2jKyrd4EKpE1e5r03TFip?purpose=fullsize",
    features: ["Permanent tooth replacement", "Natural look & feel"]
  },
  "Invisible Braces": {
    image: "https://images.openai.com/static-rsc-4/6-H32YvTgyKUvhKnZfRbuMb3YuKO14aCq1kzhLGlIta3LcJeIZWyHfhGqEUpw_oY4k1YniIhdCvkvDh2bjPv-WpKryXcOvumHWF4l9acNcFvfbhy3fIhGLVDwvLLIRkBBPjYp4ok3dD-BUQxOrTSqgMjxl38vqC37IdvQbtMlLDwYekc070BssNHdmpXf2Gr?purpose=fullsize",
    features: ["No metal braces", "Comfortable & removable"]
  },
  "Teeth Whitening": {
    image: "https://images.openai.com/static-rsc-4/zRRrsHS35ozhJieyiYd4WEcbe1hNO2F9MB5yg1F7f7Gg1MKmuUgT41wQ_ft1TJZEkMUCPmBd_z2E21-cmDvvopLCY5tf7Y16st2ZEOCOGAtZZw_NvBgGEdhH-NAEF3eVTgwdUVGwTkMwUV-S-zC44ht9m7k5eSCBSbiM7Sjk9Nyz26GGzaS4hrHm-raEgWr6?purpose=fullsize",
    features: ["Instant brighter smile", "Safe & painless"]
  },
  "Root Canal Treatment": {
    image: "https://images.openai.com/static-rsc-4/3hNHM7ep03KHn82gkAPkjZ3wOm2Ridj5yyvD-YFCLbOKGHeENofQWrDLZseBdRGeDmpsyxebv3nUT8MmJfzj_Kj_DBn5dNA-sdsvsPMg6ojZ8UjLWk2qbsOG6IMKMm1msxwotG4UP-QaMabf5GRkgqXaVpAbMigregIJabx4CP3wiJdgJrgtqa5IBCKefVq8?purpose=fullsize",
    features: ["Pain relief treatment", "Save natural tooth"]
  },
  "Tooth Extraction": {
    image: "https://images.unsplash.com/photo-1588776813677-77aaf5595b83?auto=format&fit=crop&w=600&q=80",
    features: ["Painless procedure", "Quick recovery"]
  },
  "Crowns & Bridges": {
    image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=600&q=80",
    features: ["Restore broken teeth", "Natural ceramic look"]
  },
  "Dentures": {
    image: "https://images.unsplash.com/photo-1571772996211-2f02c9727629?auto=format&fit=crop&w=600&q=80",
    features: ["Comfortable fit", "Restore chewing ability"]
  },
  "Gum Treatment": {
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=600&q=80",
    features: ["Treat bleeding gums", "Healthy foundation"]
  },
  "Dental Cleaning": {
    image: "https://images.unsplash.com/photo-1598256989728-6623f99aa1fa?auto=format&fit=crop&w=600&q=80",
    features: ["Remove plaque & tartar", "Expert polishing"]
  }
};

const DEFAULT = {
  image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=600&q=80",
  features: ["Professional treatment", "Gentle care"]
};

// Reorder services to put the 4 main ones first if available
const prioritizeServices = (services) => {
  const priorities = ["Dental Implants", "Invisible Braces", "Teeth Whitening", "Root Canal Treatment"];
  // Filter out the priorities that are actually in the fetched list (or just add them if missing from DB for demo)
  const existingPriorities = priorities.filter(p => services.includes(p) || true); 
  // For the sake of matching the exact prompt, we will force the 4 core treatments to be at the top
  const core = priorities;
  const others = services.filter(s => !priorities.includes(s) && s !== "Invisible Braces"); 
  return [...core, ...others];
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
  const [services, setServices] = useState([
    "Dental Implants", "Invisible Braces", "Teeth Whitening", "Root Canal Treatment"
  ]);

  useEffect(() => {
    api.get('/services')
      .then(r => setServices(prioritizeServices(r.data.services)))
      .catch(() => {});
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
