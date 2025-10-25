import React from "react";
import {
  FaPhoneAlt,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

import { IoMdMail } from "react-icons/io";

import logofoot from "../assets/logofoot.webp"; // Adjust the path as necessary

import logo from "../assets/logo.svg"; // Adjust the path as necessary


import newcnlogo from "../assets/newcnlogo.svg"; // Adjust the path as necessary

export default function Footer() {
  return (
    <footer className="bg-[#1c120c] text-gray-300 py-26">
      <div className="max-w-7xl mx-auto px-8 h-80 grid grid-cols-1 md:grid-cols-4 gap-18 mt-12">
        {/* Logo & Contact */}
        <div>
          <h2 className="text-white font-bold text-lg mb-5"><img src={logo} alt="Coding Ninjas Logo" /></h2>

          <h3 className="font-semibold text-[15px] mb-2">Contact us</h3>
          <p className="flex items-center gap-2 text-sm mb-1">
            <FaPhoneAlt /> 7416756511
          </p>
          <p className="flex items-center gap-2 text-sm  text-gray-400  hover:text-white">
            <i className="text-xl  text-white"><IoMdMail /></i> contact@codingninjas.com
          </p>

          <h3 className="font-semibold text-[14px] mt-5 mb-2">Our Offerings</h3>
          <p className="text-[15px]"><img src={newcnlogo} className="h-10" alt="" srcset="" /></p> <br />
          <p className="text-[15px]"><img src={logofoot} className="h-8 " alt="" srcset="" /></p>
        </div>

        {/* Coding Ninjas */}
        <div>
          <h3 className="font-semibold text-[15px] mb-3">Coding Ninjas</h3>
          <ul className="space-y-2 text-[15px] ">
            <li  className=" text-gray-400  hover:text-white "  >Careers</li>
            <li  className=" text-gray-400  hover:text-white "  >Privacy policy</li>
            <li  className=" text-gray-400  hover:text-white "  >Terms & conditions</li>
            <li  className=" text-gray-400  hover:text-white "  >Pricing & refund policy</li>
            <li  className=" text-gray-400  hover:text-white "  >Bug bounty</li>
            <li  className=" text-gray-400  hover:text-white "  >Review</li>
            <li  className=" text-gray-400  hover:text-white "  >Press release</li>
          </ul>
        </div>

        {/* Products */}
        <div>
          <h3 className="font-semibold text-[15px] mb-3">Products</h3>
          <ul className="space-y-2 text-[15px]">
            <li  className=" text-gray-400  hover:text-white "  >Job Bootcamp</li>
            <li  className=" text-gray-400  hover:text-white "  >Code 360</li>
            <li  className=" text-gray-400  hover:text-white "  >Professional Certifications</li>
            <li  className=" text-gray-400  hover:text-white "  >Student Certifications</li>
          </ul>
        </div>

        {/* Community */}
        <div>
          <h3 className="font-semibold text-[15px] mb-3">Community</h3>
          <ul className="space-y-2 text-[15px]">
            <li  className=" text-gray-400  hover:text-white "  >10X Club</li>
            <li  className=" text-gray-400  hover:text-white "  >Student Chapters</li>
            <li  className=" text-gray-400  hover:text-white "  >Hire from us</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-15 pt-6 flex flex-col md:flex-row justify-between items-center px-6 max-w-7xl mx-auto">
        <p className="text-xs text-gray-400 mt-8">
          Copyright © karthik putcha -------
        </p>
        <div className="flex gap-5 mt-4 md:mt-0 text-[28px] text-gray-400">
          <FaInstagram className="hover:text-white cursor-pointer" />
          <FaFacebook className="hover:text-white cursor-pointer" />
          <FaLinkedin className="hover:text-white cursor-pointer" />
          <FaTwitter className="hover:text-white cursor-pointer" />
          <FaYoutube className="hover:text-white cursor-pointer" />
        </div>
      </div>
    </footer>
  );
}
