import { ContactUs } from "@/components/Pages/Homepage/ContactUs";

/**
 * @typedef {import("@prismicio/client").Content.ContactUsCitySlice} ContactUsCitySlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ContactUsCitySlice>} ContactUsCityProps
 * @param {ContactUsCityProps}
 */
const ContactUsCity = ({ slice }) => {
  // console.log('contactus city - ', slice.primary.locations)
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <ContactUs citiesData={slice.primary.locations}/>
    </section>
  );
};


export default ContactUsCity;
