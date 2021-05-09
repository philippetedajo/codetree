import Head from "next/head";
import Footer from "../components/editor/Footer";
import Main from "../components/editor/Main";
import Header from "../components/editor/Header";
import React from "react";

const TreeEditor = () => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Codetree | Playground</title>
      </Head>
      <div className="min-h-screen flex flex-col bg-editor_secondary">
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  );
};

export default TreeEditor;
