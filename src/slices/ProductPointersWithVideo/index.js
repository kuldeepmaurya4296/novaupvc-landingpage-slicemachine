import BestWindow from "@/components/Pages/Windows/Bestwindow";

/**
 * @typedef {import("@prismicio/client").Content.WhyUsPointersWithVideoSlice} WhyUsPointersWithVideoSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<WhyUsPointersWithVideoSlice>} WhyUsPointersWithVideoProps
 * @param {WhyUsPointersWithVideoProps} props
 */
const WhyUsPointersWithVideo = ({ slice }) => {
  // Safely access the array
  const data = slice.primary.data || []; // Fallback to an empty array if data is undefined

  // Debugging to ensure proper data structure
  // console.log("Slice content for product video:", data);

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="why-us-section xl:px-20 lg:px-10"
    >
      {/* Iterate over the data array */}
      {data.map((item, index) => (
        <BestWindow
          key={index} // Unique key for each item
          heading={item.heading || "Default Heading"}
          pointers={item.text || "Default Text"}
          videoData={item.video || null}
        />
      ))}

      
    </section>
  );
};

export default WhyUsPointersWithVideo;
