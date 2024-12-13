import React from 'react'
import HeroSection from './HeroSection'
import ImageDescriptionContainer from './ImageDescription'
import TableComponent from './Table'
import GalleryComponent from './Gallery'
import CardComponent from './Card'
import { ContactForm } from '../Aboutus/ContactForm'
import { NovaHeader } from '../Homepage/NovaWindowsDoors/NovaHeader'
import Image from 'next/image'
import { Advantages } from './Advantages'

// Sample data from the JSON file
const heroData = {
  image: "/hero.jpg",
  heading: "Casement uPVC Windows",
  description: "Inventa Casement uPVC Windows are designed for more strength and better performance with twin gasket sealing. The gasket sealing coupled , transoms with external strengthening bars ensures we can design large size windows with required wind load resistance."
};


const data = {
  heading: <NovaHeader heading={'Casement uPVC Doors Designs'} />,
  images: [
    { src: "/indivisualProject/win1.jpg", alt: "Image 1" },
    { src: "/indivisualProject/win2.jpg", alt: "Image 2" },
    { src: "/indivisualProject/win3.jpg", alt: "Image 3" },
    { src: "/indivisualProject/win4.jpg", alt: "Image 4" },
    { src: "/indivisualProject/win5.jpg", alt: "Image 5" },
    { src: "/indivisualProject/win1.jpg", alt: "Image 1" },
    { src: "/indivisualProject/win2.jpg", alt: "Image 2" },
    { src: "/indivisualProject/win3.jpg", alt: "Image 3" },
    { src: "/indivisualProject/win4.jpg", alt: "Image 4" },
    { src: "/indivisualProject/win5.jpg", alt: "Image 5" },
    { src: "/indivisualProject/win1.jpg", alt: "Image 1" },
    { src: "/indivisualProject/win2.jpg", alt: "Image 2" },
    { src: "/indivisualProject/win3.jpg", alt: "Image 3" },
    { src: "/indivisualProject/win4.jpg", alt: "Image 4" },
    { src: "/indivisualProject/win5.jpg", alt: "Image 5" },
  ],
};

const advantagesData = {
  title: 'Advantages',
  imageSrc: '/indivisualProject/advantages.jpg',
  imageAlt: 'Advantages Image',
  imageWidth: 300,
  imageHeight: 400,
  items: [
    'Applicable for hall and bedrooms facing busy and noisy streets.',
    'Significant for thermal and acoustic performance.',
    'Supports large-sized fixed glass enabling better view and light.',
    'Stronger system developed by NOVA against wind load.',
  ],
};

// data.js

export const dataDescription = [
  {
    image: "/indivisualProject/casement.png",
    heading: "", // Empty heading for testing the fallback
    description: `Inventa Casement uPVC Windows are designed for more strength and better performance with twin gasket sealing. It is very useful when both thermal and acoustic performance is of prime consideration. The gasket sealing coupled with multi point lock ensures tight closure with no gaps for proper sealing, thermal and acoustic performance. Thicker Mullion profiles with reinforcements ensures sturdiness against heavy windload.

Inventa Casement uPVC Windows may find application in hall and bedrooms facing busy and noisy streets. Further, it allows big-size fixed glass which is suitable for better view and more light.

Inventa Casement uPVC Window is one of the strongest systems from NOVA against wind load. Our mullions, transoms with external strengthening bars allow designing large size windows with required wind load resistance.`,
  },
 
];

const tableData = [
  {
    heading: "Window size",
    minWidth: "600",
    minHeight: "1950",
    maxWidth: "1000",
    maxHeight: "2400"
  },
  {
    heading: "Sash size",
    minWidth: "600",
    minHeight: "1950",
    maxWidth: "1000",
    maxHeight: "2400"
  },
  
];

// data.js
export const cardData = [
  {
    image: "/indivisualProject/card1.jpg",
    heading: "HOME",
    description: "NOVA provide hi-tech design and engineering with the flexibility to create an individual appearance for every home..."
  },
  {
    image: "/indivisualProject/card2.jpg",
    heading: "FABRICATORS",
    description: "NOVA provide hi-tech design and engineering with the flexibility to create an individual appearance for every home..."
  },
  {
    image: "/indivisualProject/ard3.jpg",
    heading: "ARCHITECTURE",
    description: "NOVA provide hi-tech design and engineering with the flexibility to create an individual appearance for every home..."
  }
];

export const IndivisualProject = () => {
  return (
    <main className='mt-16 bg-gray-50'>
      <HeroSection heroData={heroData} />
      <NovaHeader heading={'Casement uPVC Windows Overview'} />
      <ImageDescriptionContainer descriptionData={dataDescription} />
      <Advantages
        title={advantagesData.title}
        imageSrc={advantagesData.imageSrc}
        imageAlt={advantagesData.imageAlt}
        imageWidth={advantagesData.imageWidth}
        imageHeight={advantagesData.imageHeight}
        items={advantagesData.items}
      />
      <TableComponent tableData={tableData} />
      <GalleryComponent data={data} />
      <GalleryComponent data={data} />
      <GalleryComponent data={data} />
      <ContactForm />
      <CardComponent cardData={cardData} />
    </main>
  )
}
