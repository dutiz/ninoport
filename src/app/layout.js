import "../styles/globals.css";

import { Poppins } from "next/font/google";

import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import Providers from "@/components/Providers";

const poppins = Poppins({
  weight: ["500", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export default function RootLayout({ children }) {
  return (
      <html lang="en" className={`${poppins.variable} font-sans`}>
        <body className="overflow-x-hidden antialiased">
          <main>
            <Providers>

              {children}
              <PrismicPreview repositoryName={repositoryName} />
            </Providers>
          </main>
        </body>
      </html>
   );
}
