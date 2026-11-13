import React from "react";
import { motion } from "framer-motion";
import { FiUsers, FiAward, FiEye, FiDollarSign, FiClock, FiActivity, FiBriefcase, FiSmile } from "react-icons/fi";
import { fadeIn, staggerContainer } from "../../animations/variants";
import { companyInfo } from "../../data/companyInfo";

const features = [
  {
    title: "Institutional Fiduciary Care",
    desc: "Rigorous fiduciary standards and audited controls designed to safeguard capital and maximize net asset value.",
    icon: FiAward,
    color: "bg-blue-500/10 text-blue-500"
  },
  {
    title: "Vetted Executive Leadership",
    desc: "Senior property partners with over a decade of cross-border real estate experience in prime international markets.",
    icon: FiUsers,
    color: "bg-emerald-500/10 text-emerald-500"
  },
  {
    title: "Radical Accounting Transparency",
    desc: "Real-time client portal with itemized ledgers, automated bank disbursements on Day 6, and clean CPA tax packs.",
    icon: FiEye,
    color: "bg-purple-500/10 text-purple-500"
  },
  {
    title: "Performance-Aligned Fees",
    desc: "Transparent fees tied directly to collected rental revenue with zero hidden setup, renewal, or onboarding charges.",
    icon: FiDollarSign,
    color: "bg-amber-500/10 text-amber-500"
  },
  {
    title: "Rapid Emergency Response",
    desc: "Under 45-minute guaranteed technician dispatch for emergency water, electrical, or structural incidents.",
    icon: FiClock,
    color: "bg-rose-500/10 text-rose-500"
  },
  {
    title: "24/7 Concierge & Engineering",
    desc: "Round-the-clock bilingual emergency dispatch and private resident concierge desks in New York and London.",
    icon: FiActivity,
    color: "bg-cyan-500/10 text-cyan-500"
  },
  {
    title: "Triple-Bureau Tenant Vetting",
    desc: "Forensic background screening, employment verification, and verified asset audits to ensure zero rent default.",
    icon: FiBriefcase,
    color: "bg-indigo-500/10 text-indigo-500"
  },
  {
    title: "98.7% Client Retention",
    desc: "Trusted by prominent family offices, private estate owners, and international institutional real estate funds.",
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
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-[0.25em] text-secondary uppercase block mb-3">
            Why Discerning Owners Choose Us
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-primary mb-5 tracking-tight">
            The {companyInfo.name} Standard
          </h2>
          <p className="text-slate-500 font-light text-sm md:text-base leading-relaxed">
            We merge institutional real estate engineering with private wealth concierge services to ensure your properties perform at peak efficiency while you remain entirely hands-off.
          </p>
        </div>

        {/* Feature Grid */}
        <motion.div
          variants={staggerContainer(0.06, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                variants={fadeIn("up", "spring", idx * 0.06, 0.6)}
                whileHover={{ 
                  y: -6,
                  borderColor: "rgba(37,99,235,0.2)",
                  boxShadow: "0 15px 30px -10px rgba(15,23,42,0.06)"
                }}
                className="bg-white p-6 rounded-luxury border border-borderGray transition-all duration-300 flex flex-col items-start text-left"
              >
                <div className={`w-11 h-11 rounded-luxury-sm ${feature.color} flex items-center justify-center mb-5 shrink-0`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-primary mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-500 font-light text-xs leading-relaxed">
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
