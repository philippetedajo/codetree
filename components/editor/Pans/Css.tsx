import React from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hook";
import {
  editor_state,
  update_sync_code,
} from "../../../store/features/editorSlice";
import Monaco from "../Monaco";
import { useDebouncedCallback } from "use-debounce";
import { _empty, _p5, _react } from "../templates";

export const CssPanel: React.FC = () => {
  const dispatch = useAppDispatch();
  const {
    codeEditor: { template },
  } = useAppSelector(editor_state);

  const debounced = useDebouncedCallback(
    (value) => {
      dispatch(
        update_sync_code({
          code: value,
          type: "css",
          error: "",
        })
      );
    },
    // delay in ms
    1000
  );

  let initialValue = _empty.languages.css.code.data;

  switch (template) {
    case "react":
      initialValue = _react.languages.css.code.data;
      break;
    case "empty":
      initialValue = _empty.languages.css.code.data;
      break;
    case "p5":
      initialValue = _p5.languages.css.code.data;
      break;
  }

  return (
    <Monaco
      initialValue={initialValue}
      language="css"
      onChangeCodeInput={(value: string) => debounced(value)}
    />
  );
};
