import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiCheckCircle, FiTarget, FiEye } from "react-icons/fi";
import { fadeIn, staggerContainer } from "../../animations/variants";

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
                src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80" 
                alt="Luxury House Interior" 
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Overlapping Secondary Image */}
            <motion.div
              variants={fadeIn("up", "tween", 0.4, 0.8)}
              className="absolute right-0 bottom-6 w-1/2 h-3/5 rounded-luxury overflow-hidden shadow-luxury-hover border-4 border-white z-20"
            >
              <img 
                src="https://images.unsplash.com/photo-1541829019-259275a528f3?auto=format&fit=crop&w=600&q=80" 
                alt="Modern Architecture" 
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Floating Trust Badge */}
            <motion.div
              variants={fadeIn("left", "tween", 0.6, 0.6)}
              className="absolute left-6 bottom-12 z-30 p-5 bg-primary text-white rounded-luxury shadow-luxury border border-slate-800 flex flex-col items-center justify-center text-center w-36 h-36"
            >
              <span className="text-3xl font-extrabold text-accent">10+</span>
              <span className="text-xs font-light text-slate-300 uppercase tracking-widest mt-2 leading-tight">
                Years of Trust
              </span>
            </motion.div>

          </div>

          {/* Text Content Side */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            
            <motion.span
              variants={fadeIn("up", "tween", 0.1, 0.5)}
              className="text-xs font-bold tracking-[0.2em] text-secondary uppercase mb-3"
            >
              About Shan Property
            </motion.span>

            <motion.h2
              variants={fadeIn("up", "tween", 0.2, 0.5)}
              className="text-3xl md:text-4xl font-extrabold text-primary mb-6 leading-tight"
            >
              We Manage Luxury Assets With Utmost Care
            </motion.h2>

            <motion.p
              variants={fadeIn("up", "tween", 0.3, 0.5)}
              className="text-slate-600 text-sm md:text-base font-light leading-relaxed mb-8"
            >
              Shan Property is a premier property management and real estate agency dedicated to maximizing investor yields, maintaining structural value, and delivering premium tenant experiences. We operate with radical transparency and cutting-edge digital portals.
            </motion.p>

            {/* Mission & Vision Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full mb-10">
              
              <motion.div
                variants={fadeIn("up", "tween", 0.4, 0.5)}
                className="p-5 bg-lightGray rounded-luxury border border-borderGray flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                  <FiTarget className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-primary text-sm mb-1.5">Our Mission</h4>
                  <p className="text-xs text-slate-500 font-light leading-relaxed">
                    To deliver stress-free management, protect landlord capital, and foster vibrant tenant communities.
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={fadeIn("up", "tween", 0.5, 0.5)}
                className="p-5 bg-lightGray rounded-luxury border border-borderGray flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0">
                  <FiEye className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-primary text-sm mb-1.5">Our Vision</h4>
                  <p className="text-xs text-slate-500 font-light leading-relaxed">
                    To define the international benchmark for luxury, automated real estate and management services.
                  </p>
                </div>
              </motion.div>

            </div>

            {/* Quick checkmarks list */}
            <div className="flex flex-col gap-3 mb-10">
              {[
                "Radical transparency with client dashboards",
                "Fully certified plumbing, electrical, and structural technicians",
                "Digital rent transfers and instant escrow notifications"
              ].map((text, idx) => (
                <motion.div
                  variants={fadeIn("up", "tween", 0.6 + idx * 0.1, 0.4)}
                  key={idx}
                  className="flex items-center gap-3 text-sm text-primary font-medium"
                >
                  <FiCheckCircle className="w-5 h-5 text-accent shrink-0" />
                  <span>{text}</span>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeIn("up", "tween", 0.9, 0.5)}>
              <Link to="/about">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-primary text-white text-sm font-semibold rounded-luxury shadow-luxury hover:bg-secondary transition-all"
                >
                  Read Full Company Story
                </motion.button>
              </Link>
            </motion.div>

          </div>

        </motion.div>
      </div>
    </section>
  );
}
