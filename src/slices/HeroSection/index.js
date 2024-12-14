import { PrismicNextImage } from "@prismicio/next";

/**
 * @typedef {import("@prismicio/client").Content.HeroSectionSlice} HeroSectionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeroSectionSlice>} HeroSectionProps
 * @param {HeroSectionProps}
 */
const HeroSection = ({ slice }) => {
  // console.log('slice.primary.title --- ', slice.primary.heading)
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="hero-section relative mt-16"
    >
     <PrismicNextImage field={slice.primary.heroimage} />
     <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 xl:text-6xl lg:text-4xl md:text-2xl font-bold  bg-gray-50 bg-opacity-50 w-full text-center ">{slice.primary.heading}</h1>
    </section>
  );
};

export default HeroSection;
