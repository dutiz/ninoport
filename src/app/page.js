import * as prismic from "@prismicio/client";

import { createClient } from "@/prismicio";
import { Layout } from "@/components/Layout";
import { Bounded } from "@/components/Bounded";
import { Article } from "@/components/Article";
import { ProjectCard } from "@/components/ProjectCard";

export async function generateMetadata() {
  const client = createClient();
  const settings = await client.getSingle("settings");

  return {
    title: prismic.asText(settings.data.name),
  };
}

export default async function Index() {
  const client = createClient();

  const articles = await client.getAllByType("article", {
    orderings: [
      { field: "my.article.publishDate", direction: "desc" },
      { field: "document.first_publication_date", direction: "desc" },
    ],
  });
  const projects = await client.getAllByType("project", {
    orderings: [
      {field: "my.article.publishDate", direction: "desc"},
      {field: "document.first_publication_date", direction: "desc"},
    ],
  })
  const navigation = await client.getSingle("navigation");
  const settings = await client.getSingle("settings");
  return (
    <Layout
      withHeaderDivider={false}
      navigation={navigation}
      settings={settings}
    >
        <div className="bg-gray-300 dark:bg-gray-900">
          <div className="container py-20">
            <div className="row justify-center">
              <div className="lg:col-8">
                <div className="row justify-center">

                {projects.map((project)=> (
                      <ProjectCard project={project} key={project} />
                   ))}               
                </div>
              </div>
            </div>
          </div>
        </div>
    </Layout>
  );
}
