import React, { useRef, useEffect, useState } from "react";
import { Resizable } from "re-resizable";
import { Hook } from "console-feed";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import {
  editor_state,
  update_console_logs,
  update_iframe_error,
} from "../../store/features/editorSlice";
import Logs from "./Logs";
import { createIframeContent, EditorLoader, ErrorScreen } from "./tools";

const Preview = () => {
  const iframe = useRef<any>();
  const dispatch = useAppDispatch();
  const {
    codeEditor: {
      languages: { js, html, css },
    },
    iframeErr,
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

  const htmlFrameContent = createIframeContent(css.code.data, html.code.data);

  //================================================== listen from incoming message
  useEffect(() => {
    window.onmessage = function (response: MessageEvent) {
      if (response.data && response.data.source === "iframe") {
        let errorObject = {
          method: "error",
          id: Date.now(),
          data: [`${response.data.message}`],
        };

        dispatch(update_iframe_error(response.data.message));
        setLogs((currLogs): any => [...currLogs, errorObject]);
      }
    };
  }, [dispatch]);

  //====================================================== send massage to iframe
  useEffect(() => {
    if (!js.code.loading && js.code.data) {
      iframe.current.srcdoc = htmlFrameContent;

      setTimeout(() => {
        dispatch(update_iframe_error(null));
        iframe?.current?.contentWindow?.postMessage(js.code.data, "*");
      }, 50);
    }
  }, [js.code, htmlFrameContent]);

  const clearConsole = () => {
    setLogs([]);
  };

  return (
    <div className="preview-wrapper">
      {(!js.code.data || iframeErr) && <ErrorScreen err={iframeErr || ""} />}

      {js.code.loading ? (
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
