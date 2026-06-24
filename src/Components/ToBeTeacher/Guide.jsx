import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { RxCrossCircled } from "react-icons/rx";

const Guide = () => {
  return (
    <section className="w-full bg-gray-50 py-16 px-4">

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
      
        <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-8 text-center border-t-6 border-t-green-700">
          <div className="flex items-center justify-center gap-3 mb-6">
            <FaRegCheckCircle className="text-green-700 w-9 h-9" />
            <h1 className="text-3xl text-green-700 font-semibold">Do</h1>
          </div>

            <h3 className="text-xl text-green-700 mb-3" >
            ✓ <span className="text-gray-600 text-xl">Appear clearly in your video (face visible).</span> 
          </h3>
           <h3 className="text-xl text-green-700 mb-4" >
            ✓ <span className="text-gray-600 text-xl">Duration should be between 1–3 minutes.</span> 
          </h3>
            <h3 className="text-xl text-green-700 mb-4" >
            ✓ <span className="text-gray-600 text-xl">Speak all the languages you plan to teach.</span> 
          </h3>
            <h3 className="text-xl text-green-700 mb-4" >
            ✓ <span className="text-gray-600 text-xl">Ensure good lighting and clarity.</span> 
          </h3>

        </div>

        <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-8 text-center border-t-6 border-t-green-700">
          <div className="flex items-center justify-center gap-3 mb-6">
            <RxCrossCircled className="text-green-700 w-10 h-10 font-bold"/>
            <h1 className="text-3xl text-green-700 font-semibold">Do Not</h1>
          </div>

            <h3 className="text-xl text-green-700 mb-3" >
            ✗ <span className="text-gray-600 text-xl">Share personal contact details.</span> 
          </h3>
           <h3 className="text-xl text-green-700 mb-4" >
            ✗ <span className="text-gray-600 text-xl">Advertise or promote other services.</span> 
          </h3>
            <h3 className="text-xl text-green-700 mb-4" >
            ✗ <span className="text-gray-600 text-xl"> Use copyrighted background music.</span> 
          </h3>
            <h3 className="text-xl text-green-700 mb-4" >
            ✗ <span className="text-gray-600 text-xl">Record vertical or square videos.</span> 
          </h3>

        </div>

      </div>
    </section>
  );
};

export default Guide;