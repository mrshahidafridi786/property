import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus, FiMinus, FiMessageCircle } from "react-icons/fi";
import { faqData } from "../../data/faqData";
import { companyInfo } from "../../data/companyInfo";

export default function FaqSection() {
  const [activeId, setActiveId] = useState(1);
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Owners", "Maintenance", "Legal & Payouts", "General"];

  const filteredFaqs = faqData.filter(faq => {
    return activeCategory === "All" || faq.category === activeCategory;
  });

  const toggleAccordion = (id) => {
    setActiveId(prev => (prev === id ? null : id));
  };

  return (
    <section className="py-24 bg-lightGray relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-[0.25em] text-secondary uppercase block mb-3">
            Clear Answers
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-primary mb-5 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-500 font-light text-sm md:text-base leading-relaxed">
            Detailed guidance regarding our fiduciary management agreements, banking disbursements, maintenance thresholds, and onboarding protocols.
          </p>
        </div>

        {/* Category Filter Pills (UX Enhancement) */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-luxury-sm text-xs font-bold transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-primary text-white shadow-md"
                  : "bg-white text-slate-600 border border-borderGray hover:bg-slate-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordions */}
        <div className="flex flex-col gap-4">
          <AnimatePresence mode="popLayout">
            {filteredFaqs.map((faq) => {
              const isOpen = activeId === faq.id;
              return (
                <motion.div 
                  layout
                  key={faq.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="bg-white rounded-luxury border border-borderGray overflow-hidden transition-all duration-300 shadow-sm"
                >
                  {/* Header Click Bar */}
                  <button
                    onClick={() => toggleAccordion(faq.id)}
                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none transition-colors"
                  >
                    <span className="font-bold text-primary text-sm sm:text-base pr-4">
                      {faq.question}
                    </span>
                    <div className={`w-8 h-8 rounded-full border border-borderGray flex items-center justify-center text-primary transition-all duration-300 shrink-0 ${
                      isOpen ? "bg-primary text-white border-primary" : "bg-lightGray"
                    }`}>
                      {isOpen ? <FiMinus className="w-4 h-4" /> : <FiPlus className="w-4 h-4" />}
                    </div>
                  </button>

                  {/* Answer Toggle */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ 
                          height: "auto", 
                          opacity: 1,
                          transition: { height: { duration: 0.35, ease: "easeOut" }, opacity: { duration: 0.25 } }
                        }}
                        exit={{ 
                          height: 0, 
                          opacity: 0,
                          transition: { height: { duration: 0.28, ease: "easeIn" }, opacity: { duration: 0.2 } }
                        }}
                      >
                        <div className="px-6 pb-6 pt-2 text-slate-600 font-light text-xs sm:text-sm leading-relaxed border-t border-slate-50 text-left">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Direct Contact Prompt */}
        <div className="mt-12 p-6 bg-white rounded-luxury border border-borderGray flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
              <FiMessageCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-primary">Have a specific portfolio requirement?</h4>
              <p className="text-xs text-slate-400 font-light">Speak with our Managing Directors for a tailored proposal.</p>
            </div>
          </div>
          <Link to="/contact">
            <button className="px-5 py-2.5 bg-primary hover:bg-secondary text-white text-xs font-bold rounded-luxury transition-colors whitespace-nowrap">
              Contact Advisory Desk
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
}
