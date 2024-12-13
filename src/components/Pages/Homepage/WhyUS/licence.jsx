'use client'; // Ensures the component is rendered on the client side

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const Licence = ({
     logos = [ '/logo.jpeg', '/logo.jpeg', '/logo.jpeg',]
}) => {
    // Sample logos, replace with actual image paths or URLs
   

    return (
        <main className='flex items-center justify-center px-4'>
            <div className="py-10 bg-gray-50 w-full md:w-[60%]">
                {/* Section Header */}
                <h2 className="text-3xl font-semibold text-center text-[#bc8a3d] mb-12">
                    Trusted by Leading Companies
                </h2>

                {/* Marquee Section (for continuous scroll) */}
                <div className="overflow-hidden shadow-lg px-2 py-4 rounded-lg bg-white">
                    <marquee behavior="scroll" direction="left"  className="whitespace-nowrap p-0 m-0 inline-block">
                        {/* Logo Loop for Marquee */}
                        {logos.map((logo, index) => (
                            <div key={index} className="inline-block py-4 mx-4 border rounded-full w-20 h-20 relative">
                                <Image width={200} height={200}
                                    src={logo}
                                    alt={`Company ${index + 1}`}
                                    className="w-16 h-16 object-contain rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                                />
                            </div>
                        ))}
                    </marquee>
                </div>

                {/* Desktop: Horizontal Scrollable Logos */}
               


                <div className='w-full gap-5 flex flex-wrap justify-between mt-8'>
                    <Link href="/contact-us">
                        <button className="bg-[#c69240] font-bold text-white py-3 px-8 rounded-lg hover:bg-green-700 transition-all duration-300">
                            Download E-Brochure
                        </button>
                    </Link>

                    <Link href="/contact-us">
                        <button className="bg-[#c69240] font-bold text-white py-3 px-8 rounded-lg hover:bg-green-700 transition-all duration-300">
                            Certification & Test Results
                        </button>
                    </Link>
                </div>
            </div>
        </main>
    );
};
