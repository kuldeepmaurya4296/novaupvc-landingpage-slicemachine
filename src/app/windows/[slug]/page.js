import { SliceZone } from "@prismicio/react";
import * as prismic from "@prismicio/client";
import { createClient } from "@/prismicio"; // Ensure createClient is correctly set up
import { components } from "@/slices"; // This should be an import from your slice components

import "../../app.css"; // Ensure global styles are imported

// Create a single instance of the Prismic client
const client = createClient();

/**
 * Fetch and generate metadata for the Windows page.
 */
export async function generateMetadata({ params }) {
  const { slug } = params;
  try {
    const windows = await client.getByUID("indivisualproduct", slug); // Ensure correct UID and type

    return {
      title: windows.data?.title ? prismic.asText(windows.data.title) : "Windows",
      description: windows.data?.meta_description || "",
      openGraph: {
        title: windows.data?.meta_title || "Windows",
        images: windows.data?.meta_image ? [{ url: windows.data.meta_image.url }] : [],
      },
    };
  } catch (error) {
    console.error("Error fetching metadata:", error);
    return {
      title: "Windows",
      description: "Explore our range of uPVC Windows.",
      openGraph: { title: "Windows", images: [] },
    };
  }
}

/**
 * Render the Windows page using SliceZone.
 */
export default async function WindowsPage({ params }) {
  const { slug } = params;
  console.log("slug value for individual product window ----------", slug);
  
  try {
    const windows = await client.getByUID("indivisualproduct", slug); // Fetch the individual product by UID

    return (
      <div>
        <SliceZone slices={windows.data?.slices || []} components={components} />
      </div>
    );
  } catch (error) {
    const client = createClient();
    const windows = await client.getByUID("windows", "windows"); // Fetch repeatable type by UID
  
    return (
      <div>
        <SliceZone slices={windows.data.slices} components={components} />
      </div>
    );
  }
}
