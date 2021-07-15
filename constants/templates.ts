export const treeTemplates = {
  _empty: {
    name: "Empty",
    description: "By codetree",
    public: true,
    iconSrc: "/icons/vanilla.svg",
    tabs: {
      javascript: {
        title: "Js/Jsx",
        entryPoints: "index.js",
        monacoLanguage: "javascript",
        data: ``,
      },
      html: {
        title: "Html",
        entryPoints: "index.html",
        monacoLanguage: "html",
        data: ``,
      },
      css: {
        title: "Css",
        entryPoints: "main.css",
        monacoLanguage: "css",
        data: ``,
      },
    },
  },
  _vanilla: {
    name: "Vanilla",
    description: "By codetree",
    public: true,
    iconSrc: "/icons/vanilla.svg",
    tabs: {
      javascript: {
        title: "Js/Jsx",
        entryPoints: "index.js",
        monacoLanguage: "javascript",
        data: `document.getElementById("app").innerHTML = \`
<h1>Vanilla</h1>
<div>
  Bare minimal javascript template
</div>
\`;
`,
      },
      html: {
        title: "Html",
        entryPoints: "index.html",
        monacoLanguage: "html",
        data: `<div id="app"></div>`,
      },
      css: {
        title: "Css",
        entryPoints: "main.css",
        monacoLanguage: "css",
        data: `body {
  font-family: sans-serif;
}

#app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
`,
      },
    },
  },
  _typescript: {
    name: "Typescript",
    description: "By codetree",
    public: true,
    iconSrc: "/icons/typescript.svg",
    tabs: {
      javascript: {
        title: "Ts/Tsx",
        entryPoints: "index.ts",
        monacoLanguage: "typescript",
        data: `function add(x: number, y: number): number {
  return x + y;
}

const result = add(2,5)

console.log(result)`,
      },
      html: {
        title: "Html",
        entryPoints: "index.html",
        monacoLanguage: "html",
        data: `<div id="app">
  <h1>Typescript</h1>
  <div>Bare minimal Typescript template 🚀</div>
</div>
`,
      },
      css: {
        title: "Css",
        entryPoints: "main.css",
        monacoLanguage: "css",
        data: `body {
  font-family: sans-serif;
}

#app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
`,
      },
    },
  },
  _p5: {
    name: "P5js",
    description: "By codetree",
    public: true,
    iconSrc: "/icons/p5-dot-js.svg",
    tabs: {
      javascript: {
        title: "Js/Jsx",
        entryPoints: "index.js",
        monacoLanguage: "javascript",
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
      },
      html: {
        title: "Html",
        entryPoints: "index.html",
        monacoLanguage: "html",
        data: ``,
      },
      css: {
        title: "Css",
        entryPoints: "main.css",
        monacoLanguage: "css",
        data: `body {
  margin: 0px;
  font-family: sans-serif;
}
canvas {
  margin: 0px;
}
`,
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
        entryPoints: "index.js",
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
      html: {
        title: "Html",
        entryPoints: "index.html",
        monacoLanguage: "html",
        data: ``,
      },
      css: {
        title: "Css",
        entryPoints: "main.css",
        monacoLanguage: "css",
        data: `.App {
  font-family: sans-serif;
  text-align: center;
}
`,
      },
    },
  },
  _gsap: {
    name: "Gsap",
    description: "By codetree",
    public: true,
    iconSrc: "/icons/gsap-greensock.svg",
    tabs: {
      javascript: {
        title: "Js/Jsx",
        entryPoints: "index.js",
        monacoLanguage: "javascript",
        data: `import gsap from "gsap"

var tl = gsap.timeline({ repeat: -1 });
tl.to("h1", 30, { backgroundPosition: "-960px 0" });
`,
      },
      html: {
        title: "Html",
        entryPoints: "index.html",
        monacoLanguage: "html",
        data: `<div class="wrapper">
  <h1 class="title">Codetree<h1>
</div> `,
      },
      css: {
        title: "Css",
        entryPoints: "main.css",
        monacoLanguage: "css",
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
      },
    },
  },
};
