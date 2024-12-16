'use client'
import React, { useState } from "react";

export const Veriety = ({ buttonData }) => {
  // State to track the currently selected description
  const [selected, setSelected] = useState(buttonData[0]);

  return (
    <div className="p-6">
      {/* Buttons */}
      <div className="flex justify-center space-x-4 mb-4 flex-wrap gap-2">
        {buttonData.map((button) => (
          <button
            key={button.id}
            onClick={() => setSelected(button)}
            className={`px-4 py-2 rounded-lg transition-all duration-300 ${
              selected.id === button.id
                ? "bg-[#bc8a3d] text-white" // Selected button background (more noticeable)
                : "bg-[#a0855b] text-white" // Non-selected button background (lighter)
            } hover:bg-[#a0855b]`} // Hover color for both buttons
          >
            {button.title}
          </button>
        ))}
      </div>

      {/* Description */}
      <div className="text-center mt-6 shadow-lg p-6 rounded-lg">
        {selected.description.map((para, index) => (
          <div
            key={index}
            className={`text-lg text-gray-700 ${para.direction === "ltr" ? "text-left" : "text-right"}`}
          >
            {para.type === 'paragraph' ? (
              <p>{para.text}</p>
            ) : (
              <div>{para.text}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Veriety;
