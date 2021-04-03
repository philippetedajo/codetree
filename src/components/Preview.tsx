import React, { useRef, useEffect, useState } from "react";
import { Resizable } from "re-resizable";

import { useAppSelector } from "../store/hook";
import { editor_state } from "../store/features/editorSlice";

const Preview: React.FC = () => {
  const iframe = useRef<any>();
  const { js, html, css } = useAppSelector(editor_state);
  const [toggle, setToggle] = useState(false);
  const [logs, setLogs] = useState("");

  const htmlFrameContent = `
  <html lang="en">
  <head>
    <title>Codetree</title>
    <style>
      ${css.code.data}
    </style>
  </head>
  <body>
      ${html.code.data}
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

  const handleCloseConsole = () => {
    setToggle(!toggle);
  };

  return (
    <div className="preview-wrapper">
      <iframe
        className={`${js.code.loading ? "opacity-20" : ""}`}
        frameBorder="0"
        ref={iframe}
        title="previewWindow"
        sandbox="allow-scripts"
        srcDoc={htmlFrameContent}
        onError={(e) => console.log("error")}
      />
      <Resizable
        minWidth="100%"
        minHeight="20vh"
        maxHeight="80vh"
        defaultSize={{ width: "100%", height: "30vh" }}
        className={`console_style ${toggle ? "hidden" : "flex"} `}
        enable={{
          top: true,
          right: false,
          bottom: false,
          left: false,
          topRight: false,
          bottomRight: false,
          bottomLeft: false,
          topLeft: false,
        }}
      >
        hello
      </Resizable>
    </div>
  );
};

export default Preview;

/* {message && <div className="error-message">{message}</div>} */
