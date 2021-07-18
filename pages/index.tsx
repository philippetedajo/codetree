import React from "react";
import { EditorHead, EditorFooter } from "../ui/layouts";
import { SettingsModal } from "../ui/Modals";
import { TemplateModal } from "../ui/Modals/TemplateModal";
import { useAppSelector } from "../store/hook";
import { EDITOR_TYPES } from "../_types/editorTypes";
import { editor_state } from "../store/features/editorSlice";
import WebModule from "../modules/WebModule";
import PythonModule from "../modules/PythonModule";

const Playground = () => {
  const { editorType } = useAppSelector(editor_state);

  let mod;

  switch (editorType) {
    case EDITOR_TYPES.WebEditor:
      mod = <WebModule />;
      break;
    case EDITOR_TYPES.PythonEditor:
      mod = <PythonModule />;
      break;
  }

  return (
    <div className="h-screen flex flex-col overflow-hidden bg-tree-soft">
      <EditorHead />
      {mod}
      <EditorFooter />
      <SettingsModal />
      <TemplateModal />
    </div>
  );
};

export default Playground;
