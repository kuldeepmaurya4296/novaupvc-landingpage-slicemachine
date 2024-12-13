import React from 'react'
import { FeaturesCard } from './FeaturCard'

export const Featurs = () => {
    const featuresData = [
        {
            logo: "/whyus/lead.png",
            heading: "Lead free Profiles",
            description: "Eco Friendly - Calcium Zinc based formulation which offers high UV resistance & Weld Strength and ensures enhanced product quality.",
        },
        {
            logo: "/whyus/european.png",
            heading: "Confirms to European Standards",
            description: "Stringent quality assurance from procurement to manufacturing that complies with EN12608 Standard and accreditation from SKZ Germany",
        },
        {
            logo: "/whyus/better.png",
            heading: "Better Product Design",
            description: "Master crafted designs with the right gradients, textures & edges accommodating complete benefits such as ventilation, view robustness and aesthetics.",
        },
        {
            logo: "/whyus/wide.png",
            heading: "Wide Product Ranges Optima and Inventa",
            description: "designs in sync with engineering principles have led to the development of variegated profiles that are suitable for budget apartments to most premium villas.",
        },
        {
            logo: "/whyus/state.png",
            heading: "State of the Art Manufacturing facility",
            description: "Best manufacturing practices put in place with utmost quality consciousness on each stage right from machine selection, tooling, Testing equipments and to team development",
        },
        {
            logo: "/whyus/world.png",
            heading: `World’s Best Raw materials`,
            description: "Best & finest grades of raw materials sourced from Europe, processed under PLC/SCADA based Auto Weighing & Batching System with consistent quality to ensure the enhanced UV resistance, mechanical properties & Gloss level.",
        },
        {
            logo: "/whyus/flexible.png",
            heading: "Flexible stock ordering & Lowest lead time",
            description: "We offer flexibility when it comes to stock ordering and customized dispatch services. We also assure lowest lead time. This ensures easy cash flow, logistics and inventory planning for the fabricators",
        },
        {
            logo: "/whyus/strong.png",
            heading: "Strong R&D team",
            description: "Best manufacturing practices put in place with utmost quality consciousness on each stage right from machine selection, tooling, Testing equipments and to team development",
        },
        {
            logo: "/whyus/trainning.png",
            heading: "Training & Development",
            description: "Intense training on fabrication and installation that makes partner sales team self-reliant & competent to handle customer needs.",
        },
        {
            logo: "/whyus/marketing.png",
            heading: "Marketing support",
            description: "Marketing support rendered in the form of technical methods, targeted campaigns and business development tools for scientific approach towards end customers, channel partners, influencers to add momentum to sales efforts.",
        },
    ];

    return (
        <main className='py-16 px-4 md:px-28'>
            <p className='text-center lg:px-28 md:px-10 px-0 pb-10'>
                Architectural aesthetics evolve with time, taste and design pervade every aspect of a building right from the facade to the interiors. The contemporary approach has been to seek a fine balance between form and function.</p>
            <div className="mx-auto grid grid-cols-1  lg:grid-cols-2 xl:grid-cols-3 gap-4 place-items-center">
                {featuresData.map((feature, index) => (
                    <FeaturesCard
                        key={index}
                        logo={feature.logo}
                        heading={feature.heading}
                        description={feature.description}
                    />
                ))}
            </div>
        </main>
    );
}
