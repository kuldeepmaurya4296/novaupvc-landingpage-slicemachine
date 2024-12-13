import Image from 'next/image';
import React from 'react';



const HeroSection = ({heroData}) => {
  return (
    <section className="relative">
      <div className="">
        <Image width={1263} height={428}
          src={heroData.image}
          alt="Hero"
          className="object-contain w-full h-full"
        />
      </div>
        <h1 className="text-3xl md:text-5xl font-bold text-center py-4 text-[#c69240]">{heroData.heading}</h1>
      
      <p className="text-lg md:text-xl text-gray-900 text-center xl:px-48 lg:px-36 md:px-20 px-4 md:py-12 py-6">{heroData.description}</p>

    </section>
  );
};

export default HeroSection;
