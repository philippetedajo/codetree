import React from "react";
import { EditorHead, EditorFooter } from "../ui/layouts";
import { SettingsModal } from "../ui/Modals";
import { TemplateModal } from "../ui/Modals/TemplateModal";
import WebModule from "../modules/WebModule";

const Playground = () => {
  return (
    <div className="h-screen flex flex-col overflow-hidden bg-tree-soft">
      <EditorHead />
      <WebModule />
      <EditorFooter />
      <SettingsModal />
      <TemplateModal />
    </div>
  );
};

export default Playground;
