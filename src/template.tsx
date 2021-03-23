export const vanilla = {
  html: `<div>
  <h1>Hello World</h1>
</div>
`,
  js: `const root = document.querySelector("#root");
const h3 = document.createElement("h3");
h3.innerHTML = "Ready to use Vanilla Js template";
root.appendChild(h3);`,
  css: `h3{
    color:red
  }`,
};

export const react = {
  js: `import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = () => {
  const [count, setCount] = useState(0);

  const onClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>count: {count} </h1>
      <button onClick={onClick}>Add 1</button>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
`,
  css: `h1{color:red}`,
};
