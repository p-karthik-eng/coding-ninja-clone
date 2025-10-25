import React from "react";
import { Flame, Handshake } from "lucide-react"; // Example icons

import hacka from '../assets/hacka.webp'


const Hackathons = () => {
  return (
    <section className="w-full flex justify-center py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-[480px]">
        {/* ==== Top Big Card ==== */}
        <div className="bg-white rounded-2xl shadow-lg p-1 mb-4 sm:mb-6">
          <div className="relative">
            <img
              src={hacka}
              alt="Hackathon"
              className="w-full h-[250px] sm:h-[350px] md:h-[400px] object-cover rounded-xl"
            />
            {/* Tag Label */}
            <span className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-white text-orange-600 text-xs sm:text-sm font-semibold px-2 py-1 sm:px-3 sm:py-1 rounded-full flex items-center gap-1 shadow">
              <Flame size={14} className="sm:w-4 sm:h-4" /> Hackathons
            </span>
          </div>
        </div>

        {/* ==== Bottom Two Cards ==== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {/* Card 1 */}
          <div className="bg-gray-100 rounded-2xl shadow-md p-4 hover:shadow-lg transition">
            <h3 className="text-base sm:text-lg font-semibold mb-2">
              Hands on workshops
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              Learn latest tools, make open source contributions and more!
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-100 rounded-2xl shadow-md p-4 hover:shadow-lg transition">
            <h3 className="text-sm sm:text-base font-semibold mb-2 flex items-center gap-1">
              <Handshake size={14} className="sm:w-4 sm:h-4 text-purple-600" />
              Partner events
            </h3>
            <p className="text-xs sm:text-sm text-gray-600">
              With clubs from IITs, IIMs and more.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hackathons;
