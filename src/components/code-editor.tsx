import MonacoEditor from "@monaco-editor/react";

interface codeEditorProps {
  initialValue: string;
  onChangeCodeInput(value: string): void;
}

const codeEditor: React.FC<codeEditorProps> = ({
  initialValue,
  onChangeCodeInput,
}) => {
  const handleOnChangeCodeInput = (value: any) => {
    onChangeCodeInput(value);
  };

  return (
    <MonacoEditor
      value={initialValue}
      onChange={handleOnChangeCodeInput}
      language="javascript"
      theme="vs-dark"
      height="400px"
      options={{
        wordWrap: "on",
        minimap: {
          enabled: false,
        },
        showUnused: false, // to reset
        fontSize: 13,
        automaticLayout: true,
      }}
    />
  );
};

export default codeEditor;
