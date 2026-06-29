import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const slides = [
  {
    id: 1,
    title: "Online Nurani Qaida Course",
    desc: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
    text: "Start from the Arabic alphabet and master makharij with certified tutors.",
    img: "https://images.unsplash.com/photo-1665564309098-b7c40a22176d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D",
  },
  {
    id: 2,
    title: "Interactive Quran Classes",
    desc: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
    text: "Live one-on-one sessions, feedback, and personalized lesson plans.",
    img: "https://images.unsplash.com/photo-1652087714531-5ab08352c96d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI1fHx8ZW58MHx8fHx8",
  },
  {
    id: 3,
    title: "Learn Anytime, Anywhere",
    desc: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
    text: "Flexible timings for kids and adults—join from any device.",
    img: "https://plus.unsplash.com/premium_photo-1723532414101-404f12334ff6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQwfHx8ZW58MHx8fHx8",
  },
];

export default function Slider() {
  return (
    <div className="w-full h-[100vh] min-h-[650px] sm:min-h-[700px] overflow-hidden">
      <Swiper
        key="hero-slider"
        modules={[Pagination, Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        loop={true}
        speed={1000}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        className="h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full">

              <img
                src={slide.img}
                alt={slide.title}
                className="w-full h-full object-cover"
              />

              <div
                className="absolute inset-0 z-10"
                style={{
                  background:
                    "linear-gradient(to right, rgba(15,60,50,0.78) 0%, rgba(20,70,80,0.60) 60%, rgba(20,80,90,0.35) 100%)",
                }}
              />

              <div className="absolute inset-0 flex items-center justify-center text-center px-4 sm:px-6 md:px-10 lg:px-16 z-20">
                <div className="max-w-xs sm:max-w-xl md:max-w-3xl lg:max-w-5xl flex flex-col items-center gap-3 sm:gap-4">

                  <div className="w-14 sm:w-18 md:w-24 h-[4px] bg-[#c9972c] rounded-full" />

                  <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white drop-shadow-lg leading-tight">
                    {slide.title}
                  </h2>

                  <div className="flex items-center gap-2 sm:gap-3 w-full justify-center">
                    <div className="h-[1.5px] w-8 sm:w-14 md:w-20 bg-[#c9972c]" />

                    <p
                      className="text-[#c9972c] text-base sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center"
                      style={{ fontFamily: "serif" }}
                      dir="rtl"
                    >
                      {slide.desc}
                    </p>

                    <div className="h-[1.5px] w-8 sm:w-14 md:w-20 bg-[#c9972c]" />
                  </div>

                  <p className="text-sm sm:text-lg md:text-xl lg:text-2xl text-white/90 drop-shadow max-w-4xl leading-relaxed">
                    {slide.text}
                  </p>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-4 sm:mt-6 w-full sm:w-auto">

                    <button className="bg-[#1a6b3a] hover:bg-[#145530] transition-colors py-3 px-6 sm:px-8 text-sm sm:text-base lg:text-lg text-white rounded-md font-semibold w-full sm:w-auto shadow-lg">
                      Explore Our Courses
                    </button>

                    <button className="border border-[#c9972c] hover:bg-[#c9972c]/10 transition-colors py-3 px-6 sm:px-8 text-sm sm:text-base lg:text-lg text-[#c9972c] rounded-md font-semibold w-full sm:w-auto bg-transparent">
                      Free Trial Class
                    </button>

                  </div>

                </div>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx>{`
        .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: #ffffff;
          opacity: 0.6;
        }

        .swiper-pagination-bullet-active {
          background: #c9972c;
          opacity: 1;
        }

        @media (max-width: 640px) {
          .swiper-pagination {
            bottom: 20px !important;
          }
        }
      `}</style>
    </div>
  );
}