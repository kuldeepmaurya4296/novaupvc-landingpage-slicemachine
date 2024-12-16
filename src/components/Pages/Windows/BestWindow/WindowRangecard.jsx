import Image from "next/image";
import Link from "next/link";
import React from "react";

// Reusable Card Component
export const WindowRangecard = ({ imageSrc, heading, description, advantages, link }) => {
  return (
    <Link href={link?.url || "#"}>
      <div className="flex flex-col p-6 bg-white rounded-md text-center">
        {/* Image */}
        <div className="w-full rounded-md overflow-hidden max-h-40">
          <Image
            width={200}
            height={200}
            src={imageSrc}
            alt={heading}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Heading with fixed height */}
        <div className="mt-4 h-12 flex items-center justify-center">
          <h2 className="text-2xl font-bold uppercase text-[#bc8a3d] leading-tight line-clamp-2">
            {heading}
          </h2>
        </div>

        {/* Description with fixed height and ellipsis */}
        <p className="mt-2 text-gray-600 text-lg line-clamp-5">{description}</p>

        {/* Advantages */}
        <h3 className="mt-4 text-lg font-semibold text-[#bc8a3d]">Advantages</h3>
        <ul className="mt-2 list-disc list-inside text-gray-600 text-lg text-start  line-clamp-5 relative">
          {advantages.map((advantage, index) => (
            <li key={index} className="mb-1">
              {advantage.text}
            </li>
          ))}

          {/* Fade effect for overflow */}
          {advantages.length > 4 && (
            <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-white to-transparent"></div>
          )}
        </ul>

        {/* Know More Link */}
        <a
          href={link?.url}
          className="mt-4 text-[#c69240] font-medium hover:underline self-end"
        >
          Know More
        </a>
      </div>
    </Link>
  );
};
