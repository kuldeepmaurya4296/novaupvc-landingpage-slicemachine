import { PrismicNextImage } from "@prismicio/next";
import Image from "next/image";

/**
 * @typedef {import("@prismicio/client").Content.HeroSectionSlice} HeroSectionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeroSectionSlice>} HeroSectionProps
 * @param {HeroSectionProps}
 */
const HeroSection = ({ slice }) => {
  // console.log('slice.primary.title --- ', slice.primary)
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="hero-section relative mt-16"
    >
     <div className="w-full xl:max-h-[500px] ">
      <Image 
      src={slice.primary.heroimage?.url}
      width={1024}
      height={720}
      alt={slice.primary.heroimage?.alt}
      className="xl:max-h-[500px] w-full object-cover"
      />
     {/* <PrismicNextImage field={slice.primary.heroimage} className="w-full"/> */}
     </div>
     <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 xl:text-6xl lg:text-4xl md:text-2xl font-bold  bg-gray-50 bg-opacity-50 w-full text-center ">{slice.primary.heading}</h1>
    </section>
  );
};

export default HeroSection;
