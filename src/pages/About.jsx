import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiAward, FiShield, FiHeart, FiMapPin, FiMail, FiPhone } from "react-icons/fi";
import { fadeIn, staggerContainer } from "../animations/variants";
import { companyInfo } from "../data/companyInfo";

const leadershipTeam = [
  {
    name: "Julian Montgomery",
    role: "Founder & Chief Executive Officer",
    location: "New York & Beverly Hills",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
    bio: "Former Managing Director at a premier private wealth asset management firm. Over 18 years overseeing landmark trophy developments and ultra-high-net-worth estate portfolios worldwide."
  },
  {
    name: "Elena Rostova",
    role: "Senior Partner, Manhattan Private Wealth",
    location: "New York",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
    bio: "Specializes in luxury penthouses, co-op board navigations, and discrete private off-market matchmaking across Manhattan, the Hamptons, and South Florida."
  },
  {
    name: "Marcus Sterling",
    role: "Head of European Residential Assets",
    location: "London & Lake Como",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80",
    bio: "Leads European asset stewardship covering historic Grade-II listed Mayfair mansions, Lake Como waterfront estates, and prime Alpine chalets."
  },
  {
    name: "Sophia Vance",
    role: "Managing Director, Middle East & Gulf",
    location: "Dubai",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    bio: "Directs Gulf client operations, sovereign real estate allocations, and high-yield signature coastal villa acquisitions across the UAE."
  }
];

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full">
      
      {/* Banner Header */}
      <section className="relative h-[340px] md:h-[440px] bg-primary flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 scale-105"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2100&q=80')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-primary/30" />
        
        <div className="relative z-10 text-center max-w-3xl px-6">
          <span className="text-xs font-bold tracking-[0.3em] text-accent uppercase block mb-3">
            Institutional Pedigree
          </span>
          <motion.h1 
            initial={{ opacity: 0, filter: "blur(10px)", y: 25 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight mb-4"
          >
            About {companyInfo.name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.85 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-sm sm:text-base text-slate-300 font-light leading-relaxed max-w-2xl mx-auto"
          >
            Fiduciary stewardship, institutional transparency, and discrete white-glove care for premier real estate assets globally.
          </motion.p>
        </div>
      </section>

      {/* Main Narrative Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 text-left"
          >
            <span className="text-xs font-bold tracking-[0.25em] text-secondary uppercase block mb-3">
              Our Heritage & Philosophy
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-primary mb-6 leading-tight tracking-tight">
              A Fiduciary Approach to Luxury Real Estate
            </h2>
            <p className="text-slate-600 text-sm md:text-base font-light leading-relaxed mb-6">
              Founded in Manhattan to serve international family offices and discerning private estate owners, {companyInfo.name} was established on a single core belief: prime real estate represents irreplaceable equity and generational wealth, and it must be managed with institutional rigor.
            </p>
            <p className="text-slate-600 text-sm md:text-base font-light leading-relaxed mb-8">
              We reject the volume-driven, hands-off brokerage model. Instead, our managing directors limit client ratios to maintain deep personal oversight of every building system, lease covenant, and capital expenditure. Today, we oversee more than {companyInfo.stats.assetsUnderManagement} across New York, London, Beverly Hills, and Dubai.
            </p>

            <div className="flex flex-col gap-6">
              {[
                { 
                  title: "Institutional Fiduciary Duty", 
                  desc: "We operate with total fiduciary accountability, zero kickbacks, and strict auditing of all vendor expenditures.", 
                  icon: FiAward 
                },
                { 
                  title: "Automated Banking & Transparency", 
                  desc: "Encrypted ACH and multi-currency wire transfers on Day 6 of every calendar month with complete CPA-ready reconciliations.", 
                  icon: FiShield 
                },
                { 
                  title: "Private Client Discretion", 
                  desc: "Complete non-disclosure protections, confidential lease signings, and discrete tenant liaison protocols.", 
                  icon: FiHeart 
                }
              ].map((val, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary shrink-0 mt-0.5">
                    <val.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary text-sm mb-1">{val.title}</h4>
                    <p className="text-xs text-slate-500 font-light leading-relaxed">{val.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </motion.div>

          {/* Side Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative rounded-luxury overflow-hidden shadow-luxury-hover aspect-[4/3] border border-borderGray"
          >
            <img 
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80" 
              alt="Aura Crest Architecture" 
              className="w-full h-full object-cover"
            />
          </motion.div>

        </div>
      </section>

      {/* Global Presence Hubs */}
      <section className="py-20 bg-lightGray border-y border-borderGray">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-[0.25em] text-secondary uppercase block mb-3">
              Strategic Coverage
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-primary mb-4 tracking-tight">
              Global Office Network
            </h2>
            <p className="text-slate-500 font-light text-xs md:text-sm">
              Local market expertise backed by global capital connectivity in the world's most desirable real estate epicenters.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyInfo.regionalOffices.map((office) => (
              <div 
                key={office.id}
                className="bg-white rounded-luxury border border-borderGray overflow-hidden shadow-sm hover:shadow-luxury transition-all text-left flex flex-col"
              >
                <div className="h-40 overflow-hidden relative">
                  <img 
                    src={office.image} 
                    alt={office.name} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute bottom-3 left-3 px-2.5 py-1 bg-primary/90 text-white text-[10px] font-bold rounded-full backdrop-blur-sm">
                    {office.city}
                  </span>
                </div>
                <div className="p-5 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="font-extrabold text-primary text-sm mb-1">{office.name}</h3>
                    <p className="text-xs text-slate-500 font-light mb-3">{office.address}</p>
                  </div>
                  <div className="pt-3 border-t border-slate-100 flex flex-col gap-1 text-[11px] text-slate-500">
                    <span className="font-semibold text-primary">{office.phone}</span>
                    <span className="text-secondary">{office.email}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          
          <div className="max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-[0.25em] text-secondary uppercase block mb-3">
              Executive Leadership
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-primary mb-4 tracking-tight">
              Managing Directors
            </h2>
            <p className="text-slate-500 font-light text-xs md:text-sm">
              Meet the partners responsible for stewarding your real estate portfolios and coordinating cross-border execution.
            </p>
          </div>

          <motion.div 
            variants={staggerContainer(0.12, 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {leadershipTeam.map((member, idx) => (
              <motion.div
                key={member.name}
                variants={fadeIn("up", "spring", idx * 0.12, 0.6)}
                whileHover={{ y: -8 }}
                className="bg-lightGray p-6 rounded-luxury border border-borderGray shadow-sm hover:shadow-luxury transition-all duration-300 flex flex-col items-center text-center"
              >
                <div className="w-24 h-24 rounded-full overflow-hidden mb-5 border-2 border-white shadow-md relative">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-extrabold text-primary text-base mb-1">{member.name}</h3>
                <p className="text-[11px] font-bold text-secondary mb-1 uppercase tracking-wider">{member.role}</p>
                <p className="text-[10px] text-slate-400 font-medium mb-3">{member.location}</p>
                <p className="text-xs text-slate-600 font-light leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

    </div>
  );
}
