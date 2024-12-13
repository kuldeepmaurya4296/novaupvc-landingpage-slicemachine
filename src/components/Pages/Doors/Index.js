import React from 'react'
import HeroSection from '../Homepage/HeroSection'
import { NovaHeader } from '../Homepage/NovaWindowsDoors/NovaHeader';
import BestWindow from '../Windows/Bestwindow';
import { WindowRange } from '../Windows/BestWindow/Index';
import { WindowProfile } from '../Windows/WindowRange/WindowProfile';
import Energy from '../Windows/Energy/Index';
import Veriety from '../Windows/Energy/Veriety';
import { Licence } from '../Homepage/WhyUS/licence';

const heroTagline = {
  heading: `uPVC Doors`,
  subHeading: ``,
  image: '"/hero.jpg"',
};

const headerData = {
  heading: "Choose NOVA",
  subheading: "uPVC Doors for your home",
  paragraph: `NOVA’s uPVC doors provide the perfect blend of style, functionality, and durability. Our doors have undergone extensive testing, ensuring their resistance to extreme weather conditions, noise insulation, and energy efficiency. Whether for residential or commercial properties, NOVA's uPVC doors offer superior performance with designs that cater to both modern and traditional architectural needs. The rigorous testing we conduct guarantees quality and long-lasting reliability, backed by international standards and certifications.`,
};

const headerData2 = {
  heading: "",
  subheading: "Explore the Benefits of our uPVC Door Systems",
  paragraph: `NOVA uPVC Doors offer enhanced thermal insulation, security, and soundproofing properties, designed to withstand diverse environmental conditions. Their precision engineering makes them an ideal choice for modern homes and buildings in India.`,
};

const videoData = {
    videoUrl: "/videos/video2.mp4",
  title: "Sample YouTube Video",
  autoplay: 1,
  modestbranding: 1,
  rel: 0,
  showinfo: 0,
};

const contentData = {
  title: "Key Features to Ensure the Best uPVC Doors:",
  items: [
      "Dimensional Accuracy (Face flatness, squareness, angle & radius)",
      "Colour Consistency",
      "Appearance Determination",
      "Profile Mass Evaluation",
      "Straightness of Profiles",
      "Heat Reversion Resistance (EN 479)",
      "Heat Ageing Resistance (EN 478)",
      "Impact Resistance (EN 477)",
  ],
};

const profileData = [
  // {
  //     id: 1,
  //     imageSrc: "/doors/weather.jpg",
  //     heading: "WEATHER SEAL",
  //     description: "Made from high-quality materials, these seals ensure airtightness and enhance the durability of doors. They resist harsh weather, minimize noise infiltration, and prevent water leakage. The seals also block air gaps, prevent insect entry, and reduce whistling sounds.",
  // },
  // {
  //     id: 2,
  //     imageSrc: "/doors/wide.jpg",
  //     heading: "Wide Range of Colour Options",
  //     description: "NOVA offers an extensive selection of colour options, from modern hues to wooden textures, imported from Europe. These high-quality laminates are specifically designed to withstand the challenging Indian weather, with a 10-year warranty for peace of mind.",
  // },
  // {
  //     id: 3,
  //     imageSrc: "/doors/multi.jpg",
  //     heading: "Multi Chambered uPVC Profiles",
  //     description: "Our uPVC doors are designed with multi-chambered profiles to enhance strength and durability. These profiles feature wall thicknesses ranging from 2.3mm to 2.5mm, offering better insulation and the flexibility to accommodate a variety of hardware.",
  // },
  // {
  //     id: 4,
  //     imageSrc: "/doors/sliding.jpg",
  //     heading: "SLIDING ROLLER",
  //     description: "NOVA sliding doors are equipped with high-performance rollers, ensuring smooth operation and long-lasting durability. The co-extruded gaskets enhance aesthetics and make fabrication easier.",
  // },
  // {
  //     id: 5,
  //     imageSrc: "/doors/water.jpg",
  //     heading: "Water Drain Holes",
  //     description: "Specially designed drainage systems in both the shutter and the frame prevent water from entering, ensuring water drainage through dedicated chambers. This feature guarantees the door system remains effective during heavy rainfall or storms.",
  // },
  // {
  //     id: 6,
  //     imageSrc: "/doors/locking.jpg",
  //     heading: "Multipoint Locking System",
  //     description: "The multipoint locking mechanism ensures a secure seal, preventing noise, air, and water leaks. These locks are carefully designed for maximum security and smooth functionality in all conditions.",
  // },
  // {
  //     id: 7,
  //     imageSrc: "/doors/water.jpg",
  //     heading: "Water Drain Holes",
  //     description: "This feature prevents water from spilling inside by providing separate drainage chambers to channel water out, ensuring the system remains effective even under harsh weather conditions.",
  // },
  // {
  //     id: 8,
  //     imageSrc: "/doors/red.jpg",
  //     heading: "STEEL REINFORCEMENT - RED COLOUR",
  //     description: "With a thickness of 1.5mm, our hot-dip galvanized steel reinforcement is corrosion-resistant and ensures the structural integrity of the doors. Designed for use in large door systems, it allows for expansive views and is suitable for high-rise buildings.",
  // },
  // {
  //     id: 9,
  //     imageSrc: "/doors/system.jpg",
  //     heading: "GLAZING SYSTEM",
  //     description: "Our glazing systems are designed with airtight seals and are available in single, double, and triple glazing options, providing excellent noise insulation and energy efficiency tailored to your needs.",
  // },
];

