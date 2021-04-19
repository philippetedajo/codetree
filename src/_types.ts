//interfaces

import { array } from "yup";

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

export interface InitialEditorState extends IObjectKeys {
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

export interface Console {
  isOpen: boolean;
  hasLogs: boolean;
}

export interface LoginForm {
  email: string;
  password: string;
}

export interface RegisterForm {
  email: string;
  password: string;
}
