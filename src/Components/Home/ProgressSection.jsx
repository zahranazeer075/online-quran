import { CalendarDays, Smile, Globe, BarChart3, TrendingUp, } from "lucide-react";

const stats = [
  {
    icon: <CalendarDays size={38} />,
    value: "12+",
    label: "Years of Experience",
  },
  {
    icon: <Smile size={38} />,
    value: "50+",
    label: "Satisfied Clients",
  },
  {
    icon: <Globe size={38} />,
    value: "17+",
    label: "Countries We Operate",
  },
  {
    icon: <BarChart3 size={38} />,
    value: "200K+",
    label: "Managed Marketing",
  },
  {
    icon: <TrendingUp size={38} />,
    value: "2.9M+",
    label: "Clients Gain",
  },
];

export default function ProgressSection() {
  return (
    <section className="bg-[#f5f6f8] py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#173f3c] leading-tight">
            Our <span className="text-[#14885c]">Progress</span>
          </h2>

          <p className="mt-4 md:mt-6 text-lg sm:text-xl md:text-2xl italic text-[#c9a227] px-2">
            "And that there is not for man except that [good] for which he
            strives."
          </p>

          <div className="w-24 sm:w-32 md:w-36 h-1 mx-auto mt-5 md:mt-6 rounded-full bg-gradient-to-r from-[#14885c] to-[#c9a227]" />

          <p className="mt-6 md:mt-10 text-lg sm:text-xl md:text-2xl text-slate-600">
            (Surah An-Najm 53:39)
          </p>
        </div>

        <div className="max-w-5xl mx-auto mt-10 md:mt-16">
          <div className="bg-white rounded-2xl md:rounded-3xl shadow-md border border-slate-100 p-5 sm:p-8 md:p-10">
            <p className="text-center text-base sm:text-lg md:text-xl leading-relaxed text-slate-600">
              TOJO GLOBAL connects your business directly to your target
              audience, eliminating the need to search for clients. With us,
              they'll find their way to you.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 md:gap-6 lg:gap-8 mt-12 md:mt-20">
          {stats.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white hover:bg-amber-50 rounded-2xl md:rounded-3xl p-5 md:p-6 text-center shadow-sm border border-slate-200 overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-[#14885c] to-[#c9a227]" />

              <div className="flex justify-center text-[#14885c] mb-4 md:mb-6">
                {item.icon}
              </div>

              <h3 className="text-3xl sm:text-4xl font-bold text-[#1d2942] hover:text-emerald-700 transition-colors">
                {item.value}
              </h3>

              <p className="mt-3 md:mt-4 text-sm sm:text-base text-slate-600">
                {item.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}