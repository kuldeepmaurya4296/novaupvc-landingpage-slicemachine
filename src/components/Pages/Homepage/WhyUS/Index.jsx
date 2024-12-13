import React from 'react'
import { NovaHeader } from '../NovaWindowsDoors/NovaHeader';
import { YtFrame } from '../NovaWindowsDoors/YtFrame';
import { Production } from './Production';
import { Licence } from './licence';


const headerData = {
    heading: "Why Choose ",
    subheading: "NOVA Windows?",
    paragraph: `Our Vision is to provide customers with high-quality & long lasting Windows & Doors. NOVA uPVC Profiles surpass EN12608-1:2016 standards for UV resistance & other Mechanical Properties.

NOVA uPVC Doors & Windows accredited by global Institutions i.e SKZ-Germany. As part of the testing, NOVA Windows & Doors are subjected to 25000+ hours of extreme weather. This process tests uPVC mechanical properties & chemical composition in the most elaborate manner.`
};

const videoData = {
    videoUrl: "/videos/video1.mp4",
    title: "Sample YouTube Video",
    autoplay: 1,
    modestbranding: 1,
    rel: 0,
    showinfo: 0,
};

export const WhyUs = () => {
    return (
        <main className='px-4 md:px-28 bg-gray-50' id='videoRef'>
            <NovaHeader heading={headerData.heading} subheading={headerData.subheading} paragraph={headerData.paragraph} className={`text-centre`} />
            <YtFrame videoUrl={videoData.videoUrl} title={videoData.title} autoplay={videoData.autoplay} modestbranding={videoData.modestbranding} rel={videoData.rel} showinfo={videoData.showinfo} className={`w-full h-[300px] md:h-[700px]`} />
            <Production />
            <Licence/>
        </main>
    )
}
