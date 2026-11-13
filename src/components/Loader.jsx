import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { companyInfo } from "../data/companyInfo";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = "unset";
    }, 1900);

    document.body.style.overflow = "hidden";

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            y: "-100%",
            transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] } 
          }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-primary"
        >
          {/* Logo Animation */}
          <div className="relative overflow-hidden mb-6 flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, filter: "blur(12px)", y: 35 }}
              animate={{ 
                opacity: 1, 
                filter: "blur(0px)", 
                y: 0,
                transition: { duration: 0.9, ease: "easeOut" } 
              }}
              className="text-4xl md:text-5xl font-black tracking-[0.25em] text-white flex items-center justify-center"
            >
              {companyInfo.name.toUpperCase()}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, filter: "blur(10px)", y: 25 }}
              animate={{ 
                opacity: 0.85, 
                filter: "blur(0px)", 
                y: 0,
                transition: { duration: 0.9, delay: 0.35, ease: "easeOut" } 
              }}
              className="text-[10px] md:text-xs font-semibold tracking-[0.45em] text-accent uppercase mt-2.5"
            >
              Private Wealth Real Estate
            </motion.div>
          </div>

          {/* Animated Decorative Line */}
          <div className="relative w-36 h-[2px] bg-slate-800 rounded-full overflow-hidden">
            <motion.div 
              initial={{ x: "-100%" }}
              animate={{ 
                x: "100%",
                transition: { 
                  repeat: Infinity, 
                  duration: 1.4, 
                  ease: "easeInOut" 
                } 
              }}
              className="absolute left-0 top-0 h-full w-14 bg-gradient-to-r from-secondary to-accent"
            />
          </div>

          {/* Institutional Slogan */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: 0.6,
              transition: { delay: 0.7, duration: 0.4 }
            }}
            className="absolute bottom-12 text-center text-[10px] tracking-[0.3em] text-slate-400 font-medium uppercase"
          >
            Fiduciary Custody • Institutional Standard
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
