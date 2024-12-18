import { SliceZone } from "@prismicio/react";
import * as prismic from "@prismicio/client";

import { createClient } from "@/prismicio";
import { components } from "@/slices";

import "../app.css"; // Ensure global styles are imported

/**
 * Fetch and generate metadata for the Privacy Policy page.
 */
export async function generateMetadata() {
  const client = createClient();
  
  // Fetch the Privacy Policy document using its UID
  const privacyPolicy = await client.getByUID("privacypolicy", "privacy-policy"); 

  return {
    title: prismic.asText(privacyPolicy.data.title) || "Privacy Policy",
    description: privacyPolicy.data.meta_description || "",
    openGraph: {
      title: privacyPolicy.data.meta_title || "Privacy Policy",
      images: privacyPolicy.data.meta_image
        ? [{ url: privacyPolicy.data.meta_image.url }]
        : [],
    },
  };
}

/**
 * Render the Privacy Policy page using SliceZone.
 */
export default async function PrivacyPolicyPage() {
  const client = createClient();
  
  // Fetch the Privacy Policy document using its UID
  const privacyPolicy = await client.getByUID("privacypolicy", "privacy-policy"); 

  return (
    <div>
      <SliceZone slices={privacyPolicy.data.slices} components={components} />
    </div>
  );
}
