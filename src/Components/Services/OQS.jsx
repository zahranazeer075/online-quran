import { useState } from "react";
import { BookOpen, Mic, Brain, BookMarked, Users, Gift, Clock, User, GraduationCap, Search, } from "lucide-react";

const services = [
  {
    icon: <BookOpen size={28} />,
    title: "One-on-One Quran Classes",
    desc: "Personalized learning experience with certified Quran teachers.",
    img: "https://images.unsplash.com/photo-1588072432836-e10032774350?w=400&q=80",
  },
  {
    icon: <Mic size={28} />,
    title: "Tajweed & Pronunciation",
    desc: "Master the art of Tajweed with guided lessons and practice.",
    img: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?w=400&q=80",
  },
  {
    icon: <Brain size={28} />,
    title: "Quran Memorization (Hifz)",
    desc: "Structured Hifz programs for kids and adults at any level.",
    img: "https://images.unsplash.com/photo-1564769662533-4f00a87b4056?w=400&q=80",
  },
  {
    icon: <BookMarked size={28} />,
    title: "Translation & Tafseer Sessions",
    desc: "Word-by-word translation, detailed Tafseer explained by certified scholars.",
    img: "https://images.unsplash.com/photo-1585036156171-384164a8c675?w=400&q=80",
  },
  {
    icon: <Users size={28} />,
    title: "Kids Quran Classes",
    desc: "Interactive, fun-based Quran learning designed for children.",
    img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&q=80",
  },
  {
    icon: <Gift size={28} />,
    title: "Free Trial Class",
    desc: "Experience the teaching style before you decide. First class completely free.",
    img: "https://images.unsplash.com/photo-1513258496099-48168024aec0?w=400&q=80",
    badge: "3 Days Free Trial",
  },
  {
    icon: <Clock size={28} />,
    title: "24/7 Flexible Scheduling",
    desc: "Learn at your convenience with flexible online class timings.",
    img: "https://images.unsplash.com/photo-1506784365847-bbad939e9335?w=400&q=80",
  },
  {
    icon: <User size={28} />,
    title: "Female Quran Tutors",
    desc: "Qualified female teachers available for sisters and kids.",
    img: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=400&q=80",
  },
  {
    icon: <GraduationCap size={28} />,
    title: "Islamic Studies",
    desc: "Learn Hadith, Fiqh, and basic Islamic knowledge with guidance.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  },
];

export default function OQS() {

  const [query, setQuery] = useState("");

  const filtered = query.trim()
    ? services.filter(
        (s) =>
          s.title.toLowerCase().includes(query.toLowerCase()) ||
          s.desc.toLowerCase().includes(query.toLowerCase())
      )
    : services;

  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="text-center mb-8">
        <h2 className="text-5xl font-bold text-gray-800">
          Our <span className="text-yellow-500">Quran Services</span>
        </h2>

        <p className="text-gray-500 mt-2 text-xl max-w-2xl mx-auto">
          Comprehensive Quran learning solutions designed to meet your
          spiritual and educational needs
        </p>

        <div className="mt-5 max-w-md py-6 mx-auto relative">
          <Search
            size={24}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search services..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full border border-yellow-400 rounded-2xl py-4 pl-9 pr-4 text-sm outline-none focus:ring-2 focus:ring-yellow-300"
          />
        </div>

        {query && (
          <p className="text-xs text-gray-400 mt-2">
            {filtered.length} result{filtered.length !== 1 ? "s" : ""} found
            for "{query}"
          </p>
        )}
      </div>

      {filtered.length > 0 ? (
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((s, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-sm hover:shadow-md transition overflow-hidden"
            >
              <div className="relative">
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-full h-55 object-cover transition-all hover:scale-105 duration-300"
                />

                <div className="absolute top-3 right-3 bg-yellow-400 text-white rounded-lg p-3">
                  {s.icon}
                </div>

                {s.badge && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                    <span className="bg-yellow-400 text-black font-bold text-lg px-4 py-1 rounded-lg">
                      {s.badge}
                    </span>
                  </div>
                )}
              </div>

              <div className="p-4">
                <h3 className="text-gray-800 text-xl font-bold mb-4 mt-3">
                  {s.title}
                </h3>

                <p className="text-gray-500 text-lg mb-5">{s.desc}</p>

                <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black text-lg font-semibold py-3 rounded-lg transition flex items-center justify-center gap-1">
                  Explore More <span>→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-gray-400 text-sm">
            No services found for "{query}"
          </p>

          <button
            onClick={() => setQuery("")}
            className="mt-3 text-yellow-500 text-sm underline"
          >
            Clear Search
          </button>
        </div>
      )}
    </section>
  );
}