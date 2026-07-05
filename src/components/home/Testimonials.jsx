import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import { AiFillStar } from "react-icons/ai";
import { testimonialsData } from "../../data/testimonialsData";

// Swiper core styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Testimonials() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-[0.2em] text-secondary uppercase block mb-3">
            Client Reviews
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-5">
            What Our Clients Say
          </h2>
          <p className="text-slate-500 font-light text-sm md:text-base leading-relaxed">
            We are dedicated to building long-term relationships through professional execution and transparent asset management.
          </p>
        </div>

        {/* Testimonials Slider */}
        <div className="max-w-4xl mx-auto relative px-4 md:px-12">
          <Swiper
            modules={[Pagination, Autoplay, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 5000,
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
                <motion.div 
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="bg-lightGray border border-borderGray p-8 md:p-12 rounded-luxury text-center flex flex-col items-center shadow-luxury"
                >
                  
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1 mb-6 text-amber-500">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <AiFillStar key={i} className="w-5 h-5" />
                    ))}
                  </div>

                  {/* Review Text */}
                  <blockquote className="text-base md:text-lg text-primary font-light italic leading-relaxed mb-8 max-w-2xl">
                    "{testimonial.review}"
                  </blockquote>

                  {/* Client Photo and details */}
                  <div className="flex items-center gap-4 mt-2">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full object-cover border border-borderGray shadow-sm shrink-0"
                    />
                    <div className="text-left">
                      <h4 className="font-bold text-primary text-sm md:text-base leading-tight">
                        {testimonial.name}
                      </h4>
                      <p className="text-xs text-slate-400 font-light mt-0.5">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>

                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
}
