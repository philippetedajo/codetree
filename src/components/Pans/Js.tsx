import React, { useEffect } from "react";
import { useDebouncedCallback } from "use-debounce";
import { useAppDispatch } from "../../store/hook";
import {
  update_start,
  update_finished,
} from "../../store/features/editorSlice";
import Editor from "../Editor";
import bundler from "../../bundler";

export const JsTab = () => {
  return <div>Js</div>;
};

export const JsPanel: React.FC = () => {
  const dispatch = useAppDispatch();

  const debounced = useDebouncedCallback(
    async (value) => {
      dispatch(update_start({ type: "js" }));
      const output = await bundler(value);
      dispatch(
        update_finished({
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

  return (
    <Editor
      initialValue=""
      language="javascript"
      onChangeCodeInput={(value: string) => debounced(value)}
    />
  );
};
