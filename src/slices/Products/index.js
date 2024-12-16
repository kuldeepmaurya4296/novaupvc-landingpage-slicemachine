import { WindowRange } from "@/components/Pages/Windows/BestWindow/Index";
import { WindowRangecard } from "@/components/Pages/Windows/BestWindow/WindowRangecard";

/**
 * @typedef {import("@prismicio/client").Content.ProductsSlice} ProductsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ProductsSlice>} ProductsProps
 * @param {ProductsProps}
 */
const Products = ({ slice }) => {
  // console.log("data-------", slice.primary.productsdata[0].Product data --------);

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
     <WindowRange cardData={slice.primary.productsdata} />
    </section>
  );
};

export default Products;
