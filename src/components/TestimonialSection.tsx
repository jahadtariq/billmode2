import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore  from "swiper";
import { Autoplay } from "swiper/modules";
import { Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { Link } from "react-router-dom";

import { testimonialsData } from "../constants";

SwiperCore.use([Autoplay]);
SwiperCore.use([Navigation, Pagination]);


const TestimonialSection = () => {
  return (
    <section className="mt-16 min-h-screen w-full flex flex-col gap-10 items-center p-4 md:p-16 overflow-hidden">
          <div className="uppercase text-center flex flex-col text-[35px] leading-[35px] md:text-[60px] md:leading-[60px] lg:text-[76px] lg:leading-[76px] font-extralight lg:mb-6">words from <span className="font-bold">Our Clients</span></div>
          <Swiper
            loop={true}
            autoplay={{ delay: 3000 }}
            navigation={true}
            grabCursor={true}
            pagination={true}
            className="mySwiper w-full h-full pb-16"
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 32,
              },
              860: {
                slidesPerView: 2,
                spaceBetween: 32,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 32,
              },
            }}
          >
            {testimonialsData.map((testimonial)=>(
                <SwiperSlide className="bg-white/50 backdrop-blur-lg w-[510px] h-contain rounded-xl text-[#000] flex flex-col gap-2 px-4 py-8 hover:bg-white/20 hover:backdrop-blur-sm hover:text-white transition-colors duration-500 ease-in-out">
                    <img src={testimonial.image} className="bg-[#1E50FF] p-2 w-12 h-12 flex items-center justify-center rounded-full"/>
                    <h1 className="text-[16px] font-medium">{testimonial.name}</h1>
                    <h1 className="text-[14px] font-regular">{testimonial.company}</h1>
                    <p className="text-[16px] font-regular">{testimonial.message}</p>
                </SwiperSlide>
            ))}
          </Swiper>
        </section>
  )
}

export default TestimonialSection;