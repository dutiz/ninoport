import { createClient } from "@/prismicio";
import { Layout } from "@/components/Layout";

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
                    Lorem ipsum dolor sit amet consectetur. Semper nisl egestas
                    proin rhoncus sagittis aliquet tincidunt. Pharetra fusce
                    tristique morbi sed orci velit massa cursus. Suspendisse sed
                    morbi eget scelerisque leo ultricies a. Sed eros orci ac
                    accumsan viverra risus nulla. Vestibulum leo pharetra dui
                    ullamcorper vestibulum velit in eu. Et pellentesque morbi
                    amet
                  </p>
                </div>
              </div>
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
