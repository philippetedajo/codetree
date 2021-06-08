import Head from "next/head";
import Tree from "../components/editor/Tree";
import React from "react";
import { withSession } from "../utils";

const Playground = ({ inSession }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Playground | Codetree </title>
      </Head>
      <Tree inSession={inSession} />
    </>
  );
};

export default Playground;

export const getServerSideProps = withSession(async ({ req, res }) => {
  const user = req.session.get("user");

  if (user) {
    return {
      props: {
        inSession: true,
      },
    };
  }

  return {
    props: {
      inSession: false,
    },
  };
});
