import React from 'react';
import QualityCard from './QualityCards'; // Import the QualityCard component

export const Quality = () => {
  // Sample Data for Cards
  const cardData = [
    {
      image: '/upvc.jpeg', // Replace with actual image URLs
      heading: 'Soundproofing',
      description: 'Double glazed NOVA Windows are more effective in reducing the noise that can enter your home. This is especially helpful for those who live near airports, have neighbors with noisy pets.'
    },
    {
      image: '/upvc.jpeg', // Replace with actual image URLs
      heading: 'Security',
      description: 'Double glazing uPVC Doors & Windows are more difficult to be forcefully opened from the outside. This increases the safety level of your house and burglars will be discouraged from breaking in.'
    },
    {
      image: '/upvc.jpeg', // Replace with actual image URLs
      heading: 'UV Resistance',
      description: 'NOVA windows offer 100% UV resistance with the right amount of TiO2, which helps in retaining whiteness against exposure to the sun.'
    },
    {
      image: '/upvc.jpeg', // Replace with actual image URLs
      heading: 'Indoor Air Quality',
      description: 'Indoor Air Quality (IAQ) can be maintained by avoiding interior energy loss (generally 37% through windows). NOVA windows reduce energy loss by over 30% thereby reducing energy costs.'
    }
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
          Our Quality
        </h2> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Map through cardData and render each QualityCard */}
          {cardData.map((card, index) => (
            <QualityCard
              key={index}
              image={card.image}
              heading={card.heading}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
