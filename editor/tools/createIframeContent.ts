export const createIframeContent = (css: string, html: string) => {
  return `
  <html lang="en">
  <head>
    <title>Codetree </title>
    <style>
      ${css}
    </style>
  </head>
  <body>
   <div id="root">
    ${html}
   </div>
    <script>
      //====== send massage to iframe
      window.onerror = function (err) {
        window.parent.postMessage(
          { source: "iframe", type: "iframe_error", message: err },
          "*"
        );
      };

      window.onunhandledrejection = function (err) {
        window.parent.postMessage(
          { source: "iframe", type: "iframe_error", message: err.reason },
          "*"
        );
      };

      //====== listen to income message of parent
      window.onmessage = function (event) {
        try {
          eval(event.data);
        } catch (error) {
          throw error;
        }
      };
    </script>
  </body>
</html>
  `;
};
