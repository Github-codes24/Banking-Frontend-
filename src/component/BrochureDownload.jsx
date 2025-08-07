import React from 'react';

const BrochureDownload = () => {
  return (
    <div className="relative w-full mt-10" style={{ height: '300px' }}>
      {/* <img
        src="/slider-1.jpg"
        alt="Brochure Background"
        className="w-full h-full object-cover rounded-md"
      /> */}

      <div className="absolute inset-0 bg-yellow-400 bg-opacity-50 flex items-center justify-center">
        <a
          href="/your-brochure.pdf"
          download
          className="bg-white text-black px-6 py-3 font-semibold rounded shadow hover:bg-gray-200 transition"
        >
          📥 Download Brochure
        </a>
      </div>
    </div>
  );
};

export default BrochureDownload;
