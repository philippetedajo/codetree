import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { UpdateCode } from "../../_types";
import { emptyTemplate, reactTemplate } from "../../components/templates";

let template = emptyTemplate;

const initialEditorState = {
  template,
  isConsoleOpen: false,
  hasConsoleLogs: false,
};

export const editorSlice = createSlice({
  name: "editor",
  initialState: initialEditorState,
  reducers: {
    update_sync_code: (state: any, { payload }: PayloadAction<UpdateCode>) => {
      state.template[payload.type].code.data = payload.code;
    },
    update_async_code_start: (
      state: any,
      { payload }: PayloadAction<UpdateCode>
    ) => {
      state.template[payload.type].code.loading = true;
      state.template[payload.type].code.error = "";
      state.template[payload.type].code.data = "";
    },
    update_async_code_finished: (
      state: any,
      { payload }: PayloadAction<UpdateCode>
    ) => {
      state.template[payload.type].code.loading = false;
      state.template[payload.type].code.error = payload.error;
      state.template[payload.type].code.data = payload.code;
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
