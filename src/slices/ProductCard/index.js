import Card from "@/components/Pages/Homepage/UpvcWindows/UpvcCard";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

/**
 * @typedef {import("@prismicio/client").Content.ProductCardSlice} ProductCardSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ProductCardSlice>} ProductCardProps
 * @param {ProductCardProps}
 */
const ProductCard = ({ slice }) => {
  // console.log('product card data - ', slice.primary.productcard)
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="px-4 md:px-10 lg:px-20 xl:px-40 bg-gray-50 "
    >
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-8 place-items-center">
                {/* Map through doorsData and render each Card */}
                {slice.primary.productcard.map((card, index) => (
                    <Card
                        key={index}
                        image={card.productimage?.url}
                        name={card.productlink?.text}
                        link={card.productlink?.url}
                    />
                ))}
            </div>
      
    </section>
  );
};

export default ProductCard;
