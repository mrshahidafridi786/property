import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as LucideIcons from "lucide-react";
import { servicesData } from "../data/servicesData";
import { companyInfo } from "../data/companyInfo";
import { FiSearch, FiMessageSquare, FiClock, FiCheck } from "react-icons/fi";

function LucideIcon({ name, className }) {
  const Icon = LucideIcons[name];
  if (!Icon) return <LucideIcons.HelpCircle className={className} />;
  return <Icon className={className} />;
}

export default function Services() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = ["All", "Administrative", "Residential", "Commercial", "Maintenance", "Agency", "Specialized"];

  const filteredServices = servicesData.filter((service) => {
    const matchesCategory = selectedCategory === "All" || service.category === selectedCategory;
    const matchesSearch = 
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      service.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) || 
      service.longDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.badge.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getWhatsAppLink = (serviceTitle) => {
    const text = encodeURIComponent(`Hello ${companyInfo.name}, I would like to inquire about your "${serviceTitle}" service for my property.`);
    return `${companyInfo.whatsappLink}?text=${text}`;
  };

  return (
    <div className="w-full bg-lightGray min-h-screen">
      
      {/* Banner */}
      <section className="relative h-[280px] md:h-[360px] bg-primary flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 scale-105"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=2100&q=80')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/70 to-primary/40" />

        <div className="relative z-10 text-center max-w-3xl px-6">
          <span className="text-xs font-bold tracking-[0.3em] text-accent uppercase block mb-3">
            Fiduciary Capabilities
          </span>
          <motion.h1 
            initial={{ opacity: 0, filter: "blur(10px)", y: 25 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight mb-4"
          >
            Our 24 Specialized Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.85 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-sm sm:text-base text-slate-300 font-light max-w-xl mx-auto"
          >
            A comprehensive suite of residential, commercial, administrative, and engineering management solutions.
          </motion.p>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="py-8 bg-white border-b border-borderGray sticky top-20 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-5 items-center justify-between">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs font-bold rounded-luxury-sm whitespace-nowrap transition-all duration-300 ${
                  selectedCategory === cat
                    ? "bg-secondary text-white shadow-luxury"
                    : "bg-lightGray text-primary/80 hover:bg-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search across all 24 services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-lightGray border border-borderGray rounded-luxury text-xs text-primary focus:outline-none focus:border-secondary focus:bg-white transition-all"
            />
          </div>

        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="flex justify-between items-center mb-8">
            <p className="text-left text-xs font-bold text-slate-400 uppercase tracking-wider">
              Displaying {filteredServices.length} of {servicesData.length} Fiduciary Services
            </p>
            <span className="text-[11px] text-accent font-semibold hidden sm:inline-block">
              Guaranteed SLAs & Dedicated Account Director
            </span>
          </div>

          <AnimatePresence mode="popLayout">
            {filteredServices.length > 0 ? (
              <motion.div 
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredServices.map((service) => (
                  <motion.div
                    layout
                    key={service.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.35 }}
                    whileHover={{ y: -6, boxShadow: "0 20px 40px -15px rgba(15,23,42,0.08)" }}
                    className="bg-white p-7 rounded-luxury border border-borderGray transition-all duration-300 text-left flex flex-col justify-between group"
                  >
                    <div>
                      {/* Top Header Row with Icon and SLA badge */}
                      <div className="flex items-center justify-between mb-5">
                        <div className="w-12 h-12 rounded-luxury-sm bg-lightGray flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                          <LucideIcon name={service.iconName} className="w-6 h-6" />
                        </div>
                        <span className="flex items-center gap-1 text-[10px] font-bold text-accent bg-accent/10 px-2.5 py-1 rounded-full uppercase tracking-wider">
                          <FiClock className="w-3 h-3" />
                          {service.sla}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-[10px] font-bold text-secondary uppercase tracking-wider">
                          {service.category}
                        </span>
                        <span className="text-slate-300">•</span>
                        <span className="text-[10px] font-medium text-slate-400">
                          {service.badge}
                        </span>
                      </div>

                      <h3 className="text-base font-extrabold text-primary mb-3 group-hover:text-secondary transition-colors">
                        {service.title}
                      </h3>
                      
                      <p className="text-slate-500 font-light text-xs leading-relaxed mb-6">
                        {service.longDesc}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                      <a 
                        href={getWhatsAppLink(service.title)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full"
                      >
                        <button className="w-full py-2.5 bg-lightGray text-primary font-bold text-xs rounded-luxury hover:bg-secondary hover:text-white transition-all flex items-center justify-center gap-2">
                          <FiMessageSquare className="w-3.5 h-3.5 text-accent" />
                          <span>Inquire via Concierge</span>
                        </button>
                      </a>
                    </div>

                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20 bg-white rounded-luxury border border-borderGray"
              >
                <LucideIcons.SearchSlash className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                <h3 className="text-base font-bold text-primary mb-1">No services found</h3>
                <p className="text-slate-500 font-light text-xs">
                  Try adjusting your search criteria or resetting the category filter.
                </p>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </section>

    </div>
  );
}
