import React, { useRef, useEffect, useState } from "react";
import { Resizable } from "re-resizable";
import { Console, Hook } from "console-feed";
import { Icon } from "@iconify/react";
import clearOutlined from "@iconify-icons/ant-design/clear-outlined";
import { useAppDispatch, useAppSelector } from "../store/hook";
import { editor_state } from "../store/features/editorSlice";
import { console_state } from "../store/features/consoleSlice";

const Preview: React.FC = () => {
  const iframe = useRef<any>();
  const dispatch = useAppDispatch();
  const { js, html, css } = useAppSelector(editor_state);
  const { isOpen } = useAppSelector(console_state);

  //local state
  const [logs, setLogs] = useState([]);

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
    if (!js.code.loading) {
      iframe.current.srcdoc = htmlFrameContent;

      setTimeout(() => {
        iframe.current.contentWindow.postMessage(js.code.data, "*");
      }, 50);
    }
  }, [js.code, htmlFrameContent]);

  const clearConsole = () => {
    setLogs([]);
  };

  console.log(logs);

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
        className={`console_style ${isOpen ? "hidden" : "flex flex-col"} `}
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
        <div className="text-white flex justify-end text-sm border-b-2 border-editor_secondary px-5 py-1">
          <div onClick={clearConsole}>
            <Icon className="cursor-pointer" height={20} icon={clearOutlined} />
          </div>
        </div>
        <Console
          styles={{
            BASE_FONT_FAMILY: '"Rubik", sans-serif;',
            BASE_FONT_SIZE: 14,
            BASE_BACKGROUND_COLOR: "#171E25",
            LOG_BORDER: "#4C5B67",
          }}
          logs={logs}
          variant="dark"
        />
      </Resizable>
    </div>
  );
};

export default Preview;
