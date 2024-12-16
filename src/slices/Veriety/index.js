import Veriety from "@/components/Pages/Windows/Energy/Veriety";

/**
 * @typedef {import("@prismicio/client").Content.VeritySlice} VeritySlice
 * @typedef {import("@prismicio/react").SliceComponentProps<VeritySlice>} VerityProps
 * @param {VerityProps}
 */
const Verity = ({ slice }) => {
  // console.log('slice data for veriety', slice.primary.veritydata)
  // console.log('slice data for veriety Description', slice.primary.veritydata[0].description)
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="xl:px-40 lg:px-20"
    >
      <Veriety buttonData={slice.primary.veritydata}/>
    </section>
  );
};

export default Verity;
