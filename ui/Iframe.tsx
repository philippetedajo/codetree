import React, { useRef, useEffect } from "react";
import io from "socket.io-client";
import { useAppDispatch, useAppSelector } from "../store/hook";
import { editor_state, update_logs } from "../store/features/editorSlice";
import {
  compiler_state,
  getCompileCode,
} from "../store/features/compilerSlice";
import { IframeLoaderScreen } from "./IframeLoaderScreen";
import { IframeErrorScreen } from "./IframeErrorScreen";

const Iframe = () => {
  const socket = io("http://localhost:5000");
  const dispatch = useAppDispatch();
  const {
    editorValue: { tabs },
  } = useAppSelector(editor_state);

  const { output, isCompiling, esbuildStatus } = useAppSelector(compiler_state);

  useEffect(() => {
    if (tabs.javascript && esbuildStatus.isReady) {
      setTimeout(async () => {
        dispatch(
          getCompileCode(tabs.javascript.data, tabs.javascript.entryPoints)
        );
      }, 50);
    }
  }, [dispatch, tabs, esbuildStatus.isReady]);

  useEffect(() => {
    setTimeout(async () => {
      await socket.emit("message", {
        html: tabs.html.data,
        css: tabs.css.data,
        javascript: output?.code,
      });
    }, 40);
  }, [socket, output, tabs]);

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
          src="http://localhost:5000"
          sandbox="allow-downloads allow-forms allow-modals allow-pointer-lock allow-popups allow-presentation allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
          allow="accelerometer; camera; encrypted-media; geolocation; gyroscope; microphone; midi; clipboard-read; clipboard-write"
          scrolling="auto"
          frameBorder="0"
          title="previewWindow"
        />
      </div>
    </div>
  );
};

export default Iframe;
