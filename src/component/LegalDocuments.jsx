import React from "react";

const legalDocs = [
  {
    title: "Trust Registration",
    image: "/slider-1.jpg",
  },
  {
    title: "PAN Card",
       image: "/slider-1.jpg",
  },
  {
    title: "80G Certificate",
      image: "/slider-1.jpg",
  },
  {
    title: "12A Certificate",
      image: "/slider-1.jpg",
  },
  {
    title: "FCRA Certificate",
      image: "/slider-1.jpg",
  },
  {
    title: "Other Licenses",
     image: "/slider-1.jpg",
  },
];

const LegalDocuments = () => {
  return (
    <div className="py-10 px-4 md:px-10">
      <div className="text-2xl md:text-2xl bg-gray-300 text-blue-400 text-left mb-10 border p-2">
        Legal Documents
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {legalDocs.map((doc, index) => (
          <div
            key={index}
            className="border shadow-md rounded-md p-4 hover:shadow-lg transition-all duration-200 bg-white"
          >
            <h3 className="text-lg font-semibold text-center mb-4">{doc.title}</h3>
            <img
              src={doc.image}
              alt={doc.title}
              className="w-full h-48 object-contain rounded"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LegalDocuments;
