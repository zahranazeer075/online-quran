import { Gift, Book, Star, Tablet, Users, Globe, BookOpen, ArrowRight, } from "lucide-react";

const features = [
  { icon: <Gift size={20} />, label: "Free Trial Classes" },
  { icon: <Book size={20} />, label: "Word by word Quran learning with Tajweed" },
  { icon: <Star size={20} />, label: "Special focus on slow learners" },
  { icon: <Tablet size={20} />, label: "Online Quran memorization" },
  { icon: <Users size={20} />, label: "Female teachers for women & children" },
  { icon: <Globe size={20} />, label: "Expert teachers with English fluency" },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-[#f5f0e8] py-12 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
 
      <div className="text-center mb-10 md:mb-14">
        <span className="inline-block border border-[#b8973a] text-[#b8973a] text-xs sm:text-sm tracking-widest rounded-full px-4 py-1.5 mb-4">
          EXCELLENCE IN QURAN EDUCATION
        </span>

        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-[#1a2a1a] leading-tight">
          Why <span className="text-[#c9a227]">Choose Us?</span>
        </h2>

        <div className="mx-auto mt-4 h-1.5 w-16 rounded-full bg-gradient-to-r from-[#1a5c3a] to-[#c9a227]" />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">

        <div className="flex justify-center">
          <div className="relative w-full max-w-md lg:max-w-xl rounded-2xl overflow-hidden aspect-[4/5] bg-[#d4cfc5]">
            <img
              src="https://a-hafiz.com/assets/recite-C9nGnIdG.jpg"
              alt="Young girl praying"
              className="w-full h-full object-cover"
            />

            <div className="absolute bottom-0 right-0 w-16 h-16 md:w-20 md:h-20 bg-[#1a5c3a] rounded-full flex items-center justify-center text-white">
              <BookOpen size={22} />
            </div>
          </div>
        </div>

        <div>
          <div className="bg-white rounded-2xl p-4 md:p-5 text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed mb-4">
            At{" "}
            <span className="text-[#1a5c3a] font-semibold">
              Quran Learn Academy
            </span>
            , we strive to enlighten Muslims with the teachings of the Holy
            Quran, guiding lives according to the principles of Islam. With a
            step-by-step process and focus on{" "}
            <span className="text-[#c9a227] font-medium">Tajweed</span>, we
            ensure a comprehensive learning experience for every student.
          </div>

          <div className="bg-white rounded-2xl p-4 md:p-5 text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed mb-5">
            Our flexible online classes allow you to learn at your own pace,
            from the comfort of your home — anytime, anywhere. Whether at home
            or traveling, your connection with the Quran continues without
            interruption.
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {features.map(({ icon, label }) => (
              <div
                key={label}
                className="group relative bg-white rounded-2xl p-4 md:p-5 flex items-center gap-3 text-sm md:text-base lg:text-lg font-medium text-gray-800 leading-snug overflow-hidden"
              >
                <div className="w-10 h-10 bg-[#1a5c3a] hover:rotate-12 hover:scale-110 transition-all duration-300 rounded-full flex items-center justify-center text-white flex-shrink-0">
                  {icon}
                </div>

                <span>{label}</span>

                <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#c9a227] transition-all duration-500 group-hover:w-full"></div>
              </div>
            ))}
          </div>

          <button className="mt-8 md:mt-10 flex items-center justify-center gap-2 bg-[#c9a227] text-white text-base md:text-lg font-medium px-6 md:px-8 py-3 md:py-4 rounded-lg hover:bg-[#b8892a] transition-colors w-full sm:w-fit">
            Start Your Journey
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}