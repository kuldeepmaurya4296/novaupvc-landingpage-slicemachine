import { Vision } from "@/components/Pages/Aboutus/Vision";

/**
 * @typedef {import("@prismicio/client").Content.VisionDataSlice} VisionDataSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<VisionDataSlice>} VisionDataProps
 * @param {VisionDataProps}
 */
const VisionData = ({ slice }) => {

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="mt-10"
    >
      <Vision data={slice.primary.visiondata}/>
    </section>
  );
};

export default VisionData;
