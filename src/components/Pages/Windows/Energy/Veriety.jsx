'use client'
import React, { useState } from "react";

export const Veriety = () => {
  // Data for the buttons and corresponding descriptions
  const buttonData = [
    { id: 1, label: "Energy & Thermal Efficiency", description: "Double glazing or insulated glazing uses two panes of glass thereby significantly reducing the amount of heat that enters or exits your home. As a result, your house is cooler during summer and warmer during winter." },
    { id: 2, label: "Soundproofing & Acoustics", description: "Because your windows are thicker, they are more effective in reducing the noise that can enter your home. This is especially helpful for those who live near airports, have neighbours with noisy pets." },
    { id: 3, label: "Secure Burglarproof", description: "Windows with double glazing are together to break and are more difficult to be forcefully opened from the outside. This increases the safety level of your house and burglars will be discouraged from breaking in." },
    { id: 4, label: "Reduce Interior Fading", description: "When furniture and décor are exposed to too much heat, they tend to wear and damage more easily. With less heat making bits way into your interiors, your furnishings are better protected." },
    { id: 5, label: "Reduce Condensation", description: "Condensation can be serious problem, particularly in order homes as it causes mould and mildew and in some cases it will also rot timber window frames and damage your family’s health. Double glazing works to reduce excess moisture to your window panes." },
  ];

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
            className={`px-4 py-2 rounded-lg ${
              selected.id === button.id
                ? "bg-[#bc8a3d] text-white"
                : "bg-[#a0855b] text-white"
            } hover:bg-[#bc8a3d]`}
          >
            {button.label}
          </button>
        ))}
      </div>

      {/* Description */}
      <div className="text-center mt-6 shadow-lg p-6 rounded-lg">
        <p className="text-lg text-gray-700">{selected.description}</p>
      </div>
    </div>
  );
};

export default Veriety;
