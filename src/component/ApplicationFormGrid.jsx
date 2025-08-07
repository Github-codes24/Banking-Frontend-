import React from "react";

import { FaDownload } from "react-icons/fa";
const forms = [
  {
    id: 1,
    name: "LOAN AGAINST GOLD AGREEMENT",
    image: "/slider-1.jpg",
    file: "/forms/education-assistance.pdf",
  },
  {
    id: 2,
    name: "GOLD LOAN APPLICATION FORM",
 image: "/slider-1.jpg",
    file: "/forms/medical-aid.pdf",
  },
  {
    id: 3,
    name: "PERSONAL LOAN APPLICATION FORM",
    image: "/slider-1.jpg",
    file: "/forms/marriage-support.pdf",
  },

];

const ApplicationFormGrid = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-xl p-2 md:text-xl text-blue-600 mb-8 text-left bg-gray-200">
        Loan Application Forms
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {forms.map((form) => (
          <div
            key={form.id}
            className="bg-white rounded-lg shadow p-4 flex flex-col items-center"
          >
            <img
              src={form.image}
              alt={form.name}
              className="h-48 object-contain mb-4"
            />
            <h3 className="text-lg font-semibold text-center mb-3">{form.name}</h3>


<a
  href={form.file}
  download
  className="mt-auto bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded inline-flex items-center gap-2"
>
  <FaDownload className="w-5 h-5" />
  Download
</a>

          </div>
        ))}
      </div>
    </div>
  );
};

export default ApplicationFormGrid;
