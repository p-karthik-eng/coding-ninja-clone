// link
import React from "react";

import visa from "../assets/visa.webp";
import paypal from "../assets/paypal.webp";
import upi from "../assets/upi.webp";
import emi from "../assets/nocost.webp";
import footerend from "../assets/footerend.webp";
import razorpay from "../assets/razorpay.webp";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 sm:py-12 px-4 sm:px-6 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-base sm:text-lg font-semibold mb-6 sm:mb-8 mt-6 sm:mt-12">Important Links</h3>

        <div className="space-y-4 sm:space-y-6 text-xs sm:text-sm">
          {/* Job Bootcamp */}
          <div>
            <p className="font-medium text-white mb-2">Job Bootcamp for professionals:</p>
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-3 sm:items-center">
              <a
                href="#"
                className="text-gray-300 hover:text-white underline"
              >
                Web Development Bootcamp (MERN & Springboot)
              </a>
              <span className="hidden sm:inline text-gray-500">|</span>
              <a
                href="#"
                className="text-gray-300 hover:text-white underline"
              >
                Data Analytics Job Bootcamp
              </a>
            </div>
          </div>

          {/* IIT Certifications for Professionals */}
          <div>
            <p className="font-medium text-white mb-2">IIT Certifications for Professionals:</p>
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-3 sm:items-center">
              <a
                href="#"
                className="text-gray-300 hover:text-white underline"
              >
                PG Certification in Data Analytics by E&ICT Academy, IIT Guwahati
              </a>
              <span className="hidden sm:inline text-gray-500">|</span>
              <a
                href="#"
                className="text-gray-300 hover:text-white underline"
              >
                PG Certification in Data Science by E&ICT Academy, IIT Guwahati
              </a>
              <span className="hidden sm:inline text-gray-500">|</span>
              <a
                href="#"
                className="text-gray-300 hover:text-white underline"
              >
                Generative AI for Non-Tech Professionals by IITM Pravartak, TIH IIT Madras
              </a>
            </div>
          </div>

          {/* IIT Certifications for Students */}
          <div>
            <p className="font-medium text-white mb-2">IIT Certifications for Students:</p>
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-3 sm:items-center">
              <a
                href="#"
                className="text-gray-300 hover:text-white underline"
              >
                Training and Internship Certification in Data Analytics by E&ICT Academy, IIT Guwahati
              </a>
              <span className="hidden sm:inline text-gray-500">|</span>
              <a
                href="#"
                className="text-gray-300 hover:text-white underline"
              >
                Training and Internship Certification in Advanced DSA by IITM Pravartak, TIH IIT Madras
              </a>
              <span className="hidden sm:inline text-gray-500">|</span>
              <a
                href="#"
                className="text-gray-300 hover:text-white underline"
              >
                Training and Internship Certification in Full Stack Web Development with Generative AI + DSA by IITM Pravartak, TIH IIT Madras
              </a>
            </div>
          </div>

          {/* Our New Launches */}
          <div>
            <p className="font-medium text-white mb-2">Our New Launches:</p>
            <a
              href="#"
              className="text-gray-300 hover:text-white underline"
            >
              Advanced Certification in GenAI & Multi Agent Systems
            </a>
          </div>

          {/* Payment Section */}
          <div>
            <p className="font-medium mb-3 sm:mb-4 text-white">We accept payments using:</p>
            <div className="flex items-center flex-wrap gap-3 sm:gap-5">
              <img src={visa} alt="Visa" className="h-6 sm:h-8" />
              <img src={paypal} alt="Paypal" className="h-6 sm:h-8" />
              <img src={upi} alt="UPI" className="h-6 sm:h-8" />
              <img src={emi} alt="No Cost EMI" className="h-6 sm:h-8" />
              <img src={footerend} alt="Footer" className="h-6 sm:h-8" />
              <img src={razorpay} alt="Razorpay" className="h-6 sm:h-8" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
