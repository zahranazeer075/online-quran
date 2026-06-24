import React from "react";

const Map = () => {

  return (
    <section className="bg-white mb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
        </div>
        <div className="bg-white rounded-xl overflow-hidden shadow-xl 
        ">
          <div className="w-full h-[400px]">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps?q=Melbourne%20VIC%203000&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map