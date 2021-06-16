import Head from "next/head";
import Link from "next/link";
import React from "react";
import styles from "../styles/index.module.css";
const index = () => {
  return (
    <div className="min-h-screen relative">
      <div className={styles.bg}></div>

      <Head>
        <title>Packagr</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lobster&family=Roboto:wght@300;400;700;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="flex flex-col items-center max-w-screen-md w-full m-auto py-20">
        <h1 className=" text-4xl lobster text-gradient text-center w-full">
          Packagr
        </h1>

        <h2 className="mt-20 flex flex-col items-center text-center">
          <span className="font-black text-6xl text-gray-800">
            The quickest way to create your
          </span>
          <span className="text-6xl text-red-400 font-black mt-2">
            Package.json
          </span>
        </h2>
        <p className="text-xl text-gray-600 mt-10 text-center">
          Use this tool to quickly modify and setup your package.json file for
          each of your projects
        </p>

        <div className="flex max-w-md w-full justify-center mt-16">
          <Link href="/editor">
            <p className="p-4 w-40 bg-red-400 text-center text-white font-bold rounded-lg shadow-lg">
              Go to Editor
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default index;
