'use client';

import React from 'react';
import { NovaHeader } from '../../Homepage/NovaWindowsDoors/NovaHeader';
import Image from 'next/image';
import { Licence } from '../../Homepage/WhyUS/licence';
import Veriety from './Veriety';

export const Energy = ({ sections }) => {
  return (
    <div className="xl:px-40">
      {sections.map((section, index) => (
        <div key={index} className="py-6">
          {/* Header Section */}
          {section.header && (
            <NovaHeader
              heading={section.header.heading}
              subheading={section.header.subheading}
              paragraph={section.header.paragraph}
              className={`text-centre`}
            />
          )}

          {/* Image Section */}
          {section.image && (
            <div className="w-full py-2">
              <Image
                src={section.image.src}
                width={section.image.width}
                height={section.image.height}
                alt={section.image.alt}
                className={`w-full ${section.image.className || ''}`}
              />
            </div>
          )}

          {/* Paragraph Section */}
          {section.paragraphs &&
            section.paragraphs.map((paragraph, pIndex) => (
              <p
                key={pIndex}
                className={`text-xl text-gray-600 text-center py-2 ${paragraph.className || ''}`}
              >
                {paragraph.text}
              </p>
            ))}

          {/* Custom Component Section */}
          {section.component && <section.component />}
        </div>
      ))}
    </div>
  );
};

export default Energy;
