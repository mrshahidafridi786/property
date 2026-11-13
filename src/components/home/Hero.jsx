import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FiArrowRight, FiShield, FiTrendingUp, FiSearch, FiMapPin, FiSliders } from "react-icons/fi";
import { fadeIn, blurReveal } from "../../animations/variants";
import { companyInfo } from "../../data/companyInfo";

export default function Hero() {
  const navigate = useNavigate();
  const [quickLocation, setQuickLocation] = useState("All");
  const [quickType, setQuickType] = useState("All");

  const handleQuickSearch = (e) => {
    e.preventDefault();
    navigate(`/properties?type=${quickType}&loc=${quickLocation}`);
  };

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-primary pt-28 pb-20">
      
      {/* Background Image with Dark Cinema Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 transition-transform duration-1000"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2100&q=85')` 
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/60 md:to-primary/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-primary/40" />
      </div>

      {/* Animated Light Blobs (Stripe/Framer Style) */}
      <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-secondary/15 rounded-full blur-[140px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:28px_28px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Content Left */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Top pill */}
            <motion.div
              variants={fadeIn("right", "tween", 0.1, 0.5)}
              initial="hidden"
              animate="show"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/10 border border-white/15 rounded-full text-accent text-xs font-semibold tracking-wider uppercase mb-6 backdrop-blur-md"
            >
              <FiShield className="w-3.5 h-3.5" />
              Private Wealth Real Estate & Asset Fiduciary
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={blurReveal(0.2, 0.8)}
              initial="hidden"
              animate="show"
              className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white mb-6 leading-[1.08]"
            >
              The Pinnacle of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">
                Property Care & Living.
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={fadeIn("up", "tween", 0.4, 0.6)}
              initial="hidden"
              animate="show"
              className="text-base sm:text-lg md:text-xl text-slate-300 font-light max-w-xl mb-9 leading-relaxed"
            >
              {companyInfo.name} delivers institutional-grade property management, turnkey rental collections, and bespoke residential concierge for discerning estate owners worldwide.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeIn("up", "tween", 0.6, 0.6)}
              initial="hidden"
              animate="show"
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10"
            >
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-4 bg-secondary text-white font-semibold text-sm rounded-luxury shadow-luxury hover:bg-blue-600 transition-all duration-300"
                >
                  <span>Request Private Valuation</span>
                  <FiArrowRight className="w-4 h-4" />
                </motion.button>
              </Link>

              <Link to="/properties">
                <motion.button
                  whileHover={{ scale: 1.03, backgroundColor: "rgba(255,255,255,0.12)" }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-white/5 border border-white/20 text-white font-semibold text-sm rounded-luxury backdrop-blur-md transition-all duration-300"
                >
                  Explore Estates Portfolio
                </motion.button>
              </Link>
            </motion.div>

            {/* Live Stats Row */}
            <motion.div
              variants={fadeIn("up", "tween", 0.8, 0.6)}
              initial="hidden"
              animate="show"
              className="grid grid-cols-3 gap-6 sm:gap-10 pt-6 border-t border-white/10 w-full"
            >
              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">{companyInfo.stats.assetsUnderManagement}</h3>
                <p className="text-[11px] sm:text-xs text-slate-400 font-light mt-1 uppercase tracking-wider">Assets Under Care</p>
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-accent">{companyInfo.stats.occupancyRate}</h3>
                <p className="text-[11px] sm:text-xs text-slate-400 font-light mt-1 uppercase tracking-wider">Average Occupancy</p>
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">{companyInfo.stats.clientRetention}</h3>
                <p className="text-[11px] sm:text-xs text-slate-400 font-light mt-1 uppercase tracking-wider">Client Retention</p>
              </div>
            </motion.div>

          </div>

          {/* Hero Visuals Right: Floating Glass Cards */}
          <div className="lg:col-span-5 relative w-full h-[420px] md:h-[500px] flex items-center justify-center mt-6 lg:mt-0">
            
            {/* Primary Featured Trophy Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
              className="w-[290px] sm:w-[340px] bg-white rounded-luxury shadow-luxury-hover overflow-hidden border border-slate-100 p-4 absolute z-20 group"
            >
              <div className="overflow-hidden rounded-luxury-sm relative mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80" 
                  alt="The Bel-Air Skyline Villa" 
                  className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <span className="absolute top-3 right-3 px-3 py-1 bg-primary/90 backdrop-blur-md text-white text-[10px] font-bold tracking-wider rounded-full uppercase">
                  Featured Trophy
                </span>
                <span className="absolute bottom-3 left-3 px-3 py-1 bg-accent text-primary text-[10px] font-black tracking-wider rounded-full uppercase">
                  Yield: 6.8%
                </span>
              </div>
              <h3 className="font-extrabold text-primary text-base mb-1">The Bel-Air Skyline Villa</h3>
              <p className="text-xs text-slate-400 mb-3 flex items-center gap-1">
                <FiMapPin className="text-secondary" />
                Bel-Air, Los Angeles, CA
              </p>
              <div className="flex justify-between items-center border-t border-slate-100 pt-3">
                <span className="text-secondary font-black text-base">$28,500,000</span>
                <span className="text-xs text-slate-500 font-medium">6 Beds • 8 Baths • 11.2k sq ft</span>
              </div>
            </motion.div>

            {/* Top-Right Secondary Telemetry Card */}
            <motion.div
              initial={{ opacity: 0, x: 80, y: -40 }}
              animate={{ opacity: 1, x: 70, y: -120 }}
              transition={{ duration: 1.2, delay: 0.7, ease: "easeOut" }}
              className="hidden md:flex items-center gap-3.5 p-4 bg-white/95 backdrop-blur-md rounded-luxury-sm shadow-luxury border border-white/40 absolute z-30 w-64"
              whileHover={{ y: -125, transition: { duration: 0.2 } }}
            >
              <div className="w-10 h-10 bg-accent/15 rounded-full flex items-center justify-center text-accent shrink-0">
                <FiTrendingUp className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Automated Payouts</p>
                <h4 className="text-xs font-extrabold text-primary">100% Cleared on Day 6</h4>
                <p className="text-[10px] text-accent font-semibold">Zero Default Rate in 2025</p>
              </div>
            </motion.div>

            {/* Bottom-Left Secondary Trust Badge */}
            <motion.div
              initial={{ opacity: 0, x: -80, y: 80 }}
              animate={{ opacity: 1, x: -60, y: 130 }}
              transition={{ duration: 1.2, delay: 0.9, ease: "easeOut" }}
              className="hidden md:flex items-center gap-3 p-3.5 bg-primary/95 text-white backdrop-blur-md rounded-luxury-sm shadow-luxury border border-slate-700/60 absolute z-30 w-56"
            >
              <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center text-secondary shrink-0">
                <FiShield className="w-4 h-4 text-accent" />
              </div>
              <div className="text-left">
                <p className="text-[9px] text-slate-400 uppercase tracking-widest font-semibold">Fiduciary Standard</p>
                <h5 className="text-xs font-bold text-white">Institutional Custody</h5>
              </div>
            </motion.div>

          </div>

        </div>

        {/* Quick Property Search Bar (UX Enhancement) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-14 max-w-4xl mx-auto bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-luxury border border-white/40 shadow-luxury"
        >
          <form onSubmit={handleQuickSearch} className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
            
            <div className="sm:col-span-4 text-left px-3">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                Property Category
              </label>
              <select
                value={quickType}
                onChange={(e) => setQuickType(e.target.value)}
                className="w-full text-xs font-semibold text-primary bg-transparent focus:outline-none cursor-pointer"
              >
                <option value="All">All Categories</option>
                <option value="Villa">Luxury Villas</option>
                <option value="Penthouse">Sky Penthouses</option>
                <option value="Townhouse">Historic Townhouses</option>
                <option value="Commercial">Commercial Assets</option>
              </select>
            </div>

            <div className="sm:col-span-5 text-left px-3 sm:border-l border-slate-200">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                Destination / Market
              </label>
              <select
                value={quickLocation}
                onChange={(e) => setQuickLocation(e.target.value)}
                className="w-full text-xs font-semibold text-primary bg-transparent focus:outline-none cursor-pointer"
              >
                <option value="All">All Prime Markets (Global)</option>
                <option value="Los Angeles">Bel-Air & Los Angeles</option>
                <option value="New York">Manhattan & Tribeca</option>
                <option value="Lake Como">Lake Como, Italy</option>
                <option value="London">Mayfair, London</option>
                <option value="Dubai">Palm Jumeirah, Dubai</option>
              </select>
            </div>

            <div className="sm:col-span-3">
              <button
                type="submit"
                className="w-full py-3.5 bg-primary hover:bg-secondary text-white font-bold text-xs rounded-luxury-sm shadow-md transition-colors flex items-center justify-center gap-2"
              >
                <FiSearch className="w-3.5 h-3.5" />
                <span>Find Estates</span>
              </button>
            </div>

          </form>
        </motion.div>

      </div>

    </section>
  );
}
