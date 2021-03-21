export const htmlFrameContent = `
<html>
  <head>
    <style>
      body {
        background-color: #fff;
      }
    </style>
  </head>
  <body>
    <div id="root"></div>
    <script>
      window.addEventListener(
        "message",
        (event) => {
          try {
            eval(event.data);
          } catch (error) {
            const root = document.getElementById("root");
            root.innerHTML = "<div style='color: red'>" + "Runtime error: " + error + "</div>";
            throw error;
          }
        },
        false
      );
    </script>
  </body>
</html>
`;

export const vanillaTemplate = `const root = document.querySelector("#root");
const h1 = document.createElement("h1")
h1.innerHTML = "hello world poeple"
root.appendChild(h1)
`;
