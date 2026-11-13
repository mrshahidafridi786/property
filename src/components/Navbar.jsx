import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FiPhoneCall, FiChevronRight } from "react-icons/fi";
import { companyInfo } from "../data/companyInfo";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Properties", path: "/properties" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[9990] w-full transition-all duration-500 ${
          isScrolled
            ? "glass-panel py-3.5 shadow-luxury"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <motion.div
              initial={{ rotate: -10, scale: 0.95 }}
              animate={{ rotate: 0, scale: 1 }}
              whileHover={{ rotate: 10, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="w-10 h-10 bg-gradient-to-tr from-primary to-slate-800 rounded-luxury-sm flex items-center justify-center font-black text-accent text-lg shadow-luxury border border-slate-700/50"
            >
              A
            </motion.div>
            <div className="flex flex-col text-left">
              <span className="text-xl font-black tracking-wider text-primary leading-none group-hover:text-secondary transition-colors">
                {companyInfo.name.toUpperCase()}
              </span>
              <span className="text-[9px] font-semibold tracking-[0.3em] text-slate-500 uppercase mt-0.5">
                Luxury Real Estate
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `relative text-sm font-medium tracking-wide transition-colors duration-300 py-1.5 hover:text-secondary ${
                    isActive ? "text-secondary font-semibold" : "text-primary/80"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.name}
                    {isActive && (
                      <motion.span
                        layoutId="activeNavUnderline"
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-secondary rounded-full"
                        transition={{ type: "spring", stiffness: 350, damping: 28 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Phone + CTA */}
          <div className="hidden lg:flex items-center gap-6">
            <a 
              href={`tel:${companyInfo.phoneRaw}`} 
              className="flex items-center gap-2 text-xs font-semibold text-primary hover:text-secondary transition-colors"
            >
              <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-secondary">
                <FiPhoneCall className="w-3.5 h-3.5" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[10px] text-slate-400 font-normal leading-none">Concierge Desk</span>
                <span className="font-bold text-xs">{companyInfo.phone}</span>
              </div>
            </a>

            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="flex items-center gap-2 px-5 py-2.5 bg-primary text-white font-medium text-xs rounded-luxury shadow-luxury hover:bg-secondary transition-all duration-300"
              >
                <span>Book Valuation</span>
                <FiChevronRight className="w-3.5 h-3.5" />
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-primary hover:text-secondary focus:outline-none transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <HiX className="w-7 h-7" />
            ) : (
              <HiMenuAlt3 className="w-7 h-7" />
            )}
          </button>

        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-0 z-[9980] w-full bg-white pt-24 pb-8 px-6 shadow-luxury border-b border-borderGray lg:hidden flex flex-col items-center"
          >
            <div className="flex flex-col items-center gap-5 w-full max-w-sm">
              {navLinks.map((link, idx) => (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.04 }}
                  key={link.name}
                  className="w-full text-center"
                >
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `block text-base font-semibold py-2 transition-colors ${
                        isActive ? "text-secondary" : "text-primary"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                </motion.div>
              ))}

              <div className="w-full pt-4 border-t border-borderGray flex flex-col gap-3">
                <a 
                  href={`tel:${companyInfo.phoneRaw}`} 
                  className="w-full py-3 bg-lightGray text-primary font-semibold text-xs rounded-luxury text-center flex items-center justify-center gap-2"
                >
                  <FiPhoneCall className="w-3.5 h-3.5 text-secondary" />
                  Call Concierge ({companyInfo.phone})
                </a>

                <Link to="/contact" className="block w-full">
                  <button className="w-full py-3.5 bg-primary text-white font-semibold text-xs rounded-luxury shadow-luxury hover:bg-secondary transition-all">
                    Request Free Consultation
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
