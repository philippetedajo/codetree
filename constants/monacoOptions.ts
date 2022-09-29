import { editor } from "monaco-editor";

export const monacoOptions: editor.IStandaloneEditorConstructionOptions = {
  fontSize: 12,
  fontWeight: "500",
  minimap: {
    enabled: false,
  },
  wordWrap: "on",
  autoClosingBrackets: "always",
  showUnused: true,
  automaticLayout: true,
  tabSize: 2,
  renderLineHighlight: "none",
  scrollbar: { verticalScrollbarSize: 10, verticalSliderSize: 10 },
};
