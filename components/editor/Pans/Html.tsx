import React from "react";
import { useDebouncedCallback } from "use-debounce";
import { useAppDispatch, useAppSelector } from "../../../store/hook";
import {
  editor_state,
  update_sync_code,
} from "../../../store/features/editorSlice";

import Monaco from "../Monaco";
import { _empty, _p5, _react } from "../templates";

export const HtmlPanel: React.FC = () => {
  const dispatch = useAppDispatch();

  const {
    codeEditor: { template },
  } = useAppSelector(editor_state);

  const debounced = useDebouncedCallback(
    (value) => {
      dispatch(
        update_sync_code({
          code: value,
          type: "html",
          error: "",
        })
      );
    },
    // delay in ms
    1000
  );

  let initialValue = _empty.html.code.data;

  switch (template) {
    case "react":
      initialValue = _react.html.code.data;
      break;
    case "empty":
      initialValue = _empty.html.code.data;
      break;
    case "p5":
      initialValue = _p5.html.code.data;
      break;
  }

  return (
    <Monaco
      initialValue={initialValue}
      language="html"
      onChangeCodeInput={(value: string) => debounced(value)}
    />
  );
};
