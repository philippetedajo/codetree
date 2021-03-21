import { useState } from "react";
import ReactDOM from "react-dom";
import { Helmet } from "react-helmet";
import bundler from "./bundler";
import CodeEditor from "./components/CodeEditor";
import EditorPreview from "./components/EditorPreview";
import EditorHeader from "./components/EditorHeader";
import SplitBox from "./components/SplitBox";

import "./editor.css";

const App = () => {
  const [code, setCode] = useState<any>();
  const [codeInputArea, setCodeInputArea] = useState<string | undefined>("");

  const handleOnClick = async () => {
    const output = await bundler(codeInputArea);
    setCode(output);
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>tinyCode</title>
        <link rel="canonical" href="https://tiny-code.vercel.app/" />
      </Helmet>
      <div className="editor-container">
        <EditorHeader />
        {/* <button onClick={handleOnClick}>Submit</button> */}
        <main>
          <SplitBox direction="horizontal">
            <CodeEditor
              initialValue=""
              onChangeCodeInput={(value) => setCodeInputArea(value)}
            />
            <EditorPreview code={code} />
          </SplitBox>
        </main>
      </div>
    </>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
