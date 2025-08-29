import React from "react";
import { FaThumbsUp } from "react-icons/fa";
import about from "../assets/About Image.jpg";

const AboutUs = () => {
  return (
    <div>
      {/* Top Section with Gradient */}
      <div className=" p-12 bg-gradient-to-r from-gray-100 via-yellow-50 to-[#f4ebe2] py-16 text-left">
        <h2 className="text-4xl md:text-5xl font-bold text-black">About</h2>
        <p className="text-green-700 mt-2 text-lg">
          Delivering trusted financial solutions since 2013
        </p>
      </div>

      {/* About Section */}
      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-8 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            <span className="text-green-700 underline">Maa Anusaya Urban</span>
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            MAA ANUSAYA URBAN Co-operative Credit Society Limited is a
            Multi-State Co-operative Society registered under the Multi-State
            Co-operative Societies Act, 2002 (Registration No.
            MSCS/CR/784/2013), established on February 8, 2013. Our mission is
            to uplift the financial and social well-being of our members by
            promoting savings and responsible financial practices.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            We offer a variety of secure and member-centric financial products
            including Fixed Deposits, Recurring Deposits, Monthly Income
            Schemes, and other investment options tailored to support financial
            growth. With our registered office located in Mumbai, our
            operational reach extends across Maharashtra, Karnataka, and Goa.
          </p>
          <p className="text-gray-700 leading-relaxed">
            As a fully compliant and regulated entity, we function under the
            byelaws of the society and strictly adhere to the provisions of the
            Multi-State Co-operative Societies Act. Our activities are monitored
            and guided by the Central Registrar of Co-operative Societies under
            the Ministry of Agriculture & Farmers Welfare, Government of India.
          </p>
        </div>

        {/* Right Image */}
        <div>
          <img
            src={about} // <-- replace with your image
            alt="Office"
            className="rounded-lg shadow-lg w-full object-cover"
          />
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 text-center md:text-left">
          {/* Mission */}
          <div>
            <FaThumbsUp className="text-green-600 text-4xl mx-auto md:mx-0 mb-3" />
            <h3 className="text-2xl font-semibold mb-2">Our Mission</h3>
            <p className="text-gray-700">
              To provide innovative, eco-friendly, and high-quality financial
              solutions that support sustainable growth and financial security
              for our members.
            </p>
          </div>

          {/* Vision */}
          <div>
            <FaThumbsUp className="text-green-600 text-4xl mx-auto md:mx-0 mb-3" />
            <h3 className="text-2xl font-semibold mb-2">Our Vision</h3>
            <p className="text-gray-700">
              To become India’s most trusted co-operative credit society by
              delivering consistent service, competitive products, and
              exceptional customer support.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
