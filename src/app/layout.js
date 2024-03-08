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
    <html lang="en">
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#5bbad5"
      />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff"></meta>
      <body
        className={`${poppins.className} font-sans overflow-x-hidden antialiased`}
      >
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
