import { Shield, Heart, BookOpen, Star } from "lucide-react";

export default function CoreValues() {
  const values = [
    {
      title: "Faith & Integrity",
      description:
        "We teach the Quran with honesty and sincerity, staying true to Islamic principles.",
      icon: <Shield size={30} />,
      iconBg: "bg-[#1a5c45]",
    },
    {
      title: "Trust & Respect",
      description:
        "Building strong bonds with students and families through trust and mutual respect.",
      icon: <Heart size={30} />,
      iconBg: "bg-[#d9b13b]",
    },
    {
      title: "Excellence in Teaching",
      description:
        "Delivering high-quality Quran education with focus on Tajweed, Hifz, and Tafseer.",
      icon: <BookOpen size={30} />,
      iconBg: "bg-[#1a3a5c]",
    },
  ];

  return (
    <section className="bg-[#f5f2e8] py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          <div>
            <div className="flex items-center gap-2 mb-5">
              <span className="w-8 h-[2px] bg-[#d9b13b]" />
              <span className="text-[#d9b13b] text-xs sm:text-sm font-bold tracking-widest uppercase">
                Our Foundation
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a2e1a] mb-3 leading-tight">
              Our Core <span className="text-[#d9b13b]">Values</span>
            </h2>

            <div className="flex gap-2 mb-8">
              <span className="w-10 h-[3px] bg-[#1a5c45] rounded-full" />
              <span className="w-24 h-[3px] bg-[#d9b13b] rounded-full" />
            </div>

            <div className="bg-white rounded-2xl border-l-[6px] border-l-amber-300 border-gray-100 shadow-sm px-5 sm:px-7 py-6 sm:py-8 mb-6">
              <p className="text-gray-600 text-lg sm:text-xl lg:text-2xl leading-relaxed">
                The foundation of our Quranic journey - guiding every lesson
                with purpose and devotion.
              </p>
            </div>

            <div className="flex flex-col gap-5">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-gray-100 shadow-sm px-4 sm:px-7 py-5 sm:py-6 flex items-start gap-4 sm:gap-5"
                >
 
                  <div className="relative shrink-0">
                    <div
                      className={`w-14 h-14 sm:w-16 sm:h-16 lg:w-[72px] lg:h-[72px] rounded-xl ${value.iconBg} flex items-center justify-center text-white shadow-md`}
                    >
                      {value.icon}
                    </div>

                    <span className="absolute -top-1.5 -right-1.5 w-5 h-5 sm:w-6 sm:h-6 bg-[#d9b13b] rounded-full flex items-center justify-center">
                      <Star
                        size={10}
                        fill="white"
                        className="text-white"
                      />
                    </span>
                  </div>

                  <div>
                    <h3 className="text-[#1a5c45] font-bold text-lg sm:text-xl lg:text-2xl mb-2">
                      {value.title}
                    </h3>

                    <p className="text-gray-500 text-sm sm:text-base lg:text-lg leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 bg-[#1a5c45] rounded-2xl px-5 sm:px-7 py-5 sm:py-6">
              <p className="text-white text-base sm:text-lg lg:text-xl italic leading-relaxed mb-4">
                "Quran Learn Academy embodies these values in every lesson,
                creating a truly authentic Islamic learning environment."
              </p>

              <div className="flex items-center gap-2">
                <span className="w-6 h-[2px] bg-[#d9b13b]" />
                <span className="text-[#d9b13b] text-xs sm:text-sm font-semibold">
                  Parent Testimonial
                </span>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <div className="relative w-full max-w-[600px] mt-0 lg:mt-20">

              <div className="absolute inset-0 rounded-3xl border-2 border-[#c8d9c0] translate-x-3 translate-y-3 md:translate-x-4 md:translate-y-4" />

              <div className="relative rounded-3xl overflow-hidden shadow-xl">
                <img
                  src="https://a-hafiz.com/assets/quran3-CBUr-tmK.jpg"
                  alt="Authentic Islamic Education"
                  className="w-full h-[320px] sm:h-[420px] md:h-[500px] lg:h-[520px] object-cover transition-all duration-700 hover:scale-105"
                />

                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-4 sm:px-6 py-4 sm:py-6">
                  <p className="text-white font-bold text-lg sm:text-xl">
                    Authentic Islamic Education
                  </p>

                  <p className="text-gray-300 text-sm sm:text-base">
                    Teaching with devotion since 2010
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}