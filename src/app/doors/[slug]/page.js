import { SliceZone } from "@prismicio/react";
import * as prismic from "@prismicio/client";

import { createClient } from "@/prismicio";
import { components } from "@/slices";

import "../../app.css"; // Ensure global styles are imported

// Create a single instance of the Prismic client
const client = createClient();

/**
 * Fetch and generate metadata for the Doors page.
 */
export async function generateMetadata() {
  const doors = await client.getByUID("indivisualproduct", "indivisualproduct"); // Ensure correct UID and type for "Doors"

  return {
    title: doors.data?.title ? prismic.asText(doors.data.title) : "Doors", // Update title to "Doors"
    description: doors.data?.meta_description || "",
    openGraph: {
      title: doors.data?.meta_title || "Doors", // Update title for OpenGraph
      images: doors.data?.meta_image ? [{ url: doors.data.meta_image.url }] : [],
    },
  };
}

/**
 * Render the Doors page using SliceZone.
 */
export default async function DoorsPage({ params }) {
  const { slug } = params;
  console.log('slug value for indivisual product door ----------', slug)
  try {
    const doors = await client.getByUID("indivisualproduct", slug); // Ensure correct UID and type

    return (
      <div>
        <SliceZone slices={doors.data?.slices || []} components={components} />
      </div>
    );
  } catch (error) {
    const client = createClient();
    const doors = await client.getByUID("doors", "doors"); // Fetch the document by UID

    return (
      <div>
        <SliceZone slices={doors.data.slices} components={components} />
      </div>
    );
  }
}
