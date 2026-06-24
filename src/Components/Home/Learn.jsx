import React from "react";
import { Star, Clock3 } from "lucide-react";

const courses = [
  {
    id: "1",
    title: "Basic Quran Reading Course",
    description: "Learn the fundamentals of Quranic Arabic and proper pronunciation",
    duration: "3-6 months",
    level: "Beginner",
  },
  {
    id: "2",
    title: "Quran Reading with Tajweed",
    description: "Master the rules of Tajweed for beautiful and correct recitation",
    duration: "6-12 months",
    level: "Intermediate",
  },
  {
    id: "3",
    title: "Quran Memorization Course",
    description: "Systematic approach to memorizing the Holy Quran (Hifz)",
    duration: "2-5 years (depending on pace)",
    level: "Advanced",
  },
  {
    id: "4",
    title: "Quran With Tafseer Course",
    description: "Understand the meanings and explanations of Quranic verses",
    duration: "1-2 years",
    level: "Intermediate to Advanced",
  },
];

export default function Learn() {
  return (

    <section className="bg-[#f7faf8] py-12 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        <div className="flex justify-center mb-6 md:mb-8">
          <div className="flex items-center gap-2 bg-[#e9f3ef] text-[#0c8a5b] px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-semibold">
            <Star size={14} fill="currentColor" />
            Premium Quran Courses
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#0c8a5b] leading-tight">
            Learn Quran with{" "}
            <span className="text-[#d4aa2b]">Expert Guidance</span>
          </h2>

          <div className="w-20 sm:w-24 h-1.5 bg-[#d4aa2b] rounded-full mx-auto mt-4 md:mt-6" />

          <p className="max-w-3xl mx-auto mt-6 md:mt-10 text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed px-2">
            Discover our comprehensive Quran learning programs designed for all
            ages and levels.
            <br className="hidden sm:block" />
            Start your spiritual journey with certified teachers and flexible
            scheduling.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-12 md:mt-20">
          {courses.map((course) => (
            <div
              key={course.id}
              className="group bg-white border border-[#d7efe5] rounded-3xl p-4 sm:p-5 shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">

                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#e8f2ef] shadow flex items-center justify-center text-[#0c8a5b] text-2xl sm:text-3xl font-bold flex-shrink-0 mx-auto sm:mx-0">
                  {course.id}
                </div>

                <div className="flex-1 text-center sm:text-left">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                      {course.title}
                    </h3>

                    <span className="bg-[#f8f0dd] text-[#d4aa2b] text-xs font-semibold px-4 py-2 rounded-full self-center lg:self-auto">
                      {course.level}
                    </span>
                  </div>

                  <p className="text-slate-500 text-base sm:text-lg mt-4 leading-relaxed">
                    {course.description}
                  </p>

                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6 sm:mt-8">
                    <div className="flex items-center gap-2 text-slate-500 font-medium text-sm sm:text-base">
                      <Clock3 size={16} />
                      {course.duration}
                    </div>

                    <button className="w-full sm:w-auto bg-gradient-to-r from-[#0c8a5b] to-[#d4aa2b] text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-lg hover:scale-105 transition duration-300">
                      Explore Course
                    </button>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}