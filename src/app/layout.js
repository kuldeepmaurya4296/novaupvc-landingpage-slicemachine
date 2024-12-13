import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";

/**
 * PrismicPreview enables previews.
 */

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        {children}
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}
