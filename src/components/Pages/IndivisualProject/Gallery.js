'use client';
import Image from 'next/image';
import React, { useState } from 'react';

const GalleryComponent = ({ data, heading}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedTitle, setSelectedTitle] = useState('');

  // Open image modal
  const handleImageClick = (imageSrc, title) => {
    setSelectedImage(imageSrc);
    setSelectedTitle(title || ''); // Set title or empty string if not provided
    setIsModalOpen(true);
  };

  // Close image modal
  const handleClose = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
    setSelectedTitle('');
  };

  // Close modal when clicking outside the image
  const handleModalClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };
// console.log('data----',data)
  return (
    <div className="container mx-auto px-4 md:px-12 lg:px-28 py-6">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-center py-6 text-[#BC8A3D]">{heading}</h1>

      {/* Image Gallery */}
      <div className="flex flex-wrap justify-center gap-4 border p-6">
        {data.map((image, index) => (
          <div
            key={index}
            className="cursor-pointer max-w-xs"
            onClick={() => handleImageClick(image.image?.url, image.title)}
          >
            <Image
              width={200}
              height={100}
              src={image.image?.url}
              alt={image.image?.alt || 'Image'}
              className="w-full h-auto object-cover rounded-lg"
            />
            <p className="text-center mt-2 text-[#BC8A3D] text-[16px] font-bold">
              {image.title}
            </p>
          </div>
        ))}
      </div>

      {/* Modal for Full-Size Image */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={handleModalClick}
        >
          <div className="relative bg-white rounded-lg p-4 flex flex-col items-center w-[90%] md:w-1/2">
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-white bg-black rounded-full w-8 h-8 flex items-center justify-center"
              onClick={handleClose}
            >
              &times;
            </button>

            {/* Modal Title */}
            <h2 className="text-center text-[#BC8A3D] text-xl font-bold mb-4">
              {selectedTitle}
            </h2>

            {/* Modal Image */}
            <Image
              width={500}
              height={600}
              src={selectedImage}
              alt={selectedTitle || 'Full Size'}
              className="w-3/4 object-cover rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryComponent;
