import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden rounded-t-[20px] bg-gradient-to-r from-[#d6b88b] via-[#c39b63]
      to-[#b47d35] text-white">
      <div className="max-w-[1800px] mx-auto px-4 lg:px-8 py-8 lg:py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">
        
          <div>
            <div className="flex items-start gap-4 mb-6">
              <img
                src="https://a-hafiz.com/assets/Al-hafix-logo-B8k2_mOI.jpeg"
                alt="Al Hafiz Online Quran Academy" className="w-20 h-17 bg-white rounded-md p-2 object-contain" />

              <h2 className="text-2xl font-bold leading-tight">
                Al Hafiz-Online
                <br />
                Quran Academy
              </h2>
            </div>

            <p className="text-[16px] leading-8 text-white/95 max-w-md">
              Learn Quran online with qualified teachers. Study Tajweed,
              Memorization, and Islamic studies from the comfort of your home.
            </p>

            <div className="flex gap-4 mt-8">
              {[FaFacebookF, FaTwitter, FaInstagram, FaYoutube].map(
                (Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center hover:bg-white hover:text-[#b47d35] transition-all duration-300"
                  >
                    <Icon size={16} />
                  </a>
                )
              )}
            </div>
          </div>

        
          <div>
            <h3 className="text-[23px] font-bold mb-4">Quick Links</h3>

            <div className="h-[1px] w-full bg-white/30 mb-6"></div>

            <ul className="space-y-5 text-[19px]">
              <li>
                <a href="#" className="hover:text-white/80 transition">
                  Home
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white/80 transition">
                  About Us
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white/80 transition">
                  Services
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white/80 transition">
                  Contact Us
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white/80 transition">
                  Privacy Policy
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white/80 transition">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

         
          <div>
            <h3 className="text-[20px] font-bold mb-4">Our Courses</h3>

            <div className="h-[1px] w-full bg-white/30 mb-6"></div>

            <ul className="space-y-5 text-[19px]">
              <li>Quran Memorization (Hifz)</li>
              <li>Tajweed</li>
              <li>Quran Tafsir</li>
            </ul>
          </div>

         
          <div>
            <h3 className="text-[20px] font-bold mb-4">Contact Us</h3>

            <div className="h-[1px] w-full bg-white/30 mb-6"></div>

            <div className="space-y-5 text-[18px]">
              <div className="flex gap-4">
                <FaMapMarkerAlt className="text-lg mt-1 shrink-0" />

                <p className="leading-7">
                  Hassan Manzil, Street No-01,
                  <br />
                  Bahawalpur
                </p>
              </div>

              <div className="flex items-center gap-4">
                <FaPhoneAlt />
                <p>+92 300 6868033</p>
              </div>

              <div className="flex items-center gap-4">
                <FaEnvelope />
                <p>info@a-hafiz.com</p>
              </div>
            </div>

           
            <div className="mt-10">
              <h4 className="text-[18px] font-semibold mb-4">
                Subscribe to Newsletter
              </h4>

              <div className="flex overflow-hidden rounded-md">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-3 text-[14px] bg-transparent border border-white/20 outline-none placeholder:text-white/70"
                />

                <button className="bg-[#bf883e] hover:bg-[#a87330] px-6 text-[14px] font-semibold transition">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        
        <div className="border-t border-white/30 mt-12 pt-8 text-center">
          <p className="text-[14px] font-medium">
            © 2026 Online Quran Academy. All rights reserved.
          </p>
        </div>
      </div>

     
     
    </footer>
  );
}