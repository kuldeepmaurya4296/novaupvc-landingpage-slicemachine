import React from 'react'
import Card from './UpvcCard';

const windowsData = [
    {
        image: '/casement-win.jpg', // Replace with actual image URLs
        name: 'Casement uPVC Windows',
        link: '/windows/casement Sliding Windows',
    },
    {
        image: '/sliding-win.jpg', // Replace with actual image URLs
        name: 'uPVC Sliding Windows',
        link: '/windows/uPVC Sliding Windows',
    },
    {
        image: '/tilt-win.jpg', // Replace with actual image URLs
        name: 'uPVC Tilt & Turn Windows',
        link: '/windows/uPVC Tilt & Turn Windows',
    },
    
];

export const Windows = () => {
    return (
        <main className='px-28 bg-gray-50 py-10'>
            <h2 className="text-4xl md:text-5xl font-semibold text-[#bc8a3d] mb-10 text-center">
                uPVC Windows
            </h2>


            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-8 place-items-center">
                {/* Map through windowsData and render each Card */}
                {windowsData.map((card, index) => (
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
