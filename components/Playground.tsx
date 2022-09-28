import React, { useEffect } from "react";
import { compiler_state, initEsbuild } from "../store/features/compilerSlice";
import { useAppDispatch, useAppSelector } from "../store/hook";

import EditorInput from "./EditorInput";
import ConsoleLog from "./ConsoleLog";
import Iframe from "./Iframe";
import { editor_state } from "../store/features/editorSlice";
import dynamic from "next/dynamic";

const EditorPanel = dynamic(() => import("./EditorPanel"), {
  ssr: false,
});

const Playground = () => {
  const dispatch = useAppDispatch();

  const { esbuildStatus, isCompiling, output } = useAppSelector(compiler_state);
  const { logs, editorValue, isLogTabOpen } = useAppSelector(editor_state);

  useEffect(() => {
    if (!esbuildStatus.isReady) {
      dispatch(initEsbuild());
    }
  }, [dispatch, esbuildStatus]);

  return (
    <EditorPanel
      panelA={<EditorInput editorValue={editorValue} />}
      panelB={
        <Iframe
          tabs={editorValue.tabs}
          output={output}
          isCompiling={isCompiling}
          esbuildStatus={esbuildStatus}
        />
      }
      panelC={<ConsoleLog logs={logs} />}
      lastPanelVisibility={isLogTabOpen}
    />
  );
};

export default Playground;
