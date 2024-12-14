'use client'; // Ensures the component is rendered on the client side

import Image from 'next/image';
import React from 'react';

export const Production = ({
  logoSrc,
  productionTitle,
  productionCapacity = 22000, // Default value if no data provided
  productionCapacityUnit,
  yearsOfExperience = '70+', // Default value if no data provided
  yearsOfExperienceText
    // Default logo if no image is provided 
}) => {
  return (
    <div className="flex flex-col items-center justify-center py-8 md:py-12 bg-gray-50">
      {/* Logo inside a circle */}
      <div className="md:w-28 md:h-28 w-16 h-16 border border-[#c69240] rounded-full flex items-center justify-center mb-6">
        <Image width={100} height={100} src={logoSrc} alt='upvc nova logo' className='md:w-20 md:h-20 w-12 h-12' />
      </div>

      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 text-center mb-3 md:mb-6">
        {productionTitle}
      </h2>

      {/* Annual Capacity & Years of Experience */}
      <div className="flex items-center justify-center gap-10  md:py-8">
        {/* Annual Capacity */}
        <div className="text-center w-[50%] md:pr-20">
          <p className="text-[40px] md:text-[100px] font-thin text-[#c6934080]">{productionCapacity}</p>
          <p className="text-xs md:text-2xl text-[#c69240] uppercase">{productionCapacityUnit}</p>
        </div>

        {/* Vertical Line */}
        <div className="border-l-2 h-24 md:h-48 border-gray-400"></div>

        {/* Years of Experience */}
        <div className="text-center w-[50%] md:pl-20">
          <p className="text-[40px] md:text-[100px] font-thin text-[#c6934080]">{yearsOfExperience}</p>
          <p className="text-xs md:text-2xl text-[#c69240] uppercase">{yearsOfExperienceText}</p>
        </div>
      </div>
    </div>
  );
};
