import React, { useEffect } from "react";
import MonacoEditor from "@monaco-editor/react";
import { useMonaco } from "../hooks";
import { useAppDispatch, useAppSelector } from "../store/hook";
import {
  editor_state,
  update_editor_code,
} from "../store/features/editorSlice";

type MonacoType = { monacoLanguage: string | undefined; tab: string };

export const Monaco = ({ monacoLanguage, tab }: MonacoType) => {
  const dispatch = useAppDispatch();
  const { monacoInputValue, options } = useAppSelector(editor_state);
  const { onChange, onMount, code } = useMonaco();

  useEffect(() => {
    if (code && code?.length >= 1)
      dispatch(update_editor_code({ type: tab, content: code }));
  }, [code, dispatch, tab]);

  return (
    <MonacoEditor
      onChange={onChange}
      onMount={onMount}
      language={monacoLanguage}
      theme="vs-dark"
      options={options}
      className="h-full"
      // @ts-ignore
      value={monacoInputValue.tabs[tab].data}
    />
  );
};
