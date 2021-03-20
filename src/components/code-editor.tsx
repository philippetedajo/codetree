import { useRef } from "react";
import MonacoEditor, { OnChange, OnMount } from "@monaco-editor/react";
import { IKeyboardEvent } from "monaco-editor";
import prettier from "prettier";
import parser from "prettier/parser-babel";
import { parse } from "@babel/parser";
import traverse from "@babel/traverse";
import MonacoJSXHighlighter from "monaco-jsx-highlighter";

interface codeEditorProps {
  initialValue: string;
  onChangeCodeInput(value: string | undefined): void;
}

const CodeEditor: React.FC<codeEditorProps> = ({
  initialValue,
  onChangeCodeInput,
}) => {
  const codeEditor = useRef<any>();

  const onChange: OnChange = (value) => {
    onChangeCodeInput(value);
  };

  const onMount: OnMount = (monacoEditor) => {
    codeEditor.current = monacoEditor;

    //jsx syntax highlight
    const babelParse = (code: any) =>
      parse(code, { sourceType: "module", plugins: ["jsx"] });

    const monacoJSXHighlighter = new MonacoJSXHighlighter(
      //@ts-ignore
      window.monaco,
      babelParse,
      traverse,
      monacoEditor
    );

    monacoJSXHighlighter.highLightOnDidChangeModelContent();

    //

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
          console.log(event.metaKey, event.code);
        }
      }
    );

    //clearning up
    return () => handleOnKeyDown.dispose();
  };

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

  return (
    <>
      <MonacoEditor
        value={initialValue}
        onChange={onChange}
        onMount={onMount}
        language="javascript"
        theme="vs-dark"
        height="100vh"
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
