import React from "react";
import news_ted from "../assets/news_ted.webp";

import cxo from "../assets/cxo.png"

const Spotlight = () => {
  return (
    <section className="bg-[#fff6f4] py-12 sm:py-16">
     <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"> 
       {/* Title */}
      <div className="flex items-center mb-6 sm:mb-8 relative z-10">
        <div className="bg-white shadow-md rounded-lg p-2 sm:p-3 border border-gray-200 flex-shrink-0">
          {/* Example icon placeholder */}
          <span className="text-black font-bold text-lg sm:text-xl">🏕</span>
        </div>
        <h3 className="ml-3 text-base sm:text-lg font-semibold">Coding Ninjas in spotlight</h3>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
        {/* Left Side - TEDx Video Card */}
        <div className="bg-white rounded-2xl shadow-md p-4 sm:p-6 flex flex-col justify-between">
          <img src={news_ted} alt="TEDx Talk" className="rounded-xl mb-4 w-full" />
          <div>
            <h3 className="text-red-600 text-xl sm:text-2xl font-bold">TEDx</h3>
            <p className="text-gray-800 font-medium mt-2 text-sm sm:text-base">
              Demand, Supply, Run! | Ankush Singla | TEDxBVCOE
            </p>
            <button className="mt-4 flex items-center gap-2 border border-gray-800 px-3 sm:px-4 py-2 rounded-lg hover:bg-gray-100 transition text-sm sm:text-base">
              {/* Inline Play Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 sm:w-5 sm:h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
              Play video
            </button>
          </div>
        </div>

        {/* Right Side - News Cards */}
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {[
            {
              logo: cxo,
              text: "Coding Ninjas Unconventional Approach Upskills 1L Students, Yields 2.2x Salary Increase",
            },
            {
              logo: cxo,
              text: "Sustainable development through upskilling: India's engineering renaissance",
            },
            {
              logo: cxo,
              text: "Women in tech earn 7% more than men on average but men snag the highest salaries",
            },
            {
              logo: cxo,
              text: "Tech grads sign up for 'bootcamps' to be more employable",
            },
            {
              logo: cxo,
              text: "Young professionals must embrace continuous upskilling in the age of AI",
            },
            {
              logo: cxo,
              text: "Generative AI courses in hot demand as more Indians flock to upskilling platforms",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-sm border border-gray-200 p-4 sm:p-5 hover:shadow-md transition"
            >
              <img src={item.logo} alt="logo" className="h-8 sm:h-10 mb-2 sm:mb-3" />
              <p className="text-gray-700 text-sm sm:text-base lg:text-lg">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
     </div>
    </section>
  );
};

export default Spotlight;
