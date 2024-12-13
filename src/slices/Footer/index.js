import PageFooter from "@/components/Footer/Footer";

/**
 * @typedef {import("@prismicio/client").Content.FooterSlice} FooterSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<FooterSlice>} FooterProps
 * @param {FooterProps}
 */
const customCities = [
  { city: "Mumbai", mapUrl: "https://www.google.com/maps?q=Mumbai" },
  { city: "Delhi", mapUrl: "https://www.google.com/maps?q=Delhi" }
];

const customLinks = [
  { text: 'Home', href: '/' },
  { text: 'Services', href: '/services' },
  { text: 'Contact', href: '/contact' }
];

const customSocialLinks = [
  { name: 'Facebook', href: 'https://facebook.com/mycompany' },
  { name: 'Twitter', href: 'https://twitter.com/mycompany' }
];
const Footer = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
     
     <PageFooter 
        citiesData={customCities}
        linksData={customLinks}
        socialLinks={customSocialLinks}
        logoSrc="/path/to/custom-logo.png"
        contactEmail="customemail@example.com"
        contactPhone="+91 1234567890"
      />
    </section>
  );
};

export default Footer;
