import React from "react";
import { Video, BookOpen } from "lucide-react";

const Card = () => {
  return (
    <section className="w-full bg-gray-50 py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center mb-8 md:mb-12">
        <p className="text-green-700 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed">
          Join our global teaching community and inspire students around the
          world. Complete the following requirements to begin your journey with
          us.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {/* Card 1 */}
        <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 sm:p-8 md:p-10 text-center h-full">
          <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto flex items-center justify-center rounded-full bg-green-100 mb-5">
            <Video className="text-green-700 w-7 h-7 sm:w-8 sm:h-8" />
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-green-700 mb-3">
            Prepare a Video Introduction
          </h3>

          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            Intl requires a short video introduction to showcase your teaching
            style and personality. This helps students know you better before
            classes begin.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 sm:p-8 md:p-10 text-center h-full">
          <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto flex items-center justify-center rounded-full bg-green-100 mb-5">
            <BookOpen className="text-green-700 w-7 h-7 sm:w-9 sm:h-9" />
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-green-700 mb-3">
            Teaching Certifications
          </h3>

          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            Intl requires valid teaching certifications to ensure quality
            education and maintain high standards across our teaching network.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Card;