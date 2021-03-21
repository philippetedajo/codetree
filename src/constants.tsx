export const htmlFrameContent = `
<html>
<head></head>
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
          throw error
        }
      },
      false
    );
  </script>
</body>
</html>
`;
