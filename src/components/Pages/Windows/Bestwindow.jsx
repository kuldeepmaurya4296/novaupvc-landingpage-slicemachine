'use client';

import React from "react";
import { YtFrame } from "../Homepage/NovaWindowsDoors/YtFrame";

export const BestWindow = ({ contentData, videoData }) => {
  return (
    <div className="flex px-4 md:px-10 lg:px-20 items-start justify-between gap-10 flex-col md:flex-row">
      {/* First Container */}
      <div className="w-full md:w-1/2 p-6">
        <h1 className="text-2xl font-bold mb-4 text-[#c69240]">{contentData.title}</h1>
        <ul className="list-disc pl-5 space-y-3">
          {contentData.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Second Container */}
      <div className="w-full md:w-1/2">
        <YtFrame
          videoUrl={videoData.videoUrl}
          title={videoData.title}
          autoplay={videoData.autoplay}
          modestbranding={videoData.modestbranding}
          rel={videoData.rel}
          showinfo={videoData.showinfo}
          className={`w-full h-[300px] md:h-[400px]`}
        />
      </div>
    </div>
  );
};

export default BestWindow;
