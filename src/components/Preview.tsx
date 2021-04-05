import React, { useRef, useEffect, useState } from "react";
import { Resizable } from "re-resizable";
import { Console, Hook, Unhook } from "console-feed";
import { useAppDispatch, useAppSelector } from "../store/hook";
import { editor_state } from "../store/features/editorSlice";

const Preview: React.FC = () => {
  const iframe = useRef<any>();
  const dispatch = useAppDispatch();
  const { js, html, css } = useAppSelector(editor_state);

  const [logs, setLogs] = useState([]);

  console.log(logs);

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
    console.log("clearLog");
  };

  let isOpen = false;

  return (
    <div className="preview-wrapper">
      <iframe
        className={`${js.code.loading ? "opacity-20" : ""}`}
        frameBorder="0"
        ref={iframe}
        title="previewWindow"
        // sandbox="allow-scripts allow-modals"
        srcDoc={htmlFrameContent}
        onLoad={() => {
          Hook(
            iframe.current.contentWindow.console,
            (log) => {
              setLogs((currLogs): any => [...currLogs, log]);
            },
            false
          );
        }}
      />
      <Resizable
        minWidth="100%"
        minHeight="20vh"
        maxHeight="80vh"
        defaultSize={{ width: "100%", height: "40vh" }}
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
        <Console
          styles={{
            BASE_FONT_FAMILY: '"Rubik", sans-serif;',
            BASE_FONT_SIZE: 14,
            BASE_BACKGROUND_COLOR: "#171E25",
          }}
          logs={logs}
          variant="dark"
        />
      </Resizable>
    </div>
  );
};

export default Preview;

// editor_primary: "#171E25",
//     editor_secondary: "#1B252D",
//     editor_border: "#131419",
//     editor_third: "#4C5B67",

// import React from "react";
//
// console.log(React);
