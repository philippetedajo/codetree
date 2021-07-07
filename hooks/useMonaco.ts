import { useRef, useState } from "react";
import { IKeyboardEvent } from "monaco-editor";
import { useDebounce } from "use-debounce";
import { OnChange, OnMount } from "@monaco-editor/react";
import parserHtml from "prettier/parser-html";
import parserCss from "prettier/parser-postcss";
import parserBabel from "prettier/parser-babel";
import prettier from "prettier";

export const useMonaco = () => {
  const codeEditor = useRef<any>();

  const [input, setInput] = useState<string | undefined>("");
  const [code] = useDebounce(input, 1000);

  const onChange: OnChange = (value) => {
    setInput(value);
  };

  const onMount: OnMount = async (monacoEditor, monaco) => {
    codeEditor.current = monacoEditor;

    monaco.editor.defineTheme("myTheme", {
      base: "vs-dark",
      inherit: true,
      rules: [{ background: "1B252D", token: "" }],
      colors: {
        "editor.background": "#1B252D",
      },
    });
    monaco.editor.setTheme("myTheme");

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

    //format code
    function formatOnSave() {
      const unformattedCode = codeEditor.current.getModel().getValue();
      const lang = codeEditor.current.getModel()._languageIdentifier.language;

      let config;

      switch (lang) {
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

    //cleaning up
    return () => handleOnKeyDown.dispose();
  };

  return { onMount, onChange, code };
};
