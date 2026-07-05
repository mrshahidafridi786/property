import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPhone, FiMail, FiMapPin, FiCheck, FiSend, FiMessageSquare } from "react-icons/fi";
import { servicesData } from "../data/servicesData";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", service: "General Inquiry", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
      setFormData({ name: "", phone: "", email: "", service: "General Inquiry", message: "" });
    }, 4000);
  };

  return (
    <div className="w-full bg-lightGray min-h-screen pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Title */}
        <div className="text-left max-w-2xl mb-16">
          <span className="text-xs font-bold tracking-[0.2em] text-secondary uppercase block mb-3 animate-pulse">
            Contact Shan Property
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-5 tracking-tight leading-none mt-0">
            Let's Discuss Your Assets
          </h1>
          <p className="text-slate-500 font-light text-sm md:text-base leading-relaxed">
            Reach out today for a free consultation. Our directors and specialized agents are ready to coordinate operations for your property portfolio.
          </p>
        </div>

        {/* Contact info cards and Form Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Information Column */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            
            {/* Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
              
              {/* Phone Card */}
              <div className="bg-white p-6 rounded-luxury border border-borderGray shadow-sm flex items-start gap-4 text-left">
                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                  <FiPhone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-primary text-sm mb-1">Phone Number</h4>
                  <a href="tel:0345-9713706" className="text-xs md:text-sm text-slate-500 hover:text-secondary font-medium transition-colors">
                    0345-9713706
                  </a>
                  <p className="text-[10px] text-slate-400 font-light mt-1">Mon - Sat, 9:00 AM - 6:00 PM</p>
                </div>
              </div>

              {/* WhatsApp Card */}
              <div className="bg-white p-6 rounded-luxury border border-borderGray shadow-sm flex items-start gap-4 text-left">
                <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-600 shrink-0">
                  <FiMessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-primary text-sm mb-1">WhatsApp Chat</h4>
                  <a 
                    href="https://wa.me/923459713706" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xs md:text-sm text-slate-500 hover:text-emerald-600 font-medium transition-colors"
                  >
                    03459713706
                  </a>
                  <p className="text-[10px] text-slate-400 font-light mt-1">Available 24/7 for urgent alerts</p>
                </div>
              </div>

              {/* Email Card */}
              <div className="bg-white p-6 rounded-luxury border border-borderGray shadow-sm flex items-start gap-4 text-left">
                <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-600 shrink-0">
                  <FiMail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-primary text-sm mb-1">Email Inquiry</h4>
                  <a href="mailto:info@shanproperty.com" className="text-xs md:text-sm text-slate-500 hover:text-primary font-medium transition-colors">
                    info@shanproperty.com
                  </a>
                  <p className="text-[10px] text-slate-400 font-light mt-1">We respond within 12 business hours</p>
                </div>
              </div>

              {/* Address Card */}
              <div className="bg-white p-6 rounded-luxury border border-borderGray shadow-sm flex items-start gap-4 text-left">
                <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-600 shrink-0">
                  <FiMapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-primary text-sm mb-1">Corporate Office</h4>
                  <span className="text-xs md:text-sm text-slate-500 block leading-relaxed">
                    Main University Road, Peshawar, Pakistan
                  </span>
                  <p className="text-[10px] text-slate-400 font-light mt-1">Viewings by prior appointment only</p>
                </div>
              </div>

            </div>

            {/* Embedded Live Google Map */}
            <div className="w-full h-[320px] rounded-luxury overflow-hidden border border-borderGray shadow-luxury relative bg-slate-100">
              <iframe
                title="Shan Property Map Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3308.2045558965824!2d71.48790671521406!3d34.01948049999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d917d35030b2c5%3A0x781267e7eed1602d!2sShan%20property!5e0!3m2!1sen!2spk!4v1700000000000!5m2!1sen!2spk"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

          </div>

          {/* Form Column */}
          <div className="lg:col-span-7 bg-white p-8 md:p-10 rounded-luxury border border-borderGray shadow-sm text-left">
            <h3 className="text-lg font-bold text-primary mb-6">Send a Message</h3>
            
            <form onSubmit={handleFormSubmit} className="flex flex-col gap-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col items-start gap-1">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Full Name *</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name" 
                    className="w-full p-3.5 bg-lightGray border border-borderGray rounded-luxury-sm text-xs md:text-sm text-primary focus:outline-none focus:border-secondary focus:bg-white transition-all"
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
                    className="w-full p-3.5 bg-lightGray border border-borderGray rounded-luxury-sm text-xs md:text-sm text-primary focus:outline-none focus:border-secondary focus:bg-white transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col items-start gap-1">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Email Address *</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email" 
                    className="w-full p-3.5 bg-lightGray border border-borderGray rounded-luxury-sm text-xs md:text-sm text-primary focus:outline-none focus:border-secondary focus:bg-white transition-all"
                  />
                </div>
                <div className="flex flex-col items-start gap-1">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Interested Service</label>
                  <select 
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full p-3.5 bg-lightGray border border-borderGray rounded-luxury-sm text-xs md:text-sm text-primary focus:outline-none focus:border-secondary"
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Apartment Complex Management">Apartment Complex Management</option>
                    <option value="Condo Complex Management">Condo Complex Management</option>
                    <option value="Rental Property Management">Rental Property Management</option>
                    <option value="Property Inspections">Property Inspections</option>
                    <option value="Repairs & Maintenance">Repairs & Maintenance</option>
                    <option value="Property Valuation">Property Valuation</option>
                    <option value="Estate Agency Services">Estate Agency Services</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col items-start gap-1">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Your Message</label>
                <textarea 
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your property goals or challenges..." 
                  className="w-full p-3.5 bg-lightGray border border-borderGray rounded-luxury-sm text-xs md:text-sm text-primary focus:outline-none focus:border-secondary focus:bg-white transition-all resize-none"
                />
              </div>

              <button 
                type="submit" 
                className="w-full sm:w-auto px-8 py-4 bg-primary text-white font-bold text-xs rounded-luxury hover:bg-secondary transition-all flex items-center justify-center gap-2 shadow-luxury shrink-0 self-start"
              >
                <FiSend className="w-4 h-4" />
                Send Inquiry
              </button>

            </form>

            {/* Success notification */}
            <AnimatePresence>
              {isSubmitted && (
                <motion.div 
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 15 }}
                  className="mt-6 p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-luxury-sm flex items-center gap-3 text-xs font-semibold leading-relaxed"
                >
                  <div className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0">
                    <FiCheck className="w-3.5 h-3.5" />
                  </div>
                  <span>Inquiry sent successfully! Our client relations desk will contact you via phone or email shortly.</span>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>

      </div>
    </div>
  );
}
