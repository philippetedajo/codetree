export const treeTemplates = {
  _empty: {
    name: "Empty",
    description: "By codetree",
    public: true,
    iconSrc: "/icons/vanilla.svg",
    tabs: {
      javascript: {
        title: "Js/Jsx",
        monacoLanguage: "javascript",
        data: ``,
      },
      css: {
        title: "Css",
        monacoLanguage: "css",
        data: ``,
      },
      html: {
        title: "Html",
        monacoLanguage: "html",
        data: ``,
      },
    },
  },
  _react: {
    name: "React",
    description: "By codetree",
    public: true,
    iconSrc: "/icons/reactjs.svg",
    tabs: {
      javascript: {
        title: "Js/Jsx",
        monacoLanguage: "javascript",
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
      },
      css: {
        title: "Css",
        monacoLanguage: "css",
        data: `.App {
  font-family: sans-serif;
  text-align: center;
}
`,
      },
      html: {
        title: "Html",
        monacoLanguage: "html",
        data: ``,
      },
    },
  },
};
