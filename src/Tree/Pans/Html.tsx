import React from "react";
import { useAppDispatch } from "../../store/hook";
import { update_code } from "../../store/editor/EditorSlice";
import Editor from "../../components/Editor";

export const HtmlTab = () => {
  return <div>Html</div>;
};

export const HtmlPanel = () => {
  const dispatch = useAppDispatch();

  return (
    <Editor
      initialValue=""
      language="html"
      onChangeCodeInput={(value) =>
        dispatch(
          update_code({
            value: value,
            type: "html",
          })
        )
      }
    />
  );
};
