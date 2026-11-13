import React from "react";
import { Link } from "react-router-dom";
import { FiMail, FiPhone, FiMapPin, FiArrowRight } from "react-icons/fi";
import { FaLinkedinIn, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { companyInfo } from "../data/companyInfo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white pt-20 pb-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 text-left">
        
        {/* Column 1: Company Profile */}
        <div className="flex flex-col gap-6">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-tr from-primary to-slate-800 rounded-luxury-sm flex items-center justify-center font-black text-accent text-lg shadow-luxury border border-slate-700/60">
              A
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-wider text-white leading-none">
                {companyInfo.name.toUpperCase()}
              </span>
              <span className="text-[9px] font-semibold tracking-[0.3em] text-slate-400 uppercase mt-0.5">
                Luxury Real Estate
              </span>
            </div>
          </Link>
          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-light">
            Institutional-grade property management, turnkey rental collections, and bespoke private client concierge for premier residential and commercial assets globally.
          </p>
          <div className="flex items-center gap-2.5">
            <a 
              href={companyInfo.socials.linkedin} target="_blank" rel="noreferrer"
              className="w-9 h-9 rounded-full bg-slate-800/80 hover:bg-secondary flex items-center justify-center text-slate-300 hover:text-white transition-all"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn className="w-3.5 h-3.5" />
            </a>
            <a 
              href={companyInfo.socials.instagram} target="_blank" rel="noreferrer"
              className="w-9 h-9 rounded-full bg-slate-800/80 hover:bg-secondary flex items-center justify-center text-slate-300 hover:text-white transition-all"
              aria-label="Instagram"
            >
              <FaInstagram className="w-3.5 h-3.5" />
            </a>
            <a 
              href={companyInfo.socials.twitter} target="_blank" rel="noreferrer"
              className="w-9 h-9 rounded-full bg-slate-800/80 hover:bg-secondary flex items-center justify-center text-slate-300 hover:text-white transition-all"
              aria-label="Twitter"
            >
              <FaTwitter className="w-3.5 h-3.5" />
            </a>
            <a 
              href={companyInfo.socials.youtube} target="_blank" rel="noreferrer"
              className="w-9 h-9 rounded-full bg-slate-800/80 hover:bg-secondary flex items-center justify-center text-slate-300 hover:text-white transition-all"
              aria-label="YouTube"
            >
              <FaYoutube className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-xs font-bold tracking-[0.2em] text-slate-300 mb-6 uppercase">
            Navigation
          </h3>
          <ul className="flex flex-col gap-3">
            {[
              { label: "Home", path: "/" },
              { label: "About Our Firm", path: "/about" },
              { label: "24 Specialized Services", path: "/services" },
              { label: "Global Estates Portfolio", path: "/properties" },
              { label: "Contact Private Office", path: "/contact" }
            ].map((link) => (
              <li key={link.label}>
                <Link 
                  to={link.path} 
                  className="text-slate-400 hover:text-white text-xs flex items-center gap-2 group transition-colors"
                >
                  <FiArrowRight className="w-3 h-3 text-slate-600 group-hover:text-accent transition-colors" />
                  <span>{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Flagship Services */}
        <div>
          <h3 className="text-xs font-bold tracking-[0.2em] text-slate-300 mb-6 uppercase">
            Flagship Solutions
          </h3>
          <ul className="flex flex-col gap-3">
            {[
              "Apartment Complex Management",
              "Condo Complex Management",
              "Rental Property Management",
              "Automated Rent Collection & Escrow",
              "Property Inspections & Forensic Audits",
              "Holiday & Island Property Management"
            ].map((service) => (
              <li key={service}>
                <Link 
                  to="/services" 
                  className="text-slate-400 hover:text-accent text-xs flex items-center gap-2 group transition-colors"
                >
                  <FiArrowRight className="w-3 h-3 text-slate-600 group-hover:text-accent transition-colors" />
                  <span>{service}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Global HQ Details */}
        <div>
          <h3 className="text-xs font-bold tracking-[0.2em] text-slate-300 mb-6 uppercase">
            Global Headquarters
          </h3>
          <ul className="flex flex-col gap-4">
            <li className="flex items-start gap-3">
              <FiPhone className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
              <div className="flex flex-col">
                <a href={`tel:${companyInfo.phoneRaw}`} className="text-slate-200 hover:text-white text-xs font-bold transition-colors">
                  {companyInfo.phone}
                </a>
                <span className="text-[10px] text-slate-500 font-light">Toll-Free Concierge Desk</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <FiMail className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
              <div className="flex flex-col">
                <a href={`mailto:${companyInfo.email}`} className="text-slate-200 hover:text-white text-xs font-bold transition-colors">
                  {companyInfo.email}
                </a>
                <span className="text-[10px] text-slate-500 font-light">Private Wealth Client Desk</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <FiMapPin className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
              <div className="flex flex-col">
                <span className="text-slate-300 text-xs font-medium">
                  {companyInfo.headquarters.address}
                </span>
                <span className="text-[10px] text-slate-400">
                  {companyInfo.headquarters.subAddress}
                </span>
                <span className="text-[10px] text-slate-500 mt-1">
                  Offices in New York • Beverly Hills • London • Dubai
                </span>
              </div>
            </li>
          </ul>
        </div>

      </div>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 border-t border-slate-800/80 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
        <p>© {currentYear} {companyInfo.legalName}. All rights reserved.</p>
        <p className="flex items-center gap-6">
          <Link to="/" className="hover:text-white transition-colors">Privacy & Discretion</Link>
          <Link to="/" className="hover:text-white transition-colors">Terms of Fiduciary Engagement</Link>
          <Link to="/" className="hover:text-white transition-colors">Regulatory Compliance</Link>
        </p>
      </div>
    </footer>
  );
}
