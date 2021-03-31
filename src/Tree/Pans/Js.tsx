import React from "react";
import CodeEditor from "../../components/CodeEditor";

export const JsTab = () => {
  return <div>Js</div>;
};

export const JsPanel = () => {
  return (
    <CodeEditor
      initialValue=""
      language="javascript"
      onChangeCodeInput={(value) => console.log(value)}
    />
  );
};
