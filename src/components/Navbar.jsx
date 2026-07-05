import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FiPhoneCall } from "react-icons/fi";

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

  // Handle scroll trigger for background styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on page transitions
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[9990] w-full transition-all duration-500 ${
          isScrolled
            ? "glass-panel py-4 shadow-luxury"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <motion.div
              initial={{ rotate: -15, scale: 0.9 }}
              animate={{ rotate: 0, scale: 1 }}
              whileHover={{ rotate: 18, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="w-10 h-10 bg-gradient-to-tr from-secondary to-accent rounded-luxury-sm flex items-center justify-center font-extrabold text-white text-lg shadow-luxury"
            >
              S
            </motion.div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-wider text-primary leading-none transition-colors group-hover:text-secondary">
                SHAN
              </span>
              <span className="text-[10px] font-medium tracking-[0.25em] text-slate-500 uppercase mt-0.5">
                Property
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `relative text-sm font-medium tracking-wide transition-colors duration-300 py-2 hover:text-secondary ${
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
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-6 py-3 bg-primary text-white font-medium text-sm rounded-luxury shadow-luxury hover:bg-secondary transition-all duration-300"
              >
                <FiPhoneCall className="w-4 h-4" />
                Free Consultation
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

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-0 z-[9980] w-full bg-white pt-24 pb-10 px-6 shadow-luxury border-b border-borderGray lg:hidden flex flex-col items-center"
          >
            <div className="flex flex-col items-center gap-6 w-full max-w-sm">
              {navLinks.map((link, idx) => (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  key={link.name}
                  className="w-full text-center"
                >
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `block text-lg font-semibold py-2 transition-colors ${
                        isActive ? "text-secondary" : "text-primary"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
                className="w-full mt-4"
              >
                <Link to="/contact" className="block w-full">
                  <button className="w-full py-4 bg-primary text-white font-semibold rounded-luxury shadow-luxury hover:bg-secondary transition-all">
                    Get Free Consultation
                  </button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
