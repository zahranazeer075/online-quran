import React from "react";

const Learn = () => {
  return (
    <section className="bg-white px-4 sm:px-6 lg:px-8 pt-10 lg:pt-16 pb-4">
      
      
      <div className="text-center max-w-4xl mx-auto mt-10 lg:mt-24">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-emerald-700">
          Quran Learning Fee Structure
        </h1>

        <p className="mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-slate-600">
          Learn Quran with certified tutors at affordable rates. Flexible
          plans designed for every student across the world.
        </p>
      </div>

      
      <div className="max-w-6xl mx-auto mt-8 lg:mt-16 border border-[#eadcc9] rounded-3xl p-5 sm:p-8 shadow-sm">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#b58b4c]">
              Affordable Plans for Every Family
            </h2>

            <p className="mt-5 text-base sm:text-lg leading-7 sm:leading-8 text-slate-600">
              Choose between flexible schedules — 3 or 5 days per week —
              with live 1-on-1 Quran classes. Families enrolling multiple
              children receive a
              <span className="font-bold text-emerald-700">
                {" "}20% sibling discount.
              </span>
            </p>

            <ul className="mt-5 space-y-3 text-base sm:text-lg text-slate-700">
              <li>• Live one-on-one Quran sessions</li>
              <li>• Flexible timings — learn from anywhere</li>
              <li>• Secure payments via Debit, Credit, or PayPal</li>
            </ul>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button className="bg-emerald-700 text-white px-7 py-3 rounded-xl font-bold hover:bg-emerald-800 transition w-full sm:w-auto">
                Enroll Now
              </button>

              <button className="border border-[#b58b4c] text-[#b58b4c] px-7 py-3 rounded-xl font-bold hover:bg-[#b58b4c] hover:text-white transition w-full sm:w-auto">
                Contact Us
              </button>
            </div>
          </div>

         
          <div>
            <img
              src="https://images.pexels.com/photos/7621144/pexels-photo-7621144.jpeg"
              alt="payment"
              className="w-full h-[250px] sm:h-[320px] lg:h-[380px] object-cover rounded-3xl shadow-xl"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Learn;