import React, { useEffect } from "react";
import { useDebouncedCallback } from "use-debounce";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import {
  update_async_code_start,
  update_async_code_finished,
  editor_state,
} from "../../store/features/editorSlice";
import Editor from "../Editor";
import bundler from "../../bundler";
import { _react, _empty } from "../templates";

export const JsPanel: React.FC = () => {
  const dispatch = useAppDispatch();
  const {
    codeEditor: { template },
  } = useAppSelector(editor_state);

  const debounced = useDebouncedCallback(
    async (value) => {
      dispatch(update_async_code_start({ code: "", type: "js", error: "" }));
      const output = await bundler(value);
      dispatch(
        update_async_code_finished({
          code: output.code,
          type: "js",
          error: output.error,
        })
      );
    },
    // delay in ms
    1000
  );

  // When the component goes to be unmounted, we will fetch data if the input has changed.
  useEffect(
    () => () => {
      debounced.flush();
    },
    [debounced]
  );

  let initialValue = _empty.js.code.data;

  switch (template) {
    case "react":
      initialValue = _react.js.code.data;
      break;
    case "empty":
      initialValue = _empty.js.code.data;
      break;
  }

  return (
    <Editor
      initialValue={initialValue}
      language="javascript"
      onChangeCodeInput={(value: string) => debounced(value)}
    />
  );
};
