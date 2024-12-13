import Image from "next/image";
import React from "react";

// FeaturesCard Component
export const FeaturesCard = ({ logo, heading, description }) => {
  return (
    <div className="flex flex-col items-start gap-4 p-4 pl-10 border rounded-lg hover:shadow-lg transition-all ease-in-out duration-300 h-full">
      {/* Top Section: Logo and Heading */}
      <div className="flex items-center gap-4">
        {/* Logo Image */}
        <Image
          width={200}
          height={200}
          src={logo}
          alt={heading}
          className="w-16 h-16 object-contain"
        />
        {/* Heading */}
        <h3 className="text-2xl font-semibold text-[#c69240]">{heading}</h3>
      </div>
      {/* Bottom Section: Description */}
      <p className="text-gray-600 text-lg">{description}</p>
    </div>
  );
};
