import React from 'react'
import { FaBuildingFlag, FaHeart, FaUserGroup } from "react-icons/fa6"
import { IoRibbonSharp } from "react-icons/io5"
const Values = () => {
  return (
    <div className='mt-8 py-10 bg-[#fafafa]'>
      <h1 className="text-7xl font-serif font-bold text-center mb-4 text-green-700">
        Our Values
      </h1>
      <p className='text-gray-600 text-center text-2xl mb-8'>
        The principles that guide our mission and shape our educational approach
      </p>
      <div className="grid md:grid-cols-4 gap-8 mt-16 px-8">
        {[
          [
            "Authenticity",
            "We maintain the authentic teachings of Quran with proper Tajweed and Tafsir",
            FaBuildingFlag
          ],
          [
            "Compassion",
            "We teach with patience and understanding, creating a supportive environment",
            FaHeart
          ],
          [
            "Excellence",
            "We strive for excellence in Quranic education through continuous improvement",
            IoRibbonSharp
          ],
          [
            "Community",
            "We build a global community of Quran learners supporting each other",
            FaUserGroup
          ],
        ].map(([heading, description, Icon], i) => (
          <div
            key={i}
            className="
              w-full h-80 bg-white rounded-3xl shadow-lg
              flex flex-col items-center justify-center
              transition duration-300 hover:scale-100 hover:shadow-2xl   transition duration-300 
    hover:scale-100 hover:shadow-2xl
    border border-transparent
    hover:border-amber-200
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
            <h2 className="text-xl font-bold">
              {heading}
            </h2>
            <p className="text-[18px] mt-3 text-gray-600 text-center px-4">
              {description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Values
