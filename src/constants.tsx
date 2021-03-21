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
            root.innerHTML = "<div style='color: red'>" + error + "</div>";
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
root.innerHTML = "hello world";
`;
