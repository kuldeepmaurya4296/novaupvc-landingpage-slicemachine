import { InfoCard } from "@/components/Pages/Homepage/InfoCard";
import { PrismicRichText } from "@prismicio/react";

/**
 * @typedef {import("@prismicio/client").Content.CardsSlice} CardsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CardsSlice>} CardsProps
 * @param {CardsProps}
 */
const Cards = ({ slice }) => {
  // console.log('slices', slice.primary.cardsdata[0].cardcontent);

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10 px-10 justify-items-center place-items-center">
        {/* Use .map to render InfoCard */}
        {slice.primary.cardsdata.map((card, index) => (
          <InfoCard
            key={index}
            title={card.CardTitle}
            // icon={card.icon}
            content={card.cardcontent.map((item) => item.text).join(' ')} // Join content into a single string
          />
        ))}
      </div>
    </section>
  );
};

export default Cards;
