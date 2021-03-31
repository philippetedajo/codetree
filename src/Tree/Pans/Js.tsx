import React from "react";
import { useAppDispatch } from "../../store/hook";
import { update_code } from "../../store/editor/EditorSlice";
import Editor from "../../components/Editor";

export const JsTab = () => {
  return <div>Js</div>;
};

export const JsPanel = () => {
  const dispatch = useAppDispatch();

  return (
    <Editor
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
