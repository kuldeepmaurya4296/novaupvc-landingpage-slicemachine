'use client';
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';

/**
 * @typedef {import("@prismicio/client").Content.BrochureSlice} BrochureSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<BrochureSlice>} BrochureProps
 * @param {BrochureProps}
 */
const Brochure = ({ slice }) => {
  const pathname = usePathname(); // Get the current route path
  const currentDate = new Date().toLocaleDateString(); // Get the current date

  // Mock downloadable brochure link
  const brochureLink = "/path-to-downloadable-brochure.pdf";

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="p-8 bg-gray-50 text-gray-800 max-w-4xl mx-auto relative"
    >
      {/* Current Date */}
      <div className="absolute top-4 left-4 text-sm text-gray-600">
        {currentDate}
      </div>

      {/* Brochure Header */}
      <div className="text-center mb-8">
        {/* Only show the button when on the `/brochure` route */}
        {pathname === '/brochure' && (
          <Link
            href={brochureLink}
            download
            className="mt-4 inline-block bg-[#bc8a3d] text-white py-2 px-6 rounded-md hover:bg-[#a87220] transition"
          >
            Download Brochure
          </Link>
        )}
      </div>

      {/* Brochure Content */}
      <div className="bg-white shadow-md rounded-md p-6">
        {slice.primary.brochuredata[0].data.map((item, index) => {
          if (item.type === 'heading1') {
            return (
              <h1 key={index} className="text-4xl font-bold text-[#bc8a3d]">
                {item.text}
              </h1>
            );
          }

          if (item.type === 'heading2') {
            return (
              <h2 key={index} className="text-3xl font-semibold text-[#bc8a3d]">
                {item.text}
              </h2>
            );
          }

          if (item.type === 'heading3') {
            return (
              <h3 key={index} className="text-2xl font-medium text-[#bc8a3d]">
                {item.text}
              </h3>
            );
          }

          if (item.type === 'heading4') {
            return (
              <h4 key={index} className="text-xl font-medium text-[#bc8a3d]">
                {item.text}
              </h4>
            );
          }

          if (item.type === 'heading5') {
            return (
              <h5 key={index} className="text-lg font-normal text-[#bc8a3d]">
                {item.text}
              </h5>
            );
          }

          if (item.type === 'heading6') {
            return (
              <h6 key={index} className="text-base font-light text-[#bc8a3d]">
                {item.text}
              </h6>
            );
          }

          if (item.type === 'paragraph' && item.text.trim() !== '') {
            return (
              <p key={index} className="text-base leading-relaxed mb-4 text-gray-700">
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
