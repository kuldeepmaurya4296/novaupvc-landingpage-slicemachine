'use client';  // This line ensures the component is rendered on the client-side.

import React from 'react';

// Reusable Video Frame Component
export const YtFrame = ({
  videoUrl,
  title,
  autoplay = false, // Determines if video should autoplay
  muted = true, // Initially muted
  controls = true, // Video controls (play, pause, volume, etc.)
  className, // Default empty string, so if no class is passed, it doesn't affect styles
}) => {
  return (
    <div className={`flex justify-center items-center p-6 bg-gray-50`}>
      {/* Video Embed Container */}
      <div className="relative w-full flex items-center justify-center">
        <video
          className={`${className}`}
          src={videoUrl}
          title={title}
          muted={muted} // Start with video muted
          autoPlay={autoplay} // Autoplay option
          controls={controls} // Show controls (play, pause, volume, etc.)
        ></video>
      </div>
    </div>
  );
};
