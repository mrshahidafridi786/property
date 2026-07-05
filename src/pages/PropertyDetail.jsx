import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import { FiMapPin, FiMaximize, FiPhone, FiCheck, FiArrowLeft, FiMessageSquare } from "react-icons/fi";
import { BiBed, BiBath } from "react-icons/bi";
import { propertiesData } from "../data/propertiesData";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function PropertyDetail() {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    // Find matching property
    const found = propertiesData.find((p) => p.id === parseInt(id, 10));
    if (found) {
      setProperty(found);
      setFormData(prev => ({
        ...prev,
        message: `Hello, I am interested in viewing or learning more about "${found.name}" located at ${found.location}.`
      }));
    }
  }, [id]);

  if (!property) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-lightGray px-6">
        <h2 className="text-2xl font-bold text-primary mb-4">Property Not Found</h2>
        <p className="text-slate-500 mb-8">The requested property listing does not exist or has been removed.</p>
        <Link to="/properties">
          <button className="px-6 py-3 bg-primary text-white font-semibold rounded-luxury shadow-luxury">
            Back to Directory
          </button>
        </Link>
      </div>
    );
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email) {
      alert("Please fill in all required fields.");
      return;
    }
    // Simulate submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", phone: "", message: "" });
    }, 4000);
  };

  return (
    <div className="w-full bg-lightGray min-h-screen pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Back Link */}
        <Link 
          to="/properties" 
          className="inline-flex items-center gap-2 text-slate-500 hover:text-secondary text-sm font-medium mb-8 group transition-colors"
        >
          <FiArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
          Back to Listings
        </Link>

        {/* Title and pricing row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 text-left">
          <div>
            <span className="text-xs font-bold text-secondary bg-secondary/10 px-3 py-1 rounded-full uppercase tracking-wider mb-3 inline-block">
              {property.type}
            </span>
            <h1 className="text-3xl md:text-4xl font-extrabold text-primary mb-2 mt-0 tracking-tight leading-tight">
              {property.name}
            </h1>
            <p className="text-slate-400 text-sm md:text-base flex items-center gap-2">
              <FiMapPin className="text-secondary shrink-0" />
              {property.location}
            </p>
          </div>
          <div className="text-left md:text-right shrink-0">
            <span className="text-slate-400 text-xs font-semibold uppercase tracking-wider block mb-1">Asking Price</span>
            <h2 className="text-3xl md:text-4xl font-black text-secondary">{property.priceFormatted}</h2>
          </div>
        </div>

        {/* Gallery Slider (Swiper) */}
        <div className="rounded-luxury overflow-hidden shadow-luxury mb-12 border border-borderGray relative bg-white">
          <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation={true}
            className="h-[300px] md:h-[500px]"
          >
            {property.images.map((imgUrl, index) => (
              <SwiperSlide key={index}>
                <img 
                  src={imgUrl} 
                  alt={`${property.name} View ${index + 1}`} 
                  className="w-full h-full object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Details and Sidebar Inquiry form layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
          
          {/* Main Info Side */}
          <div className="lg:col-span-8 flex flex-col gap-10">
            
            {/* Overview / Specs */}
            <div className="bg-white p-8 rounded-luxury border border-borderGray shadow-sm">
              <h3 className="text-lg font-bold text-primary mb-6">Property Overview</h3>
              <div className="grid grid-cols-3 gap-6 text-center text-slate-700">
                <div className="flex flex-col items-center p-4 bg-lightGray rounded-luxury border border-borderGray/50">
                  <BiBed className="w-8 h-8 text-secondary mb-2" />
                  <span className="text-base font-bold text-primary">{property.beds}</span>
                  <span className="text-xs text-slate-400 font-light mt-0.5">Bedrooms</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-lightGray rounded-luxury border border-borderGray/50">
                  <BiBath className="w-8 h-8 text-secondary mb-2" />
                  <span className="text-base font-bold text-primary">{property.baths}</span>
                  <span className="text-xs text-slate-400 font-light mt-0.5">Bathrooms</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-lightGray rounded-luxury border border-borderGray/50">
                  <FiMaximize className="w-7 h-7 text-secondary mb-2.5" />
                  <span className="text-base font-bold text-primary">{property.area}</span>
                  <span className="text-xs text-slate-400 font-light mt-0.5">Built Area</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white p-8 rounded-luxury border border-borderGray shadow-sm">
              <h3 className="text-lg font-bold text-primary mb-4">Detailed Description</h3>
              <p className="text-slate-600 font-light text-sm md:text-base leading-relaxed">
                {property.description}
              </p>
            </div>

            {/* Amenities / Features */}
            <div className="bg-white p-8 rounded-luxury border border-borderGray shadow-sm">
              <h3 className="text-lg font-bold text-primary mb-6">Premium Amenities</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {property.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent/15 flex items-center justify-center text-accent shrink-0">
                      <FiCheck className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-semibold text-primary">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-white p-8 rounded-luxury border border-borderGray shadow-sm">
              <h3 className="text-lg font-bold text-primary mb-4">Location Map</h3>
              <div className="w-full h-72 rounded-luxury overflow-hidden bg-slate-200 relative border border-borderGray">
                {/* Simulated Google Map Styling */}
                <div className="absolute inset-0 bg-slate-900 flex flex-col items-center justify-center text-white px-6 text-center">
                  <FiMapPin className="w-10 h-10 text-secondary mb-3 animate-bounce" />
                  <h4 className="font-bold text-base mb-1">{property.location}</h4>
                  <p className="text-xs text-slate-400 font-light max-w-sm">
                    Interactive maps and structural coordinates are locked. Direct viewings can be scheduled via consultation.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Sidebar Inquiry Form */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            
            {/* Agent Info card */}
            <div className="bg-primary text-white p-6 rounded-luxury border border-slate-800 shadow-luxury text-center flex flex-col items-center">
              <img 
                src={property.agent.photo} 
                alt={property.agent.name} 
                className="w-20 h-20 rounded-full object-cover border border-slate-700 shadow-md mb-4"
              />
              <span className="text-[10px] font-bold text-accent uppercase tracking-widest mb-1">Assigned Agent</span>
              <h4 className="text-lg font-bold mb-1">{property.agent.name}</h4>
              <p className="text-xs text-slate-400 font-light mb-6">{property.agent.role}</p>
              
              <div className="flex flex-col gap-3 w-full">
                <a href={`tel:${property.agent.phone}`} className="w-full">
                  <button className="w-full py-3 bg-secondary text-white font-bold text-xs rounded-luxury hover:bg-blue-700 transition-all flex items-center justify-center gap-2 shadow-sm">
                    <FiPhone className="w-4 h-4" />
                    Call Agent
                  </button>
                </a>
                <a 
                  href={`https://wa.me/923459713706?text=Hello%20${encodeURIComponent(property.agent.name)},%20I%20am%20interested%20in%20"${encodeURIComponent(property.name)}"`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <button className="w-full py-3 bg-white text-primary font-bold text-xs rounded-luxury hover:bg-lightGray transition-all flex items-center justify-center gap-2">
                    <FiMessageSquare className="w-4 h-4 text-secondary" />
                    WhatsApp Agent
                  </button>
                </a>
              </div>
            </div>

            {/* Inquiry Form Card */}
            <div className="bg-white p-8 rounded-luxury border border-borderGray shadow-sm">
              <h3 className="text-lg font-bold text-primary mb-6">Schedule a Viewing</h3>
              
              <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
                
                <div className="flex flex-col items-start gap-1">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Full Name *</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name" 
                    className="w-full p-3 bg-lightGray border border-borderGray rounded-luxury-sm text-xs md:text-sm text-primary focus:outline-none focus:border-secondary focus:bg-white transition-all"
                  />
                </div>

                <div className="flex flex-col items-start gap-1">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Email Address *</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email" 
                    className="w-full p-3 bg-lightGray border border-borderGray rounded-luxury-sm text-xs md:text-sm text-primary focus:outline-none focus:border-secondary focus:bg-white transition-all"
                  />
                </div>

                <div className="flex flex-col items-start gap-1">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Phone Number *</label>
                  <input 
                    type="text" 
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="e.g. 0345-9713706" 
                    className="w-full p-3 bg-lightGray border border-borderGray rounded-luxury-sm text-xs md:text-sm text-primary focus:outline-none focus:border-secondary focus:bg-white transition-all"
                  />
                </div>

                <div className="flex flex-col items-start gap-1">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Your Message</label>
                  <textarea 
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full p-3 bg-lightGray border border-borderGray rounded-luxury-sm text-xs md:text-sm text-primary focus:outline-none focus:border-secondary focus:bg-white transition-all resize-none"
                  />
                </div>

                <button 
                  type="submit" 
                  className="w-full py-4 mt-2 bg-primary text-white font-bold text-xs rounded-luxury hover:bg-secondary transition-all shadow-luxury"
                >
                  Submit Inquiry
                </button>

              </form>

              {/* Submit Notification Toast */}
              <AnimatePresence>
                {isSubmitted && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="mt-4 p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-luxury-sm flex items-center gap-2.5 text-xs font-semibold leading-relaxed"
                  >
                    <div className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0">
                      <FiCheck className="w-3.5 h-3.5" />
                    </div>
                    <span>Thank you! Inquiry submitted successfully. Our agent will reach out in 24 hours.</span>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
