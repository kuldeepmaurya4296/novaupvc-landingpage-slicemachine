import React from 'react'
import { NovaHeader } from './NovaHeader';
import { YtFrame } from './YtFrame';
import { InfoCard } from '../InfoCard';
import { FaGlobe, FaQuran } from 'react-icons/fa';


// Data for the header
const headerData = {
    heading: "NOVA",
    subheading: "uPVC Windows & Doors",
    paragraph: `NOVA is India's leading manufacturer and supplier of energy-efficient uPVC Windows and Doors. 
    We source premium raw materials from top European Fortune 500 companies, ensuring the highest quality. Our advanced production process results in 100% lead-free and durable uPVC profiles tailored for India's diverse climate. Our uPVC window and door systems undergo rigorous testing, with over 25,000 hours of extreme weather exposure to guarantee exceptional performance. Certified by global labs like SKZ – Germany, NOVA uPVC Window and Door Systems exceed European quality standards across all mechanical property tests.
  
    Trusted by top Real Estate firms worldwide, NOVA offers a wide selection of uPVC windows and doors, available in various textures and finishes, including wood-like options.`
};


const videoData = {
    videoUrl: "/videos/video1.mp4",
    title: "Sample YouTube Video",
    autoplay: 1,
    modestbranding: 1,
    rel: 0,
    showinfo: 0,
    className: "my-custom-class",  // Add custom class if needed
};

const cardsData = [
    {
        title: "World’s Best Raw Materials",
        content: [
            "Best & finest grades of raw materials sourced from Europe.",
            "Processed under PLC/SCADA based Auto Weighing & Batching System.",
            "Consistent quality to ensure the enhanced UV resistance, mechanical properties & Gloss level.",
        ]
    },
    {
        title: "Top-Quality Manufacturing",
        content: [
            "Automated production processes for high precision.",
            "100% lead-free uPVC profiles for environmental safety.",
            "Tested under extreme weather conditions to guarantee performance.",
        ]
    },
    
    {
        title: "Strong R&D Team",
        content: [
            "Our trained engineers aid customers with innovative window & door solutions.",
            "Our skillful team excels at every aspect i.e Extrusion, Fabrication, Installation & Customer service.",
        ]
    }
    // Add more card data as needed
];

export const NovaWindowsDoors = () => {
 

    return (
        <main className='bg-gray-50 px-0 md:px-28'>
            <NovaHeader heading={headerData.heading} subheading={headerData.subheading} paragraph={headerData.paragraph} className={`text-start`} />
            <YtFrame videoUrl={videoData.videoUrl} title={videoData.title} autoplay={videoData.autoplay} modestbranding={videoData.modestbranding} rel={videoData.rel} showinfo={videoData.showinfo} className={`w-full md:w-1/2 h-[250px] md:h-[400px]`} />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10 px-10 justify-items-center">
                {/* Use .map to render InfoCard three times */}
                {cardsData.map((card, index) => (
                    <InfoCard
                        key={index}
                        title={card.title}
                        // icon={card.icon}
                        content={card.content}
                    />
                ))}
            </div>

        </main>
    )
}
