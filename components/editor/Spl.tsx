import React, { useRef, useEffect, useState } from "react";
import Split from "react-split";

import { Hook } from "console-feed";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import {
  editor_state,
  update_console_logs,
  update_iframe_error,
} from "../../store/features/editorSlice";
import Logs from "./Logs";
import { createIframeContent, EditorLoader, ErrorScreen } from "./tools";

const Spl = () => {
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

  console.log(isConsoleOpen);

  return (
    <Split
      sizes={isConsoleOpen ? [60, 40] : [100, 0]}
      minSize={0}
      expandToMin={false}
      gutterSize={10}
      gutterAlign="center"
      snapOffset={30}
      dragInterval={1}
      direction="vertical"
      cursor="row-resize"
      className="h-full"
    >
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
      </div>

      <Logs logs={logs} clearConsole={clearConsole} />
    </Split>
  );
};

export default Spl;
