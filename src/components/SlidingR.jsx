import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

import pic from "../assets/cllg.webp"; // sample image
import logo from "../assets/jsonify.webp"; // logo image

const leaders = [
  {
    id: 1,
    img: pic,
    logo: logo,
    name: "Shivram, Head of Analytics",
  },
  {
    id: 2,
    img: pic,
    logo: logo,
    name: "Rohit, Product Manager",
  },
  {
    id: 3,
    img: pic,
    logo: logo,
    name: "Sneha, Tech Lead",
  },
  {
    id: 4,
    img: pic,
    logo: logo,
    name: "Vikas, Data Scientist",
  },
];

const SlidingR = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 flex justify-center font-sans">
      <div className="max-w-4xl w-full bg-[#f9f6f2] rounded-2xl shadow-md p-6 md:p-10 flex flex-col md:flex-row gap-6 items-center">
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start mb-3">
            <span className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 text-lg">
              👑
            </span>
          </div>
          <h2 className="text-lg sm:text-xl font-bold mb-3">
            Learn from CXOs, <br />  founders & more
          </h2>
          <p className="text-gray-500 text-sm sm:text-base">
            Exclusive Insights from  <br />industry leaders
          </p>
        </div>

        {/* Right Slider */}
        <div className="flex-1 w-full">
          <Swiper
            slidesPerView={1.2} 
            spaceBetween={15}
            loop={true}
            autoplay={{ delay: 1500, disableOnInteraction: false }}
            modules={[Autoplay]}
            breakpoints={{
              640: { slidesPerView: 1.2 }, 
              1024: { slidesPerView: 1.2 }, 
            }}
            className="h-52 sm:h-56"
          >
            {leaders.map((leader) => (
              <SwiperSlide key={leader.id}>
                <div className="bg-white rounded-xl shadow-md flex flex-col items-center p-4 h-full">
                  <img
                    src={leader.img}
                    alt={leader.name}
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover mb-1"
                  />
                  <img
                    src={leader.logo}
                    alt="logo"
                    className="w-16 h-16 sm:w-20 sm:h-20 object-cover"
                  />
                  <p className="text-gray-900 text-base sm:text-lg font-semibold text-center mt-1">
                    {leader.name}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default SlidingR;
