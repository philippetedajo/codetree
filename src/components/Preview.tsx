import React, { useRef, useEffect } from "react";
import { Resizable } from "re-resizable";
import { useAppDispatch, useAppSelector } from "../store/hook";
import { add_log } from "../store/features/consoleSlice";
import { editor_state } from "../store/features/editorSlice";
import { log_state } from "../store/features/consoleSlice";

const Preview: React.FC = () => {
  const iframe = useRef<any>();
  const dispatch = useAppDispatch();
  const { js, html, css } = useAppSelector(editor_state);
  const { isOpen, message } = useAppSelector(log_state);

  console.log(message);

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
      window.onerror = function (message) {
        window.parent.postMessage({ type: "iframe-error", message }, "*");
      };

      window.addEventListener("unhandledrejection", (err) => {
        window.parent.postMessage(
          { type: "iframe-error", message: err.reason.stack },
          "*"
        );
      });

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
    window.addEventListener("message", function (response) {
      if (response.data && response.data.type === "iframe-error") {
        dispatch(add_log({ message: response.data.message }));
      }
    });
  }, [dispatch]);

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
        onError={(e) => console.log("error")}
      />
      <Resizable
        minWidth="100%"
        minHeight="20vh"
        maxHeight="80vh"
        defaultSize={{ width: "100%", height: "30vh" }}
        className={`console_style ${isOpen ? "hidden" : "flex"} `}
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
