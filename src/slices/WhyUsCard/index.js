import { FeaturesCard } from "@/components/Pages/WhyNova/FeaturCard";
import { PrismicNextImage } from "@prismicio/next";

/**
 * @typedef {import("@prismicio/client").Content.WhyUsCardSlice} WhyUsCardSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<WhyUsCardSlice>} WhyUsCardProps
 * @param {WhyUsCardProps}
 */
const WhyUsCard = ({ slice }) => {
  // console.log('slice  data for why us page-----', slice.primary.card[0].cardlogo)
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <main className='py-16 px-4 md:px-28'>
        <div className="mx-auto grid grid-cols-1  lg:grid-cols-2 xl:grid-cols-3 gap-4 place-items-center">
          {slice.primary.card.map((item) => (
            <FeaturesCard
              key={'index'}
              logo={item.cardlogo?.url}
              heading={item.cardtitle}
              description={item.cardcontent}
            />
          ))}
        </div>
      </main>
    </section>
  );
};

export default WhyUsCard;
