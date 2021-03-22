export const vanillaTemplate = `const root = document.querySelector("#root");
const h1 = document.createElement("h1")
h1.innerHTML = "hello world poeple"
root.appendChild(h1)
`;

export const reactTemplate = `import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = () => {
  const [count, setCount] = useState(0);

  const onClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <div>count: {count} </div>
      <button onClick={onClick}>Add 1</button>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
`;
