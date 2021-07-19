import React, { useEffect } from "react";
import Head from "next/head";
import { EditorFooter, EditorHead, SplitEditor } from "../ui/layouts";

//Main components
import EditorInput from "../ui/EditorInput";
import ConsoleLog from "../ui/ConsoleLog";
import Iframe from "../ui/Iframe";
import { SettingsModal } from "../ui/Modals";
import { TemplateModal } from "../ui/Modals/TemplateModal";
import { useAppDispatch, useAppSelector } from "../store/hook";
import { compiler_state, initEsbuild } from "../store/features/compilerSlice";

const PlaygroundPage = () => {
  const dispatch = useAppDispatch();
  const { esbuildStatus } = useAppSelector(compiler_state);

  // --- init Esbuild compiler
  useEffect(() => {
    if (!esbuildStatus.isReady) {
      dispatch(initEsbuild());
    }
  }, [dispatch, esbuildStatus]);

  return (
    <>
      <Head>
        <title>Codetree</title>
        <meta
          name="description"
          content="Lightning fast online code playground with automatic npm module detection, built on top of Esbuild "
        />
      </Head>
      <div className="h-screen flex flex-col overflow-hidden bg-tree-soft">
        <EditorHead />
        <SplitEditor>
          <EditorInput />
          <div>
            <SplitEditor isVertical={true}>
              <Iframe />
              <ConsoleLog />
            </SplitEditor>
          </div>
        </SplitEditor>
        <EditorFooter />
        <SettingsModal />
        <TemplateModal />
      </div>
    </>
  );
};

export default PlaygroundPage;
