  /**
   * @typedef {import("@prismicio/client").Content.NavbarSlice} NavbarSlice
   * @typedef {import("@prismicio/react").SliceComponentProps<NavbarSlice>} NavbarProps
   * @param {NavbarProps}
   */
  import Navigation from "@/components/Header/Navbar";

  const Navbar = ({ slice }) => {
    console.log('navbar slice data - ', slice.primary)
    return (
      <section
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
        className="text-white"
      >
        <Navigation
          logoSrc={slice.primary.logosrc?.url}
          logoAlt={slice.primary.logo?.text}
          routes={slice.primary.routes}
          videoLink={slice.primary.videoroute}
          phone={slice.primary.phonenumber}
          email={slice.primary.email}
        />
      </section>
    );
  };

  export default Navbar;
