import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";

import '../app.css'; // Ensure global styles are imported

/**
 * Fetch and generate metadata for the Why Us page.
 */
export async function generateMetadata() {
  const client = createClient();
  const whyUs = await client.getSingle("whyus"); // Fetch the singleton document by type

  return {
    title: whyUs.data.meta_title || "Why Us",
    description: whyUs.data.meta_description || "",
    openGraph: {
      title: whyUs.data.meta_title || "Why Us",
      description: whyUs.data.meta_description || "",
      images: whyUs.data.meta_image ? [{ url: whyUs.data.meta_image.url }] : [],
    },
  };
}

/**
 * Render the Why Us page using SliceZone.
 */
export default async function WhyUsPage() {
  const client = createClient();
  const whyUs = await client.getSingle("whyus"); // Fetch the singleton document by type

  return (
    <div>
      <SliceZone slices={whyUs.data.slices} components={components} />
    </div>
  );
}
