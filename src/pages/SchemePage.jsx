import React from "react";

const schemes = [
  {
    id: 1,
    title: "Fix Deposit Plan",
    description: "Financial support for students pursuing higher education,Financial support for students pursuing higher education.Financial support for students pursuing higher education.",
    image: "/slider-3.jpg",
  },
  {
    id: 2,
    title: "Fix Deposit Plan",
    description: "Help for medical emergencies and surgeries,Financial support for students pursuing higher education.Financial support for students pursuing higher education.",
    image: "/slider-1.jpg",
  },
  {
    id: 3,
    title: "Fix Deposit Plan",
    description: "Assistance for marriage-related expenses,Financial support for students pursuing higher education.Financial support for students pursuing higher education.",
    image: "/slider-2.jpg",
  },
  // Add more schemes as needed
];

const SchemePage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-10">Our Schemes</h2>
      <div className="space-y-6">
        {schemes.map((scheme) => (
          <div
            key={scheme.id}
            className="flex flex-col md:flex-row bg-white border rounded-lg shadow-md overflow-hidden"
          >
            <div className="md:w-1/3">
              <img
                src={scheme.image}
                alt={scheme.title}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-6 md:w-2/3 flex flex-col justify-center">
              <h3 className="text-xl font-semibold mb-2">{scheme.title}</h3>
              <p className="text-gray-700">{scheme.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SchemePage;
