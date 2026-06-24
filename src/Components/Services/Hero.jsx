import React from "react";

const Hero = () => {
  return (
    <div className="h-[100vh] w-full bg-black justify-center items-center flex flex-col relative px-4 text-center">

      {/* Badge */}
      <button className="text-amber-400 border border-amber-400 py-1.5 px-3 rounded-full mt-20 sm:mt-24 md:mt-26 text-xs sm:text-sm">
        Premium Quran Education
      </button>

      {/* Heading */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-bold mt-5 sm:mt-7 leading-tight">
        Discover The Beauty Of{" "}
        <span className="text-amber-400">Quran Learning</span>
      </h1>

      {/* Paragraph */}
      <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 font-normal w-full max-w-[95%] sm:max-w-xl md:max-w-2xl lg:max-w-3xl text-center mt-4 leading-relaxed">
        Transform your spiritual journey with certified teachers, flexible
        schedules, and personalized Quran learning programs tailored for every
        age and level.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8 sm:mt-10 w-full px-4 sm:px-0">
        <button
          className="text-white font-medium bg-[#B8941F] transition-all duration-300 transform hover:scale-105 shadow-lg text-base sm:text-lg py-3 px-6 sm:px-8 rounded-xl w-full sm:w-auto"
        >
          Start Learning Today
        </button>

        <button
          className="text-[#B8941F] border-2 hover:text-white hover:bg-[#B8941F] border-[#B8941F] font-medium text-base sm:text-lg py-3 px-6 sm:px-10 rounded-xl w-full sm:w-auto"
        >
          Explore Services
        </button>
      </div>

      {/* Wave */}
      <div
        className="w-full overflow-hidden absolute bottom-0 left-0"
        style={{ height: "120px" }}
      >
        <svg
          viewBox="0 0 1440 120"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0,40 C200,90 400,10 600,50
         C800,90 1000,20 1200,55
         C1300,72 1380,60 1440,50
         L1440,120 L0,120 Z"
            fill="#8B7D2A"
            opacity="0.85"
          />

          <path
            d="M0,60 C180,20 360,80 540,45
         C720,10 900,75 1080,40
         C1260,5 1380,55 1440,45
         L1440,120 L0,120 Z"
            fill="#C9A227"
          />

          <path
            d="M0,80 C150,50 300,95 500,65
         C700,35 850,85 1050,60 C1200,42 1350,70 1440,62
         L1440,120 L0,120 Z"
            fill="#D4AA30"
            opacity="0.75"
          />
        </svg>
      </div>
    </div>
  );
};

export default Hero;