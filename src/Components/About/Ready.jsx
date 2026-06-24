import React from "react";
import { FaStar } from "react-icons/fa";
const Ready = () => {
  return (
    <div className="h-[350px]  w-full flex items-center justify-center px-4">

      <div className="h-[260px] w-[970px] max-w-4xl bg-[#AB7C3E] mt-6 rounded-2xl shadow-2xl px-10 flex items-center justify-between">

      
        <div>
          <p className="text-3xl md:text-4xl font-bold text-white">
            Ready to Start Your Quran
          </p>

          <p className="text-3xl md:text-4xl font-bold text-white mt-2">
            Learning Journey?
          </p>

          <p className="text-lg md:text-xl text-white mt-3 flex gap-2">
          <FaStar className="text-amber-300"/>  Join hundreds of satisfied students  <FaStar className="text-amber-300" /> 
          </p>
        </div>

       
        <div>
          <button className="px-6 py-3 bg-white text-amber-700 font-semibold rounded-2xl hover:bg-gray-100 transition shadow-md">
            Contact Us
          </button>
        </div>

      </div>

    </div>
  );
};

export default Ready;