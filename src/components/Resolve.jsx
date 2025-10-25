import React from "react";

const Features = () => {
  return (
    <div className="bg-black text-white px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 relative">
      <div className="max-w-7xl mx-auto">
        {/* Full vertical line - hidden on mobile */}
        <div className="hidden lg:block absolute left-4 lg:left-52 top-0 h-full border-l-2 border-yellow-600"></div>

        {/* Step 1 */}
        <div className="relative flex flex-col lg:flex-row items-start lg:ml-16 xl:ml-24 pb-8 lg:pb-10">
          {/* Icon */}
          <div className="mb-4 lg:mb-0 lg:absolute lg:-left-20 lg:top-0 bg-white text-black rounded-lg px-3 py-2 text-lg font-bold">
            ❤️
          </div>

          {/* Content */}
          <div className="lg:ml-8">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-4 sm:mb-6 lg:mb-8">
              Always available when you get stuck
            </h3>
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 text-gray-400 leading-tight">
              Resolve doubts any time through chat, voice notes or calling.
            </p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="relative flex items-start lg:ml-16 xl:ml-24 pb-10">
          <div className="lg:ml-6">
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 lg:mb-8 text-gray-400 leading-tight">
              500+ dedicated Teaching Assistants to resolve your doubts quickly
            </p>
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-400 leading-tight">
              5/5 rating for 90% doubt resolutions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
