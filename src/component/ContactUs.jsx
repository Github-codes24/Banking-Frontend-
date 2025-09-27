import React, { useEffect } from "react";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ContactUs() {
  useEffect(() => {
    document.title = "Jain Trade Links | Contact";
  }, []);

  return (
    <div className="bg-[#f7f9fc] text-gray-700 font-sans">
      {/* Banner */}
      <div className="h-64 md:h-80 bg-gradient-to-r from-[#E8DACD] to-[#f7c948] flex items-center px-6 md:px-12 lg:px-32">
        <div className="text-black">
  <h1 className="text-3xl md:text-4xl lg:text-[4rem] font-bold">
    Get in Touch
  </h1>
  <p className="text-xl md:text-2xl text-red-600 font-semibold mt-1">
    संपर्कात रहा
  </p>
  <p className="text-[#6c9055f5] flex flex-col text-base md:text-lg mt-4">
    We're here to assist you with all your banking queries 
    <span>तुमच्या सर्व बँकिंग प्रश्नांमध्ये मदत करण्यासाठी आम्ही येथे आहोत.</span>
  </p>
</div>

      </div>

      {/* Content */}
      <div className="flex flex-col md:flex-row justify-center gap-10 py-16 px-4">
        {/* Left: Contact Info */}
        <div className="flex-1 max-w-md space-y-4 mx-auto">
          <h2 className="text-[#6c9055f5] font-medium text-2xl md:text-4xl mb-6 text-left">
            Contact Information
          </h2>

          <div className="space-y-4">
            <p className="flex items-start gap-2">
              <span className="w-6 flex justify-center">
                <FontAwesomeIcon icon={faLocationDot} className="text-base" />
              </span>
              <span>
                Gandhi Ward, Manohar Chowk, Amgaon Road, Near Pratap Lawn, In
                Front of Centure Bar, Gondia, Maharashtra – India
              </span>
            </p>
            <p className="flex items-start gap-2">
              <span className="w-6 flex justify-center">
                <FontAwesomeIcon icon={faPhone} className="text-base" />
              </span>
              <span>+91 8766081543</span>
            </p>
            <p className="flex items-start gap-2">
              <span className="w-6 flex justify-center">
                <FontAwesomeIcon icon={faEnvelope} className="text-base" />
              </span>
              <span>maaanusaya5@gmail.com</span>
            </p>
          </div>

          {/* Map */}
          <div style={{ width: "100%", height: "400px" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3713.369127214954!2d80.19626877526842!3d21.454028380303868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjHCsDI3JzE0LjUiTiA4MMKwMTEnNTUuOCJF!5e0!3m2!1sen!2sin!4v1756470404001!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="flex-1 max-w-lg bg-white p-6 md:p-8 shadow-md mx-auto">
          <h2 className="text-[#6c9055f5] font-medium text-2xl md:text-4xl mb-6 text-left">
            Send us a Message
          </h2>
          <form className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#6c9055f5]"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#6c9055f5]"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#6c9055f5]"
            />
            <input
              type="text"
              placeholder="Subject"
              className="border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#6c9055f5]"
            />
            <textarea
              placeholder="Your Message..."
              rows="5"
              className="border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#6c9055f5]"
            ></textarea>
            <button
              type="button"
              className="px-6 py-3 bg-[#6c9055f5] text-white hover:bg-[#687b5b] transition w-fit mx-auto"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
