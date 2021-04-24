import * as esbuild from "esbuild-wasm";
import { unpkgPathPlugin } from "./plugins/unpkg-path-plugin";
import { unpkgFetchPlugin } from "./plugins/unpkg-fecth-plugin";

let services: esbuild.Service;

const bundler = async (rawCode: string | undefined) => {
  if (!services) {
    services = await esbuild.startService({
      worker: true,
      wasmURL: "https://unpkg.com/esbuild-wasm@0.8.57/esbuild.wasm",
    });
  }

  try {
    const result = await services.build({
      entryPoints: ["index.js"],
      bundle: true,
      write: false,
      plugins: [unpkgPathPlugin(), unpkgFetchPlugin(rawCode)],
      define: {
        global: "window",
        "process.env.NODE_ENV": '"production"',
      },
    });
    console.log("Transpiling...");
    return {
      code: result.outputFiles[0].text,
      error: "",
    };
  } catch (err) {
    return {
      code: "",
      error: err.message,
    };
  }
};

export default bundler;
