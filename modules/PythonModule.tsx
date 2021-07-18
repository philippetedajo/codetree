import React from "react";
import { SplitEditor } from "../ui/layouts";

//Main components
import EditorInput from "../ui/EditorInput";

const WebModule = () => {
  return (
    <SplitEditor>
      <EditorInput />
      <div>Py Console</div>
    </SplitEditor>
  );
};

export default WebModule;
