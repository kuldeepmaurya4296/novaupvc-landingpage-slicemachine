import ImageDescriptionContainer from "@/components/Pages/IndivisualProject/ImageDescription";

/**
 * @typedef {import("@prismicio/client").Content.IndivisualProductImageDescSlice} IndivisualProductImageDescSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<IndivisualProductImageDescSlice>} IndivisualProductImageDescProps
 * @param {IndivisualProductImageDescProps}
 */
const IndivisualProductImageDesc = ({ slice }) => {
  // console.log('slice product description -----', slice.primary.data[0].description[0].text)
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <ImageDescriptionContainer descriptionData={slice.primary.data} />

     
    </section>
  );
};

export default IndivisualProductImageDesc;
