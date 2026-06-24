import { FaHandPointer, FaCalendarAlt, FaBookOpen } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";

const steps = [
  {
    number: 1,
    title: "Complete Your",
    highlight: "Online Registration",
    Icon: FaHandPointer,
    desc: (
      <>
        Start by clicking on "Register Online". Fill in your basic details
        securely and complete your registration in minutes.{" "}
        <span className="text-amber-600 font-semibold">
          "Register Online"
        </span>{" "}
        and fill in your details.
      </>
    ),
  },
  {
    number: 2,
    title: "Schedule Your",
    highlight: "Free Trial Class",
    Icon: FaCalendarAlt,
    desc: (
      <>
        After registration, we'll reach out to schedule your free trial.
        You'll also learn more about our teaching process and get personalized
        guidance.{" "}
        <span className="text-amber-600 font-semibold">free trial</span> and
        guide you.
      </>
    ),
  },
  {
    number: 3,
    title: "Begin Your",
    highlight: "Learning Journey",
    Icon: FaBookOpen,
    desc: (
      <>
        Log in with your credentials and attend your first class with our
        qualified Quran tutors—anytime, anywhere.{" "}
        <span className="text-amber-600 font-semibold">first class</span>{" "}
        anytime, anywhere.
      </>
    ),
  },
];

export default function Begin() {
  return (
    <div className="w-full px-4 sm:px-6 md:px-10 lg:px-16 py-10 md:py-16 bg-[#EEEADB] font-serif overflow-hidden">
 
      <div className="text-center mb-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 leading-tight">
          Begin Your{" "}
          <span className="text-amber-500 italic">Quranic Journey</span>
        </h1>

        <div className="flex justify-center mt-3">
          <div
            className="w-24 h-1 rounded-full"
            style={{ backgroundColor: "#8fbc8f" }}
          />
        </div>

        <p className="text-base sm:text-lg font-semibold mt-3 tracking-wide text-slate-700">
          Just 3 Simple Steps to Get Started
        </p>

        <div className="flex justify-center mt-1">
          <div
            className="w-16 h-0.5 rounded-full"
            style={{ backgroundColor: "#8fbc8f" }}
          />
        </div>
      </div>

  
      <div className="bg-white/80 border border-gray-200 rounded-2xl px-5 sm:px-8 py-6 text-center text-slate-600 text-sm sm:text-base leading-relaxed mb-10 md:mb-12 max-w-3xl mx-auto shadow-sm">
        At Quran Learn Academy, we've made it easy to begin your sacred
        educational journey. Follow these quick steps to register and start
        learning with our certified tutors.
      </div>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 max-w-7xl mx-auto">

        <div className="w-full lg:w-1/2 space-y-5">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border-l-4 border-l-amber-300 flex gap-3 sm:gap-5"
            >

              <div className="relative shrink-0">
                <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center rounded-full bg-[#FDF8EC] border-2 border-amber-300">
                  <step.Icon size={22} color="#B8860B" />
                </div>

                <span className="absolute -top-2 -left-2 bg-green-900 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {step.number}
                </span>
              </div>

              <div>
                <h3 className="font-bold text-lg sm:text-xl mb-2 text-slate-800">
                  {step.title}{" "}
                  <span className="text-amber-500">{step.highlight}</span>
                </h3>

                <p className="text-slate-500 text-sm sm:text-base md:text-lg leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full lg:w-1/2 flex justify-center items-start">
          <div className="w-full max-w-md lg:mt-20 rounded-2xl overflow-hidden shadow-xl bg-green-200 p-2">
            <video
              src="https://a-hafiz.com/assets/quran-bYcGeUmd.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-56 sm:h-64 md:h-72 object-cover rounded-xl"
            />

            <div className="flex flex-col sm:flex-row gap-2 sm:gap-0 justify-between text-white bg-black px-4 py-2 text-xs sm:text-sm">
              <span className="flex items-center gap-1">
                <MdEmail />
                www.a-hafiz.com
              </span>

              <span className="flex items-center gap-1">
                <MdPhone />
                +92 300 6868033
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-10 md:mt-12">
        <button className="bg-green-900 text-white px-6 sm:px-10 py-3 rounded-lg font-semibold hover:opacity-90 transition duration-300 w-full sm:w-auto">
          Begin Registration
        </button>
      </div>
    </div>
  );
}