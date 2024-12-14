import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";

import '../app.css'; // Ensure global styles are imported

/**
 * Fetch and generate metadata for the Brochure page.
 */
export async function generateMetadata() {
  const client = createClient();
  const brochure = await client.getByUID("brochure", "brochure"); // Fetch the document by UID

  return {
    title: brochure.data.meta_title || "Brochure",
    description: brochure.data.meta_description || "",
    openGraph: {
      title: brochure.data.meta_title || "Brochure",
      description: brochure.data.meta_description || "",
      images: brochure.data.meta_image ? [{ url: brochure.data.meta_image.url }] : [],
    },
  };
}

/**
 * Render the Brochure page using SliceZone.
 */
export default async function BrochurePage() {
  const client = createClient();
  const brochure = await client.getByUID("brochure", "brochure"); // Fetch the document by UID

  return (
    <div>
      <SliceZone slices={brochure.data.slices} components={components} />
    </div>
  );
}
