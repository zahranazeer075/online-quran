import React from "react";

const Hero = () => {
  return (
    <section className="relative w-full h-[70vh] flex items-center justify-center">
     
      <div className="absolute inset-0">
        <img
          src="https://deenalfurqan.com/wp-content/uploads/2025/09/best-quran-teacher-online-muslim-tutors-1024x683.png"
          alt="Become a Teacher"
          className="w-full h-full object-cover"
        />
    
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="relative z-10 text-center px-4">
        <h1 className="text-3xl md:text-5xl mt-10 font-bold text-[#fbb95c]">
          Become a Teacher
        </h1>
      </div>
    </section>
  );
};

export default Hero;
