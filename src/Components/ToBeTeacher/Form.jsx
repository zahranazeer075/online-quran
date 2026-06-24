import React from "react";

const Form = () => {
  const languages = ["English", "Urdu", "Hindi", "Arabic", "Pashto"];

  const courses = [
    "Noorani Qaida Course",
    "Hadith Course",
    "Islamic Studies Course",
    "Nazra Quran Course",
    "Quran Reading Course",
    "Quran Memorization",
    "Arabic Language Course",
    "Qiraat Course",
    "Quran Recitation Course",
    "Ijazah Course",
    "Tajweed Course",
    "Tafseer Course",
    "Quran Translation Course",
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-lg border-t-4 border-green-700 p-8 md:p-10">
        
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center text-green-700 mb-10">
          Teacher Application Form
        </h2>

        <form className="space-y-8">
          {/* Personal Information */}
          <div className="grid md:grid-cols-3 gap-5">
            <Input label="Full Name" placeholder="Enter your full name" />
            <Input label="Father Name" placeholder="Enter your father's name" />
            <Input label="Your WhatsApp" placeholder="03xx-xxxxxxx" />

            <Input label="Email" placeholder="example@gmail.com" />
            <Input label="Address" placeholder="Enter your address" />
            <Input label="Country" placeholder="Enter your country" />

            <Input
              label="Education"
              placeholder="Your highest qualification"
            />
            <Input
              label="Specialization"
              placeholder="Your area of expertise"
            />
            <Input
              label="Experience"
              placeholder="e.g. 3 years of Quran teaching"
            />
          </div>

          {/* Video Link */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Intro Video Link (YouTube)
            </label>
            <input
              type="text"
              placeholder="Paste intro video link"
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>

          {/* Languages */}
          <div>
            <h3 className="font-semibold text-gray-700 mb-3">
              Languages You Speak
            </h3>

            <div className="flex flex-wrap gap-5">
              {languages.map((lang) => (
                <label key={lang} className="flex items-center gap-2 text-sm">
                  <input type="checkbox" />
                  {lang}
                </label>
              ))}
            </div>
          </div>

          {/* Courses */}
          <div>
            <h3 className="font-semibold text-gray-700 mb-4">
              Courses You Can Teach
            </h3>

            <div className="grid md:grid-cols-3 gap-y-3">
              {courses.map((course) => (
                <label
                  key={course}
                  className="flex items-center gap-2 text-sm text-gray-700"
                >
                  <input type="checkbox" />
                  {course}
                </label>
              ))}
            </div>
          </div>

          {/* Gender */}
          <div>
            <h3 className="font-semibold text-gray-700 mb-3">Gender</h3>

            <div className="flex gap-6">
              <label className="flex items-center gap-2 text-sm">
                <input type="radio" name="gender" />
                Male
              </label>

              <label className="flex items-center gap-2 text-sm">
                <input type="radio" name="gender" />
                Female
              </label>
            </div>
          </div>

          {/* File Uploads */}
          <div className="grid md:grid-cols-3 gap-5">
            <FileInput label="Upload Certificate" />
            <FileInput label="Upload CNIC (png, jpg, pdf)" />
            <FileInput label="Upload CV (png, jpg, pdf)" />
          </div>

          {/* About */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Write About Yourself (100+ words)
            </label>

            <textarea
              rows="5"
              placeholder="Describe your experience, goals, and personality..."
              className="w-full border border-gray-300 rounded-md px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-green-600"
            ></textarea>
          </div>

          {/* Button */}
          <div className="flex justify-center pt-4">
            <button
              type="submit"
              className="bg-green-700 hover:bg-green-800 text-white px-10 py-3 rounded-full font-semibold shadow-lg transition duration-300"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const Input = ({ label, placeholder }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-2">
      {label}
    </label>
    <input
      type="text"
      placeholder={placeholder}
      className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-600"
    />
  </div>
);

const FileInput = ({ label }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-2">
      {label}
    </label>
    <input
      type="file"
      className="w-full border border-gray-300 rounded-md px-3 py-2 bg-white"
    />
  </div>
);

export default Form;
