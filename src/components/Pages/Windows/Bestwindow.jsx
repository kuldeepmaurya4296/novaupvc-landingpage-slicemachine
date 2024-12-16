'use client';

import React from "react";
import { YtFrame } from "../Homepage/NovaWindowsDoors/YtFrame";

export const BestWindow = ({ heading,pointers, videoData }) => {
  // console.log('/videos/video3.mp4-----', heading)
  
  return (
    <div className="flex px-4 md:px-10 lg:px-20 items-start justify-between gap-10 flex-col md:flex-row">
      {/* First Container */}
      <div className="w-full md:w-1/2 p-6">
        <h1 className="text-2xl font-bold mb-4 text-[#c69240]">{heading}</h1>
        <ul className="list-disc pl-5 space-y-3">
          {pointers.map((item, index) => (
            <li key={index}>{item.text}</li>
          ))}
        </ul>
      </div>

      {/* Second Container */}
      <div className="w-full md:w-1/2">
        <YtFrame
          videoUrl={videoData?.url}
          title={videoData.key}
          autoplay={videoData.autoplay || false}
          modestbranding={videoData.modestbranding || false}
          rel={videoData.rel || false}
          showinfo={videoData.showinfo || false}
          className={`w-full h-[300px] md:h-[400px]`}
        />
      </div>
    </div>
  );
};

export default BestWindow;
