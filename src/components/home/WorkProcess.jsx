import React from "react";
import { motion } from "framer-motion";
import { FiMessageSquare, FiTrendingUp, FiLayers, FiActivity } from "react-icons/fi";
import { fadeIn, staggerContainer } from "../../animations/variants";

const steps = [
  {
    phase: "01",
    title: "Initial Consultation",
    desc: "We discuss your real estate portfolio goals, tenancy challenges, and identify key maintenance needs.",
    icon: FiMessageSquare,
    color: "from-blue-500 to-indigo-500"
  },
  {
    phase: "02",
    title: "Property Evaluation",
    desc: "Our field team conducts a detailed visual inspection, analyzes rental yields, and benchmarks local pricing.",
    icon: FiTrendingUp,
    color: "from-emerald-500 to-teal-500"
  },
  {
    phase: "03",
    title: "Bespoke Management Plan",
    desc: "We draft custom lease structures, setup digital portals, configure tenant utilities, and finalize security rules.",
    icon: FiLayers,
    color: "from-purple-500 to-pink-500"
  },
  {
    phase: "04",
    title: "Ongoing Support & Yield Optimization",
    desc: "We collect rent, field emergency fixes, review building compliance, and report cash flows monthly.",
    icon: FiActivity,
    color: "from-rose-500 to-amber-500"
  }
];

export default function WorkProcess() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs font-bold tracking-[0.2em] text-secondary uppercase block mb-3">
            Our Strategy
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-5">
            How We Operate
          </h2>
          <p className="text-slate-500 font-light text-sm md:text-base leading-relaxed">
            Our structured onboarding pipeline ensures your real estate transition is completely seamless, structured, and compliant.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative">
          
          {/* Vertical Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-slate-100 -translate-x-1/2 z-0" />

          {/* Timeline Cards container */}
          <motion.div
            variants={staggerContainer(0.2, 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="flex flex-col gap-12 lg:gap-24 relative z-10"
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
                    className="w-full lg:w-[45%] bg-white p-8 rounded-luxury border border-borderGray shadow-luxury text-left flex flex-col relative group hover:shadow-luxury-hover transition-all duration-300 interactive-card"
                  >
                    <span className={`absolute -top-5 right-6 w-10 h-10 rounded-full bg-gradient-to-tr ${step.color} text-white flex items-center justify-center font-bold text-sm shadow-md`}>
                      {step.phase}
                    </span>
                    <div className="w-10 h-10 rounded-luxury-sm bg-lightGray text-primary flex items-center justify-center mb-6 font-semibold">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-primary mb-3">
                      {step.title}
                    </h3>
                    <p className="text-slate-500 font-light text-xs md:text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </motion.div>

                  {/* Desktop Bullet Indicator */}
                  <div className="hidden lg:flex w-12 h-12 rounded-full bg-white border border-borderGray shadow-luxury items-center justify-center z-20 absolute left-1/2 -translate-x-1/2">
                    <div className={`w-3.5 h-3.5 rounded-full bg-gradient-to-tr ${step.color} animate-pulse`} />
                  </div>

                  {/* Empty space for grid balancing */}
                  <div className="hidden lg:block w-[45%]" />

                </div>
              );
            })}
          </motion.div>

        </div>

      </div>
    </section>
  );
}
