import React from "react";
import { EditorFooter, EditorHead, SplitEditor } from "../ui/layouts";

//Main components
import EditorInput from "../ui/EditorInput";
import ConsoleLog from "../ui/ConsoleLog";
import Iframe from "../ui/Iframe";
import { SettingsModal } from "../ui/Modals";
import { TemplateModal } from "../ui/Modals/TemplateModal";

const PlaygroundPage = () => {
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
