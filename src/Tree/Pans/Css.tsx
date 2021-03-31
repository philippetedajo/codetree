import React from "react";
import { useAppDispatch } from "../../store/hook";
import { update_code } from "../../store/editor/EditorSlice";
import Editor from "../../components/Editor";

export const CssTab = () => {
  return <div>Css</div>;
};

export const CssPanel = () => {
  const dispatch = useAppDispatch();

  return (
    <Editor
      initialValue=""
      language="css"
      onChangeCodeInput={(value) =>
        dispatch(
          update_code({
            value: value,
            type: "css",
          })
        )
      }
    />
  );
};
