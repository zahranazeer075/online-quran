import React from 'react'
import { Users, BookOpen, Globe, GraduationCap } from "lucide-react"

const Who = () => {
  return (
    <div className='mt-8 py-10 bg-[#fafafa]'>
      
      <h1 className="text-7xl font-serif font-bold text-center mb-4 text-green-700">
        Who We Are
      </h1>

      <p className='text-gray-600 text-center text-2xl mb-8'>
        Meet the dedicated Online Quran Academy, passionate educators
         with authenticity and love.
      </p>

      <div className="grid md:grid-cols-4 gap-8 mt-16 px-8">
        
        {[
          ["5,000+", "Students Taught", Users],
          ["20+", "Years Experience", BookOpen],
          ["15+", "Countries Served", Globe],
          ["50+", "Qualified Teachers", GraduationCap],
          
        ].map(([number, title, Icon], i) => (
          <div 
            key={i} 
            className="
              w-full h-60 bg-white rounded-3xl shadow-lg 
              flex flex-col items-center justify-center
              transition duration-300 hover:scale-105 hover:shadow-2xl
            "
          >

           
            <div className="
              w-20 h-20 mb-4
              bg-amber-50 rounded-full 
              flex items-center justify-center
              shadow-md hover:bg-amber-100
            ">
              <Icon className="text-amber-800 w-10 h-10" />
            </div>


            <h2 className="text-5xl font-bold text-green-700">
              {number}
            </h2>

            <p className="text-base mt-2 text-gray-600">
              {title}
            </p>

          </div>
        ))}

      </div>

    </div>
  )
}

export default Who