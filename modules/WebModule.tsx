import React from "react";
import { SplitEditor } from "../ui/layouts";

//Main components
import EditorInput from "../ui/EditorInput";
import ConsoleLog from "../ui/ConsoleLog";
import Iframe from "../ui/Iframe";

const WebModule = () => {
  return (
    <SplitEditor>
      <EditorInput />
      <div>
        <SplitEditor isVertical={true}>
          <Iframe />
          <ConsoleLog />
        </SplitEditor>
      </div>
    </SplitEditor>
  );
};

export default WebModule;
