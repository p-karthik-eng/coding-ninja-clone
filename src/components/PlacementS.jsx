import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

import person from "../assets/person.png";
import calsoft from "../assets/calsoft.png";
import Microsoft from "../assets/microsoft.png";
import Paypal from "../assets/paypal.png";
import Uber from "../assets/uber.png";
import Persistent from "../assets/persistent.png";
import Mediadotnet from "../assets/mediadotnet.png";
import Google from "../assets/google.png";

const placements = [
  {
    name: "Naveen Kumar Dubey",
    hike: "169% salary hike",
    profile: "#",
    companyLogo: Google,
    role: "CS/IT",
    photo: person,
  },
  {
    name: "Amit Sharma",
    hike: "120% salary hike",
    profile: "#",
    companyLogo: Mediadotnet,
    role: "Tier 2/3 college",
    photo: person,
  },
  {
    name: "Rohit Singh",
    hike: "200% salary hike",
    profile: "#",
    companyLogo: Microsoft,
    role: "CS/IT",
    photo: person,
  },
  {
    name: "Neha Verma",
    hike: "180% salary hike",
    profile: "#",
    companyLogo: Paypal,
    role: "CS/IT",
    photo: person,
  },
  {
    name: "Arjun Mehta",
    hike: "150% salary hike",
    profile: "#",
    companyLogo: Persistent,
    role: "Non-CS/IT",
    photo: person,
  },
  {
    name: "Simran Kaur",
    hike: "210% salary hike",
    profile: "#",
    companyLogo: Uber,
    role: "Tier 2/3 college",
    photo: person,
  },
  {
    name: "Kiran Das",
    hike: "190% salary hike",
    profile: "#",
    companyLogo: calsoft,
    role: "Service to Product",
    photo: person,
  },
];

export default function PlacementSlider() {
  return (
    <section className="py-14 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center">
        {/* Heading */}
        <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center mb-10 sm:mb-14">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
            Our Ninjas at Top Tech Companies
          </h2>
          <a
            href="#"
            className="text-sm sm:text-base text-blue-600 font-semibold mt-3 sm:mt-0 hover:underline"
          >
            ⬇️ Download placement report
          </a>
        </div>

        {/* Swiper Slider */}
        <Swiper
          spaceBetween={20}
          loop={true}
          autoplay={{
            delay: 1800,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: { slidesPerView: 1 },
            480: { slidesPerView: 2 },
            640: { slidesPerView: 2.5 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1280: { slidesPerView: 5 },
          }}
          modules={[Navigation, Autoplay]}
          className="pb-10"
        >
          {placements.map((p, idx) => (
            <SwiperSlide key={idx}>
              <div className="relative group outline-none w-full flex justify-center">
                {/* Profile photo */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden shadow-md z-10">
                  <img
                    src={p.photo}
                    alt={p.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Card */}
                <div className="bg-gray-50 shadow-md rounded-xl p-6 pt-14 sm:pt-16 w-44 sm:w-52 mx-auto relative transition group-hover:shadow-xl border border-gray-100">
                  <img
                    src={p.companyLogo}
                    alt="company"
                    className="mx-auto h-10 sm:h-14 object-contain mb-3"
                  />
                  <p className="text-gray-700 text-xs sm:text-sm">{p.role}</p>

                  {/* Tooltip (hover on desktop only) */}
                  <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-60 bg-black text-white text-xs sm:text-sm rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity p-3 sm:p-4 z-50">
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-black"></div>
                    <p className="font-semibold">{p.name}</p>
                    <p>{p.hike}</p>
                    <a
                      href={p.profile}
                      className="text-blue-400 underline mt-2 inline-block"
                    >
                      LinkedIn profile →
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
