import React from "react";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import { update_code } from "../../store/editor/EditorSlice";
import CodeEditor from "../../components/CodeEditor";

export const JsTab = () => {
  return <div>Js</div>;
};

export const JsPanel = () => {
  const dispatch = useAppDispatch();

  return (
    <CodeEditor
      initialValue=""
      language="javascript"
      onChangeCodeInput={(value) =>
        dispatch(
          update_code({
            value: value,
            type: "js",
          })
        )
      }
    />
  );
};
