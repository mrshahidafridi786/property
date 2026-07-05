import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as LucideIcons from "lucide-react";
import { servicesData } from "../data/servicesData";
import { fadeIn, staggerContainer } from "../animations/variants";
import { FiSearch, FiMessageSquare } from "react-icons/fi";

// Dynamic Lucide Icon mapping
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

  // Unique categories for filtering
  const categories = ["All", "Administrative", "Residential", "Commercial", "Maintenance", "Agency"];

  // Filter services based on category and search query
  const filteredServices = servicesData.filter((service) => {
    const matchesCategory = selectedCategory === "All" || service.category === selectedCategory;
    const matchesSearch = 
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      service.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) || 
      service.longDesc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getWhatsAppLink = (serviceTitle) => {
    const text = encodeURIComponent(`Hello Shan Property, I would like to inquire about your "${serviceTitle}" service.`);
    return `https://wa.me/923459713706?text=${text}`;
  };

  return (
    <div className="w-full bg-lightGray min-h-screen">
      
      {/* Banner */}
      <section className="relative h-[250px] md:h-[320px] bg-primary flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1920&q=80')` }}
        />
        <div className="relative z-10 text-center max-w-2xl px-6">
          <motion.h1 
            initial={{ opacity: 0, filter: "blur(10px)", y: 30 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-sm md:text-base text-slate-300 font-light"
          >
            Explore our complete range of 24 specialized property management and agency services.
          </motion.p>
        </div>
      </section>

      {/* Filter and Search controls */}
      <section className="py-12 bg-white border-b border-borderGray sticky top-20 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-6 items-center justify-between">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs md:text-sm font-medium rounded-luxury-sm whitespace-nowrap transition-all duration-300 ${
                  selectedCategory === cat
                    ? "bg-secondary text-white shadow-luxury"
                    : "bg-lightGray text-primary/80 hover:bg-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-80">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-lightGray border border-borderGray rounded-luxury text-sm text-primary focus:outline-none focus:border-secondary focus:bg-white transition-all duration-300"
            />
          </div>

        </div>
      </section>

      {/* Grid List */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          {/* Services count */}
          <p className="text-left text-xs font-semibold text-slate-400 uppercase mb-8 tracking-wider">
            Showing {filteredServices.length} of {servicesData.length} services
          </p>

          <AnimatePresence mode="popLayout">
            {filteredServices.length > 0 ? (
              <motion.div 
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredServices.map((service, idx) => (
                  <motion.div
                    layout
                    key={service.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                    whileHover={{ y: -8, boxShadow: "0 20px 40px -15px rgba(15,23,42,0.06)" }}
                    className="bg-white p-8 rounded-luxury border border-borderGray transition-all duration-300 text-left flex flex-col justify-between interactive-card"
                  >
                    <div>
                      {/* Badge / Category */}
                      <span className="text-[10px] font-bold text-secondary bg-secondary/10 px-2.5 py-1 rounded-full uppercase tracking-wider mb-5 inline-block">
                        {service.category}
                      </span>
                      
                      {/* Icon */}
                      <div className="w-12 h-12 rounded-luxury-sm bg-lightGray flex items-center justify-center text-primary mb-6">
                        <LucideIcon name={service.iconName} className="w-6 h-6" />
                      </div>

                      <h3 className="text-lg font-bold text-primary mb-3">
                        {service.title}
                      </h3>
                      <p className="text-slate-500 font-light text-xs md:text-sm leading-relaxed mb-6">
                        {service.longDesc}
                      </p>
                    </div>

                    <a 
                      href={getWhatsAppLink(service.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full mt-6"
                    >
                      <button className="w-full py-3 bg-lightGray text-primary font-semibold text-xs rounded-luxury hover:bg-secondary hover:text-white transition-all duration-300 flex items-center justify-center gap-2">
                        <FiMessageSquare className="w-4 h-4" />
                        Inquire Service
                      </button>
                    </a>

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
                <h3 className="text-lg font-bold text-primary mb-1">No services found</h3>
                <p className="text-slate-500 font-light text-sm">
                  Try refining your search terms or selecting another category filter.
                </p>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </section>

    </div>
  );
}
