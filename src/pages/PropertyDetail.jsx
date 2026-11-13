import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import { FiMapPin, FiMaximize, FiPhone, FiCheck, FiArrowLeft, FiMessageSquare, FiCalendar, FiDollarSign, FiShield, FiFileText } from "react-icons/fi";
import { BiBed, BiBath } from "react-icons/bi";
import { propertiesData } from "../data/propertiesData";
import { companyInfo } from "../data/companyInfo";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function PropertyDetail() {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [viewingType, setViewingType] = useState("inPerson"); // 'inPerson' or 'video'
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", date: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const found = propertiesData.find((p) => p.id === parseInt(id, 10));
    if (found) {
      setProperty(found);
      setFormData(prev => ({
        ...prev,
        message: `Hello, I am requesting a confidential viewing and prospectus for "${found.name}" located at ${found.location}.`
      }));
    }
  }, [id]);

  if (!property) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-lightGray px-6">
        <h2 className="text-2xl font-bold text-primary mb-4">Property Dossier Not Found</h2>
        <p className="text-slate-500 mb-8 text-sm">The requested listing does not exist or has been placed under private off-market status.</p>
        <Link to="/properties">
          <button className="px-6 py-3 bg-primary text-white font-bold text-xs rounded-luxury shadow-luxury">
            Return to Portfolio Directory
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
      alert("Please complete the required contact fields.");
      return;
    }
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", phone: "", date: "", message: "" });
    }, 4500);
  };

  return (
    <div className="w-full bg-lightGray min-h-screen pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Back Link */}
        <Link 
          to="/properties" 
          className="inline-flex items-center gap-2 text-slate-500 hover:text-secondary text-xs font-bold mb-8 group transition-colors"
        >
          <FiArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
          <span>Back to All Estates</span>
        </Link>

        {/* Title and Pricing Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 text-left">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-black text-secondary bg-secondary/10 px-3 py-1 rounded-full uppercase tracking-wider">
                {property.type}
              </span>
              <span className="text-xs font-black text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full uppercase tracking-wider">
                {property.status}
              </span>
              <span className="text-xs font-semibold text-slate-400">
                Yield: {property.rentalYield}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-primary mb-2 mt-0 tracking-tight leading-tight">
              {property.name}
            </h1>
            <p className="text-slate-400 text-sm md:text-base flex items-center gap-2">
              <FiMapPin className="text-secondary shrink-0" />
              {property.location}, {property.country}
            </p>
          </div>

          <div className="text-left md:text-right shrink-0">
            <span className="text-slate-400 text-[10px] font-bold uppercase tracking-widest block mb-1">
              Acquisition Valuation
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-secondary">
              {property.priceFormatted}
            </h2>
            <span className="text-xs text-slate-500 font-medium">
              {property.pricePerSqFt}
            </span>
          </div>
        </div>

        {/* Swiper Gallery */}
        <div className="rounded-luxury overflow-hidden shadow-luxury mb-12 border border-borderGray relative bg-white">
          <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 6000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation={true}
            className="h-[320px] sm:h-[450px] md:h-[560px]"
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

        {/* Details & Sidebar Inquiry Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
          
          {/* Main Info Column */}
          <div className="lg:col-span-8 flex flex-col gap-10">
            
            {/* Overview / Key Specifications */}
            <div className="bg-white p-8 rounded-luxury border border-borderGray shadow-sm">
              <h3 className="text-lg font-bold text-primary mb-6">Architectural Specifications</h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                <div className="p-4 bg-lightGray rounded-luxury-sm border border-borderGray/60">
                  <BiBed className="w-6 h-6 text-secondary mx-auto mb-1.5" />
                  <span className="text-base font-extrabold text-primary">{property.beds} Beds</span>
                  <span className="text-[10px] text-slate-400 block mt-0.5">Primary Suites</span>
                </div>
                <div className="p-4 bg-lightGray rounded-luxury-sm border border-borderGray/60">
                  <BiBath className="w-6 h-6 text-secondary mx-auto mb-1.5" />
                  <span className="text-base font-extrabold text-primary">{property.baths} Baths</span>
                  <span className="text-[10px] text-slate-400 block mt-0.5">En-Suite & Powder</span>
                </div>
                <div className="p-4 bg-lightGray rounded-luxury-sm border border-borderGray/60">
                  <FiMaximize className="w-5 h-5 text-secondary mx-auto mb-2" />
                  <span className="text-base font-extrabold text-primary">{property.area}</span>
                  <span className="text-[10px] text-slate-400 block mt-0.5">Interior Living</span>
                </div>
                <div className="p-4 bg-lightGray rounded-luxury-sm border border-borderGray/60">
                  <FiShield className="w-5 h-5 text-accent mx-auto mb-2" />
                  <span className="text-base font-extrabold text-primary">{property.yearBuilt}</span>
                  <span className="text-[10px] text-slate-400 block mt-0.5">Completion Date</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white p-8 rounded-luxury border border-borderGray shadow-sm">
              <h3 className="text-lg font-bold text-primary mb-4">Residence Dossier</h3>
              <p className="text-slate-600 font-light text-sm md:text-base leading-relaxed">
                {property.description}
              </p>
            </div>

            {/* Luxury Amenities */}
            <div className="bg-white p-8 rounded-luxury border border-borderGray shadow-sm">
              <h3 className="text-lg font-bold text-primary mb-6">Curated Features & Amenities</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {property.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent/15 flex items-center justify-center text-accent shrink-0">
                      <FiCheck className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-primary">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Private Location Coordinates & Discretion Note */}
            <div className="bg-white p-8 rounded-luxury border border-borderGray shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold text-primary">Location & Surroundings</h3>
                <span className="text-xs text-slate-400 font-semibold">{property.location}</span>
              </div>
              <div className="w-full h-72 rounded-luxury overflow-hidden bg-slate-900 relative border border-borderGray">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:18px_18px] pointer-events-none" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-6 text-center z-10">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-secondary mb-3 animate-pulse">
                    <FiMapPin className="w-6 h-6 text-accent" />
                  </div>
                  <h4 className="font-bold text-base mb-1">{property.name}</h4>
                  <p className="text-xs text-slate-300 font-light max-w-sm mb-4">
                    Exact architectural blueprints and gate security coordinates are released following identity verification and NDA sign-off.
                  </p>
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(property.location)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold rounded-luxury-sm backdrop-blur-md transition-colors"
                  >
                    View General Area on Google Maps
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Sidebar Inquiry Column */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            
            {/* Assigned Partner Card */}
            <div className="bg-primary text-white p-6 rounded-luxury border border-slate-800 shadow-luxury text-center flex flex-col items-center">
              <img 
                src={property.agent.photo} 
                alt={property.agent.name} 
                className="w-20 h-20 rounded-full object-cover border-2 border-white/20 shadow-md mb-4"
              />
              <span className="text-[10px] font-bold text-accent uppercase tracking-widest mb-1">
                Assigned Private Wealth Partner
              </span>
              <h4 className="text-lg font-black mb-1">{property.agent.name}</h4>
              <p className="text-xs text-slate-400 font-light mb-6">{property.agent.role}</p>
              
              <div className="flex flex-col gap-2.5 w-full">
                <a href={`tel:${property.agent.phone}`} className="w-full">
                  <button className="w-full py-3 bg-secondary text-white font-bold text-xs rounded-luxury hover:bg-blue-600 transition-all flex items-center justify-center gap-2 shadow-sm">
                    <FiPhone className="w-3.5 h-3.5" />
                    <span>Call {property.agent.name.split(" ")[0]} ({property.agent.phone})</span>
                  </button>
                </a>
                
                <a 
                  href={`${companyInfo.whatsappLink}?text=Hello%20${encodeURIComponent(property.agent.name)},%20I%20am%20inquiring%20about%20the%20dossier%20for%20"${encodeURIComponent(property.name)}"`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <button className="w-full py-3 bg-white text-primary font-bold text-xs rounded-luxury hover:bg-slate-100 transition-all flex items-center justify-center gap-2">
                    <FiMessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                    <span>WhatsApp Direct Line</span>
                  </button>
                </a>
              </div>
            </div>

            {/* Viewing Schedule Card */}
            <div className="bg-white p-7 rounded-luxury border border-borderGray shadow-sm">
              <h3 className="text-base font-extrabold text-primary mb-2">Request Viewing or Dossier</h3>
              <p className="text-xs text-slate-400 font-light mb-5">
                All requests are subject to buyer verification and NDA execution.
              </p>

              {/* In-Person vs Video Switcher */}
              <div className="grid grid-cols-2 gap-2 p-1 bg-lightGray rounded-luxury-sm mb-5">
                <button
                  type="button"
                  onClick={() => setViewingType("inPerson")}
                  className={`py-2 text-[11px] font-bold rounded transition-all ${
                    viewingType === "inPerson" ? "bg-white text-primary shadow-sm" : "text-slate-500"
                  }`}
                >
                  In-Person Viewing
                </button>
                <button
                  type="button"
                  onClick={() => setViewingType("video")}
                  className={`py-2 text-[11px] font-bold rounded transition-all ${
                    viewingType === "video" ? "bg-white text-primary shadow-sm" : "text-slate-500"
                  }`}
                >
                  Confidential 4K Walkthrough
                </button>
              </div>
              
              <form onSubmit={handleFormSubmit} className="flex flex-col gap-3.5">
                
                <div className="flex flex-col items-start gap-1">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Full Legal Name *</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Lord / Lady / Dr. / Mr. / Ms." 
                    className="w-full p-2.5 bg-lightGray border border-borderGray rounded-luxury-sm text-xs text-primary focus:outline-none focus:border-secondary focus:bg-white transition-all"
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
                    placeholder="corporate@familyoffice.com" 
                    className="w-full p-2.5 bg-lightGray border border-borderGray rounded-luxury-sm text-xs text-primary focus:outline-none focus:border-secondary focus:bg-white transition-all"
                  />
                </div>

                <div className="flex flex-col items-start gap-1">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Phone / Mobile *</label>
                  <input 
                    type="text" 
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+1 (555) 000-0000" 
                    className="w-full p-2.5 bg-lightGray border border-borderGray rounded-luxury-sm text-xs text-primary focus:outline-none focus:border-secondary focus:bg-white transition-all"
                  />
                </div>

                <div className="flex flex-col items-start gap-1">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Preferred Date</label>
                  <input 
                    type="date" 
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    className="w-full p-2.5 bg-lightGray border border-borderGray rounded-luxury-sm text-xs text-primary focus:outline-none focus:border-secondary focus:bg-white transition-all"
                  />
                </div>

                <div className="flex flex-col items-start gap-1">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Notes or Private Requests</label>
                  <textarea 
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full p-2.5 bg-lightGray border border-borderGray rounded-luxury-sm text-xs text-primary focus:outline-none focus:border-secondary focus:bg-white transition-all resize-none"
                  />
                </div>

                <button 
                  type="submit" 
                  className="w-full py-3.5 mt-2 bg-primary text-white font-bold text-xs rounded-luxury hover:bg-secondary transition-all shadow-luxury flex items-center justify-center gap-2"
                >
                  <FiFileText className="w-3.5 h-3.5" />
                  <span>Submit Viewing Request</span>
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
                      <FiCheck className="w-3 h-3" />
                    </div>
                    <span>Viewing request registered. {property.agent.name} will contact you within 4 hours.</span>
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
