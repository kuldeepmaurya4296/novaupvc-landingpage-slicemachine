import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";

import '../app.css'; // Ensure global styles are imported

/**
 * Fetch and generate metadata for the Doors page.
 */
export async function generateMetadata() {
  const client = createClient();
  const doors = await client.getByUID("doors", "doors"); // Fetch the document by UID

  return {
    title: doors.data.meta_title || "Doors",
    description: doors.data.meta_description || "",
    openGraph: {
      title: doors.data.meta_title || "Doors",
      description: doors.data.meta_description || "",
      images: doors.data.meta_image ? [{ url: doors.data.meta_image.url }] : [],
    },
  };
}

/**
 * Render the Doors page using SliceZone.
 */
export default async function DoorsPage() {
  const client = createClient();
  const doors = await client.getByUID("doors", "doors"); // Fetch the document by UID

  return (
    <div>
      <SliceZone slices={doors.data.slices} components={components} />
    </div>
  );
}
