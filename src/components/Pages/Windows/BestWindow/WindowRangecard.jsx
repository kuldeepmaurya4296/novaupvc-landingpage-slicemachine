import Image from "next/image";
import React from "react";

// Reusable Card Component
export const WindowRangecard = ({ imageSrc, heading, description, advantages, link }) => {
  return (
    <div className="flex flex-col p-6 bg-white rounded-md text-center">
      {/* Image */}
      <div className="w-full rounded-md overflow-hidden max-h-40">
        <Image width={200} height={200}
          src={imageSrc}
          alt={heading}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Heading */}
      <h2 className="mt-4 text-2xl font-bold uppercase text-[#bc8a3d]">{heading}</h2>

      {/* Description */}
      <p className="mt-2 text-gray-600 text-lg">
        {description.length > 150
          ? `${description.slice(0, 150)}...`
          : description}
      </p>

      {/* Advantages */}
      <h3 className="mt-4 text-lg font-semibold text-[#bc8a3d]">Advantages</h3>
      <ul className="mt-2 list-disc list-inside text-gray-600 text-lg text-start">
        {advantages.map((advantage, index) => (
          <li key={index}>{advantage}</li>
        ))}
      </ul>

      {/* Know More Link */}
      <a
        href={link}
        className="mt-4 text-[#c69240] font-medium hover:underline self-start"
      >
        Know More
      </a>
    </div>
  );
};





