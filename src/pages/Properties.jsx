import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiMapPin, FiMaximize, FiSearch, FiSliders } from "react-icons/fi";
import { BiBed, BiBath } from "react-icons/bi";
import { propertiesData } from "../data/propertiesData";
import { fadeIn, staggerContainer } from "../animations/variants";

export default function Properties() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("All");
  const [selectedPriceRange, setSelectedPriceRange] = useState("All");
  const [selectedBeds, setSelectedBeds] = useState("All");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Filter Logic
  const filteredProperties = propertiesData.filter((property) => {
    const matchesSearch = 
      property.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      property.location.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesType = selectedType === "All" || property.type === selectedType;
    
    let matchesPrice = true;
    if (selectedPriceRange === "under15") {
      matchesPrice = property.price < 150000000;
    } else if (selectedPriceRange === "15to30") {
      matchesPrice = property.price >= 150000000 && property.price <= 300000000;
    } else if (selectedPriceRange === "over30") {
      matchesPrice = property.price > 300000000;
    }

    let matchesBeds = true;
    if (selectedBeds === "3") {
      matchesBeds = property.beds === 3;
    } else if (selectedBeds === "4plus") {
      matchesBeds = property.beds >= 4;
    }

    return matchesSearch && matchesType && matchesPrice && matchesBeds;
  });

  return (
    <div className="w-full bg-lightGray min-h-screen">
      
      {/* Banner */}
      <section className="relative h-[250px] md:h-[320px] bg-primary flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-45"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1920&q=80')` }}
        />
        <div className="relative z-10 text-center max-w-2xl px-6">
          <motion.h1 
            initial={{ opacity: 0, filter: "blur(10px)", y: 30 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4"
          >
            Luxury Listings
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-sm md:text-base text-slate-300 font-light"
          >
            Explore our curated selection of high-end estates, beachside villas, and commercial property hubs.
          </motion.p>
        </div>
      </section>

      {/* Filter and Search Section */}
      <section className="py-8 bg-white border-b border-borderGray sticky top-20 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-6">
          
          {/* Search bar + filter toggle */}
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between w-full">
            <div className="relative w-full md:flex-grow max-w-lg">
              <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search properties by name or location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-lightGray border border-borderGray rounded-luxury text-sm text-primary focus:outline-none focus:border-secondary focus:bg-white transition-all duration-300"
              />
            </div>
            <div className="flex items-center gap-2 text-slate-400 text-sm font-semibold shrink-0">
              <FiSliders className="w-5 h-5 text-secondary" />
              <span>Advanced Search Filters</span>
            </div>
          </div>

          {/* Filtering Dropdowns Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full pt-2">
            
            {/* Property Type Dropdown */}
            <div className="flex flex-col items-start gap-1.5">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Property Type</label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full p-3 bg-lightGray border border-borderGray rounded-luxury-sm text-xs md:text-sm text-primary focus:outline-none focus:border-secondary"
              >
                <option value="All">All Types</option>
                <option value="Villa">Villas</option>
                <option value="Penthouse">Penthouses</option>
                <option value="Condo">Condominiums</option>
                <option value="Commercial">Commercial Units</option>
              </select>
            </div>

            {/* Price Range Dropdown */}
            <div className="flex flex-col items-start gap-1.5">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Price Scale</label>
              <select
                value={selectedPriceRange}
                onChange={(e) => setSelectedPriceRange(e.target.value)}
                className="w-full p-3 bg-lightGray border border-borderGray rounded-luxury-sm text-xs md:text-sm text-primary focus:outline-none focus:border-secondary"
              >
                <option value="All">All Prices</option>
                <option value="under15">Under ₨ 15 Crore</option>
                <option value="15to30">₨ 15 Crore - ₨ 30 Crore</option>
                <option value="over30">Over ₨ 30 Crore</option>
              </select>
            </div>

            {/* Bed Count Dropdown */}
            <div className="flex flex-col items-start gap-1.5">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Beds Capacity</label>
              <select
                value={selectedBeds}
                onChange={(e) => setSelectedBeds(e.target.value)}
                className="w-full p-3 bg-lightGray border border-borderGray rounded-luxury-sm text-xs md:text-sm text-primary focus:outline-none focus:border-secondary"
              >
                <option value="All">Any Bedroom Size</option>
                <option value="3">3 Bedrooms</option>
                <option value="4plus">4+ Bedrooms</option>
              </select>
            </div>

          </div>

        </div>
      </section>

      {/* Listings Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <p className="text-left text-xs font-semibold text-slate-400 uppercase mb-8 tracking-wider">
            Showing {filteredProperties.length} of {propertiesData.length} properties
          </p>

          <AnimatePresence mode="popLayout">
            {filteredProperties.length > 0 ? (
              <motion.div 
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredProperties.map((property, idx) => (
                  <motion.div
                    layout
                    key={property.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                    whileHover={{ y: -10 }}
                    className="bg-white rounded-luxury border border-borderGray overflow-hidden shadow-luxury hover:shadow-luxury-hover transition-all duration-300 flex flex-col group"
                  >
                    <div className="relative h-60 overflow-hidden">
                      <img 
                        src={property.image} 
                        alt={property.name} 
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-md text-primary text-xs font-semibold rounded-full shadow-sm">
                        {property.type}
                      </span>
                      <span className="absolute bottom-4 right-4 px-4 py-2 bg-primary text-white text-sm font-bold rounded-luxury shadow-md">
                        {property.priceFormatted}
                      </span>
                    </div>

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

                      <Link to={`/properties/${property.id}`} className="w-full">
                        <button className="w-full py-3 bg-lightGray text-primary font-semibold text-xs rounded-luxury hover:bg-secondary hover:text-white transition-all duration-300">
                          View Details
                        </button>
                      </Link>
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
                <h3 className="text-lg font-bold text-primary mb-1">No properties found</h3>
                <p className="text-slate-500 font-light text-sm">
                  Try adjusting your search criteria or selecting other filter ranges.
                </p>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </section>

    </div>
  );
}
