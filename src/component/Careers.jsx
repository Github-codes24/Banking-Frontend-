import React from "react";

const Careers = () => {
  const careerData = [
    {
      title: "Assistant Manager - Operations",
      contactPerson: "Mr. Ramesh Verma",
      location: "Jaipur, Rajasthan",
      contactNumber: "+91 9876543210",
      contactEmail: "hr@example.com",
      description:
        "We are looking for a proactive Assistant Manager to oversee daily operations and ensure smooth process execution across departments.",
      notificationUrl: "/docs/assistant-manager-notification.pdf", // Change as per actual file location
    },
    {
      title: "Office Clerk",
      contactPerson: "Ms. Shalini Mehra",
      location: "Kota, Rajasthan",
      contactNumber: "+91 9123456789",
      contactEmail: "careers@example.com",
      description:
        "A diligent and detail-oriented Office Clerk is required to handle paperwork, filing, and administrative support activities.",
      notificationUrl: "/docs/office-clerk-notification.pdf",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-8">
        Careers
      </h1>

      <div className="space-y-8">
        {careerData.map((career, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-md p-6 shadow-sm bg-white"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              {career.title}
            </h2>
            <p className="text-gray-700 mb-2">{career.description}</p>

            <div className="mt-4 space-y-1 text-sm text-gray-600">
              <p>
                <strong>Contact Person:</strong> {career.contactPerson}
              </p>
              <p>
                <strong>Location:</strong> {career.location}
              </p>
              <p>
                <strong>Contact Number:</strong> {career.contactNumber}
              </p>
              <p>
                <strong>Email:</strong> {career.contactEmail}
              </p>
            </div>

            <p className="mt-4 text-gray-700 font-medium">
              Please send your CV to our email.
            </p>

            <a
              href={career.notificationUrl}
              download
              className="inline-block mt-3 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-md"
            >
              Download Notification
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Careers;
