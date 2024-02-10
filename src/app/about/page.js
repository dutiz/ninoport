import SVG from "react-inlinesvg";

import { Layout } from "@/components/Layout";
import { createClient } from "@/prismicio";
import AboutPageImage from "@/components/AboutPageImage";
import AboutPageText from "@/components/AboutPageText";

export default async function About() {
    const client = createClient();
    const navigation = await client.getSingle("navigation");
    const settings = await client.getSingle("settings");

  return (
    <Layout
      withHeaderDivider={false}
      navigation={navigation}
      settings={settings}
    >
    <div className="bg-gray-300 dark:bg-gray-900">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h1 className="my-20 inline-block px-14 py-2 text-black dark:text-white text-4xl border border-yellow-500 rounded-2xl">
              Experience
            </h1>
          </div>
          <div className="row justify-center my-10">
            <AboutPageImage/>
            <AboutPageText/>
          </div>
          <div className="row justify-center">
            <div className="col-10">
              <div className="flex flex-col items-center justify-between px-6 py-4 bg-transparent rounded-xl lg:flex-row">
                <div className="flex flex-col mb-8 text-center lg:mb-0 last:mb-0">
                  <SVG src="/svg/figma-svg.svg" />
                </div>
                <div className="flex flex-col mb-8 text-center lg:mb-1 last:mb-1">
                  <SVG src="/svg/react-svg.svg" />
                </div>
                <div className="flex flex-col mb-8 text-center lg:mb-1 last:mb-1">
                  <SVG src="/svg/ae-svg.svg" />
                </div>
                <div className="flex flex-col mb-8 text-center lg:mb-1 last:mb-1">
                  <SVG src="/svg/js-svg.svg" />
                </div>
                <div className="flex flex-col mb-8 text-center lg:mb-1 last:mb-1">
                  <SVG src="/svg/technology-1.svg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Layout>
  );
}

export async function generateMetadata({ params }) {
  return {
    title: "About - Enis Miftari",
  };
}