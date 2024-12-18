import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";

import '../app.css'; // Ensure global styles are imported in the layout or root files

/**
 * Fetch and generate metadata for the Terms and Conditions page.
 */
export async function generateMetadata() {
  const client = createClient();
  const termsAndConditions = await client.getSingle("termsconditions"); // Fetch the Terms and Conditions document

  return {
    title: termsAndConditions.data.meta_title || "Terms and Conditions", // Use the meta title, or fallback to a default title
    description: termsAndConditions.data.meta_description || "", // Use the meta description, or fallback to an empty string
    openGraph: {
      title: termsAndConditions.data.meta_title, // OpenGraph title
      description: termsAndConditions.data.meta_description, // OpenGraph description
      images: termsAndConditions.data.meta_image ? [{ url: termsAndConditions.data.meta_image.url }] : [], // OpenGraph image if available
    },
  };
}

/**
 * Render the Terms and Conditions page using SliceZone.
 */
export default async function TermsAndConditions() {
  const client = createClient();
  const termsAndConditions = await client.getSingle("termsconditions"); // Fetch the Terms and Conditions document

  return <SliceZone slices={termsAndConditions.data.slices} components={components} />;
}
