import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiMapPin, FiMaximize, FiArrowRight, FiHeart } from "react-icons/fi";
import { BiBed, BiBath } from "react-icons/bi";
import { propertiesData } from "../../data/propertiesData";
import { fadeIn, staggerContainer } from "../../animations/variants";

export default function PropertiesSection() {
  const featuredProperties = propertiesData.slice(0, 3);
  const [favorites, setFavorites] = useState({});

  const toggleFavorite = (id, e) => {
    e.preventDefault();
    e.stopPropagation();
    setFavorites(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="text-left max-w-xl">
            <span className="text-xs font-bold tracking-[0.25em] text-secondary uppercase block mb-3">
              Curated Trophy Portfolio
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-primary tracking-tight">
              Featured Global Residences
            </h2>
          </div>
          <Link to="/properties">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="px-6 py-3.5 bg-lightGray border border-borderGray text-primary font-bold text-xs rounded-luxury hover:bg-primary hover:text-white transition-all duration-300 flex items-center gap-2 self-start md:self-auto"
            >
              <span>Explore All {propertiesData.length} Estates</span>
              <FiArrowRight className="w-4 h-4" />
            </motion.button>
          </Link>
        </div>

        {/* Properties Grid */}
        <motion.div
          variants={staggerContainer(0.12, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {featuredProperties.map((property, idx) => (
            <motion.div
              key={property.id}
              variants={fadeIn("up", "spring", idx * 0.12, 0.6)}
              whileHover={{ y: -10 }}
              className="bg-white rounded-luxury border border-borderGray overflow-hidden shadow-luxury hover:shadow-luxury-hover transition-all duration-300 flex flex-col group relative"
            >
              {/* Image Container with Zoom & Badges */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={property.image} 
                  alt={property.name} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Type & Status Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-1.5 items-start">
                  <span className="px-3 py-1 bg-white/95 backdrop-blur-md text-primary text-[10px] font-extrabold uppercase tracking-wider rounded-full shadow-sm">
                    {property.tag}
                  </span>
                  <span className="px-2.5 py-0.5 bg-accent text-primary text-[9px] font-black uppercase tracking-wider rounded-full shadow-sm">
                    Yield: {property.rentalYield}
                  </span>
                </div>

                {/* Favorite Heart Button */}
                <button
                  onClick={(e) => toggleFavorite(property.id, e)}
                  className={`absolute top-4 right-4 w-9 h-9 rounded-full backdrop-blur-md flex items-center justify-center transition-colors shadow-sm ${
                    favorites[property.id]
                      ? "bg-rose-500 text-white"
                      : "bg-white/80 text-primary hover:bg-white"
                  }`}
                  aria-label="Save Property"
                >
                  <FiHeart className={`w-4 h-4 ${favorites[property.id] ? "fill-current" : ""}`} />
                </button>

                {/* Price Overlay */}
                <div className="absolute bottom-4 right-4 px-4 py-2 bg-primary/95 text-white text-sm font-black rounded-luxury shadow-md backdrop-blur-sm">
                  {property.priceFormatted}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-grow flex flex-col items-start text-left">
                <h3 className="text-lg font-extrabold text-primary mb-1.5 group-hover:text-secondary transition-colors">
                  {property.name}
                </h3>
                
                <p className="text-slate-400 text-xs flex items-center gap-1.5 mb-3">
                  <FiMapPin className="text-secondary shrink-0" />
                  {property.location}
                </p>

                <p className="text-slate-500 font-light text-xs line-clamp-2 mb-6 leading-relaxed">
                  {property.description}
                </p>

                {/* Specs Row */}
                <div className="grid grid-cols-3 gap-2 py-3.5 border-y border-borderGray w-full text-slate-600 text-xs mb-6 font-semibold">
                  <div className="flex items-center gap-1.5">
                    <BiBed className="w-4 h-4 text-secondary shrink-0" />
                    <span>{property.beds} Beds</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <BiBath className="w-4 h-4 text-secondary shrink-0" />
                    <span>{property.baths} Baths</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <FiMaximize className="w-3.5 h-3.5 text-secondary shrink-0" />
                    <span>{property.area}</span>
                  </div>
                </div>

                {/* Button Details */}
                <Link to={`/properties/${property.id}`} className="w-full">
                  <button className="w-full py-3 bg-lightGray text-primary font-bold text-xs rounded-luxury hover:bg-secondary hover:text-white transition-all duration-300 flex items-center justify-center gap-2">
                    <span>View Private Dossier</span>
                    <FiArrowRight className="w-3.5 h-3.5" />
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
