import React, { useRef, useEffect } from "react";
import { FiTerminal } from "react-icons/fi";

import { useAppDispatch, useAppSelector } from "../../store/hook";
import {
  editor_state,
  toggle_logs_tab,
  update_logs,
} from "../../store/features/editorSlice";
import { getCompileCode } from "../../store/features/compilerSlice";
import { createIframeContent } from "../tools";
import { IframeLoaderScreen } from "./IframeLoaderScreen";
import { IframeErrorScreen } from "./IframeErrorScreen";
import { LanguagesInterface } from "../../_types/editorTypes";
import { CompilerOutput, CompilerStatus } from "../../_types/compilerTypes";

interface IframeProps {
  tabs: LanguagesInterface;
  output: CompilerOutput;
  isCompiling: boolean;
  esbuildStatus: CompilerStatus;
}

const IframePanel = ({
  tabs,
  output,
  isCompiling,
  esbuildStatus,
}: IframeProps) => {
  const iframe = useRef<any>();
  const { logs } = useAppSelector(editor_state);
  const dispatch = useAppDispatch();

  const htmlFrameContent = createIframeContent(tabs.css.data, tabs.html.data);

  //=== incoming message
  useEffect(() => {
    window.onmessage = function (response: MessageEvent) {
      if (response.data && response.data.source === "iframe") {
        let errorObject = {
          method: "error",
          id: Date.now(),
          data: [`${response.data.message}`],
        };
        dispatch(update_logs(errorObject));
      }
    };

    if (tabs.javascript && esbuildStatus.isReady) {
      setTimeout(async () => {
        dispatch(
          getCompileCode(tabs.javascript.data, tabs.javascript.entryPoints)
        );
      }, 50);
    }
  }, [dispatch, tabs, esbuildStatus.isReady]);

  //=== outgoing massage
  useEffect(() => {
    iframe.current.srcdoc = htmlFrameContent;

    setTimeout(async () => {
      iframe?.current?.contentWindow?.postMessage(output.code, "*");
    }, 40);
  }, [htmlFrameContent, output]);

  return (
    <div className="iframe-container">
      {/* build error */}
      {output.error ? <IframeErrorScreen err={output.error} /> : ""}

      {/* Loading screen */}
      {isCompiling ? (
        <div className="absolute h-full w-full bg-gray-50 z-40">
          <IframeLoaderScreen />
        </div>
      ) : (
        ""
      )}

      <iframe
        id="super-iframe"
        sandbox="allow-downloads allow-forms allow-modals allow-pointer-lock allow-popups allow-presentation allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
        allow="accelerometer; camera; encrypted-media; geolocation; gyroscope; microphone; midi; clipboard-read; clipboard-write"
        scrolling="auto"
        frameBorder="0"
        ref={iframe}
        title="previewWindow"
        srcDoc={htmlFrameContent}
        onLoad={async () => {
          const Hook = (await import("console-feed")).Hook;
          Hook(
            iframe.current.contentWindow.console,
            (log) => {
              dispatch(update_logs(log));
            },
            false
          );
        }}
      />

      <div className="absolute right-0">
        <div className="flex justify-center items-center">
          <div
            onClick={() => dispatch(toggle_logs_tab())}
            className="flex items-center cursor-pointer"
          >
            <FiTerminal size={18} className="mr-1 " /> Console
          </div>

          <div className="ml-2  w-6">
            {logs.length > 0 && (
              <div className="h-5 w-5 flex justify-center items-center">
                <div className="absolute p-1.5 bg-green-400 rounded-full animate-ping" />
                <div className="absolute p-1 bg-green-400  border-white rounded-full" />
              </div>
            )}
          </div>

          {isCompiling && (
            <div className="ml-10">
              <span className="loader --1" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Iframe = React.memo(IframePanel);

export default Iframe;
