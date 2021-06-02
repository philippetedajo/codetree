export const _p5 = {
  name: "",
  description: "",
  template: "p5",
  public: true,
  languages: {
    js: {
      code: {
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
        error: "",
        loading: false,
      },
      transformer: "js",
    },
    css: {
      code: {
        data: `body {
  margin: 0px;
  font-family: sans-serif;
}
canvas {
  margin: 0px;
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
