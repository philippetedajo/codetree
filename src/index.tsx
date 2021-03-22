import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Helmet } from "react-helmet";
import bundler from "./bundler";
import CodeEditor from "./components/CodeEditor";
import EditorPreview from "./components/EditorPreview";
import EditorHeader from "./components/EditorHeader";
import EditorFooter from "./components/EditorFooter";
import SplitBox from "./components/SplitBox";

import "./editor.css";

const App = () => {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [isBundling, setIsBundling] = useState<boolean>(false);
  const [codeInputArea, setCodeInputArea] = useState<string | undefined>("");

  useEffect(() => {
    const timer = setTimeout(async () => {
      setIsBundling(true);
      const output = await bundler(codeInputArea);
      setCode(output.code);
      setError(output.error);
      setIsBundling(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [codeInputArea]);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>tinyCode</title>
        <link rel="canonical" href="https://tiny-code.vercel.app/" />
      </Helmet>
      <div className="editor-container">
        <EditorHeader />
        <main>
          <SplitBox direction="horizontal">
            <CodeEditor
              initialValue=""
              onChangeCodeInput={(value) => setCodeInputArea(value)}
            />
            <EditorPreview code={code} message={error} />
          </SplitBox>
        </main>
        <EditorFooter isBundling={isBundling} />
      </div>
    </>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
