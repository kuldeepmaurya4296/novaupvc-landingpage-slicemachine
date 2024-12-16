import { PrismicNextImage } from "@prismicio/next";

/**
 * @typedef {import("@prismicio/client").Content.ImageSlice} ImageSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ImageSlice>} ImageProps
 * @param {ImageProps}
 */
const Image = ({ slice }) => {
  // console.log('about Image -- ', slice)
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="flex items-center justify-center py-10 flex-col gap-10 mx-10"
    >
      <PrismicNextImage field={slice.primary.image} />

      <p className={`xs:px-40 lg:px-20 text-gray-700 text-base md:text-lg leading-7 w-full text-justify `}>
        {slice.primary.title}
      </p>
    </section>
  );
};

export default Image;
