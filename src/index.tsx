import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import bundler from "./bundler";
import CodeEditor from "./components/CodeEditor";
import Preview from "./components/Preview";
import "./style.css";

const App = () => {
  const [code, setCode] = useState<any>();
  const [codeInputArea, setCodeInputArea] = useState<string | undefined>("");

  const handleOnClick = async () => {
    const output = await bundler(codeInputArea);
    setCode(output);
  };

  return (
    <div className="container">
      <div className="editor">
        <CodeEditor
          initialValue="const a = 1"
          onChangeCodeInput={(value) => setCodeInputArea(value)}
        />
      </div>
      <div className="preview">
        <button onClick={handleOnClick}>Submit</button>
        <Preview code={code} />
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
