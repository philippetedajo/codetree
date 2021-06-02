export const _react = {
  name: "",
  description: "",
  template: "react",
  public: true,
  languages: {
    js: {
      code: {
        data: `import React, { useState } from "react";
import ReactDOM from "react-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Hello ReactTree</h1>
      <h2>You clicked {count} times!</h2>

      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
`,
        error: "",
        loading: false,
      },
      transformer: "js",
    },
    css: {
      code: {
        data: `.App {
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
