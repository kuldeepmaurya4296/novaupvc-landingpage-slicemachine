import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Reusable Footer component
const PageFooter = ({ citiesData, linksData, socialLinks, logoSrc, contactEmail, contactPhone }) => {
  return (
    <footer className="bg-gray-800 text-white py-5 md:py-12 relative">
      <Link href="/" className="w-full md:hidden">
        <Image
          src={logoSrc || "/uPVCnova.png"} // Default logo if none is provided
          width={100}
          height={100}
          alt="nova logo"
          className="bg-white p-1 w-12 self-center rounded-lg m-auto mb-6"
        />
      </Link>

      <div className="max-w-screen-xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        {/* First Column: Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Links</h3>
          <ul className="space-y-3 uppercase">
            {linksData.map((link, index) => (
              <li key={index}>
                <Link href={link.href} className="text-hover">
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Second Column: Cities */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <ul className="space-y-3">
            {citiesData.map(({ city, mapUrl }, index) => (
              <li key={index} className="text-gray-400 hover:tracking-widest hover:text-gray-50 transition-all duration-300 ease-in-out text-lg">
                <Link href={mapUrl} target="_blank" rel="noopener noreferrer">
                  {city}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Third Column: Social Networks */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Social Networks</h3>
          <ul className="space-y-3">
            {socialLinks.map((social, index) => (
              <li key={index}>
                <Link href={social.href} className="text-hover" target="_blank" rel="noopener noreferrer">
                  {social.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Fourth Column: Contact Details */}
        <div>
          <div className="flex items-center flex-col gap-6 text-white justify-center">
            <Link href="/" className="hidden md:block">
              <Image
                src={logoSrc || "/uPVCnova.png"} // Default logo if none is provided
                width={100}
                height={100}
                alt="nova logo"
                className="bg-white p-1 w-20 rounded-lg"
              />
            </Link>

            {/* Contact Details */}
            <p className="mb-2">
              <span className="font-medium">Email: </span>
              <a href={`mailto:${contactEmail}`} className="hover:text-[#c69240]">
                {contactEmail}
              </a>
            </p>
            <p className="mb-2">
              Phone: <Link href={`tel:${contactPhone}`} className="hover:text-[#c69240]">{contactPhone}</Link>
            </p>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="text-center mt-12 border-t border-gray-700 pt-6">
        <p className="text-gray-500">
          &copy; {new Date().getFullYear()}
          <Link href="https://www.flourishersedge.com/" className="text-hover"> Flourishers Edge</Link>.
          All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

// Default props to ensure fallback for missing data
// Footer.defaultProps = {
//   citiesData: [
//     {
//       city: "Bhopal",
//       mapUrl: "https://www.google.com/maps?q=Bhopal,+Madhya+Pradesh&output=embed"
//     },
//     {
//       city: "Indore",
//       mapUrl: "https://www.google.com/maps?q=Indore,+Madhya+Pradesh&output=embed"
//     },
//     {
//       city: "Jabalpur",
//       mapUrl: "https://www.google.com/maps?q=Jabalpur,+Madhya+Pradesh&output=embed"
//     },
//     {
//       city: "Raipur",
//       mapUrl: "https://www.google.com/maps?q=Raipur,+Chhattisgarh&output=embed"
//     }
//   ],
//   linksData: [
//     { text: 'Home', href: '/' },
//     { text: 'About Us', href: '/about' },
//     { text: 'Why Us', href: '/why-nova' },
//     { text: 'Services', href: '/windows' },
//     { text: 'Contact Us', href: '/contact' },
//     { text: 'Brochure', href: '/brochure' },
//     { text: 'Privacy Policy', href: '/privacy-policy' }
//   ],
//   socialLinks: [
//     { name: 'Facebook', href: 'https://facebook.com' },
//     { name: 'Twitter', href: 'https://twitter.com' },
//     { name: 'Instagram', href: 'https://instagram.com' },
//     { name: 'LinkedIn', href: 'https://linkedin.com' }
//   ],
//   logoSrc: "/uPVCnova.png",
//   contactEmail: "novaupvc@gmail.com",
//   contactPhone: "+91 9826057359"
// };

export default PageFooter;
