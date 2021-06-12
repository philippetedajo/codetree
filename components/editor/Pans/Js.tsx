import React, { useEffect } from "react";
import { useDebouncedCallback } from "use-debounce";
import { useAppDispatch, useAppSelector } from "../../../store/hook";
import {
  editor_state,
  update_sync_code,
} from "../../../store/features/editorSlice";
import Monaco from "../Monaco";

export const JsPanel = () => {
  const dispatch = useAppDispatch();

  const { initialMonacoValue } = useAppSelector(editor_state);

  const debounced = useDebouncedCallback(
    async (value) => {
      dispatch(
        update_sync_code({
          code: value,
          type: "js",
          error: "",
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

  return (
    <Monaco
      initialValue={initialMonacoValue.js}
      language="javascript"
      onChangeCodeInput={(value: string) => debounced(value)}
    />
  );
};
