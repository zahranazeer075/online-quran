import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Ahmed Khan",
    role: "Student",
    text:
      "Alhamdulillah, learning Quran online has been life-changing. The and explains with tajweed rules clearly.",
    img: "https://plus.unsplash.com/premium_photo-1678559460700-8a1d42ce8239?w=500&auto=format&fit=crop&q=60",
  },
  {
    name: "Ali Hassan",
    role: "Student",
    text:
      "Very good experience. My recitation improved a lot and I feel more confident now.",
    img: "https://images.unsplash.com/photo-1627091908405-30bd51eec537?w=500&auto=format&fit=crop&q=60",
  },
  {
    name: "Sara Noor",
    role: "Student",
    text:
      "Amazing teaching method and very friendly environment. Highly recommended!",
    img: "https://plus.unsplash.com/premium_photo-1677014616443-2954b327f404?w=500&auto=format&fit=crop&q=60",
  },
];

const Say = () => {
  return (
    <div className="w-full py-20 px-4 bg-gradient-to-r from-[#8b6b4a] to-[#c8a47a]">

      <div className="text-center mb-10 text-white">
        <h2 className="text-3xl md:text-5xl font-bold">
          What Our Students Say
        </h2>
        <p className="mt-2 tracking-widest text-xl font-bold">
          STUDENT TESTIMONIALS
        </p>
      </div>

      <div className="max-w-7xl mx-auto">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10 relative">

                <div className="flex flex-col md:flex-row items-center gap-6">

                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-28 h-28 md:w-36 md:h-36 rounded-full object-cover border-4 border-[#b08d57]"
                  />

                  <div className="text-center md:text-left flex-1">

                    <div className="text-yellow-500 mb-2 text-3xl">★★★★★</div>

                    <p className="text-gray-600 italic text-xl">
                      “{item.text}”
                    </p>

                    <h4 className="mt-4 font-bold text-gray-800 text-xl">
                      {item.name}
                    </h4>

                    <p className="text-xl text-gray-500">{item.role}</p>
                  </div>

                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style>
        {`
          .swiper-pagination-bullet {
            background: white !important;
          }
        `}
      </style>

    </div>
  );
};

export default Say;