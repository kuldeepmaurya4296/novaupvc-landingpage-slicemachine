import { WindowProfileCard } from "@/components/Pages/Windows/WindowRange/WindowProfileCard";

/**
 * @typedef {import("@prismicio/client").Content.WindowCardsSlice} WindowCardsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<WindowCardsSlice>} WindowCardsProps
 * @param {WindowCardsProps}
 */
const WindowCards = ({ slice }) => {
  // console.log("Slice data for window cards: ", slice.primary.cards);

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-8 lg:px-32 md:px-20 px-4 xl:px-40">
        {slice.primary.cards.map((profile, index) => (
          <WindowProfileCard
            key={profile.image?.id || index} // Unique key from image ID or fallback to index
            imageSrc={profile.image?.url}
            heading={profile.title || "Default Title"} // Use 'title' for heading
            description={
              Array.isArray(profile.description)
                ? profile.description.map((desc) => desc.text).join(" ") // Concatenate text from the array
                : "Default Description"
            }
          />
        ))}
      </div>
    </section>
  );
};

export default WindowCards;
