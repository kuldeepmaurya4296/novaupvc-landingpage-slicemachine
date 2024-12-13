import React from 'react';

export const OurTeam = () => {
  return (
    <div className="p-8 flex flex-col items-center gap-10">
      <p className="text-4xl md:text-5xl font-thin text-[#c69240] mb-2"> OUR TEAM </p>

      <ul className="list-disc pl-6 space-y-2 flex flex-col">
        <li>We are a passionate team working together for success.</li>
        <li>Collaboration and innovation are the keys to our success.</li>
        <li>Each member brings unique skills to create effective solutions.</li>
        <li>We strive for excellence in every project we undertake.</li>
      </ul>
    </div>
  );
};
