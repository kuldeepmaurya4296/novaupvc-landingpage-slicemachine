import React from 'react'
import { NovaHeader } from '../NovaWindowsDoors/NovaHeader';
import { YtFrame } from '../NovaWindowsDoors/YtFrame';
import { InfoCard } from '../InfoCard';
import { Quality } from './Quality';



// Data for the header
const headerData = {
    heading: "Advantages of",
    subheading: " NOVA Windows",
    paragraph: `NOVA is India’s largest manufacturer & supplier of energy efficient uPVC Windows & uPVC Doors. 
      We source the finest grade of raw material from European Fortune 500 companies. The optimized production 
      process outputs 100% lead-free & durable uPVC profiles for Indian climate. Our uPVC window and door systems 
      subjected to 25000+ hours of extreme weather ensure excellence. We have received certifications from Global labs 
      SKZ – Germany. NOVA uPVC Window & Door Systems surpass European quality standards in all mechanical 
      property tests.
  
      We are one of the most trusted uPVC brands used by Real Estate Firms globally. Our wide range of uPVC Window & 
      Door is available with coloured texture options including wood finishes.`
};
const videoData = {
  videoUrl: "/videos/video3.mp4",
    title: "Sample YouTube Video",
    autoplay: 1,
    modestbranding: 1,
    rel: 0,
    showinfo: 0,
};

const cardsData = [
    {
      title: "Energy Efficient",
      content: [
        "If you’re going to invest, then you may as well find the most energy-efficient uPVC Doors & Windows in India.",
        "Nova uPVC manufactures all the window components in-house using globally certified formulations.",
        "We take pride in fulfilling the demand for increasingly sustainable building products."
      ]
    },
    {
      title: "Style and Performance",
      content: [
        "Nova uPVC windows are suitable for any structure, from villas to apartments and schools to office spaces.",
        "Our windows range includes contemporary and traditional styles.",
        "Each window is crafted with care for exceptional energy efficiency, security, and durability.",
        "Complemented by easy fabrication & fitting with almost zero maintenance."
      ]
    },
    {
      title: "Homeowners, Builders and Fabricators",
      content: [
        "Nova uPVC Windows & Doors are perfect for:",
        "➤ Homeowners looking to upgrade your windows.",
        "➤ Builders looking for the highest-performance, Energy-Efficient windows for your next project.",
        "➤ Fabricators/Window Installers looking for great value, market-leading windows."
      ]
    },
    {
      title: "Health and Safety",
      content: [
        "All our uPVC Products come with a multi-point locking system with galvanized steel reinforcement.",
        "This provides enhanced security, impact strength, and exceeds EU Regulations on Energy Saving."
      ]
    }
  ];
  

export const Advantages = () => {
    const cards = [1, 2, 3, 4, 5];  // Array with length 3

    return (
        <main className='bg-gray-50 px-4 md:px-28'>
            <NovaHeader heading={headerData.heading} subheading={headerData.subheading} paragraph={headerData.paragraph} className={`text-center`} />
            <YtFrame videoUrl={videoData.videoUrl} title={videoData.title} autoplay={videoData.autoplay} modestbranding={videoData.modestbranding} rel={videoData.rel} showinfo={videoData.showinfo} className={`w-full md:w-2/3 h-[250px] md:h-[600px]`} />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-10 px-10 justify-items-center">
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
            <Quality />
        </main>
    )
}
