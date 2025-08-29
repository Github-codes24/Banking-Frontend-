import React from "react";
import { FaFilePdf } from "react-icons/fa";

const schemes = [
  {
    title: "Savings Account",
    image: "/slider-2.jpg",
    pdf: "/pdfs/savings.pdf",
  },
  {
    title: "Fixed Deposit",
    image: "/slider-1.jpg",
    pdf: "/pdfs/fixed-deposit.pdf",
  },
  {
    title: "Recurring Deposit",
    image: "/slider-3.jpg",
    pdf: "/pdfs/recurring-deposit.pdf",
  },
  {
    title: "Recurring Deposit Plus",
    image: "/slider-1.jpg",
    pdf: "/pdfs/recurring-deposit.pdf",
  },
  {
    title: "Special Deposit Plan",
    image: "/slider-2.jpg",
    pdf: "/pdfs/recurring-deposit.pdf",
  },
];

const OurSchemes = () => {
  return (
    <div className="relative py-16 px-6 md:px-12 bg-gradient-to-r from-[#fdf2f8] via-[#E3B7B4] to-[#e0f2fe]">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-red-600 drop-shadow-md mb-12">
          Our Schemes
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {schemes.map((scheme, index) => (
            <div
              key={index}
              className="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative w-full h-56 overflow-hidden">
                <img
                  src={scheme.image}
                  alt={scheme.title}
                  className="w-full h-full object-cover transform hover:scale-110 transition duration-500"
                />
                {/* Title Overlay */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-4">
                  <h3 className="text-xl font-semibold text-white text-left">
                    {scheme.title}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col items-center justify-center">
                <p className="text-gray-600 text-sm mb-4 text-center">
                  Explore our {scheme.title} scheme and secure your financial
                  future.
                </p>
                <a
                  href={scheme.pdf}
                  download
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-red-600 text-white font-semibold rounded-full shadow-md hover:bg-red-700 hover:scale-105 transition-all duration-300"
                >
                  <FaFilePdf className="text-lg" />
                  Download PDF
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurSchemes;
