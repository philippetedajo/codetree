import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { UpdateCode } from "../../_types/editor_types";
import { _empty } from "../../components/editor/templates";

const initialEditorState = {
  codeEditor: _empty,
  isConsoleOpen: false,
  hasConsoleLogs: false,
  isModalOpen: false,
};

export const editorSlice = createSlice({
  name: "editor",
  initialState: initialEditorState,
  reducers: {
    update_sync_code: (state: any, { payload }: PayloadAction<UpdateCode>) => {
      state.codeEditor.languages[payload.type].code.data = payload.code;
    },
    update_async_code_start: (
      state: any,
      { payload }: PayloadAction<UpdateCode>
    ) => {
      state.codeEditor.languages[payload.type].code.loading = true;
      state.codeEditor.languages[payload.type].code.error = "";
      state.codeEditor.languages[payload.type].code.data = undefined;
    },
    update_async_code_finished: (
      state: any,
      { payload }: PayloadAction<UpdateCode>
    ) => {
      state.codeEditor.languages[payload.type].code.loading = false;
      state.codeEditor.languages[payload.type].code.error = payload.error;
      state.codeEditor.languages[payload.type].code.data = payload.code;
    },
    update_console_logs: (state, action: PayloadAction<boolean>) => {
      state.hasConsoleLogs = action.payload;
    },
    update_template: (state, { payload }) => {
      state.codeEditor = payload;
    },
    update_modal: (state, { payload }) => {
      state.isModalOpen = payload;
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
  update_console_logs,
  update_template,
  toggle_console,
  update_modal,
} = editorSlice.actions;

export const editor_state = (state: RootState) => state.editor;

export default editorSlice.reducer;
