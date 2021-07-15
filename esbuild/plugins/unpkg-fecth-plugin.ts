import * as esbuild from "esbuild-wasm";
import axios from "axios";
import localForage from "localforage";

const fileCache = localForage.createInstance({
  name: "fileCache",
});

export const unpkgFetchPlugin = (
  inputCode: string | undefined,
  entryPoint: string
) => {
  return {
    name: "unpkg-fetch-plugin",
    setup(build: esbuild.PluginBuild) {
      //match entrypoint
      if (entryPoint === "index.ts") {
        build.onLoad({ filter: /(^index\.ts$)/ }, () => {
          return {
            loader: "tsx",
            contents: inputCode,
          };
        });
      } else {
        build.onLoad({ filter: /(^index\.js$)/ }, () => {
          return {
            loader: "jsx",
            contents: inputCode,
          };
        });
      }

      build.onLoad({ filter: /.*/ }, async (args: esbuild.OnLoadArgs) => {
        const cacheResult = await fileCache.getItem<esbuild.OnLoadResult>(
          args.path
        );
        if (cacheResult) {
          return cacheResult;
        }
      });

      //match css file
      build.onLoad({ filter: /.css$/ }, async (args: esbuild.OnLoadArgs) => {
        const { data, request } = await axios.get(args.path);

        const escapedData = data
          .replace(/\n/g, "")
          .replace(/"/g, '\\"')
          .replace(/'/g, "\\'");

        const contents = `const style = document.createElement("style");
               style.innerText = '${escapedData}';
               document.head.appendChild(style);`;

        const result: esbuild.OnLoadResult = {
          loader: "jsx",
          contents,
          //specify the place where the content was found
          resolveDir: new URL("./", request.responseURL).pathname,
        };
        //store response in cache
        await fileCache.setItem(args.path, result);
        return result;
      });

      //=================================================

      build.onLoad({ filter: /.*/ }, async (args: esbuild.OnLoadArgs) => {
        console.log(`...fetching ${args.path}`);
        const { data, request } = await axios.get(args.path);

        const result: esbuild.OnLoadResult = {
          loader: "jsx",
          contents: data,
          //specify the place where the content was found
          resolveDir: new URL("./", request.responseURL).pathname,
        };
        //store response in cache
        await fileCache.setItem(args.path, result);
        console.log("end of fetching");
        return result;
      });
    },
  };
};
