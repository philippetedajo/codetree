export interface Code {
  data: string;
  error: string;
  loading: boolean;
}

export interface LangProg {
  code: Code;
  transformer: string;
}

export interface IObjectKeys {
  [key: string]: LangProg;
}

export interface Pans extends IObjectKeys {
  js: LangProg;
  css: LangProg;
  html: LangProg;
}

export interface UpdateCode {
  code: string;
  type: string;
  error: string;
}

export interface SplitBoxProps {
  direction: "horizontal" | "vertical";
}

export interface CodeEditorProps {
  initialValue: string;
  language: string;
  onChangeCodeInput(value: string | undefined): void;
}
