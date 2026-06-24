import React from "react";

const Our = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid lg:grid-cols-2 bg-[#F8F8F8] border border-amber-200 rounded-[32px] overflow-hidden">
        
      
        <div className="p-8 md:p-12 lg:p-14 flex flex-col justify-center">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-full bg-[#F8EEC7] flex items-center justify-center">
              <span className="text-[#B88A2D] text-xl">★</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-semibold text-[#0D7A5F] font-serif tracking-tight">
              Our Story
            </h2>
          </div>

          <div className="space-y-6 text-slate-500 text-[18px] leading-8 font-normal tracking-[0.2px]">
            <p>
              Founded in 2003, Online Quran Academy began with a simple
              mission: to make authentic Quranic education accessible to
              Muslims worldwide. Our vision was to bridge the gap between
              traditional Islamic education and modern technology.
            </p>

            <p>
              Our founder, Dr. Ahmed Al-Misri, recognized the challenges many
              Muslims faced in accessing qualified Quran teachers. With
              dedication and divine guidance, we've grown into a global
              institution serving thousands of students.
            </p>

            <p>
              Today, we take pride in our team of certified teachers who carry
              the legacy of authentic Islamic knowledge while embracing
              innovative teaching methodologies.
            </p>
          </div>
        </div>

        {/* Right Image */}
        <div className="h-[580px]  p-4">
          <img
            src="https://plus.unsplash.com/premium_photo-1678490286446-71e04ddce2dd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D"
            alt="Our Story"
            className="w-full h-full object-cover rounded-3xl transition-all duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default Our;