import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeIn, staggerContainer } from "../../animations/variants";
import { companyInfo } from "../../data/companyInfo";

function CounterNumber({ value, prefix = "", suffix = "", duration = 1.5 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const numericValue = parseInt(value, 10);

  useEffect(() => {
    if (!isInView) return;

    const totalFrames = Math.min(Math.floor(duration * 60), 90);
    let frame = 0;

    const counter = () => {
      frame++;
      const progress = frame / totalFrames;
      const current = Math.round(numericValue * (progress * (2 - progress)));
      setCount(current);

      if (frame < totalFrames) {
        requestAnimationFrame(counter);
      } else {
        setCount(numericValue);
      }
    };

    requestAnimationFrame(counter);
  }, [isInView, numericValue, duration]);

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  );
}

const statsList = [
  {
    prefix: "$",
    value: "1400",
    suffix: "M+",
    label: "Assets Under Management",
    desc: "Across residential, retail & commercial"
  },
  {
    prefix: "",
    value: "650",
    suffix: "+",
    label: "Trophy Properties Managed",
    desc: "Single villas, towers, and estates"
  },
  {
    prefix: "",
    value: "99",
    suffix: ".4%",
    label: "Average Portfolio Occupancy",
    desc: "Industry-leading tenant retention"
  },
  {
    prefix: "",
    value: "14",
    suffix: "+",
    label: "Years Fiduciary Leadership",
    desc: "Operating in New York, London & Dubai"
  }
];

export default function StatsSection() {
  return (
    <section className="py-20 bg-primary text-white relative overflow-hidden">
      
      {/* Background radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(37,99,235,0.12),transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          variants={staggerContainer(0.1, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center"
        >
          {statsList.map((stat, idx) => (
            <motion.div
              key={stat.label}
              variants={fadeIn("up", "spring", idx * 0.1, 0.6)}
              className="flex flex-col items-center text-center"
            >
              <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white mb-2.5">
                <CounterNumber prefix={stat.prefix} value={stat.value} suffix={stat.suffix} />
              </h3>
              <p className="text-xs sm:text-sm font-bold text-accent mb-2 uppercase tracking-widest">
                {stat.label}
              </p>
              <p className="text-[11px] sm:text-xs text-slate-400 font-light max-w-[220px]">
                {stat.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
