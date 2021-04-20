import { Pans } from "../../_types";

export const reactTemplate: Pans = {
  js: {
    code: {
      data: "",
      error: "",
      loading: false,
    },
    transformer: "js",
  },
  css: {
    code: {
      data: "body{background: green }",
      error: "",
      loading: false,
    },
    transformer: "css",
  },
  html: {
    code: {
      data: `<div id="root">
  <h2>React</h2>
</div>
`,
      error: "",
      loading: false,
    },
    transformer: "html",
  },
};
