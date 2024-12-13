import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

// Reusable Card Component
const Card = ({ image, name, link }) => {
  return (
    <Link href={link} >
      <div className="hover:bg-white w-fit p-4 rounded-lg hover:shadow-lg overflow-hidden flex flex-col items-center justify-between duration-500 ease-in-out ">
        <div className="w-[300px] h-[400px] flex items-center justify-center mb-4 overflow-hidden rounded-lg  transition-transform duration-500 ease-in-out transform ">
          <Image width={200} height={500} src={image} alt={name} className="object-cover p-4 lg:p-8" />
        </div>
        <p  className="text-[#bc8a3d] hover:underline text-center">
          {name}
        </p>
      </div>
    </Link>
  );
};

export default Card;
