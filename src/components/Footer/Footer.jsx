import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Reusable Footer component
const PageFooter = ({ citiesData, linksData, socialLinks, logoSrc, contactEmail, contactPhone }) => {
  return (
    <footer className="bg-gray-800 text-white pt-5 md:pt-8 relative ">
      <div className="max-w-screen-xl mx-auto px-6 grid grid-cols-3 lg:grid-cols-4 gap-8">
        {/* First Column: Logo and Contact Details */}
        <div className='col-span-3 lg:col-span-1 lg:order-1'>
          <div className="flex items-center flex-row lg:flex-col gap-6 text-white justify-center">
            <Link href="/" className="md:block">
              <Image
                src={logoSrc || "/uPVCnova.png"} // Default logo if none is provided
                width={100}
                height={100}
                alt="nova logo"
                className="bg-white p-1 lg:w-16 w-12 rounded-lg"
              />
            </Link>
            <p>
              <span className="font-medium">Email: </span>
              <Link href={`mailto:${contactEmail}`} className="hover:text-[#c69240]">
                {contactEmail}
              </Link>
            </p>
            <p>
              Phone: <Link href={`tel:${contactPhone}`} className="hover:text-[#c69240]">{contactPhone}</Link>
            </p>
          </div>
        </div>

        {/* Links Section */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Links</h3>
          <ul className="space-y-1 uppercase">
            {linksData.map((link, index) => (
              <li key={link.key}>
                <Link href={link?.links?.url || "#"} className="text-hover text-xs md:text-[16px]">
                  {link?.links?.text || "No Link"}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Cities Section */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Contact</h3>
          <ul className="space-y-1">
            {citiesData.map((city) => (
              <li key={city.key} className="text-gray-400 hover:tracking-widest hover:text-gray-50 transition-all duration-300 ease-in-out text-sm md:text-sm lg:text-lg">
                <Link href={city?.cities?.url || "#"} target="_blank" rel="noopener noreferrer">
                  {city?.cities?.text || "No City"}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Networks Section */}
        <div>
          <h3 className="font-semibold mb-2 text-lg">Social Networks</h3>
          <ul className="space-y-1">
            {socialLinks.map((social, index) => (
              <li key={index}>
                <Link href={social?.sociallinks?.url || "#"} className="text-hover text-xs md:text-sm lg:text-lg" target="_blank" rel="noopener noreferrer">
                  {social?.sociallinks?.text || "No Social Link"}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="text-center border-t border-gray-700 py-2">
        <p className="text-gray-500 text-xs md:text-sm lg:text-lg">
          &copy; {new Date().getFullYear()}
          <Link href="https://www.flourishersedge.com/" className="text-hover"> Flourishers Edge</Link>.
          All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default PageFooter;
