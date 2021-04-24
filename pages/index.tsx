import React from "react";
import Head from "next/head";
import Navbar from "../components/pages-components/Navbar";

const Index = () => {
  return (
    <div>
      <Head>
        <title>Codetree</title>
        <meta
          name="description"
          content="Lightning fast online code playground with automatic npm module detection, built on top of Esbuild"
        />
      </Head>
      <Navbar />
      Home
    </div>
  );
};

export default Index;
