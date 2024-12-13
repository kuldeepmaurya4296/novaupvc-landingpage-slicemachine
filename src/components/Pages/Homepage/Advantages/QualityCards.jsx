import Image from 'next/image';
import React from 'react';

// Reusable Card Component
const QualityCard = ({ image, heading, description }) => {
  return (
    <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105">
      <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
        <Image width={200} height={200} src={image} alt={heading} className="w-full h-full object-cover" />
      </div>
      <h3 className="text-xl font-semibold text-gray-700 mb-2">{heading}</h3>
      <p className="text-center text-gray-600">{description}</p>
    </div>
  );
};

export default QualityCard;
