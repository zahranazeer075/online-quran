import React, { useState } from "react";

const Plan = () => {
  const [currency, setCurrency] = useState("USD");

  const plans = {
    USD: [
      { name: "Basic", week: 3, month: 12, fee: "21.43 $" },
      { name: "Premium", week: 5, month: 20, fee: "32.14 $" },
    ],
    PKR: [
      { name: "Basic", week: 3, month: 12, fee: "6000 PKR" },
      { name: "Premium", week: 5, month: 20, fee: "9000 PKR" },
    ],
    GBP: [
      { name: "Basic", week: 3, month: 12, fee: "17 £" },
      { name: "Premium", week: 5, month: 20, fee: "25 £" },
    ],
  };

  return (
    <section className="bg-white pt-2 pb-10 lg:py-14 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">

     
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {["PKR", "USD", "GBP"].map((item) => (
            <button
              key={item}
              onClick={() => setCurrency(item)}
              className={`px-5 py-2 rounded-lg text-sm font-medium border transition-all duration-300
              ${
                currency === item
                  ? "bg-emerald-700 text-white border-emerald-700"
                  : "border-emerald-700 text-emerald-700 hover:bg-emerald-50"
              }`}
            >
              {item}
            </button>
          ))}

          <button
            className="
              px-5 py-2
              rounded-lg
              bg-[#b38a4b]
              text-white
              text-sm
              font-medium
              hover:opacity-90
              transition-all
              duration-300
            "
          >
            + Create Your Plan
          </button>
        </div>

        
        <div className="hidden md:block overflow-hidden rounded-2xl shadow-lg border">
          <div className="grid grid-cols-4 bg-[#b38a4b] text-white font-semibold text-sm px-8 py-4">
            <div>Plan</div>
            <div>Classes / Week</div>
            <div>Classes / Month</div>
            <div className="text-right">Fee</div>
          </div>

          {plans[currency].map((plan, index) => (
            <div
              key={index}
              className="grid grid-cols-4 px-8 py-5 border-b text-sm bg-white"
            >
              <div className="font-semibold text-slate-800">
                {plan.name}
              </div>

              <div className="text-slate-600">
                {plan.week}
              </div>

              <div className="text-slate-600">
                {plan.month}
              </div>

              <div className="text-right font-semibold text-emerald-700">
                {plan.fee}
              </div>
            </div>
          ))}

          <div className="bg-[#faf7f2] py-4 text-center text-[#b38a4b] text-sm font-semibold">
            Affordable — Flexible — Trusted by Hundreds of Families
          </div>
        </div>

       
        <div className="md:hidden space-y-4">
          {plans[currency].map((plan, index) => (
            <div
              key={index}
              className="bg-white border shadow-lg rounded-2xl p-5"
            >
              <h3 className="text-xl font-bold text-slate-800 mb-4">
                {plan.name}
              </h3>

              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">
                    Classes / Week
                  </span>
                  <span className="font-semibold">
                    {plan.week}
                  </span>
                </div>

                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">
                    Classes / Month
                  </span>
                  <span className="font-semibold">
                    {plan.month}
                  </span>
                </div>

                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">
                    Fee
                  </span>
                  <span className="font-bold text-emerald-700">
                    {plan.fee}
                  </span>
                </div>
              </div>
            </div>
          ))}

          <div className="bg-[#faf7f2] rounded-xl py-4 text-center text-[#b38a4b] text-sm font-semibold">
            Affordable — Flexible — Trusted by Hundreds of Families
          </div>
        </div>

      </div>
    </section>
  );
};

export default Plan;
