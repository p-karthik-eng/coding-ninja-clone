import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const VerticalSliders = () => {
  return (
    <section className="bg-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8 flex justify-center font-sans">
      <div className="max-w-6xl w-full flex flex-col lg:flex-row items-start gap-6 lg:gap-10">
        
        {/* ==== Left Content ==== */}
        <div className="w-full lg:w-auto">
          {/* Timeline Icon + Line */}
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="relative flex flex-col items-center flex-shrink-0">
              {/* Vertical Line */}
              <div className="hidden lg:block absolute top-12 bottom-0 w-[2px] bg-orange-400" style={{height: '600px'}}></div>
              {/* Icon */}
              <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-orange-100 text-orange-600 rounded-md shadow-md z-10">
                <span className="font-bold text-lg sm:text-xl">👤</span>
              </div>
            </div>
            <span className="text-gray-700 text-base sm:text-lg lg:text-xl font-bold">Guided learning experience</span>
          </div>
        </div>

        {/* ==== Right Sliders ==== */}
        <div className="w-full lg:flex-1 flex gap-3 sm:gap-4 lg:gap-6 overflow-x-auto lg:overflow-visible">
          {/* First Vertical Slider */}
          <div className="flex-shrink-0 w-48 sm:w-56 lg:w-60">
            <Swiper
              direction="vertical"
              slidesPerView={3}
              spaceBetween={12}
              loop={true}
              autoplay={{ delay: 1000, disableOnInteraction: false }}
              modules={[Autoplay]}
              className="h-[400px] sm:h-[480px] lg:h-[540px] rounded-2xl shadow-lg"
            >
              <SwiperSlide>
                <img
                  src="https://i.ibb.co/nfYr7JX/projects-sample.png"
                  alt="Project 1"
                  className="w-full h-full object-cover rounded-xl"
                />
              </SwiperSlide>
               <SwiperSlide>
                <img
                  src="https://i.ibb.co/nfYr7JX/projects-sample.png"
                  alt="Project 1"
                  className="w-full h-full object-cover rounded-xl"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://i.ibb.co/mHbQd7K/projects-sample2.png"
                  alt="Project 2"
                  className="w-full h-full object-cover rounded-xl"
                />
              </SwiperSlide>
              
              <SwiperSlide>
                <img
                  src="https://i.ibb.co/k4H6cfs/projects-sample3.png"
                  alt="Project 3"
                  className="w-full h-full object-cover rounded-xl"
                />
              </SwiperSlide>
            </Swiper>
          </div>

          {/* Second Vertical Slider */}
          <div className="flex-shrink-0 w-48 sm:w-56 lg:w-60">
            <Swiper
              direction="vertical"
              slidesPerView={3}
              spaceBetween={12}
              loop={true}
              autoplay={{ delay: 1000, disableOnInteraction: false }}
              modules={[Autoplay]}
              className="h-[400px] sm:h-[480px] lg:h-[540px] rounded-2xl shadow-lg"
            >
              <SwiperSlide>
                <img
                  src="https://i.ibb.co/mHbQd7K/projects-sample2.png"
                  alt="Project A"
                  className="w-full h-full object-cover rounded-xl"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://i.ibb.co/mHbQd7K/projects-sample2.png"
                  alt="Project A"
                  className="w-full h-full object-cover rounded-xl"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://i.ibb.co/k4H6cfs/projects-sample3.png"
                  alt="Project B"
                  className="w-full h-full object-cover rounded-xl"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://i.ibb.co/nfYr7JX/projects-sample.png"
                  alt="Project C"
                  className="w-full h-full object-cover rounded-xl"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VerticalSliders;
