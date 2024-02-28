import { createClient } from "@/prismicio";
import { Layout } from "@/components/Layout";
import AboutSliderSection from "@/components/AboutSliderSection";
import ExperienceSection from "@/components/ExperienceSection";

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
            <ExperienceSection/>
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
