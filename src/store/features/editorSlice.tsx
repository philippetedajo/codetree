import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Pans, UpdateCode } from "../../_types";

const emptyTemplate = (): Pans => ({
  js: {
    code: {
      data: "",
      error: "",
      loading: false,
    },
    transformer: "js",
  },
  css: {
    code: {
      data: "",
      error: "",
      loading: false,
    },
    transformer: "css",
  },
  html: {
    code: {
      data: `<div id="root">
  <h2>Start editing and watch the magic happen</h2>
</div>
`,
      error: "",
      loading: false,
    },
    transformer: "html",
  },
});

const initialEditorState = {
  ...emptyTemplate(),
  isConsoleOpen: false,
  hasConsoleLogs: false,
};

export const editorSlice = createSlice({
  name: "editor",
  initialState: initialEditorState,
  reducers: {
    update_sync_code: (state: any, { payload }: PayloadAction<UpdateCode>) => {
      state[payload.type].code.data = payload.code;
    },
    update_async_code_start: (
      state: any,
      { payload }: PayloadAction<UpdateCode>
    ) => {
      state[payload.type].code.loading = true;
      state[payload.type].code.error = "";
      state[payload.type].code.data = "";
    },
    update_async_code_finished: (
      state: any,
      { payload }: PayloadAction<UpdateCode>
    ) => {
      state[payload.type].code.loading = false;
      state[payload.type].code.error = payload.error;
      state[payload.type].code.data = payload.code;
    },
    update_console_logs: (state, action: PayloadAction<boolean>) => {
      state.hasConsoleLogs = action.payload;
    },
    toggle_console: (state) => {
      state.isConsoleOpen = !state.isConsoleOpen;
    },
  },
});

export const {
  update_sync_code,
  update_async_code_start,
  update_async_code_finished,
  toggle_console,
  update_console_logs,
} = editorSlice.actions;

export const editor_state = (state: RootState) => state.editor;

export default editorSlice.reducer;
