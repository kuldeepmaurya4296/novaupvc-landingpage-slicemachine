import React from "react";
import { WindowProfileCard } from "./WindowProfileCard";



export const WindowProfile = ({profileData}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-8 lg:px-32 md:px-20 px-4 xl:px-40">
      {profileData.map((profile) => (
        <WindowProfileCard
          key={profile.id}
          imageSrc={profile.imageSrc}
          heading={profile.heading}
          description={profile.description}
        />
      ))}
    </div>
  );
};


