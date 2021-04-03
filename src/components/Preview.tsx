import React, { useRef, useEffect } from "react";
import { useAppSelector } from "../store/hook";
import { editor_state } from "../store/features/editorSlice";

const Preview: React.FC = () => {
  const iframe = useRef<any>();
  const { js, html, css } = useAppSelector(editor_state);

  const htmlFrameContent = `
  <html lang="en">
  <head>
    <title>Codetree</title>
    <style>
      ${css.code.data}
    </style>
  </head>
  <body>
    <div id="root">${html.code.data}</div>
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
    if (!js.code.loading) {
      iframe.current.srcdoc = htmlFrameContent;

      setTimeout(() => {
        iframe.current.contentWindow.postMessage(js.code.data, "*");
      }, 50);
    }
  }, [js.code, htmlFrameContent]);

  return (
    <div className="preview-wrapper">
      <iframe
        className={`${js.code.loading ? "opacity-20" : ""}`}
        frameBorder="0"
        ref={iframe}
        title="previewWindow"
        sandbox="allow-scripts"
        srcDoc={htmlFrameContent}
      />
    </div>
  );
};

export default Preview;

/* <div className="_console">Console</div> */
/* {message && <div className="error-message">{message}</div>} */
