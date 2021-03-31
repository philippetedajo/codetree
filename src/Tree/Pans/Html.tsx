import React from "react";
import CodeEditor from "../../components/CodeEditor";

export const HtmlTab = () => {
  return <div>Html</div>;
};

export const HtmlPanel = () => {
  return (
    <CodeEditor
      initialValue=""
      language="html"
      onChangeCodeInput={(value) => console.log(value)}
    />
  );
};
