import React, { useEffect } from "react";
import Hero from "../components/home/Hero";
import AboutSection from "../components/home/AboutSection";
import ServicesSection from "../components/home/ServicesSection";
import StatsSection from "../components/home/StatsSection";
import PropertiesSection from "../components/home/PropertiesSection";
import WhyChooseUs from "../components/home/WhyChooseUs";
import WorkProcess from "../components/home/WorkProcess";
import Testimonials from "../components/home/Testimonials";
import FaqSection from "../components/home/FaqSection";

export default function Home() {
  // Ensure view scroll is reset on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full">
      <Hero />
      <AboutSection />
      <ServicesSection />
      <StatsSection />
      <PropertiesSection />
      <WhyChooseUs />
      <WorkProcess />
      <Testimonials />
      <FaqSection />
    </div>
  );
}
