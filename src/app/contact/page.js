import React from 'react'
import SVG from "react-inlinesvg"

import { Layout } from '@/components/Layout'
import { createClient } from "@/prismicio";
import ContactForm from '@/components/ContactForm';

export default async function Contact() {
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
        <div className="container pt-20">
          <div className="row md:p-0 p-5">
            <div className="col-12 md:p-20 p-10 border-2 border-black dark:border-yellow-500 rounded-3xl">
              <div className="row">
                <div className="md:col-6">
                  <h1 className="text-gray-700 dark:text-white text-4xl font-semibold">
                    Want to collaborate?
                  </h1>
                  <p className="mt-5 text-black dark:text-white text-xl font-semibold">
                    Fill the form and i will get to you as soon as possible
                  </p>
                  <div className="mt-20 flex flex-col space-y-16">
                    <div className="inline-flex items-center">
                      <SVG
                        src="/svg/phone.svg"
                        className="w-14 h-14 fill-current text-black dark:text-yellow-500"
                      />
                      <p className="ml-5 text-black dark:text-yellow-500 md:text-2xl text-base font-semibold">
                        +491783330572
                      </p>
                    </div>
                    <div className="inline-flex items-center">
                      <SVG
                        src="/svg/email.svg"
                        className="w-14 h-14 fill-current stroke-black dark:text-yellow-500"
                      />
                      <p className="ml-5 dark:text-yellow-500 md:text-2xl text-base font-semibold">
                        miftariienis@gmail.com
                      </p>
                    </div>
                    <div className="inline-flex items-center">
                      <SVG
                        src="/svg/map.svg"
                        className="w-14 h-14 stroke-black dark:stroke-yellow-500"
                      />
                      <p className="ml-5 text-black  dark:text-yellow-500 md:text-2xl text-base font-semibold">
                        Hamburg, Germany
                      </p>
                    </div>
                  </div>
                </div>
                <ContactForm/>
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
    title: "Contact - Enis Miftari",
  };
}