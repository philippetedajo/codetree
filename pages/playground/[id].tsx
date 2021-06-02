import React from "react";
import Tree from "../../components/editor/Tree";
import Head from "next/head";

const Id = () => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Playground | Codetree </title>
      </Head>
      <Tree jsBlock={``} cssBlock={``} htmlBlock={``} />
    </>
  );
};

export default Id;
