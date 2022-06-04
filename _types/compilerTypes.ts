export interface CompilerStatus {
  isReady: boolean;
  error: string;
}

export interface CompilerOutput {
  code: string;
  error: string;
}
