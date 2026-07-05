import React from "react";
import { motion } from "framer-motion";
import { FiUsers, FiAward, FiEye, FiDollarSign, FiClock, FiActivity, FiBriefcase, FiSmile } from "react-icons/fi";
import { fadeIn, staggerContainer } from "../../animations/variants";

const features = [
  {
    title: "Professional Team",
    desc: "Vetted real estate professionals dedicated to protecting your property assets.",
    icon: FiUsers,
    color: "bg-blue-500/10 text-blue-500"
  },
  {
    title: "Trusted Company",
    desc: "A solid reputation built on reliability, local compliance, and high client retention.",
    icon: FiAward,
    color: "bg-emerald-500/10 text-emerald-500"
  },
  {
    title: "Transparent Process",
    desc: "Radical clarity on budgets, transactions, maintenance requests, and payouts.",
    icon: FiEye,
    color: "bg-purple-500/10 text-purple-500"
  },
  {
    title: "Affordable Pricing",
    desc: "Competitive management tiers that align with your cash flows with zero hidden fees.",
    icon: FiDollarSign,
    color: "bg-amber-500/10 text-amber-500"
  },
  {
    title: "Fast Response",
    desc: "Rapid response times on tenant requests, vendor bookings, and landlord queries.",
    icon: FiClock,
    color: "bg-rose-500/10 text-rose-500"
  },
  {
    title: "24/7 Support",
    desc: "Around-the-clock emergency support dispatch for structural, water, or safety failures.",
    icon: FiActivity,
    color: "bg-cyan-500/10 text-cyan-500"
  },
  {
    title: "Experienced Staff",
    desc: "Years of specialized property management training in Pakistan real estate market.",
    icon: FiBriefcase,
    color: "bg-indigo-500/10 text-indigo-500"
  },
  {
    title: "Customer Satisfaction",
    desc: "Consistently rated 5 stars by landlords, commercial partners, and tenants alike.",
    icon: FiSmile,
    color: "bg-teal-500/10 text-teal-500"
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-lightGray relative overflow-hidden">
      
      {/* Decorative Blob */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[120px] translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-[0.2em] text-secondary uppercase block mb-3">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-5">
            The Shan Property Advantage
          </h2>
          <p className="text-slate-500 font-light text-sm md:text-base leading-relaxed">
            We merge luxury estate expertise with smart property automation to deliver unmatched peace of mind for landlords and premium convenience for tenants.
          </p>
        </div>

        {/* Feature Grid */}
        <motion.div
          variants={staggerContainer(0.08, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                variants={fadeIn("up", "spring", idx * 0.08, 0.6)}
                whileHover={{ 
                  y: -8,
                  borderColor: "rgba(37,99,235,0.15)",
                  boxShadow: "0 15px 30px -10px rgba(15,23,42,0.05)"
                }}
                className="bg-white p-6 rounded-luxury border border-borderGray transition-all duration-300 flex flex-col items-start text-left interactive-card"
              >
                <div className={`w-12 h-12 rounded-luxury-sm ${feature.color} flex items-center justify-center mb-6 shrink-0`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-primary mb-2.5">
                  {feature.title}
                </h3>
                <p className="text-slate-500 font-light text-xs md:text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
