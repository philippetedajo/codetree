import React, { useRef, useEffect, useState } from "react";
import { Resizable } from "re-resizable";
import { Hook } from "console-feed";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import {
  editor_state,
  update_console_logs,
} from "../../store/features/editorSlice";
import EditorLoader from "./others/EditorLoader";
import Logs from "./Logs";

const Preview = () => {
  const iframe = useRef<any>();
  const dispatch = useAppDispatch();
  const {
    codeEditor: {
      languages: { js, html, css },
    },
    isConsoleOpen,
  } = useAppSelector(editor_state);

  //local state
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    if (logs.length > 0) {
      dispatch(update_console_logs(true));
    } else {
      dispatch(update_console_logs(false));
    }
  }, [logs, dispatch]);

  const htmlFrameContent = `
  <html lang="en">
  <head>
    <title>Codetree </title>
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

  //====== TODO: listen to income ERROR message of iframe
  useEffect(() => {
    window.onmessage = function (response: MessageEvent) {
      if (response.data && response.data.source === "iframe") {
        let errorObject = {
          method: "error",
          id: Date.now(),
          data: [`${response.data.message}`],
        };
        setLogs((currLogs): any => [...currLogs, errorObject]);
      }
    };
  }, [dispatch]);

  //====== send massage to iframe
  useEffect(() => {
    if (!js.code.loading && js.code.data) {
      iframe.current.srcdoc = htmlFrameContent;

      setTimeout(() => {
        iframe?.current?.contentWindow?.postMessage(js.code.data, "*");
      }, 50);
    }
  }, [js.code, htmlFrameContent]);

  const clearConsole = () => {
    setLogs([]);
  };

  return (
    <div className="preview-wrapper">
      {!js.code.data || js.code.loading ? (
        <EditorLoader />
      ) : (
        <iframe
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
      )}

      <Resizable
        minWidth="100%"
        minHeight="10vh"
        maxHeight="60vh"
        defaultSize={{ width: "100%", height: "40vh" }}
        className={`${
          isConsoleOpen ? "flex flex-col overflow-auto" : "hidden"
        } `}
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
        <Logs logs={logs} clearConsole={clearConsole} />
      </Resizable>
    </div>
  );
};

export default Preview;
