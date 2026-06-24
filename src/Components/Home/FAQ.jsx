import React, { useState } from "react";
import { BookOpen, Monitor, Brain, Music2, Users, Search, ChevronDown, ArrowRight, } from "lucide-react";

const faqs = [
  {
    icon: <BookOpen size={28} />,
    question: "How to learn Norani Qaida?",
    answer:
      "Our Norani Qaida course is designed for beginners to learn the Arabic alphabet and basic pronunciation rules. We use interactive methods, visual aids, and gradual progression to ensure students master the fundamentals before moving to Quranic reading.",
  },
  {
    icon: <Monitor size={28} />,
    question: "How to learn Quran online effectively?",
    answer:
      "We provide structured one-on-one sessions with certified tutors, interactive learning materials, and regular assessments. Our platform allows flexible scheduling, progress tracking, and personalized learning paths tailored to each student's pace and goals.",
  },
  {
    icon: <Brain size={28} />,
    question: "Why memorize (Hifz) the Holy Quran?",
    answer:
      "Memorizing the Quran brings immense spiritual rewards, strengthens faith, and provides lifelong guidance. It preserves the Quran in your heart, connects you with Islamic tradition, and earns blessings in this life and the hereafter.",
  },
  {
    icon: <Music2 size={28} />,
    question: "What is Tajweed and why is it important?",
    answer:
      "Tajweed is the set of rules for correct pronunciation during Quran recitation. It ensures each letter is articulated properly, preserving the meaning and beauty of Allah's words. Proper Tajweed is essential for respectful and accurate Quran recitation.",
  },
  {
    icon: <Users size={28} />,
    question: "How do you teach Tajweed to children?",
    answer:
      "We use child-friendly methods including visual aids, games, repetition, and positive reinforcement. Our teachers are specially trained to work with children, making learning enjoyable while ensuring proper technique through gradual, step-by-step instruction.",
  },
  {
    icon: <Search size={28} />,
    question: "What is Tafseer and when should I study it?",
    answer:
      "Tafseer is the scholarly interpretation and explanation of the Quran's meanings. We recommend starting Tafseer after establishing basic Quran reading skills. Our courses provide context, historical background, and deeper understanding of Quranic verses.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (

    <section className="bg-[#f5faf5] py-12 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
  
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block bg-white shadow-md px-4 sm:px-6 md:px-8 py-3 md:py-4 rounded-lg">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-[#0f7d57] leading-tight">
              Frequently Asked{" "}
              <span className="text-[#d4aa2b]">Questions</span>
            </h2>
          </div>

          <div className="w-20 h-1 bg-gradient-to-r from-[#0f7d57] to-[#d4aa2b] mx-auto rounded-full mt-4" />

          <p className="text-gray-600 max-w-2xl mx-auto mt-6 md:mt-8 text-base sm:text-lg md:text-xl px-2">
            Find answers to common questions about our Quranic education
            programs. We're here to guide you on your spiritual learning
            journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">

          <div className="space-y-5">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md overflow-hidden"
              >
                <button
                  onClick={() => setOpen(open === index ? null : index)}
                  className="w-full flex items-center justify-between p-4 sm:p-6 text-left gap-3"
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#eef8ec] flex items-center justify-center text-[#0f7d57] shrink-0">
                      {faq.icon}
                    </div>

                    <h3 className="font-semibold text-base sm:text-lg md:text-xl text-gray-800">
                      {faq.question}
                    </h3>
                  </div>

                  <ChevronDown
                    className={`text-[#0f7d57] transition-transform duration-300 shrink-0 ${
                      open === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {open === index && (
                  <div className="px-4 sm:px-6 pb-6 sm:pl-20">
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div>
        
            <div className="relative overflow-hidden rounded-3xl shadow-xl">
              <img
                src="https://a-hafiz.com/assets/pexels-a-darmel-8164434-Dck7aFgc.jpg"
                alt="Quran Study"
                className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px] object-cover"
              />

              <div className="absolute bottom-4 left-4 sm:left-6 bg-white rounded-2xl shadow-lg p-4 sm:p-6 max-w-[220px] sm:max-w-xs">
                <h4 className="text-lg sm:text-xl font-bold text-[#0f7d57] mb-2">
                  Need More Help?
                </h4>

                <p className="text-gray-600 text-sm mb-4">
                  Our support team is available 24/7 to answer your questions.
                </p>

                <button className="text-[#d4aa2b] font-semibold flex items-center gap-2">
                  Contact Support
                  <ArrowRight size={16} />
                </button>
              </div>

              <button className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-r from-[#0f7d57] to-[#d4aa2b] text-white flex items-center justify-center shadow-lg">
                <ArrowRight size={22} />
              </button>
            </div>

            <div className="bg-white rounded-3xl shadow-md p-5 sm:p-8 mt-6 sm:mt-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-[#0f7d57] mb-4">
                Still Have Questions?
              </h3>

              <p className="text-gray-600 leading-relaxed mb-6">
                We understand that every learner's journey is unique. If you
                have specific questions not covered here, don't hesitate to
                reach out.
              </p>

              <button className="bg-[#0f7d57] text-white px-6 sm:px-8 py-3 rounded-lg w-full sm:w-auto font-semibold hover:bg-[#0d6f4e] transition">
                Contact Us
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}