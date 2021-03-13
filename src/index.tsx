import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import * as esbuild from "esbuild-wasm";
import { unpkgPathPlugin } from "./plugins/unpkgPathPlugin";

const App = () => {
  const esbuildServiceRef = useRef<any>();
  const [inputArea, setInputArea] = useState("");
  const [code, setCode] = useState("");

  const initializeEsbuildService = async () => {
    esbuildServiceRef.current = await esbuild.startService({
      worker: true,
      wasmURL: "/esbuild.wasm",
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
      plugins: [unpkgPathPlugin()],
    });

    setCode(result.outputFiles[0].text);
  };

  return (
    <div>
      <textarea
        onChange={(event) => setInputArea(event.target.value)}
        value={inputArea}
      />
      <button onClick={handleOnClick}>Submit</button>
      <pre> {code} </pre>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
