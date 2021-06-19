import Head from "next/head";
import dynamic from "next/dynamic";

const EditorComp = dynamic(() => import("../components/Editor/Editor"), {
  ssr: false,
});

export default function Editor() {
  return (
    <div>
      <Head>
        <title>Packagr | Editor</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Lobster&family=Roboto:wght@300;400;700;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <EditorComp />
    </div>
  );
}
