import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";

import '../app.css'; // Ensure global styles are imported in the layout or root files

/**
 * Fetch and generate metadata for the About Us page.
 */
export async function generateMetadata() {
  const client = createClient();
  const aboutUs = await client.getSingle("aboutus");

  return {
    title: aboutUs.data.meta_title || "About Us",
    description: aboutUs.data.meta_description || "",
    openGraph: {
      title: aboutUs.data.meta_title,
      description: aboutUs.data.meta_description,
      images: aboutUs.data.meta_image ? [{ url: aboutUs.data.meta_image.url }] : [],
    },
  };
}

/**
 * Render the About Us page using SliceZone.
 */
export default async function AboutUs() {
  const client = createClient();
  const aboutUs = await client.getSingle("aboutus"); // Fetch the document by type for singletons

  return <SliceZone slices={aboutUs.data.slices} components={components} />;
}
