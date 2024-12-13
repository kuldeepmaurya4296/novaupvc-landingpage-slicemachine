// NovaHeader.js
import React from 'react';

// Reusable component that accepts data as props
export const NovaHeader = ({ heading, subheading, paragraph, className}) => {
  return (
    <div className="flex flex-col items-center justify-center text-center p-6  bg-gray-50 py-10">
      {/* Main Heading */}
      <p className="text-4xl md:text-5xl font-thin text-[#bc893d9d] mb-2 ">
        {heading}
      </p>

      {/* Subheading */}
      <h2 className="text-4xl xl:px-48 md:text-5xl font-semibold text-[#bc8a3d] mb-10">
        {subheading}
      </h2>

      {/* Paragraph */}
      <p className={`text-gray-700 text-base md:text-lg leading-7 w-full text-justify ${className}`}>
        {paragraph}
      </p>
    </div>
  );
};
