export const _empty = {
  name: "",
  description: "",
  template: "empty",
  public: true,
  languages: {
    js: {
      code: {
        data: `document.getElementById("root").innerHTML = \`
<h1>Hello VanillaTree</h1>
<div>
  We use the same configuration as Esbuild to bundle this sandbox, you can find more
  info about Esbuild 
  <a href="https://esbuild.github.io/" target="_blank" rel="noopener noreferrer">here</a>.
</div>
\`;
`,
        error: "",
        loading: false,
      },
      transformer: "js",
    },
    css: {
      code: {
        data: `body {
  font-family: sans-serif;
  text-align: center;
}
`,
        error: "",
        loading: false,
      },
      transformer: "css",
    },
    html: {
      code: {
        data: `<div id="root"></div>`,
        error: "",
        loading: false,
      },
      transformer: "html",
    },
  },
};
