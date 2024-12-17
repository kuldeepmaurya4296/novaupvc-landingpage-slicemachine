import { Advantages } from "@/components/Pages/IndivisualProject/Advantages";

/**
 * @typedef {import("@prismicio/client").Content.AdvantagesDataForIndivisualProductSlice} AdvantagesDataForIndivisualProductSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<AdvantagesDataForIndivisualProductSlice>} AdvantagesDataForIndivisualProductProps
 * @param {AdvantagesDataForIndivisualProductProps}
 */
const AdvantagesDataForIndivisualProduct = ({ slice }) => {
  // console.log('AdvantagesDataForIndivisualProduct---------',slice.primary.items)
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Advantages
        title={slice.primary.title}
        imageSrc={slice.primary.image?.url}
        imageAlt={slice.primary.image?.alt}
        // imageWidth={slice.primary.dimensions?.width || 300}
        // imageHeight={slice.primary.dimensions?.height || 400}
        items={slice.primary.items}
      />
    </section>
  );
};

export default AdvantagesDataForIndivisualProduct;
