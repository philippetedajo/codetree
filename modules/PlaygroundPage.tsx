import React, { useEffect } from "react";
import { SplitEditor, EditorHead, EditorFooter } from "../ui/layouts";
import { SettingsModal } from "../ui/Modals";
import { compiler_state, initEsbuild } from "../store/features/compilerSlice";
import { useAppDispatch, useAppSelector } from "../store/hook";
import { TemplateModal } from "../ui/Modals/TemplateModal";

//Main components
import EditorInput from "../ui/EditorInput";
import ConsoleLog from "../ui/ConsoleLog";
import Iframe from "../ui/Iframe";

const PlaygroundPage = () => {
  const dispatch = useAppDispatch();
  const { esbuildStatus } = useAppSelector(compiler_state);

  useEffect(() => {
    if (!esbuildStatus.isReady) {
      dispatch(initEsbuild());
    }
  }, [dispatch, esbuildStatus]);

  return (
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
  );
};

export default PlaygroundPage;
