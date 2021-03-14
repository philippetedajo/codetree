import * as esbuild from "esbuild-wasm";
import axios from "axios";

export const unpkgPathPlugin = () => {
  return {
    name: "unpkg-path-plugin",
    setup(build: esbuild.PluginBuild) {
      // intercept import paths, redirect them, and pass it to onLoad as args
      build.onResolve({ filter: /.*/ }, async (args: any) => {
        console.log("onResolve", args);

        if (args.path === "index.js") {
          return { path: args.path, namespace: "a" };
        }

        if (args.path.includes("./") || args.path.includes("../")) {
          return {
            namespace: "a",
            path: new URL(args.path, `https://unpkg.com${args.resolveDir}/`)
              .href,
          };
        }

        return {
          namespace: "a",
          path: `https://unpkg.com/${args.path}`,
        };
      });

      //load the file content and search for require or import statement to pass to onResolve as args
      build.onLoad({ filter: /.*/ }, async (args: any) => {
        console.log("onLoad", args);

        if (args.path === "index.js") {
          return {
            loader: "jsx",
            contents: `
              import React, {useState} from "react";
              console.log(React, useState);
            `,
          };
        }

        const { data, request } = await axios.get(args.path);
        console.log(request.responseURL);
        return {
          loader: "jsx",
          contents: data,
          //specify the place where the content was found
          resolveDir: new URL("./", request.responseURL).pathname,
        };
      });
    },
  };
};
