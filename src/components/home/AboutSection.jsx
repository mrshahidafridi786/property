import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiCheckCircle, FiTarget, FiEye, FiArrowRight } from "react-icons/fi";
import { fadeIn, staggerContainer } from "../../animations/variants";
import { companyInfo } from "../../data/companyInfo";

export default function AboutSection() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          variants={staggerContainer(0.2, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center"
        >
          
          {/* Overlapping Images Side */}
          <div className="lg:col-span-6 relative h-[450px] md:h-[550px] w-full flex items-center">
            
            {/* Primary Large Image */}
            <motion.div
              variants={fadeIn("right", "tween", 0.2, 0.8)}
              className="w-3/4 h-4/5 rounded-luxury overflow-hidden shadow-luxury border border-slate-100 relative z-10"
            >
              <img 
                src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=900&q=80" 
                alt="Luxury Estate Living Area" 
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Overlapping Secondary Image */}
            <motion.div
              variants={fadeIn("up", "tween", 0.4, 0.8)}
              className="absolute right-0 bottom-6 w-1/2 h-3/5 rounded-luxury overflow-hidden shadow-luxury-hover border-4 border-white z-20"
            >
              <img 
                src="https://images.unsplash.com/photo-1541829019-259275a528f3?auto=format&fit=crop&w=700&q=80" 
                alt="Contemporary Architecture" 
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Floating Trust Badge */}
            <motion.div
              variants={fadeIn("left", "tween", 0.6, 0.6)}
              className="absolute left-6 bottom-10 z-30 p-5 bg-primary text-white rounded-luxury shadow-luxury border border-slate-800 flex flex-col items-center justify-center text-center w-40 h-40"
            >
              <span className="text-3xl font-black text-accent">{companyInfo.stats.yearsExperience}</span>
              <span className="text-[10px] font-semibold text-slate-300 uppercase tracking-widest mt-1.5 leading-tight">
                Years of Institutional Fiduciary Care
              </span>
            </motion.div>

          </div>

          {/* Text Content Side */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            
            <motion.span
              variants={fadeIn("up", "tween", 0.1, 0.5)}
              className="text-xs font-bold tracking-[0.25em] text-secondary uppercase mb-3"
            >
              About {companyInfo.name}
            </motion.span>

            <motion.h2
              variants={fadeIn("up", "tween", 0.2, 0.5)}
              className="text-3xl md:text-5xl font-black text-primary mb-6 leading-tight tracking-tight"
            >
              Protecting Equity. Maximizing Passive Yields.
            </motion.h2>

            <motion.p
              variants={fadeIn("up", "tween", 0.3, 0.5)}
              className="text-slate-600 text-sm md:text-base font-light leading-relaxed mb-8"
            >
              Founded as a private fiduciary office in New York, {companyInfo.name} has grown to manage over {companyInfo.stats.assetsUnderManagement} in residential estates, multi-family towers, and commercial hubs across the United States, Europe, and the Middle East. We combine white-glove concierge standards with automated financial oversight.
            </motion.p>

            {/* Mission & Vision Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full mb-8">
              
              <motion.div
                variants={fadeIn("up", "tween", 0.4, 0.5)}
                className="p-5 bg-lightGray rounded-luxury border border-borderGray flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                  <FiTarget className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-primary text-sm mb-1">Our Fiduciary Mandate</h4>
                  <p className="text-xs text-slate-500 font-light leading-relaxed">
                    To eliminate landlord friction, preserve structural equity, and secure sustained premium rental revenues.
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={fadeIn("up", "tween", 0.5, 0.5)}
                className="p-5 bg-lightGray rounded-luxury border border-borderGray flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center text-accent shrink-0">
                  <FiEye className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-primary text-sm mb-1">Institutional Standard</h4>
                  <p className="text-xs text-slate-500 font-light leading-relaxed">
                    To define the international benchmark for luxury asset management through radical transparency.
                  </p>
                </div>
              </motion.div>

            </div>

            {/* Key Value Checklist */}
            <div className="flex flex-col gap-3 mb-10 w-full">
              {[
                "Instant encrypted monthly cash distributions with CPA-ready ledger reconciliations",
                "Dedicated master-vetted trade network with guaranteed 45-minute emergency response",
                "Forensic tenant screening: triple-bureau credit audits and verified liquidity"
              ].map((text, idx) => (
                <motion.div
                  variants={fadeIn("up", "tween", 0.6 + idx * 0.1, 0.4)}
                  key={idx}
                  className="flex items-center gap-3 text-xs md:text-sm text-primary font-medium"
                >
                  <FiCheckCircle className="w-4 h-4 text-accent shrink-0" />
                  <span>{text}</span>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeIn("up", "tween", 0.9, 0.5)}>
              <Link to="/about">
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className="px-8 py-3.5 bg-primary text-white text-xs font-bold rounded-luxury shadow-luxury hover:bg-secondary transition-all flex items-center gap-2"
                >
                  <span>Explore Our History & Global Presence</span>
                  <FiArrowRight className="w-3.5 h-3.5" />
                </motion.button>
              </Link>
            </motion.div>

          </div>

        </motion.div>
      </div>
    </section>
  );
}
