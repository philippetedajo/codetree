import * as esbuild from "esbuild-wasm";
import axios from "axios";

export const unpkgPathPlugin = () => {
  return {
    name: "unpkg-path-plugin",
    setup(build: esbuild.PluginBuild) {
      //search the file
      build.onResolve({ filter: /.*/ }, async (args: any) => {
        console.log("onResolve", args);

        if (args.path === "index.js") {
          return { path: args.path, namespace: "a" };
        }

        return {
          namespace: "a",
          path: `https://unpkg.com/${args.path}@1.0.0/index.js`,
        };

        // else {
        //   return {
        //     path: "https://unpkg.com/tiny-test-pkg@1.0.0/index.js",
        //     namespace: "a",
        //   };
        // }
      });

      //load the found file
      build.onLoad({ filter: /.*/ }, async (args: any) => {
        console.log("onLoad", args);

        if (args.path === "index.js") {
          return {
            loader: "jsx",
            contents: `
              const messag = require('tiny-test-pkg');
              console.log(message);
            `,
          };
        }

        const { data } = await axios.get(args.path);

        return {
          loader: "jsx",
          contents: data,
        };
      });
    },
  };
};
