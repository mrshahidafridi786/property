import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiArrowRight, FiShield, FiTrendingUp } from "react-icons/fi";
import { fadeIn, blurReveal } from "../../animations/variants";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary pt-24 pb-16">
      
      {/* Background Image with Dark Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1920&q=80')` 
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/40 md:to-primary/20" />
      </div>

      {/* Animated Light Blobs (Stripe/Framer Style) */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Hero Content */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          
          <motion.div
            variants={fadeIn("right", "tween", 0.1, 0.5)}
            initial="hidden"
            animate="show"
            className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-accent text-xs font-semibold tracking-wider uppercase mb-6 backdrop-blur-md"
          >
            <FiShield className="w-3.5 h-3.5" />
            Voted #1 Property Managers
          </motion.div>

          <motion.h1
            variants={blurReveal(0.3, 0.8)}
            initial="hidden"
            animate="show"
            className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight"
          >
            Shan Property
          </motion.h1>

          <motion.p
            variants={fadeIn("up", "tween", 0.5, 0.6)}
            initial="hidden"
            animate="show"
            className="text-lg md:text-xl text-slate-300 font-light max-w-xl mb-10 leading-relaxed"
          >
            Professional Property Management & Real Estate Solutions You Can Trust. We secure, inspect, maintain, and optimize your assets.
          </motion.p>

          <motion.div
            variants={fadeIn("up", "tween", 0.7, 0.6)}
            initial="hidden"
            animate="show"
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
          >
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-secondary text-white font-semibold rounded-luxury shadow-luxury hover:bg-blue-700 transition-all duration-300"
              >
                Get Free Consultation
                <FiArrowRight className="w-4 h-4" />
              </motion.button>
            </Link>

            <Link to="/properties">
              <motion.button
                whileHover={{ scale: 1.03, backgroundColor: "rgba(255,255,255,0.1)" }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-transparent border border-white/30 text-white font-semibold rounded-luxury transition-all duration-300"
              >
                View Properties
              </motion.button>
            </Link>
          </motion.div>

          {/* Mini Quick statistics */}
          <motion.div
            variants={fadeIn("up", "tween", 0.9, 0.6)}
            initial="hidden"
            animate="show"
            className="grid grid-cols-3 gap-6 md:gap-10 mt-12 pt-8 border-t border-white/10 w-full"
          >
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white">500+</h3>
              <p className="text-xs md:text-sm text-slate-400 font-light mt-1">Properties</p>
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white">10+</h3>
              <p className="text-xs md:text-sm text-slate-400 font-light mt-1">Years Exp</p>
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white">99%</h3>
              <p className="text-xs md:text-sm text-slate-400 font-light mt-1">Trust Rate</p>
            </div>
          </motion.div>

        </div>

        {/* Hero Visuals - Floating Cards */}
        <div className="lg:col-span-5 relative w-full h-[400px] md:h-[500px] flex items-center justify-center mt-8 lg:mt-0">
          
          {/* Main Showcase Floating Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -3 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="w-[280px] md:w-[320px] bg-white rounded-luxury shadow-luxury-hover overflow-hidden border border-slate-100 p-4 absolute z-20 group"
          >
            <div className="overflow-hidden rounded-luxury-sm relative mb-4">
              <img 
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80" 
                alt="Obsidian Penthouse" 
                className="w-full h-44 object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-3 right-3 px-3 py-1 bg-primary text-white text-xs font-semibold rounded-full shadow-md">
                Featured
              </span>
            </div>
            <h3 className="font-bold text-primary text-base mb-1">The Obsidian Penthouse</h3>
            <p className="text-xs text-slate-400 mb-3">Downtown Elite, Karachi</p>
            <div className="flex justify-between items-center border-t border-slate-100 pt-3">
              <span className="text-secondary font-bold text-sm">₨ 18.5 Crore</span>
              <span className="text-xs text-slate-500">4 Beds • 4 Baths</span>
            </div>
          </motion.div>

          {/* Secondary Stats Card */}
          <motion.div
            initial={{ opacity: 0, x: 80, y: -40 }}
            animate={{ opacity: 1, x: 100, y: -100 }}
            transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
            className="hidden md:flex items-center gap-3 p-4 bg-white/90 backdrop-blur-md rounded-luxury-sm shadow-luxury border border-white/20 absolute z-30 w-60"
            style={{ top: "40%", right: "10%" }}
            whileHover={{ y: -105, transition: { duration: 0.2 } }}
          >
            <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center text-accent">
              <FiTrendingUp className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">Asset Valuation</p>
              <h4 className="text-sm font-bold text-primary">₨ 45+ Billion Managed</h4>
            </div>
          </motion.div>

          {/* Decorative Floating Circle */}
          <motion.div 
            animate={{ 
              y: [0, -15, 0],
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 4, 
              ease: "easeInOut" 
            }}
            className="absolute left-6 top-12 w-20 h-20 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-full blur-xl -z-10"
          />

        </div>

      </div>

    </section>
  );
}
