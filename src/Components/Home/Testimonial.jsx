import { useState, useEffect } from "react";

const testimonials = [
  {
    id: 1,
    name: "Fatima Batool",
    role: "Student",
    badge: "Advanced Tajweed",
    initials: "FB",
    text: "Learning the Quran online is so convenient! The teachers are patient and supportive, especially with Tajweed rules. The flexible scheduling allows me to balance my studies and work. Highly recommended for busy learners.",
    rating: 5,
  },
  {
    id: 2,
    name: "Ahmed Raza",
    role: "Parent",
    badge: "Quran for Kids",
    initials: "AR",
    text: "My children have improved so much in their recitation. The teachers are wonderful and very encouraging. We are truly blessed to have found this amazing platform.",
    rating: 5,
  },
  {
    id: 3,
    name: "Sara Khan",
    role: "Student",
    badge: "Beginner Tajweed",
    initials: "SK",
    text: "Starting from scratch was intimidating, but the instructors made it easy and enjoyable. The one-on-one sessions are incredibly effective and I have seen great progress.",
    rating: 5,
  },
  {
    id: 4,
    name: "Usman Ali",
    role: "Parent",
    badge: "Hifz Program",
    initials: "UA",
    text: "The Hifz program has transformed my son's connection with the Quran. The teachers are dedicated and use excellent memorization techniques. Truly a blessing for our family.",
    rating: 5,
  },
  {
    id: 5,
    name: "Zainab Hussain",
    role: "Student",
    badge: "Noorani Qaida",
    initials: "ZH",
    text: "As a complete beginner, I was nervous to start. But the Noorani Qaida course made the foundation so clear. Now I can read Arabic fluently. Amazing teaching methodology!",
    rating: 5,
  },
];

export default function Testimonial() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const current = testimonials[active];

  return (
    <section
      className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 overflow-hidden"
      style={{ background: "linear-gradient(135deg, #f5ede0 0%, #ede0cc 100%)", }}>
      <div className="max-w-7xl mx-auto">

        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-[#1a3a2a] leading-tight">
            What Our <span className="text-[#b8860b]">Students Say</span>
          </h2>

          <div className="w-16 h-1 bg-[#b8860b] rounded-full mx-auto mt-3 mb-4" />

          <p className="text-[#5a4a3a] max-w-2xl text-base sm:text-lg md:text-xl mx-auto mb-8 md:mb-12 px-2">
            Hear real stories from our students and families about their Quran
            learning journey with us.
          </p>
        </div>

        <div className="bg-white rounded-2xl md:rounded-3xl w-full lg:w-[80%] xl:w-[65%] mx-auto shadow-lg p-6 sm:p-8 md:p-10 lg:p-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-full bg-[#c8a87a] flex items-center justify-center shrink-0">
              <span className="text-white font-bold">
                {current.initials}
              </span>
            </div>

            <div>
              <h3 className="font-bold text-lg sm:text-xl text-[#1a3a2a]">
                {current.name}
              </h3>

              <p className="text-sm text-gray-500">
                {current.role}
              </p>

              <span className="inline-block mt-2 bg-[#b8860b] text-white text-xs px-3 py-1 rounded-full">
                {current.badge}
              </span>
            </div>
          </div>

          <p className="italic text-[#3a2a1a] text-base sm:text-lg md:text-xl leading-7 md:leading-8 mb-6">
            "{current.text}"
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <span className="text-[#b8860b] text-lg">
              {"★".repeat(current.rating)}
            </span>

            <span className="text-sm text-[#5a4a3a]">
              Rated {current.rating}/5
            </span>
          </div>
        </div>

        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActive(index)}
              className={`transition-all duration-300 rounded-full ${
                active === index
                  ? "w-8 h-3 bg-[#b8860b]"
                  : "w-3 h-3 bg-[#c8b090]"
              }`}
            />
          ))}
        </div>

        <div className="bg-white rounded-2xl md:rounded-3xl w-full max-w-6xl mx-auto shadow-md p-6 sm:p-8 md:p-12 lg:p-14 text-center mt-10 md:mt-12">
          <h3 className="text-2xl sm:text-3xl font-bold text-[#387858] mb-3">
            Start Your Quranic Journey Today
          </h3>

          <p className="text-[#5a4a3a] text-base sm:text-lg max-w-3xl mx-auto mb-6">
            Join our community of learners who are connecting with the Quran
            from the comfort of their homes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#276041] hover:bg-[#225339] text-white px-8 py-3 rounded-xl font-semibold transition w-full sm:w-auto">
              Book Free Trial
            </button>

            <button className="border-2 border-[#1a4a30] text-[#2e6647] hover:bg-[#1a4a30] hover:text-white px-8 py-3 rounded-xl font-semibold transition w-full sm:w-auto">
              View All Courses
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}