'use client';

import React from 'react';
import Image from 'next/image';

export const Advantages = ({ title, imageSrc, imageAlt, imageWidth, imageHeight, items }) => {
    return (
        <div className="px-10 md:px-40 py-6 w-full ">
            {/* Title */}
            {/* <h2 className="text-xl font-bold mb-4">{title}</h2> */}

            <div className="flex flex-col md:flex-row  justify-center gap-20">
                {/* Image */}
                <div className='w-full md:w-1/2 flex justify-center md:justify-end'>
                <Image
                    src={imageSrc}
                    width={imageWidth}
                    height={imageHeight}
                    alt={imageAlt}
                    className="rounded shadow-lg"
                />
                </div>

                {/* List */}
                <div className="text-gray-700 w-full md:w-1/2">
                    <h2 className="text-xl font-bold mb-4">{title}</h2>

                    <ul className="list-disc list-inside">
                        {items.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};
