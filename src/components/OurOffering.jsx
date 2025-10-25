import React from "react";

export default function OurOffering() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center py-16 -mb-10 my-8">
      {/* Section Title */}
      <h2 className="text-8xl font-bold text-gray-300 mb-18 mt-5">OUR OFFERINGS</h2>

      {/* Timeline */}
      <div className="relative flex items-start w-full max-w-6xl">
        {/* Vertical line */}
        <div className="absolute left-6 top-0 bottom-0 border-1 h-250 border-gray-900 border-dotted"></div>

        {/* Icon and Title */}
        <div className="flex items-center mb-8 relative z-10">
          <div className="bg-white shadow-md rounded-full p-3 border border-gray-200">
            {/* Example icon placeholder */}
            <span className="text-black font-bold">🏕</span>
          </div>
          <h3 className="ml-3 text-xl font-semibold">Job Bootcamp</h3>
          <span className="ml-3 px-3 py-1 bg-indigo-100 mt-0.5 text-indigo-700 text-sm rounded-lg">
            For graduates
          </span>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl">
        {/* Card 1 */}
        <div className="bg-indigo-50 rounded-xl shadow p-10 ml-10 flex flex-col">
          <div className="flex items-center mb-8">
            <div className="w-15 h-15 flex items-center justify-center rounded-full bg-white shadow">
              📚
            </div>
            <h4 className="ml-4 text-xl font-semibold">
              Full Stack Web Development  with <br /> GenAI
            </h4>
          </div>
          <div className="flex justify-between text-sm text-gray-600 mt-auto">
            <span>140+ Hrs of content</span>
            <span>600+ Problems</span>
            <span>10k+ Learners</span>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-indigo-50 rounded-xl shadow p-10 ml-2.5 flex flex-col">
          <div className="flex items-center mb-4">
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-white shadow">
              📊
            </div>
            <h4 className="ml-4 text-lg font-semibold">
              Data Analytics with GenAI
            </h4>
          </div>
          <div className="flex justify-between text-sm text-gray-600 mt-auto">
            <span>100+ Hrs of content</span>
            <span>300+ Problems</span>
            <span>2000+ Learners</span>
          </div>
        </div>
      </div>
    </div>
  );
}
