import React from "react";
import { HelpCircle, ChevronRight, GraduationCap, Clock3, User, } from "lucide-react";

const guides = [
  {
    title: "How to learn Norani Qaida?",
    desc: "Step-by-step guide to mastering the foundation of Quranic reading",
  },
  {
    title: "How to learn Quran online?",
    desc: "Comprehensive approach to effective online Quran learning",
  },
  {
    title: "Why memorize (Hifz) the Holy Quran?",
    desc: "Benefits and spiritual rewards of memorizing the Quran",
  },
  {
    title: "How to memorize the Holy Quran?",
    desc: "Proven techniques for successful Quran memorization",
  },
  {
    title:
      "How Will We Bridge The Difference Between The Traditional and Online Learning?",
    desc: "Our approach to combining traditional values with modern technology",
  },
  {
    title: "What is Tajweed?",
    desc: "Understanding the rules of proper Quranic recitation",
  },
  {
    title: "How to teach Tajweed to Kids?",
    desc: "Child-friendly methods for teaching Tajweed effectively",
  },
  {
    title: "What is Tafseer?",
    desc: "Exploring the science of Quranic interpretation",
  },
  {
    title: "When Should I Start Learning Tafseer?",
    desc: "Guidance on the right time to begin studying Quranic explanations",
  },
];

export default function QLS() {
  return (

    <section className="bg-[#f8fcfa] py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-8xl mx-auto">

        <div className="bg-white rounded-2xl md:rounded-3xl border border-[#d6eee4] shadow-lg p-5 sm:p-8 md:p-12 lg:p-14">

          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0c8a5b] leading-tight">
              Quran Learning Guide
            </h2>

            <p className="mt-4 text-slate-500 text-base sm:text-lg max-w-2xl mx-auto">
              Answers to common questions about Quran education and learning
              methodologies
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-5">
            {guides.map((item, index) => (
              <div
                key={index}
                className="group border border-[#d6eee4] rounded-2xl p-5 md:p-6 hover:shadow-md hover:border-[#0c8a5b]/30 transition-all duration-300 cursor-pointer"
              >
                <div className="flex justify-between items-start mb-5">
                  <div className="w-10 h-10 rounded-lg bg-[#eef7f3] flex items-center justify-center shrink-0">
                    <HelpCircle size={18} className="text-[#0c8a5b]" />
                  </div>

                  <ChevronRight
                    size={18}
                    className="text-slate-400 group-hover:text-[#0c8a5b] transition-colors shrink-0"
                  />
                </div>

                <h3 className="font-semibold text-slate-800 text-base md:text-[17px] leading-snug">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-500 mt-3 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 md:mt-10 bg-[#08b56f] rounded-2xl text-white py-6 md:py-8 px-5 md:px-8 shadow-lg">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center leading-tight">
            Why Choose Our Quran Courses?
          </h3>

          <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10 mt-6 md:mt-8">

            <div className="flex items-center gap-3 text-center">
              <GraduationCap size={22} />
              <span className="font-medium text-sm sm:text-base">
                Certified Teachers
              </span>
            </div>

            <div className="flex items-center gap-3 text-center">
              <Clock3 size={22} />
              <span className="font-medium text-sm sm:text-base">
                Flexible Timing
              </span>
            </div>

            <div className="flex items-center gap-3 text-center">
              <User size={22} />
              <span className="font-medium text-sm sm:text-base">
                One-on-One Sessions
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}