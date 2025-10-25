import React, { useState } from "react";
import { FaDatabase, FaPython, FaNodeJs } from "react-icons/fa";
import { SiMeta, SiReact } from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";
import Clgimg from "../assets/cllg.webp";
import Ai from "../assets/Ai.webp";
import Data from "../assets/data.webp";

const CoursesSection = () => {
  // --- Working Professionals ---
  const categoriesWP = ["All", "Data Analytics", "Generative AI", "Data Science", "Full Stack Development"];
  const coursesWP = [
    { id: 1, title: "Professional Certification in Data Analytics with GenAI", institute: "Vishlesan i-hub, IIT Patna", type: "Certification", category: "Data Analytics", duration: "6 months", image: Ai, icons: [<SiMeta key="meta" />, <FaDatabase key="sql" />] },
    { id: 2, title: "PG Certification in Data Analytics with GenAI", institute: "E&ICT Academy, IIT Guwahati", type: "Certification", category: "Data Analytics", duration: "6 months", image: Clgimg, icons: [<SiMeta key="meta" />, <FaDatabase key="sql" />] },
    { id: 3, title: "Data Analytics Job Bootcamp with GenAI", institute: "Coding Ninjas", type: "Job Bootcamp", category: "Full Stack Development", duration: "6 months", image: Data, icons: [<SiMeta key="meta" />, <FaPython key="python" />] },
  ];
  const [selectedWP, setSelectedWP] = useState("All");
  const filteredWP = selectedWP === "All" ? coursesWP : coursesWP.filter(c => c.category === selectedWP);

  // --- College Students ---
  const categoriesCS = ["All", "Data Analytics", "Full Stack Development", "Data Structures and Algorithms"];
  const coursesCS = [
    { id: 1, title: "Training and Internship Certification in Data Analytics", institute: "Vishlesan i-hub, IIT Patna", type: "Certification", category: "Data Analytics", duration: "6 months", image: Data, icons: [<FaDatabase key="sql" />, <FaPython key="python" />] },
    { id: 2, title: "Training and Internship Certification in Full Stack Development", institute: "IITM Pravartak, TIH IIT Madras", type: "Certification", category: "Full Stack Development", duration: "9 months", image: Clgimg, icons: [<SiReact key="react" />, <FaNodeJs key="node" />, <SiMeta key="meta" />] },
    { id: 3, title: "Training and Internship Certification in Advanced DSA", institute: "IITM Pravartak, TIH IIT Madras", type: "Certification", category: "Data Structures and Algorithms", duration: "4 months", image: Clgimg, icons: [<TbBrandCpp key="cpp" />, <SiReact key="react" />] },
  ];
  const [selectedCS, setSelectedCS] = useState("All");
  const filteredCS = selectedCS === "All" ? coursesCS : coursesCS.filter(c => c.category === selectedCS);

  return (
    <section className="bg-white py-16 px-6">
      <h2 className="text-5xl md:text-6xl lg:text-8xl font-bold text-gray-300 mb-16 text-center">
        OUR COURSES
      </h2>

      <div className="max-w-6xl mx-auto space-y-20">
        {/* Working Professionals */}
        <div>
          <h3 className="text-2xl md:text-3xl font-semibold mb-8">
            For Working Professionals
          </h3>
          <div className="flex flex-wrap gap-3 mb-8">
            {categoriesWP.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedWP(cat)}
                className={`px-5 py-2 border rounded-full text-sm font-medium transition ${
                  selectedWP === cat
                    ? "bg-black text-white border-black"
                    : "border-gray-300 text-gray-600 hover:bg-gray-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <hr className="border-gray-200 mb-10" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredWP.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>

        {/* College Students */}
        <div>
          <h3 className="text-2xl md:text-3xl font-semibold mb-8">
            For College Students
          </h3>
          <div className="flex flex-wrap gap-3 mb-8">
            {categoriesCS.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCS(cat)}
                className={`px-5 py-2 border rounded-full text-sm font-medium transition ${
                  selectedCS === cat
                    ? "bg-black text-white border-black"
                    : "border-gray-300 text-gray-600 hover:bg-gray-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <hr className="border-gray-200 mb-10" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCS.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Course Card Component (Logo Removed) ---
const CourseCard = ({ course }) => (
  <div className="border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition">
    <div className="relative">
      <img
        src={course.image}
        alt={course.title}
        className="w-full h-48 object-cover rounded-xl"
      />
    </div>
    <div className="mt-4">
      <h4 className="text-lg font-semibold text-gray-900">{course.title}</h4>
      <p className="text-gray-600 text-sm mt-1">{course.institute}</p>

      <div className="mt-3 flex flex-wrap gap-2">
        <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-3 py-1 rounded-full">
          {course.type}
        </span>
      </div>

      <div className="border-t mt-5 pt-4 flex justify-between items-center text-sm text-gray-600">
        <div className="flex gap-3 text-lg text-gray-500">
          {course.icons.map((icon, i) => (
            <span key={i}>{icon}</span>
          ))}
        </div>
        <p>{course.duration}</p>
      </div>
    </div>
  </div>
);

export default CoursesSection;
