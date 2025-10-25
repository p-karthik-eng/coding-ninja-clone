import React from "react";

// images
import cllg_1 from "../assets/cllg.webp";
import iitimg from "../assets/iitimg.webp"

// SVG icons
import logocllg from "../assets/icons/logocllg.svg";
import chatgpt from "../assets/icons/chatgpt.svg";

export default function Iit() {
  const courses = [
    {
      title: "PG Certification in Data Analytics with GenAI",
      institute: "E&ICT Academy, IIT Guwahati",
      img: cllg_1,
      logo: logocllg, // 👈 Alag logo add kiya
      icons: [logocllg, chatgpt, chatgpt],
      duration: "6 months",
      tag: "For graduates",
    },
    {
      title: "PG Certification in Data Science with GenAI",
      institute: "E&ICT Academy, IIT Guwahati",
      img: cllg_1,
      logo: chatgpt,
      icons: [logocllg, chatgpt, chatgpt],
      duration: "9 months",
      tag: "For graduates",
    },
    {
      title: "Advanced Certification in GenAI for Non-Tech Professionals",
      institute: "IITM Pravartak, TIH IIT Madras",
      img: cllg_1,
      logo: logocllg,
      icons: [logocllg, chatgpt, chatgpt],
      duration: "6 months",
      tag: "For graduates",
    },
    
    {
      title: "Advanced Certification in GenAI for Non-Tech Professionals",
      institute: "IITM Pravartak, TIH IIT Madras",
      img: cllg_1,
      logo: chatgpt,
      icons: [logocllg, chatgpt, chatgpt, chatgpt],
      duration: "6 months",
      tag: "For graduates",
    },
    {
      title: "Advanced Certification in GenAI for Non-Tech Professionals",
      institute: "IITM Pravartak, TIH IIT Madras",
      img: cllg_1,
      logo: logocllg,
      icons: [logocllg, chatgpt, chatgpt, logocllg],
      duration: "6 months",
      tag: "For graduates",
    },
    {
      title: "Advanced Certification in GenAI for Non-Tech Professionals",
      institute: "IITM Pravartak, TIH IIT Madras",
      img: cllg_1,
      logo: chatgpt,
      icons: [logocllg, chatgpt, chatgpt, logocllg],
      duration: "6 months",
      tag: "For graduates",
    },
  ];

  return (
    <section
      className="bg-amber-50 py-8 sm:py-12 px-4 sm:px-6 lg:px-8"
      aria-labelledby="iit-section-title"
    >
      <div className="relative max-w-7xl mx-auto">
        {/* Vertical line - hidden on mobile */}
        <div 
          className="hidden lg:block absolute left-6 top-0 bottom-0 border-1 border-gray-900 border-dotted"
          style={{height: '1360px'}}
          aria-hidden="true"
        ></div>

        {/* Icon and Title */}
        <div className="flex items-center mb-4 relative z-10">
          <div className="bg-white shadow rounded-full p-2 sm:p-3 border border-gray-200 flex-shrink-0">
            <span role="img" aria-label="graduation cap" className="text-lg sm:text-xl">
              🎓
            </span>
          </div>
          <h2 id="iit-section-title" className="ml-3 text-base sm:text-lg font-semibold">
            IIT Certifications
          </h2>
        </div>

        {/* Tag */}
        <span className="ml-0 lg:ml-14 px-3 py-1 bg-yellow-800 text-white text-xs sm:text-sm rounded-full inline-block">
          For graduates
        </span>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mt-6 sm:mt-8 lg:ml-16">
          {courses.map((course, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow border border-gray-200 overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-300 min-h-[380px] sm:min-h-[400px] relative"
            >
              {/* Logo overlay (dynamic per course) */}
              <div className="absolute top-36 sm:top-40 left-4 sm:left-6 bg-white h-10 w-10 sm:h-12 sm:w-12 rounded-lg shadow flex items-center justify-center">
                <img src={course.logo} alt="course logo" className="h-6 w-6 sm:h-8 sm:w-8" />
              </div>

              {/* Course Image */}
              <img
                src={course.img}
                alt={`${course.institute} - ${course.title}`}
                className="h-40 sm:h-48 w-full px-2 sm:px-3 mt-2.5 rounded-[25px] object-cover"
              />

              {/* Content */}
              <div className="p-3 sm:p-4 flex flex-col flex-grow">
                <h3 className="font-semibold text-gray-800 mb-1 text-base sm:text-lg lg:text-xl">
                  {course.title}
                </h3>
                <span className="bg-amber-100 text-amber-800 text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-2 mt-3 sm:mt-4 rounded-full inline-block mb-3">
                  {course.institute}
                </span>

                {/* Footer icons + duration */}
                <div className="flex justify-between items-center mt-auto">
                  <div className="flex gap-1.5 sm:gap-2 mb-2 sm:mb-3">
                    {course.icons.map((iconSrc, i) => (
                      <img
                        key={i}
                        src={iconSrc}
                        alt="course icon"
                        className="h-5 w-5 sm:h-6 sm:w-6 hover:scale-110 transition-transform"
                      />
                    ))}
                  </div>
                  <span className="text-black text-sm sm:text-base">
                    {course.duration}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8 sm:mt-12 flex justify-center lg:justify-end">
        <img src={iitimg} className="w-full max-w-xs sm:max-w-md lg:max-w-lg h-auto" alt="IIT certification" />
      </div>

    </section>
  );
}
