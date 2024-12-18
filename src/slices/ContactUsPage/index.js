import { ContactForm } from "@/components/Pages/Aboutus/ContactForm";
import Link from "next/link";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa"; // Importing icons

/**
 * @typedef {import("@prismicio/client").Content.ContactUsDataSlice} ContactUsDataSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ContactUsDataSlice>} ContactUsDataProps
 * @param {ContactUsDataProps}
 */
const ContactUsData = ({ slice }) => {
  const founderData = slice?.primary?.founderdata; // Ensure founderData is defined

  if (!founderData || founderData.length === 0) {
    return <p>No founder data available.</p>;
  }

  const { name, designation, experience, socialLinks } = founderData[0]; // Destructure the first founder's data

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="w-full flex lg:flex-row flex-col gap-10 lg:gap-0 justify-center py-10">
        {/* Contact Form Section */}
        <div className="w-full lg:w-1/3 order-2">
          <ContactForm />
        </div>

        {/* Founder Information Section */}
        <div className="w-full lg:w-1/3 order-1">
          <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
            {/* Founder Image */}
            <div className="flex justify-center">
              <img
                src="https://via.placeholder.com/150" // Replace with actual founder image
                alt="Founder"
                className="w-32 h-32 object-cover rounded-full border-4 border-gray-200 mt-6"
              />
            </div>

            {/* Founder Details */}
            <div className="text-center p-6">
              <h2 className="text-2xl font-bold text-gray-800">{name}</h2>
              <p className="text-xl text-gray-500 mt-2">{designation}</p>
              <p className="text-gray-600 mt-4">{experience}</p>

              {/* Social Media Links */}
              <div className="mt-6 flex flex-col gap-3">
                <h3 className="text-lg font-semibold text-gray-800">
                  Connect with {name}
                </h3>
                <div className="flex justify-center gap-4 mt-3">
                  {socialLinks &&
                    Object.entries(socialLinks).map(([platform, url]) => {
                      if (!url) return null; // Skip if no URL is provided
                      return (
                        <Link
                          key={platform}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800"
                        >
                          {platform === "instagram" && (
                            <FaInstagram className="text-2xl" />
                          )}
                          {platform === "facebook" && (
                            <FaFacebook className="text-2xl" />
                          )}
                          {platform === "twitter" && (
                            <FaTwitter className="text-2xl" />
                          )}
                        </Link>
                      );
                    })}
                </div>
                <p className="text-gray-600 mb-2">
                  <span className="font-medium">Email: </span>
                  <Link
                    href="mailto:novaupvc@gmail.com"
                    className="text-gray-900 hover:text-[#c69240]"
                  >
                    novaupvc@gmail.com
                  </Link>
                </p>
                <p className="text-gray-600 mb-2">
                  Phone:{" "}
                  <Link
                    href="tel:+91 9826057359"
                    className="text-gray-900 hover:text-[#c69240]"
                  >
                    +91 9826057359
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsData;
