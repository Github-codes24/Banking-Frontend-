import React from "react";

const BrochureDownload = () => {
  return (
    <div className="relative w-full mt-10 " style={{ height: "300px" }}>
      {/* <img
        src="/slider-1.jpg"
        alt="Brochure Background"
        className="w-full h-full object-cover rounded-md"
      /> */}
      <div className="flex items-center justify-center min-h-[30px]">
        <div className="bg-gray-50 shadow-lg rounded-2xl p-8 max-w-sm text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            📄 Download Our Brochure
          </h2>
          <p className="text-gray-600 mb-6">
            Get all the details in our brochure. Click below to download.
          </p>
          <a
            href="/your-brochure.pdf"
            download
            className="bg-yellow-400 text-black px-6 py-3 font-semibold rounded-lg shadow hover:bg-yellow-500 transition"
          >
            📥 Download Brochure
          </a>
        </div>
      </div>
    </div>
  );
};

export default BrochureDownload;
