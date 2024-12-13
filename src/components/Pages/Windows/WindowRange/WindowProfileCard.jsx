import Image from "next/image";

export const WindowProfileCard = ({ imageSrc, heading, description }) => {
    return (
        <div className="flex flex-col justify-between gap-4 text-center items-center p-6 hover:scale-105 transition-all ease-in-out duration-500 bg-white rounded-md">
            {/* Outer Circle */}
            <div className=" xl:w-60 xl:h-60 md:w-42 md:w-42 w-32 h-32">
                {/* Inner Circle */}
                <Image width={200} height={200}
                    src={imageSrc}
                    alt={heading}
                    className="w-full h-full object-cover"
                />
            </div>
            {/* Heading */}
            <h2 className="mt-4 text-lg font-bold text-[#bc8a3d]">{heading}</h2>

            {/* Description */}
            <p className="mt-2 text-center text-gray-600">{description}</p>
        </div>
    );
};
