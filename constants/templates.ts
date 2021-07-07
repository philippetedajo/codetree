export const treeTemplates = {
  _empty: {
    name: "Empty",
    description: "By codetree",
    public: true,
    iconSrc: "/icons/vanilla.svg",
    languages: {
      javascript: {
        data: ``,
        transformer: "javascript",
      },
      css: {
        data: ``,
        transformer: "css",
      },
      html: {
        data: ``,
        transformer: "html",
      },
    },
  },
  _vanilla: {
    name: "Vanilla",
    description: "By codetree",
    public: true,
    iconSrc: "/icons/vanilla.svg",
    languages: {
      javascript: {
        data: `import gsap from "gsap"

var tl = gsap.timeline({ repeat: -1 });
tl.to("h1", 30, { backgroundPosition: "-960px 0" });
`,
        transformer: "js",
      },
      html: {
        data: `<div class="wrapper">
  <h1 class="title">Codetree<h1>
</div> `,
        transformer: "html",
      },
        css: {
        data: `body {
  background-color: #1d1d1d;
  margin: 0;
  padding: 0;
}

.wrapper {
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
}

h1 {
  max-width: 75%;
  font-size: 100px;
  text-align: center;
  font-family: "Montserrat", sans-serif;
  color: #540032;
}

.title {
  background-image: url(https://cdn.pixabay.com/photo/2017/07/03/20/17/abstract-2468874_960_720.jpg);
  background-attachment: fixed;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
}`,
        transformer: "css",
      },
    },
  },
  _p5: {
    name: "P5js",
    description: "By codetree",
    public: true,
    iconSrc: "/icons/p5-dot-js.svg",
    languages: {
      javascript: {
        data: `import p5 from "p5";

let sketch = function (p) {
  p.setup = function () {
    p.createCanvas(window.innerWidth, window.innerHeight);
    p.background(0);
  };
  p.draw = () => {
    // sketch.background(100);
    p.fill(255);
    p.ellipse(p.mouseX, p.mouseY, 50, 50);
  };
};
 
new p5(sketch, window.document.getElementById("container"));
`,
        transformer: "javascript",
      },
      css: {
        data: `body {
  margin: 0px;
  font-family: sans-serif;
}
canvas {
  margin: 0px;
}
`,
        transformer: "css",
      },
      html: {
        data: ``,
        transformer: "html",
      },
    },
  },
  _react: {
    name: "React",
    description: "By codetree",
    public: true,
    iconSrc: "/icons/reactjs.svg",
    languages: {
      javascript: {
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
        transformer: "javascript",
      },
      css: {
        data: `.App {
  font-family: sans-serif;
  text-align: center;
}
`,
        transformer: "css",
      },
      html: {
        data: ``,
        transformer: "html",
      },
    },
  },
};
