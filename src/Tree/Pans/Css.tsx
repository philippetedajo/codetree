import React from "react";
import CodeEditor from "../../components/CodeEditor";

export const CssTab = () => {
  return <div>Css</div>;
};

export const CssPanel = () => {
  return (
    <CodeEditor
      initialValue=""
      language="css"
      onChangeCodeInput={(value) => console.log(value)}
    />
  );
};
