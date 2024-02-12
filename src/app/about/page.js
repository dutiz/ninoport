import { Layout } from "@/components/Layout";
import { createClient } from "@/prismicio";
import AboutPageImage from "@/components/AboutPageImage";
import AboutPageText from "@/components/AboutPageText";
import AboutSliderSection from "@/components/AboutSliderSection";

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
            <div className="row justify-center items-center my-10">
              <AboutPageImage />
              <AboutPageText />
            </div>
            <AboutSliderSection />
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
