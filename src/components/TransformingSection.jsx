import React, { useEffect, useRef, useState } from 'react';

export default function TransformingSection() {
  const [activeSection, setActiveSection] = useState(-1);
  const [titlePhase, setTitlePhase] = useState(0);
  const sectionRefs = useRef([]);
  const titleRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === titleRef.current && entry.isIntersecting) {
            // Trigger title animations
            setTimeout(() => setTitlePhase(1), 200);
            setTimeout(() => setTitlePhase(2), 800);
            setTimeout(() => setTitlePhase(3), 1400);
          }
          
          // Handle stats sections
          const index = sectionRefs.current.indexOf(entry.target);
          if (index !== -1 && entry.isIntersecting) {
            setActiveSection(index);
          }
        });
      },
      { threshold: 0.6 }
    );

    if (titleRef.current) observer.observe(titleRef.current);
    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      heading: '1.5 Lac+ learners',
      subtitle: 'cracked dream roles at top tech companies'
    },
    {
      heading: '1,400 Alumni in MAANG',
      subtitle: '& more in 103/111 Unicorns'
    },
    {
      heading: '1 Cr+ highest CTC',
      subtitle: 'after completing the course'
    },
    {
      heading: '128% average hike',
      subtitle: 'via our placement cell'
    }
  ];

  return (
    <div className="w-full min-h-screen bg-black relative overflow-hidden">
      {/* Grid Background */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      ></div>

      {/* Hero Section with Sequential Animation on Scroll */}
      <div 
        ref={titleRef}
        className="relative z-10 max-w-7xl mx-auto flex flex-col items-center justify-center pt-20 md:pt-32 pb-24 md:pb-40 px-4"
      >
        <div className="text-center">
          <h2 className="m-0 text-5xl md:text-7xl font-bold leading-tight">
            {/* 9 years of */}
            <div 
              className={`transition-all duration-700 text-white ${
                titlePhase >= 1 
                  ? 'opacity-100 scale-100 translate-y-0' 
                  : 'opacity-0 scale-50 translate-y-10'
              }`}
            >
              9 years of
            </div>
            
            {/* transforming */}
            <div 
              className={`transition-all duration-700 text-white ${
                titlePhase >= 2 
                  ? 'opacity-100 scale-100 translate-y-0' 
                  : 'opacity-0 scale-50 translate-y-10'
              }`}
            >
              transforming
            </div>
            
            {/* tech careers */}
            <div 
              className={`transition-all duration-700 text-white ${
                titlePhase >= 3 
                  ? 'opacity-100 scale-100 translate-y-0' 
                  : 'opacity-0 scale-50 translate-y-10'
              }`}
            >
              tech careers
            </div>
          </h2>
        </div>
      </div>

      {/* Stats Timeline Section */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center justify-center pb-20 px-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            ref={(el) => (sectionRefs.current[index] = el)}
            className="flex flex-col items-center text-center w-full py-12 md:py-16"
          >
            {/* Notch/Marker */}
            <div className="flex items-center justify-center w-full mb-8 h-20">
              <div
                className={`h-12 w-12 rounded-full border-4 transition-all duration-700 ${
                  activeSection >= index
                    ? 'bg-gradient-to-br from-orange-400 to-red-600 border-orange-400 scale-110 shadow-lg shadow-orange-500/50'
                    : 'bg-gray-800 border-gray-700 scale-90'
                }`}
              >
                {activeSection >= index && (
                  <div className="h-full w-full rounded-full bg-white opacity-20 animate-ping"></div>
                )}
              </div>
            </div>

            {/* Content with Zoom In Animation */}
            <div
              className={`transition-all duration-700 ${
                activeSection >= index
                  ? 'scale-100 opacity-100'
                  : 'scale-75 opacity-0'
              }`}
            >
              <h2
                className={`mt-0 text-3xl md:text-6xl font-bold mb-4 md:mb-7 transition-colors duration-700 ${
                  activeSection >= index
                    ? 'text-white'
                    : 'text-gray-600'
                }`}
              >
                {stat.heading}
              </h2>
              <div
                className={`text-lg md:text-2xl font-medium transition-colors duration-700 ${
                  activeSection >= index ? 'text-gray-300' : 'text-gray-700'
                }`}
              >
                {stat.subtitle}
              </div>
            </div>

            {/* Connector Line */}
            {index < stats.length - 1 && (
              <div className="relative h-32 md:h-48 w-0 my-8 md:my-12">
                <div
                  className={`absolute top-0 left-0 w-0 border-l-2 border-dashed transition-all duration-1000 ${
                    activeSection >= index
                      ? 'border-orange-500/60 h-full'
                      : 'border-gray-800 h-0'
                  }`}
                  style={{
                    filter: activeSection >= index ? 'drop-shadow(0 0 8px rgba(249, 115, 22, 0.4))' : 'none'
                  }}
                ></div>
              </div>
            )}
          </div>
        ))}

        {/* CTA Button */}
        <div className="mt-16 md:mt-24 flex flex-col md:flex-row gap-4 md:gap-8 w-full justify-center items-center">
          <button className="group flex items-center gap-3 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-400 hover:to-red-500 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 w-full md:w-auto justify-center">
            <span>Explore offerings</span>
            <svg
              className="h-6 w-6 rotate-180 group-hover:translate-y-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}