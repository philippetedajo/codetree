import { useState } from "react";
import ReactDOM from "react-dom";
import { Helmet } from "react-helmet";
import { react, vanilla } from "./template";
import { useDebounce, useDebounceBundler } from "./hooks";
import CodeEditor from "./components/CodeEditor";
import EditorPreview from "./components/EditorPreview";
import EditorHeader from "./components/EditorHeader";
import EditorFooter from "./components/EditorFooter";
import SplitBox from "./components/SplitBox";

import "./editor.css";

const App = () => {
  const [jsInput, setJsInput] = useState<string | undefined>("");
  const [htmlInput, setHmlInput] = useState<string | undefined>("");
  const [cssInput, setCssInput] = useState<string | undefined>("");

  const debouncedHtml = useDebounce(htmlInput, 1000);
  const debouncedCss = useDebounce(cssInput, 1000);
  const debouncedJs = useDebounceBundler(jsInput, 1000);

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
            <SplitBox direction="vertical">
              <CodeEditor
                initialValue={vanilla.html}
                language="html"
                onChangeCodeInput={(value) => setHmlInput(value)}
              />
              <CodeEditor
                initialValue={vanilla.css}
                language="css"
                onChangeCodeInput={(value) => setCssInput(value)}
              />
              <CodeEditor
                initialValue={vanilla.js}
                language="javascript"
                onChangeCodeInput={(value) => setJsInput(value)}
              />
            </SplitBox>
            <EditorPreview
              rawJs={debouncedJs && debouncedJs.code}
              rawHtml={debouncedHtml}
              rawCss={debouncedCss}
              message={debouncedJs && debouncedJs.error}
            />
          </SplitBox>
        </main>
        <EditorFooter />
      </div>
    </>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
