import React from "react";
import { Download, FileText, ArrowRight } from "lucide-react";

const BrochureDownload = () => {
  return (
    <div className="relative w-full mt-10 px-4 py-16">
      {/* Gradient background with animated shapes */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-3xl overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative flex items-center justify-center">
        <div className="bg-white/80 backdrop-blur-lg shadow-2xl rounded-3xl p-10 max-w-lg w-full border border-white/20 transform transition-all duration-300 hover:scale-105">
          {/* Icon header */}
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-br from-yellow-400 to-orange-500 p-4 rounded-2xl shadow-lg">
              <FileText className="w-8 h-8 text-white" />
            </div>
          </div>

          {/* Title */}
          <h2 className="text-3xl font-bold  mb-3 text-center bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Download Our Brochure
          </h2>
          
          {/* Subtitle */}
          <p className="text-gray-600 mb-8 text-center leading-relaxed">
            Explore comprehensive details about our services, features, and offerings. 
            Everything you need to know, all in one place.
          </p>

          {/* Features list */}
          <div className="space-y-3 mb-8">
            {['Complete Product Information', 'Pricing & Plans', 'Customer Testimonials'].map((feature, i) => (
              <div key={i} className="flex items-center gap-3 text-gray-700">
                <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"></div>
                <span className="text-sm">{feature}</span>
              </div>
            ))}
          </div>

          {/* Download button */}
          <a
            href="/broucher.pdf"

            download
            className="group relative w-full bg-gradient-to-r from-yellow-400 via-orange-400 to-orange-500 text-white px-8 py-4 font-bold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-3 overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-orange-500 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <Download className="w-5 h-5 relative z-10 group-hover:animate-bounce" />
            <span className="relative z-10">Download Now</span>
            <ArrowRight className="w-5 h-5 relative z-10 transform group-hover:translate-x-1 transition-transform duration-300" />
          </a>

          {/* File info */}
          {/* File info */}
          <p className="text-center text-xs text-gray-500 mt-4">
            PDF Format • 2.5 MB • Updated Recently
          </p>
        </div>
      </div>
    </div>
  );
};

export default BrochureDownload;