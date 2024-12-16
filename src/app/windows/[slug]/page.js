import { SliceZone } from "@prismicio/react";
import * as prismic from "@prismicio/client";

import { createClient } from "@/prismicio";
import { components } from "@/slices";

import '../../app.css'; // Ensure global styles are imported

/**
 * Fetch and generate metadata for the Windows page.
 */
export async function generateMetadata() {
  const client = createClient();
  const windows = await client.getByUID("windows", "windows"); // Fetch repeatable type by UID

  return {
    title: prismic.asText(windows.data.title) || "Windows",
    description: windows.data.meta_description || "",
    openGraph: {
      title: windows.data.meta_title || "Windows",
      images: windows.data.meta_image ? [{ url: windows.data.meta_image.url }] : [],
    },
  };
}

/**
 * Render the Windows page using SliceZone.
 */
export default async function WindowsPage() {
  const client = createClient();
  const windows = await client.getByUID("windows", "windows"); // Fetch repeatable type by UID

  return (
    <div>
      <SliceZone slices={windows.data.slices} components={components} />
    </div>
  );
}
