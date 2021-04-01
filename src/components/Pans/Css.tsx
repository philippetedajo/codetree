import React from "react";
import { useAppDispatch } from "../../store/hook";
import { update_code } from "../../store/features/editorSlice";
import Editor from "../Editor";
import { useDebouncedCallback } from "use-debounce";

export const CssTab = () => {
  return <div>Css</div>;
};

export const CssPanel: React.FC = () => {
  const dispatch = useAppDispatch();

  const debounced = useDebouncedCallback(
    (value) => {
      dispatch(
        update_code({
          code: value,
          type: "css",
          loading: false,
        })
      );
    },
    // delay in ms
    1000
  );

  return (
    <Editor
      initialValue=""
      language="css"
      onChangeCodeInput={(value: string) => debounced(value)}
    />
  );
};
