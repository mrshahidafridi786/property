import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Hide loader after 2.2 seconds
    const timer = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = "unset";
    }, 2200);

    // Prevent scrolling while loading
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
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
          }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-primary"
        >
          {/* Logo animation */}
          <div className="relative overflow-hidden mb-6 flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, filter: "blur(10px)", y: 40 }}
              animate={{ 
                opacity: 1, 
                filter: "blur(0px)", 
                y: 0,
                transition: { duration: 1, ease: "easeOut" } 
              }}
              className="text-4xl md:text-5xl font-extrabold tracking-[0.2em] text-white flex items-center justify-center"
            >
              SHAN
            </motion.div>
            <motion.div
              initial={{ opacity: 0, filter: "blur(10px)", y: 40 }}
              animate={{ 
                opacity: 0.8, 
                filter: "blur(0px)", 
                y: 0,
                transition: { duration: 1, delay: 0.4, ease: "easeOut" } 
              }}
              className="text-xs md:text-sm font-light tracking-[0.6em] text-accent uppercase mt-2"
            >
              Property Management
            </motion.div>
          </div>

          {/* Animated decorative line */}
          <div className="relative w-32 h-[2px] bg-slate-800 rounded-full overflow-hidden">
            <motion.div 
              initial={{ x: "-100%" }}
              animate={{ 
                x: "100%",
                transition: { 
                  repeat: Infinity, 
                  duration: 1.5, 
                  ease: "easeInOut" 
                } 
              }}
              className="absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-secondary to-accent"
            />
          </div>

          {/* Slogan */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: 0.5,
              transition: { delay: 0.8, duration: 0.5 }
            }}
            className="absolute bottom-12 text-center text-xs tracking-wider text-slate-400 font-light"
          >
            ESTABLISHED IN TRUST
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
