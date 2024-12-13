import Image from 'next/image';
import React from 'react';

const VisionCard = ({ image, heading, description }) => {
    return (
        <main className='w-full md:w-[80%]  bg-white flex flex-col items-center md:py-8'>
            <div className="flex flex-col items-center  overflow-hidden text-center" >
                <Image width={200} height={200} src={image} alt={heading} className=" h-48 md:h-72 object-cover" />
                <div className="px-4 py-6">
                    <h3 className="text-2xl font-bold text-[#c69240] tracking-widest uppercase">{heading}</h3>
                    <p className="text-gray-600 mt-2 md:px-20 ">{description}</p>
                </div>
            </div>
        </main>
    );
};

export default VisionCard;
