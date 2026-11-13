import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import { servicesData } from "../../data/servicesData";
import { fadeIn, staggerContainer } from "../../animations/variants";
import { FiArrowRight } from "react-icons/fi";

export function LucideIcon({ name, className }) {
  const Icon = LucideIcons[name];
  if (!Icon) return <LucideIcons.HelpCircle className={className} />;
  return <Icon className={className} />;
}

export default function ServicesSection() {
  // Highlight 6 flagship services on home page
  const previewServices = servicesData.filter(s => 
    [2, 5, 12, 14, 15, 20].includes(s.id)
  );

  return (
    <section className="py-24 bg-lightGray relative overflow-hidden">
      
      {/* Decorative Blur Blob */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-bold tracking-[0.25em] text-secondary uppercase block mb-3"
          >
            Institutional Service Suite
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl font-black text-primary mb-5 tracking-tight"
          >
            End-to-End Real Estate Solutions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-500 font-light text-sm md:text-base leading-relaxed"
          >
            From regulatory compliance and forensic building audits to automated rent rolls and 24/7 technical dispatch, explore our 24 specialized services.
          </motion.p>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={staggerContainer(0.08, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {previewServices.map((service, idx) => (
            <motion.div
              key={service.id}
              variants={fadeIn("up", "spring", idx * 0.08, 0.6)}
              whileHover={{ 
                y: -8, 
                boxShadow: "0 20px 40px -15px rgba(15, 23, 42, 0.08)",
                borderColor: "rgba(37, 99, 235, 0.25)"
              }}
              className="bg-white p-8 rounded-luxury border border-borderGray transition-all duration-300 flex flex-col justify-between text-left group"
            >
              <div>
                {/* Header row with icon and SLA badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-luxury-sm bg-lightGray flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <LucideIcon name={service.iconName} className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-bold text-accent bg-accent/10 px-2.5 py-1 rounded-full uppercase tracking-wider">
                    {service.sla}
                  </span>
                </div>

                <span className="text-[10px] font-bold text-secondary uppercase tracking-wider block mb-2">
                  {service.category}
                </span>

                <h3 className="text-lg font-extrabold text-primary mb-3 group-hover:text-secondary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-slate-500 font-light text-xs md:text-sm leading-relaxed mb-6">
                  {service.shortDesc}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] font-semibold text-slate-400">
                  {service.badge}
                </span>
                <Link 
                  to="/services" 
                  className="text-xs font-bold text-secondary hover:text-primary flex items-center gap-1.5 transition-colors group-hover:translate-x-1 transition-transform"
                >
                  <span>Explore</span>
                  <FiArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <div className="text-center">
          <Link to="/services">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="px-8 py-4 bg-primary text-white text-xs font-bold rounded-luxury shadow-luxury hover:bg-secondary transition-all"
            >
              Browse All 24 Professional Services
            </motion.button>
          </Link>
        </div>

      </div>

    </section>
  );
}
