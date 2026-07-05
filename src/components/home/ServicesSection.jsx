import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import { servicesData } from "../../data/servicesData";
import { fadeIn, staggerContainer } from "../../animations/variants";

// Dynamic Lucide Icon Mapper
export function LucideIcon({ name, className }) {
  const Icon = LucideIcons[name];
  if (!Icon) return <LucideIcons.HelpCircle className={className} />;
  return <Icon className={className} />;
}

export default function ServicesSection() {
  // Show 6 core services on the home page preview
  const previewServices = servicesData.filter(s => 
    [2, 3, 12, 14, 19, 24].includes(s.id)
  );

  return (
    <section className="py-24 bg-lightGray relative overflow-hidden">
      
      {/* Decorative Blur BG Blob */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-bold tracking-[0.2em] text-secondary uppercase block mb-3"
          >
            Our Professional Services
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-extrabold text-primary mb-5"
          >
            Comprehensive Real Estate Solutions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-500 font-light text-sm md:text-base leading-relaxed"
          >
            From administrative compliance to emergency maintenance and complex security management, we provide a complete suite of services tailored to your property.
          </motion.p>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={staggerContainer(0.1, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {previewServices.map((service, idx) => (
            <motion.div
              key={service.id}
              variants={fadeIn("up", "spring", idx * 0.1, 0.6)}
              whileHover={{ 
                y: -10, 
                boxShadow: "0 20px 40px -15px rgba(15, 23, 42, 0.08)",
                borderColor: "rgba(37, 99, 235, 0.2)"
              }}
              className="bg-white p-8 rounded-luxury border border-borderGray transition-all duration-300 flex flex-col items-start text-left interactive-card"
            >
              {/* Animated Icon Circle */}
              <div className="w-12 h-12 rounded-luxury-sm bg-lightGray flex items-center justify-center text-secondary mb-6 group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                <LucideIcon name={service.iconName} className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-primary mb-3">
                {service.title}
              </h3>
              <p className="text-slate-500 font-light text-xs md:text-sm leading-relaxed mb-6 flex-grow">
                {service.shortDesc}
              </p>
              <Link 
                to="/services" 
                className="text-xs font-semibold text-secondary hover:text-primary flex items-center gap-1.5 transition-colors group"
              >
                Learn More 
                <LucideIcons.ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/services">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-primary text-white text-sm font-semibold rounded-luxury shadow-luxury hover:bg-secondary transition-all"
              >
                View All 24 Services
              </motion.button>
            </Link>
          </motion.div>
        </div>

      </div>

    </section>
  );
}
