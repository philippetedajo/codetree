import Head from "next/head";
import Tree from "../../components/editor/Tree";
import React from "react";

const Playground = () => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Playground | Codetree </title>
      </Head>
      <Tree />
    </>
  );
};

export default Playground;
