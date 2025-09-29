import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

// helper to detect file type
const getFileType = (url) => {
  if (!url) return "other";
  const lowerUrl = url.toLowerCase();
  if (lowerUrl.endsWith(".pdf")) return "pdf";
  if (/\.(jpg|jpeg|png|gif|webp|svg|avif|bmp)$/.test(lowerUrl)) return "image";
  if (/\.(mp4|webm|ogg|mov)$/.test(lowerUrl)) return "video";
  return "other";
};

const GalleryDetails = () => {
  const [galleryItems, setGalleryItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/admin/gallery/get/${id}`
        );
        if (res.data.success) {
          const gallery = res.data.data;
          const items = gallery.imageUrls.map((url) => ({
            src: url,
            type: getFileType(url),
            caption: gallery.caption,
            category: gallery.category,
          }));
          setGalleryItems(items);
        }
      } catch (err) {
        console.error("Error fetching gallery:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchGallery();
  }, [id]);

  if (loading)
    return (
      <p className="text-center py-10 text-lg text-gray-600 font-medium">
        Loading...
      </p>
    );

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
<h1 className="relative text-3xl font-extrabold text-center mb-10 uppercase tracking-widest text-yellow-600">
  <span className="flex items-center justify-center gap-2">
    <svg className="w-7 h-7 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927C9.469 1.839 10.53 1.839 10.951 2.927l1.286 3.536a1 1 0 00.95.69h3.748c1.074 0 1.519 1.372.655 2.02l-3.032 2.171a1 1 0 00-.364 1.118l1.286 3.535c.42 1.088-.785 1.986-1.792 1.339L10 13.011l-3.032 2.17c-1.007.647-2.211-.252-1.792-1.34l1.285-3.534a1 1 0 00-.363-1.119l-3.032-2.17c-.864-.648-.418-2.02.655-2.02h3.748a1 1 0 00.95-.69l1.286-3.535z" /></svg>
    {galleryItems[0]?.category || "Gallery"}
  </span>
  <span className="block mt-2 mx-auto w-24 h-1 rounded bg-gradient-to-r from-yellow-300 via-yellow-600 to-yellow-300 opacity-60"></span>
</h1>




      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {galleryItems.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:scale-[1.02] transition-transform duration-300 flex flex-col"
          >
            {/* Media */}
            {item.type === "image" && (
              <img
                src={item.src}
                alt={item.caption || `Image ${index + 1}`}
                className="w-full aspect-video object-contain"
                loading="lazy"
              />
            )}

            {item.type === "video" && (
              <video
                controls
                className="w-full aspect-video object-cover bg-black"
                key={item.src}
              >
                <source src={item.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}

            {item.type === "pdf" && (
              <div className="p-4 flex flex-col items-center justify-center bg-gray-50 min-h-[260px]">
                <embed
                  src={item.src}
                  type="application/pdf"
                  className="w-full max-h-64 object-contain"
                />
                <p className="mt-4 text-sm">
                  <a
                    href={item.src}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline hover:text-blue-800"
                  >
                    View PDF
                  </a>
                </p>
              </div>
            )}

            {item.type === "other" && (
              <div className="p-6 text-center text-gray-500 italic font-semibold">
                Unsupported file type
              </div>
            )}

            {/* Caption */}
            {(item.caption || item.category) && (
              <div className="p-4 bg-gray-50 border-t border-gray-200 text-center md:text-left">
                {item.caption && (
                  <p className="text-gray-700 text-base mb-1">{item.caption}</p>
                )}
                {item.category && (
                  <p className="text-gray-400 italic text-sm">{item.category}</p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryDetails;
