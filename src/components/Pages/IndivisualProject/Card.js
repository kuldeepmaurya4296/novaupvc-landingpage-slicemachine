import Image from 'next/image';
import React from 'react';

const CardComponent = ({ cardData }) => {
  return (
    <div className="container mx-auto md:px-12 px-4 lg:px-28 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cardData.map((card, index) => (
          <div key={index} className="border rounded-lg overflow-hidden shadow-lg">
            <Image src={card.image} alt={card.heading} width={300} height={200} className="w-full h-48 object-contain" />
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold">{card.heading}</h3>
              <p className="text-gray-600 mt-2">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardComponent;
