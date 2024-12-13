"use client"; // Ensure the component works with Next.js

import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroSection = ({ heading, subHeading, image }) => {
  // Carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false, // No arrows, just dots
    dotsClass: "slick-dots slick-dots-custom", // Custom dots style
  };

  return (
    <section className="relative w-full overflow-hidden bg-gray-50">
      {/* Carousel */}
      <Slider {...settings} className="h-full">
        {Array(4)
          .fill("")
          .map((_, index) => (
            <div key={index} className="relative w-full">
              <Image
                src={"/hero.jpg"}
                alt={`Hero Image ${index + 1}`}
                width={1024}
                height={768}
                className="w-full h-full object-cover"
              />
              
              <div className="absolute w-full px-4 top-[40%] md:top-[45%] transform -translate-y-1/2 flex flex-col items-center justify-center text-center text-black gap-4 bg-white bg-opacity-50">
                <h1 className="text-2xl font-bold md:text-6xl">{heading}</h1>
                <p className="text-sm md:text-xl max-w-[80%]">{subHeading}</p>
              </div>
            </div>
          ))}
      </Slider>

      {/* Overlay Heading and Description */}
      {/* <div className="absolute w-full px-4 top-[40%] md:top-[45%] transform -translate-y-1/2 flex flex-col items-center justify-center text-center text-[#c69240] gap-4">
        <h1 className="text-4xl font-bold md:text-6xl">{heading}</h1>
        <p className="text-lg md:text-xl max-w-[80%]">{subHeading}</p>
      </div> */}

      {/* Custom Dots Position */}
      <style jsx>{`
        .slick-dots.slick-dots-custom {
          position: absolute;
          bottom: 20px;
          right: 20px;
          display: flex !important;
          flex-direction: column;
          gap: 10px;
        }
        .slick-dots.slick-dots-custom li button:before {
          font-size: 12px;
          color: white;
        }
        .slick-dots.slick-dots-custom li.slick-active button:before {
          color: #facc15; /* Highlighted dot color */
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
