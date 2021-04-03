import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { InitialEditorState, UpdateCode } from "../../_types";

const initialEditorState: InitialEditorState = {
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
      data: "<h2>Start editing and watch the magic happen</h2>",
      error: "",
      loading: false,
    },
    transformer: "html",
  },
};

export const editorSlice = createSlice({
  name: "editor",
  initialState: initialEditorState,
  reducers: {
    update_sync_code: (
      state: InitialEditorState,
      { payload }: PayloadAction<UpdateCode>
    ) => {
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
  },
});

export const {
  update_sync_code,
  update_async_code_start,
  update_async_code_finished,
} = editorSlice.actions;

export const editor_state = (state: RootState) => state.editor;

export default editorSlice.reducer;
