import React from "react";



import nsdccert from "../assets/nsdccert.webp"; 

const Certi= () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 ">
      <div className="flex flex-col md:flex-row items-center bg-white rounded-2xl shadow-lg border outline-1 border-gray-200 p-6 md:p-4 max-w-8xl">
        
        {/* Certificate Image */}
        <img
          src={nsdccert}
          alt="NSDC Certificate"
          className="w-40 md:w-1/2 h-80 rounded-xl shadow-md"
        />

        {/* Text Section */}
        <div className="mt-6 md:mt-0 md:ml-10  text-center md:text-left">
          <h2 className="text-xl md:text-2xl font-light text-gray-900 leading-snug">
            We are an approved training partner of NSDC 
            under <br />their scheme for market led fee-based <br />
            services
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Certi;
