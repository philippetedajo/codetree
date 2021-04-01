import React, { useRef, useEffect } from "react";
import { useAppSelector } from "../store/hook";
import { editor_state } from "../store/features/editorSlice";

const Preview: React.FC = () => {
  const iframe = useRef<any>();
  const data = useAppSelector(editor_state);

  const htmlFrameContent = `
  <html>
  <head>
    <style>
      ${data.css.code}
    </style>
  </head>
  <body>
    <div id="root">${data.html.code}</div>
    <script>
      const handleError = (error) => {
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
      iframe.current.contentWindow.postMessage(data.js.code, "*");
    }, 50);
  }, [data.js.code, htmlFrameContent]);

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
