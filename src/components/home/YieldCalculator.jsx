import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiTrendingUp, FiDollarSign, FiShield, FiPercent, FiArrowRight } from "react-icons/fi";
import { companyInfo } from "../../data/companyInfo";

export default function YieldCalculator() {
  const [monthlyRent, setMonthlyRent] = useState(15000); // Default $15,000/mo
  const [managementTier, setManagementTier] = useState("premium"); // 'essential' (6.5%) or 'premium' (7.5%) or 'private' (8.5%)

  const feePercentages = {
    essential: 0.065,
    premium: 0.075,
    private: 0.085
  };

  const currentFeePct = feePercentages[managementTier];
  const monthlyFee = Math.round(monthlyRent * currentFeePct);
  const netMonthlyIncome = monthlyRent - monthlyFee;
  const annualNetIncome = netMonthlyIncome * 12;
  const estimatedTaxDepreciation = Math.round(monthlyRent * 12 * 0.22);
  const projectedExtraRevenueAura = Math.round(monthlyRent * 0.073 * 12); // +7.3% extra occupancy vs industry average

  return (
    <section className="py-24 bg-white relative overflow-hidden border-y border-borderGray">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-[0.25em] text-secondary uppercase block mb-3">
            Portfolio Yield Calculator
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-primary mb-5 tracking-tight">
            Transparent Pricing. Measurable Alpha.
          </h2>
          <p className="text-slate-500 font-light text-sm md:text-base leading-relaxed">
            Estimate your net monthly cash flows and discover how {companyInfo.name}’s 99.4% occupancy rate and master vendor discounts deliver higher net returns than self-management or traditional brokers.
          </p>
        </div>

        {/* Calculator Main Box */}
        <div className="max-w-5xl mx-auto bg-lightGray rounded-luxury-lg border border-borderGray shadow-luxury p-8 md:p-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Controls Side */}
            <div className="lg:col-span-6 flex flex-col gap-8 text-left">
              
              {/* Slider Input */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Monthly Rental Income per Property
                  </label>
                  <span className="text-2xl font-extrabold text-primary">
                    ${monthlyRent.toLocaleString()}
                    <span className="text-xs text-slate-400 font-normal"> /mo</span>
                  </span>
                </div>

                <input
                  type="range"
                  min="3000"
                  max="75000"
                  step="1000"
                  value={monthlyRent}
                  onChange={(e) => setMonthlyRent(Number(e.target.value))}
                  className="w-full h-2 bg-slate-300 rounded-lg appearance-none cursor-pointer accent-secondary"
                />

                <div className="flex justify-between text-[11px] text-slate-400 mt-2 font-medium">
                  <span>$3,000 /mo</span>
                  <span>$25,000 /mo</span>
                  <span>$50,000 /mo</span>
                  <span>$75,000+ /mo</span>
                </div>
              </div>

              {/* Management Tier Selector */}
              <div>
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-3">
                  Select Management Scope
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { id: "essential", label: "Essential", fee: "6.5%", desc: "Leasing & Rent" },
                    { id: "premium", label: "Executive", fee: "7.5%", desc: "Full 24/7 Fiduciary" },
                    { id: "private", label: "Private Office", fee: "8.5%", desc: "Bespoke Concierge" }
                  ].map((tier) => (
                    <button
                      key={tier.id}
                      onClick={() => setManagementTier(tier.id)}
                      className={`p-3.5 rounded-luxury-sm text-left border transition-all duration-300 ${
                        managementTier === tier.id
                          ? "bg-primary text-white border-primary shadow-md"
                          : "bg-white text-slate-600 border-borderGray hover:border-slate-300"
                      }`}
                    >
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-xs font-bold">{tier.label}</span>
                        <span className={`text-[10px] font-extrabold px-1.5 py-0.5 rounded ${
                          managementTier === tier.id ? "bg-accent text-primary" : "bg-slate-100 text-slate-600"
                        }`}>{tier.fee}</span>
                      </div>
                      <p className={`text-[10px] leading-tight ${managementTier === tier.id ? "text-slate-300" : "text-slate-400"}`}>
                        {tier.desc}
                      </p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-200">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-accent/15 flex items-center justify-center text-accent shrink-0">
                    <FiShield className="w-4 h-4" />
                  </div>
                  <span className="text-xs text-slate-600 font-medium">Zero Setup or Onboarding Fees</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-secondary/15 flex items-center justify-center text-secondary shrink-0">
                    <FiTrendingUp className="w-4 h-4" />
                  </div>
                  <span className="text-xs text-slate-600 font-medium">99.4% Verified Occupancy Rate</span>
                </div>
              </div>

            </div>

            {/* Results Side */}
            <div className="lg:col-span-6 bg-white p-8 rounded-luxury border border-borderGray shadow-luxury-hover flex flex-col justify-between text-left relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-2xl pointer-events-none" />

              <div>
                <span className="text-[11px] font-bold text-secondary uppercase tracking-widest block mb-2">
                  Projected Net Owner Distribution
                </span>
                
                <div className="mb-6">
                  <h3 className="text-4xl md:text-5xl font-black text-primary tracking-tight">
                    ${netMonthlyIncome.toLocaleString()}
                    <span className="text-sm font-medium text-slate-400"> /month</span>
                  </h3>
                  <p className="text-xs text-accent font-semibold mt-1">
                    ≈ ${annualNetIncome.toLocaleString()} net annual distribution
                  </p>
                </div>

                {/* Breakdown List */}
                <div className="flex flex-col gap-3 py-5 border-y border-borderGray text-xs">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500 font-medium">Gross Rental Collection</span>
                    <span className="font-bold text-primary">${monthlyRent.toLocaleString()} /mo</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500 font-medium">{companyInfo.name} Management Fee ({(currentFeePct * 100).toFixed(1)}%)</span>
                    <span className="font-bold text-rose-500">-${monthlyFee.toLocaleString()} /mo</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500 font-medium">Est. Extra Annual Cashflow from 99.4% Occupancy</span>
                    <span className="font-bold text-accent">+${projectedExtraRevenueAura.toLocaleString()} /yr</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500 font-medium">Est. Annual Tax Depreciations</span>
                    <span className="font-bold text-secondary">~${estimatedTaxDepreciation.toLocaleString()} /yr</span>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="mt-8">
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 bg-primary text-white font-bold text-xs rounded-luxury shadow-luxury hover:bg-secondary transition-all flex items-center justify-center gap-2"
                  >
                    <span>Request Full Portfolio Pro Forma</span>
                    <FiArrowRight className="w-4 h-4" />
                  </motion.button>
                </Link>
                <p className="text-[11px] text-slate-400 text-center mt-2 font-light">
                  Direct consultation with an Aura Crest Managing Director. Confidential & NDA-compliant.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
