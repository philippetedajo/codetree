import React, { useRef, useEffect } from "react";
import { Resizable } from "re-resizable";
import { useAppDispatch, useAppSelector } from "../store/hook";
import { add_log, clear_log } from "../store/features/consoleSlice";
import { editor_state } from "../store/features/editorSlice";
import { log_state } from "../store/features/consoleSlice";

const Preview: React.FC = () => {
  const iframe = useRef<any>();
  const dispatch = useAppDispatch();
  const { js, html, css } = useAppSelector(editor_state);
  const { isOpen, logs } = useAppSelector(log_state);

  // console.log(message);

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
      //====== send massage to iframe
      const _log = console.log;

      console.log = function (...rest) {
        let message = JSON.parse(JSON.stringify(rest))
        window.parent.postMessage(
          {
            source: "iframe",
            type: "iframe_console_log",
            message
          },
          "*"
        );
        _log.apply(console, arguments);
      };

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

  //====== listen to income message of iframe
  useEffect(() => {
    window.onmessage = function (response: MessageEvent) {
      if (response.data && response.data.source === "iframe") {
        console.log(response.data);
      }

      // if (response.data && response.data.type === "iframe-error") {
      //   dispatch(add_log({ message: response.data.message }));
      // }
    };
  }, [dispatch]);

  //====== send massage to iframe
  useEffect(() => {
    if (!js.code.loading) {
      iframe.current.srcdoc = htmlFrameContent;

      setTimeout(() => {
        iframe.current.contentWindow.postMessage(js.code.data, "*");
      }, 50);
    }
  }, [js.code, htmlFrameContent]);

  const clearConsole = () => {
    dispatch(clear_log());
  };

  return (
    <div className="preview-wrapper">
      <iframe
        className={`${js.code.loading ? "opacity-20" : ""}`}
        frameBorder="0"
        ref={iframe}
        title="previewWindow"
        sandbox="allow-scripts allow-modals"
        srcDoc={htmlFrameContent}
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
        <button onClick={clearConsole}>Clear</button>
      </Resizable>
    </div>
  );
};

export default Preview;
