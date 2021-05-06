import React, { useRef, useState } from "react";
import MonacoEditor, { OnChange, OnMount } from "@monaco-editor/react";
import { IKeyboardEvent } from "monaco-editor";
import prettier from "prettier";
import parserBabel from "prettier/parser-babel";
import parserCss from "prettier/parser-postcss";
import parserHtml from "prettier/parser-html";
import { CodeEditorProps } from "../_types";

const Editor: React.FC<CodeEditorProps> = ({
  initialValue,
  onChangeCodeInput,
  language,
}) => {
  const codeEditor = useRef<any>();
  //local state
  const [ready, setReady] = useState(false);

  const onChange: OnChange = (value) => {
    onChangeCodeInput(value);
  };

  const onMount: OnMount = async (monacoEditor, monaco) => {
    setReady(true);

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
      let config;

      switch (language) {
        case "html":
          config = { parser: "html", plugin: [parserHtml] };
          break;

        case "css":
          config = { parser: "css", plugin: [parserCss] };
          break;

        case "javascript":
          config = { parser: "babel", plugin: [parserBabel] };
          break;

        default:
          break;
      }

      const formattedCode = prettier.format(unformattedCode, {
        parser: config && config.parser,
        plugins: config && config.plugin,
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
    <MonacoEditor
      value={initialValue}
      onChange={onChange}
      onMount={onMount}
      language={language}
      theme="vs-dark"
      options={{
        wordWrap: "on",
        minimap: {
          enabled: false,
        },
        showUnused: true, // to reset
        fontSize: 13.5,
        automaticLayout: true,
        tabSize: 2,
        renderLineHighlight: "none",
        fontWeight: "500",
        autoClosingBrackets: "always",
        scrollbar: { verticalScrollbarSize: 10, verticalSliderSize: 10 },
      }}
    />
  );
};

export default Editor;
