import { NovaHeader } from "@/components/Pages/Homepage/NovaWindowsDoors/NovaHeader";

/**
 * @typedef {import("@prismicio/client").Content.MainHeadingSlice} MainHeadingSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<MainHeadingSlice>} MainHeadingProps
 * @param {MainHeadingProps}
 */
const MainHeading = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
    <NovaHeader heading={slice.primary.heading} subheading={slice.primary.subheading} paragraph={slice.primary.paragraph} className={`text-start`} />
    </section>
  );
};

export default MainHeading;
