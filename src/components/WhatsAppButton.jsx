import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const whatsappUrl = "https://wa.me/923459713706";

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[999] flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-lg text-white hover:bg-[#20ba5a] transition-all duration-300"
      aria-label="Chat on WhatsApp"
      animate={{
        y: [0, -8, 0],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <FaWhatsapp className="w-8 h-8" />
      {/* Subtle tooltip reveal */}
      <span className="absolute right-16 bg-primary text-white text-xs px-3 py-1.5 rounded-luxury-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-luxury pointer-events-none">
        Chat with Us
      </span>
    </motion.a>
  );
}
