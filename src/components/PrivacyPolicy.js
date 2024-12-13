'use client'
import React from "react";

const PrivacyPolicy = ({ policyData }) => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        {/* Main Heading */}
        <h1 className="text-3xl font-bold text-blue-600 mb-6 text-center">
          {policyData.title}
        </h1>

        {/* Sections */}
        {policyData.sections.map((section, index) => (
          <div key={index} className="mb-8">
            {/* Section Heading */}
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              {section.heading}
            </h2>

            {/* Paragraphs */}
            {section.paragraphs.map((para, idx) => (
              <p key={idx} className="text-gray-700 leading-6 mb-4">
                {para}
              </p>
            ))}

            {/* Unordered List */}
            {section.bulletPoints && (
              <ul className="list-disc list-inside text-gray-700 mb-4">
                {section.bulletPoints.map((bullet, idx) => (
                  <li key={idx} className="mb-2">
                    {bullet}
                  </li>
                ))}
              </ul>
            )}

            {/* Ordered List */}
            {section.numberedPoints && (
              <ol className="list-decimal list-inside text-gray-700">
                {section.numberedPoints.map((item, idx) => (
                  <li key={idx} className="mb-2">
                    {item}
                  </li>
                ))}
              </ol>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// Sample Policy Data
const policyData = {
  title: "Privacy Policy",
  sections: [
    {
      heading: "Introduction",
      paragraphs: [
        "We value your privacy and are committed to protecting your personal data.",
        "This privacy policy explains how we collect, use, and protect your information.",
      ],
    },
    {
      heading: "Data Collection",
      paragraphs: [
        "We collect the following data to provide better services:",
      ],
      bulletPoints: [
        "Name and contact details",
        "Email address",
        "Usage data and cookies",
      ],
    },
    {
      heading: "Data Usage",
      paragraphs: [
        "The information collected is used for the following purposes:",
      ],
      numberedPoints: [
        "To provide personalized services.",
        "To improve our website functionality.",
        "To communicate updates or promotional offers.",
      ],
    },
    {
      heading: "Your Rights",
      paragraphs: [
        "You have the right to access, update, and delete your personal information. If you have any questions or concerns about our privacy policy, please contact us.",
      ],
    },
  ],
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicy policyData={policyData} />;
}
