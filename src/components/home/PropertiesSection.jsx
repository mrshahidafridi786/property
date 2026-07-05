import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiMapPin, FiMaximize, FiNavigation } from "react-icons/fi";
import { BiBed, BiBath } from "react-icons/bi";
import { propertiesData } from "../../data/propertiesData";
import { fadeIn, staggerContainer } from "../../animations/variants";

export default function PropertiesSection() {
  // Show first 3 properties as featured on home page
  const featuredProperties = propertiesData.slice(0, 3);

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="text-left max-w-xl">
            <span className="text-xs font-bold tracking-[0.2em] text-secondary uppercase block mb-3">
              Premium Listings
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary">
              Our Featured Properties
            </h2>
          </div>
          <Link to="/properties">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3.5 bg-lightGray border border-borderGray text-primary font-semibold text-sm rounded-luxury hover:bg-primary hover:text-white transition-all duration-300"
            >
              Browse All Listings
            </motion.button>
          </Link>
        </div>

        {/* Properties Grid */}
        <motion.div
          variants={staggerContainer(0.15, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {featuredProperties.map((property, idx) => (
            <motion.div
              key={property.id}
              variants={fadeIn("up", "spring", idx * 0.15, 0.6)}
              whileHover={{ y: -12 }}
              className="bg-white rounded-luxury border border-borderGray overflow-hidden shadow-luxury hover:shadow-luxury-hover transition-all duration-300 flex flex-col group"
            >
              {/* Image Container with Hover Zoom */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={property.image} 
                  alt={property.name} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <span className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-md text-primary text-xs font-semibold rounded-full shadow-sm">
                  {property.type}
                </span>
                <span className="absolute bottom-4 right-4 px-4 py-2 bg-primary text-white text-sm font-bold rounded-luxury shadow-md">
                  {property.priceFormatted}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-grow flex flex-col items-start text-left">
                <h3 className="text-lg font-bold text-primary mb-2 group-hover:text-secondary transition-colors">
                  {property.name}
                </h3>
                
                <p className="text-slate-400 text-xs flex items-center gap-1.5 mb-4">
                  <FiMapPin className="text-secondary" />
                  {property.location}
                </p>

                <p className="text-slate-500 font-light text-xs md:text-sm line-clamp-2 mb-6 leading-relaxed">
                  {property.description}
                </p>

                {/* Specs row */}
                <div className="grid grid-cols-3 gap-4 py-4 border-y border-borderGray w-full text-slate-600 text-xs md:text-sm mb-6 font-medium">
                  <div className="flex items-center gap-2">
                    <BiBed className="w-5 h-5 text-secondary shrink-0" />
                    <span>{property.beds} Bed</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BiBath className="w-5 h-5 text-secondary shrink-0" />
                    <span>{property.baths} Bath</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FiMaximize className="w-4 h-4 text-secondary shrink-0" />
                    <span>{property.area}</span>
                  </div>
                </div>

                {/* Button details */}
                <Link to={`/properties/${property.id}`} className="w-full">
                  <button className="w-full py-3 bg-lightGray text-primary font-semibold text-xs rounded-luxury hover:bg-secondary hover:text-white transition-all duration-300 flex items-center justify-center gap-2">
                    <FiNavigation className="w-3.5 h-3.5" />
                    View Details
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
