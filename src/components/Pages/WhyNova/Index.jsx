'use client'
import React from 'react'
import HeroSection from '../Homepage/HeroSection'
import { Featurs } from './Featurs'
import { YtFrame } from '../Homepage/NovaWindowsDoors/YtFrame'
import { ContactForm } from '../Aboutus/ContactForm'

const heroTagline = {
    heading: `Why Choose NOVA uPVC Windows`,
    subHeading: ``,
    image: '"/hero.jpg"'
}

const videoData = {
    videoUrl: "/videos/video2.mp4",
    title: "Sample YouTube Video",
    autoplay: 1,
    modestbranding: 1,
    rel: 0,
    showinfo: 0,
    className: "my-custom-class",  // Add custom class if needed
};

export const WhyNova = () => {
    return (
        <main className='mt-16  bg-gray-50 '>
            <HeroSection heading={heroTagline.heading} subHeading={heroTagline.subHeading} image={heroTagline.image} />
            <Featurs />

            <p className="text-3xl text-center md:text-4xl font-thin text-[#c69240] mb-2 uppercase">Our Corporate Video</p>
            <YtFrame videoUrl={videoData.videoUrl} title={videoData.title} autoplay={videoData.autoplay} modestbranding={videoData.modestbranding} rel={videoData.rel} showinfo={videoData.showinfo} className={`w-full md:w-2/3 h-[250px] md:h-[500px]`} />

            <div className='w-full py-10 '>
            <ContactForm/>
            </div>
        </main>
    )
}
