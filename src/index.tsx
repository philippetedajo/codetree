import { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import * as esbuild from "esbuild-wasm";
import { unpkgPathPlugin } from "./plugins/unpkg-path-plugin";
import { unpkgFetchPlugin } from "./plugins/unpkg-fecth-plugin";
import CodeEditor from "./components/code-editor";
import "./style.css";

const App = () => {
  const esbuildServiceRef = useRef<esbuild.Service>();
  const iframe = useRef<any>();
  const [codeInputArea, setCodeInputArea] = useState<string | undefined>("");

  const htmlFrameContent = `
  <html>
  <head></head>
  <body>
    <div id="root"></div>
    <script>
      window.addEventListener(
        "message",
        (event) => {
          try {
            eval(event.data);
          } catch (error) {
            const root = document.getElementById("root");
            root.innerHTML = "<div style='color: red'>" + error + "</div>";
            throw error
          }
        },
        false
      );
    </script>
  </body>
</html>

  `;

  const initializeEsbuildService = async () => {
    esbuildServiceRef.current = await esbuild.startService({
      worker: true,
      wasmURL: "https://unpkg.com/esbuild-wasm@0.8.57/esbuild.wasm",
    });
  };

  useEffect(() => {
    initializeEsbuildService();
  }, []);

  const handleOnClick = async () => {
    if (!esbuildServiceRef.current) {
      return;
    }

    iframe.current.srcdoc = htmlFrameContent;

    const result = await esbuildServiceRef.current.build({
      entryPoints: ["index.js"],
      bundle: true,
      write: false,
      plugins: [unpkgPathPlugin(), unpkgFetchPlugin(codeInputArea)],
      define: {
        global: "window",
        "process.env.NODE_ENV": '"production"',
      },
    });

    iframe.current.contentWindow.postMessage(result.outputFiles[0].text, "*");
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
        <textarea
          onChange={(event) => setCodeInputArea(event.target.value)}
          value={codeInputArea}
          style={{ width: "400px", height: "200px" }}
        />
        <button onClick={handleOnClick}>Submit</button>
        <iframe
          ref={iframe}
          title="previewWindow"
          sandbox="allow-scripts"
          srcDoc={htmlFrameContent}
        />
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
