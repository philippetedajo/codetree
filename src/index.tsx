import { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import * as esbuild from "esbuild-wasm";
import { unpkgPathPlugin } from "./plugins/unpkg-path-plugin";
import { unpkgFetchPlugin } from "./plugins/unpkg-fecth-plugin";

const App = () => {
  const esbuildServiceRef = useRef<esbuild.Service>();
  const [inputArea, setInputArea] = useState("");
  const [code, setCode] = useState("");

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
      plugins: [unpkgPathPlugin(), unpkgFetchPlugin(inputArea)],
      define: {
        global: "window",
        "process.env.NODE_ENV": '"production"',
      },
    });

    setCode(result.outputFiles[0].text);

    try {
      setTimeout(() => {
        eval(result.outputFiles[0].text);
      }, 1000);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <textarea
        onChange={(event) => setInputArea(event.target.value)}
        value={inputArea}
        style={{ width: "400px", height: "200px" }}
      />
      <button onClick={handleOnClick}>Submit</button>
      <pre> {code} </pre>
      <iframe title="frame" src="/test.html" />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
