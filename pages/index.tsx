import Head from "next/head";
import React from "react";
import { withSession } from "../utils";
import dynamic from "next/dynamic";

const Playground = ({ inSession }) => {
  const Tree = dynamic(() => import("../components/editor/Tree"), {
    ssr: false,
  });

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
