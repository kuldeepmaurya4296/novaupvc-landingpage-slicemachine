import { CallSchedule } from "@/components/Pages/Homepage/CallSchedule";
import { ContactUs } from "@/components/Pages/Homepage/ContactUs";
import { Licence } from "@/components/Pages/Homepage/WhyUS/licence";
import { Production } from "@/components/Pages/Homepage/WhyUS/Production";

/**
 * @typedef {import("@prismicio/client").Content.ProductionAndCallSlice} ProductionAndCallSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ProductionAndCallSlice>} ProductionAndCallProps
 * @param {ProductionAndCallProps}
 */
const ProductionAndCall = ({ slice }) => {
  // console.log('production ---------------------', slice.primary)
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {/* <CallSchedule/> */}
      <Production 
      
      logoSrc ={slice.primary.logosrc?.url}
      productionTitle={slice.primary.productionprocesstitle}
      productionCapacity ={slice.primary.productioncapacitynumber} // Default value if no data provided
      productionCapacityUnit = {slice.primary.productioncapacityunit}
      yearsOfExperience = {slice.primary.yearsofexperiencenumber}// Default value if no data provided
      yearsOfExperienceText ={slice.primary.yearsofexperiencetext}
      />
      {/* <Licence trustedbrands = { slice.primary.trustedbrands }/>*/}
    </section>
  );
};

export default ProductionAndCall;
