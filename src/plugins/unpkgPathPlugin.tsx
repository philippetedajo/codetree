import * as esbuild from "esbuild-wasm";
import axios from "axios";

export const unpkgPathPlugin = () => {
  return {
    name: "unpkg-path-plugin",
    setup(build: esbuild.PluginBuild) {
      // intercept import paths, redirect them, and pass it to onLoad args
      build.onResolve({ filter: /.*/ }, async (args: any) => {
        console.log("onResolve", args);

        if (args.path === "index.js") {
          return { path: args.path, namespace: "a" };
        }

        if (args.path.includes("./") || args.path.includes("../")) {
          const newUrl = new URL(args.path, args.importer + "/").href;
          console.log(newUrl);
          return {
            namespace: "a",
            path: newUrl,
          };
        }

        return {
          namespace: "a",
          path: `https://unpkg.com/${args.path}`,
        };
      });

      //load the file content and search for require or import statement to pass to onResolve args
      build.onLoad({ filter: /.*/ }, async (args: any) => {
        console.log("onLoad", args);

        if (args.path === "index.js") {
          return {
            loader: "jsx",
            contents: `
              const message = require('medium-test-pkg');
              console.log(message);
            `,
          };
        }

        const { data } = await axios.get(args.path);
        console.log(data);
        return {
          loader: "jsx",
          contents: data,
        };
      });
    },
  };
};
