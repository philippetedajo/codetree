import React, { useEffect } from "react";
import { EditorHead, EditorFooter } from "../editor/ui/layouts";
import { SettingsModal } from "../editor/ui/Modals";
import { compiler_state, initEsbuild } from "../store/features/compilerSlice";
import { useAppDispatch, useAppSelector } from "../store/hook";
import { TemplateModal } from "../editor/ui/Modals/TemplateModal";

import EditorInput from "../editor/ui/EditorInput";
import ConsoleLog from "../editor/ui/ConsoleLog";
import Iframe from "../editor/ui/Iframe";
import { editor_state } from "../store/features/editorSlice";
import dynamic from "next/dynamic";

const EditorPanel = dynamic(() => import("../editor/ui/layouts/EditorPanel"), {
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
    <>
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
    </>
  );
};

export default Playground;
