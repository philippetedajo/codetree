import React from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hook";
import {
  editor_state,
  update_sync_code,
} from "../../../store/features/editorSlice";
import Monaco from "../Monaco";
import { useDebouncedCallback } from "use-debounce";

export const CssPanel: React.FC = () => {
  const dispatch = useAppDispatch();

  const { initialMonacoValue } = useAppSelector(editor_state);

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

  return (
    <Monaco
      initialValue={initialMonacoValue.css}
      language="css"
      onChangeCodeInput={(value: string) => debounced(value)}
    />
  );
};
