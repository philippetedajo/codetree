import { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import * as esbuild from "esbuild-wasm";
import { unpkgPathPlugin } from "./plugins/unpkg-path-plugin";
import { unpkgFetchPlugin } from "./plugins/unpkg-fecth-plugin";

const App = () => {
  const esbuildServiceRef = useRef<esbuild.Service>();
  const iframe = useRef<any>();
  const [codeInputArea, setCodeInputArea] = useState("");

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
            const root = document.querySelector("#root");
            root.innerHTML = "<div>" + error + "</div>";
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
    <div>
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
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
