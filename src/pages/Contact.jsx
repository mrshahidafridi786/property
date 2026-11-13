import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPhone, FiMail, FiMapPin, FiCheck, FiSend, FiMessageSquare, FiClock, FiGlobe } from "react-icons/fi";
import { companyInfo } from "../data/companyInfo";

export default function Contact() {
  const [activeOffice, setActiveOffice] = useState("nyc");
  const [formData, setFormData] = useState({ 
    name: "", 
    phone: "", 
    email: "", 
    portfolioSize: "Under $10M", 
    service: "Comprehensive Property Management", 
    message: "" 
  });
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
      alert("Please fill in the required fields.");
      return;
    }
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ 
        name: "", 
        phone: "", 
        email: "", 
        portfolioSize: "Under $10M", 
        service: "Comprehensive Property Management", 
        message: "" 
      });
    }, 4500);
  };

  const selectedOfficeData = companyInfo.regionalOffices.find(o => o.id === activeOffice) || companyInfo.regionalOffices[0];

  return (
    <div className="w-full bg-lightGray min-h-screen pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Title */}
        <div className="text-left max-w-3xl mb-14">
          <span className="text-xs font-bold tracking-[0.25em] text-secondary uppercase block mb-3">
            Private Client Advisory
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-primary mb-4 tracking-tight leading-none mt-0">
            Initiate a Confidential Dialogue
          </h1>
          <p className="text-slate-500 font-light text-sm sm:text-base leading-relaxed">
            Connect directly with an {companyInfo.name} Managing Director in New York, London, Beverly Hills, or Dubai to discuss discrete asset care, portfolio optimization, or private listings.
          </p>
        </div>

        {/* Global Hub Selector Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 border-b border-borderGray">
          {companyInfo.regionalOffices.map((office) => (
            <button
              key={office.id}
              onClick={() => setActiveOffice(office.id)}
              className={`px-5 py-2.5 rounded-luxury-sm text-xs font-bold whitespace-nowrap transition-all duration-300 flex items-center gap-2 ${
                activeOffice === office.id
                  ? "bg-primary text-white shadow-md"
                  : "bg-white text-slate-600 border border-borderGray hover:bg-slate-100"
              }`}
            >
              <FiGlobe className="w-3.5 h-3.5" />
              <span>{office.name}</span>
            </button>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Information Column (Left) */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            
            <div className="grid grid-cols-1 gap-4">
              
              {/* Telephone Hotline */}
              <div className="bg-white p-5 rounded-luxury border border-borderGray shadow-sm flex items-start gap-4 text-left">
                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary shrink-0 mt-0.5">
                  <FiPhone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-primary text-xs uppercase tracking-wider mb-1">
                    Direct Private Hotline
                  </h4>
                  <a href={`tel:${selectedOfficeData.phone}`} className="text-sm text-primary font-bold hover:text-secondary transition-colors block">
                    {selectedOfficeData.phone}
                  </a>
                  <p className="text-[11px] text-slate-400 font-light mt-0.5">
                    Toll-free Concierge: {companyInfo.phone}
                  </p>
                </div>
              </div>

              {/* WhatsApp Direct Line */}
              <div className="bg-white p-5 rounded-luxury border border-borderGray shadow-sm flex items-start gap-4 text-left">
                <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-600 shrink-0 mt-0.5">
                  <FiMessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-primary text-xs uppercase tracking-wider mb-1">
                    WhatsApp Private Desk
                  </h4>
                  <a 
                    href={companyInfo.whatsappLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-emerald-600 font-bold hover:underline transition-colors block"
                  >
                    {companyInfo.whatsappFormatted}
                  </a>
                  <p className="text-[11px] text-slate-400 font-light mt-0.5">
                    24/7 Priority Channel for Estate Emergencies
                  </p>
                </div>
              </div>

              {/* Email Advisory */}
              <div className="bg-white p-5 rounded-luxury border border-borderGray shadow-sm flex items-start gap-4 text-left">
                <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-600 shrink-0 mt-0.5">
                  <FiMail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-primary text-xs uppercase tracking-wider mb-1">
                    Fiduciary Inquiries
                  </h4>
                  <a href={`mailto:${selectedOfficeData.email}`} className="text-sm text-primary font-bold hover:text-secondary transition-colors block">
                    {selectedOfficeData.email}
                  </a>
                  <p className="text-[11px] text-slate-400 font-light mt-0.5">
                    Executive responses guaranteed within 4 hours
                  </p>
                </div>
              </div>

              {/* Office Address */}
              <div className="bg-white p-5 rounded-luxury border border-borderGray shadow-sm flex items-start gap-4 text-left">
                <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-600 shrink-0 mt-0.5">
                  <FiMapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-primary text-xs uppercase tracking-wider mb-1">
                    {selectedOfficeData.name} Office
                  </h4>
                  <span className="text-xs text-slate-700 font-semibold block leading-relaxed">
                    {selectedOfficeData.address}
                  </span>
                  <span className="text-xs text-slate-500 block">
                    {selectedOfficeData.city}
                  </span>
                  <p className="text-[10px] text-slate-400 font-light mt-1">
                    In-person consultations by prior appointment
                  </p>
                </div>
              </div>

            </div>

            {/* Embedded Live Google Map for HQ */}
            <div className="w-full h-[280px] rounded-luxury overflow-hidden border border-borderGray shadow-luxury relative bg-slate-100">
              <iframe
                title={`${companyInfo.name} Global Office Location`}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.902251347065!2d-73.96767592351982!3d40.77092147138379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258ec697b9ec3%3A0x67db23a5c8989531!2s740%20Park%20Ave%2C%20New%20York%2C%20NY%2010021!5e0!3m2!1sen!2sus!4v1710000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

          </div>

          {/* Form Column (Right) */}
          <div className="lg:col-span-7 bg-white p-8 md:p-10 rounded-luxury border border-borderGray shadow-sm text-left">
            <h3 className="text-xl font-black text-primary mb-2">Request Portfolio Assessment</h3>
            <p className="text-xs text-slate-500 font-light mb-8">
              All communications are strictly protected by bilateral non-disclosure provisions.
            </p>
            
            <form onSubmit={handleFormSubmit} className="flex flex-col gap-5">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col items-start gap-1">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Full Name / Title *</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Lord / Lady / Dr. / Mr. / Ms." 
                    className="w-full p-3 bg-lightGray border border-borderGray rounded-luxury-sm text-xs text-primary focus:outline-none focus:border-secondary focus:bg-white transition-all"
                  />
                </div>
                <div className="flex flex-col items-start gap-1">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Direct Phone Number *</label>
                  <input 
                    type="text" 
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+1 (555) 000-0000" 
                    className="w-full p-3 bg-lightGray border border-borderGray rounded-luxury-sm text-xs text-primary focus:outline-none focus:border-secondary focus:bg-white transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col items-start gap-1">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Confidential Email *</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="advisory@familyoffice.com" 
                    className="w-full p-3 bg-lightGray border border-borderGray rounded-luxury-sm text-xs text-primary focus:outline-none focus:border-secondary focus:bg-white transition-all"
                  />
                </div>

                <div className="flex flex-col items-start gap-1">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Portfolio Scale</label>
                  <select 
                    name="portfolioSize"
                    value={formData.portfolioSize}
                    onChange={handleInputChange}
                    className="w-full p-3 bg-lightGray border border-borderGray rounded-luxury-sm text-xs text-primary font-medium focus:outline-none focus:border-secondary cursor-pointer"
                  >
                    <option value="Single Estate (< $10M)">Single Estate (&lt; $10M)</option>
                    <option value="Substantial Portfolio ($10M – $50M)">Substantial Portfolio ($10M – $50M)</option>
                    <option value="Institutional Asset Portfolio ($50M+)">Institutional Asset Portfolio ($50M+)</option>
                    <option value="Commercial / Multi-Family Block">Commercial / Multi-Family Block</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col items-start gap-1">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Primary Service Required</label>
                <select 
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-lightGray border border-borderGray rounded-luxury-sm text-xs text-primary font-medium focus:outline-none focus:border-secondary cursor-pointer"
                >
                  <option value="Comprehensive Property Management">Comprehensive Property Management</option>
                  <option value="Apartment Complex Management">Apartment Complex Management</option>
                  <option value="Condo Complex Management">Condo Complex Management</option>
                  <option value="Rental Property Management">Rental Property Management</option>
                  <option value="Holiday & Island Property Management">Holiday & Island Property Management</option>
                  <option value="Property Valuation & Audits">Property Valuation & Audits</option>
                  <option value="Private Office Estate Agency">Private Office Estate Agency</option>
                </select>
              </div>

              <div className="flex flex-col items-start gap-1">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Portfolio Context & Requirements</label>
                <textarea 
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Outline your property locations, tenancy circumstances, or specific asset preservation goals..." 
                  className="w-full p-3 bg-lightGray border border-borderGray rounded-luxury-sm text-xs text-primary focus:outline-none focus:border-secondary focus:bg-white transition-all resize-none"
                />
              </div>

              <button 
                type="submit" 
                className="w-full sm:w-auto px-8 py-3.5 bg-primary text-white font-bold text-xs rounded-luxury hover:bg-secondary transition-all flex items-center justify-center gap-2 shadow-luxury shrink-0 self-start mt-2"
              >
                <FiSend className="w-3.5 h-3.5" />
                <span>Submit Confidential Briefing</span>
              </button>

            </form>

            <AnimatePresence>
              {isSubmitted && (
                <motion.div 
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12 }}
                  className="mt-6 p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-luxury-sm flex items-center gap-3 text-xs font-semibold leading-relaxed"
                >
                  <div className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0">
                    <FiCheck className="w-3.5 h-3.5" />
                  </div>
                  <span>Briefing received. An {companyInfo.name} Managing Director will reach out confidentially within 4 hours.</span>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>

      </div>
    </div>
  );
}
