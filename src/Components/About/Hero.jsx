import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import {
  ChevronLeft,
  ChevronRight,
  Globe,
  ArrowRight,
} from "lucide-react";


const slides = [
  {
    title: "Worldwide Access",
    text: "Learn from anywhere, anytime with flexible scheduling options.",
    image:
      "https://images.unsplash.com/photo-1542816417-0983c9c9ad53?w=1600&auto=format&fit=crop&q=80",
  },

  {
    title: "Expert Quran Teachers",
    text: "Learn Quran from qualified teachers with personalized guidance.",
    image:
      "https://plus.unsplash.com/premium_photo-1677587536653-0d02efbb70ee?w=1600&auto=format&fit=crop&q=80",
  },

  {
    title: "Interactive Learning",
    text: "Experience modern Quran learning from your home.",
    image:
      "https://images.unsplash.com/photo-1616422840391-fa670d4b2ae7?w=1600&auto=format&fit=crop&q=80",
  },
];


const Hero = () => {
  return (

    <section className="bg-[#fafafa] pt-32 pb-16 px-4">


      <div className="max-w-[1600px] mx-auto">


        {/* Heading */}

        <div className="text-center">


          <h1
            className="
            text-4xl
            md:text-5xl
            font-serif
            font-bold
            text-[#087a55]
            leading-tight
            "
          >
            Discover the Beauty of Quranic
            <br />
            Learning
          </h1>


          <p
            className="
            mt-8
            text-gray-500
            text-lg
            max-w-4xl
            mx-auto
            "
          >
            Embark on a transformative journey with our expert teachers and
            innovative learning platform designed for spiritual growth.
          </p>


        </div>



        {/* Slider */}


        <div
          className="
          mt-16
          relative
          w-full
          mx-auto
          "
        >


          <Swiper


            modules={[
              Navigation,
              Pagination,
              Autoplay
            ]}


            autoplay={{
              delay:4000,
            }}


            loop={true}


            navigation={{
              nextEl: ".next",
              prevEl: ".prev",
            }}


            pagination={{
              clickable:true,
            }}


            className="
            rounded-[30px]
            overflow-hidden
            shadow-2xl
            ">


            {slides.map((slide,index)=>(


              <SwiperSlide key={index}>


                <div
                  className="
                  h-[420px]
                  md:h-[500px]
                  relative
                  flex
                  items-center
                  justify-center
                  "
                >


                  <img

                    src={slide.image}

                    className="
                    absolute
                    inset-0
                    w-full
                    h-full
                    object-cover
                    "

                    alt={slide.title}

                  />



                  <div
                    className="
                    absolute
                    inset-0
                    bg-gradient-to-r
                    from-[#087a55]/90
                    via-[#356b55]/70
                    to-[#9b7545]/70
                    "
                  />



                  <div
                    className="
                    relative
                    z-10
                    text-center
                    text-white
                    px-6
                    ">


                    <div
                      className="
                      w-16
                      h-16
                      rounded-full
                      border
                      border-white/30
                      flex
                      items-center
                      justify-center
                      mx-auto
                      mb-8
                      "
                    >

                      <Globe size={32}/>

                    </div>




                    <h2
                      className="
                      text-4xl
                      md:text-6xl
                      font-bold
                      "
                    >

                      {slide.title}

                    </h2>



                    <p
                      className="
                      mt-6
                      text-xl
                      "
                    >

                      {slide.text}

                    </p>




                    <div
                      className="
                      mt-10
                      flex
                      justify-center
                      gap-4
                      flex-wrap
                      "
                    >



                      <button
                        className="
                        bg-[#c18a45]
                        px-8
                        py-4
                        rounded-full
                        font-semibold
                        flex
                        items-center
                        gap-2
                        "
                      >

                        Start Learning

                        <ArrowRight size={18}/>

                      </button>




                      <button
                        className="
                        border
                        border-white
                        px-8
                        py-4
                        rounded-full
                        font-semibold
                        "
                      >

                        Learn More

                      </button>



                    </div>



                  </div>


                </div>


              </SwiperSlide>


            ))}


          </Swiper>





          {/* Arrows */}


          <button

            className="
            prev
            absolute
            left-6
            top-1/2
            z-20
            -translate-y-1/2
            w-14
            h-14
            rounded-full
            bg-black/30
            text-white
            flex
            items-center
            justify-center
            "

          >

            <ChevronLeft/>

          </button>





          <button

            className="
            next
            absolute
            right-6
            top-1/2
            z-20
            -translate-y-1/2
            w-14
            h-14
            rounded-full
            bg-black/30
            text-white
            flex
            items-center
            justify-center
            "

          >

            <ChevronRight/>

          </button>



        </div>



      </div>



    </section>

  );
};


export default Hero;