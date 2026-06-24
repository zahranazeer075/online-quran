import React from "react";
import {
  UserPlus,
  MessageCircle,
  Monitor,
  Award,
  GraduationCap,
} from "lucide-react";

const Online = () => {

  const steps = [
    {
      title: "Step 1: Registration",
      icon: <UserPlus />,
      text: "Students register through our website or WhatsApp. We collect details such as age, time zone, and preferred schedule.",
    },
    {
      title: "Step 2: Free Trial Class",
      icon: <MessageCircle />,
      text: "We provide a free trial session to introduce our teaching style and ensure student comfort.",
    },
    {
      title: "Step 3: Teacher Assignment",
      icon: <GraduationCap />,
      text: "Based on the student’s level and preference, we assign a qualified Quran teacher.",
    },
    {
      title: "Step 4: Online Classes",
      icon: <Monitor />,
      text: "Regular online Quran sessions begin through Zoom or Skype, with focus on Tajweed, memorization, and recitation.",
    },
    {
      title: "Step 5: Progress & Certification",
      icon: <Award />,
      text: "We track student progress and provide certificates upon successful course completion.",
    },
  ];


  return (
    <section className="
      min-h-screen
      px-6 py-16
      bg-gradient-to-b
      from-[#a27c3e]
      via-[#607846]
      to-[#087b65]
    ">

     
      <div className="text-center mb-16">

        <h1 className="
          text-4xl md:text-5xl
          font-extrabold
          text-[#ffe0a0]
        ">
          Our Online Quran Teaching Procedure
        </h1>

        <p className="
          mt-4
          text-white
          text-lg
          font-semibold
        ">
          We follow a structured process to ensure smooth learning for every student.
        </p>

      </div>



     

      <div className="
        max-w-7xl mx-auto
        grid grid-cols-1
        md:grid-cols-2
        xl:grid-cols-3
        gap-12
      ">

        {steps.map((item,index)=>(
          
          <div
            key={index}
            className={`
              relative
              bg-white
              rounded-2xl
              border-2 border-[#e8b86d]
              shadow-xl
              px-8 py-12
              text-center
              ${index===4 ? "xl:col-start-2" : ""}
            `}
          >


           
            <div className="
              absolute
              -top-8
              left-1/2
              -translate-x-1/2

              w-20 h-20

              rounded-full

              bg-gradient-to-br
              from-white
              to-[#d7bc8d]

              flex
              items-center
              justify-center

              text-[#ad7830]
              shadow-lg
            ">

              {React.cloneElement(item.icon,{
                size:38,
                strokeWidth:2.5
              })}

            </div>



            <h2 className="
              text-2xl
              font-bold
              text-[#38291d]
              mb-5
            ">
              {item.title}
            </h2>


            <p className="
              text-[#42506a]
              text-lg
              leading-8
              font-medium
            ">
              {item.text}
            </p>


          </div>

        ))}


      </div>




    </section>
  );
};


export default Online;
