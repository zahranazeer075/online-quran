import React from "react";

const Meet = () => {

  const team = [
    {
      name: "Dr. Ahmed Al-Misri",
      role: "Founder & Senior Quran Teacher",
      tag: "Tajweed and Qira'at",
      years: "25+ years",
      img: "https://plus.unsplash.com/premium_photo-1664300894274-cfdf8cd3af6e?w=500&auto=format&fit=crop&q=60",
      desc: "PhD in Islamic Studies from Al-Azhar University. Dedicated to teaching Quran with proper Tajweed for over two decades."
    },
    {
      name: "Sister Fatima Khan",
      role: "Head of Women's Education",
      tag: "Quran Memorization",
      years: "15+ years",
      img: "https://plus.unsplash.com/premium_photo-1681493954097-3a8190323231?w=500&auto=format&fit=crop&q=60",
      desc: "Specializes in Hifz programs for women and children. Certified Quran teacher with Ijazah in Hafs 'an Asim."
    },
    {
      name: "Sheikh Ibrahim Malik",
      role: "Senior Qari & Instructor",
      tag: "Advanced Tajweed",
      years: "20+ years",
      img: "https://plus.unsplash.com/premium_photo-1677523780272-b89f5f128472?w=500&auto=format&fit=crop&q=60",
      desc: "Renowned Qari with participation in international Quran competitions. Expert in teaching proper pronunciation."
    },
    {
      name: "Sister Aisha Rahman",
      role: "Children's Program Director",
      tag: "Quran for Kids",
      years: "12+ years",
      img: "https://plus.unsplash.com/premium_photo-1683134266530-425af5d86e67?w=500&auto=format&fit=crop&q=60",
      desc: "Develops engaging Quran learning programs for children. Specialized in child education psychology and Islamic pedagogy."
    },
    {
      name: "Brother Yusuf Hassan",
      role: "Technology Specialist",
      tag: "Digital Learning",
      years: "8+ years",
      img: "https://img.magnific.com/premium-photo/portrait-young-man-sitting-sofa-home_1048944-3615539.jpg",
      desc: "Combines traditional Quran teaching with modern technology. Manages our online learning platform and digital resources."
    },
    {
      name: "Sister Zainab Ali",
      role: "Student Support Coordinator",
      tag: "Student Counseling",
      years: "10+ years",
      img: "https://plus.unsplash.com/premium_photo-1681492187779-5b021b43f4de?w=500&auto=format&fit=crop&q=60",
      desc: "Provides guidance and support to students throughout their Quran learning journey. Ensures smooth learning experience."
    }
  ];


  return (
    <section className="
    bg-white 
    py-12 
    min-h-screen
    ">


      <div className="
      text-center 
      mb-12
     
      ">

        <h1 className="
        text-6xl 
        font-serif 
        font-bold 
        text-emerald-700
        ">
          Meet Our Team
        </h1>

        <p className="
        text-gray-500 
        mt-3 
        text-xl
        ">
          Dedicated educators committed to your Quranic learning journey
        </p>

      </div>



      <div className="
      max-w-8xl mx-auto
      grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
      gap-8 px-6
      ">


        {team.map((member,index)=>(

          <div
          key={index}
          className="
          group
          bg-white
          rounded-2xl
          overflow-hidden
          border border-yellow-100
          shadow-xl
          hover:scale-[1.03]
          hover:-translate-y-2
          hover:shadow-2xl
          transition-all
          duration-500
          ease-in-out
          min-h-[520px]
          "
          >


            <div className="
            relative 
            h-60
            overflow-hidden
            ">


              <img
              src={member.img}
              className="
              w-full h-full
              object-cover
              transition-transform
              duration-700
              ease-in-out
              group-hover:scale-110
              "
              />


              <span className="
              absolute
              top-4 right-4
              bg-yellow-600
              text-white
              text-sm
              px-4 py-2
              rounded-full
              ">

                📅 {member.years}

              </span>


            </div>



            <div className="p-7">


              <h2 className="
              text-2xl
              font-bold
              text-gray-800
              ">
                {member.name}
              </h2>


              <p className="
              text-emerald-700
              text-xl
              font-medium
              ">
                {member.role}
              </p>



              <span className="
              inline-block
              mt-5
              bg-yellow-50
              text-yellow-700
              text-xl
              font-bold
              px-4
              py-2
              rounded-full
              ">
                {member.tag}
              </span>



              <p className="
              mt-5
              text-xl
              text-gray-600
              leading-7
              ">
                {member.desc}
              </p>


            </div>


          </div>

        ))}


      </div>


    </section>
  );
};


export default Meet;