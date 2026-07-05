import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus, FiMinus } from "react-icons/fi";
import { faqData } from "../../data/faqData";

export default function FaqSection() {
  const [activeId, setActiveId] = useState(null);

  const toggleAccordion = (id) => {
    if (activeId === id) {
      setActiveId(null);
    } else {
      setActiveId(id);
    }
  };

  return (
    <section className="py-24 bg-lightGray relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-[0.2em] text-secondary uppercase block mb-3">
            Got Questions?
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-5">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-500 font-light text-sm md:text-base leading-relaxed">
            Find immediate answers regarding leasing cycles, background screening, emergency repairs, management schedules, and payouts.
          </p>
        </div>

        {/* Accordions */}
        <div className="flex flex-col gap-4">
          {faqData.map((faq) => {
            const isOpen = activeId === faq.id;
            return (
              <div 
                key={faq.id}
                className="bg-white rounded-luxury border border-borderGray overflow-hidden transition-all duration-300 shadow-sm"
              >
                {/* Header click bar */}
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none transition-colors"
                >
                  <span className="font-semibold text-primary text-sm md:text-base pr-4">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full border border-borderGray flex items-center justify-center text-primary transition-all duration-300 shrink-0 ${
                    isOpen ? "bg-primary text-white border-primary" : "bg-lightGray"
                  }`}>
                    {isOpen ? <FiMinus className="w-4 h-4" /> : <FiPlus className="w-4 h-4" />}
                  </div>
                </button>

                {/* Answer toggle with Framer Motion AnimatePresence */}
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
                        transition: { height: { duration: 0.3, ease: "easeIn" }, opacity: { duration: 0.2 } }
                      }}
                    >
                      <div className="px-6 pb-6 pt-2 text-slate-500 font-light text-xs md:text-sm leading-relaxed border-t border-slate-50">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
