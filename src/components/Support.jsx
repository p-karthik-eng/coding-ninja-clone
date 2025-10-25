import React from "react";

const DoubtResolution = () => {
  return (
    <section className="bg-black text-white min-h-screen flex items-center justify-center px-6 py-16 font-sans">
      <div className="max-w-4xl w-full flex flex-col items-center text-center space-y-6">
        
        {/* ==== Logo ==== */}
        <div className="w-20 h-20 flex items-center justify-center bg-white rounded-full shadow-lg">
          🚀
        </div>

        {/* ==== Headings & Text ==== */}
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 leading-snug">
          500+ dedicated Teaching Assistants to resolve your doubts quickly
        </h2>

        <p className="text-lg text-gray-400 hover:text-gray-200 transition">
          Resolve doubts any time through chat, voice notes or calling.
        </p>

        <p className="text-lg text-gray-400 hover:text-gray-200 transition">
          5/5 rating for 90% doubt resolutions
        </p>

        {/* Small tagline bottom */}
        <p className="text-sm uppercase tracking-wide text-gray-300">
          Always available when you get stuck
        </p>
      </div>
    </section>
  );
};

export default DoubtResolution;
