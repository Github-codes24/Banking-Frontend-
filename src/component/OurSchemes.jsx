import React from 'react';

const schemes = [
  {
    title: "Savings Account",
    image: "/slider-2.jpg", // Replace with actual path or URL
    pdf: "/pdfs/savings.pdf",     // Replace with actual file
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
    title: "Recurring Deposit",
    image: "/slider-1.jpg",
    pdf: "/pdfs/recurring-deposit.pdf",
  },
  {
    title: "Recurring Deposit",
    image: "/slider-2.jpg",
    pdf: "/pdfs/recurring-deposit.pdf",
  },
];

const OurSchemes = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-red-600 mb-8">
        Our Schemes
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {schemes.map((scheme, index) => (
          <div
            key={index}
            className="bg-white border rounded-lg shadow hover:shadow-md transition p-4 flex flex-col items-center"
          >
            <img
              src={scheme.image}
              alt={scheme.title}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {scheme.title}
            </h3>
            <a
              href={scheme.pdf}
              download
              className="mt-auto inline-block px-4 py-2 bg-red-600 text-white text-sm rounded hover:bg-red-700 transition"
            >
              Download PDF
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurSchemes;
