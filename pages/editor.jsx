import Head from "next/head";
import dynamic from "next/dynamic";
import { useReducer, useState } from "react";
import { jsonReducer } from "../reducers/jsonReducer";
import NPMSearch from "../components/NPMSearch/NPMSearch";

const CodeEditor = dynamic(
  () => import("../components/CodeEditor/CodeEditor"),
  {
    ssr: false,
  }
);

const initial = {
  name: "my_package",
  description: "",
  version: "1.0.0",
  scripts: {
    test: 'echo "Error: no test specified" && exit 1',
  },
  keywords: [],
  author: "",
  license: "ISC",
};

export default function Editor() {
  const [state, dispatch] = useReducer(jsonReducer, initial);

  return (
    <div className="grid grid-cols-4 p-8 gap-10 justify-center min-h-screen w-full">
      <Head>
        <title>Packagr | Editor</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Lobster&family=Roboto:wght@300;400;700;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="mb-10 col-span-1">
        <h1 className="text-3xl lobster text-gradient">Packagr</h1>
        <p className=" text-gray-500 mt-2">
          Use this tool to generate your perfect package.json file!
        </p>

        <div className="mt-8">
          <NPMSearch state={state} dispatch={dispatch} />
        </div>
      </div>
      <div className="w-full col-span-3">
        <CodeEditor
          initial={JSON.stringify(state, null, 2)}
          value={JSON.stringify(state, null, 2)}
        />
      </div>
    </div>
  );
}
