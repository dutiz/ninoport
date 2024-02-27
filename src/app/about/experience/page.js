import { createClient } from "@/prismicio";
import { Layout } from "@/components/Layout";
import AboutSliderSection from "@/components/AboutSliderSection";

export default async function Experience() {
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
          <div className="row justify-center">
            <div className="col-10">
              <div className="row">
                <div className="lg:col-6 md:text-start text-center">
                  <h1 className="mt-20 inline-block px-14 py-2 text-black dark:text-white text-2xl md:text-4xl border border-yellow-500 rounded-2xl">
                    Lucky Media
                  </h1>
                </div>
                <div className="lg:col-6 md:text-end text-center">
                  <h1 className="my-20 minline-block px-14 py-2 text-black dark:text-white text-2xl md:text-4xl border border-yellow-500 rounded-2xl">
                    Bridge Technologies
                  </h1>
                </div>
              </div>
              <div className="row justify-center mt-20">
                <div className="col-10">
                  <p className="md:text-4xl text-2xl text-black dark:text-white">
                    LuckyMedia was one of the first internships that i made when i was studying.
                    In this company i started to learn Front End with the technologies:
                    HTML5, CSS3, Javascript.After learning these technologies i started to learn the frameworks 
                    ReactJS, NextJS and also TailwindCSS.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 mt-32">
                <AboutSliderSection />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );}

  export async function generateMetadata({ params }) {
    return {
      title: "Experience - Enis Miftari",
    };
  }
