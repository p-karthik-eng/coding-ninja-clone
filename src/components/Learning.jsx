import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// autoplay ke liye import
import { Autoplay } from "swiper/modules";

import slide1 from "../assets/web_learn.webp";
import slide2 from "../assets/web_standout.webp";

const Learning = () => {
  return (
    <section className="bg-[#f8fbfb] py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xl md:text-3xl font-bold mb-10 flex items-center gap-3">
          <span className="w-16 h-16 flex items-center justify-center bg-white shadow rounded-full">
            🚀
          </span>
          A 3-stage learning model to turn you into a Coding Ninja
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center mt-3">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Learn</h3>
              <p className="text-gray-600 mt-2">
                Experience seamless learning with problem solving modules,
                leaderboard and awards.
              </p>
            </div>
            {/* <div className="border-l-1 border-gray-400 pl-2 -ml-2"> */}
              <h3 className="text-lg font-semibold text-gray-900">Excel</h3>
              <p className="text-gray-600 mt-2">
                Track your skill level and make meaningful progress for you to
                grow.
              </p>
            {/* </div> */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Standout</h3>
              <p className="text-gray-600 mt-2">
                Standout to recruiters, showcase ratings, get feedback and
                interview insights.
              </p>
            </div>
          </div>

          {/* Right Slider */}
          <div className="relative">
            <Swiper
              modules={[Autoplay]}
              autoplay={{
                delay: 1000, // 1 sec delay
                disableOnInteraction: false,
              }}
              loop={true}
              className="rounded-2xl shadow-lg"
            >
              <SwiperSlide>
                <img src={slide1} alt="Slide 1" className="rounded-xl w-full" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={slide2} alt="Slide 2" className="rounded-xl w-full" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Learning;
