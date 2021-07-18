import React, { useEffect } from "react";
import { SplitEditor } from "../ui/layouts";
import { compiler_state, initEsbuild } from "../store/features/compilerSlice";
import { useAppDispatch, useAppSelector } from "../store/hook";

//Main components
import EditorInput from "../ui/EditorInput";
import ConsoleLog from "../ui/ConsoleLog";
import Iframe from "../ui/Iframe";

const WebModule = () => {
  const dispatch = useAppDispatch();
  const { esbuildStatus } = useAppSelector(compiler_state);

  useEffect(() => {
    if (!esbuildStatus.isReady) {
      dispatch(initEsbuild());
    }
  }, [dispatch, esbuildStatus]);

  return (
    <SplitEditor>
      <EditorInput />
      <div>
        <SplitEditor isVertical={true}>
          <Iframe />
          <ConsoleLog />
        </SplitEditor>
      </div>
    </SplitEditor>
  );
};

export default WebModule;
