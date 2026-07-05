import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { FiAward, FiShield, FiHeart } from "react-icons/fi";
import { fadeIn, staggerContainer } from "../animations/variants";

const teamMembers = [
  {
    name: "Ali Shan",
    role: "Founder & Managing Director",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80",
    bio: "Over 12 years of executive asset management leadership in international and regional real estate developments."
  },
  {
    name: "Zainab Shah",
    role: "Luxury Residential Consultant",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
    bio: "Specialist in prime beachfront, penthouse configurations, and short-term luxury lease marketing."
  },
  {
    name: "Bilal Ahmad",
    role: "Commercial Assets Expert",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80",
    bio: "Focuses on industrial zoning contracts, retail developments, triple-net commercial leases, and valuation models."
  }
];

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full">
      
      {/* Banner Header */}
      <section className="relative h-[300px] md:h-[400px] bg-primary flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80')` }}
        />
        <div className="relative z-10 text-center max-w-2xl px-6">
          <motion.h1 
            initial={{ opacity: 0, filter: "blur(10px)", y: 30 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4"
          >
            About Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-sm md:text-base text-slate-300 font-light"
          >
            Guiding your real estate assets with professionalism, transparency, and modern asset management technology.
          </motion.p>
        </div>
      </section>

      {/* Main narrative */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 text-left"
          >
            <span className="text-xs font-bold tracking-[0.2em] text-secondary uppercase block mb-3">Our Core Philosophy</span>
            <h2 className="text-3xl font-extrabold text-primary mb-6 leading-snug">
              Uncompromising Quality in Asset Upkeep and Client Trust
            </h2>
            <p className="text-slate-600 text-sm md:text-base font-light leading-relaxed mb-6">
              Founded by Ali Shan, Shan Property has grown from a specialized residential support agency into a prominent property management firm. We understand that real estate is one of the most significant capital investments a person can make. That is why we operate with a fiduciary mindset, ensuring absolute compliance and strict maintenance.
            </p>
            <p className="text-slate-600 text-sm md:text-base font-light leading-relaxed mb-8">
              We leverage modern digital rent rolls, on-site utility integrations, and rigorous contractor screening to remove operational stress for property owners while safeguarding their equity valuation.
            </p>

            <div className="flex flex-col gap-6">
              {[
                { title: "Highest Standards", desc: "We enforce strict checklists for inspections and repair schedules.", icon: FiAward },
                { title: "Secure Payouts", desc: "Automated direct deposit clearances on the 5th of each month.", icon: FiShield },
                { title: "Care for Tenants", desc: "Prompt responses that maintain lease loyalty and minimize vacancies.", icon: FiHeart }
              ].map((val, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                    <val.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary text-sm mb-1">{val.title}</h4>
                    <p className="text-xs text-slate-500 font-light leading-relaxed">{val.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </motion.div>

          {/* Side visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative rounded-luxury overflow-hidden shadow-luxury-hover aspect-[4/3] border border-borderGray"
          >
            <img 
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80" 
              alt="Luxury Estate Frontage" 
              className="w-full h-full object-cover"
            />
          </motion.div>

        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-24 bg-lightGray border-t border-borderGray">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          
          <div className="max-w-xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-[0.2em] text-secondary uppercase block mb-3">Our Directors</span>
            <h2 className="text-3xl font-extrabold text-primary mb-4">Leadership Team</h2>
            <p className="text-slate-500 font-light text-xs md:text-sm">
              Meet the executive professionals responsible for protecting your assets and coordinating daily operations.
            </p>
          </div>

          <motion.div 
            variants={staggerContainer(0.15, 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {teamMembers.map((member, idx) => (
              <motion.div
                key={member.name}
                variants={fadeIn("up", "spring", idx * 0.15, 0.6)}
                whileHover={{ y: -8 }}
                className="bg-white p-8 rounded-luxury border border-borderGray shadow-sm hover:shadow-luxury transition-all duration-300 flex flex-col items-center text-center interactive-card"
              >
                <div className="w-24 h-24 rounded-full overflow-hidden mb-6 border border-borderGray shadow-sm relative group">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-bold text-primary text-base mb-1">{member.name}</h3>
                <p className="text-xs font-semibold text-secondary mb-4 uppercase tracking-wider">{member.role}</p>
                <p className="text-xs text-slate-500 font-light leading-relaxed max-w-xs">{member.bio}</p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

    </div>
  );
}
