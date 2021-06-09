import React, { useEffect } from "react";
import { useDebouncedCallback } from "use-debounce";
import { useAppDispatch, useAppSelector } from "../../../store/hook";
import {
  update_async_code_start,
  update_async_code_finished,
  editor_state,
} from "../../../store/features/editorSlice";
import Monaco from "../Monaco";
import bundler from "../../../bundler";
import { _react, _empty, _p5 } from "../templates";

export const JsPanel = () => {
  const dispatch = useAppDispatch();
  const { fetchData, codeEditor } = useAppSelector(editor_state);

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

  let initialValue;

  if (codeEditor.template === "custom") {
    initialValue = fetchData.languages.js.code.data;
  } else {
    initialValue = _empty.languages.js.code.data;

    switch (codeEditor.template) {
      case "react":
        initialValue = _react.languages.js.code.data;
        break;
      case "empty":
        initialValue = _empty.languages.js.code.data;
        break;
      case "p5":
        initialValue = _p5.languages.js.code.data;
        break;
    }
  }

  return (
    <Monaco
      initialValue={initialValue}
      language="javascript"
      onChangeCodeInput={(value: string) => debounced(value)}
    />
  );
};
