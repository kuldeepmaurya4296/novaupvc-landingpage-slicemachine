import React from 'react'
import { WindowRangecard } from './WindowRangecard';

export const WindowRange = ({cardData, title}) => {
    // console.log('Product data --------- ', cardData[0])
    return (
        <div className='px-4 xl:px-40 md:px-20 '>
            {/* <p className="text-4xl md:text-5xl font-semibold text-[#bc893d9d] mb-2 text-center">
            {title || "Explore the NOVA uPVC Windows Collection"}
            </p> */}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
                {cardData.map((card) => (
                    <WindowRangecard
                        key={card.id}
                        imageSrc={card.image?.url}
                        heading={card.title}
                        description={card.description}
                        advantages={card.advantages}
                        link={card.link}
                    />
                ))}
            </div>

        </div>
    )
}
