import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import { compiler_state, initEsbuild } from "../store/features/compilerSlice";
import { useAppDispatch, useAppSelector } from "../store/hook";

import ConsoleLog from "./ConsoleLog";
import Iframe from "./Iframe";
import { editor_state } from "../store/features/editorSlice";

import { InputCodeTab } from "./Tabs/InputCodeTab";
import { theme_state } from "../store/features/themeSlice";
import { Header } from "./Header";

const EditorPanel = dynamic(() => import("./MiddlePanel"), {
  ssr: false,
});

export const Playground = () => {
  const dispatch = useAppDispatch();

  const { theme } = useAppSelector(theme_state);
  const { esbuildStatus, isCompiling, output } = useAppSelector(compiler_state);
  const { panel, logs, editorValue, isLogTabOpen } =
    useAppSelector(editor_state);

  useEffect(() => {
    if (!esbuildStatus.isReady) {
      dispatch(initEsbuild());
    }
  }, [dispatch, esbuildStatus]);

  return (
    <div style={{ background: theme.background }}>
      <div style={{ height: "4rem" }}>
        <Header />
      </div>
      <div style={{ height: "calc(100vh - 6rem)" }}>
        <EditorPanel
          panelA={<InputCodeTab editorValue={editorValue} />}
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
      </div>
      <div style={{ height: "2rem" }}>footer</div>
    </div>
  );
};
