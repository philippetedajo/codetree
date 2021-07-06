import React, { useEffect } from "react";
import MonacoEditor, { EditorProps } from "@monaco-editor/react";
import { useMonaco } from "../hooks";
import { useAppDispatch, useAppSelector } from "../store/hook";
import {
  editor_state,
  update_editor_code,
} from "../store/features/editorSlice";

export const Monaco = ({ language }: EditorProps) => {
  const dispatch = useAppDispatch();
  const { monacoInputValue, options } = useAppSelector(editor_state);
  const { onChange, onMount, code } = useMonaco();

  useEffect(() => {
    if (code && code?.length >= 1)
      dispatch(update_editor_code({ type: language, content: code }));
  }, [code, dispatch, language]);

  return (
    <MonacoEditor
      onChange={onChange}
      onMount={onMount}
      language={language}
      theme="vs-dark"
      options={options}
      className="h-full"
      // @ts-ignore
      value={monacoInputValue.languages[language].data}
    />
  );
};
