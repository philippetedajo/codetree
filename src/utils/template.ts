const playgroundTemplate = {
  javascript: {
    html: {
      lang: "html",
      content: `<div id="root"></div>`,
    },
    css: {
      lang: "css",
      content: `#root {
  font-family: sans-serif;
  text-align: center;
  padding-top: 35px;
}
      `,
    },
    javascript: {
      lang: "javascript",
      content: `document.getElementById("root").innerHTML =\`
<div>
  <h1>Hello World Vanilla Tree !</h1>
  <div>Start typing to see the magic</div>
</div> 
\`;`,
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
  padding-top: 35px;
}
      `,
    },
    javascript: {
      lang: "javascript",
      content: `import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Icon } from "@iconify/react";
import reactIcon from "@iconify-icons/logos/react";
      
function App() {
  const [count, setCount] = useState(0);
      
  return (
    <div className="App">
      <Icon icon={reactIcon} height={135} />
      <h1>Hello World React Tree</h1>
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
};

export default playgroundTemplate;
