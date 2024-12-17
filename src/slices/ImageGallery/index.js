import GalleryComponent from "@/components/Pages/IndivisualProject/Gallery";

/**
 * @typedef {import("@prismicio/client").Content.ImageGallerySlice} ImageGallerySlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ImageGallerySlice>} ImageGalleryProps
 * @param {ImageGalleryProps}
 */
const ImageGallery = ({ slice }) => {
  // console.log("galary Data ---- ", slice.primary.images)
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <GalleryComponent data={slice.primary.images} />

    </section>
  );
};

export default ImageGallery;
