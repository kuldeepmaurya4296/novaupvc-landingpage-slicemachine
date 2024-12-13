'use client'
import React, { useState } from "react";
import Image from "next/image";

const data = [
    {
        image: "/Vission.jpg",
        heading: "Vision Statement",
        description:
            "We aim to create innovative solutions that change the world. Our goal is to lead the industry with sustainable technology.",
    },
    {
        image: "/quality.jpg",
        heading: "Quality Policy",
        description:
            "Our goal is to lead the industry with sustainable technology. We aim to create innovative solutions that change the world.",
    },
    {
        image: "/values.jpg",
        heading: "Our Values",
        description:
            "We aim to create innovative solutions that change the world. Our goal is to lead the industry with sustainable technology.",
    },
    // {
    //     image: "/innovation.jpg",
    //     heading: "Innovation",
    //     description:
    //         "Innovation drives us forward, and we believe in pushing boundaries to create groundbreaking solutions.",
    // },
];

export const Vision = () => {
    const [selectedIndex, setSelectedIndex] = useState(0); // Track the selected card

    const handleCardClick = (index) => {
        setSelectedIndex(index);
    };

    return (
        <main className="lg:mb-16 mb-10 px-4">

            <p className="text-4xl lg:text-5xl font-thin text-[#c69240] mb-2  text-center"> NOVA Vision </p>
            <div className="flex flex-col lg:flex-row items-center py-16 px-4 lg:px-10 gap-10  text-center bg-gray-50 ">
                {/* Left Side: Selected Image */}
                <div className="w-full  flex justify-center items-center  py-2 lg:w-[35%]">
                    <div className="w-[400px] h-[300px] relative overflow-hidden rounded-lg shadow-md">
                        <Image
                            src={data[selectedIndex].image}
                            alt={data[selectedIndex].heading}
                            fill
                            className="object-cover transition-all duration-300"
                        />
                    </div>
                </div>

                {/* Right Side: Cards */}
                <div className="w-full lg:w-[60%] flex flex-col items-center gap-6 h-full scrollbar-hide">
                    {/* Cards Container */}
                    <div className="flex gap-4 overflow-x-auto w-full scrollbar-hide relative py-10">
                        {data.map((item, index) => (
                            <div
                                key={index}
                                onClick={() => handleCardClick(index)}
                                className={`relative flex-shrink-0 w-1/2 lg:w-[30%] min-h-[250px] p-4 cursor-pointer bg-white shadow-md rounded-lg transition-all duration-300 ${selectedIndex === index ? "border-2 border-[#c69240]" : ""
                                    }`}
                            >
                                <h3 className="text-xl font-bold text-[#c69240]">{item.heading}</h3>
                                <p className="text-gray-600 mt-2 text-sm">{item.description}</p>

                                {/* Dot Below Each Card */}
                                <div
                                    className={`absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full ${selectedIndex === index ? "bg-[#c69240]" : "bg-gray-300"
                                        }`}
                                ></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>

    );
};
