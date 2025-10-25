import React from "react";
import { Users, Briefcase, FileText } from "lucide-react";


import mock from '../assets/mock-interview.webp'


import pro from '../assets/profile-review.webp'


import test from '../assets/proj.webp'

const Mentorship = () => {
  return (
    <section className="bg-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8 flex justify-center font-sans">
      <div className="max-w-6xl w-full flex flex-col lg:flex-row">
        
        {/* ==== Left Timeline ==== */}
        <div className="relative flex flex-row lg:flex-col items-center lg:items-center mb-6 lg:mb-0 lg:mr-8">
          {/* Vertical Line - horizontal on mobile */}
          <div className="hidden lg:block absolute top-12 bottom-0 w-[1.5px] bg-orange-500" style={{height: '520px'}}></div>

          {/* Icon */}
          <div className="w-12 h-12 flex items-center justify-center bg-orange-100 text-orange-600 rounded-md shadow-md z-10 flex-shrink-0">
            <Users size={24} />
          </div>
          
          {/* Mobile heading next to icon */}
          <div className="lg:hidden ml-4">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
              1:1 Mentorship sessions
            </h2>
          </div>
        </div>

        {/* ==== Right Content ==== */}
        <div className="flex-1">
          {/* Heading - desktop only */}
          <h2 className="hidden lg:block text-2xl font-bold text-gray-900">
            1:1 Mentorship sessions
          </h2>
          <p className="text-gray-500 mb-6 sm:mb-8 lg:mb-10 text-sm sm:text-base">
            Personalised guidance to prepare you for your interview needs
          </p>

          {/* Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {/* Card 1 */}
            <div className="bg-white rounded-xl shadow p-4 sm:p-6 border">
              <img
                src={mock}
                alt="Mock Interview"
                className="mx-auto mb-4 w-full max-w-[200px]"
              />
              <h3 className="text-base sm:text-lg font-semibold text-gray-800">
                Mock interview
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm mt-2">
                Nail coding assessments and technical challenges
              </p>
              <p className="text-gray-600 text-xs sm:text-sm">
                Gain insights into problem-solving and algorithmic thinking
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl shadow p-4 sm:p-6 border">
              <img
                src={pro}
                alt="Profile Review"
                className="mx-auto mb-4 w-full max-w-[200px]"
              />
              <h3 className="text-base sm:text-lg font-semibold text-gray-800">
                Profile review
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm mt-2">
                Get your profile & resume reviewed by industry leaders
              </p>
              <p className="text-gray-600 text-xs sm:text-sm">
                Focus on different aspects of your job search
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl shadow p-4 sm:p-6 border">
              <img
                src={test}
                alt="Project Guidance"
                className="mx-auto mb-4 w-full max-w-[200px]"
              />
              <h3 className="text-base sm:text-lg font-semibold text-gray-800">
                Project guidance
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm mt-2">
                Career counselling with industry experts
              </p>
              <p className="text-gray-600 text-xs sm:text-sm">
                Get assistance on how to build real-time projects
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mentorship;
