import * as esbuild from "esbuild-wasm";

export const unpkgPathPlugin = (entryPoint: string) => {
  return {
    name: "unpkg-path-plugin",
    setup(build: esbuild.PluginBuild) {
      //match entrypoint
      if (entryPoint === "index.ts") {
        build.onResolve({ filter: /(^index\.ts$)/ }, () => {
          return { path: "index.ts", namespace: "a" };
        });
      } else {
        build.onResolve({ filter: /(^index\.js$)/ }, () => {
          return { path: "index.js", namespace: "a" };
        });
      }

      //match relative path in a module "./" or "../"
      build.onResolve({ filter: /^\.+\// }, (args: esbuild.OnResolveArgs) => {
        return {
          namespace: "a",
          path: new URL(args.path, `https://unpkg.com${args.resolveDir}/`).href,
        };
      });

      //match main file in a module
      build.onResolve({ filter: /.*/ }, async (args: esbuild.OnResolveArgs) => {
        return {
          namespace: "a",
          path: `https://unpkg.com/${args.path}`,
        };
      });
    },
  };
};
