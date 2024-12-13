import React from 'react'
import HeroSection from '../Homepage/HeroSection'
import { NovaHeader } from '../Homepage/NovaWindowsDoors/NovaHeader';
import BestWindow from './Bestwindow';
import { WindowProfile } from './WindowRange/WindowProfile';
import { WindowRange } from './BestWindow/Index';
import { Energy } from './Energy/Index';
import Veriety from './Energy/Veriety';
import { Licence } from '../Homepage/WhyUS/licence';


const heroTagline = {
    heading: `uPVC Windows`,
    subHeading: ``,
    image: '"/hero.jpg"'
}

const headerData = {
    heading: "Choose NOVA",
    subheading: "uPVC Windows for your home",
    paragraph: `World’s Best uPVC Windows tested for over 25000 hours for extreme weather resistance, sound insulation & energy efficiency.

NOVA’s uPVC windows present an exquisite coming together of form and function. The profiles meet various requirements right from the budget apartments to palatial villas and commercial establishments – through structural design that can withstand rough weather conditions and wear & tear, ensuring Quality consistency and durability.

Research and testing that adheres to international standards are one of our key features at NOVA.  A fact that enables us to consistently maintaining the set benchmarks. Internal quality compliances have been met through the presence of European & Japanese equipment as per EN 12608 Standards. Accreditation from renowned organizations from Europe, for Accelerated Wealherability Test (Artificial weathering up to 25000 hours) and Mechanical properties & Chemical composition of our formulation.`
};
const headerData2 = {
    heading: "",
    subheading: "A Closer View of our Thermally Efficient uPVC Window Profiles",
    paragraph: `NOVA Double Glazed uPVC Window Systems offer superior thermal, acoustic & mechanical properties when compared to uPVC & aluminium windows of other brands specifically for Indian conditions.`
};

const videoData = {
  videoUrl: "/videos/video3.mp4",
    title: "Sample YouTube Video",
    autoplay: 1,
    modestbranding: 1,
    rel: 0,
    showinfo: 0,
};

