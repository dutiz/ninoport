import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { Layout } from '@/components/Layout';
import { createClient } from "@/prismicio";

export default async function Success() {
    const client = createClient();
    const navigation = await client.getSingle("navigation");
    const settings = await client.getSingle("settings");
  return (
    <Layout       
        withHeaderDivider={false}
      navigation={navigation}
      settings={settings}
    >
    <div className='bg-gray-300 dark:bg-gray-900'>
    <div className="container">
      <div className="row h-screen text-center items-center">
        <div className="col-12 my-10">
          <Image
            src="/img/tick-img.png"
            width={300}
            height={300}
            alt="tick-image"
            className="mx-auto"
          />
          <h1 className="mt-7 text-5xl text-black dark:text-white font-bold">
            Form successfully submitted!
          </h1>
          <Link href="/" className="uppercase inline-block bg-yellow-500 text-black px-10 py-5 mt-7">
            Back to home
          </Link>
        </div>
      </div>
    </div>
    </div>
    </Layout>
  );
}

export async function generateMetadata({ params }) {
  return {
    title: "Success - Enis Miftari",
  };
}