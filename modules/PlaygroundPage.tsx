import React, { useEffect } from "react";
import { EditorHead, EditorFooter } from "../ui/layouts";
import { SettingsModal } from "../ui/Modals";
import { compiler_state, initEsbuild } from "../store/features/compilerSlice";
import { useAppDispatch, useAppSelector } from "../store/hook";
import { TemplateModal } from "../ui/Modals/TemplateModal";

import EditorInput from "../ui/EditorInput";
import ConsoleLog from "../ui/ConsoleLog";
import Iframe from "../ui/Iframe";
import { editor_state } from "../store/features/editorSlice";
import dynamic from "next/dynamic";

const EditorPanel = dynamic(() => import("../ui/layouts/EditorPanel"), {
  ssr: false,
});

const PlaygroundPage = () => {
  const dispatch = useAppDispatch();

  const { esbuildStatus, isCompiling, output } = useAppSelector(compiler_state);
  const { logs, editorValue, isLogTabOpen } = useAppSelector(editor_state);

  useEffect(() => {
    if (!esbuildStatus.isReady) {
      dispatch(initEsbuild());
    }
  }, [dispatch, esbuildStatus]);

  return (
    <div className="h-screen flex flex-col overflow-hidden bg-tree-soft">
      <EditorHead />

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

      <EditorFooter isCompiling={isCompiling} logs={logs} />

      {/* ======================= Modal =================== */}
      <SettingsModal />
      <TemplateModal />
    </div>
  );
};

export default PlaygroundPage;
