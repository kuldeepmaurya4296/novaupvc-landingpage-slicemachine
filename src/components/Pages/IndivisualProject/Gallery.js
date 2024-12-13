'use client';
import Image from 'next/image';
import React, { useState } from 'react';

const GalleryComponent = ({data}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // Sample data from JSON
 

  // Open image modal
  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
    setIsModalOpen(true);
  };

  // Close image modal
  const handleClose = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  // Close modal when clicking outside the image
  const handleModalClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  return (
    <div className="container mx-auto px-4 md:px-12 lg:px-28 py-6">
      <h1 className="text-3xl font-bold text-center py-6">{data.heading}</h1>

      {/* Image Gallery */}
      <div className="flex flex-wrap justify-center gap-4 border p-6 ">
        {data.images.map((image, index) => (
          <div key={index} className="cursor-pointer max-w-xs" onClick={() => handleImageClick(image.src)}>
            <Image
              width={200}
              height={100}
              src={image.src}
              alt={image.alt}
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        ))}
      </div>

      {/* Modal for Full-Size Image */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={handleModalClick}
        >
          <div className="relative bg-white rounded-lg p-2 flex flex-col items-center w-1/2">
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-white bg-black rounded-full w-8 h-8 flex items-center justify-center"
              onClick={handleClose}
            >
              &times;
            </button>

            {/* Modal Image */}
            <Image 
            width={300}
            height={400}
              src={selectedImage}
              alt="Full Size"
              className="w-3/4 object-cover rounded-lg mt-4 mb-4"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryComponent;
