import Head from "next/head";
import Tree from "../components/editor/Tree";
import React from "react";
import { withSession } from "../utils";

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

export const getServerSideProps = withSession(async ({ req, res }) => {
  return {
    props: {},
  };
});
