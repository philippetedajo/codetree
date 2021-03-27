const playgroundTemplate = {
  javascript: {
    html: {
      lang: "html",
      content: "<div class='foo'>hello Js</div>",
    },
    css: {
      lang: "css",
      content: ".foo{color:red}",
    },
    javascript: {
      lang: "javascript",
      content: "console.log('js')",
    },
  },
  react: {
    html: {
      lang: "html",
      content: `<div id="root"></div>`,
    },
    css: {
      lang: "css",
      content: `.App {
  font-family: sans-serif;
  text-align: center;
}
      `,
    },
    javascript: {
      lang: "javascript",
      content: `import React, { useState } from "react";
import ReactDOM from "react-dom";
      
function App() {
  const [count, setCount] = useState(0);
      
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
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
  },
  vue: {
    html: {
      lang: "html",
      content: "<div class='foo'>hello Vue</div>",
    },
    css: {
      lang: "css",
      content: ".foo{color:red}",
    },
    javascript: {
      lang: "javascript",
      content: "console.log('vue')",
    },
  },
};

export default playgroundTemplate;