const cardData = [
  {
      id: 1,
      imageSrc: "/windows/casement.png",
      heading: "Casement uPVC Doors",
      description: "The casement system provides enhanced strength with twin gasket sealing and multi-point locks, ensuring tight closure and excellent thermal and acoustic performance. It's ideal for large openings and can withstand strong wind loads.",
      advantages: [
          "Ideal for entryways and large openings.",
          "Excellent thermal and acoustic properties.",
          "Suitable for areas facing heavy winds and noise.",
          "Developed to withstand extreme weather conditions.",
      ],
      link: `/doors/casement`,
  },
  {
      id: 2,
      imageSrc: "/windows/sliding.png",
      heading: "Sliding uPVC Doors",
      description: "The sliding system combines strength, durability, and aesthetic appeal. Twin gasket seals ensure tight closure, preventing air and water leaks, while the sturdy profile withstands heavy wind loads.",
      advantages: [
          "Perfect for modern homes with large openings.",
          "Provides a clear view while offering excellent insulation.",
          "Weather-resistant and energy-efficient.",
      ],
      link: `/doors/sliding`,
  },
  {
      id: 3,
      imageSrc: "/windows/tiny.png",
      heading: "Tiny uPVC Doors",
      description: "Designed for smaller openings, the tiny uPVC doors provide excellent performance with multi-point locks and advanced sealing systems, ensuring great thermal and acoustic properties.",
      advantages: [
          "Ideal for compact spaces.",
          "Thermal insulation and soundproofing.",
          "Available in various designs and colours.",
      ],
      link: `/doors/tiny`,
  },
];

const sections = [
  // {
  //     header: {
  //         heading: 'Energy-Efficient uPVC Doors for Every Home',
  //         subheading: '',
  //         paragraph: `uPVC doors by NOVA help in reducing energy costs by providing superior insulation. With our high-performance glazing and multi-chambered profiles, the doors offer exceptional thermal resistance, keeping your home cooler in summer and warmer in winter.`,
  //     },
  //     image: {
  //         src: '/energy.jpg',
  //         width: 1013,
  //         height: 730,
  //         alt: 'Energy Efficiency Image',
  //         className: 'object-cover',
  //     },
  //     component: Veriety,
  // },
  // {
  //     header: {
  //         heading: 'Noise Reduction with NOVA uPVC Doors',
  //         subheading: '',
  //         paragraph: `Our uPVC doors offer excellent soundproofing properties, ensuring peace and quiet in your home. Whether it's the noise of the street or noisy neighbors, NOVA doors provide the perfect barrier for a calm environment.`,
  //     },
  //     image: {
  //         src: '/doors/noise.jpg',
  //         width: 1013,
  //         height: 430,
  //         alt: 'Noise Insulation Image',
  //     },
  //     paragraphs: [
  //         {
  //             text: `NOVA doors are engineered to keep unwanted noise out. Their advanced glazing, multi-chambered profiles, and sealing technologies ensure excellent sound insulation.`,
  //         },
  //         {
  //             text: `When combined with appropriate glazing and hardware, NOVA uPVC doors can provide noise reduction of up to 40dB, offering a truly quiet living experience.`,
  //         },
  //     ],
  // },
  // {
  //     image: {
  //         src: '/doors/color.jpg',
  //         width: 1013,
  //         height: 430,
  //         alt: 'Colour Options Image',
  //     },
  // },
  // {
  //     header: {
  //         heading: 'International Certifications for NOVA uPVC Doors',
  //     },
  //     paragraphs: [
  //         {
  //             text: `NOVA’s uPVC doors are accredited by leading organizations in Europe, ensuring they meet the highest standards of weatherability and performance. Our products have undergone rigorous testing, guaranteeing top-tier quality and reliability.`,
  //         },
  //     ],
  //     component: Licence,
  // },
];



export const Doors = () => {
  return (
      <main className="bg-gray-50">
          {/* Hero Section */}
          {heroTagline ? (
              <HeroSection 
                  heading={heroTagline?.heading || ""} 
                  subHeading={heroTagline?.subHeading || ""} 
                  image={heroTagline?.image || ""} 
              />
          ) : null}

          {/* Nova Header */}
          {headerData ? (
              <NovaHeader 
                  heading={headerData?.heading || ""} 
                  subheading={headerData?.subheading || ""} 
                  paragraph={headerData?.paragraph || ""} 
                  className="text-centre xl:px-40 lg:px-32 md:px-20 px-4 text-2xl leading-9" 
              />
          ) : null}

          {/* Best Window Section */}
          {contentData && videoData ? (
              <BestWindow 
                  contentData={contentData} 
                  videoData={videoData} 
              />
          ) : null}

          {/* Window Profile */}
          {profileData ? (
              <WindowProfile 
                  profileData={profileData} 
              />
          ) : null}

          {/* Window Range */}
          {cardData ? (
              <WindowRange 
                  cardData={cardData} title='NOVA uPVC Doors Range'
              />
          ) : null}

          {/* Energy Section */}
          {sections ? (
              <Energy 
                  sections={sections} 
              />
          ) : null}
      </main>
  );
};
