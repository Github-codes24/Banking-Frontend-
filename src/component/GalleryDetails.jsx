import React from "react";

const GalleryDetails = () => {
  const galleryItems = [
    {
      type: "image",
      src: "/slider-2.jpg",
      alt: "Event 1",
    },
    {
      type: "video",
      src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      type: "image",
      src: "/slider-2.jpg",
      alt: "Event 2",
    },
    {
      type: "video",
      src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-8 text-yellow-600">Our Society</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {galleryItems.map((item, index) => (
          <div key={index} className="bg-white shadow-md rounded overflow-hidden">
            {item.type === "image" ? (
              <img src={item.src} alt={item.alt} className="w-full h-64 object-cover" />
            ) : (
              <div className="aspect-video">
                <iframe
                  src={item.src}
                  className="w-full h-full"
                  title={`Video ${index}`}
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryDetails;
