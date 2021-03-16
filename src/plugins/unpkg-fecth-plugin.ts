import * as esbuild from "esbuild-wasm";
import axios from "axios";
import localForage from "localforage";

const fileCache = localForage.createInstance({
  name: "filecache",
});

export const unpkgFetchPlugin = (inputCode: string) => {
  return {
    name: "unpkg-fecth-plugin",
    setup(build: esbuild.PluginBuild) {
      build.onLoad({ filter: /.*/ }, async (args: any) => {
        console.log("onLoad", args);

        if (args.path === "index.js") {
          return {
            loader: "jsx",
            contents: inputCode,
          };
        }

        //check if file is has already been fetched and cached
        const cacheResult = await fileCache.getItem<esbuild.OnLoadResult>(
          args.path
        );

        // if yes
        if (cacheResult) {
          return cacheResult;
        }

        //if not
        const { data, request } = await axios.get(args.path);

        const result: esbuild.OnLoadResult = {
          loader: "jsx",
          contents: data,
          //specify the place where the content was found
          resolveDir: new URL("./", request.responseURL).pathname,
        };
        //store response in cache
        await fileCache.setItem(args.path, result);
        return result;
      });
    },
  };
};