const contentData = {
    title: "Following aspects are closely checked to ensure the best uPVC Windows:",
    items: [
      "Dimensional Accuracy (Face flatness, squareness, angle & radius)",
      "Colour",
      "Determination of the Appearance",
      "Determination of Profile Mass",
      "Straightness",
      "Heat Reversion (EN 479)",
      "Heat Ageing (Behavior after heating) (EN 478)",
      "Resistance to Impact by falling mass (EN 477)",
    ],
  };
  
  const profileData = [
    {
      id: 1,
      imageSrc: "/windows/weather.jpg",
      heading: "WEATHER SEAL",
      description: "Made of ethylene propylene dienemer, the weather seals ensure tight sealing and enhance air tight packing. Equipped with good weathering properties and resistance, they arrest noise and water leakage. Avoids air gap between slider sashes, prevents insect invasion & whistling effect.",
    },
    {
      id: 2,
      imageSrc: "/windows/wide.jpg",
      heading: "Wide Range of Colour Options",
      description: "NOVA offers a wide range of laminate options ranging from contemporary colors to wooden textures. We provide colors that are best suited for your homes. Our laminates are imported from Europe. They are equipped to deal with Indian weather and come with a 10 year warranty",
    },
    {
      id: 3,
      imageSrc: "/windows/multi.jpg",
      heading: "Multi Chambered uPVC Window Profiles",
      description: "Impact strength and durability of the windows are ensured with a number of multi-chambered sections with wall thickness of 2.3 mm to 2.5mm. Accommodates a wide range of hardware offering flexibility to choose existing and upcoming hardware.",
    },
    {
      id: 4,
      imageSrc: "/windows/sliding.jpg",
      heading: "SLIDING ROLLER",
      description: "The windows come equipped with slider rollers that ensure smooth manoeuvrability as well as durability. Co-Extruded Gaskets along the bead This improves overall aesthetics and saves time while fabricating the window.",
    }, {
      id: 5,
      imageSrc: "/windows/water.jpg",
      heading: "Water Drain Holes",
      description: "It is presented in the shutter and the outer frame to prevent the water spilling inside by providing separate drainage chambers to drain out the water. Inherent slope with designed water outlet solution ensures water does not stay in the system. The system can withstand heavy cyclone and can prevent water invasion.",
    },
    {
      id: 6,
      imageSrc: "/windows/locking.jpg",
      heading: "Multipoint Locking",
      description: "The locking facility at two to three points holds the windows strongly. Besides increasing security, this prevents noise, air and water leakage. Minute details are covered while designing these profiles. Hence NOVA profiles do not fail in any extreme scenario.",
    }, {
      id: 7,
      imageSrc: "/windows/water.jpg",
      heading: "Water Drain Holes",
      description: "It is presented in the shutter and the outer frame to prevent the water spilling inside by providing separate drainage chambers to drain out the water. Inherent slope with designed water outlet solution ensures water does not stay in the system. The system can withstand heavy cyclone and can prevent water invasion.",
    },
    {
      id: 8,
      imageSrc: "/windows/red.jpg",
      heading: "STEEL REINFORCEMENT - RED COLOUR",
      description: "With a thickness of 1.5mm, hot-dip galvanized to 125 GSM and 100% corrosion free, the steel reinforcement adds to the strength and sturdiness of the windows. Strategic designing of reinforcement space allows large doors for sunlight & scenic view and usage in high rises.",
    }, {
      id: 9,
      imageSrc: "/windows/system.jpg",
      heading: "GLAZING SYSTEM",
      description: "Glazing systems are air tight sealants with suitable space-bar, desiccant to absorb moisture and provide primary and secondary sealants. Single, double and triple glazing options are available as per the customer's needs, for arresting noise and energy loss.",
    },
    // {
    //   id: 10,
    //   imageSrc: "/windows/fusion.jpg",
    //   heading: "FUSION WELDED JOINTS",
    //   description: "The corners and joints in NOVA uPVC windows are fused together, unlike other types of windows where they are screwed and pasted. Hence the welded joints are more closely packed and have greater strength.",
    // },
  ];

  

const cardData = [
    {
        id: 1,
        imageSrc: "/windows/casement.png",
        heading: "Casement uPVC Windows",
        description:
            "This system is designed for more strength and better performance with twin gasket sealing. The gasket sealing coupled with multi-point lock ensures tight closure with no gaps for proper sealing, thermal and acoustic performance. Thicker Mullion profiles with reinforcements ensure sturdiness against heavy wind load. Our mullions, transoms with external strengthening bars ensures we can design large size windows with required wind load resistance.",
        advantages: [
            " Applicable for hall and bedrooms facing busy and noisy streets.",
            " Significant for thermal and acoustic performance.",
            "Supports large sized fixed glass enabling better view and light.",
            "A stronger system developed by NOVA against wind load. Casement System",
        ],
        link: `/windows/abc`, // Sanitized link
    },
    
    {
        id: 2,
        imageSrc: "/windows/sliding.png",
        heading: " Sliding uPVC Windows",
        description:
            "This system is designed for more strength and better performance with twin gasket sealing. The gasket sealing coupled with multi-point lock ensures tight closure with no gaps for proper sealing, thermal and acoustic performance. Thicker Mullion profiles with reinforcements ensure sturdiness against heavy wind load. Our mullions, transoms with external strengthening bars ensures we can design large size windows with required wind load resistance.",
        advantages: [
            " Applicable for hall and bedrooms facing busy and noisy streets.",
            " Significant for thermal and acoustic performance.",
            "Supports large sized fixed glass enabling better view and light.",
            "A stronger system developed by NOVA against wind load. Casement System",
        ],
        link: `/windows/abd`, // Sanitized link

    },
    {
        id: 3,
        imageSrc: "/windows/tiny.png",
        heading: "Tiny uPVC Windows",
        description:
            "This system is designed for more strength and better performance with twin gasket sealing. The gasket sealing coupled with multi-point lock ensures tight closure with no gaps for proper sealing, thermal and acoustic performance. Thicker Mullion profiles with reinforcements ensure sturdiness against heavy wind load. Our mullions, transoms with external strengthening bars ensures we can design large size windows with required wind load resistance.",
        advantages: [
            " Applicable for hall and bedrooms facing busy and noisy streets.",
            " Significant for thermal and acoustic performance.",
            "Supports large sized fixed glass enabling better view and light.",
            "A stronger system developed by NOVA against wind load. Casement System",
        ],
        link: `/windows/abx`, // Sanitized link
    },
];

