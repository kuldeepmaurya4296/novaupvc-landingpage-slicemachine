/**
 * @typedef {import("@prismicio/client").Content.LeadingCompniesSlice} LeadingCompniesSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<LeadingCompniesSlice>} LeadingCompniesProps
 * @param {LeadingCompniesProps}
 */
const LeadingCompnies = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for leading_compnies (variation: {slice.variation})
      Slices
    </section>
  );
};

export default LeadingCompnies;
