import React, { useState, useEffect } from "react";
import { FaThumbsUp } from "react-icons/fa";
import axios from "axios";

const AboutUs = () => {
  const [about, setAbout] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAboutUs = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/admin/get`
        );
        if (res.data.success) {
          setAbout(res.data.data.aboutsUs); // adjust key based on backend response
        }
      } catch (err) {
        console.error("Error fetching about:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchAboutUs();
  }, []);

  // Helper: split desc (if available) into paragraphs on double newlines or periods + space.
  const paragraphs =
    about?.desc
      ? about.desc
          .split(/\n\s*\n|\.\s+/)
          .map((para) => para.trim())
          .filter(Boolean)
      : [];

  return (
    <div>
      {/* Top Section with Gradient */}
      <div className="p-12 bg-gradient-to-r from-gray-100 via-yellow-50 to-[#f4ebe2] py-16 text-left rounded-b-3xl shadow-md">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-3">About Us</h2>
        <p className="text-green-700 mt-2 text-lg font-medium">
          Delivering trusted financial solutions since 2013
        </p>
      </div>

      {/* About Section */}
      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-green-700 underline decoration-2 decoration-green-300">Maa Anusaya Urban</span>
          </h2>
          <div className="prose prose-lg text-gray-700 text-left space-y-4">
  {paragraphs.length > 0
    ? paragraphs.map((p, idx) => (
        <p key={idx} className="leading-relaxed indent-4">
          {p}
        </p>
      ))
    : (!loading && <p className="italic text-gray-400">No information available.</p>)}
</div>

        </div>
        {/* Right Image */}
        <div className="w-full flex justify-center">
          <img
            src={about?.imageUrl}
            alt="About us"
            className="rounded-3xl shadow-2xl w-full max-h-[410px] object-cover border-4 border-yellow-100"
          />
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 text-center md:text-left">
          {/* Mission */}
          <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center md:items-start">
            <FaThumbsUp className="text-green-600 text-4xl mb-3" />
            <h3 className="text-2xl font-semibold mb-2 text-green-800">Our Mission</h3>
            <p className="text-gray-700 text-base leading-relaxed">
              {about?.vision || "N/A"}
            </p>
          </div>
          {/* Vision */}
          <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center md:items-start">
            <FaThumbsUp className="text-green-600 text-4xl mb-3" />
            <h3 className="text-2xl font-semibold mb-2 text-green-800">Our Vision</h3>
            <p className="text-gray-700 text-base leading-relaxed">
              {about?.values[0] || "N/A"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
