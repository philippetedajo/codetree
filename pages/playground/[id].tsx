import Head from "next/head";
import Main from "../../components/editor/Main";
import React from "react";
import { checkSession, withSession } from "../../utils";

const Playground = () => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Playground | Codetree </title>
      </Head>

      <Main />
    </>
  );
};

export default Playground;

export const getServerSideProps = withSession(async ({ req, res }) => {
  checkSession(req, res);

  return {
    props: {},
  };
});
