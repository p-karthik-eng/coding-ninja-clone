import React from "react";

export default function Newlunches() {
  return (
    <div className="bg-white flex flex-col items-center py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      {/* Timeline */}
      <div className="relative flex items-start w-full max-w-7xl mb-6 sm:mb-8">
        {/* Icon and Title */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 relative z-10">
          <div className="bg-white shadow-md rounded-full p-2 sm:p-3 border border-gray-200 flex-shrink-0">
            {/* Example icon placeholder */}
            <span className="text-black font-bold text-lg sm:text-xl">🏕</span>
          </div>
          <h3 className="text-base sm:text-lg font-semibold">New Launches</h3>
          <span className="px-2 sm:px-3 py-1 bg-indigo-100 text-indigo-700 text-xs sm:text-sm rounded-lg">
            For graduates
          </span>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 w-full max-w-7xl">
        {/* Card 1 */}
        <div className="bg-indigo-50 rounded-xl shadow p-6 sm:p-8 lg:p-10 flex flex-col">
          <div className="flex items-start sm:items-center mb-6 sm:mb-8">
            <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full bg-white shadow flex-shrink-0 text-xl sm:text-2xl">
              📚
            </div>
            <h4 className="ml-3 sm:ml-4 text-lg sm:text-xl lg:text-[22px] font-semibold">
              Advanced Certification in Gen AI & Multi Agent Systems
            </h4>
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-between gap-3 sm:gap-4 text-sm sm:text-base lg:text-[17px] text-gray-600">
            <span>140+ Hrs of content</span>
            <span>600+ Problems</span>
            <span>10k+ Learners</span>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-indigo-50 rounded-xl shadow p-6 sm:p-8 lg:p-10 flex flex-col">
          <div className="flex items-start sm:items-center mb-6 sm:mb-8">
            <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full bg-white shadow flex-shrink-0 text-xl sm:text-2xl">
              📊
            </div>
            <h4 className="ml-3 sm:ml-4 text-lg sm:text-xl lg:text-[22px] font-semibold">
              Advanced Certification in Gen AI for Non-tech professionals
            </h4>
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-between gap-3 sm:gap-4 text-sm sm:text-base lg:text-[17px] text-gray-600">
            <span>100+ Hrs of content</span>
            <span>300+ Problems</span>
            <span>2000+ Learners</span>
          </div>
        </div>
      </div>
    </div>
  );
}
