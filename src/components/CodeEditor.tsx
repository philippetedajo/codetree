import { useRef } from "react";
import MonacoEditor, { OnChange, OnMount } from "@monaco-editor/react";
import { IKeyboardEvent } from "monaco-editor";
import prettier from "prettier";
import parser from "prettier/parser-babel";
import "./styles/code-editor-syntax.css";

interface codeEditorProps {
  initialValue: string;
  language: string;
  onChangeCodeInput(value: string | undefined): void;
}

const CodeEditor: React.FC<codeEditorProps> = ({
  initialValue,
  onChangeCodeInput,
  language,
}) => {
  const codeEditor = useRef<any>();

  const onChange: OnChange = (value) => {
    onChangeCodeInput(value);
  };

  const onMount: OnMount = async (monacoEditor, monaco) => {
    codeEditor.current = monacoEditor;

    const { default: traverse } = await import("@babel/traverse");
    const { parse } = await import("@babel/parser");
    const { default: MonacoJSXHighlighter } = await import(
      "monaco-jsx-highlighter"
    );
    //jsx syntax highlight
    const babelParse = (code: any) =>
      parse(code, { sourceType: "module", plugins: ["jsx"] });

    const monacoJSXHighlighter = new MonacoJSXHighlighter(
      //@ts-ignore
      monaco,
      babelParse,
      traverse,
      monacoEditor
    );

    monacoJSXHighlighter.highLightOnDidChangeModelContent(
      0,
      () => {},
      () => {},
      undefined,
      () => {}
    );

    //format
    function formatOnSave() {
      const unformattedCode = codeEditor.current.getModel().getValue();
      const formattedCode = prettier.format(unformattedCode, {
        parser: "babel",
        plugins: [parser],
        useTabs: false,
        semi: true,
      });
      codeEditor.current.setValue(formattedCode);
    }

    //save command
    let handleOnKeyDown = codeEditor.current.onKeyDown(
      (event: IKeyboardEvent) => {
        if (
          (window.navigator.platform.match("Mac")
            ? event.metaKey
            : event.ctrlKey) &&
          event.code === "KeyS"
        ) {
          event.preventDefault();
          formatOnSave();
        }
      }
    );

    //clearning up
    return () => handleOnKeyDown.dispose();
  };

  return (
    <>
      <MonacoEditor
        value={initialValue}
        onChange={onChange}
        onMount={language === "javascript" ? onMount : undefined}
        language={language}
        theme="vs-dark"
        options={{
          wordWrap: "on",
          minimap: {
            enabled: false,
          },
          showUnused: true, // to reset
          fontSize: 13,
          automaticLayout: true,
          tabSize: 2,
        }}
      />
    </>
  );
};

export default CodeEditor;
