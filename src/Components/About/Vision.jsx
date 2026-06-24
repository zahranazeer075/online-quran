import React from "react";
import { FaGlobe, FaBook, FaUsers } from "react-icons/fa";

const Vision = () => {
  const cards = [
    {
      icon: <FaGlobe />,
      title: "Global Reach",
      text:
        "Spreading Quran education worldwide through online classes that break barriers of distance and language.",
    },
    {
      icon: <FaBook />,
      title: "Authentic Knowledge",
      text:
        "Teaching the Quran with Tajweed, Tafseer, and Islamic values to nurture true understanding and love for the Book of Allah.",
      featured: true,
    },
    {
      icon: <FaUsers />,
      title: "Community Growth",
      text:
        "Building a strong Muslim community of learners who live by the Quran and Sunnah, guiding future generations.",
    },
  ];

  return (
    <section className="w-full bg-[#f9f5ef] py-20 px-6">

      <div className="text-center max-w-3xl mx-auto mb-14 text-2xl">
        <h2 className="text-4xl md:text-5xl font-bold text-[#b08d57]">
          Our Vision
        </h2>
        <p className="mt-6 text-gray-600 leading-relaxed text-xl">
          Our vision is to make the  accessible to every Muslim around
          the globe, regardless of age, location, or background. We aim to
          connect students with qualified Quran teachers who guide them with
          love, patience, and authentic knowledge.
        </p>
      </div>


      <div className="flex flex-col md:flex-row gap-10 justify-center items-stretch">
        {cards.map((item, index) => (
          <div
            key={index}
            className="relative w-full md:w-[400px] lg:w-[440px] min-h-[460px]
            bg-white rounded-2xl shadow-lg border border-[#e6d5b8]
            p-10 flex flex-col items-center text-center
            hover:shadow-2xl transition duration-300"
          >

            {item.featured && (
              <span className="absolute top-4 right-4 bg-[#b08d57] text-white text-xs px-3 py-1 rounded-full">
                Featured
              </span>
            )}


            <div className="w-20 h-20 flex items-center justify-center rounded-full bg-[#b08d57] text-white text-3xl mb-6">
              {item.icon}
            </div>


            <div className="text-[#b08d57] mb-4  text-2xl">★★★★★</div>


            <h3 className=" font-semibold text-[#b08d57] text-2xl  mb-4 ">
              {item.title}
            </h3>


            <p className="text-[#b08d57] leading-relaxed text-xl">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Vision;
