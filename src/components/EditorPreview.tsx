import React, { useRef, useEffect } from "react";

const EditorPreview: React.FC<any> = ({ rawJs, rawHtml, rawCss }) => {
  const iframe = useRef<any>();

  const htmlFrameContent = `
  <html>
    <head>
      <style>
        ${rawCss && rawCss.code}
      </style>
    </head>
    <body>
     ${rawHtml && rawHtml.code}
      <script>
        const handleError = (error) => {
          const root = document.getElementById("root");
          root.innerHTML =
            "<div style='color: red'>" + "Runtime error: " + error + "</div>";
          throw error;
        };
  
        window.addEventListener("error", (event) => {
          event.preventDefault();
          handleError(event.error);
        });
  
        window.addEventListener(
          "message",
          (event) => {
            try {
              eval(event.data);
            } catch (error) {
              handleError(error);
            }
          },
          false
        );
      </script>
    </body>
  </html>
  `;

  useEffect(() => {
    iframe.current.srcdoc = htmlFrameContent;

    setTimeout(() => {
      iframe.current.contentWindow.postMessage(rawJs && rawJs.code, "*");
    }, 50);
  }, [rawJs, htmlFrameContent]);

  return (
    <div className="preview-wrapper">
      <iframe
        className="preview-iframe"
        frameBorder="0"
        ref={iframe}
        title="previewWindow"
        sandbox="allow-scripts"
        srcDoc={htmlFrameContent}
      />

      {/* <div className="_console">Console</div> */}
      {/* {message && <div className="error-message">{message}</div>} */}
    </div>
  );
};

export default EditorPreview;
