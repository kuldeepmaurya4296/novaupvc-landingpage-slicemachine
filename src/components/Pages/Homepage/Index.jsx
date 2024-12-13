import React from 'react'
import HeroSection from './HeroSection'
import { NovaWindowsDoors } from './NovaWindowsDoors/Index'
import { Advantages } from './Advantages/Index'
import { UpvcWindows } from './UpvcWindows/Index'
import { CallSchedule } from './CallSchedule'
import { WhyUs } from './WhyUS/Index'
import { ContactUs } from './ContactUs'

const heroTagline = {
    heading: `Welcome to NOVA uPVC`,
    subHeading: `Discover our amazing products and services tailored just for you!`,
    image: '"/hero.jpg"'
}
export const HomePage = () => {
    return (
        <main className='mt-16 bg-gray-50'>
            <HeroSection heading={heroTagline.heading} subHeading={heroTagline.subHeading} image={heroTagline.image}/>
            
            <NovaWindowsDoors />
            <Advantages/>
            <UpvcWindows/>
            <CallSchedule/>
            <WhyUs/>
            <ContactUs/>
        </main>
    )
}
