import axios from "axios";
import React, { useEffect, useState } from "react";

// const legalDocs = [
//   {
//     title: "Trust Registration",
//     image: "/slider-1.jpg",
//   },
//   {
//     title: "PAN Card",
//        image: "/slider-1.jpg",
//   },
//   {
//     title: "80G Certificate",
//       image: "/slider-1.jpg",
//   },
//   {
//     title: "12A Certificate",
//       image: "/slider-1.jpg",
//   },
//   {
//     title: "FCRA Certificate",
//       image: "/slider-1.jpg",
//   },
//   {
//     title: "Other Licenses",
//      image: "/slider-1.jpg",
//   },
// ];

const LegalDocuments = () => {


   const [legalDocs, setlegalDocs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSchmes = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/admin/get`
        );
        if (res.data.success) {
          setlegalDocs(res.data.data.legalDocs); // adjust key based on backend response
        }
      } catch (err) {
        console.error("Error fetching banners:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchSchmes();
  }, []);


  const isPDF = (url) => {
  if (!url) return false;
  const lowerUrl = url.toLowerCase();
  return lowerUrl.endsWith(".pdf") || url.includes("/raw/upload/");
};

const isImage = (url) => {
  if (!url) return false;
  const lowerUrl = url.toLowerCase();
  const imageExtensions = [".jpg", ".jpeg", ".png", ".gif", ".webp", ".svg", ".bmp"];
  return imageExtensions.some((ext) => lowerUrl.endsWith(ext)) ;
};

  // Function to handle PDF download
  const handleDownload = (url, title) => {
    if (!url) return;
    
    try {
      // Method 1: Simple download
      window.open(url, '_blank');
      
      // Method 2: Force download (uncomment if needed)
      // const link = document.createElement('a');
      // link.href = url;
      // link.download = `${title}.pdf`;
      // document.body.appendChild(link);
      // link.click();
      // document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading document:', error);
      alert('Error downloading document. Please try again.');
    }
  };

  if (loading) {
    return (
      <div className="py-10 px-4 md:px-10">
        <div className="text-2xl md:text-2xl bg-gray-300 text-blue-400 text-left mb-10 border p-2">
          Legal Documents
        </div>
        <div className="flex items-center justify-center py-20">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-400 mx-auto mb-4"></div>
            <p className="text-gray-500">Loading legal documents...</p>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="py-10 px-4 md:px-10">
   <div className="text-2xl font-semibold text-red-600 bg-gray-100 border-l-4 border-red-500 rounded-md shadow-sm px-4 py-3 mb-10">
  Legal Documents
</div>


      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {legalDocs?.map((doc, index) => (
          <div
            key={index}
            className="border shadow-md rounded-md p-4 hover:shadow-lg transition-all duration-200 bg-white relative"
          >
            <h3 className="text-lg font-semibold text-center mb-4">{doc.title}</h3>
            
            {/* Image Display */}
            {isImage(doc.docs) && (
              <div className="w-full h-48 flex items-center justify-center">
                <img
                  src={doc.docs}
                  alt={doc.title}
                  className="w-full h-full object-contain rounded cursor-pointer hover:scale-105 transition-transform"
                  onClick={() => window.open(doc.docs, '_blank')}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                {/* Fallback for broken images */}
                <div className="hidden w-full h-full bg-gray-100 rounded flex-col items-center justify-center text-gray-500">
                  <svg className="w-12 h-12 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-sm">Image not available</span>
                </div>
              </div>
            )}
            
            {/* PDF Display */}
            {isPDF(doc.docs) && (
              <div className="w-full h-48 bg-gray-50 rounded flex flex-col items-center justify-center border-2 border-dashed border-gray-300 hover:border-blue-400 transition-colors">
                {/* PDF Icon */}
                <div className="text-red-500 mb-3">
                  <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                    <path d="M7.5,14.5C7.5,14.5 7.5,12.5 9.5,12.5C11.5,12.5 11.5,14.5 11.5,14.5V16.5C11.5,16.5 11.5,18.5 9.5,18.5C7.5,18.5 7.5,16.5 7.5,16.5V14.5M7.5,14.5H11.5M13.5,12.5V18.5M13.5,12.5H16.5C17.3284,12.5 18,13.1716 18,14V15C18,15.8284 17.3284,16.5 16.5,16.5H13.5" />
                  </svg>
                </div>
                
                {/* PDF Info */}
                <div className="text-center mb-3">
                  <p className="text-sm font-medium text-gray-700 mb-1">PDF Document</p>
                  <p className="text-xs text-gray-500">Click to view or download</p>
                </div>
                
                {/* Download Button */}
                <button
                  onClick={() => handleDownload(doc.docs, doc.title)}
                  className="flex items-center px-4 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition-colors shadow-md"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download
                </button>
              </div>
            )}
            
            {/* Fallback for unknown file types */}
            {!isImage(doc.docs) && !isPDF(doc.docs) && doc.docs && (
              <div className="w-full h-48 bg-gray-50 rounded flex flex-col items-center justify-center border-2 border-dashed border-gray-300">
                <div className="text-gray-400 mb-3">
                  <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <p className="text-sm font-medium text-gray-700 mb-2">Document Available</p>
                <button
                  onClick={() => window.open(doc.docs, '_blank')}
                  className="flex items-center px-4 py-2 bg-gray-600 text-white text-sm rounded hover:bg-gray-700 transition-colors"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Open
                </button>
              </div>
            )}
            
            {/* No document available */}
            {!doc.docs && (
              <div className="w-full h-48 bg-gray-50 rounded flex flex-col items-center justify-center border-2 border-dashed border-gray-300">
                <div className="text-gray-400 mb-3">
                  <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 18.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                <p className="text-sm text-gray-500">Document not available</p>
              </div>
            )}

            {/* File type indicator badge */}
            {doc.docs && (
              <div className="absolute top-2 right-2">
                {isImage(doc.docs) && (
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                    Image
                  </span>
                )}
                {isPDF(doc.docs) && (
                  <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">
                    PDF
                  </span>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* No documents message */}
      {!loading && legalDocs.length === 0 && (
        <div className="text-center py-20">
          <div className="text-gray-400 mb-4">
            <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <p className="text-gray-500 text-lg">No legal documents found</p>
        </div>
      )}
    </div>
  );
};

export default LegalDocuments;
