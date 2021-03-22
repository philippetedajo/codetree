import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Helmet } from "react-helmet";
import bundler from "./bundler";
import { reactTemplate, vanillaTemplate } from "./constants";
import CodeEditor from "./components/CodeEditor";
import EditorPreview from "./components/EditorPreview";
import EditorHeader from "./components/EditorHeader";
import EditorFooter from "./components/EditorFooter";
import SplitBox from "./components/SplitBox";

import "./editor.css";

const App = () => {
  const [jsInput, setJsInput] = useState<string | undefined>("");
  const [jsCode, setJsCode] = useState<string | undefined>("");

  const [htmlInput, setHmlInput] = useState<string | undefined>("");
  const [htmlCode, setHtmlCode] = useState<string | undefined>("");

  const [cssInput, setCssInput] = useState<string | undefined>("");
  const [cssCode, setCssCode] = useState<string | undefined>("");

  const [error, setError] = useState("");
  const [isBundling, setIsBundling] = useState<boolean>(false);

  useEffect(() => {
    const timerJs = setTimeout(async () => {
      setIsBundling(true);
      const output = await bundler(jsInput);
      setJsCode(output.code);
      setError(output.error);
      setIsBundling(false);
    }, 1000);

    const TimerHtml = setTimeout(() => {
      setHtmlCode(htmlInput);
    }, 1000);

    const TimerCss = setTimeout(() => {
      setHtmlCode(htmlInput);
    }, 1000);

    return () => {
      clearTimeout(timerJs);
      clearTimeout(TimerHtml);
      clearTimeout(TimerCss);
    };
  }, [jsInput, htmlInput]);

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
                initialValue=""
                language="html"
                onChangeCodeInput={(value) => setHmlInput(value)}
              />
              <CodeEditor
                initialValue=""
                language="css"
                onChangeCodeInput={(value) => setCssCode(value)}
              />
              <CodeEditor
                initialValue=""
                language="javascript"
                onChangeCodeInput={(value) => setJsInput(value)}
              />
            </SplitBox>
            <EditorPreview
              rawJs={jsCode}
              rawHtml={htmlCode}
              rawCss={cssCode}
              message={error}
            />
          </SplitBox>
        </main>
        <EditorFooter isBundling={isBundling} />
      </div>
    </>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
