import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import { AiFillStar } from "react-icons/ai";
import { FiCheck, FiMapPin } from "react-icons/fi";
import { testimonialsData } from "../../data/testimonialsData";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Testimonials() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-[0.25em] text-secondary uppercase block mb-3">
            Client Endorsements
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-primary mb-5 tracking-tight">
            Trusted by Discerning Asset Owners
          </h2>
          <p className="text-slate-500 font-light text-sm md:text-base leading-relaxed">
            Read why international family offices, high-net-worth homeowners, and real estate investment funds choose our fiduciary care.
          </p>
        </div>

        {/* Testimonials Slider */}
        <div className="max-w-4xl mx-auto relative px-4 md:px-10">
          <Swiper
            modules={[Pagination, Autoplay, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={true}
            className="pb-16"
          >
            {testimonialsData.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="bg-lightGray border border-borderGray p-8 md:p-12 rounded-luxury text-center flex flex-col items-center shadow-luxury">
                  
                  {/* Verified Badge & Rating Stars */}
                  <div className="flex flex-col sm:flex-row items-center gap-3 mb-6">
                    <div className="flex items-center gap-1 text-amber-500">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <AiFillStar key={i} className="w-5 h-5" />
                      ))}
                    </div>
                    {testimonial.verified && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-emerald-100 text-emerald-800 text-[10px] font-bold rounded-full uppercase tracking-wider">
                        <FiCheck className="w-3 h-3 text-emerald-600" />
                        Verified Portfolio Owner
                      </span>
                    )}
                  </div>

                  {/* Review Text */}
                  <blockquote className="text-base sm:text-lg md:text-xl text-primary font-light italic leading-relaxed mb-8 max-w-2xl">
                    "{testimonial.review}"
                  </blockquote>

                  {/* Client Photo and Details */}
                  <div className="flex items-center gap-4 mt-2">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-md shrink-0"
                    />
                    <div className="text-left">
                      <h4 className="font-bold text-primary text-sm sm:text-base leading-tight">
                        {testimonial.name}
                      </h4>
                      <p className="text-xs text-secondary font-semibold mt-0.5">
                        {testimonial.role}
                      </p>
                      <p className="text-[11px] text-slate-400 font-light flex items-center gap-1 mt-0.5">
                        <FiMapPin className="w-3 h-3 text-slate-400" />
                        {testimonial.location} • <span className="font-medium text-slate-600">{testimonial.portfolioManaged}</span>
                      </p>
                    </div>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
}
