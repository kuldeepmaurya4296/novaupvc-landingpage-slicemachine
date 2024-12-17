import Link from 'next/link';
import React from 'react';

/**
 * @typedef {import("@prismicio/client").Content.BrochureSlice} BrochureSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<BrochureSlice>} BrochureProps
 * @param {BrochureProps}
 */
const Brochure = ({ slice }) => {
  // console.log('slice for brochure ---- ', slice.primary.brochuredata[0].data[0].spans);

  // Mock downloadable brochure link
  const brochureLink = "/path-to-downloadable-brochure.pdf";

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="p-8 bg-gray-50 text-gray-800 max-w-4xl mx-auto"
    >
      {/* Brochure Header */}
      <div className="text-center mb-8">
        
        <Link
          href={brochureLink}
          download
          className="mt-4 inline-block bg-[#bc8a3d] text-white py-2 px-6 rounded-md hover:bg-[#a87220] transition"
        >
          Download Brochure
        </Link>
      </div>

      {/* Brochure Content */}
      <div className="bg-white shadow-md rounded-md p-6">
        {slice.primary.brochuredata[0].data.map((item, index) => {
          if (item.type === 'heading2') {
            return (
              <h2
                key={index}
                className="text-2xl font-semibold mb-4 text-[#bc8a3d] border-b border-gray-200 pb-2"
              >
                {item.text}
              </h2>
            );
          }

          if (item.type === 'paragraph' && item.text.trim() !== '') {
            return (
              <p
                key={index}
                className="text-base leading-relaxed mb-4 text-gray-700"
              >
                {item.text}
              </p>
            );
          }

          if (item.type === 'list-item') {
            return (
              <ul key={`list-${index}`} className="list-disc ml-6 mb-4 text-gray-700">
                <li>{item.text}</li>
              </ul>
            );
          }

          return null; // Skip unsupported or empty types
        })}
      </div>
    </section>
  );
};

export default Brochure;
