import React from "react";
import {
  FaBook,
  FaGraduationCap,
  FaGlobe,
  FaHeart,
  FaUsers,
  FaMedal,
  FaCheckCircle,
  FaUserGraduate,
  FaMapMarkerAlt,
  FaSmile,
} from "react-icons/fa";

const Mission = () => {
  const missionCards = [
    {
      icon: <FaBook />,
      title: "Preserve Quranic Knowledge",
      desc: "To preserve and propagate the authentic teachings of the Holy Quran through modern digital means while maintaining traditional values and accuracy.",
      points: ["Authentic Tajweed", "Original Arabic", "Traditional Methods"],
    },
    {
      icon: <FaGraduationCap />,
      title: "Quality Education for All",
      desc: "To make quality Quranic education accessible to everyone regardless of age, location, or background through affordable online classes.",
      points: ["Affordable Pricing", "All Age Groups", "Flexible Scheduling"],
    },
    {
      icon: <FaGlobe />,
      title: "Global Reach",
      desc: "To connect students worldwide with certified Quran teachers, breaking geographical barriers and creating a global learning community.",
      points: ["Worldwide Access", "Cultural Diversity", "24/7 Availability"],
    },
    {
      icon: <FaHeart />,
      title: "Spiritual Development",
      desc: "Helping students nurture spiritual growth and strengthen their relationship with Allah through Quranic teachings.",
      points: ["Character Building", "Islamic Values", "Spiritual Guidance"],
    },
    {
      icon: <FaUsers />,
      title: "Community Building",
      desc: "Creating a supportive online environment where students can learn, grow and connect with others worldwide.",
      points: ["Group Sessions", "Community Events", "Peer Support"],
    },
    {
      icon: <FaMedal />,
      title: "Excellence in Teaching",
      desc: "Maintaining the highest standards of education through certified teachers and quality assurance.",
      points: ["Certified Teachers", "Regular Training", "Quality Control"],
    },
  ];

  const stats = [
    {
      icon: <FaUserGraduate />,
      number: "5,000+",
      label: "Students Enrolled",
    },
    {
      icon: <FaGraduationCap />,
      number: "50+",
      label: "Certified Teachers",
    },
    {
      icon: <FaMapMarkerAlt />,
      number: "15+",
      label: "Countries Served",
    },
    {
      icon: <FaSmile />,
      number: "99%",
      label: "Satisfaction Rate",
    },
  ];

  return (
    <section className="bg-[#f8f8f2] py-24 px-8">
      <div className="max-w-8xl mx-auto">

       
        <div className="text-center mb-16">
          <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-green-700 to-amber-600 flex items-center justify-center text-white text-3xl">
            <FaBook />
          </div>

          <h2 className="text-6xl  font-bold mt-6 text-slate-800">
            Our <span className="text-amber-700">Mission</span>
          </h2>

          <div className="w-20 h-1 bg-amber-600 mx-auto mt-4 rounded-full"></div>

          <p className="max-w-3xl mx-auto mt-6 text-gray-600 text-xl leading-8">
            Dedicated to spreading the light of Quranic knowledge through
            innovative online education that respects tradition while embracing
            technology.
          </p>
        </div>

        
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {missionCards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all
               duration-300 p-8 min-h-[380px] relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-28 h-28 bg-[#f8f8f2] rounded-bl-[60px]"></div>

              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-[#f8f8f2] flex items-center justify-center text-amber-700 text-3xl mb-6">
                  {card.icon}
                </div>

                <h3 className="text-2xl font-bold text-slate-800 mb-4">
                  {card.title}
                </h3>

                <p className="text-[17px] text-gray-600 leading-8 mb-6">
                  {card.desc}
                </p>

                <div className="space-y-3">
                  {card.points.map((point, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <FaCheckCircle className="text-amber-800 text-lg" />
                      <span className="text-gray-700 text-[16px]">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg p-8 text-center hover:shadow-xl transition-all"
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-[#f8f8f2] flex items-center justify-center text-green-700 text-3xl mb-5">
                {item.icon}
              </div>

              <h3 className="text-4xl font-bold text-amber-700">
                {item.number}
              </h3>

              <p className="text-gray-600 mt-3 text-[16px]">
                {item.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Mission;