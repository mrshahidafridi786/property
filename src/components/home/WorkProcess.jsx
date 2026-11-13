import React from "react";
import { motion } from "framer-motion";
import { FiMessageSquare, FiTrendingUp, FiLayers, FiActivity } from "react-icons/fi";
import { fadeIn, staggerContainer } from "../../animations/variants";

const steps = [
  {
    phase: "01",
    title: "Strategic Portfolio Consultation",
    desc: "We analyze your global real estate holdings, tenancy covenants, financial targets, and tax-depreciation structures in an NDA-protected briefing.",
    icon: FiMessageSquare,
    color: "from-blue-600 to-indigo-600"
  },
  {
    phase: "02",
    title: "100-Point Forensic Property Audit",
    desc: "Our structural and MEP engineers conduct a detailed physical inspection, benchmark local rental yields, audit active leases, and identify latent maintenance liabilities.",
    icon: FiTrendingUp,
    color: "from-emerald-500 to-teal-500"
  },
  {
    phase: "03",
    title: "Bespoke Asset Plan & Portal Setup",
    desc: "We deploy automated rent-collection channels, integrate smart telemetry sensors, establish statutory escrow accounts, and grant you access to our live client portal.",
    icon: FiLayers,
    color: "from-purple-600 to-pink-600"
  },
  {
    phase: "04",
    title: "Continuous Fiduciary Oversight & Yield Alpha",
    desc: "We collect revenues on Day 1, disburse net proceeds on Day 6, field 24/7 technical emergencies, and optimize cap rates to maximize long-term asset appreciation.",
    icon: FiActivity,
    color: "from-rose-500 to-amber-500"
  }
];

export default function WorkProcess() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-bold tracking-[0.25em] text-secondary uppercase block mb-3">
            Onboarding Protocol
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-primary mb-5 tracking-tight">
            How We Take Your Assets Under Care
          </h2>
          <p className="text-slate-500 font-light text-sm md:text-base leading-relaxed">
            Our structured 10-day onboarding pipeline guarantees that transferring single properties or multi-million dollar portfolios is entirely seamless, compliant, and zero-downtime.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative">
          
          {/* Vertical Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-slate-200 -translate-x-1/2 z-0" />

          {/* Timeline Cards Container */}
          <motion.div
            variants={staggerContainer(0.2, 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="flex flex-col gap-12 lg:gap-20 relative z-10"
          >
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isEven = idx % 2 === 0;

              return (
                <div 
                  key={step.phase}
                  className={`flex flex-col lg:flex-row items-center justify-between w-full gap-8 ${
                    isEven ? "" : "lg:flex-row-reverse"
                  }`}
                >
                  
                  {/* Content Box */}
                  <motion.div 
                    variants={fadeIn(isEven ? "right" : "left", "spring", idx * 0.15, 0.8)}
                    className="w-full lg:w-[46%] bg-white p-8 rounded-luxury border border-borderGray shadow-luxury text-left flex flex-col relative group hover:shadow-luxury-hover transition-all duration-300"
                  >
                    <span className={`absolute -top-4 right-6 px-3 py-1 rounded-full bg-gradient-to-tr ${step.color} text-white font-black text-xs shadow-md tracking-wider`}>
                      PHASE {step.phase}
                    </span>
                    
                    <div className="w-11 h-11 rounded-luxury-sm bg-lightGray text-primary flex items-center justify-center mb-5 font-semibold">
                      <Icon className="w-5 h-5 text-secondary" />
                    </div>

                    <h3 className="text-lg font-bold text-primary mb-3">
                      {step.title}
                    </h3>
                    
                    <p className="text-slate-500 font-light text-xs md:text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </motion.div>

                  {/* Desktop Center Indicator */}
                  <div className="hidden lg:flex w-12 h-12 rounded-full bg-white border-2 border-slate-200 shadow-luxury items-center justify-center z-20 absolute left-1/2 -translate-x-1/2">
                    <div className={`w-3.5 h-3.5 rounded-full bg-gradient-to-tr ${step.color} animate-pulse`} />
                  </div>

                  {/* Empty balancing spacer */}
                  <div className="hidden lg:block w-[46%]" />

                </div>
              );
            })}
          </motion.div>

        </div>

      </div>
    </section>
  );
}
