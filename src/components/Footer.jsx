import React from "react";
import { Link } from "react-router-dom";
import { FiMail, FiPhone, FiMapPin, FiArrowRight } from "react-icons/fi";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white pt-20 pb-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        
        {/* Column 1: Company Profile */}
        <div className="flex flex-col gap-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-tr from-secondary to-accent rounded-luxury-sm flex items-center justify-center font-extrabold text-white text-lg shadow-luxury">
              S
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-wider text-white leading-none">
                SHAN
              </span>
              <span className="text-[10px] font-medium tracking-[0.25em] text-slate-400 uppercase mt-0.5">
                Property
              </span>
            </div>
          </Link>
          <p className="text-slate-400 text-sm leading-relaxed">
            Professional property management and luxury real estate solutions built on absolute trust, transparent processes, and premium execution.
          </p>
          <div className="flex items-center gap-3">
            <a 
              href="https://facebook.com" target="_blank" rel="noreferrer"
              className="w-10 h-10 rounded-full bg-slate-800 hover:bg-secondary flex items-center justify-center text-slate-300 hover:text-white transition-all"
            >
              <FaFacebookF className="w-4 h-4" />
            </a>
            <a 
              href="https://twitter.com" target="_blank" rel="noreferrer"
              className="w-10 h-10 rounded-full bg-slate-800 hover:bg-secondary flex items-center justify-center text-slate-300 hover:text-white transition-all"
            >
              <FaTwitter className="w-4 h-4" />
            </a>
            <a 
              href="https://instagram.com" target="_blank" rel="noreferrer"
              className="w-10 h-10 rounded-full bg-slate-800 hover:bg-secondary flex items-center justify-center text-slate-300 hover:text-white transition-all"
            >
              <FaInstagram className="w-4 h-4" />
            </a>
            <a 
              href="https://linkedin.com" target="_blank" rel="noreferrer"
              className="w-10 h-10 rounded-full bg-slate-800 hover:bg-secondary flex items-center justify-center text-slate-300 hover:text-white transition-all"
            >
              <FaLinkedinIn className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-base font-semibold tracking-wide text-white mb-6 uppercase">Quick Links</h3>
          <ul className="flex flex-col gap-3">
            {["Home", "About Us", "Our Services", "Properties Portfolio", "Contact Us"].map((link) => {
              const paths = {
                "Home": "/",
                "About Us": "/about",
                "Our Services": "/services",
                "Properties Portfolio": "/properties",
                "Contact Us": "/contact"
              };
              return (
                <li key={link}>
                  <Link 
                    to={paths[link]} 
                    className="text-slate-400 hover:text-accent text-sm flex items-center gap-2 group transition-colors"
                  >
                    <FiArrowRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-accent transition-colors" />
                    {link}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Column 3: Services */}
        <div>
          <h3 className="text-base font-semibold tracking-wide text-white mb-6 uppercase">Featured Services</h3>
          <ul className="flex flex-col gap-3">
            {[
              "Apartment Complex Management",
              "Condo Complex Management",
              "Rental Property Management",
              "Property Valuation",
              "Property Inspections",
              "Tenant Management"
            ].map((service) => (
              <li key={service}>
                <Link 
                  to="/services" 
                  className="text-slate-400 hover:text-accent text-sm flex items-center gap-2 group transition-colors"
                >
                  <FiArrowRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-accent transition-colors" />
                  {service}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Contact info */}
        <div>
          <h3 className="text-base font-semibold tracking-wide text-white mb-6 uppercase">Get In Touch</h3>
          <ul className="flex flex-col gap-4">
            <li className="flex items-start gap-3">
              <FiPhone className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
              <div className="flex flex-col">
                <a href="tel:0345-9713706" className="text-slate-300 hover:text-white text-sm font-medium transition-colors">
                  0345-9713706
                </a>
                <span className="text-xs text-slate-500">Phone Support</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <FiMail className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
              <div className="flex flex-col">
                <a href="mailto:info@shanproperty.com" className="text-slate-300 hover:text-white text-sm font-medium transition-colors">
                  info@shanproperty.com
                </a>
                <span className="text-xs text-slate-500">Email Address</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <FiMapPin className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
              <div className="flex flex-col">
                <span className="text-slate-300 text-sm">
                  Main University Road, Peshawar, Pakistan
                </span>
                <span className="text-xs text-slate-500">Our Office</span>
              </div>
            </li>
          </ul>
        </div>

      </div>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 border-t border-slate-800/80 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
        <p>© {currentYear} Shan Property. All rights reserved.</p>
        <p className="flex items-center gap-4">
          <Link to="/" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link to="/" className="hover:text-white transition-colors">Terms of Service</Link>
        </p>
      </div>
    </footer>
  );
}
