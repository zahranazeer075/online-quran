import React, { useState } from "react";

const Card = () => {
  const [open, setOpen] = useState(null);

  const faqs = [
    {
      question: "What type of payments do you accept?",
      answer:
        "We accept online payments, bank transfer and other secure methods.",
    },
    {
      question: "When should I pay my monthly fee?",
      answer: "Monthly fee should be paid at the start of every month.",
    },
    {
      question: "Do I have to give credit card information to anyone?",
      answer: "No, your payment information stays secure.",
    },
    {
      question: "Is there any discount for family members?",
      answer: "Yes, family discounts are available on selected plans.",
    },
    {
      question: "What if I want to cancel my classes?",
      answer:
        "You can cancel your classes anytime according to our policy.",
    },
  ];

  return (
    <section className="min-h-screen bg-[#f8fafc] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-10">
      <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-20">
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src="https://images.pexels.com/photos/7621144/pexels-photo-7621144.jpeg"
            alt="FAQ Illustration"
            className="
              w-full
              max-w-[500px]
              h-auto
              rounded-2xl
              drop-shadow-xl
              object-cover
            "
          />
        </div>
        <div
          className="
            w-full
            lg:w-1/2
            bg-white
            rounded-3xl
            shadow-xl
            p-5
            sm:p-8
          "
        >
          <h1
            className="
              text-center
              text-2xl
              sm:text-3xl
              lg:text-4xl
              font-bold
              text-emerald-700
              mb-8
            "
          >
            Fee & Payment FAQs
          </h1>

          <div className="space-y-4">
            {faqs.map((item, index) => (
              <div key={index}>
                <button
                  onClick={() =>
                    setOpen(open === index ? null : index)
                  }
                  className="
                    w-full
                    bg-emerald-700
                    hover:bg-emerald-800
                    transition-all
                    duration-300
                    text-white
                    rounded-xl
                    px-4
                    sm:px-6
                    py-4
                    flex
                    items-center
                    justify-between
                    font-semibold
                    text-sm
                    sm:text-base
                    lg:text-lg
                    shadow-md
                  "
                >
                  <span className="text-left pr-3">
                    {item.question}
                  </span>

                  <span className="text-xl sm:text-2xl flex-shrink-0">
                    {open === index ? "⌃" : "⌄"}
                  </span>
                </button>

                {open === index && (
                  <div
                    className="
                      bg-gray-100
                      text-gray-700
                      px-4
                      sm:px-6
                      py-4
                      rounded-b-xl
                      text-sm
                      sm:text-base
                      leading-relaxed
                    "
                  >
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Card;
