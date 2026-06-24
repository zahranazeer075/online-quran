import { BookOpen, Users, Globe, Monitor, Headphones, Star, } from "lucide-react";

export default function KeyFeatures() {
  const features = [
    {
      title: "One-on-One Quran Classes",
      icon: <BookOpen size={22} />,
    },
    {
      title: "Qualified Male & Female Tutors",
      icon: <Users size={22} />,
    },
    {
      title: "Flexible Timings & Time Zones",
      icon: <Globe size={22} />,
    },
    {
      title: "Interactive Online Learning",
      icon: <Monitor size={22} />,
    },
    {
      title: "Free Trial Classes Available",
      icon: <Headphones size={22} />,
    },
    {
      title: "Monthly Progress Reports",
      icon: <Star size={22} />,
    },
  ];

  return (
    <section
      className="relative py-12 md:py-16 lg:py-20 bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=2000')",
      }}
    >
 
      <div className="absolute inset-0 bg-[#0b6d5a]/75"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-10 md:mb-14">
          <div className="inline-block border border-[#d9b13b] rounded-full px-4 sm:px-5 py-1 mb-4">
            <span className="text-[#d9b13b] text-xs sm:text-sm font-semibold tracking-widest uppercase">
              Why Choose Us
            </span>
          </div>

          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-3">
            Our Key Features
          </h2>

          <div className="w-20 h-[3px] bg-[#d9b13b] mx-auto mt-5 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] xl:grid-cols-[420px_1fr] gap-10 lg:gap-12 items-center">

          <div className="flex justify-center">
            <div className="relative w-[240px] h-[240px] sm:w-[300px] sm:h-[300px] lg:w-[340px] lg:h-[340px] hover:scale-105 transition-all duration-300 rounded-full border-[5px] border-[#d9b13b] bg-gradient-to-br from-[#0a8b67] via-[#0f7765] to-[#1a4858] flex items-center justify-center">

              <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold text-center leading-tight">
                KEY
                <br />
                FEATURES
              </h2>

              <span className="absolute top-8 lg:top-10 left-1/2 -translate-x-1/2 w-3 h-3 lg:w-4 lg:h-4 rounded-full bg-[#d9b13b]" />

              <span className="absolute bottom-8 lg:bottom-10 left-1/2 -translate-x-1/2 w-3 h-3 lg:w-4 lg:h-4 rounded-full bg-[#d9b13b]" />

              <span className="absolute left-8 lg:left-10 top-1/2 -translate-y-1/2 w-3 h-3 lg:w-4 lg:h-4 rounded-full bg-[#d9b13b]" />

              <span className="absolute right-8 lg:right-10 top-1/2 -translate-y-1/2 w-3 h-3 lg:w-4 lg:h-4 rounded-full bg-[#d9b13b]" />
            </div>
          </div>

          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden min-h-[90px] rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md flex items-center gap-4 px-4 sm:px-5 shadow-md hover:bg-white/15 transition-all duration-300"
                >
                  <span className="absolute bottom-0 left-6 h-[3px] w-0 bg-[#d9b13b] rounded-full transition-all duration-300 group-hover:w-[60%]" />

                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full hover:rotate-12 hover:scale-110 transition-all duration-300 bg-[#008a63] flex items-center justify-center text-white shrink-0 shadow-md">
                    {feature.icon}
                  </div>

                  <h3 className="text-white text-sm sm:text-base lg:text-lg font-semibold leading-tight">
                    {feature.title}
                  </h3>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <p className="text-white text-base sm:text-lg mb-6 px-2">
                Experience the difference with our comprehensive Quran learning
                platform
              </p>

              <button className="bg-[#d9b13b] hover:bg-[#c8a232] text-white font-semibold text-base sm:text-lg px-6 sm:px-10 py-3 rounded-xl transition-all w-full sm:w-auto">
                Start Learning Today
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}