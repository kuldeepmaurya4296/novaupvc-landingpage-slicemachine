import { Licence } from "@/components/Pages/Homepage/WhyUS/licence";

/**
 * @typedef {import("@prismicio/client").Content.LeadingCompniesSlice} LeadingCompniesSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<LeadingCompniesSlice>} LeadingCompniesProps
 * @param {LeadingCompniesProps}
 */
const LeadingCompnies = ({ slice }) => {
  console.log('slice----',slice.primary.compnies[0].logo)
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="px-4 md:px-10 lg:px-20 xl:px-40"
    >
      <Licence logos={slice.primary.compnies} />
    </section>
  );
};

export default LeadingCompnies;
