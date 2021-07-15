import React, { useRef, useEffect } from "react";
import { Hook } from "console-feed";
import { useAppDispatch, useAppSelector } from "../store/hook";
import { editor_state, update_logs } from "../store/features/editorSlice";
import {
  compiler_state,
  getCompileCode,
} from "../store/features/compilerSlice";
import { createIframeContent } from "../tools";
import { IframeLoaderScreen } from "./IframeLoaderScreen";
import { IframeErrorScreen } from "./IframeErrorScreen";

export const IFrame = () => {
  const iframe = useRef<any>();
  const dispatch = useAppDispatch();
  const {
    editorValue: { tabs },
  } = useAppSelector(editor_state);

  const { output, isCompiling, esbuildStatus } = useAppSelector(compiler_state);

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
    <div>
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
          sandbox="allow-downloads allow-forms allow-modals allow-pointer-lock allow-popups allow-presentation allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
          allow="accelerometer; camera; encrypted-media; geolocation; gyroscope; microphone; midi; clipboard-read; clipboard-write"
          scrolling="auto"
          frameBorder="0"
          ref={iframe}
          title="previewWindow"
          srcDoc={htmlFrameContent}
          onLoad={() => {
            Hook(
              iframe.current.contentWindow.console,
              (log) => {
                dispatch(update_logs(log));
              },
              false
            );
          }}
        />
      </div>
    </div>
  );
};
