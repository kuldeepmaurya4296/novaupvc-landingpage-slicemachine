import React from 'react'
import Card from './UpvcCard';

const doorsData = [
   
    {
        image: '/casement-door.jpg', // Replace with actual image URLs
        name: 'uPVC Casement Doors',
        link: '/windows/uPVC Casement Doors',
    },
    {
        image: '/slide-fold-door.jpg', // Replace with actual image URLs
        name: 'uPVC Slide & Fold Doors',
        link: '/windows/uPVC Slide & Fold Doors',
    },
    {
        image: '/sliding-door.jpg', // Replace with actual image URLs
        name: 'uPVC Sliding Doors',
        link: '/windows/uPVC Sliding Doors',
    },
    
];

export const Doors = () => {
    return (
        <main className='px-28 bg-gray-50 py-10'>
            <h2 className="text-4xl md:text-5xl font-semibold text-[#c69240] mb-10 text-center">
                uPVC Doors
            </h2>


            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-8 place-items-center">
                {/* Map through doorsData and render each Card */}
                {doorsData.map((card, index) => (
                    <Card
                        key={index}
                        image={card.image}
                        name={card.name}
                        link={card.link}
                    />
                ))}
            </div>
        </main>
    )
}
