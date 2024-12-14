import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";

import '../app.css'; // Ensure global styles are imported in the layout or root files

/**
 * Fetch and generate metadata for the Contact Us page.
 */
export async function generateMetadata() {
  const client = createClient();
  const contactUs = await client.getSingle("contactus");

  return {
    title: contactUs.data.meta_title || "Contact Us",
    description: contactUs.data.meta_description || "",
    openGraph: {
      title: contactUs.data.meta_title,
      description: contactUs.data.meta_description,
      images: contactUs.data.meta_image ? [{ url: contactUs.data.meta_image.url }] : [],
    },
  };
}

/**
 * Render the Contact Us page using SliceZone.
 */
export default async function ContactUs() {
  const client = createClient();
  const contactUs = await client.getSingle("contactus"); // Fetch the document by type for singletons

  return <SliceZone slices={contactUs.data.slices} components={components} />;
}
