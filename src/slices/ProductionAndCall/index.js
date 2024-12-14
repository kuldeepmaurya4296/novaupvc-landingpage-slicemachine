

/**
 * @typedef {import("@prismicio/client").Content.ProductionAndCallSlice} ProductionAndCallSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ProductionAndCallSlice>} ProductionAndCallProps
 * @param {ProductionAndCallProps}
*/
import { Production } from "@/components/Pages/Homepage/WhyUS/Production";
const ProductionAndCall = ({ slice }) => {
  // console.log('production ---------------------', slice.primary)
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="px-4 md:px-10 lg:px-20 xl:px-40"
      
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
