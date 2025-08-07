import React from 'react';

const SchemeDetails = () => {
  return (
    <div className="">
      {/* Header Image */}
      <div className="w-full h-64 md:h-96">
        <img
          src="/slider-1.jpg"
          alt="Our Schemes"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Heading and Description */}
      <div className="max-w-4xl mx-auto text-center py-10 px-4">
        <h2 className="text-3xl font-bold mb-4 text-yellow-600">Fixed Deposit Plan</h2>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
          We provide a variety of welfare schemes to support the community, focusing on healthcare,
          education, and financial aid. Below are some of our core initiatives.
        </p>
      </div>

      {/* Schemes Section */}
      <div className="max-w-4xl mx-auto space-y-10 px-4 pb-20">
        {/* Example Scheme */}
        <div className="bg-white p-6 rounded shadow border">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">📘 Education Aid Scheme</h3>
          <p className="text-gray-600 leading-relaxed">
            This scheme provides financial support for underprivileged students pursuing primary to higher education. It covers tuition, books, and exam fees based on need and merit.
          </p>
        </div>

        {/* Another Scheme */}
        <div className="bg-white p-6 rounded shadow border">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">💊 Medical Assistance Scheme</h3>
          <p className="text-gray-600 leading-relaxed">
            Medical assistance is available for members of the community who are in need of urgent or ongoing treatment. The scheme helps cover hospitalization, surgery, and post-treatment support.
          </p>
        </div>

        {/* Add more schemes here as needed */}
      </div>
    </div>
  );
};

export default SchemeDetails;
