import { PrismicRichText } from "@prismicio/react";

/**
 * @typedef {import("@prismicio/client").Content.AboutTeamSlice} AboutTeamSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<AboutTeamSlice>} AboutTeamProps
 * @param {AboutTeamProps}
 */
const AboutTeam = ({ slice }) => {
  // console.log("About Team -- ", slice);

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="flex justify-center "
    >
      <div className="text-center p-6 bg-white shadow-lg rounded-md">
        {slice.primary.teamdata.map((item, index) => (
          <div key={index} className="mb-4">
            {/* Render the content with PrismicRichText */}
            <PrismicRichText
              field={item.data}
              components={{
                list: ({ children }) => (
                  <ul className="list-disc list-inside text-left text-lg">{children}</ul>
                ),
                listItem: ({ children }) => <li>{children}</li>,
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutTeam;
