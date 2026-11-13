import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { companyInfo } from "../data/companyInfo";

export default function WhatsAppButton() {
  return (
    <motion.a
      href={companyInfo.whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[999] flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-lg text-white hover:bg-[#20ba5a] transition-all duration-300 group"
      aria-label="Chat on WhatsApp with Aura Crest Concierge"
      animate={{
        y: [0, -7, 0],
      }}
      transition={{
        duration: 2.2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
    >
      <FaWhatsapp className="w-7 h-7" />
      {/* Subtle Tooltip */}
      <span className="absolute right-16 bg-primary text-white text-xs px-3 py-1.5 rounded-luxury-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-luxury pointer-events-none font-semibold">
        WhatsApp Concierge Desk
      </span>
    </motion.a>
  );
}
