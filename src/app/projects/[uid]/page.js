import { notFound } from "next/navigation";
import { Layout } from "@/components/Layout";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { PrismicText, SliceZone } from "@prismicio/react";
import SliderComponent from "@/components/SliderComponent";

export default async function Page({ params }) {
  const client = createClient();
  const navigation = await client.getSingle("navigation");
  const settings = await client.getSingle("settings");
  const page = await client
    .getByUID("project", params.uid)
    .catch(() => notFound());

  return (
    <Layout
      withHeaderDivider={false}
      navigation={navigation}
      settings={settings}
    >
      <div className="bg-gray-300 dark:bg-gray-900">
        <div className="container pt-20">
          <div className="row">
            <div className="col-12 p-14 border-2 text-center text-black dark:text-white border-black dark:border-yellow-500">
              <div className="row justify-center">
                <div className="md:col-9">
                  <h1 className="text-6xl">
                    <PrismicText field={page.data.title} />
                  </h1>
                  <p className="text-3xl mt-5">
                    <SliceZone
                      slices={page.data.slices}
                      components={components}
                    />
                  </p>
                </div>
              </div>
              <div className="row mt-10 justify-center">
                <div className="md:col-8">
                  <SliderComponent images={page.data.slider}/>
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
  const client = createClient();
  const page = await client
    .getByUID("project", params.uid)
    .catch(() => notFound());

  return {
    title: page.data.meta_title + " - Enis Miftari",
    description: page.data.meta_description,
  };
}

export async function generateStaticParams() {
  const client = createClient();
  const pages = await client.getAllByType("project");

  return pages.map((page) => {
    return { uid: page.uid };
  });
}
