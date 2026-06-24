import React from "react";

const Requirement = () => {
  return (
    <div className="min-h-screen w-full bg-gray-50 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-12">
      
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase text-[#AF864C] text-center">
        Our Requirements
      </h1>

      <p className="text-base sm:text-lg font-normal text-gray-500 mt-4 w-full sm:w-[90%] md:w-[75%] lg:w-[60%] text-center leading-relaxed">
        Watch how our professional teachers create engaging introduction videos
        for Qur’an and Islamic Studies. Follow these refined guidelines to
        record your own perfect introduction.
      </p>

      <div className="w-full max-w-6xl mt-10">
        <h1 className="text-2xl sm:text-3xl text-green-700 font-bold mb-6">
          Example Videos
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 border-t-[6px] border-t-green-700 gap-5 items-center bg-gray-50 rounded-2xl overflow-hidden shadow-md">
          
          <div className="p-6 md:p-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-700 mb-6">
              Islamic Studies Instructor
            </h2>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              Our teachers demonstrate a calm, confident, and respectful
              approach. Speak slowly and clearly while maintaining eye contact
              with the camera. Begin with a short introduction and highlight
              your experience in teaching Islamic Studies.
            </p>
          </div>

          <div className="h-full w-full overflow-hidden">
            <img
              src="https://www.shutterstock.com/image-photo/student-watching-online-video-conference-260nw-2085430405.jpg"
              alt="Instructor"
              className="w-full h-[220px] sm:h-[280px] md:h-[350px] object-cover transition-all duration-300 hover:scale-105"
            />
          </div>

        </div>
      </div>

    </div>
  );
};

export default Requirement;