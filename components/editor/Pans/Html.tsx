import React from "react";
import { useDebouncedCallback } from "use-debounce";
import { useAppDispatch, useAppSelector } from "../../../store/hook";
import {
  editor_state,
  update_sync_code,
} from "../../../store/features/editorSlice";

import Monaco from "../Monaco";

export const HtmlPanel: React.FC = () => {
  const dispatch = useAppDispatch();

  const { initialMonacoValue } = useAppSelector(editor_state);

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

  return (
    <Monaco
      initialValue={initialMonacoValue.html}
      language="html"
      onChangeCodeInput={(value: string) => debounced(value)}
    />
  );
};
