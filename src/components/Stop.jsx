import React from "react";
import { Users } from "lucide-react"; // Icon import

import fram from '../assets/fram.svg'

const event = {
  id: 1,
  img: fram,
  title: "Unlock learning, career opportunities & success from X to 10X",
  tags: ["Industry Expert Session", "Fireside Chat", "Tech Talk"],
};

const SingleCard = () => {
  return (
    <section className="max-w-7xl mx-auto py-12 sm:py-16 px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row justify-start">
      {/* ==== Left Timeline ==== */}
      <div className="relative flex flex-row lg:flex-col items-center mb-6 lg:mb-0 lg:mr-8">
        {/* Vertical Line - hidden on mobile */}
        <div className="hidden lg:block absolute top-12 bottom-0 w-[2px] bg-orange-500" style={{height: '360px'}}></div>

        {/* Icon */}
        <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-orange-100 text-orange-600 rounded-md shadow-md z-10 flex-shrink-0">
          <Users size={20} className="sm:w-6 sm:h-6" />
        </div>
        
        {/* Mobile heading next to icon */}
        <p className="lg:hidden ml-4 text-gray-900 font-semibold text-base sm:text-lg">
          Personalised guidance to prepare you for your interview needs
        </p>
      </div>

      {/* ==== Right Content ==== */}
      <div className="flex-1">
        {/* Desktop heading */}
        <p className="hidden lg:block text-gray-900 mb-6 font-semibold text-xl lg:text-2xl">
          Personalised guidance to prepare you for your interview needs
        </p>

        {/* Event Card */}
        <div className="w-full max-w-[540px] bg-[#f9f6f2] rounded-2xl shadow-md p-4 sm:p-6">
          <img src={event.img} alt="event" className="mb-3 sm:mb-4 w-20 h-20 sm:w-28 sm:h-28" />
          <p className="text-base sm:text-lg font-bold mb-4 sm:mb-6">{event.title}</p>
          <div className="flex flex-wrap gap-2">
            {event.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-white text-amber-600 px-3 py-1 rounded-lg text-sm sm:text-base font-semibold"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleCard;
