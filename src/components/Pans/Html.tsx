import React from "react";
import { useDebouncedCallback } from "use-debounce";
import { useAppDispatch } from "../../store/hook";
import {
  update_finished,
  update_start,
} from "../../store/features/editorSlice";

import Editor from "../Editor";

export const HtmlTab = () => {
  return <div>Html</div>;
};

export const HtmlPanel: React.FC = () => {
  const dispatch = useAppDispatch();

  const debounced = useDebouncedCallback(
    (value) => {
      dispatch(update_start({ type: "html" }));
      dispatch(
        update_finished({
          code: value,
          type: "html",
          error: "",
        })
      );
    },
    // delay in ms
    1000
  );

  return (
    <Editor
      initialValue=""
      language="html"
      onChangeCodeInput={(value: string) => debounced(value)}
    />
  );
};
