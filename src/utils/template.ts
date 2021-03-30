const template = {
  html: `<div id="root"></div>`,

  css: `#root {
  font-family: sans-serif;
  text-align: center;
  padding-top: 35px;
}`,

  javascript: `document.getElementById("root").innerHTML =\`
<div>
  <h1>Hello World Vanilla Tree !</h1>
  <div>Start typing to see the magic</div>
</div> 
\`;`,
};

export default template;
