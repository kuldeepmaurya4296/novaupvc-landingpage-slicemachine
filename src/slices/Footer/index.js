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
  // console.log('footer data-------',slice.primary.cities)
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
     
     <PageFooter 
        citiesData={slice.primary.cities}
        linksData={slice.primary.links}
        socialLinks={slice.primary.sociallinks}
        logoSrc={slice.primary.footerlogo?.url}
        contactEmail={slice.primary.email}
        contactPhone= {slice.primary.phone}
      />
    </section>
  );
};

export default Footer;
