import Image from 'next/image';
import React from 'react';

const ImageDescriptionSection = ({ image, heading, description }) => {

  return (
    <section className="flex flex-col md:flex-row justify-between py-8 lg:py-16 px-4 md:px-28 gap-6">
      <div className="w-full md:w-1/2">
        <Image
          width={300}
          height={250}
          src={image}
          alt="Section"
          className="w-full object-cover rounded-lg"
        />
      </div>
      <div className="w-full md:w-1/2 mt-6 md:mt-0">
        <h2 className="text-3xl font-bold text-gray-800">{heading}</h2>
        <p className="mt-4 text-lg text-gray-600">{description}</p>
      </div>
    </section>
  );
};

const ImageDescriptionContainer = ({descriptionData}) => {
  return (
    <div>
      {descriptionData.map((item, index) => (
        <ImageDescriptionSection
          key={index}
          image={item.image}
          heading={item.heading}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default ImageDescriptionContainer;
