import React from "react";
import AceEditor from "react-ace";
import { IAceEditorProps } from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";

export const JavascriptEditor = (props: IAceEditorProps) => {
  return <CodeEditor mode="javascript" name={"JS"} {...props} />;
};

const CodeEditor: React.FC<IAceEditorProps> = ({
  mode,
  onChange,
  value,
  name,
}) => {
  return (
    <AceEditor
      mode={mode}
      theme="monokai"
      name={name}
      onChange={onChange}
      fontSize={15}
      height={"33%"}
      width={"100%"}
      value={value}
      showPrintMargin={true}
      showGutter={true}
      tabSize={2}
      setOptions={{
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true,
        enableSnippets: true,
      }}
    />
  );
};

// import MonacoEditor, { OnChange, OnMount } from "@monaco-editor/react";
// import { IKeyboardEvent } from "monaco-editor";
// import prettier from "prettier";
// import parser from "prettier/parser-babel";
// import "./styles/code-editor-syntax.css";

// interface codeEditorProps {
//   initialValue: string;
//   onChangeCodeInput(value: string | undefined): void;
// }

// const CodeEditor: React.FC<codeEditorProps> = ({
//   initialValue,
//   onChangeCodeInput,
// }) => {
//   const codeEditor = useRef<any>();

//   const onChange: OnChange = (value) => {
//     onChangeCodeInput(value);
//   };

//   const onMount: OnMount = async (monacoEditor, monaco) => {
//     codeEditor.current = monacoEditor;

//     const { default: traverse } = await import("@babel/traverse");
//     const { parse } = await import("@babel/parser");
//     const { default: MonacoJSXHighlighter } = await import(
//       "monaco-jsx-highlighter"
//     );

//     //jsx syntax highlight
//     const babelParse = (code: any) =>
//       parse(code, { sourceType: "module", plugins: ["jsx"] });

//     const monacoJSXHighlighter = new MonacoJSXHighlighter(
//       //@ts-ignore
//       monaco,
//       babelParse,
//       traverse,
//       monacoEditor
//     );

//     monacoJSXHighlighter.highLightOnDidChangeModelContent(
//       0,
//       () => {},
//       () => {},
//       undefined,
//       () => {}
//     );

//     //save command
//     let handleOnKeyDown = codeEditor.current.onKeyDown(
//       (event: IKeyboardEvent) => {
//         if (
//           (window.navigator.platform.match("Mac")
//             ? event.metaKey
//             : event.ctrlKey) &&
//           event.code === "KeyS"
//         ) {
//           event.preventDefault();
//           formatOnSave();
//         }
//       }
//     );

//     //clearning up
//     return () => handleOnKeyDown.dispose();
//   };

//   function formatOnSave() {
//     const unformattedCode = codeEditor.current.getModel().getValue();
//     const formattedCode = prettier.format(unformattedCode, {
//       parser: "babel",
//       plugins: [parser],
//       useTabs: false,
//       semi: true,
//     });
//     codeEditor.current.setValue(formattedCode);
//   }

//   return (
//     <>
//       <MonacoEditor
//         value={initialValue}
//         onChange={onChange}
//         onMount={onMount}
//         language="javascript"
//         theme="vs-dark"
//         options={{
//           wordWrap: "on",
//           minimap: {
//             enabled: false,
//           },
//           showUnused: true, // to reset
//           fontSize: 13,
//           automaticLayout: true,
//           tabSize: 2,
//         }}
//       />
//     </>
//   );
// };

// export default CodeEditor;
