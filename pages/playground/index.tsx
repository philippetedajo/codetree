import Head from "next/head";
import Tree from "../../components/editor/Tree";
import React from "react";
import {  useAppSelector } from "../../store/hook";
import { editor_state } from "../../store/features/editorSlice";

const Playground = () => {
  const {
    codeEditor: { js, html, css },
  } = useAppSelector(editor_state);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Playground | Codetree </title>
      </Head>
      <Tree jsBlock={js} cssBlock={css} htmlBlock={html} />
    </>
  );
};

export default Playground;
