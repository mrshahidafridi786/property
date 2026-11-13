import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiMapPin, FiMaximize, FiSearch, FiSliders, FiHeart, FiArrowRight } from "react-icons/fi";
import { BiBed, BiBath } from "react-icons/bi";
import { propertiesData } from "../data/propertiesData";
import { companyInfo } from "../data/companyInfo";

export default function Properties() {
  const [searchParams] = useSearchParams();
  const initialType = searchParams.get("type") || "All";
  const initialLoc = searchParams.get("loc") || "All";

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState(initialType);
  const [selectedLocation, setSelectedLocation] = useState(initialLoc);
  const [selectedPriceRange, setSelectedPriceRange] = useState("All");
  const [sortBy, setSortBy] = useState("featured");
  const [favorites, setFavorites] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleFavorite = (id, e) => {
    e.preventDefault();
    e.stopPropagation();
    setFavorites(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Filter Logic
  const filteredProperties = propertiesData.filter((property) => {
    const matchesSearch = 
      property.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      property.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      property.features.some(f => f.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesType = selectedType === "All" || property.type.toLowerCase() === selectedType.toLowerCase();
    
    const matchesLocation = selectedLocation === "All" || property.location.toLowerCase().includes(selectedLocation.toLowerCase());

    let matchesPrice = true;
    if (selectedPriceRange === "under20") {
      matchesPrice = property.price < 20000000;
    } else if (selectedPriceRange === "20to30") {
      matchesPrice = property.price >= 20000000 && property.price <= 30000000;
    } else if (selectedPriceRange === "over30") {
      matchesPrice = property.price > 30000000;
    }

    return matchesSearch && matchesType && matchesLocation && matchesPrice;
  }).sort((a, b) => {
    if (sortBy === "priceAsc") return a.price - b.price;
    if (sortBy === "priceDesc") return b.price - a.price;
    return 0; // default featured order
  });

  return (
    <div className="w-full bg-lightGray min-h-screen">
      
      {/* Banner */}
      <section className="relative h-[280px] md:h-[360px] bg-primary flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 scale-105"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2100&q=80')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/70 to-primary/40" />

        <div className="relative z-10 text-center max-w-3xl px-6">
          <span className="text-xs font-bold tracking-[0.3em] text-accent uppercase block mb-3">
            Global Trophy Assets
          </span>
          <motion.h1 
            initial={{ opacity: 0, filter: "blur(10px)", y: 25 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight mb-4"
          >
            Exclusive Estates Portfolio
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.85 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-sm sm:text-base text-slate-300 font-light max-w-xl mx-auto"
          >
            Explore our curated selection of architectural residences, waterfront villas, and commercial real estate assets.
          </motion.p>
        </div>
      </section>

      {/* Filter and Search Section */}
      <section className="py-6 bg-white border-b border-borderGray sticky top-20 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-5">
          
          {/* Top Search bar */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between w-full">
            <div className="relative w-full sm:max-w-md">
              <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search by estate name, location, or feature..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-lightGray border border-borderGray rounded-luxury text-xs text-primary focus:outline-none focus:border-secondary focus:bg-white transition-all"
              />
            </div>
            
            <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider shrink-0">Sort By:</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="p-2 bg-lightGray border border-borderGray rounded-luxury-sm text-xs font-semibold text-primary focus:outline-none cursor-pointer"
              >
                <option value="featured">Featured Collection</option>
                <option value="priceDesc">Price: High to Low</option>
                <option value="priceAsc">Price: Low to High</option>
              </select>
            </div>
          </div>

          {/* Filtering Dropdowns Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full pt-1 border-t border-slate-100">
            
            {/* Category */}
            <div className="flex flex-col items-start gap-1">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Asset Category</label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full p-2.5 bg-lightGray border border-borderGray rounded-luxury-sm text-xs text-primary font-medium focus:outline-none focus:border-secondary cursor-pointer"
              >
                <option value="All">All Categories</option>
                <option value="Villa">Villas & Mansions</option>
                <option value="Penthouse">Sky Penthouses</option>
                <option value="Townhouse">Townhouses</option>
                <option value="Commercial">Commercial Assets</option>
              </select>
            </div>

            {/* Destination */}
            <div className="flex flex-col items-start gap-1">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Global Destination</label>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full p-2.5 bg-lightGray border border-borderGray rounded-luxury-sm text-xs text-primary font-medium focus:outline-none focus:border-secondary cursor-pointer"
              >
                <option value="All">All Destinations</option>
                <option value="Los Angeles">Bel-Air & Los Angeles</option>
                <option value="New York">Manhattan & Tribeca</option>
                <option value="Lake Como">Lake Como, Italy</option>
                <option value="London">Mayfair, London</option>
                <option value="Dubai">Palm Jumeirah, Dubai</option>
                <option value="Boston">Financial District, Boston</option>
              </select>
            </div>

            {/* Price Scale */}
            <div className="flex flex-col items-start gap-1">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Investment Bracket</label>
              <select
                value={selectedPriceRange}
                onChange={(e) => setSelectedPriceRange(e.target.value)}
                className="w-full p-2.5 bg-lightGray border border-borderGray rounded-luxury-sm text-xs text-primary font-medium focus:outline-none focus:border-secondary cursor-pointer"
              >
                <option value="All">All Valuation Brackets</option>
                <option value="under20">Under $20,000,000</option>
                <option value="20to30">$20M – $30M</option>
                <option value="over30">Over $30,000,000</option>
              </select>
            </div>

          </div>

        </div>
      </section>

      {/* Listings Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="flex justify-between items-center mb-8">
            <p className="text-left text-xs font-bold text-slate-400 uppercase tracking-wider">
              Showing {filteredProperties.length} of {propertiesData.length} Prime Estates
            </p>
            <span className="text-[11px] text-slate-500 font-medium hidden sm:inline-block">
              Private Off-Market Viewings Arranged via NDA
            </span>
          </div>

          <AnimatePresence mode="popLayout">
            {filteredProperties.length > 0 ? (
              <motion.div 
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredProperties.map((property) => (
                  <motion.div
                    layout
                    key={property.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.35 }}
                    whileHover={{ y: -8 }}
                    className="bg-white rounded-luxury border border-borderGray overflow-hidden shadow-luxury hover:shadow-luxury-hover transition-all duration-300 flex flex-col group relative"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <img 
                        src={property.image} 
                        alt={property.name} 
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      
                      <div className="absolute top-4 left-4 flex flex-col gap-1.5 items-start">
                        <span className="px-3 py-1 bg-white/95 backdrop-blur-md text-primary text-[10px] font-extrabold uppercase tracking-wider rounded-full shadow-sm">
                          {property.tag}
                        </span>
                        <span className="px-2.5 py-0.5 bg-accent text-primary text-[9px] font-black uppercase tracking-wider rounded-full shadow-sm">
                          Yield: {property.rentalYield}
                        </span>
                      </div>

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

                      <div className="absolute bottom-4 right-4 px-4 py-2 bg-primary/95 text-white text-sm font-black rounded-luxury shadow-md backdrop-blur-sm">
                        {property.priceFormatted}
                      </div>
                    </div>

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

                      <Link to={`/properties/${property.id}`} className="w-full">
                        <button className="w-full py-3 bg-lightGray text-primary font-bold text-xs rounded-luxury hover:bg-secondary hover:text-white transition-all duration-300 flex items-center justify-center gap-2">
                          <span>View Full Dossier</span>
                          <FiArrowRight className="w-3.5 h-3.5" />
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
                <FiSliders className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                <h3 className="text-base font-bold text-primary mb-1">No properties matching your criteria</h3>
                <p className="text-slate-500 font-light text-xs mb-6">
                  Try clearing your filters or selecting a different destination market.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedType("All");
                    setSelectedLocation("All");
                    setSelectedPriceRange("All");
                  }}
                  className="px-6 py-2.5 bg-primary text-white text-xs font-bold rounded-luxury shadow-md hover:bg-secondary transition-colors"
                >
                  Reset All Filters
                </button>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </section>

    </div>
  );
}
