import Head from "next/head";
import Tree from "../../components/editor/Tree";
import React from "react";
import { useAppSelector } from "../../store/hook";
import { editor_state } from "../../store/features/editorSlice";

const Playground = () => {
  const {
    codeEditor: { languages },
  } = useAppSelector(editor_state);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Playground | Codetree </title>
      </Head>
      <Tree
        jsBlock={languages.js}
        cssBlock={languages.css}
        htmlBlock={languages.html}
      />
    </>
  );
};

export default Playground;
