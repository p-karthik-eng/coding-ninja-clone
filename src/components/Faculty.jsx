import React from "react";
import { Users } from "lucide-react";
import Ankush from "../assets/ankush.webp"
import Nidhi from "../assets/nidhi.webp"
import Parekh from "../assets/parekh.webp"

const faculty = [
  {
    name: "Ankush Singla",
    role: "Co-Founder & Instructor",
    img: Ankush,
    companies: [
      "https://upload.wikimedia.org/wikipedia/commons/3/30/Cpp_logo.png",
      "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png",
      "https://upload.wikimedia.org/wikipedia/commons/4/4a/Amazon_icon.svg",
    ],
    teaches: [
      "Basics of C++ with DSA",
      "Data Science & Machine Learning",
      "Competitive Programming",
    ],
    linkedin: "#",
  },
  {
    name: "Parikh Jain",
    role: "Instructor & Founding Member at Coding Ninjas",
    img: Parekh,
    companies: [
      "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png",
      "https://upload.wikimedia.org/wikipedia/commons/4/4a/Amazon_icon.svg",
    ],
    teaches: [
      "Basics of Python with DSA",
      "Competitive Programming",
      "Product Companies Interview Prep",
    ],
    linkedin: "#",
  },
  {
    name: "Nidhi Agarwal",
    role: "Founding member & Product Manager at Coding Ninjas",
    img: Nidhi,
    companies: [
      "https://upload.wikimedia.org/wikipedia/commons/3/30/Cpp_logo.png",
      "https://upload.wikimedia.org/wikipedia/commons/3/3a/Logo_Microsoft_2012.png",
    ],
    teaches: [
      "Basics of C++ with DSA",
      "Data Science & Machine Learning",
      "Data Analytics Course",
    ],
    linkedin: "#",
  },
    {
    name: "Nidhi Agarwal",
    role: "Founding member & Product Manager at Coding Ninjas",
    img: Nidhi,
    companies: [
      "https://upload.wikimedia.org/wikipedia/commons/3/30/Cpp_logo.png",
      "https://upload.wikimedia.org/wikipedia/commons/3/3a/Logo_Microsoft_2012.png",
    ],
    teaches: [
      "Basics of C++ with DSA",
      "Data Science & Machine Learning",
      "Data Analytics Course",
    ],
    linkedin: "#",
  },
    {
    name: "Nidhi Agarwal",
    role: "Founding member & Product Manager at Coding Ninjas",
    img: Nidhi,
    companies: [
      "https://upload.wikimedia.org/wikipedia/commons/3/30/Cpp_logo.png",
      "https://upload.wikimedia.org/wikipedia/commons/3/3a/Logo_Microsoft_2012.png",
    ],
    teaches: [
      "Basics of C++ with DSA",
      "Data Science & Machine Learning",
      "Data Analytics Course",
    ],
    linkedin: "#",
  },
    {
    name: "Nidhi Agarwal",
    role: "Founding member & Product Manager at Coding Ninjas",
    img: Nidhi,
    companies: [
      "https://upload.wikimedia.org/wikipedia/commons/3/30/Cpp_logo.png",
      "https://upload.wikimedia.org/wikipedia/commons/3/3a/Logo_Microsoft_2012.png",
    ],
    teaches: [
      "Basics of C++ with DSA",
      "Data Science & Machine Learning",
      "Data Analytics Course",
    ],
    linkedin: "#",
  },
    {
    name: "Nidhi Agarwal",
    role: "Founding member & Product Manager at Coding Ninjas",
    img: Nidhi,
    companies: [
      "https://upload.wikimedia.org/wikipedia/commons/3/30/Cpp_logo.png",
      "https://upload.wikimedia.org/wikipedia/commons/3/3a/Logo_Microsoft_2012.png",
    ],
    teaches: [
      "Basics of C++ with DSA",
      "Data Science & Machine Learning",
      "Data Analytics Course",
    ],
    linkedin: "#",
  },
    {
    name: "Nidhi Agarwal",
    role: "Founding member & Product Manager at Coding Ninjas",
    img: Nidhi,
    companies: [
      "https://upload.wikimedia.org/wikipedia/commons/3/30/Cpp_logo.png",
      "https://upload.wikimedia.org/wikipedia/commons/3/3a/Logo_Microsoft_2012.png",
    ],
    teaches: [
      "Basics of C++ with DSA",
      "Data Science & Machine Learning",
      "Data Analytics Course",
    ],
    linkedin: "#",
  },
    {
    name: "Nidhi Agarwal",
    role: "Founding member & Product Manager at Coding Ninjas",
    img: Nidhi,
    companies: [
      "https://upload.wikimedia.org/wikipedia/commons/3/30/Cpp_logo.png",
      "https://upload.wikimedia.org/wikipedia/commons/3/3a/Logo_Microsoft_2012.png",
    ],
    teaches: [
      "Basics of C++ with DSA",
      "Data Science & Machine Learning",
      "Data Analytics Course",
    ],
    linkedin: "#",
  },
];

const FacultySection = () => {
  return (
    <section className="max-w-7xl mx-auto py-12 sm:py-16 px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row overflow-hidden">
      {/* ==== Left Timeline ==== */}
      <div className="relative flex flex-row lg:flex-col items-center mb-6 lg:mb-0 lg:mr-8">
        {/* Vertical Line - hidden on mobile */}
        <div className="hidden lg:block absolute top-12 bottom-0 w-[1px] bg-orange-500" style={{height: '640px'}}></div>

        {/* Icon */}
        <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-orange-100 text-orange-600 rounded-md shadow-md z-10 flex-shrink-0">
          <Users size={20} className="sm:w-6 sm:h-6" />
        </div>
        
        {/* Mobile heading next to icon */}
        <h2 className="lg:hidden ml-4 text-xl sm:text-2xl font-bold text-gray-900">
          Faculty that brings out the best in you
        </h2>
      </div>

      {/* ==== Right Content ==== */}
      <div className="flex-1 w-full">
        {/* Heading - desktop only */}
        <h2 className="hidden lg:block text-2xl font-bold text-gray-900 mb-10">
          Faculty that brings out the best in you
        </h2>

        {/* Faculty Cards in Horizontal Scroll */}
        <div className="flex gap-4 sm:gap-5 overflow-x-auto scrollbar-hide scrollbar-custom pb-8 sm:pb-12 -mx-4 px-4 sm:mx-0 sm:px-0">
          {faculty.map((f, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-72 sm:w-80 bg-white rounded-2xl shadow-md p-4 sm:p-6 text-center hover:shadow-lg transition"
            >
              <img
                src={f.img}
                alt={f.name}
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto mb-3 sm:mb-4 object-cover"
              />
              <h3 className="text-base sm:text-lg font-semibold">{f.name}</h3>
              <p className="text-gray-600 text-xs sm:text-sm mb-3">{f.role}</p>

              {/* Companies */}
              <div className="flex justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                {f.companies.map((c, i) => (
                  <img key={i} src={c} alt="company" className="w-5 h-5 sm:w-6 sm:h-6" />
                ))}
              </div>

              {/* Teaches */}
              <div className="text-xs sm:text-sm text-gray-700 mb-3">
                <p className="font-medium">Teaches</p>
                {f.teaches.map((t, i) => (
                  <p key={i}>{t}</p>
                ))}
              </div>

              {/* LinkedIn */}
              <a
                href={f.linkedin}
                className="text-blue-600 text-xs sm:text-sm font-medium hover:underline"
              >
                LinkedIn profile ↗
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacultySection;
