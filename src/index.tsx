import { useState } from "react";
import ReactDOM from "react-dom";
import bundler from "./bundler";
import CodeEditor from "./components/CodeEditor";
import EditorPreview from "./components/EditorPreview";
import EditorHeader from "./components/EditorHeader";

import "./style.css";

const App = () => {
  const [code, setCode] = useState<any>();
  const [codeInputArea, setCodeInputArea] = useState<string | undefined>("");

  const handleOnClick = async () => {
    const output = await bundler(codeInputArea);
    setCode(output);
  };

  return (
    <div className="editor-container">
      <EditorHeader />
      <main className="editor-main">
        <div className="editor-zone">
          <CodeEditor
            initialValue=""
            onChangeCodeInput={(value) => setCodeInputArea(value)}
          />
        </div>
        <div className="preview">
          <button onClick={handleOnClick}>Submit</button>
          <EditorPreview code={code} />
        </div>
      </main>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
