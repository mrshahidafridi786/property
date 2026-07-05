import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeIn, staggerContainer } from "../../animations/variants";

// Reusable Counter Sub-Component
function CounterNumber({ value, suffix = "", duration = 1.5 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const numericValue = parseInt(value, 10);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = numericValue;
    const totalFrames = Math.min(Math.floor(duration * 60), 100);
    let frame = 0;

    const counter = () => {
      frame++;
      const progress = frame / totalFrames;
      // Ease out quad
      const current = Math.round(end * (progress * (2 - progress)));
      setCount(current);

      if (frame < totalFrames) {
        requestAnimationFrame(counter);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(counter);
  }, [isInView, numericValue, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

const stats = [
  {
    value: "500",
    suffix: "+",
    label: "Properties Managed",
    desc: "Single units, blocks, and office towers"
  },
  {
    value: "1000",
    suffix: "+",
    label: "Happy Clients",
    desc: "Landlords and corporate partners"
  },
  {
    value: "20",
    suffix: "+",
    label: "Professional Services",
    desc: "A comprehensive end-to-end suite"
  },
  {
    value: "10",
    suffix: "+",
    label: "Years Experience",
    desc: "Guiding real estate assets to growth"
  }
];

export default function StatsSection() {
  return (
    <section className="py-20 bg-primary text-white relative overflow-hidden">
      
      {/* Background visual styles */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(37,99,235,0.08),transparent_50%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          variants={staggerContainer(0.1, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center"
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              variants={fadeIn("up", "spring", idx * 0.1, 0.6)}
              className="flex flex-col items-center"
            >
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-3">
                <CounterNumber value={stat.value} suffix={stat.suffix} />
              </h3>
              <p className="text-sm font-bold text-accent mb-2 uppercase tracking-widest">
                {stat.label}
              </p>
              <p className="text-xs text-slate-400 font-light max-w-[200px]">
                {stat.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
