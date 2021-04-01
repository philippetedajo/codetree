import React, { useRef, useEffect } from "react";
import { useSelector } from "react-redux";

const Preview: React.FC = () => {
  const iframe = useRef<any>();

  const data = useSelector((state) => state);

  console.log(data);

  const htmlFrameContent = `
  <html>
    <head>
      <style> 
        ${"rawCss"}
      </style>
    </head>
    <body>
        ${"rawHtml"}
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
      iframe.current.contentWindow.postMessage("rawJs", "*");
    }, 50);
  }, ["rawJs", htmlFrameContent]);

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

export default Preview;