const sections = [
    {
      header: {
        heading: 'Most Energy Efficient uPVC Windows in India',
        subheading: '',
        paragraph: `Windows typically occupy about 15 to 20 percent of the surface area of the walls. Windows not only add aesthetic looks and often a very important aspect of a home, but also a very significant component of home heating and cooling costs. poor windows lose more heat per square foot of area in winter and gain more heat in summer than any other surface in the home.
  
  Today, NOVA have changed the energy performance of windows in a radical way. NOVA energy efficient window systems will make your home more comfortable, dramatically reduce your energy costs and help to create a brighter, cleaner, healthier environment by reducing your carbon footprint.
  
  NOVA Single, Double & Triple glazing uPVC Window systems have the highest thermal efficiency properties, which allows you to have a much larger window surface area and a bigger view of the lush green surroundings.`,
      },
      image: {
        src: '/energy.jpg',
        width: 1013,
        height: 730,
        alt: 'Energy image',
        className: 'object-cover',
      },
      component: Veriety,
    },
    {
      header: {
        heading: 'Noise-proof uPVC Windows For A Quiet Life',
        subheading: '',
        paragraph: `Our Double Glazed uPVC Windows offer the most effective Sound Insulation & Acoustic properties for Indian Weather conditions.`,
      },
      image: {
        src: '/windows/noise.jpg',
        width: 1013,
        height: 430,
        alt: 'Noise image',
      },
      paragraphs: [
        {
          text: `Keep unwanted noise at bay with NOVA Window Systems. Specially designed to reduce the amount of sound entering or escaping from your home, they also add an additional layer of security. These windows are ideal for the present busy lifestyle – or simply if you want to enjoy a quiet life!`,
        },
        {
          text: `NOVA uPVC Windows & Doors are engineered to reduce sound transmission. The multi chambered profiles, fusion welded joints, Multiunit locking mechanism, and dual compression gaskets ensure that there is no sound infiltration. When combined with recommended Glazing & Hardware, NOVA uPVC window systems can insulate your indoors from unwanted sounds up to 40db.`,
        },
      ],
    },
    {
      image: {
        src: '/windows/color.jpg',
        width: 1013,
        height: 430,
        alt: 'Color image',
      },
    },
    {
      header: {
        heading: 'International Accreditations',
      },
      paragraphs: [
        {
          text: `Accreditation from renowned organizations from Europe such as BSI – UK & SKZ – Germany, for Accelerated Weatherability Test (Artificial Weathering up to 25000 hours) and Mechanical properties & Chemical composition of our formulation.`,
        },
      ],
      component: Licence,
    },
  ];
  
export const Windows = () => {
    return (
        <main className='mt-16 bg-gray-50'>
            <HeroSection heading={heroTagline.heading} subHeading={heroTagline.subHeading} image={heroTagline.image} />
            <NovaHeader heading={headerData.heading} subheading={headerData.subheading} paragraph={headerData.paragraph} className={`text-centre xl:px-40 lg:px-32 md:px-20 px-4 text-2xl leading-9`} />

            <BestWindow contentData={contentData} videoData={videoData} />


            <NovaHeader heading={headerData2.heading} subheading={headerData2.subheading} paragraph={headerData2.paragraph} className={`text-centre xl:px-40 lg:px-32 md:px-20 px-4 text-2xl leading-9`} />


            <WindowProfile profileData={profileData} />
            <WindowRange cardData={cardData}/>

            <Energy  sections={sections}/>
        </main>
    )
}
