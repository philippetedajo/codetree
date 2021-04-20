import { Pans } from "../../_types";

export const emptyTemplate = {
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
      data: "body{background: red }",
      error: "",
      loading: false,
    },
    transformer: "css",
  },
  html: {
    code: {
      data: `<div id="root">
  <h2>Start editing and watch the magic happen</h2>
</div>
`,
      error: "",
      loading: false,
    },
    transformer: "html",
  },
};
