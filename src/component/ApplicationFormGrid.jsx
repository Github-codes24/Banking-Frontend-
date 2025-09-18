import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaDownload, FaFilePdf } from "react-icons/fa";

const ApplicationFormGrid = () => {
  const [forms, setForms] = useState([]);
  const [loading, setLoading] = useState(true);

  // Utility: check file type
  const isPDF = (url) => url?.toLowerCase().endsWith(".pdf");
  const isImage = (url) =>
    [".jpg", ".jpeg", ".png", ".gif", ".webp"].some((ext) =>
      url?.toLowerCase().endsWith(ext)
    );

  useEffect(() => {
    const fetchForms = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/admin/get`
        );
        if (res.data.success) {
          setForms(res.data.data.loanApplication); // adjust key as per backend
        }
      } catch (err) {
        console.error("Error fetching forms:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchForms();
  }, []);

  if (loading) return <p className="text-center">Loading forms...</p>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
    
      <div className="text-2xl font-semibold text-red-600 bg-gray-100 border-l-4 border-red-500 rounded-md shadow-sm px-4 py-3 mb-10">
   Loan Application Forms
</div>


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {forms?.map((form, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow p-4 flex flex-col items-center"
          >
            {/* Show Image or PDF preview */}
            {isImage(form.docs) ? (
              <img
                src={form.docs}
                alt={form.title}
                className="h-48 w-full object-contain mb-4"
              />
            ) : isPDF(form.docs) ? (
              <div className="h-48 w-full flex items-center justify-center bg-gray-100 mb-4">
                <FaFilePdf className="text-red-600 w-16 h-16" />
              </div>
            ) : (
              <div className="h-48 w-full flex items-center justify-center bg-gray-100 mb-4">
                <span className="text-gray-500">No Preview Available</span>
              </div>
            )}

            <h3 className="text-lg font-semibold text-center mb-3">
              {form.title}
            </h3>

            <a
              href={form.docs}
              download
              target="blank"
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
