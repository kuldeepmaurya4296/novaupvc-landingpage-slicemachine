import React from 'react'
import HeroSection from '../Homepage/HeroSection'
import { NovaHeader } from '../Homepage/NovaWindowsDoors/NovaHeader'
import Image from 'next/image';
import { OurTeam } from './OurTeam';
import { Vision } from './Vision';
import { ContactForm } from './ContactForm';



const heroTagline = {
    heading: `About US`,
    subHeading: ``,
    image: '"/upvc.jpeg"'
}

const headerData = {
    heading: "About Us ",
    subheading: "",
    paragraph: `Welcome to Nova UPVC, the leading name in premium UPVC window manufacturing in Madhya Pradesh. We specialize in crafting windows that not only enhance the beauty of your spaces but also provide unmatched durability, energy efficiency, and advanced safety features.

At Nova UPVC, we prioritize quality and innovation in every product we create. Our windows are designed to deliver superior insulation, weather resistance, and soundproofing, ensuring a perfect blend of functionality and aesthetics.

Committed to serving the local community of MP, we bring cutting-edge solutions that redefine the standards of modern living. Experience the difference with Nova UPVC – windows that elevate your home’s comfort, safety, and style.

Nova UPVC – Redefining Window Excellence.`
};

export const AboutUs = () => {
    return (
        <main className='mt-16 bg-gray-50 pb-6'>
            <HeroSection heading={heroTagline.heading} subHeading={heroTagline.subHeading} image={heroTagline.image} />
            <div className='text-center xl:px-80 lg:px-60 md:px-40 sm:px-20 px-6 flex items-center justify-center'>
                <NovaHeader heading={headerData.heading} subheading={headerData.subheading} paragraph={headerData.paragraph} className={`text-centre`} />
            </div>
            <div className='py-4'>
                <Image src={`/aboutus.jpg`} width={1200} height={780} alt='about us' className='object-contain m-auto' />
            </div>

            <OurTeam />
            <Vision />
            <ContactForm />
        </main>
    )
}
